import { Check } from "@mui/icons-material";

const TunerIndicator = ({ diff = 0, isInTune = false }) => {
  const isTuneUp = diff < 0;

  return (
    <div className="flex flex-col items-center gap-1">
      <span
        className={`text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
          isInTune
            ? "text-green-400"
            : isTuneUp
              ? "text-blue-300"
              : "text-red-300"
        }`}
      >
        {isInTune ? "" : isTuneUp ? "Tune up" : "Tune down"}
      </span>

      <div className="flex flex-col items-center">
        <div
          className={`flex items-center justify-center w-16 h-10 rounded-md transition-colors duration-300 ${
            isInTune
              ? "bg-green-500/20 border border-green-400"
              : "bg-white/10 border border-white/30"
          }`}
        >
          {isInTune ? (
            <Check className="text-green-400" sx={{ fontSize: 22 }} />
          ) : (
            <span className="text-sm font-bold">
              {diff > 0 ? "-" : "+"}
              {Math.abs(diff).toFixed(1)}
              <span className="text-xs font-normal ml-0.5">Hz</span>
            </span>
          )}
        </div>

        <div
          className="w-0 h-0 transition-colors duration-300"
          style={{
            borderLeft: "8px solid transparent",
            borderRight: "8px solid transparent",
            borderTop: isInTune
              ? "10px solid rgba(74,222,128,0.4)"
              : "10px solid rgba(255,255,255,0.3)",
          }}
        />
      </div>
    </div>
  );
};

export default TunerIndicator;
