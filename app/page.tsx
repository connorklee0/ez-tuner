import DisplayWrapper from "@/components/Tuner Display/DisplayWrapper";
import GuitarCard from "@/components/Guitar Type/GuitarCard";
import CollapsibleCard from "@/components/CollapsibleCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex gap-10">
        <CollapsibleCard title={"Tunings"} subtitle={"Select a tuning"} />
        <DisplayWrapper />
        <GuitarCard />
      </div>
    </div>
  );
}
