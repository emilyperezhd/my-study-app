export const dynamic = "force-dynamic";

import { db } from "../lib/db";
import { uploadPdf } from "./actions";
import CourseCard from "../components/CourseCard";
import { UserButton, SignInButton } from "@clerk/nextjs"; // <--- Import SignInButton
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  // 1. Check if user is logged in
  const { userId } = await auth();

  // 2. Only fetch courses if logged in
  const courses = userId ? await db.course.findMany({
    where: { userId: userId }, 
    orderBy: { createdAt: 'desc' }
  }) : [];

  return (
    <main className="min-h-screen p-8 bg-pink-50 font-sans">
      
      <div className="max-w-7xl mx-auto space-y-12">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end border-b-2 border-pink-100 pb-8">
          <div>
            <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
              My Study Tool <span className="text-pink-500">.</span>
            </h1>
            <p className="text-gray-500 mt-4 text-lg">
              Your AI-powered study assistant.
            </p>
          </div>
          
          {/* AUTH BUTTONS */}
          <div className="flex items-center gap-4">
            {userId ? (
              <UserButton afterSignOutUrl="/"/>
            ) : (
              <SignInButton mode="modal">
                <button className="bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-800 transition">
                  Sign In
                </button>
              </SignInButton>
            )}
          </div>
        </div>

        {/* CONTENT AREA - Changes based on Auth status */}
        {userId ? (
          <>
            {/* 1. UPLOAD BOX (Only for logged in users) */}
            <div className="bg-white p-10 rounded-3xl shadow-xl shadow-pink-100/50 border border-white">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Upload New Material</h2>
              
              <form action={uploadPdf} className="flex flex-col md:flex-row gap-4 items-center">
                <input 
                  type="file" 
                  name="file" 
                  accept=".pdf"
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-3 file:px-6
                    file:rounded-full file:border-0
                    file:text-sm file:font-bold
                    file:bg-pink-50 file:text-pink-600
                    hover:file:bg-pink-100
                    transition cursor-pointer border border-gray-100 rounded-xl p-2"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-900 transition font-bold shadow-md whitespace-nowrap"
                >
                  Upload PDF
                </button>
              </form>
            </div>

            {/* 2. DOCUMENTS LIST */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                Your Documents <span className="bg-pink-100 text-pink-600 text-xs px-3 py-1 rounded-full">{courses.length}</span>
              </h2>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}

                {courses.length === 0 && (
                  <div className="col-span-full text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200">
                    <p className="text-gray-400 text-xl font-medium">No PDFs found.</p>
                    <p className="text-gray-300 mt-2">Upload a file to get started!</p>
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          /* GUEST VIEW */
          <div className="text-center py-20 bg-white rounded-3xl shadow-xl border border-pink-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Study Portal 🎓</h2>
            <p className="text-gray-500 text-lg max-w-lg mx-auto mb-8">
              Sign in to upload your course notes, generate AI quizzes, and create flashcards.
            </p>
            <SignInButton mode="modal">
              <button className="bg-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-pink-700 transition shadow-lg shadow-pink-200">
                Get Started
              </button>
            </SignInButton>
          </div>
        )}

      </div>
    </main>
  );
}