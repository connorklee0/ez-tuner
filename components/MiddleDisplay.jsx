import StringBarDisplayWrapper from "@/components/String Bar/StringBarDisplayWrapper";
import TunerDisplayWrapper from "@/components/Tuner Display/TunerDisplayWrapper";

const MiddleDisplay = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <TunerDisplayWrapper />
      <StringBarDisplayWrapper />
    </div>
  );
};

export default MiddleDisplay;
