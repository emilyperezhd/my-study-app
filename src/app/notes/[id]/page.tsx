import { db } from "../../../lib/db";
import { generateStudyGuide, generateQuiz } from "../../actions";
import Link from "next/link";
import { notFound } from "next/navigation";
import QuizApp from "../../../components/QuizApp";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function NotePage({ params }: PageProps) {
  const { id } = await params;

  // Fetch note and questions
  const note = await db.course.findUnique({
    where: { id: id },
    include: { questions: true }
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

      {/* AI ACTIONS */}
      <div className="pt-4">
        <h2 className="text-xl font-bold mb-4 text-gray-900">AI Study Tools 🤖</h2>
        
        <div className="grid gap-4 md:grid-cols-2">
          
          {/* STUDY GUIDE BUTTON */}
          <form action={async () => {
              "use server";
              await generateStudyGuide(id);
            }}>
            <button 
                type="submit"
                className="bg-indigo-600 text-white p-6 rounded-xl hover:bg-indigo-700 transition text-left shadow-lg w-full transform hover:-translate-y-1"
            >
                <h3 className="font-bold text-lg">📝 Generate Study Guide</h3>
                <p className="text-sm text-indigo-100 mt-1">
                Create a summarized study guide with key concepts.
                </p>
            </button>
          </form>

          {/* QUIZ BUTTON */}
          <form action={async () => {
              "use server";
              await generateQuiz(id);
            }}>
            <button 
              className={`p-6 rounded-xl text-left w-full transition border-2 h-full
                ${note.questions.length > 0 
                  ? 'bg-orange-50 border-orange-200 cursor-default' 
                  : 'bg-white border-orange-500 hover:bg-orange-50 text-orange-600 shadow-md hover:shadow-lg transform hover:-translate-y-1'
                }`}
              disabled={note.questions.length > 0}
            >
              <h3 className={`font-bold text-lg ${note.questions.length > 0 ? 'text-gray-400' : 'text-orange-600'}`}>
                {note.questions.length > 0 ? "✅ Quiz Generated" : "🧪 Generate Quiz"}
              </h3>
              <p className={`text-sm mt-1 ${note.questions.length > 0 ? 'text-gray-400' : 'text-orange-400'}`}>
                {note.questions.length > 0 
                  ? "Scroll down to take the quiz!" 
                  : "Create a multiple choice test based on this file."}
              </p>
            </button>
          </form>

        </div>
      </div>

      {/* QUIZ SECTION */}
      {note.questions.length > 0 && (
        <QuizApp questions={note.questions} courseId={id} /> // <--- Added courseId={id}
      )}

      {/* STUDY GUIDE SECTION */}
      {note.summary && (
        <div className="mt-10 border-t pt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h2 className="text-2xl font-bold mb-4 text-indigo-600">🎓 Your Study Guide</h2>
          <div 
            className="prose prose-lg max-w-none bg-white p-8 rounded-xl shadow-lg border border-indigo-50
            prose-headings:text-indigo-800 prose-h1:text-4xl prose-h1:font-extrabold prose-h1:mb-6
            prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:border-b prose-h2:pb-2 prose-h2:border-indigo-100
            prose-p:text-gray-700 prose-p:leading-relaxed
            prose-li:text-gray-700 prose-li:marker:text-indigo-400
            prose-strong:text-indigo-600 prose-strong:font-bold"
            dangerouslySetInnerHTML={{ __html: note.summary }}
          />
        </div>
      )}

    </div>
  );
}