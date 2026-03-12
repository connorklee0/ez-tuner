"use client";

import StringDisplay from "./StringDisplay";
import NoteDisplay from "./NoteDisplay";
import TunerBar from "./TunerBar";
import { useSelector } from "react-redux";

const TunerDisplayWrapper = () => {
  const { selectedStringNum, selectedNote } = useSelector(
    (state) => state.string,
  );

  return (
    <div className="flex flex-col items-center justify-between py-12 border w-180 h-80 rounded-xl bg-white/15">
      <div className="flex flex-col items-center gap-2">
        <StringDisplay string={selectedStringNum} />
        <NoteDisplay note={selectedNote} />
      </div>
      <TunerBar />
    </div>
  );
};

export default TunerDisplayWrapper;
