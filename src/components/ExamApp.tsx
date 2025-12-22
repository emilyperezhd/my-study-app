"use client";

import { useState } from "react";
import { saveExamResult } from "../app/actions";

type ExamQuestion = {
  id: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

export default function ExamApp({ questions, courseId }: { questions: ExamQuestion[], courseId: string }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<{[key: number]: string}>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionSelect = (option: string) => {
    if (isSubmitted) return;
    setSelectedOptions(prev => ({
        ...prev,
        [currentQuestion]: option
    }));
  };

  const handleSubmit = async () => {
    // Calculate Score
    let newScore = 0;
    questions.forEach((q, index) => {
        if (selectedOptions[index] === q.answer) {
            newScore++;
        }
    });
    
    setScore(newScore);
    setIsSubmitted(true);
    await saveExamResult(courseId, newScore, questions.length);
  };

  // --- REVIEW MODE (After Submit) ---
  if (isSubmitted) {
    return (
        <div className="bg-white p-10 rounded-xl shadow-lg border border-purple-100 mt-12 block">
            <h2 className="text-3xl font-bold text-purple-700 mb-6">📝 Exam Results</h2>
            
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 text-center mb-8">
                <p className="text-gray-600 font-medium uppercase tracking-wide text-sm">Your Score</p>
                <p className="text-5xl font-extrabold text-purple-800 mt-2">
                    {score} / {questions.length}
                </p>
                <p className="text-purple-600 mt-2 font-medium">
                    {Math.round((score / questions.length) * 100)}%
                </p>
            </div>

            <div className="space-y-8">
                {questions.map((q, index) => {
                    const userAnswer = selectedOptions[index];
                    const isCorrect = userAnswer === q.answer;

                    // Only show wrong answers or all answers? Let's show all for review.
                    return (
                        <div key={q.id} className={`p-6 rounded-xl border-2 ${isCorrect ? 'border-green-100 bg-green-50/30' : 'border-red-100 bg-red-50/30'}`}>
                            <p className="font-bold text-gray-800 mb-4">
                                <span className="mr-2 text-gray-400">#{index + 1}</span> {q.question}
                            </p>
                            
                            <div className="grid gap-2 mb-4">
                                {q.options.map((opt) => {
                                    let colorClass = "bg-white border-gray-200 text-gray-500";
                                    // Logic for coloring options in review
                                    if (opt === q.answer) colorClass = "bg-green-100 border-green-500 text-green-800 font-bold";
                                    else if (opt === userAnswer) colorClass = "bg-red-100 border-red-500 text-red-800";
                                    
                                    return (
                                        <div key={opt} className={`p-3 rounded-lg border ${colorClass} text-sm`}>
                                            {opt}
                                        </div>
                                    )
                                })}
                            </div>

                            {!isCorrect && (
                                <div className="bg-white p-4 rounded-lg border border-purple-100 mt-2">
                                    <p className="text-xs font-bold text-purple-500 uppercase mb-1">Explanation</p>
                                    <p className="text-sm text-gray-700 leading-relaxed">{q.explanation}</p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            
            <button 
                onClick={() => window.location.reload()}
                className="w-full mt-8 py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition"
            >
                Start New Exam
            </button>
        </div>
    );
  }

  // --- TESTING MODE (Taking the exam) ---
  return (
    <div className="bg-white p-10 rounded-xl shadow-lg border border-purple-100 mt-12 block">
      
      {/* Header */}
      <div className="flex justify-between items-center border-b border-purple-50 pb-6 mb-8">
        <h2 className="text-2xl font-bold text-purple-700 flex items-center gap-2">
            📝 Practice Midterm
        </h2>
        <span className="text-sm font-bold text-purple-600 bg-purple-50 px-4 py-2 rounded-full">
          Question {currentQuestion + 1} / {questions.length}
        </span>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 leading-relaxed">
            {questions[currentQuestion].question}
        </h3>
      </div>

      {/* Options */}
      <div className="grid gap-4 mb-8">
        {questions[currentQuestion].options.map((option) => (
            <button
                key={option}
                onClick={() => handleOptionSelect(option)}
                className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 font-medium
                ${selectedOptions[currentQuestion] === option 
                    ? 'border-purple-600 bg-purple-50 text-purple-900 shadow-sm' 
                    : 'border-gray-100 hover:border-purple-200 hover:bg-gray-50 text-gray-700'}`}
            >
                {option}
            </button>
        ))}
      </div>

      {/* Footer Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-gray-100">
        <button 
            onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
            disabled={currentQuestion === 0}
            className="px-6 py-3 text-gray-500 font-bold hover:bg-gray-100 rounded-lg disabled:opacity-30 transition"
        >
            ← Back
        </button>

        {currentQuestion === questions.length - 1 ? (
            <button 
                onClick={handleSubmit}
                className="px-8 py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
            >
                Submit Exam 🏁
            </button>
        ) : (
            <button 
                onClick={() => setCurrentQuestion(prev => Math.min(questions.length - 1, prev + 1))}
                className="px-8 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 shadow-md transition"
            >
                Next Question →
            </button>
        )}
      </div>

    </div>
  );
}