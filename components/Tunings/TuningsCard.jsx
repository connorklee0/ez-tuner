"use client";

import CollapsibleCard from "@/components/CollapsibleCard";
import Tuning from "./Tuning";
import { TUNINGS } from "@/constants/tunings";
import { useState } from "react";

const TuningsCard = () => {
  const [selectedTuning, setSelectedTuning] = useState(null);

  return (
    <CollapsibleCard title={"Tunings"} subtitle={"Select a tuning"}>
      <div className="flex flex-col gap-2 py-2 overflow-y-auto no-scrollbar overflow-x-hidden h-full">
        {Object.entries(TUNINGS).map(([key, tuning]) => (
          <Tuning
            key={key}
            label={tuning.label}
            strings={tuning.strings}
            isSelected={selectedTuning === key}
            onClick={() =>
              setSelectedTuning(selectedTuning === key ? null : key)
            }
          />
        ))}
      </div>
    </CollapsibleCard>
  );
};

export default TuningsCard;
