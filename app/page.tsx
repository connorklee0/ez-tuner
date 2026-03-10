import DisplayWrapper from "@/components/Tuner Display/DisplayWrapper";
import GuitarCard from "@/components/Guitar Type/GuitarCard";
import TuningsCard from "@/components/Tunings/TuningsCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex gap-5">
        <TuningsCard />
        <DisplayWrapper />
        <GuitarCard />
      </div>
    </div>
  );
}
