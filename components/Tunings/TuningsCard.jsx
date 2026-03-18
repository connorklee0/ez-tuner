"use client";

import CollapsibleCard from "@/components/CollapsibleCard";
import Tuning from "./Tuning";
import { TUNINGS } from "@/constants/tunings";
import { useDispatch, useSelector } from "react-redux";
import { setTuning } from "@/store/tuningSlice";
import { setTuningCardOpen } from "@/store/guitarSlice";
import { setSelectedString } from "@/store/stringSlice";

const TuningsCard = () => {
  const dispatch = useDispatch();
  const selectedKey = useSelector((state) => state.tuning.selectedKey);
  const isTuningCardOpen = useSelector(
    (state) => state.guitar.isTuningCardOpen,
  );

  const handleTuningClick = ({ tuning, key }) => {
    dispatch(setTuning(key));
    dispatch(setSelectedString({ stringNum: "6", note: tuning.strings[6] }));
  };

  console.log();

  return (
    <CollapsibleCard
      title={"Tuning"}
      subtitle={"Select a tuning"}
      isOpen={isTuningCardOpen}
      onToggle={() => dispatch(setTuningCardOpen(!isTuningCardOpen))}
    >
      <div className="flex flex-col gap-2 py-2 overflow-y-auto no-scrollbar overflow-x-hidden h-full">
        {Object.entries(TUNINGS).map(([key, tuning]) => (
          <Tuning
            key={key}
            label={tuning.label}
            strings={tuning.strings}
            isSelected={selectedKey === key}
            onClick={() => handleTuningClick({ key, tuning })}
          />
        ))}
      </div>
    </CollapsibleCard>
  );
};

export default TuningsCard;
