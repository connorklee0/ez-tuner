import TunerIndicator from "./TunerIndicator";

const TunerBar = ({ frequency, targetFrequency, permissionError = true }) => {
  const diff = frequency && targetFrequency ? frequency - targetFrequency : 0;
  const isInTune = Math.abs(diff) <= 0.75;

  // Map diff to needle: clamp to +-30hz range then convert to 0-100%
  const clampedDiff = Math.max(-30, Math.min(30, diff));
  const needlePercent = ((clampedDiff + 30) / 60) * 100;

  return (
    <div className="flex flex-col items-center justify-center p-6 w-full">
      <div className="relative w-full max-w-xl">
        {/* TunerIndicator — floats above needle */}
        <div
          className="absolute -top-14 transition-all duration-150"
          style={{ left: `calc(${needlePercent}% - 39px)` }}
        >
          {!permissionError && (
            <TunerIndicator diff={diff} isInTune={isInTune} />
          )}
        </div>

        {/* Gradient track */}
        <div
          className="relative h-12 rounded-full overflow-hidden shadow-lg"
          style={{
            background:
              "linear-gradient(to right, #3b82f6 0%, #6366f1 30%, #4a5568 45%, #22c55e 50%, #4a5568 55%, #a855f7 70%, #ef4444 100%)",
          }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.12) 0%, transparent 60%)",
            }}
          />

          <div
            className={`absolute top-0 bottom-0 transition-all duration-300 ${isInTune ? "opacity-60" : "opacity-25"}`}
            style={{
              left: "calc(50% - 16px)",
              width: "32px",
              background: "#22c55e",
            }}
          />

          {!permissionError && (
            <div
              className="absolute top-1/2 -translate-y-1/2 w-1.5 h-9 rounded-full bg-white z-10 transition-all duration-150"
              style={{
                left: `calc(${needlePercent}% - 3px)`,
                boxShadow: isInTune
                  ? "0 0 12px 4px rgba(34,197,94,0.9), 0 0 4px rgba(255,255,255,0.8)"
                  : "0 0 8px 2px rgba(255,255,255,0.5)",
              }}
            />
          )}
        </div>

        {/* Labels */}
        <div className="flex justify-between items-center mt-2.5 px-1">
          <span className="text-blue-300 text-sm italic">Flat ♭</span>
          <span
            className={`text-sm font-semibold uppercase tracking-widest transition-colors duration-300 ${isInTune ? "text-green-400" : "text-slate-400"}`}
          >
            In tune
          </span>
          <span className="text-red-300 text-sm italic">Sharp ♯</span>
        </div>
      </div>
    </div>
  );
};

export default TunerBar;
