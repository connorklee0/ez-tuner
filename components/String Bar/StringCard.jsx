import { VolumeUp } from "@mui/icons-material";

const StringCard = ({ stringNum, note, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center justify-evenly p-1 border rounded-xl flex-1 h-22 cursor-pointer transition-all duration-200 ${
        isSelected
          ? "bg-blue-600 border-blue-400 text-white hover:bg-white/30"
          : "border-white/20 bg-white/10 hover:bg-white/30 active:scale-90 hover:scale-105"
      }`}
    >
      <span className="text-xs text-gray-300">String {stringNum}</span>
      <span className="text-xl font-bold">{note}</span>
      <VolumeUp
        sx={{ fontSize: 28 }}
        className="hover:scale-120 hover:text-blue-600 active:scale-90 active:text-blue-600/30"
      />
    </div>
  );
};

export default StringCard;
