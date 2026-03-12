"use client";

import CollapsibleCard from "@/components/CollapsibleCard";
import ElectricHeadstock from "@/components/Guitar Type/ElectricHeadstock";
import AcousticHeadstock from "@/components/Guitar Type/AcousticHeadstock";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useState } from "react";

const TYPES = ["acoustic", "electric"];

const GuitarCard = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + TYPES.length) % TYPES.length);
  const next = () => setIndex((i) => (i + 1) % TYPES.length);

  return (
    <CollapsibleCard title="Guitar Type" subtitle="Select your guitar style">
      <div className="relative w-full h-full flex flex-col">
        {/* Headstock display */}
        <div className="relative w-full flex-1">
          {TYPES[index] === "acoustic" ? (
            <AcousticHeadstock />
          ) : (
            <ElectricHeadstock />
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between px-2 pb-1 relative bottom-10">
          <button
            onClick={prev}
            className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
          >
            <ArrowBack sx={{ fontSize: 14 }} />
          </button>

          {/* Dot indicators */}
          <div className="flex gap-1.5">
            {TYPES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                  i === index ? "bg-white scale-125" : "bg-white/30"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer active:scale-90 hover:scale-110"
          >
            <ArrowForward sx={{ fontSize: 14 }} />
          </button>
        </div>
      </div>
    </CollapsibleCard>
  );
};

export default GuitarCard;
