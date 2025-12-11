export default function OptionButton({ text, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full py-4 text-lg rounded-xl border transition mb-3
        ${
          selected
            ? "bg-[#1b4b6d] text-white border-[#1b4b6d]"
            : "bg-[#eaf7ff] border-[#cfeaff] hover:bg-[#d6eeff]"
        }
      `}
    >
      {text}
    </button>
  );
}
