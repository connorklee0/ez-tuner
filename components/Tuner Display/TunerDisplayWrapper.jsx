"use client";

import { useSelector } from "react-redux";
import { noteToFrequency } from "@/utils/noteToFrequency";
import StringBarDisplay from "./String Bar/StringBarDisplay";
import TunerBar from "./Tuner/TunerBar";
import MicError from "./Tuner/MicError";
import MicStatus from "./Tuner/MicStatus";
import { useMicrophone } from "@/hooks/useMicrophone";

const TunerDisplayWrapper = () => {
  const selectedNote = useSelector((state) => state.string.selectedNote);
  const targetFrequency = noteToFrequency(selectedNote);

  const { cents, isListening, permissionError } =
    useMicrophone(targetFrequency);

  return (
    <div className="flex flex-col items-center justify-between py-4 border w-180 h-120 rounded-xl bg-white/15">
      <StringBarDisplay />
      {permissionError && <MicError />}
      <TunerBar cents={cents} permissionError={permissionError} />
      {!permissionError && <MicStatus isListening={isListening} />}
    </div>
  );
};

export default TunerDisplayWrapper;
