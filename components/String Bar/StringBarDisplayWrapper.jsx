import StringCard from "./StringCard";
import { TUNINGS } from "@/constants/tunings";

const PLACEHOLDER_TUNING = TUNINGS.standard;

const StringBarDisplayWrapper = () => {
  return (
    <div className="flex flex-col items-center py-2 px-6 gap-3 border w-180 h-40 rounded-xl bg-white/15">
      <div className="text-xl">Select a string to tune</div>
      <div className="flex justify-evenly w-full gap-4">
        {Object.entries(PLACEHOLDER_TUNING.strings).map(([num, note]) => (
          <StringCard key={num} stringNum={num} note={note} />
        ))}
      </div>
    </div>
  );
};

export default StringBarDisplayWrapper;
