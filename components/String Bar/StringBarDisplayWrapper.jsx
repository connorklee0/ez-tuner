"use client";

import StringCard from "./StringCard";
import { TUNINGS } from "@/constants/tunings";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedString } from "@/store/stringSlice";

const StringBarDisplayWrapper = () => {
  const dispatch = useDispatch();
  const selectedKey = useSelector((state) => state.tuning.selectedKey);
  const selectedStringNum = useSelector(
    (state) => state.string.selectedStringNum,
  );
  const tuning = TUNINGS[selectedKey] ?? TUNINGS.standard;
  const selectedStyle = useSelector((state) => state.guitar.selectedStyle);

  const handleStringSelect = (stringNum, note) => {
    if (selectedStringNum === stringNum) {
      return;
    } else {
      dispatch(setSelectedString({ stringNum, note }));
    }
  };

  return (
    <div className="flex flex-col items-center py-2 px-6 gap-2 border w-180 h-45 rounded-xl bg-white/15">
      <div className="text-lg">
        Tuning: <span className="font-bold">{tuning.label}</span>, Guitar Type:{" "}
        <span className="font-bold">{selectedStyle}</span>
      </div>
      <div className="text-sm">Select a string to tune</div>
      <div className="flex justify-evenly w-full gap-4">
        {Object.entries(tuning.strings).map(([num, note]) => (
          <StringCard
            key={num}
            stringNum={num}
            note={note}
            isSelected={selectedStringNum === num}
            onClick={() => handleStringSelect(num, note)}
          />
        ))}
      </div>
    </div>
  );
};

export default StringBarDisplayWrapper;
