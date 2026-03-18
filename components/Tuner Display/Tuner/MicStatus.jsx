import { Mic } from "@mui/icons-material";

const MicStatus = ({ isListening }) => {
  return (
    <div className="flex items-center gap-1 text-sm text-gray-300">
      {isListening ? (
        <>
          <Mic sx={{ fontSize: 16 }} /> Play the selected string to start tuning
        </>
      ) : (
        "Starting microphone..."
      )}
    </div>
  );
};

export default MicStatus;
