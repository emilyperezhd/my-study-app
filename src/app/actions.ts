'use server'

import { db } from "../lib/db";
import { revalidatePath } from "next/cache";
import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";

// @ts-ignore
import PDFParser from "pdf2json";

export async function uploadPdf(formData: FormData) {
  try {
    const file = formData.get("file") as File;
    if (!file) throw new Error("No file found");

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // --- ORIGINAL METHOD (With Crash Protection) ---
    const text = await new Promise<string>((resolve, reject) => {
        const parser = new PDFParser(null, 1); // 1 = Raw Text Mode

        parser.on("pdfParser_dataError", (errData: any) => {
            console.error(errData.parserError);
            resolve(""); // If it fails, just return empty text (don't crash)
        });

        parser.on("pdfParser_dataReady", () => {
            try {
                // This is the line that was crashing on specific files.
                // We wrap it so if it fails, we just save a placeholder message.
                const raw = parser.getRawTextContent();
                resolve(raw);
            } catch (error) {
                console.error("Text extraction error:", error);
                resolve("Text could not be extracted from this specific PDF.");
            }
        });

        // Start parsing
        try {
            parser.parseBuffer(buffer);
        } catch (e) {
            resolve("");
        }
    });
    // --------------------------------

    // If text is empty (or failed), use a placeholder
    const finalContent = typeof text === 'string' && text.trim().length > 0 
        ? text 
        : "Text could not be extracted from this PDF.";

    await db.course.create({
      data: {
        title: file.name,
        content: finalContent,
      }
    });

    revalidatePath("/");
  } catch (error) {
    console.error("Upload Error:", error);
  }
}

export async function generateStudyGuide(id: string) {
  try {
    const note = await db.course.findUnique({ where: { id: id } });
    if (!note || !note.content) throw new Error("Note not found");

    const model = new ChatOpenAI({ 
      modelName: "gpt-4o-mini", 
      openAIApiKey: process.env.OPENAI_API_KEY 
    });

    const prompt = PromptTemplate.fromTemplate(
      `You are a strict academic tutor. Create a structured study guide.
       Rules: HTML format only, use <h1>, <h2>, <ul>, <strong>. No Markdown.
       Text: {text}`
    );

    const chain = prompt.pipe(model);
    const response = await chain.invoke({ text: note.content.slice(0, 15000) });

    await db.course.update({
      where: { id: id },
      data: { summary: response.content as string }
    });

    revalidatePath(`/notes/${id}`);
  } catch (error) {
    console.error("AI Study Guide Error:", error);
  }
}

export async function generateQuiz(id: string) {
  try {
    const note = await db.course.findUnique({ where: { id: id } });
    if (!note || !note.content) throw new Error("Note not found");

    const model = new ChatOpenAI({
      modelName: "gpt-4o-mini",
      openAIApiKey: process.env.OPENAI_API_KEY,
      temperature: 0.1, 
      modelKwargs: { response_format: { type: "json_object" } } 
    });

    const prompt = PromptTemplate.fromTemplate(
      `Generate 5 difficult multiple-choice questions based on the provided text.
       Return JSON object: {{ "questions": [ {{ "question": "...", "options": ["..."], "answer": "..." }} ] }}
       Text: {text}`
    );

    const chain = prompt.pipe(model);
    const response = await chain.invoke({ text: note.content.slice(0, 15000) });
    
    const content = typeof response.content === 'string' ? response.content : JSON.stringify(response.content);
    const data = JSON.parse(content);
    
    await db.question.createMany({
      data: data.questions.map((q: any) => ({
        courseId: id,
        question: q.question,
        options: q.options,
        answer: q.answer
      }))
    });

    revalidatePath(`/notes/${id}`);
  } catch (error) {
    console.error("AI Quiz Error:", error);
  }
}

export async function saveQuizResult(courseId: string, score: number, total: number) {
  try {
    // We already fixed the database table issue, so this will work now.
    await db.quizResult.create({
      data: {
        courseId,
        score,
        total,
      },
    });
    revalidatePath(`/notes/${courseId}`);
  } catch (error) {
    console.error("Save Error:", error);
  }
}

export async function deleteCourse(id: string) {
  try {
    await db.course.delete({
      where: { id: id }
    });
    revalidatePath("/");
  } catch (error) {
    console.error("Delete Error:", error);
  }
}

export async function renameCourse(id: string, newTitle: string) {
  try {
    await db.course.update({
      where: { id: id },
      data: { title: newTitle }
    });
    revalidatePath("/");
  } catch (error) {
    console.error("Rename Error:", error);
  }
}

// --- FLASHCARD GENERATOR ---
export async function generateFlashcards(id: string) {
  try {
    const note = await db.course.findUnique({ where: { id: id } });
    if (!note || !note.content) throw new Error("Note not found");

    const model = new ChatOpenAI({
      modelName: "gpt-4o-mini",
      openAIApiKey: process.env.OPENAI_API_KEY,
      temperature: 0.1, 
      modelKwargs: { response_format: { type: "json_object" } } 
    });

    // Prompt for JSON Flashcards
    const prompt = PromptTemplate.fromTemplate(
      `Generate 15 study flashcards based on the provided text.
       Focus on key definitions, formulas, and concepts.
       Return JSON object: {{ "flashcards": [ {{ "front": "Term", "back": "Definition" }} ] }}
       Text: {text}`
    );

    const chain = prompt.pipe(model);
    const response = await chain.invoke({ text: note.content.slice(0, 15000) });
    
    const content = typeof response.content === 'string' ? response.content : JSON.stringify(response.content);
    const data = JSON.parse(content);
    
    // Save to DB
    await db.flashcard.createMany({
      data: data.flashcards.map((f: any) => ({
        courseId: id,
        front: f.front,
        back: f.back
      }))
    });

    revalidatePath(`/notes/${id}`);
  } catch (error) {
    console.error("Flashcard Gen Error:", error);
  }
}