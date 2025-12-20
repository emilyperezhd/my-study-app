"use client";

import { useState } from "react";

type Flashcard = {
  id: string;
  front: string;
  back: string;
};

export default function FlashcardApp({ flashcards }: { flashcards: Flashcard[] }) {
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const nextCard = () => {
    setIsFlipped(false);
    setTimeout(() => setIndex((prev) => (prev + 1) % flashcards.length), 300);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setTimeout(() => setIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length), 300);
  };

  if (flashcards.length === 0) return null;

  return (
    // MAIN CONTAINER: Added gap-12 for lots of vertical breathing room
    <div className="w-full bg-white p-8 rounded-xl shadow-sm border border-gray-200 mt-8 flex flex-col gap-12">
      
      {/* 1. HEADER */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-6">
        <h2 className="text-2xl font-bold text-gray-800 tracking-tight flex items-center gap-2">
          <span className="text-3xl">⚡</span> Flashcards
        </h2>
        <span className="text-sm font-bold text-gray-500 bg-gray-100 px-4 py-2 rounded-full border border-gray-200">
          {index + 1} / {flashcards.length}
        </span>
      </div>

      {/* 2. CARD CONTAINER */}
      {/* Forced height 500px. */}
      <div 
        className="w-full relative group cursor-pointer perspective-1000"
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ height: "500px", perspective: "1000px" }}
      >
        <div 
          className="relative w-full h-full duration-500 transition-all rounded-3xl shadow-lg"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
          }}
        >
          
          {/* --- FRONT SIDE (Term) --- */}
          {/* bg-pink-50/80 creates that colored-but-transparent glass look */}
          <div 
            className="absolute inset-0 w-full h-full bg-pink-50/80 backdrop-blur-sm border-2 border-pink-100 rounded-3xl flex flex-col items-center justify-center p-12 text-center"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="w-full flex-1 flex items-center justify-center overflow-y-auto custom-scrollbar pb-8">
              <p className="text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                {flashcards[index].front}
              </p>
            </div>
            
            <div className="mt-4">
              <span className="text-xs font-bold text-pink-500 uppercase tracking-widest bg-white px-6 py-2 rounded-full shadow-sm border border-pink-100">
                Tap to Flip 👆
              </span>
            </div>
          </div>

          {/* --- BACK SIDE (Definition) --- */}
          {/* Solid Pink for high contrast against the front */}
          <div 
            className="absolute inset-0 w-full h-full bg-pink-600 text-white rounded-3xl flex flex-col items-center justify-center p-12 text-center shadow-inner"
            style={{ 
              backfaceVisibility: "hidden", 
              transform: "rotateY(180deg)" 
            }}
          >
            <div className="w-full flex-1 flex items-center justify-center overflow-y-auto custom-scrollbar pb-8">
              <p className="text-2xl font-medium leading-relaxed antialiased">
                {flashcards[index].back}
              </p>
            </div>

            <div className="mt-4">
              <span className="text-xs font-bold text-white/90 uppercase tracking-widest border-2 border-white/20 px-6 py-2 rounded-full">
                Definition
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* 3. BUTTONS */}
      {/* Switched to Indigo Blue to stand out from the Pink card */}
      <div className="grid grid-cols-2 gap-6 border-t border-gray-100 pt-6">
        <button 
          onClick={(e) => { e.stopPropagation(); prevCard(); }}
          className="w-full py-4 bg-white border-2 border-indigo-100 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-200 rounded-xl font-bold text-lg transition shadow-sm"
        >
          ← Previous
        </button>
        
        <button 
          onClick={(e) => { e.stopPropagation(); nextCard(); }}
          className="w-full py-4 bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg rounded-xl font-bold text-lg transition shadow-md"
        >
          Next Card →
        </button>
      </div>

    </div>
  );
}