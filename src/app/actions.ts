// src/app/actions.ts
'use server'

import { db } from "../lib/db";
import { revalidatePath } from "next/cache";
import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";

export async function uploadPdf(formData: FormData) {
  try {
    console.log("1. Starting upload...");

    const file = formData.get("file") as File;
    if (!file) throw new Error("No file found");

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    console.log("2. Extracting text with pdf2json...");

    // @ts-ignore
    const PDFParser = require("pdf2json");

    const text = await new Promise<string>((resolve, reject) => {
        const parser = new PDFParser(null, 1); // 1 = Raw Text Mode

        parser.on("pdfParser_dataError", (errData: any) => {
            console.error(errData.parserError);
            reject(errData.parserError);
        });

        parser.on("pdfParser_dataReady", () => {
            const raw = parser.getRawTextContent();
            resolve(raw);
        });

        parser.parseBuffer(buffer);
    });

    const finalContent = text.trim().length > 0 ? text : "No text found in PDF.";

    console.log("3. Saving to DB...", finalContent.slice(0, 50)); 

    await db.course.create({
      data: {
        title: file.name,
        content: finalContent,
      }
    });

    revalidatePath("/");
    console.log("4. Done!");
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
      `You are a strict academic tutor. Create a structured study guide for the provided text.
       
       Rules:
       1. OUTPUT STRICT HTML ONLY. Do not use Markdown.
       2. Use <h1> for the main title.
       3. Use <h2> for section headers with emojis.
       4. Use <ul>/<li> for bullets.
       5. Use <strong> for key terms.
       
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
      temperature: 0.1, // Low temperature for factual accuracy
      modelKwargs: { response_format: { type: "json_object" } } // Force JSON
    });

    const prompt = PromptTemplate.fromTemplate(
      `You are a teacher. Generate 5 difficult multiple-choice questions based on the provided text.
       
       Return the output as a JSON object with this exact structure:
       {{
         "questions": [
           {{
             "question": "Question text here",
             "options": ["Option A", "Option B", "Option C", "Option D"],
             "answer": "Option B"
           }}
         ]
       }}
       
       Text content: {text}`
    );

    const chain = prompt.pipe(model);
    const response = await chain.invoke({ text: note.content.slice(0, 15000) });
    
    // Parse the JSON string from OpenAI
    const content = typeof response.content === 'string' ? response.content : JSON.stringify(response.content);
    const data = JSON.parse(content);
    
    // Save to Database
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
    await db.quizResult.create({
      data: {
        courseId,
        score,
        total,
      },
    });
    revalidatePath(`/notes/${courseId}`); // Refresh the page to show the new badge
  } catch (error) {
    console.error("Save Error:", error);
  }
}