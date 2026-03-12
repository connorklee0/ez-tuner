"use client";

import CollapsibleCard from "@/components/CollapsibleCard";
import ElectricHeadstock from "@/components/Guitar Type/ElectricHeadstock";
import AcousticHeadstock from "@/components/Guitar Type/AcousticHeadstock";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setGuitarStyle, setGuitarCardOpen } from "@/store/guitarSlice";

const TYPES = ["3 + 3", "6-in-line"];

const GuitarCard = () => {
  const dispatch = useDispatch();
  const selectedStyle = useSelector((state) => state.guitar.selectedStyle);
  const index = TYPES.indexOf(selectedStyle);
  const isGuitarCardOpen = useSelector(
    (state) => state.guitar.isGuitarCardOpen,
  );

  const prev = () =>
    dispatch(setGuitarStyle(TYPES[(index - 1 + TYPES.length) % TYPES.length]));
  const next = () =>
    dispatch(setGuitarStyle(TYPES[(index + 1) % TYPES.length]));

  return (
    <CollapsibleCard
      title="Guitar Type"
      subtitle="Select your guitar style"
      isOpen={isGuitarCardOpen}
      onToggle={() => dispatch(setGuitarCardOpen(!isGuitarCardOpen))}
    >
      <div className="relative w-full h-full flex flex-col">
        <div className="relative w-full flex-1">
          {selectedStyle === "3 + 3" ? (
            <AcousticHeadstock />
          ) : (
            <ElectricHeadstock />
          )}
        </div>

        <div className="flex items-center justify-between px-2 pb-1 relative bottom-10">
          <button
            onClick={prev}
            className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
          >
            <ArrowBack sx={{ fontSize: 14 }} />
          </button>

          <div className="flex gap-1.5">
            {TYPES.map((type, i) => (
              <button
                key={i}
                onClick={() => dispatch(setGuitarStyle(TYPES[i]))}
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
