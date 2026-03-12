"use client";

import Image from "next/image";
import AcousticHeadstockSVG from "@/public/AcousticHeadstock.svg";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedString } from "@/store/stringSlice";
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
    dispatch(setSelectedString({ stringNum, note }));
  };

  const leftStrings = STRINGS.slice(0, 3);
  const rightStrings = STRINGS.slice(3);

  return (
    <div className="relative w-full h-full left-1 bottom-8">
      <Image
        src={AcousticHeadstockSVG}
        fill
        alt="Acoustic Guitar Headstock"
        className="object-contain invert"
        draggable={false}
      />

      <div className="absolute top-32 left-1 flex flex-col-reverse gap-3 z-10 -rotate-3">
        {leftStrings.map((string) => (
          <TunerKnob
            key={string.id}
            label={string.stringNum}
            isSelected={selectedStringNum === string.stringNum}
            onClick={() => handleSelect(string.stringNum)}
          />
        ))}
      </div>

      <div className="absolute top-32 right-2.5 flex flex-col gap-3 z-10 rotate-3">
        {rightStrings.map((string) => (
          <TunerKnob
            key={string.id}
            label={string.stringNum}
            isSelected={selectedStringNum === string.stringNum}
            onClick={() => handleSelect(string.stringNum)}
          />
        ))}
      </div>

      <div className="absolute bottom-10 left-20 -translate-x-1/2 rounded-full border py-2 px-4">
        3 + 3
      </div>
    </div>
  );
};

export default AcousticHeadstock;
