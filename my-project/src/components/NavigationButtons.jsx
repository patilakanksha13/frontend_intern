// components/NavigationButtons.jsx
export default function NavigationButtons({ onPrev, onNext, showSubmit, onSubmit }) {
  return (
    <div className="flex justify-between items-center mt-8">
      <button
        onClick={onPrev}
        className="px-4 py-2 bg-[#262626] text-white rounded-full text-xl"
      >
        &lt;
      </button>

      {showSubmit ? (
        <button
          onClick={onSubmit}
          className="px-6 py-3 bg-[#1b4b6d] text-white rounded-lg text-lg"
        >
          Submit
        </button>
      ) : (
        <button
          onClick={onNext}
          className="px-4 py-2 bg-[#262626] text-white rounded-full text-xl"
        >
          &gt;
        </button>
      )}
    </div>
  );
}
