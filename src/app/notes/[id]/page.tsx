import { db } from "../../../lib/db";
import { generateStudyGuide, generateQuiz, generateFlashcards } from "../../actions"; // <--- Added generateFlashcards
import Link from "next/link";
import { notFound } from "next/navigation";
import QuizApp from "../../../components/QuizApp";
import FlashcardApp from "../../../components/FlashcardApp"; // <--- Added Component

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function NotePage({ params }: PageProps) {
  const { id } = await params;

  // Fetch everything: Note, Questions, Flashcards, Results
  const note = await db.course.findUnique({
    where: { id: id },
    include: { 
      questions: true,
      flashcards: true, // <--- Fetch Flashcards
      quizResults: {
        orderBy: { createdAt: 'desc' }
      }
    }
  });

  if (!note) return notFound();

  return (
    <div className="max-w-4xl mx-auto p-10 space-y-8 min-h-screen bg-gray-50">

      {/* HEADER */}
      <div className="flex justify-between items-center border-b border-gray-200 pb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{note.title}</h1>
          <p className="text-gray-500 text-sm mt-1">
            Uploaded on {note.createdAt.toLocaleDateString()}
          </p>
        </div>
        <Link href="/" className="text-sm bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition">
          ← Back to Dashboard
        </Link>
      </div>

      {/* TEXT PREVIEW */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="font-semibold mb-2 text-gray-700">Raw Text Content:</h2>
        <div className="bg-gray-50 p-4 rounded-lg text-gray-600 text-sm whitespace-pre-wrap font-mono max-h-96 overflow-y-auto">
          {note.content}
        </div>
      </div>

      {/* AI ACTIONS GRID */}
      <div className="pt-4">
        <h2 className="text-xl font-bold mb-4 text-gray-900">AI Study Tools 🤖</h2>
        
        {/* Changed grid-cols-2 to grid-cols-3 to fit the new button */}
        <div className="grid gap-4 md:grid-cols-3">
          
          {/* STUDY GUIDE BUTTON */}
          <form action={async () => { "use server"; await generateStudyGuide(id); }}>
            <button className="bg-indigo-600 text-white p-6 rounded-xl hover:bg-indigo-700 transition text-left shadow-lg w-full h-full transform hover:-translate-y-1">
                <h3 className="font-bold text-lg">📝 Study Guide</h3>
                <p className="text-xs text-indigo-100 mt-1">Summarize concepts.</p>
            </button>
          </form>

          {/* FLASHCARDS BUTTON (NEW) */}
          <form action={async () => { "use server"; await generateFlashcards(id); }}>
            <button 
                disabled={note.flashcards.length > 0}
                className={`p-6 rounded-xl text-left w-full h-full transition border-2
                ${note.flashcards.length > 0 
                  ? 'bg-pink-50 border-pink-200 text-pink-400 cursor-default' 
                  : 'bg-white border-pink-500 hover:bg-pink-50 text-pink-600 shadow-md hover:shadow-lg transform hover:-translate-y-1'}`}
            >
                <h3 className="font-bold text-lg">{note.flashcards.length > 0 ? "✅ Flashcards" : "⚡ Flashcards"}</h3>
                <p className="text-xs opacity-80 mt-1">Memorize terms.</p>
            </button>
          </form>

          {/* QUIZ BUTTON */}
          <form action={async () => { "use server"; await generateQuiz(id); }}>
            <button 
              disabled={note.questions.length > 0}
              className={`p-6 rounded-xl text-left w-full h-full transition border-2
                ${note.questions.length > 0 
                  ? 'bg-orange-50 border-orange-200 text-orange-400 cursor-default' 
                  : 'bg-white border-orange-500 hover:bg-orange-50 text-orange-600 shadow-md hover:shadow-lg transform hover:-translate-y-1'}`}
            >
              <h3 className="font-bold text-lg">{note.questions.length > 0 ? "✅ Quiz" : "🧪 Quiz"}</h3>
              <p className="text-xs opacity-80 mt-1">Practice test.</p>
            </button>
          </form>

        </div>
      </div>

      {/* --- SECTIONS --- */}

      {/* 1. FLASHCARDS */}
      {note.flashcards.length > 0 && (
        <FlashcardApp flashcards={note.flashcards} />
      )}

      {/* 2. QUIZ */}
      {note.questions.length > 0 && (
        <div className="mt-8">
            <QuizApp questions={note.questions} courseId={id} />
        </div>
      )}

      {/* 3. QUIZ HISTORY */}
      {note.quizResults.length > 0 && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mt-8">
            <h3 className="font-bold text-xl mb-4 text-gray-800">📊 Quiz History</h3>
            <div className="space-y-3">
                {note.quizResults.map((result, index) => {
                    const percent = Math.round((result.score / result.total) * 100);
                    const colorClass = percent >= 80 ? 'text-green-600 bg-green-50' : percent >= 50 ? 'text-orange-600 bg-orange-50' : 'text-red-600 bg-red-50';
                    return (
                        <div key={result.id} className="flex justify-between items-center p-4 border rounded-lg">
                            <div>
                                <p className="font-semibold text-gray-700">Attempt {note.quizResults.length - index}</p>
                                <p className="text-xs text-gray-400" suppressHydrationWarning={true}>{result.createdAt.toLocaleString()}</p>
                            </div>
                            <div className={`px-4 py-2 rounded-full font-bold ${colorClass}`}>
                                {result.score} / {result.total} ({percent}%)
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
      )}

      {/* 4. STUDY GUIDE */}
      {note.summary && (
        <div className="mt-10 border-t pt-8">
          <h2 className="text-2xl font-bold mb-4 text-indigo-600">🎓 Your Study Guide</h2>
          <div className="prose prose-lg max-w-none bg-white p-8 rounded-xl shadow-lg border border-indigo-50"
            dangerouslySetInnerHTML={{ __html: note.summary }} />
        </div>
      )}

    </div>
  );
}