module.exports = [
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/src/lib/db.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
// This weird code prevents the "Too many connections" error
const globalForPrisma = /*TURBOPACK member replacement*/ __turbopack_context__.g;
const db = globalForPrisma.prisma || new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = db;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:events [external] (node:events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:events", () => require("node:events"));

module.exports = mod;
}),
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/node:process [external] (node:process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:process", () => require("node:process"));

module.exports = mod;
}),
"[externals]/node:console [external] (node:console, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:console", () => require("node:console"));

module.exports = mod;
}),
"[project]/src/app/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4029b1f2a07c9a7d620d4b958168233797a4861b20":"uploadPdf","405f0c08a6259be969c69361ec5853ab9d7ccfe00c":"generateCrossword","409078de68a41a43e66f0601878397a73538990768":"generateStudyGuide","409b10a8f76ebde8a9c653283fd0b8db06b04e0359":"deleteCourse","40b1056ec51f8d9f6ad6b2a3e1b600180be311da8d":"generateFlashcards","40f43fc974ff6928b7b3a2e6912cea9dbb69f4517b":"generateQuiz","40fb690e8484cf7700be5874e06ca30bec5ad4966b":"generatePracticeExam","604d9ab2e8562919b8dafb514e563e8e65bc7d7f81":"renameCourse","707237374e2ca69a57c875b3ea679e9f2e612c7182":"saveQuizResult","70aae445aa96797072f5882989150971aec1840174":"saveExamResult"},"",""] */ __turbopack_context__.s([
    "deleteCourse",
    ()=>deleteCourse,
    "generateCrossword",
    ()=>generateCrossword,
    "generateFlashcards",
    ()=>generateFlashcards,
    "generatePracticeExam",
    ()=>generatePracticeExam,
    "generateQuiz",
    ()=>generateQuiz,
    "generateStudyGuide",
    ()=>generateStudyGuide,
    "renameCourse",
    ()=>renameCourse,
    "saveExamResult",
    ()=>saveExamResult,
    "saveQuizResult",
    ()=>saveQuizResult,
    "uploadPdf",
    ()=>uploadPdf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$openai$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@langchain/openai/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$openai$2f$dist$2f$chat_models$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/openai/dist/chat_models/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$prompts$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/prompts/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$prompts$2f$prompt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/prompts/prompt.js [app-rsc] (ecmascript)");
// @ts-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf2json$2f$dist$2f$pdfparser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf2json/dist/pdfparser.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function uploadPdf(formData) {
    try {
        const file = formData.get("file");
        if (!file) throw new Error("No file found");
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const text = await new Promise((resolve, reject)=>{
            const parser = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf2json$2f$dist$2f$pdfparser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](null, 1);
            parser.on("pdfParser_dataError", (errData)=>{
                console.error("PDF Parser Error:", errData.parserError);
                resolve("");
            });
            parser.on("pdfParser_dataReady", (pdfData)=>{
                try {
                    if (!pdfData || !pdfData.formImage || !pdfData.formImage.Pages) {
                        resolve("");
                        return;
                    }
                    let extractedText = "";
                    // @ts-ignore
                    pdfData.formImage.Pages.forEach((page)=>{
                        // @ts-ignore
                        if (page.Texts) {
                            // @ts-ignore
                            page.Texts.forEach((textItem)=>{
                                // @ts-ignore
                                if (textItem.R) {
                                    // @ts-ignore
                                    textItem.R.forEach((run)=>{
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
        const finalContent = typeof text === 'string' && text.trim().length > 0 ? text : "⚠️ Text could not be extracted.";
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].course.create({
            data: {
                title: file.name,
                content: finalContent
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
    } catch (error) {
        console.error("Upload Error:", error);
    }
}
async function deleteCourse(id) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].course.delete({
            where: {
                id: id
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
    } catch (error) {
        console.error("Delete Error:", error);
    }
}
async function renameCourse(id, newTitle) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].course.update({
            where: {
                id: id
            },
            data: {
                title: newTitle
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
    } catch (error) {
        console.error("Rename Error:", error);
    }
}
async function generateStudyGuide(id) {
    try {
        const note = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].course.findUnique({
            where: {
                id: id
            }
        });
        if (!note || !note.content) throw new Error("Note not found");
        const model = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$openai$2f$dist$2f$chat_models$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ChatOpenAI"]({
            modelName: "gpt-4o-mini",
            openAIApiKey: process.env.OPENAI_API_KEY
        });
        const prompt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$prompts$2f$prompt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PromptTemplate"].fromTemplate(`You are a strict academic tutor. Create a structured study guide.
       Rules: HTML format only, use <h1>, <h2>, <ul>, <strong>. No Markdown.
       Text: {text}`);
        const chain = prompt.pipe(model);
        const response = await chain.invoke({
            text: note.content.slice(0, 25000)
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].course.update({
            where: {
                id: id
            },
            data: {
                summary: response.content
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/notes/${id}`);
    } catch (error) {
        console.error("AI Study Guide Error:", error);
    }
}
async function generateQuiz(id) {
    try {
        const note = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].course.findUnique({
            where: {
                id: id
            }
        });
        if (!note || !note.content) throw new Error("Note not found");
        const model = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$openai$2f$dist$2f$chat_models$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ChatOpenAI"]({
            modelName: "gpt-4o-mini",
            openAIApiKey: process.env.OPENAI_API_KEY,
            temperature: 0.1,
            modelKwargs: {
                response_format: {
                    type: "json_object"
                }
            }
        });
        const prompt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$prompts$2f$prompt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PromptTemplate"].fromTemplate(`Generate 5 difficult multiple-choice questions based on the provided text.
       Return JSON object: {{ "questions": [ {{ "question": "...", "options": ["..."], "answer": "..." }} ] }}
       Text: {text}`);
        const chain = prompt.pipe(model);
        const response = await chain.invoke({
            text: note.content.slice(0, 25000)
        });
        const content = typeof response.content === 'string' ? response.content : JSON.stringify(response.content);
        const data = JSON.parse(content);
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].question.createMany({
            data: data.questions.map((q)=>({
                    courseId: id,
                    question: q.question,
                    options: q.options,
                    answer: q.answer
                }))
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/notes/${id}`);
    } catch (error) {
        console.error("AI Quiz Error:", error);
    }
}
async function generateFlashcards(id) {
    try {
        const note = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].course.findUnique({
            where: {
                id: id
            }
        });
        if (!note || !note.content) throw new Error("Note not found");
        const model = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$openai$2f$dist$2f$chat_models$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ChatOpenAI"]({
            modelName: "gpt-4o-mini",
            openAIApiKey: process.env.OPENAI_API_KEY,
            temperature: 0.1,
            modelKwargs: {
                response_format: {
                    type: "json_object"
                }
            }
        });
        const prompt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$prompts$2f$prompt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PromptTemplate"].fromTemplate(`Generate 15 study flashcards based on the provided text.
       Focus on key definitions, formulas, and concepts.
       Return JSON object: {{ "flashcards": [ {{ "front": "Term", "back": "Definition" }} ] }}
       Text: {text}`);
        const chain = prompt.pipe(model);
        const response = await chain.invoke({
            text: note.content.slice(0, 25000)
        });
        const content = typeof response.content === 'string' ? response.content : JSON.stringify(response.content);
        const data = JSON.parse(content);
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].flashcard.createMany({
            data: data.flashcards.map((f)=>({
                    courseId: id,
                    front: f.front,
                    back: f.back
                }))
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/notes/${id}`);
    } catch (error) {
        console.error("Flashcard Gen Error:", error);
    }
}
async function generatePracticeExam(id) {
    try {
        const note = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].course.findUnique({
            where: {
                id: id
            }
        });
        if (!note || !note.content) throw new Error("Note not found");
        const model = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$openai$2f$dist$2f$chat_models$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ChatOpenAI"]({
            modelName: "gpt-4o-mini",
            openAIApiKey: process.env.OPENAI_API_KEY,
            temperature: 0.1,
            modelKwargs: {
                response_format: {
                    type: "json_object"
                }
            }
        });
        const prompt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$prompts$2f$prompt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PromptTemplate"].fromTemplate(`Generate a Practice Midterm Exam with 20 difficult multiple-choice questions based on the text.
       Include an "explanation" field explaining the correct answer.
       Return JSON object: 
       {{ "questions": [ {{ "question": "...", "options": ["..."], "answer": "...", "explanation": "..." }} ] }}
       Text: {text}`);
        const chain = prompt.pipe(model);
        const response = await chain.invoke({
            text: note.content.slice(0, 30000)
        });
        const content = typeof response.content === 'string' ? response.content : JSON.stringify(response.content);
        const data = JSON.parse(content);
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].examQuestion.createMany({
            data: data.questions.map((q)=>({
                    courseId: id,
                    question: q.question,
                    options: q.options,
                    answer: q.answer,
                    explanation: q.explanation
                }))
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/notes/${id}`);
    } catch (error) {
        console.error("Exam Gen Error:", error);
    }
}
async function generateCrossword(id) {
    try {
        const note = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].course.findUnique({
            where: {
                id: id
            }
        });
        if (!note || !note.content) throw new Error("Note not found");
        const model = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$openai$2f$dist$2f$chat_models$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ChatOpenAI"]({
            modelName: "gpt-4o",
            openAIApiKey: process.env.OPENAI_API_KEY,
            temperature: 0.2,
            modelKwargs: {
                response_format: {
                    type: "json_object"
                }
            }
        });
        // 1. Get just the words and clues
        const prompt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$prompts$2f$prompt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PromptTemplate"].fromTemplate(`Extract 20 glossary terms from the text for a crossword puzzle.
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
       
       Text: {text}`);
        const chain = prompt.pipe(model);
        const response = await chain.invoke({
            text: note.content.slice(0, 30000)
        });
        const content = typeof response.content === 'string' ? response.content : JSON.stringify(response.content);
        const data = JSON.parse(content);
        const terms = data.terms;
        // 2. Build the Grid Manually (Simple Layout Algorithm)
        const gridSize = 12; // Slightly larger to fit more words
        let grid = Array(gridSize).fill(null).map(()=>Array(gridSize).fill(""));
        let placedWords = [];
        // Sort by length (longest first)
        terms.sort((a, b)=>b.word.length - a.word.length);
        // Place first word in center
        const firstWord = terms[0];
        if (firstWord) {
            const startCol = Math.floor((gridSize - firstWord.word.length) / 2);
            const startRow = Math.floor(gridSize / 2);
            for(let i = 0; i < firstWord.word.length; i++){
                grid[startRow][startCol + i] = firstWord.word[i];
            }
            placedWords.push({
                ...firstWord,
                row: startRow,
                col: startCol,
                dir: 'across'
            });
        }
        // Try to place other words
        for(let i = 1; i < terms.length; i++){
            const currentTerm = terms[i];
            const word = currentTerm.word;
            let placed = false;
            // Try to find an intersection
            for (const placedWord of placedWords){
                if (placed) break;
                // Check every letter overlap
                for(let j = 0; j < word.length; j++){
                    if (placed) break;
                    for(let k = 0; k < placedWord.word.length; k++){
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
                            if (newRow < 0 || newCol < 0 || newDir === 'across' && newCol + word.length > gridSize || newDir === 'down' && newRow + word.length > gridSize) {
                                continue;
                            }
                            // Validate Collisions
                            let collision = false;
                            for(let c = 0; c < word.length; c++){
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
                                for(let c = 0; c < word.length; c++){
                                    const r = newDir === 'across' ? newRow : newRow + c;
                                    const col = newDir === 'across' ? newCol + c : newCol;
                                    grid[r][col] = word[c];
                                }
                                placedWords.push({
                                    ...currentTerm,
                                    row: newRow,
                                    col: newCol,
                                    dir: newDir
                                });
                                placed = true;
                            }
                        }
                    }
                }
            }
        }
        // 3. Generate Final Output Structure
        const numbers = Array(gridSize).fill(null).map(()=>Array(gridSize).fill(0));
        const clues = {
            across: [],
            down: []
        };
        let clueNum = 1;
        // Sort placed words by position to number them correctly (reading order)
        placedWords.sort((a, b)=>a.row - b.row || a.col - b.col);
        placedWords.forEach((pw)=>{
            // Assign number if not exists
            let num = numbers[pw.row][pw.col];
            if (num === 0) {
                num = clueNum++;
                numbers[pw.row][pw.col] = num;
            }
            if (pw.dir === 'across') {
                clues.across.push({
                    number: num,
                    clue: pw.clue
                });
            } else {
                clues.down.push({
                    number: num,
                    clue: pw.clue
                });
            }
        });
        const finalData = {
            grid,
            numbers,
            clues
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].crossword.create({
            data: {
                courseId: id,
                puzzle: finalData
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/notes/${id}`);
    } catch (error) {
        console.error("Crossword Gen Error:", error);
    }
}
async function saveQuizResult(courseId, score, total) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].quizResult.create({
            data: {
                courseId,
                score,
                total
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/notes/${courseId}`);
    } catch (error) {
        console.error("Save Error:", error);
    }
}
async function saveExamResult(courseId, score, total) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].examResult.create({
            data: {
                courseId,
                score,
                total
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/notes/${courseId}`);
    } catch (error) {
        console.error("Exam Save Error:", error);
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    uploadPdf,
    deleteCourse,
    renameCourse,
    generateStudyGuide,
    generateQuiz,
    generateFlashcards,
    generatePracticeExam,
    generateCrossword,
    saveQuizResult,
    saveExamResult
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(uploadPdf, "4029b1f2a07c9a7d620d4b958168233797a4861b20", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCourse, "409b10a8f76ebde8a9c653283fd0b8db06b04e0359", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(renameCourse, "604d9ab2e8562919b8dafb514e563e8e65bc7d7f81", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateStudyGuide, "409078de68a41a43e66f0601878397a73538990768", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateQuiz, "40f43fc974ff6928b7b3a2e6912cea9dbb69f4517b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateFlashcards, "40b1056ec51f8d9f6ad6b2a3e1b600180be311da8d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generatePracticeExam, "40fb690e8484cf7700be5874e06ca30bec5ad4966b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateCrossword, "405f0c08a6259be969c69361ec5853ab9d7ccfe00c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(saveQuizResult, "707237374e2ca69a57c875b3ea679e9f2e612c7182", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(saveExamResult, "70aae445aa96797072f5882989150971aec1840174", null);
}),
"[project]/src/components/QuizApp.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/QuizApp.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/QuizApp.tsx <module evaluation>", "default");
}),
"[project]/src/components/QuizApp.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/QuizApp.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/QuizApp.tsx", "default");
}),
"[project]/src/components/QuizApp.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuizApp$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/QuizApp.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuizApp$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/QuizApp.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuizApp$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/FlashcardApp.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/FlashcardApp.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/FlashcardApp.tsx <module evaluation>", "default");
}),
"[project]/src/components/FlashcardApp.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/FlashcardApp.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/FlashcardApp.tsx", "default");
}),
"[project]/src/components/FlashcardApp.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FlashcardApp$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/FlashcardApp.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FlashcardApp$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/FlashcardApp.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FlashcardApp$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/ExamApp.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/ExamApp.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ExamApp.tsx <module evaluation>", "default");
}),
"[project]/src/components/ExamApp.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/ExamApp.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ExamApp.tsx", "default");
}),
"[project]/src/components/ExamApp.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExamApp$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ExamApp.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExamApp$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/ExamApp.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExamApp$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/CrosswordApp.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/CrosswordApp.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/CrosswordApp.tsx <module evaluation>", "default");
}),
"[project]/src/components/CrosswordApp.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/CrosswordApp.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/CrosswordApp.tsx", "default");
}),
"[project]/src/components/CrosswordApp.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CrosswordApp$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/CrosswordApp.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CrosswordApp$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/CrosswordApp.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CrosswordApp$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/notes/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40255d6011a6624df39a52063ef35c5cfe1bf62114":"$$RSC_SERVER_ACTION_2","402a91be692d9b09d68995a31edf77d245db9db81c":"$$RSC_SERVER_ACTION_0","405a8647b9ae12dc2393b9863645aeaf626a4e50c0":"$$RSC_SERVER_ACTION_3","4060d7de527aaa22ee3567c7a37b6942aadf151553":"$$RSC_SERVER_ACTION_1","40cf22193ec36e9aa73a4054bb276424c46b4f991f":"$$RSC_SERVER_ACTION_4"},"",""] */ __turbopack_context__.s([
    "$$RSC_SERVER_ACTION_0",
    ()=>$$RSC_SERVER_ACTION_0,
    "$$RSC_SERVER_ACTION_1",
    ()=>$$RSC_SERVER_ACTION_1,
    "$$RSC_SERVER_ACTION_2",
    ()=>$$RSC_SERVER_ACTION_2,
    "$$RSC_SERVER_ACTION_3",
    ()=>$$RSC_SERVER_ACTION_3,
    "$$RSC_SERVER_ACTION_4",
    ()=>$$RSC_SERVER_ACTION_4,
    "default",
    ()=>NotePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuizApp$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/QuizApp.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FlashcardApp$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FlashcardApp.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExamApp$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ExamApp.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CrosswordApp$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CrosswordApp.tsx [app-rsc] (ecmascript)"); // <--- Import Crossword
;
;
;
;
;
;
;
;
;
;
;
const $$RSC_SERVER_ACTION_0 = async function action($$ACTION_CLOSURE_BOUND) {
    var [$$ACTION_ARG_0] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decryptActionBoundArgs"])("402a91be692d9b09d68995a31edf77d245db9db81c", $$ACTION_CLOSURE_BOUND);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateStudyGuide"])($$ACTION_ARG_0);
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_0, "402a91be692d9b09d68995a31edf77d245db9db81c", null);
const $$RSC_SERVER_ACTION_1 = async function action($$ACTION_CLOSURE_BOUND) {
    var [$$ACTION_ARG_0] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decryptActionBoundArgs"])("4060d7de527aaa22ee3567c7a37b6942aadf151553", $$ACTION_CLOSURE_BOUND);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateFlashcards"])($$ACTION_ARG_0);
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_1, "4060d7de527aaa22ee3567c7a37b6942aadf151553", null);
const $$RSC_SERVER_ACTION_2 = async function action($$ACTION_CLOSURE_BOUND) {
    var [$$ACTION_ARG_0] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decryptActionBoundArgs"])("40255d6011a6624df39a52063ef35c5cfe1bf62114", $$ACTION_CLOSURE_BOUND);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateQuiz"])($$ACTION_ARG_0);
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_2, "40255d6011a6624df39a52063ef35c5cfe1bf62114", null);
const $$RSC_SERVER_ACTION_3 = async function action($$ACTION_CLOSURE_BOUND) {
    var [$$ACTION_ARG_0] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decryptActionBoundArgs"])("405a8647b9ae12dc2393b9863645aeaf626a4e50c0", $$ACTION_CLOSURE_BOUND);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generatePracticeExam"])($$ACTION_ARG_0);
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_3, "405a8647b9ae12dc2393b9863645aeaf626a4e50c0", null);
const $$RSC_SERVER_ACTION_4 = async function action($$ACTION_CLOSURE_BOUND) {
    var [$$ACTION_ARG_0] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decryptActionBoundArgs"])("40cf22193ec36e9aa73a4054bb276424c46b4f991f", $$ACTION_CLOSURE_BOUND);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateCrossword"])($$ACTION_ARG_0);
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_4, "40cf22193ec36e9aa73a4054bb276424c46b4f991f", null);
async function NotePage({ params }) {
    const { id } = await params;
    // Fetch everything
    const note = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].course.findUnique({
        where: {
            id: id
        },
        include: {
            questions: true,
            flashcards: true,
            examQuestions: true,
            crosswords: true,
            quizResults: {
                orderBy: {
                    createdAt: 'desc'
                }
            },
            examResults: {
                orderBy: {
                    createdAt: 'desc'
                }
            }
        }
    });
    if (!note) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto p-8 space-y-12 min-h-screen bg-pink-50 font-sans text-gray-800",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b-2 border-pink-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-extrabold text-gray-900 tracking-tight leading-tight",
                                children: note.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/notes/[id]/page.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-white text-pink-500 border border-pink-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm",
                                        children: "Study Set"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/notes/[id]/page.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-pink-400 text-sm font-medium",
                                        children: note.createdAt.toLocaleDateString()
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/notes/[id]/page.tsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/notes/[id]/page.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/notes/[id]/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "text-sm bg-white border-2 border-pink-200 text-pink-500 px-6 py-3 rounded-2xl hover:bg-pink-100 transition shadow-sm font-bold flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "←"
                            }, void 0, false, {
                                fileName: "[project]/src/app/notes/[id]/page.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            " Back to Home"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/notes/[id]/page.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/notes/[id]/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold mb-6 text-gray-800 flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl",
                                children: "✨"
                            }, void 0, false, {
                                fileName: "[project]/src/app/notes/[id]/page.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            " Study Tools"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/notes/[id]/page.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-6 md:grid-cols-2 lg:grid-cols-5 h-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                action: $$RSC_SERVER_ACTION_0.bind(null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encryptActionBoundArgs"])("402a91be692d9b09d68995a31edf77d245db9db81c", id)),
                                className: "h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "group relative bg-green-400 hover:bg-green-500 text-white p-6 rounded-3xl transition w-full h-full text-left shadow-lg shadow-green-100 hover:shadow-xl hover:-translate-y-1 overflow-hidden border-b-4 border-green-600 active:border-b-0 active:translate-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-2 right-2 opacity-20 text-5xl",
                                            children: "📝"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/notes/[id]/page.tsx",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative z-10 mt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-xl mb-1",
                                                    children: "Guide"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/notes/[id]/page.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-green-50 font-medium",
                                                    children: "Summarize"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/notes/[id]/page.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/notes/[id]/page.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/notes/[id]/page.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/notes/[id]/page.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                action: $$RSC_SERVER_ACTION_1.bind(null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encryptActionBoundArgs"])("4060d7de527aaa22ee3567c7a37b6942aadf151553", id)),
                                className: "h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    disabled: note.flashcards.length > 0,
                                    className: `group relative p-6 rounded-3xl text-left w-full h-full transition shadow-lg overflow-hidden border-b-4 active:border-b-0 active:translate-y-1
                ${note.flashcards.length > 0 ? 'bg-white border-2 border-pink-200 text-pink-300 cursor-default' : 'bg-pink-400 hover:bg-pink-500 text-white border-pink-600 shadow-pink-100 hover:shadow-xl hover:-translate-y-1'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-2 right-2 opacity-20 text-5xl",
                                            children: "⚡"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/notes/[id]/page.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative z-10 mt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-xl mb-1",
                                                    children: note.flashcards.length > 0 ? "Ready!" : "Cards"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/notes/[id]/page.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs opacity-90 font-medium",
                                                    children: "Memorize"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/notes/[id]/page.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/notes/[id]/page.tsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/notes/[id]/page.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/notes/[id]/page.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                action: $$RSC_SERVER_ACTION_2.bind(null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encryptActionBoundArgs"])("40255d6011a6624df39a52063ef35c5cfe1bf62114", id)),
                                className: "h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    disabled: note.questions.length > 0,
                                    className: `group relative p-6 rounded-3xl text-left w-full h-full transition shadow-lg overflow-hidden border-b-4 active:border-b-0 active:translate-y-1
                ${note.questions.length > 0 ? 'bg-white border-2 border-blue-200 text-blue-300 cursor-default' : 'bg-blue-400 hover:bg-blue-500 text-white border-blue-600 shadow-blue-100 hover:shadow-xl hover:-translate-y-1'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-2 right-2 opacity-20 text-5xl",
                                            children: "🧪"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/notes/[id]/page.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative z-10 mt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-xl mb-1",
                                                    children: note.questions.length > 0 ? "Ready!" : "Quiz"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/notes/[id]/page.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs opacity-90 font-medium",
                                                    children: "Practice (5Q)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/notes/[id]/page.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/notes/[id]/page.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/notes/[id]/page.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/notes/[id]/page.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                action: $$RSC_SERVER_ACTION_3.bind(null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encryptActionBoundArgs"])("405a8647b9ae12dc2393b9863645aeaf626a4e50c0", id)),
                                className: "h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    disabled: note.examQuestions.length > 0,
                                    className: `group relative p-6 rounded-3xl text-left w-full h-full transition shadow-lg overflow-hidden border-b-4 active:border-b-0 active:translate-y-1
                ${note.examQuestions.length > 0 ? 'bg-white border-2 border-purple-200 text-purple-300 cursor-default' : 'bg-purple-400 hover:bg-purple-500 text-white border-purple-600 shadow-purple-100 hover:shadow-xl hover:-translate-y-1'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-2 right-2 opacity-20 text-5xl",
                                            children: "🎓"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/notes/[id]/page.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative z-10 mt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-xl mb-1",
                                                    children: note.examQuestions.length > 0 ? "Ready!" : "Exam"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/notes/[id]/page.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs opacity-90 font-medium",
                                                    children: "Midterm (20Q)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/notes/[id]/page.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/notes/[id]/page.tsx",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/notes/[id]/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/notes/[id]/page.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                action: $$RSC_SERVER_ACTION_4.bind(null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encryptActionBoundArgs"])("40cf22193ec36e9aa73a4054bb276424c46b4f991f", id)),
                                className: "h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    disabled: note.crosswords.length > 0,
                                    className: `group relative p-6 rounded-3xl text-left w-full h-full transition shadow-lg overflow-hidden border-b-4 active:border-b-0 active:translate-y-1
                ${note.crosswords.length > 0 ? 'bg-white border-2 border-teal-200 text-teal-300 cursor-default' : 'bg-teal-400 hover:bg-teal-500 text-white border-teal-600 shadow-teal-100 hover:shadow-xl hover:-translate-y-1'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-2 right-2 opacity-20 text-5xl",
                                            children: "🧩"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/notes/[id]/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative z-10 mt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-xl mb-1",
                                                    children: note.crosswords.length > 0 ? "Ready!" : "Game"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/notes/[id]/page.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs opacity-90 font-medium",
                                                    children: "Crossword"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/notes/[id]/page.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/notes/[id]/page.tsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/notes/[id]/page.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/notes/[id]/page.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/notes/[id]/page.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/notes/[id]/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            note.crosswords.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "animate-in fade-in slide-in-from-bottom-8 duration-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CrosswordApp$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    puzzleData: note.crosswords[0].puzzle
                }, void 0, false, {
                    fileName: "[project]/src/app/notes/[id]/page.tsx",
                    lineNumber: 151,
                    columnNumber: 12
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/notes/[id]/page.tsx",
                lineNumber: 149,
                columnNumber: 9
            }, this),
            note.flashcards.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-12 animate-in fade-in slide-in-from-bottom-8 duration-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FlashcardApp$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    flashcards: note.flashcards
                }, void 0, false, {
                    fileName: "[project]/src/app/notes/[id]/page.tsx",
                    lineNumber: 158,
                    columnNumber: 12
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/notes/[id]/page.tsx",
                lineNumber: 157,
                columnNumber: 9
            }, this),
            note.examQuestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-12 animate-in fade-in slide-in-from-bottom-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExamApp$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    questions: note.examQuestions,
                    courseId: id
                }, void 0, false, {
                    fileName: "[project]/src/app/notes/[id]/page.tsx",
                    lineNumber: 165,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/notes/[id]/page.tsx",
                lineNumber: 164,
                columnNumber: 9
            }, this),
            note.questions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuizApp$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    questions: note.questions,
                    courseId: id
                }, void 0, false, {
                    fileName: "[project]/src/app/notes/[id]/page.tsx",
                    lineNumber: 172,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/notes/[id]/page.tsx",
                lineNumber: 171,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-8 rounded-3xl shadow-xl border border-pink-100 mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-xl mb-6 text-gray-800 flex items-center gap-2",
                        children: "📊 Progress History"
                    }, void 0, false, {
                        fileName: "[project]/src/app/notes/[id]/page.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            note.examResults.map((result, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center p-4 border border-purple-100 rounded-2xl bg-purple-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-purple-700",
                                                    children: [
                                                        "Midterm Attempt ",
                                                        note.examResults.length - index
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/notes/[id]/page.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-400",
                                                    suppressHydrationWarning: true,
                                                    children: result.createdAt.toLocaleString()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/notes/[id]/page.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/notes/[id]/page.tsx",
                                            lineNumber: 184,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 py-1.5 rounded-full font-bold text-sm bg-white border border-purple-200 text-purple-600 shadow-sm",
                                            children: [
                                                result.score,
                                                " / ",
                                                result.total,
                                                " (",
                                                Math.round(result.score / result.total * 100),
                                                "%)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/notes/[id]/page.tsx",
                                            lineNumber: 188,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, result.id, true, {
                                    fileName: "[project]/src/app/notes/[id]/page.tsx",
                                    lineNumber: 183,
                                    columnNumber: 19
                                }, this)),
                            note.quizResults.map((result, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center p-4 border border-blue-100 rounded-2xl bg-blue-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-blue-700",
                                                    children: [
                                                        "Quiz Attempt ",
                                                        note.quizResults.length - index
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/notes/[id]/page.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-400",
                                                    suppressHydrationWarning: true,
                                                    children: result.createdAt.toLocaleString()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/notes/[id]/page.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/notes/[id]/page.tsx",
                                            lineNumber: 195,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 py-1.5 rounded-full font-bold text-sm bg-white border border-blue-200 text-blue-600 shadow-sm",
                                            children: [
                                                result.score,
                                                " / ",
                                                result.total,
                                                " (",
                                                Math.round(result.score / result.total * 100),
                                                "%)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/notes/[id]/page.tsx",
                                            lineNumber: 199,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, result.id, true, {
                                    fileName: "[project]/src/app/notes/[id]/page.tsx",
                                    lineNumber: 194,
                                    columnNumber: 19
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/notes/[id]/page.tsx",
                        lineNumber: 181,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/notes/[id]/page.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            note.summary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-16 animate-in fade-in slide-in-from-bottom-10 duration-1000",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-12 rounded-[2.5rem] shadow-2xl border border-white relative overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-10 pb-6 border-b-2 border-dashed border-pink-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-extrabold text-gray-900",
                                children: "Study Guide"
                            }, void 0, false, {
                                fileName: "[project]/src/app/notes/[id]/page.tsx",
                                lineNumber: 212,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/notes/[id]/page.tsx",
                            lineNumber: 211,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "prose prose-lg max-w-none text-gray-600 [&>h1]:text-3xl [&>h1]:font-extrabold [&>h1]:text-gray-900 [&>h1]:mt-10 [&>h1]:mb-4 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-green-600 [&>h2]:mt-12 [&>h2]:mb-4 [&>p]:text-lg [&>p]:leading-loose [&>p]:mb-6 [&>li]:text-lg [&>li]:pl-2 [&>li]:marker:text-pink-400 [&>strong]:text-gray-900 [&>strong]:font-black",
                            dangerouslySetInnerHTML: {
                                __html: note.summary.replace(/```html/g, "").replace(/```/g, "")
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/notes/[id]/page.tsx",
                            lineNumber: 214,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/notes/[id]/page.tsx",
                    lineNumber: 210,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/notes/[id]/page.tsx",
                lineNumber: 209,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/notes/[id]/page.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
"[project]/.next-internal/server/app/notes/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/notes/[id]/page.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$notes$2f5b$id$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/notes/[id]/page.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/notes/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/notes/[id]/page.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40255d6011a6624df39a52063ef35c5cfe1bf62114",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$notes$2f5b$id$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_2"],
    "4029b1f2a07c9a7d620d4b958168233797a4861b20",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uploadPdf"],
    "402a91be692d9b09d68995a31edf77d245db9db81c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$notes$2f5b$id$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_0"],
    "405a8647b9ae12dc2393b9863645aeaf626a4e50c0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$notes$2f5b$id$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_3"],
    "405f0c08a6259be969c69361ec5853ab9d7ccfe00c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateCrossword"],
    "4060d7de527aaa22ee3567c7a37b6942aadf151553",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$notes$2f5b$id$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_1"],
    "409078de68a41a43e66f0601878397a73538990768",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateStudyGuide"],
    "409b10a8f76ebde8a9c653283fd0b8db06b04e0359",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCourse"],
    "40b1056ec51f8d9f6ad6b2a3e1b600180be311da8d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateFlashcards"],
    "40cf22193ec36e9aa73a4054bb276424c46b4f991f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$notes$2f5b$id$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_4"],
    "40f43fc974ff6928b7b3a2e6912cea9dbb69f4517b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateQuiz"],
    "40fb690e8484cf7700be5874e06ca30bec5ad4966b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generatePracticeExam"],
    "604d9ab2e8562919b8dafb514e563e8e65bc7d7f81",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renameCourse"],
    "707237374e2ca69a57c875b3ea679e9f2e612c7182",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveQuizResult"],
    "70aae445aa96797072f5882989150971aec1840174",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveExamResult"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$notes$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$notes$2f5b$id$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/notes/[id]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/notes/[id]/page.tsx [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/app/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$notes$2f5b$id$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/notes/[id]/page.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b6fd7d54._.js.map