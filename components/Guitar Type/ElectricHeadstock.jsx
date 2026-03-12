"use client";

import Image from "next/image";
import ElectricHeadstockSVG from "@/public/ElectricHeadstock.svg";
import { useState } from "react";

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
  { id: 0, label: "6" },
  { id: 1, label: "5" },
  { id: 2, label: "4" },
  { id: 3, label: "3" },
  { id: 4, label: "2" },
  { id: 5, label: "1" },
];

const ElectricHeadstock = ({ onStringSelect }) => {
  const [selectedString, setSelectedString] = useState(null);

  const handleSelect = (id) => {
    const next = selectedString === id ? null : id;
    setSelectedString(next);
    onStringSelect?.(next);
  };

  return (
    <div className="relative w-full h-full left-3 bottom-8">
      <Image
        src={ElectricHeadstockSVG}
        fill
        alt="Electric Guitar Headstock"
        className="object-contain invert"
        draggable={false}
      />

      {/* Tuner Knobs */}
      <div className="absolute top-34 -left-16 flex gap-2 z-10 -rotate-74">
        {STRINGS.map((string) => (
          <TunerKnob
            key={string.id}
            label={string.label}
            isSelected={selectedString === string.id}
            onClick={() => handleSelect(string.id)}
          />
        ))}
      </div>

      <div className="absolute bottom-6 left-15 -translate-x-1/2 rounded-full border py-2 px-4 whitespace-nowrap">
        6-in-line
      </div>
    </div>
  );
};

export default ElectricHeadstock;
