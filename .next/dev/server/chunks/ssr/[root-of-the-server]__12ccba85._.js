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
"[project]/src/app/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4029b1f2a07c9a7d620d4b958168233797a4861b20":"uploadPdf","405f0c08a6259be969c69361ec5853ab9d7ccfe00c":"generateCrossword","409078de68a41a43e66f0601878397a73538990768":"generateStudyGuide","40b1056ec51f8d9f6ad6b2a3e1b600180be311da8d":"generateFlashcards","40f43fc974ff6928b7b3a2e6912cea9dbb69f4517b":"generateQuiz","40fb690e8484cf7700be5874e06ca30bec5ad4966b":"generatePracticeExam","707237374e2ca69a57c875b3ea679e9f2e612c7182":"saveQuizResult","70aae445aa96797072f5882989150971aec1840174":"saveExamResult"},"",""] */ __turbopack_context__.s([
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
// --- 1. BROWSER MOCKS (Prevents Crashes) ---
// @ts-ignore
if (!/*TURBOPACK member replacement*/ __turbopack_context__.g.DOMMatrix) {
    /*TURBOPACK member replacement*/ __turbopack_context__.g.DOMMatrix = class DOMMatrix {
        constructor(){}
    };
}
// @ts-ignore
if (!/*TURBOPACK member replacement*/ __turbopack_context__.g.ImageData) {
    /*TURBOPACK member replacement*/ __turbopack_context__.g.ImageData = class ImageData {
        constructor(){}
    };
}
// @ts-ignore
if (!/*TURBOPACK member replacement*/ __turbopack_context__.g.Path2D) {
    /*TURBOPACK member replacement*/ __turbopack_context__.g.Path2D = class Path2D {
        constructor(){}
    };
}
// --- 2. SMART IMPORT ---
let pdfParse = (()=>{
    const e = new Error("Cannot find module 'pdf-parse'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
if (typeof pdfParse !== 'function' && pdfParse.default) {
    pdfParse = pdfParse.default;
}
async function uploadPdf(formData) {
    try {
        const file = formData.get("file");
        if (!file) throw new Error("No file found");
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        let finalContent = "No text found.";
        try {
            const data = await pdfParse(buffer);
            if (data && data.text && data.text.trim().length > 0) {
                finalContent = data.text;
            } else {
                finalContent = "⚠️ This PDF appears to be empty or scanned (image-only). Text could not be extracted.";
            }
        } catch (parseError) {
            console.error("PDF Parse Error:", parseError);
            finalContent = "⚠️ Error parsing PDF. File might be corrupted or encrypted.";
        }
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
            temperature: 0.1,
            modelKwargs: {
                response_format: {
                    type: "json_object"
                }
            }
        });
        // FIX: Using double curly braces {{ }} to escape the example JSON so LangChain doesn't crash
        const prompt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$prompts$2f$prompt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PromptTemplate"].fromTemplate(`Generate a 10x10 Crossword Puzzle based on the provided text.
       
       Rules:
       1. The grid must be 10x10.
       2. Use standard crossword rules (words intersect).
       3. Return a JSON object with:
          - "grid": A 2D array (10 rows of 10 characters). Use '' (empty string) for black squares, single uppercase letters for filled.
          - "clues": An object with "across" and "down" arrays. Each item: {{ "number": 1, "clue": "..." }}.
          - "numbers": A 2D array (10x10) matching the grid. Put the clue number (1, 2...) in the start cell. 0 if none.
       
       Text content: {text}`);
        const chain = prompt.pipe(model);
        const response = await chain.invoke({
            text: note.content.slice(0, 30000)
        });
        const content = typeof response.content === 'string' ? response.content : JSON.stringify(response.content);
        const data = JSON.parse(content);
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].crossword.create({
            data: {
                courseId: id,
                puzzle: data
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
    generateStudyGuide,
    generateQuiz,
    generateFlashcards,
    generatePracticeExam,
    generateCrossword,
    saveQuizResult,
    saveExamResult
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(uploadPdf, "4029b1f2a07c9a7d620d4b958168233797a4861b20", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateStudyGuide, "409078de68a41a43e66f0601878397a73538990768", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateQuiz, "40f43fc974ff6928b7b3a2e6912cea9dbb69f4517b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateFlashcards, "40b1056ec51f8d9f6ad6b2a3e1b600180be311da8d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generatePracticeExam, "40fb690e8484cf7700be5874e06ca30bec5ad4966b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateCrossword, "405f0c08a6259be969c69361ec5853ab9d7ccfe00c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(saveQuizResult, "707237374e2ca69a57c875b3ea679e9f2e612c7182", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(saveExamResult, "70aae445aa96797072f5882989150971aec1840174", null);
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
;
;
;
;
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "4029b1f2a07c9a7d620d4b958168233797a4861b20",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uploadPdf"],
    "405f0c08a6259be969c69361ec5853ab9d7ccfe00c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateCrossword"],
    "409078de68a41a43e66f0601878397a73538990768",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateStudyGuide"],
    "40b1056ec51f8d9f6ad6b2a3e1b600180be311da8d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateFlashcards"],
    "40f43fc974ff6928b7b3a2e6912cea9dbb69f4517b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateQuiz"],
    "40fb690e8484cf7700be5874e06ca30bec5ad4966b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generatePracticeExam"],
    "707237374e2ca69a57c875b3ea679e9f2e612c7182",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveQuizResult"],
    "70aae445aa96797072f5882989150971aec1840174",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveExamResult"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__12ccba85._.js.map