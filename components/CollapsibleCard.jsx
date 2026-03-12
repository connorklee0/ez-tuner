"use client";

import { useState } from "react";
import { ExpandLess } from "@mui/icons-material";

const CollapsibleCard = ({ title, subtitle, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`flex flex-col items-center border w-45 rounded-xl bg-white/15 px-2 transition-all duration-300 ease-in-out ${
        isOpen ? "h-126" : "h-28"
      }`}
    >
      {/* Header */}
      <div className="flex flex-col items-center pt-3 shrink-0">
        <span className="text-lg font-bold">{title}</span>
        <span className="text-xs text-gray-300">{subtitle}</span>
      </div>

      {/* Content */}
      <div
        className={`w-full flex-1 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>

      {/* Toggle button */}
      <div className="shrink-0 py-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-5 h-6 rounded-full border border-white/40 bg-white/10 hover:bg-white/20 cursor-pointer transition-all duration-300 ease-in-out active:scale-90 hover:scale-110"
        >
          <div
            className={`transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-0" : "rotate-180"
            }`}
          >
            <ExpandLess sx={{ fontSize: 20 }} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default CollapsibleCard;
