import { db } from "../lib/db";
import { uploadPdf } from "./actions";
import Link from "next/link"; // <--- This makes things clickable

export default async function Home() {
  // Fetch existing uploads
  const courses = await db.course.findMany();

  return (
    <main className="min-h-screen p-10 bg-gray-50">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900">My Study Portal 🎓</h1>

        {/* UPLOAD BOX */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Upload New Material</h2>
          <form action={uploadPdf} className="flex gap-4 items-center">
            <input 
              type="file" 
              name="file" 
              accept=".pdf"
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100"
              required
            />
            <button 
              type="submit" 
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Upload
            </button>
          </form>
        </div>

        {/* LIST OF UPLOADS */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Your Documents</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {courses.map((course) => (
              <Link 
                key={course.id} 
                href={`/notes/${course.id}`}
                className="block bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-500 transition cursor-pointer"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-blue-600 truncate">{course.title}</h3>
                  <span className="text-xs text-gray-400">
                    {course.createdAt.toLocaleDateString()}
                  </span>
                </div>
                <p className="text-sm text-gray-500 line-clamp-3">
                  {course.content || "No text extracted"}
                </p>
              </Link>
            ))}

            {courses.length === 0 && (
              <p className="text-gray-400 italic">No PDFs uploaded yet. Try one above!</p>
            )}
          </div>
        </div>

      </div>
    </main>
  );
}