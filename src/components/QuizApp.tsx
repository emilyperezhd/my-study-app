"use client";

import { useState, useEffect } from "react";
import { saveQuizResult } from "../app/actions"; // <--- Import the action

type Question = {
  id: string;
  question: string;
  options: string[];
  answer: string;
};

// We need the courseId to know WHERE to save the result
export default function QuizApp({ 
  questions, 
  courseId 
}: { 
  questions: Question[], 
  courseId: string 
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
  const handleAnswer = async (option: string) => { // Made async
    const correct = option === questions[currentQuestion].answer;
    setSelectedOption(option);
    
    // Calculate new score immediately so we don't wait for state update
    const newScore = correct ? score + 1 : score;
    if (correct) setScore(newScore);

    // Wait 1 second
    setTimeout(async () => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedOption(null);
      } else {
        setShowScore(true);
        // --- SAVE THE RESULT ---
        await saveQuizResult(courseId, newScore, questions.length);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
  };

  if (questions.length === 0) return null;

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-orange-200 mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-orange-600">🧠 Practice Quiz</h2>
        {!showScore && (
          <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {currentQuestion + 1} / {questions.length}
          </span>
        )}
      </div>

      {showScore ? (
        <div className="text-center py-10">
          <div className="text-6xl mb-4">{score === questions.length ? "🎉" : "📈"}</div>
          <p className="text-2xl font-bold text-gray-800 mb-2">
            You scored {score} out of {questions.length}
          </p>
          <p className="text-green-600 font-bold mb-6">Result Saved! ✅</p>
          <button 
            onClick={resetQuiz}
            className="bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-700 transition"
          >
            Retake Quiz
          </button>
        </div>
      ) : (
        <div>
          <h3 className="text-xl font-semibold mb-8 text-gray-800 leading-relaxed">
            {questions[currentQuestion].question}
          </h3>
          <div className="grid gap-4">
            {questions[currentQuestion].options.map((option, index) => {
              let btnClass = "p-5 rounded-xl border-2 text-left transition-all font-medium ";
              if (selectedOption) {
                 if (option === questions[currentQuestion].answer) btnClass += "bg-green-50 border-green-500 text-green-700";
                 else if (option === selectedOption) btnClass += "bg-red-50 border-red-500 text-red-700";
                 else btnClass += "bg-gray-50 border-gray-100 text-gray-400 opacity-50";
              } else {
                 btnClass += "bg-white border-gray-200 hover:border-orange-400 hover:bg-orange-50 text-gray-700";
              }
              return (
                <button
                  key={index}
                  onClick={() => !selectedOption && handleAnswer(option)}
                  disabled={!!selectedOption}
                  className={btnClass}
                >
                  <span className="mr-3 text-gray-400 font-mono text-sm">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}