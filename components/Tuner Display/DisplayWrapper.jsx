import StringDisplay from "./StringDisplay";
import NoteDisplay from "./NoteDisplay";
import TunerBar from "./TunerBar";

const DisplayWrapper = () => {
  return (
    <div className="flex flex-col items-center justify-between py-12 border w-180 h-80 rounded-xl bg-white/15">
      <div className="flex flex-col items-center gap-2">
        <StringDisplay string={6} />
        <NoteDisplay note={"E"} />
      </div>
      <TunerBar />
    </div>
  );
};

export default DisplayWrapper;
