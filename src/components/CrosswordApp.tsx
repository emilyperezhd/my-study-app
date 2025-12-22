"use client";

import { useState } from "react";

type CrosswordData = {
  grid: string[][];      // The letters (Answers)
  numbers: number[][];   // The small numbers in the corner
  clues: {
    across: { number: number; clue: string }[];
    down: { number: number; clue: string }[];
  };
};

export default function CrosswordApp({ puzzleData }: { puzzleData: any }) {
  const data = puzzleData as CrosswordData;
  
  // DYNAMIC SIZING: Get dimensions from the data, not hardcoded
  const rows = data.grid.length;
  const cols = data.grid[0].length;

  const [userGrid, setUserGrid] = useState<string[][]>(
    Array(rows).fill(null).map(() => Array(cols).fill(""))
  );
  const [showAnswers, setShowAnswers] = useState(false);

  // Handle typing in a cell
  const handleChange = (r: number, c: number, value: string) => {
    const val = value.slice(-1).toUpperCase(); // Take last char, uppercase
    const newGrid = [...userGrid];
    newGrid[r][c] = val;
    setUserGrid(newGrid);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-teal-100 mt-8">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8 border-b border-teal-50 pb-4">
        <h2 className="text-3xl font-bold text-teal-700 tracking-tight flex items-center gap-2">
          🧩 Crossword Puzzle
        </h2>
        <button 
          onClick={() => setShowAnswers(!showAnswers)}
          className="text-sm font-bold text-teal-600 bg-teal-50 px-4 py-2 rounded-full hover:bg-teal-100 transition"
        >
          {showAnswers ? "Hide Answers" : "Reveal Answers 👁️"}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* THE GRID */}
        <div className="flex-shrink-0">
          <div 
            className="grid gap-[2px] bg-gray-800 border-4 border-gray-800 p-[2px] w-fit mx-auto lg:mx-0 shadow-xl"
            // FIX: Dynamic columns based on data
            style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
          >
            {data.grid.map((row, r) => 
              row.map((cell, c) => {
                const isBlack = cell === "";
                const number = data.numbers[r][c];
                // Safety check: ensure userGrid[r] exists before accessing [c]
                const userVal = userGrid[r] ? userGrid[r][c] : "";
                const displayChar = showAnswers ? cell : userVal;
                
                const isCorrect = userVal === cell;
                const textColor = showAnswers ? "text-teal-700" : (userVal && !isCorrect ? "text-red-500" : "text-black");

                return (
                  <div 
                    key={`${r}-${c}`} 
                    className={`relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center font-bold text-lg sm:text-xl uppercase transition-colors
                      ${isBlack ? "bg-gray-900" : "bg-white hover:bg-teal-50"}`}
                  >
                    {!isBlack && (
                      <>
                        {/* Tiny Number */}
                        {number > 0 && (
                          <span className="absolute top-0.5 left-0.5 text-[8px] sm:text-[10px] leading-none text-gray-500 font-sans pointer-events-none">
                            {number}
                          </span>
                        )}
                        {/* Input */}
                        <input 
                          type="text"
                          value={displayChar}
                          disabled={showAnswers}
                          onChange={(e) => handleChange(r, c, e.target.value)}
                          className={`w-full h-full text-center bg-transparent focus:bg-teal-100 focus:outline-none ${textColor}`}
                        />
                      </>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* CLUES LIST */}
        <div className="flex-1 grid md:grid-cols-2 gap-8 h-[500px] overflow-y-auto custom-scrollbar pr-2">
          
          {/* ACROSS */}
          <div>
            <h3 className="font-bold text-teal-800 border-b-2 border-teal-100 mb-3 pb-1 uppercase tracking-wider text-sm sticky top-0 bg-white">
              Across
            </h3>
            <ul className="space-y-3">
              {data.clues.across.map((item) => (
                <li key={item.number} className="text-sm text-gray-600">
                  <span className="font-bold text-teal-600 mr-1">{item.number}.</span>
                  {item.clue}
                </li>
              ))}
            </ul>
          </div>

          {/* DOWN */}
          <div>
            <h3 className="font-bold text-teal-800 border-b-2 border-teal-100 mb-3 pb-1 uppercase tracking-wider text-sm sticky top-0 bg-white">
              Down
            </h3>
            <ul className="space-y-3">
              {data.clues.down.map((item) => (
                <li key={item.number} className="text-sm text-gray-600">
                  <span className="font-bold text-teal-600 mr-1">{item.number}.</span>
                  {item.clue}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}