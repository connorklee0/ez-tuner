"use client";

import Image from "next/image";
import ElectricHeadstockSVG from "@/public/ElectricHeadstock.svg";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedString } from "@/store/stringSlice";
import { TUNINGS } from "@/constants/tunings";

const TunerKnob = ({ label, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-6 h-6 rounded-b-md rounded-t-xl flex items-center justify-center text-xs font-bold transition-all duration-200 cursor-pointer
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

const ElectricHeadstock = () => {
  const dispatch = useDispatch();
  const selectedKey = useSelector((state) => state.tuning.selectedKey);
  const selectedStringNum = useSelector(
    (state) => state.string.selectedStringNum,
  );
  const tuning = TUNINGS[selectedKey] ?? TUNINGS.standard;

  const handleSelect = (stringNum) => {
    const note = tuning.strings[stringNum];
    dispatch(setSelectedString({ stringNum, note }));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-2">
      <div className="relative w-36 h-95 left-2 bottom-4">
        {/* SVG */}
        <Image
          src={ElectricHeadstockSVG}
          fill
          alt="Electric Guitar Headstock"
          className="object-contain invert scale-115"
          draggable={false}
        />
        {/* Knobs — positioned relative to the container */}
        <div
          className="absolute flex gap-1 z-10 -rotate-75"
          style={{ top: "40%", left: "-42%" }}
        >
          {STRINGS.map((string) => (
            <TunerKnob
              key={string.id}
              label={string.stringNum}
              isSelected={selectedStringNum === string.stringNum}
              onClick={() => handleSelect(string.stringNum)}
            />
          ))}
        </div>

        <div className="absolute bottom-10 left-15 -translate-x-1/2 rounded-full border py-1.5 px-4 text-sm whitespace-nowrap">
          6-in-line
        </div>
      </div>
    </div>
  );
};

export default ElectricHeadstock;
