'use server'

import { db } from "../lib/db";
import { revalidatePath } from "next/cache";
import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";

// --- 1. VERCEL POLYFILLS (CRITICAL FOR PDF PARSING) ---
// This prevents the "DOMMatrix is not defined" error on Vercel
// @ts-ignore
if (!global.DOMMatrix) { global.DOMMatrix = class DOMMatrix { constructor() {} }; }
// @ts-ignore
if (!global.ImageData) { global.ImageData = class ImageData { constructor() {} }; }
// @ts-ignore
if (!global.Path2D) { global.Path2D = class Path2D { constructor() {} }; }

// --- 2. SMART IMPORT ---
let pdfParse = require("pdf-parse");
// Handle Next.js bundling quirks
if (typeof pdfParse !== 'function' && pdfParse.default) {
    pdfParse = pdfParse.default;
}

// -----------------------------------------------------------

// --- 3. UPLOAD ACTION (Using pdf-parse) ---
export async function uploadPdf(formData: FormData) {
  try {
    const file = formData.get("file") as File;
    if (!file) throw new Error("No file found");

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Extract Text using pdf-parse (Promise-based, reliable on Vercel)
    let finalContent = "";
    
    try {
        const data = await pdfParse(buffer);
        if (data && data.text && data.text.trim().length > 0) {
            finalContent = data.text;
        } else {
            finalContent = "⚠️ Text extraction failed. This PDF might be an image scan.";
        }
    } catch (error) {
        console.error("PDF Parsing Error:", error);
        finalContent = "⚠️ Error reading PDF file.";
    }

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

// --- 4. MANAGEMENT ACTIONS ---

export async function deleteCourse(id: string) {
  try {
    await db.course.delete({ where: { id: id } });
    revalidatePath("/");
  } catch (error) {
    console.error("Delete Error:", error);
  }
}

export async function renameCourse(id: string, newTitle: string) {
  try {
    await db.course.update({ where: { id: id }, data: { title: newTitle } });
    revalidatePath("/");
  } catch (error) {
    console.error("Rename Error:", error);
  }
}

// --- 5. GENERATORS ---

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
    const response = await chain.invoke({ text: note.content.slice(0, 25000) });

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
    const response = await chain.invoke({ text: note.content.slice(0, 25000) });
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

    const prompt = PromptTemplate.fromTemplate(
      `Generate 15 study flashcards based on the provided text.
       Focus on key definitions, formulas, and concepts.
       Return JSON object: {{ "flashcards": [ {{ "front": "Term", "back": "Definition" }} ] }}
       Text: {text}`
    );

    const chain = prompt.pipe(model);
    const response = await chain.invoke({ text: note.content.slice(0, 25000) });
    const content = typeof response.content === 'string' ? response.content : JSON.stringify(response.content);
    const data = JSON.parse(content);
    
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

export async function generatePracticeExam(id: string) {
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
      `Generate a Practice Midterm Exam with 20 difficult multiple-choice questions based on the text.
       Include an "explanation" field explaining the correct answer.
       Return JSON object: 
       {{ "questions": [ {{ "question": "...", "options": ["..."], "answer": "...", "explanation": "..." }} ] }}
       Text: {text}`
    );

    const chain = prompt.pipe(model);
    const response = await chain.invoke({ text: note.content.slice(0, 30000) });
    const content = typeof response.content === 'string' ? response.content : JSON.stringify(response.content);
    const data = JSON.parse(content);
    
    await db.examQuestion.createMany({
      data: data.questions.map((q: any) => ({
        courseId: id,
        question: q.question,
        options: q.options,
        answer: q.answer,
        explanation: q.explanation
      }))
    });

    revalidatePath(`/notes/${id}`);
  } catch (error) {
    console.error("Exam Gen Error:", error);
  }
}

