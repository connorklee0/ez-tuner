import { Check } from "@mui/icons-material";
import { useState, useEffect, useRef } from "react";
import { setMuted } from "@/store/stringSlice";
import { useDispatch } from "react-redux";

const playChime = () => {
  const audio = new Audio("/sounds/success.mp3");
  audio.play();
};

const TunerIndicator = ({ diff = 0, isInTune = false }) => {
  const isTuneUp = diff < 0;
  const [celebrating, setCelebrating] = useState(false);
  const [showInTuneText, setShowInTuneText] = useState(false);
  const celebrateTimeoutRef = useRef(null);
  const textTimeoutRef = useRef(null);
  const hasPlayedRef = useRef(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInTune && !hasPlayedRef.current) {
      hasPlayedRef.current = true;
      setCelebrating(true);

      celebrateTimeoutRef.current = setTimeout(() => {
        setCelebrating(false);
        setShowInTuneText(true);
        playChime();
        dispatch(setMuted(true));
        setTimeout(() => {
          dispatch(setMuted(false));
        }, 1500);
      }, 3000);
    }

    if (!isInTune) {
      hasPlayedRef.current = false;
      setCelebrating(false);
      setShowInTuneText(false);
      if (celebrateTimeoutRef.current)
        clearTimeout(celebrateTimeoutRef.current);
      if (textTimeoutRef.current) clearTimeout(textTimeoutRef.current);
    }

    return () => {
      if (celebrateTimeoutRef.current)
        clearTimeout(celebrateTimeoutRef.current);
      if (textTimeoutRef.current) clearTimeout(textTimeoutRef.current);
    };
  }, [isInTune]);

  return (
    <div className="flex flex-col items-center gap-1">
      {/* Label */}
      <span
        className={`text-xs font-semibold uppercase whitespace-nowrap tracking-widest transition-colors duration-300 absolute -top-4 ${
          isInTune
            ? celebrating
              ? "text-green-300"
              : "text-green-400"
            : isTuneUp
              ? "text-blue-300"
              : "text-red-300"
        }`}
      >
        {celebrating ? (
          <span className="flex items-center gap-1 -top-4 absolute -left-3.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="text-2xl font-bold text-green-300 animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                .
              </span>
            ))}
          </span>
        ) : showInTuneText ? (
          "In tune"
        ) : isInTune ? (
          ""
        ) : isTuneUp ? (
          "Tune up"
        ) : (
          "Tune down"
        )}
      </span>

      <div className="flex flex-col items-center">
        {/* Tag body */}
        <div
          className={`flex items-center justify-center w-16 h-10 rounded-md transition-all duration-300 ${
            isInTune
              ? celebrating
                ? "bg-green-500/20 border border-green-400"
                : " bg-green-400/40 border-2 border-green-300 shadow-lg shadow-green-400/60"
              : "bg-white/10 border border-white/30"
          }`}
        >
          {isInTune ? (
            <Check
              className={`transition-all duration-300 ${celebrating ? "text-green-300" : "text-green-400"}`}
              sx={{ fontSize: 26 }}
            />
          ) : (
            <span className="text-sm font-bold">
              {diff > 0 ? "-" : "+"}
              {Math.abs(diff).toFixed(1)}
              <span className="text-xs font-normal ml-0.5">Hz</span>
            </span>
          )}
        </div>

        {/* Arrow tip */}
        <div
          className="w-0 h-0 transition-colors duration-300"
          style={{
            borderLeft: "8px solid transparent",
            borderRight: "8px solid transparent",
            borderTop: isInTune
              ? celebrating
                ? "10px solid rgba(74,222,128,0.7)"
                : "10px solid rgba(74,222,128,0.4)"
              : "10px solid rgba(255,255,255,0.3)",
          }}
        />
      </div>
    </div>
  );
};

export default TunerIndicator;
