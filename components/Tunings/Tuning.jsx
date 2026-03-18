const Tuning = ({ label, strings, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center border rounded-xl p-2 cursor-pointer transition-all duration-200 ${
        isSelected
          ? "bg-blue-600 border-blue-400 text-white"
          : "border-white/20 bg-white/10 hover:bg-white/30 active:scale-90"
      }`}
    >
      <div className="capitalize text-sm font-bold">{label}</div>
      <div className="flex text-sm gap-2">
        {Object.entries(strings)
          .sort(([a], [b]) => b - a)
          .map(([num, note]) => (
            <div key={num} className="flex flex-col items-center">
              <span>{note[0]}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Tuning;
