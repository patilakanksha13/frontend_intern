export default function ProgressBar({ current }) {
  const total = 4; // total number of questions
  return (
    <div className="flex justify-center gap-3 mb-10">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-2 w-24 rounded-full transition-all ${
            i < current ? "bg-[#1b4b6d]" : "bg-gray-300"
          }`}
        ></div>
      ))}
    </div>
  );
}
