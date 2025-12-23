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

/* __next_internal_action_entry_do_not_use__ [{"402dda27e53330839df612584668f3f31324860f81":"generateFlashcards","404f6a5ed45282d9dc6f388eabb5943915c7bdb32d":"deleteCourse","4055c70924c41a6c5cb03e57498454f3efcb30798a":"generatePracticeExam","4066a91c719d8d1c60f537b9ab4e97e689e6c642fa":"generateQuiz","4084aa933b6d2a0b505a6e37818176cac5a3c3bf16":"uploadPdf","40bdab507ac98151effef3123b27b706eb86239f8a":"generateCrossword","40e7f30e73dcdbdbb44397332eb4f8c6cd0a668f4d":"generateStudyGuide","60b6d560014f392c11a35ec897bc5fca409e22a5e3":"renameCourse","707cfbd001cbb034b7ceee4ca8f26a8b6e0499556d":"saveQuizResult","70de0ef2d52609a16e74afdd2b2111412777bc12e3":"saveExamResult"},"",""] */ __turbopack_context__.s([
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
        // CRASH-PROOF EXTRACTION LOGIC
        const text = await new Promise((resolve, reject)=>{
            // FIX: Tell TypeScript to ignore the next line because '1' is correct for this library
            // @ts-ignore
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
        const finalContent = typeof text === 'string' && text.trim().length > 0 ? text : "⚠️ Text could not be extracted. This PDF might be an image scan.";
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
        // Build the Grid Manually
        const gridSize = 12;
        let grid = Array(gridSize).fill(null).map(()=>Array(gridSize).fill(""));
        let placedWords = [];
        terms.sort((a, b)=>b.word.length - a.word.length);
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
        for(let i = 1; i < terms.length; i++){
            const currentTerm = terms[i];
            const word = currentTerm.word;
            let placed = false;
            for (const placedWord of placedWords){
                if (placed) break;
                for(let j = 0; j < word.length; j++){
                    if (placed) break;
                    for(let k = 0; k < placedWord.word.length; k++){
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
                            if (newRow < 0 || newCol < 0 || newDir === 'across' && newCol + word.length > gridSize || newDir === 'down' && newRow + word.length > gridSize) {
                                continue;
                            }
                            let collision = false;
                            for(let c = 0; c < word.length; c++){
                                const r = newDir === 'across' ? newRow : newRow + c;
                                const col = newDir === 'across' ? newCol + c : newCol;
                                if (grid[r][col] !== "" && grid[r][col] !== word[c]) {
                                    collision = true;
                                    break;
                                }
                            }
                            if (!collision) {
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
        const numbers = Array(gridSize).fill(null).map(()=>Array(gridSize).fill(0));
        const clues = {
            across: [],
            down: []
        };
        let clueNum = 1;
        placedWords.sort((a, b)=>a.row - b.row || a.col - b.col);
        placedWords.forEach((pw)=>{
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
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(uploadPdf, "4084aa933b6d2a0b505a6e37818176cac5a3c3bf16", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCourse, "404f6a5ed45282d9dc6f388eabb5943915c7bdb32d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(renameCourse, "60b6d560014f392c11a35ec897bc5fca409e22a5e3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateStudyGuide, "40e7f30e73dcdbdbb44397332eb4f8c6cd0a668f4d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateQuiz, "4066a91c719d8d1c60f537b9ab4e97e689e6c642fa", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateFlashcards, "402dda27e53330839df612584668f3f31324860f81", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generatePracticeExam, "4055c70924c41a6c5cb03e57498454f3efcb30798a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateCrossword, "40bdab507ac98151effef3123b27b706eb86239f8a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(saveQuizResult, "707cfbd001cbb034b7ceee4ca8f26a8b6e0499556d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(saveExamResult, "70de0ef2d52609a16e74afdd2b2111412777bc12e3", null);
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
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
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "402dda27e53330839df612584668f3f31324860f81",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateFlashcards"],
    "404f6a5ed45282d9dc6f388eabb5943915c7bdb32d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCourse"],
    "4055c70924c41a6c5cb03e57498454f3efcb30798a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generatePracticeExam"],
    "4066a91c719d8d1c60f537b9ab4e97e689e6c642fa",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateQuiz"],
    "4084aa933b6d2a0b505a6e37818176cac5a3c3bf16",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uploadPdf"],
    "40bdab507ac98151effef3123b27b706eb86239f8a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateCrossword"],
    "40e7f30e73dcdbdbb44397332eb4f8c6cd0a668f4d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateStudyGuide"],
    "60b6d560014f392c11a35ec897bc5fca409e22a5e3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renameCourse"],
    "707cfbd001cbb034b7ceee4ca8f26a8b6e0499556d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveQuizResult"],
    "70de0ef2d52609a16e74afdd2b2111412777bc12e3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveExamResult"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__749d6923._.js.map