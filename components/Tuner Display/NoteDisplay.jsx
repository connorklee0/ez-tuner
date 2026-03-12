import React from "react";

const NoteDisplay = ({ note }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-5xl uppercase">{note}</div>
      <div className="text-sm text-gray-300 italic">
        Play the selected string on your guitar to start tuning
      </div>
    </div>
  );
};

export default NoteDisplay;
