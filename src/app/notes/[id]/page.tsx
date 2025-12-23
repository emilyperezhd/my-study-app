export const dynamic = "force-dynamic"; 

import { db } from "../../../lib/db";
import { generateStudyGuide, generateQuiz, generateFlashcards, generatePracticeExam, generateCrossword } from "../../actions";
import Link from "next/link";
import { notFound } from "next/navigation";
import QuizApp from "../../../components/QuizApp";
import FlashcardApp from "../../../components/FlashcardApp";
import ExamApp from "../../../components/ExamApp";
import CrosswordApp from "../../../components/CrosswordApp"; // <--- Import Crossword

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function NotePage({ params }: PageProps) {
  const { id } = await params;

  // Fetch everything
  const note = await db.course.findUnique({
    where: { id: id },
    include: { 
      questions: true,
      flashcards: true,
      examQuestions: true,
      crosswords: true, // <--- Fetch Crosswords
      quizResults: { orderBy: { createdAt: 'desc' } },
      examResults: { orderBy: { createdAt: 'desc' } }
    }
  });

  if (!note) return notFound();

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-12 min-h-screen bg-pink-50 font-sans text-gray-800">

      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b-2 border-pink-100">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            {note.title}
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <span className="bg-white text-pink-500 border border-pink-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              Study Set
            </span>
            <p className="text-pink-400 text-sm font-medium">
              {note.createdAt.toLocaleDateString()}
            </p>
          </div>
        </div>
        <Link href="/" className="text-sm bg-white border-2 border-pink-200 text-pink-500 px-6 py-3 rounded-2xl hover:bg-pink-100 transition shadow-sm font-bold flex items-center gap-2">
          <span>←</span> Back to Home
        </Link>
      </div>

      {/* AI TOOLS GRID - Now 5 Columns on large screens! */}
      <div>
        <h2 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-3">
          <span className="text-2xl">✨</span> Study Tools
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 h-auto">
          
          {/* GUIDE (Green) */}
          <form action={async () => { "use server"; await generateStudyGuide(id); }} className="h-full">
            <button className="group relative bg-green-400 hover:bg-green-500 text-white p-6 rounded-3xl transition w-full h-full text-left shadow-lg shadow-green-100 hover:shadow-xl hover:-translate-y-1 overflow-hidden border-b-4 border-green-600 active:border-b-0 active:translate-y-1">
                <div className="absolute top-2 right-2 opacity-20 text-5xl">📝</div>
                <div className="relative z-10 mt-4">
                  <h3 className="font-bold text-xl mb-1">Guide</h3>
                  <p className="text-xs text-green-50 font-medium">Summarize</p>
                </div>
            </button>
          </form>

          {/* FLASHCARDS (Pink) */}
          <form action={async () => { "use server"; await generateFlashcards(id); }} className="h-full">
            <button 
                disabled={note.flashcards.length > 0}
                className={`group relative p-6 rounded-3xl text-left w-full h-full transition shadow-lg overflow-hidden border-b-4 active:border-b-0 active:translate-y-1
                ${note.flashcards.length > 0 
                  ? 'bg-white border-2 border-pink-200 text-pink-300 cursor-default' 
                  : 'bg-pink-400 hover:bg-pink-500 text-white border-pink-600 shadow-pink-100 hover:shadow-xl hover:-translate-y-1'}`}
            >
                <div className="absolute top-2 right-2 opacity-20 text-5xl">⚡</div>
                <div className="relative z-10 mt-4">
                  <h3 className="font-bold text-xl mb-1">{note.flashcards.length > 0 ? "Ready!" : "Cards"}</h3>
                  <p className="text-xs opacity-90 font-medium">Memorize</p>
                </div>
            </button>
          </form>

          {/* QUIZ (Blue) */}
          <form action={async () => { "use server"; await generateQuiz(id); }} className="h-full">
            <button 
              disabled={note.questions.length > 0}
              className={`group relative p-6 rounded-3xl text-left w-full h-full transition shadow-lg overflow-hidden border-b-4 active:border-b-0 active:translate-y-1
                ${note.questions.length > 0 
                  ? 'bg-white border-2 border-blue-200 text-blue-300 cursor-default' 
                  : 'bg-blue-400 hover:bg-blue-500 text-white border-blue-600 shadow-blue-100 hover:shadow-xl hover:-translate-y-1'}`}
            >
              <div className="absolute top-2 right-2 opacity-20 text-5xl">🧪</div>
              <div className="relative z-10 mt-4">
                <h3 className="font-bold text-xl mb-1">{note.questions.length > 0 ? "Ready!" : "Quiz"}</h3>
                <p className="text-xs opacity-90 font-medium">Practice (5Q)</p>
              </div>
            </button>
          </form>

          {/* EXAM (Purple) */}
          <form action={async () => { "use server"; await generatePracticeExam(id); }} className="h-full">
            <button 
              disabled={note.examQuestions.length > 0}
              className={`group relative p-6 rounded-3xl text-left w-full h-full transition shadow-lg overflow-hidden border-b-4 active:border-b-0 active:translate-y-1
                ${note.examQuestions.length > 0 
                  ? 'bg-white border-2 border-purple-200 text-purple-300 cursor-default' 
                  : 'bg-purple-400 hover:bg-purple-500 text-white border-purple-600 shadow-purple-100 hover:shadow-xl hover:-translate-y-1'}`}
            >
              <div className="absolute top-2 right-2 opacity-20 text-5xl">🎓</div>
              <div className="relative z-10 mt-4">
                <h3 className="font-bold text-xl mb-1">{note.examQuestions.length > 0 ? "Ready!" : "Exam"}</h3>
                <p className="text-xs opacity-90 font-medium">Midterm (20Q)</p>
              </div>
            </button>
          </form>

          {/* NEW: CROSSWORD (Teal) */}
          <form action={async () => { "use server"; await generateCrossword(id); }} className="h-full">
            <button 
              disabled={note.crosswords.length > 0}
              className={`group relative p-6 rounded-3xl text-left w-full h-full transition shadow-lg overflow-hidden border-b-4 active:border-b-0 active:translate-y-1
                ${note.crosswords.length > 0 
                  ? 'bg-white border-2 border-teal-200 text-teal-300 cursor-default' 
                  : 'bg-teal-400 hover:bg-teal-500 text-white border-teal-600 shadow-teal-100 hover:shadow-xl hover:-translate-y-1'}`}
            >
              <div className="absolute top-2 right-2 opacity-20 text-5xl">🧩</div>
              <div className="relative z-10 mt-4">
                <h3 className="font-bold text-xl mb-1">{note.crosswords.length > 0 ? "Ready!" : "Game"}</h3>
                <p className="text-xs opacity-90 font-medium">Crossword</p>
              </div>
            </button>
          </form>

        </div>
      </div>

      {/* --- SECTIONS --- */}

      {/* 1. CROSSWORD (New!) */}
      {note.crosswords.length > 0 && (
        <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
           {/* Passing the raw JSON data to the component */}
           <CrosswordApp puzzleData={note.crosswords[0].puzzle} />
        </section>
      )}

      {/* 2. FLASHCARDS */}
      {note.flashcards.length > 0 && (
        <section className="mt-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
           <FlashcardApp flashcards={note.flashcards} />
        </section>
      )}

      {/* 3. EXAM */}
      {note.examQuestions.length > 0 && (
        <section className="mt-12 animate-in fade-in slide-in-from-bottom-8">
            <ExamApp questions={note.examQuestions} courseId={id} />
        </section>
      )}

      {/* 4. QUIZ */}
      {note.questions.length > 0 && (
        <section className="mt-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            <QuizApp questions={note.questions} courseId={id} />
        </section>
      )}

      {/* 5. HISTORY */}
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-pink-100 mt-8">
          <h3 className="font-bold text-xl mb-6 text-gray-800 flex items-center gap-2">
              📊 Progress History
          </h3>
          <div className="space-y-3">
              {note.examResults.map((result, index) => (
                  <div key={result.id} className="flex justify-between items-center p-4 border border-purple-100 rounded-2xl bg-purple-50">
                      <div>
                          <p className="font-bold text-purple-700">Midterm Attempt {note.examResults.length - index}</p>
                          <p className="text-xs text-gray-400" suppressHydrationWarning={true}>{result.createdAt.toLocaleString()}</p>
                      </div>
                      <div className="px-4 py-1.5 rounded-full font-bold text-sm bg-white border border-purple-200 text-purple-600 shadow-sm">
                          {result.score} / {result.total} ({Math.round(result.score/result.total*100)}%)
                      </div>
                  </div>
              ))}
              {note.quizResults.map((result, index) => (
                  <div key={result.id} className="flex justify-between items-center p-4 border border-blue-100 rounded-2xl bg-blue-50">
                      <div>
                          <p className="font-bold text-blue-700">Quiz Attempt {note.quizResults.length - index}</p>
                          <p className="text-xs text-gray-400" suppressHydrationWarning={true}>{result.createdAt.toLocaleString()}</p>
                      </div>
                      <div className="px-4 py-1.5 rounded-full font-bold text-sm bg-white border border-blue-200 text-blue-600 shadow-sm">
                          {result.score} / {result.total} ({Math.round(result.score/result.total*100)}%)
                      </div>
                  </div>
              ))}
          </div>
      </div>

      {/* 6. STUDY GUIDE */}
      {note.summary && (
        <section className="mt-16 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl border border-white relative overflow-hidden">
            <div className="mb-10 pb-6 border-b-2 border-dashed border-pink-100">
                <h2 className="text-4xl font-extrabold text-gray-900">Study Guide</h2>
            </div>
            <div 
              className="prose prose-lg max-w-none text-gray-600
                [&>h1]:text-3xl [&>h1]:font-extrabold [&>h1]:text-gray-900 [&>h1]:mt-10 [&>h1]:mb-4
                [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-green-600 [&>h2]:mt-12 [&>h2]:mb-4
                [&>p]:text-lg [&>p]:leading-loose [&>p]:mb-6
                [&>li]:text-lg [&>li]:pl-2 [&>li]:marker:text-pink-400
                [&>strong]:text-gray-900 [&>strong]:font-black"
              dangerouslySetInnerHTML={{ 
                  __html: note.summary.replace(/```html/g, "").replace(/```/g, "") 
              }} 
            />
          </div>
        </section>
      )}

    </div>
  );
}