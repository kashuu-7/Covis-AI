import { Mic, MessageSquare } from "lucide-react";
import RobotMain from "./RobotMain";
import { useState, useEffect, useRef } from "react";

export default function VoiceView({
  isDarkMode,
  setVoiceMode,
  message,
  setMessage,
}) {
  const [isListening, setIsListening] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [transcript, setTranscript] = useState("");
  const transcriptRef = useRef("");

  const recognitionRef = useRef(null);

  // Timer Effect
  useEffect(() => {
    let interval;

    if (isListening) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setSeconds(0);
    }

    return () => clearInterval(interval);
  }, [isListening]);

  // Speech Recognition Setup Effect
  useEffect(() => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) return;

  const recognition = new SpeechRecognition();

  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = "en-US";

  recognition.onstart = () => {
    setIsListening(true);
  };

  recognition.onresult = (event) => {
    let currentTranscript = "";

    for (let i = event.resultIndex; i < event.results.length; i++) {
      currentTranscript += event.results[i][0].transcript;
    }

    setTranscript((prev) => {
      const updatedTranscript = prev + currentTranscript;

      transcriptRef.current = updatedTranscript;

      return updatedTranscript;
    });
  };

  recognition.onend = () => {
    setIsListening(false);

    const finalText = transcriptRef.current.trim();

    if (finalText) {
      setMessage(finalText);
    }
    // agr voice stop krny se khudi chatbox open ho 
    // setVoiceMode(false);
  };

  recognition.onerror = (event) => {
    console.log("Speech recognition error:", event.error);
    setIsListening(false);
  };

  recognitionRef.current = recognition;

  return () => {
    recognition.stop();
  };
}, [setMessage]);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      setTranscript("");
      transcriptRef.current = "";
      recognitionRef.current.start();
    }
  };

  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <div
      className={`flex flex-1 flex-col items-center justify-center px-6 ${
        isDarkMode ? "bg-[#0a0a0c]" : "bg-white"
      }`}
    >
      {/* Robot */}
      <div className="mb-4 mt-6 max-w-[90px]">
        <RobotMain />
      </div>
      <p
        className={`text-base font-semibold tracking-wide ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
      >
        {isListening ? "Listening..." : "Tap the microphone to speak"}
      </p>

      <div className="relative mt-12">
        <div
  className={`absolute inset-0 animate-ping rounded-full opacity-20 transition-colors duration-300 ${
    isListening ? "bg-red-500" : "bg-purple-600"
  }`}
/>

        <button
  onClick={toggleListening}
  className={`relative flex h-28 w-28 items-center justify-center rounded-full shadow-[0_0_40px_rgba(133,0,219,.5)] transition-all duration-300 ${
    isListening
      ? "bg-gradient-to-r from-red-500 to-red-600 shadow-[0_0_40px_rgba(239,68,68,.5)]"
      : "bg-gradient-to-r from-[#8500db] to-[#c500db]"
  }`}
>
          <span
  className={`absolute h-28 w-28 rounded-full border animate-ping ${
    isListening ? "border-red-300/40" : "border-white/20"
  }`}
/>

<span
  className={`absolute h-24 w-24 rounded-full border animate-pulse ${
    isListening ? "border-red-300/40" : "border-white/20"
  }`}
/>
          <Mic className="h-12 w-12 text-white" />
        </button>
      </div>

      <p
        className={`mt-8 text-lg font-semibold ${
          isDarkMode ? "text-white" : "text-gray-800"
        }`}
      >
        {`${minutes}:${secs}`}
      </p>

      {transcript && (
        <div
          className={`mt-6 max-w-md rounded-xl px-4 py-3 text-center ${
            isDarkMode ? "bg-white/5 text-white" : "bg-gray-100 text-gray-900"
          }`}
        >
          {transcript}
        </div>
      )}

      {/* Back to Chat */}
      <button
        onClick={() => setVoiceMode(false)}
        className="mt-10 flex items-center gap-2 rounded-xl bg-brand-primary px-6 py-3 text-white transition hover:opacity-90"
      >
        <MessageSquare className="h-5 w-5" />
        Back to Chat
      </button>
    </div>
  );
}
