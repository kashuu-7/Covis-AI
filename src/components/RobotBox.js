"use client";

import React, { useState } from "react";
import ChatView from "./ChatView";
import VoiceView from "./VoiceView";
import RobotMain from "./RobotMain";
import {
  MessageSquare,
  Mic,
  Volume2,
  Sun,
  Moon,
  Minus,
  VolumeX,
} from "lucide-react";

export default function RobotBox({ onClose, isSignup = false }) {
  const [isMuted, setIsMuted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [voiceMode, setVoiceMode] = useState(false);

  const [message, setMessage] = useState("");

  // speaker
  const speakMessage = (text) => {
    if (!speechSynthesis) return;

    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 1;
    utterance.pitch = 1;

    speechSynthesis.speak(utterance);
  };

  // copy
  const copyMessage = async (text) => {
    await navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  return (
    <div
      className={
        isSignup
          ? "relative flex w-full max-w-xl flex-1 min-h-0 flex-col mx-auto"
          : "fixed z-50 transition-all duration-300 ease-out bottom-0 right-0 sm:bottom-6 sm:right-6 w-full sm:w-[580px] h-[100dvh] sm:h-[700px] sm:max-h-[85vh] scale-100 opacity-100 pointer-events-auto translate-y-0"
      }
    >
      <div
        className={
          isSignup
            ? "pointer-events-none absolute inset-0 bg-brand-primary/10 rounded-3xl blur-2xl animate-pulse"
            : "absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 sm:rounded-3xl blur-2xl animate-pulse pointer-events-none"
        }
      />
      <div
        className={
          isSignup
            ? `flex h-full w-full flex-col overflow-hidden border-2 shadow-[0_0_80px_rgba(133,0,219,0.4)] backdrop-blur-2xl sm:rounded-3xl relative min-h-0 flex-1 border-none ${
                isDarkMode
                  ? "bg-gradient-to-b from-[#1a1a1f] to-[#0a0a0c]"
                  : "bg-white border-gray-200"
              }`
            : `relative flex h-full w-full flex-col overflow-hidden border-2 shadow-[0_0_80px_rgba(133,0,219,0.4)] backdrop-blur-2xl sm:rounded-3xl ${
                isDarkMode
                  ? "bg-gradient-to-b from-[#1a1a1f] to-[#0a0a0c] border-brand-primary/20"
                  : "bg-white border-gray-200"
              }`
        }
      >
        <div className="from-brand-primary to-brand-secondary relative flex shrink-0 items-center justify-between border-b border-white/10 bg-gradient-to-r via-purple-600 p-4 sm:p-5">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0px)",
                backgroundSize: " 32px 32px",
              }}
            ></div>
          </div>
          <div className="relative flex items-center gap-3 sm:gap-4">
            <div className="relative">
              <div
                className="flex items-center justify-center relative z-10"
                style={{
                  width: "44px",
                  height: "44px",
                }}
              >
                <div
                  className="vio-mascot"
                  style={{
                    width: "40px",
                    height: "45px",
                    minWidth: "40px",
                    minHeight: "45px",
                  }}
                >
                  <RobotMain />
                </div>
              </div>
              <div className="absolute -right-0.5 -bottom-0.5 z-20 h-3 w-3 rounded-full border-2 border-white bg-green-400 shadow-[0_0_12px_rgba(34,197,94,0.8)] sm:-right-1 sm:-bottom-1 sm:h-3.5 sm:w-3.5" />
            </div>
            <div>
              <h3 className="text-base font-bold tracking-wide text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] sm:text-lg">
                Vio
              </h3>
              <p className="text-xs font-medium text-white/90">
                Online • Ready to assist
              </p>
            </div>
          </div>
          <div className="relative z-10 flex items-center gap-1 sm:gap-1.5">
            <div className="flex items-center rounded-xl border border-white/15 bg-black/10 p-0.5 backdrop-blur-sm">
              <button
                onClick={() => setVoiceMode(false)}
                className={`inline-flex items-center justify-center rounded-lg size-8 sm:size-9 transition-all ${
                  !voiceMode
                    ? "bg-white/25 text-white ring-1 ring-white/20"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <MessageSquare className="w-4 h-4" />
              </button>
              <button
                onClick={() => setVoiceMode(true)}
                className={`inline-flex items-center justify-center rounded-lg size-8 sm:size-9 transition-all ${
                  voiceMode
                    ? "bg-white/25 text-white ring-1 ring-white/20"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <Mic className="w-4 h-4" />
              </button>
            </div>
            <span className="mx-0.5 sm:mx-1 h-6 w-px bg-white/15 shrink-0" />
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="inline-flex items-center justify-center size-9 sm:size-10 rounded-xl text-white/90 hover:text-white transition-all backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:border-white/25 shrink-0 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
            <span className="mx-0.5 sm:mx-1 h-6 w-px bg-white/15 shrink-0" />
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="inline-flex items-center justify-center size-9 sm:size-10 rounded-xl text-white/90 hover:text-white transition-all backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:border-white/25 shrink-0 group"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 sm:w-[18px] sm:h-[18px] group-hover:rotate-90 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 sm:w-[18px] sm:h-[18px] group-hover:rotate-12 transition-transform" />
              )}
            </button>
            {!isSignup && (
              <button
                onClick={onClose}
                className="items-center justify-center size-9 sm:size-10 rounded-xl text-white/90 hover:text-white transition-all backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:border-white/25 shrink-0 hidden sm:inline-flex group"
              >
                <Minus className="w-4 h-4 sm:w-[18px] sm:h-[18px] group-hover:scale-90 transition-transform" />
              </button>
            )}
          </div>
        </div>
        {voiceMode ? (
          <VoiceView
            isDarkMode={isDarkMode}
            setVoiceMode={setVoiceMode}
            message={message}
            setMessage={setMessage}
          />
        ) : (
          <ChatView
            isDarkMode={isDarkMode}
            speakMessage={speakMessage}
            copyMessage={copyMessage}
            setVoiceMode={setVoiceMode}
            message={message}
            setMessage={setMessage}
          />
        )}
      </div>
    </div>
  );
}