export async function generateCrossword(id: string) {
  try {
    const note = await db.course.findUnique({ where: { id: id } });
    if (!note || !note.content) throw new Error("Note not found");

    const model = new ChatOpenAI({
      modelName: "gpt-4o",
      openAIApiKey: process.env.OPENAI_API_KEY,
      temperature: 0.2, 
      modelKwargs: { response_format: { type: "json_object" } } 
    });

    const prompt = PromptTemplate.fromTemplate(
      `Extract 20 glossary terms from the text for a crossword puzzle.
       Rules:
       - Single word answers only (no spaces/hyphens).
       - Max 10 characters per word.
       - Uppercase only.
       
       Return JSON:
       {{
         "terms": [
           {{ "word": "JAVA", "clue": "A programming language" }}
         ]
       }}
       
       Text: {text}`
    );

    const chain = prompt.pipe(model);
    const response = await chain.invoke({ text: note.content.slice(0, 30000) });
    const content = typeof response.content === 'string' ? response.content : JSON.stringify(response.content);
    const data = JSON.parse(content);
    
    // Grid Building Logic
    const terms = data.terms;
    const gridSize = 12; 
    let grid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(""));
    let placedWords = [] as any[];

    terms.sort((a: any, b: any) => b.word.length - a.word.length);

    // Place first word
    const firstWord = terms[0];
    if (firstWord) {
        const startCol = Math.floor((gridSize - firstWord.word.length) / 2);
        const startRow = Math.floor(gridSize / 2);
        for (let i = 0; i < firstWord.word.length; i++) {
            grid[startRow][startCol + i] = firstWord.word[i];
        }
        placedWords.push({ ...firstWord, row: startRow, col: startCol, dir: 'across' });
    }

    // Place remaining words
    for (let i = 1; i < terms.length; i++) {
        const currentTerm = terms[i];
        const word = currentTerm.word;
        let placed = false;

        for (const placedWord of placedWords) {
            if (placed) break;
            for (let j = 0; j < word.length; j++) {
                if (placed) break;
                for (let k = 0; k < placedWord.word.length; k++) {
                    if (word[j] === placedWord.word[k]) {
                        const newDir = placedWord.dir === 'across' ? 'down' : 'across';
                        let newRow = placedWord.row;
                        let newCol = placedWord.col;
                        
                        if (placedWord.dir === 'across') {
                            newRow = placedWord.row - j;
                            newCol = placedWord.col + k;
                        } else {
                            newRow = placedWord.row + k;
                            newCol = placedWord.col - j;
                        }

                        if (newRow < 0 || newCol < 0 || 
                            (newDir === 'across' && newCol + word.length > gridSize) ||
                            (newDir === 'down' && newRow + word.length > gridSize)) {
                            continue;
                        }

                        let collision = false;
                        for (let c = 0; c < word.length; c++) {
                            const r = newDir === 'across' ? newRow : newRow + c;
                            const col = newDir === 'across' ? newCol + c : newCol;
                            if (grid[r][col] !== "" && grid[r][col] !== word[c]) {
                                collision = true;
                                break;
                            }
                        }

                        if (!collision) {
                            for (let c = 0; c < word.length; c++) {
                                const r = newDir === 'across' ? newRow : newRow + c;
                                const col = newDir === 'across' ? newCol + c : newCol;
                                grid[r][col] = word[c];
                            }
                            placedWords.push({ ...currentTerm, row: newRow, col: newCol, dir: newDir });
                            placed = true;
                        }
                    }
                }
            }
        }
    }

    const numbers = Array(gridSize).fill(null).map(() => Array(gridSize).fill(0));
    const clues = { across: [] as any[], down: [] as any[] };
    let clueNum = 1;

    placedWords.sort((a, b) => (a.row - b.row) || (a.col - b.col));

    placedWords.forEach((pw) => {
        let num = numbers[pw.row][pw.col];
        if (num === 0) {
            num = clueNum++;
            numbers[pw.row][pw.col] = num;
        }
        if (pw.dir === 'across') {
            clues.across.push({ number: num, clue: pw.clue });
        } else {
            clues.down.push({ number: num, clue: pw.clue });
        }
    });

    const finalData = { grid, numbers, clues };
    
    await db.crossword.create({
      data: { courseId: id, puzzle: finalData }
    });

    revalidatePath(`/notes/${id}`);
  } catch (error) {
    console.error("Crossword Gen Error:", error);
  }
}

export async function saveQuizResult(courseId: string, score: number, total: number) {
  try {
    await db.quizResult.create({ data: { courseId, score, total } });
    revalidatePath(`/notes/${courseId}`);
  } catch (error) {
    console.error("Save Error:", error);
  }
}

export async function saveExamResult(courseId: string, score: number, total: number) {
  try {
    await db.examResult.create({ data: { courseId, score, total } });
    revalidatePath(`/notes/${courseId}`);
  } catch (error) {
    console.error("Exam Save Error:", error);
  }
}