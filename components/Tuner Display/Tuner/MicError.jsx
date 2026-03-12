import { MicOff } from "@mui/icons-material";

const MicError = () => {
  return (
    <div className="flex flex-col items-center gap-2 text-center px-6">
      <div className="flex gap-2">
        <MicOff className="text-red-400" sx={{ fontSize: 32 }} />
        <p className="text-red-400 font-semibold">Microphone access denied</p>
      </div>
      <p className="text-sm text-gray-300">
        Please enable microphone permissions in your browser settings and reload
        the page.
      </p>
    </div>
  );
};

export default MicError;
