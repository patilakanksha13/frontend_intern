import { useState } from "react";

// Child Components
function ProgressBar({ current, total }) {
  const progress = (current / total) * 100;
  return (
    <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
      <div
        className="bg-[#1b4b6d] h-2 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function QuestionCard({ question }) {
  return (
    <div className="bg-[#e0f4ff] rounded-2xl p-6 mb-6 text-center animate-fadeIn">
      <h2 className="text-2xl font-semibold text-gray-800">{question}</h2>
    </div>
  );
}

function OptionButton({ text, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full p-4 mb-4 rounded-xl text-lg font-medium transition-all ${
        selected
          ? "bg-[#1b4b6d] text-white"
          : "bg-gray-50 text-gray-700 hover:bg-gray-100"
      }`}
    >
      {text}
    </button>
  );
}

function NavigationButtons({ onPrev, onNext, showSubmit, onSubmit }) {
  return (
    <div className="flex justify-between mt-8">
      <button
        onClick={onPrev}
        className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
      >
        ← Previous
      </button>
      {showSubmit ? (
        <button
          onClick={onSubmit}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Submit Quiz
        </button>
      ) : (
        <button
          onClick={onNext}
          className="px-6 py-3 bg-[#1b4b6d] text-white rounded-lg hover:bg-[#153a54] transition"
        >
          Next →
        </button>
      )}
    </div>
  );
}

// Animated Paw Component matching the exact image
function AnimatedPaw() {
  return (
    <div className="fixed left-8 bottom-8 z-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pawWave {
          0%, 100% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.05) rotate(-3deg); }
          50% { transform: scale(1.08) rotate(0deg); }
          75% { transform: scale(1.05) rotate(3deg); }
        }
        @keyframes toeOpen {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
          }
          50% { 
            transform: translate(var(--spread-x), var(--spread-y)) scale(1.15); 
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .speech-bubble {
          animation: fadeInUp 0.8s ease-out;
        }
        .paw-wave {
          animation: pawWave 2.5s ease-in-out infinite;
        }
        .toe-anim-1 { 
          animation: toeOpen 2.5s ease-in-out infinite; 
          --spread-x: -4px; 
          --spread-y: -4px; 
        }
        .toe-anim-2 { 
          animation: toeOpen 2.5s ease-in-out infinite 0.1s; 
          --spread-x: 0px; 
          --spread-y: -5px; 
        }
        .toe-anim-3 { 
          animation: toeOpen 2.5s ease-in-out infinite 0.2s; 
          --spread-x: 4px; 
          --spread-y: -4px; 
        }
      `}</style>
      
      <div className="animate-float">
        {/* Speech Bubble - exactly matching the image */}
        <div className="speech-bubble relative bg-white rounded-[28px] px-7 py-4 shadow-xl mb-2 border-[3px] border-[#6ec4e8]" style={{ width: '190px' }}>
          <p className="text-[28px] leading-tight text-gray-800" style={{ fontFamily: "'Caveat', cursive", fontWeight: 700 }}>
            Best of Luck!
          </p>
          {/* Rounded tail pointer */}
          <div className="absolute left-[60px] bottom-[-15px]">
            <svg width="25" height="20" viewBox="0 0 25 20">
              <path d="M 12 0 Q 8 8 3 18 C 2 19 4 20 6 19 L 18 19 C 20 20 22 19 21 18 Q 16 8 12 0 Z" 
                    fill="white" 
                    stroke="#6ec4e8" 
                    strokeWidth="3"
                    strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Animated Paw - exactly matching the image with fuzzy edges */}
        <div className="ml-10 paw-wave">
          <svg width="110" height="140" viewBox="0 0 110 140">
            <defs>
              {/* Fuzzy edge filter for furry effect */}
              <filter id="fuzzy" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise"/>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G"/>
              </filter>
              
              {/* Shadow */}
              <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                <feOffset dx="1" dy="2" result="offsetblur"/>
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.3"/>
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Furry white base/wrist area */}
            <ellipse cx="55" cy="115" rx="32" ry="20" fill="#f5f5f5" filter="url(#fuzzy)" opacity="0.9"/>
            
            {/* Main pad - pink with subtle texture */}
            <g filter="url(#shadow)">
              <ellipse cx="55" cy="85" rx="30" ry="35" fill="#ffc0cb" stroke="#e8e8e8" strokeWidth="2.5"/>
              <ellipse cx="55" cy="85" rx="28" ry="33" fill="#ffb3c1" opacity="0.6"/>
            </g>
            
            {/* Toe pads with opening animation - matching image colors */}
            <g className="toe-anim-1" filter="url(#shadow)">
              <ellipse cx="32" cy="58" rx="13" ry="18" fill="#ffc0cb" stroke="#e8e8e8" strokeWidth="2.5"/>
              <ellipse cx="32" cy="58" rx="11" ry="16" fill="#ffb3c1" opacity="0.6"/>
            </g>
            
            <g className="toe-anim-2" filter="url(#shadow)">
              <ellipse cx="55" cy="48" rx="13" ry="20" fill="#ffc0cb" stroke="#e8e8e8" strokeWidth="2.5"/>
              <ellipse cx="55" cy="48" rx="11" ry="18" fill="#ffb3c1" opacity="0.6"/>
            </g>
            
            <g className="toe-anim-3" filter="url(#shadow)">
              <ellipse cx="78" cy="58" rx="13" ry="18" fill="#ffc0cb" stroke="#e8e8e8" strokeWidth="2.5"/>
              <ellipse cx="78" cy="58" rx="11" ry="16" fill="#ffb3c1" opacity="0.6"/>
            </g>
            
            {/* Fuzzy texture lines at bottom */}
            <g opacity="0.4" stroke="#d0d0d0" strokeWidth="1.5" fill="none">
              <path d="M 30 110 Q 32 115 30 120" filter="url(#fuzzy)"/>
              <path d="M 40 112 Q 42 117 40 122" filter="url(#fuzzy)"/>
              <path d="M 50 113 Q 52 118 50 123" filter="url(#fuzzy)"/>
              <path d="M 60 113 Q 62 118 60 123" filter="url(#fuzzy)"/>
              <path d="M 70 112 Q 72 117 70 122" filter="url(#fuzzy)"/>
              <path d="M 80 110 Q 82 115 80 120" filter="url(#fuzzy)"/>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
