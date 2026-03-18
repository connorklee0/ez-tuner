"use client";

import Image from "next/image";
import AcousticHeadstockSVG from "@/public/AcousticHeadstock.svg";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedString, clearSelectedString } from "@/store/stringSlice";
import { TUNINGS } from "@/constants/tunings";

const TunerKnob = ({ label, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold transition-all duration-200 cursor-pointer
        ${
          isSelected
            ? "bg-blue-600 border-blue-200 text-white shadow-sm shadow-blue-400/50 scale-110"
            : "bg-white/10 border-white/30 text-white/60 hover:bg-white/20 hover:border-white/50 active:scale-90 hover:scale-110"
        }`}
    >
      {label}
    </button>
  );
};

const STRINGS = [
  { id: 0, stringNum: "6" },
  { id: 1, stringNum: "5" },
  { id: 2, stringNum: "4" },
  { id: 3, stringNum: "3" },
  { id: 4, stringNum: "2" },
  { id: 5, stringNum: "1" },
];

const AcousticHeadstock = () => {
  const dispatch = useDispatch();
  const selectedKey = useSelector((state) => state.tuning.selectedKey);
  const selectedStringNum = useSelector(
    (state) => state.string.selectedStringNum,
  );
  const tuning = TUNINGS[selectedKey] ?? TUNINGS.standard;

  const handleSelect = (stringNum) => {
    const note = tuning.strings[stringNum];
    if (selectedStringNum === stringNum) {
      dispatch(clearSelectedString());
    } else {
      dispatch(setSelectedString({ stringNum, note }));
    }
  };

  const leftStrings = STRINGS.slice(0, 3);
  const rightStrings = STRINGS.slice(3);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-2">
      {/* Fixed container */}
      <div className="relative w-36 h-95 bottom-4">
        <Image
          src={AcousticHeadstockSVG}
          fill
          alt="Acoustic Guitar Headstock"
          className="object-contain invert"
          draggable={false}
        />

        {/* Left knobs */}
        <div
          className="absolute flex flex-col-reverse gap-3 z-10 -rotate-3"
          style={{ top: "32%", left: "0%" }}
        >
          {leftStrings.map((string) => (
            <TunerKnob
              key={string.id}
              label={string.stringNum}
              isSelected={selectedStringNum === string.stringNum}
              onClick={() => handleSelect(string.stringNum)}
            />
          ))}
        </div>

        {/* Right knobs */}
        <div
          className="absolute flex flex-col gap-3 z-10 rotate-3"
          style={{ top: "32%", right: "4%" }}
        >
          {rightStrings.map((string) => (
            <TunerKnob
              key={string.id}
              label={string.stringNum}
              isSelected={selectedStringNum === string.stringNum}
              onClick={() => handleSelect(string.stringNum)}
            />
          ))}
        </div>

        {/* Label */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 rounded-full border py-1.5 px-4 text-sm whitespace-nowrap">
          3 + 3
        </div>
      </div>
    </div>
  );
};

export default AcousticHeadstock;
