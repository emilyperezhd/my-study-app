import { db } from "../../../lib/db";
import { generateStudyGuide, generateQuiz, generateFlashcards, generatePracticeExam } from "../../actions";
import Link from "next/link";
import { notFound } from "next/navigation";
import QuizApp from "../../../components/QuizApp";
import FlashcardApp from "../../../components/FlashcardApp";
import ExamApp from "../../../components/ExamApp";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function NotePage({ params }: PageProps) {
  const { id } = await params;

  const note = await db.course.findUnique({
    where: { id: id },
    include: { 
      questions: true,
      flashcards: true,
      examQuestions: true,
      quizResults: { orderBy: { createdAt: 'desc' } },
      examResults: { orderBy: { createdAt: 'desc' } }
    }
  });

  if (!note) return notFound();

  return (
    // PINK BACKGROUND THEME
    <div className="max-w-7xl mx-auto p-8 space-y-8 min-h-screen bg-pink-50 font-sans">

      {/* HEADER */}
      <div className="flex justify-between items-center pb-6 border-b-2 border-pink-100">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">{note.title}</h1>
          <p className="text-pink-400 text-sm mt-2 font-medium">
            Uploaded on {note.createdAt.toLocaleDateString()}
          </p>
        </div>
        <Link href="/" className="text-sm bg-white border-2 border-pink-100 text-pink-500 px-6 py-3 rounded-xl hover:bg-pink-50 transition shadow-sm font-bold">
          ← Back to Home
        </Link>
      </div>

      {/* 
          AI TOOLS GRID 
          Restored to the ORIGINAL Solid Color style (Indigo/Pink/Orange/Purple)
          These are standard colors that definitely work.
      */}
      <div className="py-4">
        <h2 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
          ✨ Study Tools
        </h2>
        
        <div className="grid gap-6 md:grid-cols-4">
          
          {/* STUDY GUIDE (Indigo) */}
          <form action={async () => { "use server"; await generateStudyGuide(id); }} className="h-full">
            <button className="bg-indigo-600 text-white p-8 rounded-2xl hover:bg-indigo-700 transition text-left shadow-lg w-full h-full transform hover:-translate-y-1 flex flex-col justify-between">
                <div className="mb-4 text-4xl">📝</div>
                <div>
                  <h3 className="font-bold text-xl">Study Guide</h3>
                  <p className="text-xs text-indigo-100 mt-2 font-medium opacity-90">Summarize concepts.</p>
                </div>
            </button>
          </form>

          {/* FLASHCARDS (Pink) */}
          <form action={async () => { "use server"; await generateFlashcards(id); }} className="h-full">
            <button 
                disabled={note.flashcards.length > 0}
                className={`p-8 rounded-2xl text-left w-full h-full transition border-2 flex flex-col justify-between
                ${note.flashcards.length > 0 
                  ? 'bg-white border-pink-200 text-pink-400 cursor-default shadow-sm' 
                  : 'bg-pink-500 text-white border-pink-500 shadow-lg hover:bg-pink-600 hover:-translate-y-1'}`}
            >
                <div className="mb-4 text-4xl">⚡</div>
                <div>
                  <h3 className="font-bold text-xl">{note.flashcards.length > 0 ? "Flashcards Ready" : "Flashcards"}</h3>
                  <p className="text-xs opacity-90 mt-2 font-medium">Memorize terms.</p>
                </div>
            </button>
          </form>

          {/* QUIZ (Orange) */}
          <form action={async () => { "use server"; await generateQuiz(id); }} className="h-full">
            <button 
              disabled={note.questions.length > 0}
              className={`p-8 rounded-2xl text-left w-full h-full transition border-2 flex flex-col justify-between
                ${note.questions.length > 0 
                  ? 'bg-white border-orange-200 text-orange-400 cursor-default shadow-sm' 
                  : 'bg-orange-500 text-white border-orange-500 shadow-lg hover:bg-orange-600 hover:-translate-y-1'}`}
            >
              <div className="mb-4 text-4xl">🧪</div>
              <div>
                <h3 className="font-bold text-xl">{note.questions.length > 0 ? "Quiz Ready" : "Practice Quiz"}</h3>
                <p className="text-xs opacity-90 mt-2 font-medium">Test yourself (5Q).</p>
              </div>
            </button>
          </form>

          {/* EXAM (Purple) */}
          <form action={async () => { "use server"; await generatePracticeExam(id); }} className="h-full">
            <button 
              disabled={note.examQuestions.length > 0}
              className={`p-8 rounded-2xl text-left w-full h-full transition border-2 flex flex-col justify-between
                ${note.examQuestions.length > 0 
                  ? 'bg-white border-purple-200 text-purple-400 cursor-default shadow-sm' 
                  : 'bg-purple-600 text-white border-purple-600 shadow-lg hover:bg-purple-700 hover:-translate-y-1'}`}
            >
              <div className="mb-4 text-4xl">🎓</div>
              <div>
                <h3 className="font-bold text-xl">{note.examQuestions.length > 0 ? "Exam Ready" : "Midterm Exam"}</h3>
                <p className="text-xs opacity-90 mt-2 font-medium">Big Review (20Q).</p>
              </div>
            </button>
          </form>

        </div>
      </div>

      {/* --- SECTIONS --- */}

      {/* 1. FLASHCARDS */}
      {note.flashcards.length > 0 && <FlashcardApp flashcards={note.flashcards} />}

      {/* 2. PRACTICE MIDTERM */}
      {note.examQuestions.length > 0 && (
        <section className="mt-12 animate-in fade-in slide-in-from-bottom-8">
            <ExamApp questions={note.examQuestions} courseId={id} />
        </section>
      )}

      {/* 3. SHORT QUIZ */}
      {note.questions.length > 0 && (
        <div className="mt-12">
            <QuizApp questions={note.questions} courseId={id} />
        </div>
      )}

      {/* 4. HISTORY */}
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-pink-100 mt-8">
          <h3 className="font-bold text-xl mb-6 text-gray-800">📊 Progress History</h3>
          <div className="space-y-3">
              {/* Exam Results */}
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
              {/* Quiz Results */}
              {note.quizResults.map((result, index) => (
                  <div key={result.id} className="flex justify-between items-center p-4 border border-gray-100 rounded-2xl hover:bg-gray-50">
                      <div>
                          <p className="font-semibold text-gray-600">Quiz Attempt {note.quizResults.length - index}</p>
                          <p className="text-xs text-gray-400" suppressHydrationWarning={true}>{result.createdAt.toLocaleString()}</p>
                      </div>
                      <div className="px-4 py-1.5 rounded-full font-bold text-sm bg-gray-100 text-gray-600">
                          {result.score} / {result.total} ({Math.round(result.score/result.total*100)}%)
                      </div>
                  </div>
              ))}
          </div>
      </div>

      {/* 5. STUDY GUIDE */}
      {note.summary && (
        <div className="mt-12 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl border border-white relative overflow-hidden">
            <div className="mb-10 pb-6 border-b-2 border-dashed border-pink-100">
                <h2 className="text-4xl font-extrabold text-gray-900">Study Guide</h2>
            </div>
            <div 
              className="prose prose-lg max-w-none text-gray-600
                [&>h1]:text-3xl [&>h1]:font-extrabold [&>h1]:text-gray-900 [&>h1]:mt-10 [&>h1]:mb-4
                [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-indigo-700 [&>h2]:mt-12 [&>h2]:mb-4
                [&>p]:text-lg [&>p]:leading-loose [&>p]:mb-6
                [&>li]:text-lg [&>li]:pl-2 [&>li]:marker:text-pink-400
                [&>strong]:text-gray-900 [&>strong]:font-black"
              dangerouslySetInnerHTML={{ 
                  __html: note.summary.replace(/```html/g, "").replace(/```/g, "") 
              }} 
            />
          </div>
        </div>
      )}

    </div>
  );
}