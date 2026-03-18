import { VolumeUp, VolumeDown } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setMuted } from "@/store/stringSlice";
import { useState, useEffect, useRef } from "react";

const StringCard = ({ stringNum, note, isSelected, onClick, frequency }) => {
  const dispatch = useDispatch();
  const [isPlaying, setIsPlaying] = useState(false);
  const [volumeToggle, setVolumeToggle] = useState(false);
  const intervalRef = useRef(null);
  const duration = 3;

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setVolumeToggle((v) => !v);
      }, 300);
    } else {
      clearInterval(intervalRef.current);
      setVolumeToggle(false);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  const playNote = (e) => {
    e.stopPropagation();
    dispatch(setMuted(true));
    setIsPlaying(true);

    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "sine";
    osc.frequency.value = frequency;

    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.4, ctx.currentTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);

    setTimeout(() => {
      dispatch(setMuted(false));
      setIsPlaying(false);
    }, duration * 1000);
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
      <button onClick={playNote} className="transition-all duration-150">
        {isPlaying ? (
          volumeToggle ? (
            <VolumeUp sx={{ fontSize: 28 }} className="text-blue-300" />
          ) : (
            <VolumeDown sx={{ fontSize: 28 }} className="text-blue-200" />
          )
        ) : (
          <VolumeUp
            sx={{ fontSize: 28 }}
            className="hover:scale-120 hover:text-white/60 active:scale-90 active:text-white/30"
          />
        )}
      </button>
    </div>
  );
};

export default StringCard;
