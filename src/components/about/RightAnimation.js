"use client";

import { useState, useEffect } from "react";

import React from "react";
import {
  User,
  Sparkles,
  Target,
  ArrowRight,
  MessageCircle,
  Bot,
  CircleCheck,
  FileText,
} from "lucide-react";

export default function RightAnimation() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const delays = {
      // ---------- TOP ----------
      0: 500,
      1: 500,
      2: 500,
      3: 500,
      4: 500,
      5: 500,
      6: 500,
      7: 1000,

      // hide
      8: 700,
      9: 700,
      10: 700,
      11: 700,
      12: 700,

      // ---------- CENTER ----------
      13: 800,
      14: 700,
      15: 700,
      16: 700,
      
    };

    const timer = setTimeout(() => {
      setPhase((prev) => (prev >= 16 ? 0 : prev + 1));
    }, delays[phase] ?? 700);

    return () => clearTimeout(timer);
  }, [phase]);

  return (
    <div className="hidden lg:block">
      <div className="relative flex min-h-[600px] w-full flex-col">
        {/* top boxes */}
        <div className="relative flex-1 transition-all duration-700 z-10 scale-100">
          <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-purple-400/10 to-fuchsia-400/10 blur-2xl transition-opacity duration-700 opacity-100"></div>
          <div className="relative h-full p-6">
            {/* top card 1 */}
            <div
              className={`absolute rounded-xl border border-purple-200/50 bg-white/90 p-3 shadow-xl backdrop-blur-xl transition-all duration-1000 translate-y-0 ${
                phase >= 1 && phase < 9
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
              style={{
                left: "10%",
                top: "15%",
                width: "140px",
                animation: "floatSlow 5s ease-in-out infinite",
                animationDelay: "0s",
              }}
            >
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-fuchsia-600">
                  <User className="h-4 w-4 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-xs font-semibold text-gray-800">
                    Enterprise Admin
                  </div>
                  <div className="text-[9px] text-gray-500">Tenant Owner</div>
                </div>
                <svg
                  className="h-3 w-3 shrink-0 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div className="text-[9px] leading-tight text-gray-600">
                Setting up assistants...
              </div>
            </div>

            {/* top card 2 */}
            <div
              className={`absolute rounded-xl border border-purple-200/50 bg-white/90 p-3 shadow-xl backdrop-blur-xl transition-all duration-1000 translate-y-0 ${
                phase >= 2 && phase < 10
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
              style={{
                left: "35%",
                top: "35%",
                width: "140px",
                animation: "floatSlow 5.3s ease-in-out infinite",
                animationDelay: "0.4s",
              }}
            >
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-fuchsia-600">
                  <User className="h-4 w-4 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-xs font-semibold text-gray-800">
                    Enterprise Admin
                  </div>
                  <div className="text-[9px] text-gray-500">Tenant Owner</div>
                </div>
                <svg
                  className="h-3 w-3 shrink-0 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div className="text-[9px] leading-tight text-gray-600">
                Setting up assistants...
              </div>
            </div>

            {/* top card 3 */}
            <div
              className={`absolute rounded-xl border border-purple-200/50 bg-white/90 p-3 shadow-xl backdrop-blur-xl transition-all duration-1000 translate-y-0 ${
                phase >= 3 && phase < 11
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
              style={{
                left: "60%",
                top: "15%",
                width: "140px",
                animation: "floatSlow 5.6s ease-in-out infinite",
                animationDelay: "0.8s",
              }}
            >
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-fuchsia-600">
                  <User className="h-4 w-4 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-xs font-semibold text-gray-800">
                    Enterprise Admin
                  </div>
                  <div className="text-[9px] text-gray-500">Tenant Owner</div>
                </div>
                <svg
                  className="h-3 w-3 shrink-0 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div className="text-[9px] leading-tight text-gray-600">
                Setting up assistants...
              </div>
            </div>

            {/* top card 4 */}
            <div
              className={`absolute rounded-lg p-2 shadow-lg backdrop-blur-lg transition-all duration-1000 ${
                phase >= 4 && phase < 12
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-90"
              }`}
              style={{
                right: "15%",
                top: "25%",
                background:
                  "linear-gradient(135deg, rgba(168, 85, 247, 0.9), rgba(236, 72, 153, 0.9))",
                animation: "floatSlow 4s ease-in-out infinite",
                animationDelay: "0.5s",
              }}
            >
              <div className="flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-white" />
                <span className="text-[10px] font-bold text-white">
                  Knowledge
                </span>
              </div>
            </div>

            {/* top card 5 */}
            <div
              className={`absolute rounded-lg p-2 shadow-lg backdrop-blur-lg transition-all duration-1000 ${
                phase >= 5 && phase < 12
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-90"
              }`}
              style={{
                right: "35%",
                top: "43%",
                background:
                  "linear-gradient(135deg, rgba(168, 85, 247, 0.9), rgba(236, 72, 153, 0.9))",
                animation: "floatSlow 4.5s ease-in-out infinite",
                animationDelay: "0.8s",
              }}
            >
              <div className="flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-white" />
                <span className="text-[10px] font-bold text-white">
                  Proposal
                </span>
              </div>
            </div>

            {/* top card 6 */}
            <div
              className={`absolute rounded-lg p-2 shadow-lg backdrop-blur-lg transition-all duration-1000 ${
                phase >= 6 && phase < 12
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-90"
              }`}
              style={{
                right: "55%",
                top: "61%",
                background:
                  "linear-gradient(135deg, rgba(168, 85, 247, 0.9), rgba(236, 72, 153, 0.9))",
                animation: "floatSlow 5s ease-in-out infinite",
                animationDelay: "1.1s",
              }}
            >
              <div className="flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-white" />
                <span className="text-[10px] font-bold text-white">
                  Analytics
                </span>
              </div>
            </div>

            <div
              className={`absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r from-emerald-500/90 to-green-600/90 px-4 py-1.5 shadow-lg backdrop-blur-lg transition-all duration-700 ${
                phase >= 7 && phase < 13
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-90"
              }`}
            >
              <div className="flex items-center gap-2">
                <Target className="h-3 w-3 text-white" />
                <span className="text-xs font-bold text-white">
                  Assistant Ready
                </span>
              </div>
            </div>

            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              style={{ zIndex: 1 }}
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(168,85,247,0.4)" />
                  <stop offset="100%" stopColor="rgba(236,72,153,0.4)" />
                </linearGradient>
              </defs>

              <line
                x1="30%"
                y1="30%"
                x2="70%"
                y2="45%"
                stroke="url(#grad1)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="animate-pulse"
              />

              <line
                x1="40%"
                y1="45%"
                x2="60%"
                y2="55%"
                stroke="url(#grad1)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="animate-pulse"
                style={{ animationDelay: "0.3s" }}
              />
            </svg>
          </div>
        </div>

        <div className="relative flex h-16 items-center justify-center">
          <div className="h-full w-0.5 bg-linear-to-b from-purple-400/60 via-fuchsia-500/60 to-pink-500/60">
            <div
              className="h-3 w-3 rounded-full bg-linear-to-br from-fuchsia-500 to-pink-600 shadow-lg shadow-fuchsia-500/50"
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                animation: "flowDown 4s ease-in-out infinite",
              }}
            ></div>
          </div>
          <ArrowRight className="lucide lucide-arrow-right absolute h-4 w-4 rotate-90 text-fuchsia-500" />
        </div>

        <div className="relative flex-1 transition-all duration-700 z-10 scale-100">
          <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-fuchsia-400/10 to-pink-400/10 blur-2xl transition-opacity duration-700 opacity-100"></div>
          <div className="relative h-full p-6">
            {/* center card 1 */}
            <div
              className={`absolute top-[15%] left-[8%] rounded-2xl rounded-tl-sm border border-gray-200 bg-white/95 p-4 shadow-xl backdrop-blur-xl transition-all duration-1000 w-[45%]
                ${
                  phase >= 6 && phase <= 12
                    ? "translate-x-0 opacity-100 scale-100"
                    : "-translate-x-8 opacity-0 scale-95"
                }`}
            >
              <div className="flex items-start gap-2">
                <MessageCircle className="lucide lucide-message-circle mt-0.5 h-4 w-4 shrink-0 text-fuchsia-600" />
                <div className="flex-1">
                  <div className="mb-1 text-xs font-semibold text-gray-800">
                    Client Request
                  </div>
                  <div className="text-[10px] leading-relaxed text-gray-600">
                    "Send us a proposal for our enterprise AI rollout."
                  </div>
                </div>
              </div>
            </div>

            {/* center card 2 */}
            <div
              className={`absolute top-[10%] right-[8%] rounded-2xl rounded-tr-sm border border-white/40 p-4 shadow-xl backdrop-blur-xl transition-all duration-1000 w-[48%]
              ${
                phase >= 7 && phase <= 13
                  ? "translate-x-0 opacity-100 scale-100"
                  : "translate-x-8 opacity-0 scale-95"
              }`}
              style={{
                background:
                  "linear-gradient(135deg, rgba(168, 85, 247, 0.95), rgba(236, 72, 153, 0.95))",
              }}
            >
              <div className="flex items-start gap-2">
                <Bot className="lucide lucide-bot h-5 w-5 shrink-0 animate-pulse text-white" />
                <div className="flex-1">
                  <div className="mb-1.5 flex items-center gap-1 text-xs font-semibold text-white/95">
                    Proposal Assistant
                    <Sparkles className="lucide lucide-sparkles h-3 w-3 animate-pulse" />
                  </div>
                  <div className="mb-2 text-[10px] leading-relaxed text-white/90">
                    Generating tailored proposal with pricing & scope...
                  </div>
                  <div className="flex gap-1">
                    <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/30">
                      <div
                        className="h-full rounded-full bg-white transition-all duration-1000"
                        style={{
                          width: phase >= 1 ? "100%" : "0%",
                        }}
                      ></div>
                    </div>
                    <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/30">
                      <div
                        className="h-full rounded-full bg-white transition-all duration-1000"
                        style={{
                          width: phase >= 2 ? "100%" : "0%",
                        }}
                      ></div>
                    </div>
                    <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/30">
                      <div
                        className="h-full rounded-full bg-white transition-all duration-1000"
                        style={{
                          width: phase >= 3 ? "100%" : "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* center card 3 */}
            <div
              className={`absolute bottom-[25%] left-[12%] rounded-xl border border-gray-200 bg-white/90 p-3 shadow-lg backdrop-blur-xl transition-all duration-1000
              ${
                phase >= 8 && phase <= 14
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-8 opacity-0 scale-95"
              }`}
              style={{ width: "35%" }}
            >
              <div className="mb-1 text-[9px] text-gray-600">
                Proposal Progress
              </div>
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3].map((dot) => (
                  <div
                    key={dot}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      phase >= dot + 2
                        ? "scale-110 bg-linear-to-br from-fuchsia-500 to-pink-600"
                        : "scale-100 bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* center card 4 */}
            <div
              className={`absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r from-emerald-500/95 to-green-600/95 px-5 py-2 shadow-xl backdrop-blur-lg transition-all duration-700
              ${
                phase >= 10 && phase <= 14
                  ? "opacity-100 scale-110"
                  : "opacity-0 scale-90"
              }`}
            >
              <div className="flex items-center gap-2">
                <CircleCheck className="lucide lucide-circle-check h-5 w-5 text-white" />
                <span className="text-sm font-bold text-white">
                  Proposal Tailored
                </span>
              </div>
            </div>

            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(236,72,153,0.5)" />
                  <stop offset="50%" stopColor="rgba(168,85,247,0.5)" />
                  <stop offset="100%" stopColor="rgba(16,185,129,0.4)" />
                </linearGradient>
              </defs>

              <path
                d="M 30 30 Q 50 45 70 25"
                fill="none"
                stroke="url(#grad2)"
                strokeWidth="2"
                strokeDasharray="5 5"
                className="animate-pulse"
              />
            </svg>
          </div>
        </div>

        {/* 2nd arrow animation */}
        <div className="relative flex h-16 items-center justify-center">
          <div className="h-full w-px bg-linear-to-b from-pink-400/60 via-violet-500/60 to-indigo-500/60">
            <div
              className="h-2.5 w-2.5 rounded-full bg-linear-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/50"
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                animation: "flowDown 4s ease-in-out infinite",
              }}
            ></div>
          </div>
          <ArrowRight className="lucide lucide-arrow-right absolute h-4 w-4 rotate-90 text-violet-500" />
        </div>
        <div className="relative flex-1 transition-all duration-700 z-10 scale-100">
          <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-violet-400/10 to-indigo-400/10 blur-2xl transition-opacity duration-700 opacity-100"></div>
          <div className="relative h-full p-6">
            <div className="absolute top-[12%] left-[8%] flex -space-x-2">
              {/* user 1 */}
              <div
                className={`h-9 w-9 rounded-full border-2 border-white shadow-lg transition-all duration-500
                ${
                  phase >= 6 && phase <= 12
                    ? "scale-100 opacity-100"
                    : "scale-75 opacity-0"
                }`}
                style={{
                  background:
                    "linear-gradient(135deg, hsl(260, 70%, 60%), hsl(240, 65%, 55%))",
                }}
              >
                <User className="m-auto mt-1.5 h-5 w-5 text-white" />
              </div>
              {/* user 2 */}
              <div
                className={`h-9 w-9 rounded-full border-2 border-white shadow-lg transition-all duration-500
                  ${
                    phase >= 7 && phase <= 12
                      ? "scale-100 opacity-100"
                      : "scale-75 opacity-0"
                  }`}
                style={{
                  background:
                    "linear-gradient(135deg, hsl(280, 70%, 60%), hsl(255, 65%, 55%))",
                }}
              >
                <User className="m-auto mt-1.5 h-5 w-5 text-white" />
              </div>
              {/* user 3 */}
              <div
                className={`h-9 w-9 rounded-full border-2 border-white shadow-lg transition-all duration-500
                ${
                  phase >= 8 && phase <= 12
                    ? "scale-100 opacity-100"
                    : "scale-75 opacity-0"
                }`}
                style={{
                  background:
                    "linear-gradient(135deg, hsl(300, 70%, 60%), hsl(270, 65%, 55%))",
                }}
              >
                <User className="m-auto mt-1.5 h-5 w-5 text-white" />
              </div>
            </div>

            {/* bottom card 1 */}
            <div
              className={`absolute rounded-xl border border-violet-200/60 bg-white/95 p-3 shadow-xl backdrop-blur-xl transition-all duration-1000
              ${
                phase >= 7 && phase <= 14
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-6 opacity-0 scale-95"
              }`}
              style={{
                left: "15%",
                top: "35%",
                width: "26%",
              }}
            >
              <div className="mb-2 flex items-center justify-between">
                <div className="text-[10px] font-bold text-gray-800">
                  AI Assistant
                </div>
                <FileText className="lucide lucide-file-text h-3.5 w-3.5 text-violet-600" />
              </div>
              <div className="mb-2 text-[9px] text-gray-600">
                Assistant ready
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-linear-to-r from-violet-500 to-indigo-600 transition-all duration-1000"
                  style={{
                    width: phase >= 8 ? "60%" : "20%",
                  }}
                ></div>
              </div>
            </div>

            {/* bottom card 2 */}
            <div
              className={`absolute rounded-xl border border-violet-200/60 bg-white/95 p-3 shadow-xl backdrop-blur-xl transition-all duration-1000
              ${
                phase >= 8 && phase <= 14
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-6 opacity-0 scale-95"
              }`}
              style={{
                left: "43%",
                top: "60%",
                width: "26%",
              }}
            >
              <div className="mb-2 flex items-center justify-between">
                <div className="text-[10px] font-bold text-gray-800">
                  Proposal
                </div>
                <FileText className="lucide lucide-file-text h-3.5 w-3.5 text-violet-600" />
              </div>
              <div className="mb-2 text-[9px] text-gray-600">
                Draft approved
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-linear-to-r from-violet-500 to-indigo-600 transition-all duration-1000"
                  style={{
                    width: phase >= 9 ? "75%" : "20%",
                  }}
                ></div>
              </div>
            </div>

            {/* bottom card 3 */}
            <div
              className={`absolute rounded-xl border border-violet-200/60 bg-white/95 p-3 shadow-xl backdrop-blur-xl transition-all duration-1000
              ${
                phase >= 9 && phase <= 14
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-6 opacity-0 scale-95"
              }`}
              style={{
                left: "71%",
                top: "35%",
                width: "26%",
              }}
            >
              <div className="mb-2 flex items-center justify-between">
                <div className="text-[10px] font-bold text-gray-800">
                  Analytics
                </div>
                <FileText className="lucide lucide-file-text h-3.5 w-3.5 text-violet-600" />
              </div>
              <div className="mb-2 text-[9px] text-gray-600">
                Dashboard live
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-linear-to-r from-violet-500 to-indigo-600 transition-all duration-1000"
                  style={{
                    width: phase >= 10 ? "90%" : "20%",
                  }}
                ></div>
              </div>
            </div>

            {/* bottom card 4 */}
            <div
              className={`absolute right-[10%] bottom-[35%] left-[10%] transition-all duration-1000
              ${
                phase >= 8 && phase <= 14
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
            >
              <div className="relative h-1 rounded-full bg-linear-to-r from-violet-300 via-purple-300 to-indigo-300 shadow-sm">
                <div
                  className={`absolute h-3 w-3 rounded-full border-2 border-white shadow-lg transition-all duration-500
                     ${phase >= 9 
                      ? "scale-125 bg-linear-to-br from-violet-500 to-indigo-600"
                      : "scale-100 bg-gray-400"}`}
                  style={{
                    left: "25%",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                />
                <div
                  className={`absolute h-3 w-3 rounded-full border-2 border-white shadow-lg transition-all duration-500
                   ${phase >= 10 
                    ? "scale-125 bg-linear-to-br from-violet-500 to-indigo-600"
                    : "scale-100 bg-gray-400"}`}
                  style={{
                    left: "55%",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                />
                <div
                  className={`absolute h-3 w-3 rounded-full border-2 border-white shadow-lg transition-all duration-500
                    ${phase >= 11 
                        ? "scale-125 bg-linear-to-br from-violet-500 to-indigo-600"
                        : "scale-100 bg-gray-400"}`}
                  style={{
                    left: "85%",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                />
              </div>
            </div>

            {/* bottom card 5 */}
            <div
              className={`absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r from-emerald-500/95 to-teal-600/95 px-5 py-2 shadow-xl backdrop-blur-lg transition-all duration-700
              ${phase >= 13 && phase <= 14 
              ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
              <div className="flex items-center gap-2">
                <CircleCheck className="lucide lucide-circle-check h-5 w-5 text-white" />
                <span className="text-sm font-bold text-white">
                  Workspace Ready
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex h-12 items-center justify-center">
          <div className={`transition-all duration-1000 ${
    phase >= 14 && phase <= 15 
      ? "opacity-100 scale-100 translate-y-0"
      : "opacity-0 scale-95 translate-y-4"
  }`}>
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-600">
              <div className="flex items-center">
                <ArrowRight className="lucide lucide-arrow-right h-4 w-4 animate-pulse" />
                <span className="ml-1">Continuous Growth & Retention</span>
              </div>
            </div>

            <svg
              className="absolute -top-4 left-1/2 h-16 w-24 -translate-x-1/2"
              viewBox="0 0 100 60"
              fill="none"
            >
              <defs>
                <linearGradient id="loopGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(109,40,217,0.6)" />
                  <stop offset="100%" stopColor="rgba(168,85,247,0.6)" />
                </linearGradient>
              </defs>

              <path
                d="M 50 60 Q 20 30 50 0"
                fill="none"
                stroke="url(#loopGrad)"
                strokeWidth="2"
                strokeDasharray="5 3"
                className="animate-pulse"
              />

              <circle
                cx="50"
                cy="0"
                r="3"
                fill="url(#loopGrad)"
                className="animate-pulse"
              />
            </svg>
          </div>
        </div>

        <div
          className="absolute h-1 w-1 rounded-full bg-linear-to-r from-purple-400/30 to-fuchsia-400/30"
          style={{
            top: "5%",
            left: "5%",
            animation: "floatParticle 5s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute h-1 w-1 rounded-full bg-linear-to-r from-purple-400/30 to-fuchsia-400/30"
          style={{
            top: "-28.6317%",
            left: "28.013%",
            animation: "floatParticle 5s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute h-1 w-1 rounded-full bg-linear-to-r from-purple-400/30 to-fuchsia-400/30"
          style={{
            top: "28.013%",
            left: "-32.5266%",
            animation: "floatParticle 5s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute h-1 w-1 rounded-full bg-linear-to-r from-purple-400/30 to-fuchsia-400/30"
          style={{
            top: "-16.639%",
            left: "-75.1143%",
            animation: "floatParticle 5s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute h-1 w-1 rounded-full bg-linear-to-r from-purple-400/30 to-fuchsia-400/30"
          style={{
            top: "-32.5266%",
            left: "85.0689%",
            animation: "floatParticle 5s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute h-1 w-1 rounded-full bg-linear-to-r from-purple-400/30 to-fuchsia-400/30"
          style={{
            top: "74.763%",
            left: "11.4911%",
            animation: "floatParticle 5s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute h-1 w-1 rounded-full bg-linear-to-r from-purple-400/30 to-fuchsia-400/30"
          style={{
            top: "-75.1143%",
            left: "-2.73544%",
            animation: "floatParticle 5s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute h-1 w-1 rounded-full bg-linear-to-r from-purple-400/30 to-fuchsia-400/30"
          style={{
            top: "-82.5088%",
            left: "64.5713%",
            animation: "floatParticle 5s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute h-1 w-1 rounded-full bg-linear-to-r from-purple-400/30 to-fuchsia-400/30"
          style={{
            top: "85.0689%",
            left: "93.9408%",
            animation: "floatParticle 5s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute h-1 w-1 rounded-full bg-linear-to-r from-purple-400/30 to-fuchsia-400/30"
          style={{
            top: "2.29793%",
            left: "-4.01678%",
            animation: "floatParticle 5s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute h-1 w-1 rounded-full bg-linear-to-r from-purple-400/30 to-fuchsia-400/30"
          style={{
            top: "11.4911%",
            left: "-68.3225%",
            animation: "floatParticle 5s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute h-1 w-1 rounded-full bg-linear-to-r from-purple-400/30 to-fuchsia-400/30"
          style={{
            top: "42.3556%",
            left: "75.9502%",
            animation: "floatParticle 5s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute h-1 w-1 rounded-full bg-linear-to-r from-purple-400/30 to-fuchsia-400/30"
          style={{
            top: "-2.73544%",
            left: "2.95173%",
            animation: "floatParticle 5s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute h-1 w-1 rounded-full bg-linear-to-r from-purple-400/30 to-fuchsia-400/30"
          style={{
            top: "87.2228%",
            left: "-81.4001%",
            animation: "floatParticle 5s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute h-1 w-1 rounded-full bg-linear-to-r from-purple-400/30 to-fuchsia-400/30"
          style={{
            top: "64.5713%",
            left: "50.3955%",
            animation: "floatParticle 5s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute h-1 w-1 rounded-full bg-linear-to-r from-purple-400/30 to-fuchsia-400/30"
          style={{
            top: "-2.05446%",
            left: "90.0366%",
            animation: "floatParticle 5s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute h-1 w-1 rounded-full bg-linear-to-r from-purple-400/30 to-fuchsia-400/30"
          style={{
            top: "93.9408%",
            left: "-22.2557%",
            animation: "floatParticle 5s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute h-1 w-1 rounded-full bg-linear-to-r from-purple-400/30 to-fuchsia-400/30"
          style={{
            top: "20.0583%",
            left: "19.5804%",
            animation: "floatParticle 5s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute h-1 w-1 rounded-full bg-linear-to-r from-purple-400/30 to-fuchsia-400/30"
          style={{
            top: "-4.01678%",
            left: "43.8282%",
            animation: "floatParticle 5s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute h-1 w-1 rounded-full bg-linear-to-r from-purple-400/30 to-fuchsia-400/30"
          style={{
            top: "80.467%",
            left: "-13.4316%",
            animation: "floatParticle 5s ease-in-out infinite",
          }}
        ></div>
      </div>
    </div>
  );
}
