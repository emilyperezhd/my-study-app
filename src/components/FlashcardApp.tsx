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
    // MAIN CONTAINER: Block layout (stacking vertically)
    <div className="w-full mt-8 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden block">
      
      {/* 1. HEADER */}
      <div className="flex justify-between items-center px-8 py-6 border-b border-gray-100 bg-white">
        <h2 className="text-2xl font-bold text-pink-600 tracking-tight">⚡ Flashcards</h2>
        <span className="text-sm font-medium text-gray-500 bg-gray-50 px-3 py-1 rounded-full border border-gray-200">
          {index + 1} / {flashcards.length}
        </span>
      </div>

      {/* 2. CARD CONTAINER */}
      {/* Forced height with inline style prevents collapsing */}
      <div 
        className="w-full relative bg-white group cursor-pointer perspective-1000"
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ height: "500px", perspective: "1000px" }}
      >
        <div 
          className="relative w-full h-full duration-500 transition-all"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
          }}
        >
          
          {/* --- FRONT SIDE (Term) --- */}
          <div 
            className="absolute inset-0 w-full h-full bg-pink-50/30 flex flex-col items-center justify-center p-12 text-center"
            style={{ backfaceVisibility: "hidden" }}
          >
            {/* Text Area */}
            <div className="w-full flex-1 flex items-center justify-center overflow-y-auto custom-scrollbar pb-8">
              <p className="text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                {flashcards[index].front}
              </p>
            </div>
            
            {/* Badge */}
            <div className="mt-4">
              <span className="text-xs font-bold text-pink-500 uppercase tracking-widest bg-white px-6 py-2 rounded-full shadow-sm border border-pink-100">
                Tap to Flip 👆
              </span>
            </div>
          </div>

          {/* --- BACK SIDE (Definition) --- */}
          <div 
            className="absolute inset-0 w-full h-full bg-pink-600 text-white flex flex-col items-center justify-center p-12 text-center"
            style={{ 
              backfaceVisibility: "hidden", 
              transform: "rotateY(180deg)" 
            }}
          >
            {/* Text Area */}
            <div className="w-full flex-1 flex items-center justify-center overflow-y-auto custom-scrollbar pb-8">
              <p className="text-2xl font-medium leading-relaxed antialiased">
                {flashcards[index].back}
              </p>
            </div>

            {/* Badge */}
            <div className="mt-4">
              <span className="text-xs font-bold text-white/90 uppercase tracking-widest border border-white/20 px-6 py-2 rounded-full">
                Definition
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* 3. FOOTER CONTROLS */}
      <div className="px-8 py-6 border-t border-gray-100 bg-gray-50/50">
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={(e) => { e.stopPropagation(); prevCard(); }}
            className="w-full py-4 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 rounded-xl text-gray-700 font-semibold text-lg transition shadow-sm"
          >
            ← Previous
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); nextCard(); }}
            className="w-full py-4 bg-gray-900 text-white hover:bg-gray-800 rounded-xl font-semibold text-lg transition shadow-md"
          >
            Next Card →
          </button>
        </div>
      </div>

    </div>
  );
}