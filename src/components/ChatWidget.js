"use client";

import { useState } from "react";
import RobotMain from "./RobotMain";
import RobotBox from "./RobotBox";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    {!isOpen && (
    <div
      onClick={() => setIsOpen(true)}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3 cursor-pointer group transition-all duration-300"
    >
      <div className="relative hidden sm:block bg-white text-left px-5 py-3 rounded-2xl shadow-2xl border border-gray-100 max-w-[220px] transition-all duration-300 hover:scale-105">
        <div className="text-[#8500db] font-bold text-sm">Hi, I'm Vio</div>
        <div className="text-gray-600 text-xs mt-0.5 font-medium leading-tight">
          I'm here to help you!
        </div>
        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white border-r border-t border-gray-100 rotate-45"></div>
      </div>

      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-4 bg-brand-primary/30 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300 scale-x-90"></div>
        <div className="relative transform group-hover:scale-110 active:scale-95 transition-all duration-300">
          <div
            className="relative flex items-center justify-center"
            style={{
              width: "64px",
              height: "64px",
            }}
          >
            <div
              className="vio-mascot animate-float"
              style={{
                width: "50px",
                height: "58px",
                minWidth: "50px",
                minHeight: "58px",
                animation: "float 3s ease-in-out infinite",
              }}
            >
              {/* yha robot ki svg bnani */}
              <RobotMain/>
            </div>
          </div>
        </div>
      </div>
    </div>
    )}
    {isOpen && (
    <RobotBox onClose={() => setIsOpen(false)} />
  )}
    </>
  );
}
