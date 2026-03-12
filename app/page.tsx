import GuitarCard from "@/components/Guitar Type/GuitarCard";
import TuningsCard from "@/components/Tunings/TuningsCard";
import MiddleDisplay from "@/components/MiddleDisplay";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex gap-5">
        <TuningsCard />
        <MiddleDisplay />
        <GuitarCard />
      </div>
    </div>
  );
}
