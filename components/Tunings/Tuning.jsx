const Tuning = ({ label, strings, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center border rounded-xl p-2 cursor-pointer transition-all duration-200 ${
        isSelected
          ? "bg-blue-600 border-blue-400 text-white"
          : "border-white/20 hover:bg-white/10"
      }`}
    >
      <div className="capitalize text-sm font-bold">{label}</div>
      <div className="flex text-sm gap-2">
        {strings.map((string, i) => (
          <div key={i}>{string}</div>
        ))}
      </div>
    </div>
  );
};

export default Tuning;
