"use client";

import { Bot } from "lucide-react";

export default function ChatWidget() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3 cursor-pointer group transition-all duration-300 scale-100 opacity-100">
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
              <svg
                viewBox="0 0 64 72"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="robotGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#8500db" />
                    <stop offset="100%" stopColor="#d946ef" />
                  </linearGradient>
                </defs>

                {/* Antenna */}
                <line
                  x1="32"
                  y1="4"
                  x2="32"
                  y2="10"
                  stroke="url(#robotGradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="32" cy="3" r="2.5" fill="url(#robotGradient)" />

                {/* Body */}
                <rect
                  x="10"
                  y="10"
                  width="44"
                  height="52"
                  rx="18"
                  fill="url(#robotGradient)"
                />

                {/* Face */}
                <rect
                  x="16"
                  y="18"
                  width="32"
                  height="20"
                  rx="10"
                  fill="#18181b"
                />

                {/* Eyes */}
                <circle cx="25" cy="28" r="3" fill="#fff" />
                <circle cx="39" cy="28" r="3" fill="#fff" />

                {/* Smile */}
                <path
                  d="M24 35 Q32 41 40 35"
                  stroke="#fff"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />

                {/* Arms */}
                <line
                  x1="10"
                  y1="30"
                  x2="3"
                  y2="36"
                  stroke="url(#robotGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle cx="3" cy="36" r="3" fill="url(#robotGradient)" />

                {/* Right Arm */}
                <g
                  style={{
                    transformOrigin: "54px 30px",
                    animation: "waveHand 1.5s ease-in-out infinite",
                  }}
                >
                  <line
                    x1="54"
                    y1="30"
                    x2="61"
                    y2="22"
                    stroke="url(#robotGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <circle cx="61" cy="22" r="3" fill="url(#robotGradient)" />
                </g>

                {/* Legs */}
                <line
                  x1="24"
                  y1="62"
                  x2="24"
                  y2="69"
                  stroke="url(#robotGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <line
                  x1="40"
                  y1="62"
                  x2="40"
                  y2="69"
                  stroke="url(#robotGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
