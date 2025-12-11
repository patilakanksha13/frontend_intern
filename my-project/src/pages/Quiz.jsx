import { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";
import OptionButton from "../components/OptionButton";
import NavigationButtons from "../components/NavigationButtons";

// Animated Paw Component at bottom-left with "Best of Luck!"
function AnimatedPaw() {
  return (
    <>
      <div className="fixed bottom-6 left-6 flex items-center space-x-2 z-50">
        <span className="text-4xl animate-bounce">🐾</span>
        <span className="text-lg font-semibold text-[#1b4b6d]">Best of Luck!</span>
      </div>
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }
      `}</style>
    </>
  );
}

// Animated Quiz Layout Component
function QuizLayout({ children, showTitle }) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#bfe0f7] to-[#defaff] flex justify-center py-12 px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,700&display=swap');

        @keyframes slideInFromTop {
          0% { opacity: 0; transform: translateY(-50px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInScale {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3); }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes numberCount {
          0% { transform: scale(0.5) rotateY(180deg); opacity: 0; }
          50% { transform: scale(1.2) rotateY(0deg); }
          100% { transform: scale(1) rotateY(0deg); opacity: 1; }
        }

        .animate-title { animation: slideInFromTop 1s ease-out; }
        .animate-subtitle { animation: fadeInScale 1s ease-out 0.5s both; }
        .animate-score-title { animation: bounceIn 0.8s cubic-bezier(0.68,-0.55,0.265,1.55); }
        .animate-score-number { animation: numberCount 1s ease-out 0.3s both; display: inline-block; }
        .animate-score-text { animation: slideUp 0.8s ease-out 0.6s both; }
        .animate-score-button { animation: slideUp 0.8s ease-out 0.9s both; }
        .serif-italic { font-family: 'Playfair Display', serif; font-style: italic; }
      `}</style>

      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-md p-12">
        {showTitle && (
          <>
            <h1 className="animate-title text-center text-5xl serif-italic font-bold text-[#1b4b6d] mb-3">
              Test Your Knowledge
            </h1>
            <p className="animate-subtitle text-center text-gray-500 text-lg mb-10">
              Answer all questions to see your results
            </p>
          </>
        )}
        {children}
      </div>
    </div>
  );
}

// Main Quiz Component
export default function Quiz() {
  const questions = [
    { q: "1. What sound does a cat make?", options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"], correct: "Meow-Meow" },
    { q: "2. What would you probably find in your fridge?", options: ["Shoes", "Ice Cream", "Books"], correct: "Ice Cream" },
    { q: "3. What color are bananas?", options: ["Blue", "Yellow", "Red"], correct: "Yellow" },
    { q: "4. How many stars are in the sky?", options: ["Two", "Infinite", "One Hundred"], correct: "Infinite" },
  ];

  const [page, setPage] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleSelect = (option) => {
    const newAnswers = [...answers];
    newAnswers[page] = option;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correct) newScore += 1;
    });
    const percentage = ((newScore / questions.length) * 100).toFixed(2);
    setScore(percentage);
    setShowScore(true);
  };

  const handleRestart = () => {
    setPage(0);
    setAnswers(Array(questions.length).fill(null));
    setScore(0);
    setShowScore(false);
  };

  const next = () => { if (page < questions.length - 1) setPage(page + 1); };
  const prev = () => { if (page > 0) setPage(page - 1); };

  return (
    <QuizLayout showTitle={!showScore}>
      {!showScore && page === 0 && <AnimatedPaw />}

      {showScore ? (
        <div className="text-center mt-10 font-serif">
          <h2 className="animate-score-title text-5xl font-bold text-[#1b4b6d] mb-6 serif-italic">
            🎉 Quiz Complete! 🎉
          </h2>
          <div className="mb-6">
            <span className="text-6xl font-bold animate-score-number serif-italic" style={{ color: "#1b6fbf" }}>
              {score}%
            </span>
          </div>
          <p className="animate-score-text text-[#1b4b6d] text-xl mb-8 serif-italic">
            {score >= 75 ? "Excellent work! You're a quiz master! 🌟" : 
             score >= 50 ? "Good job! Keep learning! 📚" : 
             "Keep practicing! You'll do better next time! 💪"}
          </p>
          <button
            onClick={handleRestart}
            className="animate-score-button px-8 py-4 bg-[#1b6fbf] text-white rounded-xl text-lg font-semibold hover:bg-[#3b82f6] transition-all transform hover:scale-105 serif-italic"
          >
            🔄 Restart Quiz
          </button>
        </div>
      ) : (
        <>
          <ProgressBar current={page + 1} total={questions.length} />
          <QuestionCard question={questions[page].q} />

          {questions[page].options.map((opt, index) => (
            <OptionButton
              key={index}
              text={opt}
              selected={answers[page] === opt}
              onClick={() => handleSelect(opt)}
            />
          ))}

          <NavigationButtons
            onPrev={prev}
            onNext={next}
            showSubmit={page === questions.length - 1}
            onSubmit={handleSubmit}
          />
        </>
      )}
    </QuizLayout>
  );
}
