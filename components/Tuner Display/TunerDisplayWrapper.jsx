"use client";

import TunerBar from "./Tuner/TunerBar";
import StringBarDisplay from "./String Bar/StringBarDisplay";
import MicError from "./Tuner/MicError";
import MicStatus from "./Tuner/MicStatus";
import { useMicrophone } from "@/hooks/useMicrophone";

const TunerDisplayWrapper = () => {
  const { cents, isListening, permissionError, startListening } =
    useMicrophone();

  return (
    <div className="flex flex-col items-center justify-between py-4 border w-180 h-120 rounded-xl bg-white/15">
      <StringBarDisplay />
      {permissionError ? (
        <MicError onRetry={startListening} />
      ) : (
        <MicStatus isListening={isListening} />
      )}
      <TunerBar cents={cents} />
    </div>
  );
};

export default TunerDisplayWrapper;
