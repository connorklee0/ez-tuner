import { VolumeUp } from "@mui/icons-material";

const StringCard = ({ stringNum, note, isSelected, onClick, frequency }) => {
  const playNote = (e) => {
    e.stopPropagation();
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.type = "sine";
    osc.frequency.value = frequency;

    const duration = 3; // seconds

    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.4, ctx.currentTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
  };

  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center justify-evenly p-1 border rounded-xl flex-1 h-25 cursor-pointer transition-all duration-200 ${
        isSelected
          ? "bg-blue-600 border-blue-400 text-white"
          : "border-white/20 bg-white/10 hover:bg-white/30 active:scale-90 hover:scale-105"
      }`}
    >
      <span className="text-xs text-gray-300">String {stringNum}</span>
      <span className="text-xl font-bold">{note[0]}</span>
      <button onClick={playNote}>
        <VolumeUp
          sx={{ fontSize: 28 }}
          className="hover:scale-120 hover:text-white/60 active:scale-90 active:text-white/30"
        />
      </button>
    </div>
  );
};

export default StringCard;
