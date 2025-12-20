"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { deleteCourse, renameCourse } from "../app/actions";

type Course = {
  id: string;
  title: string;
  createdAt: Date;
  content: string;
};

export default function CourseCard({ course }: { course: Course }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(course.title);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleRename = async (e: React.FormEvent) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    
    if (!newTitle.trim()) return;

    await renameCourse(course.id, newTitle);
    setIsEditing(false);
    setIsMenuOpen(false);
  };

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (confirm("Are you sure you want to delete this study set?")) {
      setIsDeleting(true);
      await deleteCourse(course.id);
    }
  };

  if (isDeleting) return null;

  return (
    <div className="relative group bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-500 transition">
      
      {/* MENU BUTTON */}
      <div className="absolute top-4 right-4 z-20" ref={menuRef}>
        <button 
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsMenuOpen(!isMenuOpen); }}
          className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>
        </button>

        {isMenuOpen && (
          <div className="absolute right-0 mt-1 w-32 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden z-30 animate-in fade-in zoom-in-95 duration-100">
            <button 
              onClick={(e) => { 
                e.preventDefault(); 
                e.stopPropagation(); 
                setIsEditing(true); 
                setIsMenuOpen(false); 
              }}
              className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition flex items-center gap-2"
            >
              <span>✏️</span> Rename
            </button>
            <button 
              onClick={handleDelete}
              className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition flex items-center gap-2"
            >
              <span>🗑️</span> Delete
            </button>
          </div>
        )}
      </div>

      {isEditing ? (
        // RENAME MODE
        <form onSubmit={handleRename} className="relative z-10" onClick={(e) => e.stopPropagation()}>
          <input 
            type="text" 
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full border-2 border-blue-500 p-2 rounded-lg font-bold text-lg mb-3 focus:outline-none shadow-sm"
            autoFocus
          />
          <div className="flex gap-2">
            <button type="submit" className="text-xs font-medium bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition">
              Save
            </button>
            <button type="button" onClick={() => setIsEditing(false)} className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1.5 rounded-md hover:bg-gray-200 transition">
              Cancel
            </button>
          </div>
        </form>
      ) : (
        // NORMAL MODE
        <Link href={`/notes/${course.id}`} className="block h-full pr-8">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-lg text-blue-600 truncate w-full">{course.title}</h3>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-medium bg-blue-50 text-blue-600 px-2 py-1 rounded">PDF</span>
            
            {/* --- FIX: Added suppressHydrationWarning --- */}
            <span className="text-xs text-gray-400" suppressHydrationWarning={true}>
              {course.createdAt.toLocaleDateString()}
            </span>
            
          </div>
          <p className="text-sm text-gray-500 line-clamp-3">
            {course.content || "No text extracted"}
          </p>
        </Link>
      )}
    </div>
  );
}