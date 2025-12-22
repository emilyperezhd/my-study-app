'use server'

import { db } from "../lib/db";
import { revalidatePath } from "next/cache";
import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";

// @ts-ignore
import PDFParser from "pdf2json";

// --- 1. UPLOAD ACTION ---
export async function uploadPdf(formData: FormData) {
  try {
    const file = formData.get("file") as File;
    if (!file) throw new Error("No file found");

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const text = await new Promise<string>((resolve, reject) => {
        const parser = new PDFParser(null, 1);

        parser.on("pdfParser_dataError", (errData: any) => {
            console.error("PDF Parser Error:", errData.parserError);
            resolve(""); 
        });

        parser.on("pdfParser_dataReady", (pdfData: any) => {
            try {
                if (!pdfData || !pdfData.formImage || !pdfData.formImage.Pages) {
                    resolve("");
                    return;
                }
                let extractedText = "";
                // @ts-ignore
                pdfData.formImage.Pages.forEach((page) => {
                     // @ts-ignore
                    if (page.Texts) {
                         // @ts-ignore
                        page.Texts.forEach((textItem) => {
                             // @ts-ignore
                            if (textItem.R) {
                                // @ts-ignore
                                textItem.R.forEach((run) => {
                                    if (run.T) extractedText += decodeURIComponent(run.T) + " ";
                                });
                            }
                        });
                    }
                    extractedText += "\n";
                });
                resolve(extractedText);
            } catch (error) {
                console.error("Manual extraction failed:", error);
                resolve(""); 
            }
        });

        try {
            parser.parseBuffer(buffer);
        } catch (e) {
            console.error("Buffer error:", e);
            resolve("");
        }
    });

    const finalContent = typeof text === 'string' && text.trim().length > 0 
        ? text 
        : "⚠️ Text could not be extracted.";

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

// --- 2. MANAGEMENT ACTIONS ---

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

// --- 3. GENERATORS ---

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

// --- SMART CROSSWORD GENERATOR ---
// Uses a custom algorithm to build the grid instead of trusting the AI to draw it.
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

    // 1. Get just the words and clues
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
    
    const terms = data.terms;

    // 2. Build the Grid Manually (Simple Layout Algorithm)
    const gridSize = 12; // Slightly larger to fit more words
    let grid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(""));
    let placedWords = [] as any[];

    // Sort by length (longest first)
    terms.sort((a: any, b: any) => b.word.length - a.word.length);

    // Place first word in center
    const firstWord = terms[0];
    if (firstWord) {
        const startCol = Math.floor((gridSize - firstWord.word.length) / 2);
        const startRow = Math.floor(gridSize / 2);
        for (let i = 0; i < firstWord.word.length; i++) {
            grid[startRow][startCol + i] = firstWord.word[i];
        }
        placedWords.push({ ...firstWord, row: startRow, col: startCol, dir: 'across' });
    }

    // Try to place other words
    for (let i = 1; i < terms.length; i++) {
        const currentTerm = terms[i];
        const word = currentTerm.word;
        let placed = false;

        // Try to find an intersection
        for (const placedWord of placedWords) {
            if (placed) break;
            
            // Check every letter overlap
            for (let j = 0; j < word.length; j++) {
                if (placed) break;
                for (let k = 0; k < placedWord.word.length; k++) {
                    if (word[j] === placedWord.word[k]) {
                        // Found a common letter!
                        // If placed word is Across, we try Down. If Down, we try Across.
                        const newDir = placedWord.dir === 'across' ? 'down' : 'across';
                        
                        // Calculate potential start pos
                        let newRow = placedWord.row;
                        let newCol = placedWord.col;
                        
                        if (placedWord.dir === 'across') {
                            // Placed is horizontal at (row, col). Common char is at (row, col+k)
                            // New word is Vertical. Common char is at index j.
                            // So new word starts at (row - j, col + k)
                            newRow = placedWord.row - j;
                            newCol = placedWord.col + k;
                        } else {
                            // Placed is vertical at (row, col). Common char is at (row+k, col)
                            // New word is Horizontal. Common char is at index j.
                            // So new word starts at (row + k, col - j)
                            newRow = placedWord.row + k;
                            newCol = placedWord.col - j;
                        }

                        // Validate Bounds
                        if (newRow < 0 || newCol < 0 || 
                            (newDir === 'across' && newCol + word.length > gridSize) ||
                            (newDir === 'down' && newRow + word.length > gridSize)) {
                            continue;
                        }

                        // Validate Collisions
                        let collision = false;
                        for (let c = 0; c < word.length; c++) {
                            const r = newDir === 'across' ? newRow : newRow + c;
                            const col = newDir === 'across' ? newCol + c : newCol;
                            
                            // Cell must be empty OR match exactly
                            if (grid[r][col] !== "" && grid[r][col] !== word[c]) {
                                collision = true;
                                break;
                            }
                        }

                        if (!collision) {
                            // Place it!
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

    // 3. Generate Final Output Structure
    const numbers = Array(gridSize).fill(null).map(() => Array(gridSize).fill(0));
    const clues = { across: [] as any[], down: [] as any[] };
    let clueNum = 1;

    // Sort placed words by position to number them correctly (reading order)
    placedWords.sort((a, b) => (a.row - b.row) || (a.col - b.col));

    placedWords.forEach((pw) => {
        // Assign number if not exists
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
    await db.quizResult.create({
      data: { courseId, score, total },
    });
    revalidatePath(`/notes/${courseId}`);
  } catch (error) {
    console.error("Save Error:", error);
  }
}

export async function saveExamResult(courseId: string, score: number, total: number) {
  try {
    await db.examResult.create({
      data: { courseId, score, total },
    });
    revalidatePath(`/notes/${courseId}`);
  } catch (error) {
    console.error("Exam Save Error:", error);
  }
}