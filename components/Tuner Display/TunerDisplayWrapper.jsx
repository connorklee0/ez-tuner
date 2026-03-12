"use client";

import TunerBar from "./TunerBar";
import StringBarDisplay from "./String Bar/StringBarDisplay";

const TunerDisplayWrapper = () => {
  return (
    <div className="flex flex-col items-center justify-between py-4 border w-180 h-120 rounded-xl bg-white/15">
      <StringBarDisplay />
      Play the selected string on your guitar to start tuning
      <TunerBar />
    </div>
  );
};

export default TunerDisplayWrapper;
