"use client";

import CollapsibleCard from "@/components/CollapsibleCard";
import Tuning from "./Tuning";
import { TUNINGS } from "@/constants/tunings";
import { useDispatch, useSelector } from "react-redux";
import { setTuning } from "@/store/tuningSlice";

const TuningsCard = () => {
  const dispatch = useDispatch();
  const selectedKey = useSelector((state) => state.tuning.selectedKey);

  return (
    <CollapsibleCard title={"Tunings"} subtitle={"Select a tuning"}>
      <div className="flex flex-col gap-2 py-2 overflow-y-auto no-scrollbar overflow-x-hidden h-full">
        {Object.entries(TUNINGS).map(([key, tuning]) => (
          <Tuning
            key={key}
            label={tuning.label}
            strings={tuning.strings}
            isSelected={selectedKey === key}
            onClick={() => dispatch(setTuning(key))}
          />
        ))}
      </div>
    </CollapsibleCard>
  );
};

export default TuningsCard;
