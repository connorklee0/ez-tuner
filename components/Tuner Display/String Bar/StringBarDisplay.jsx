"use client";

import { useEffect } from "react";
import StringCard from "./StringCard";
import { TUNINGS } from "@/constants/tunings";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedString, clearSelectedString } from "@/store/stringSlice";

const STRING_ORDER = [6, 5, 4, 3, 2, 1];

const StringBarDisplay = () => {
  const dispatch = useDispatch();
  const selectedKey = useSelector((state) => state.tuning.selectedKey);
  const selectedStringNum = useSelector(
    (state) => state.string.selectedStringNum,
  );
  const tuning = TUNINGS[selectedKey] ?? TUNINGS.standard;
  const selectedStyle = useSelector((state) => state.guitar.selectedStyle);

  const handleStringSelect = (stringNum, note) => {
    if (selectedStringNum === stringNum) {
      dispatch(clearSelectedString());
    } else {
      dispatch(setSelectedString({ stringNum, note }));
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log(e.key);
      if (e.key === "Enter") {
        dispatch(clearSelectedString());
        return;
      }

      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;

      const currentIndex = selectedStringNum
        ? STRING_ORDER.indexOf(Number(selectedStringNum))
        : -1;

      let nextIndex;
      if (e.key === "ArrowLeft") {
        nextIndex =
          currentIndex <= 0 ? STRING_ORDER.length - 1 : currentIndex - 1;
      } else {
        nextIndex =
          currentIndex >= STRING_ORDER.length - 1 ? 0 : currentIndex + 1;
      }

      const nextStringNum = STRING_ORDER[nextIndex];
      const nextNote = tuning.strings[nextStringNum];
      dispatch(
        setSelectedString({ stringNum: String(nextStringNum), note: nextNote }),
      );
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedStringNum, tuning]);

  return (
    <div className="flex flex-col items-center py-2 px-6 gap-3 w-full h-full">
      <div className="text-xl flex flex-col items-center">
        <span>
          Tuning: <span className="font-bold">{tuning.label}</span>
        </span>
        <span>
          Guitar Type: <span className="font-bold">{selectedStyle}</span>
        </span>
      </div>
      <div className="text-sm text-center text-gray-300">
        Click a string or use ← → to select
        <br />
        Click again or press Enter to deselect
      </div>
      <div className="flex justify-evenly w-full gap-4">
        {Object.entries(tuning.strings)
          .sort(([a], [b]) => Number(b) - Number(a))
          .map(([num, note]) => (
            <StringCard
              key={num}
              stringNum={num}
              note={note}
              isSelected={selectedStringNum === num}
              onClick={() => handleStringSelect(num, note)}
              frequency={tuning.frequencies[num]}
            />
          ))}
      </div>
    </div>
  );
};

export default StringBarDisplay;
