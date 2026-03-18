"use client";

import { useSelector } from "react-redux";
import { TUNINGS } from "@/constants/tunings";
import StringBarDisplay from "./String Bar/StringBarDisplay";
import TunerBar from "./Tuner/TunerBar";
import MicError from "./Tuner/MicError";
import MicStatus from "./Tuner/MicStatus";
import { useMicrophone } from "@/hooks/useMicrophone";

const TunerDisplayWrapper = () => {
  const selectedKey = useSelector((state) => state.tuning.selectedKey);
  const selectedStringNum = useSelector(
    (state) => state.string.selectedStringNum,
  );
  const tuning = TUNINGS[selectedKey] ?? TUNINGS.standard;
  const targetFrequency = selectedStringNum
    ? tuning.frequencies[Number(selectedStringNum)]
    : null;

  const { frequency, isListening, permissionError } = useMicrophone();

  console.log(frequency)

  return (
    <div className="flex flex-col items-center justify-between py-4 border w-180 h-120 rounded-xl bg-white/15">
      <StringBarDisplay />
      {permissionError && <MicError />}
      <TunerBar
        frequency={frequency}
        targetFrequency={targetFrequency}
        permissionError={permissionError}
      />
      {!permissionError && <MicStatus isListening={isListening} />}
    </div>
  );
};

export default TunerDisplayWrapper;
