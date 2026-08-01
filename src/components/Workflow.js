"use client";

import React from "react";
import {
  Sparkles,
  Users,
  FileText,
  Calendar,
  ChartColumn,
  UsersRound,
  TrendingUp,
  X,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Workflow() {
  const [activeCard, setActiveCard] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);

  const workflowSteps = [
    {
      title: "Engage and Win Clients",
      description:
        "Our AI work assistants help teams understand client needs, organize relationship history, and draft personalized communication for human review — so your team engages clients faster and more consistently.",
      features: [
        "Guided client engagement",
        "Smart lead insights",
        "Personalized message drafts",
        "Real-time tracking",
      ],
      Icon: Users,
    },
    {
      title: "Generate Winning Proposals",
      description:
        "Create compelling, data-driven proposals that showcase your technical expertise and practical approach. Our AI ensures every proposal is tailored to client needs and industry standards.",
      features: [
        "AI-powered content",
        "Technical depth",
        "Competitive analysis",
        "Custom templates",
      ],
      Icon: FileText,
    },
    {
      title: "Plan and Schedule Projects",
      description:
        "Intelligent project planning that optimizes resources, timelines, and deliverables. Our system considers team capacity, dependencies, and historical data to create realistic schedules.",
      features: [
        "Resource optimization",
        "Timeline prediction",
        "Dependency tracking",
        "Milestone planning",
      ],
      Icon: Calendar,
    },
    {
      title: "Monitor Progress",
      description:
        "Track project execution with real-time dashboards showing progress, profitability, and potential risks. Make data-driven decisions to keep projects on track and profitable.",
      features: [
        "Live dashboards",
        "Profitability tracking",
        "Risk alerts",
        "Performance metrics",
      ],
      Icon: ChartColumn,
    },
    {
      title: "Manage Your Team",
      description:
        "Ensure optimal team performance with intelligent workload distribution and clear task ownership. Monitor individual productivity while maintaining team balance and morale.",
      features: [
        "Workload balancing",
        "Task assignment",
        "Productivity insights",
        "Team collaboration",
      ],
      Icon: UsersRound,
    },
    {
      title: "Scale Confidently",
      description:
        "Build a foundation for sustainable growth through consistent delivery and client satisfaction. Our system helps you identify scaling opportunities and optimize operations.",
      features: [
        "Growth analytics",
        "Client retention",
        "Process optimization",
        "Referral tracking",
      ],
      Icon: TrendingUp,
    },
  ];

  const selectedStep =
    selectedCard !== null ? workflowSteps[selectedCard] : null;
  const SelectedIcon = selectedStep?.Icon;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 6);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        className="relative py-24 overflow-hidden min-h-screen flex items-center"
        style={{
          background:
            "linear-gradient(152deg, rgb(15 8 30) 0%, rgb(35 15 55) 25%, rgb(60 25 80) 50%, rgb(45 20 65) 75%, rgb(25 10 45) 100%)",
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-[floatSlow_8s_ease-in-out_infinite]"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-fuchsia-600/20 rounded-full blur-3xl animate-[floatSlow_10s_ease-in-out_infinite_reverse]"></div>
          <div className="absolute bottom-1/3 left-1/2 w-72 h-72 bg-violet-600/15 rounded-full blur-3xl animate-[floatSlow_12s_ease-in-out_infinite]"></div>
        </div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
                linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* top content */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-6 py-2 rounded-full bg-linear-to-r from-purple-700 to-fuchsia-600 shadow-lg">
              <span className="text-sm font-black tracking-widest text-white">
                WHAT WE OFFER
              </span>
            </div>
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-64 h-1">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-fuchsia-400 to-transparent rounded-full animate-pulse"></div>
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  <div className="absolute h-full w-24 bg-linear-to-r from-transparent via-white to-transparent opacity-60 animate-[slide_3s_ease-in-out_infinite]"></div>
                </div>
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-3">
              How&nbsp;
              <span className="relative inline-block">
                <span className="bg-linear-to-r from-purple-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                  Covis
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-linear-to-r from-purple-500 via-fuchsia-400 to-purple-500 rounded-full shadow-lg shadow-purple-400/50"></span>
              </span>
              &nbsp;Works
            </h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto mb-[30px]">
              Click any step to explore the details and see how Covis transforms
              your operations.
            </p>
          </div>
          {/* Cards */}
          <div className="relative">
            {/* Desktop */}
            <div className="hidden lg:block relative h-[800px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border-2 border-dashed border-white/40 flex items-center justify-center backdrop-blur-sm bg-linear-to-br from-purple-700 via-fuchsia-600 to-purple-700 shadow-2xl shadow-purple-500/50">
                <div className="absolute inset-0 rounded-full bg-linear-to-br from-white/10 via-white/5 to-transparent animate-pulse"></div>
                <div className="text-center relative z-10">
                  <Sparkles className="lucide lucide-sparkles w-10 h-10 mx-auto mb-3 text-white" />
                  <div className="text-3xl font-black text-white mb-1">
                    COVIS
                  </div>
                  <div className="text-sm text-white/90 font-semibold">
                    Growth Engine
                  </div>
                  <div className="text-xs text-white/70 mt-1">
                    Powered by AI
                  </div>
                </div>
              </div>

              {/* Card 1 */}
              <div
                className="absolute top-1/2 left-1/2 "
                style={{
                  transform: "translate(-50%, calc(-50% - 310px))",
                }}
              >
                <svg
                  className="absolute pointer-events-none"
                  style={{
                    width: "120px",
                    height: "430px",
                    left: "0",
                    top: "0",
                  }}
                >
                  <line
                    x1="1.8982025386783973e-14"
                    y1="0"
                    x2="60"
                    y2="250"
                    stroke="rgba(168,85,247,0.1)"
                    strokeWidth="6"
                    className="blur-sm"
                  />

                  <line
                    x1="0"
                    y1="0"
                    x2="60"
                    y2="250"
                    stroke="url(#lineGrad)"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                    className="transition-all duration-500 opacity-20"
                  />

                  <defs>
                    <linearGradient
                      id="lineGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                      <stop
                        offset="50%"
                        stopColor="#d946ef"
                        stopOpacity="0.6"
                      />
                      <stop
                        offset="100%"
                        stopColor="#a855f7"
                        stopOpacity="0.4"
                      />
                    </linearGradient>
                  </defs>
                </svg>
                <button
                  onClick={() => setSelectedCard(0)}
                  className={`
                      group relative w-56 p-6 rounded-2xl backdrop-blur-xl border-2
                      transition-all duration-500 cursor-pointer overflow-hidden 

                      ${
                        activeCard === 0
                          ? "bg-linear-to-br from-gray-800/95 via-purple-900/90 to-gray-800/95 border-purple-400/70 shadow-xl shadow-purple-300/40"
                          : "bg-linear-to-br from-slate-800/90 via-purple-950/85 to-slate-900/90 border-purple-500/50 shadow-md hover:shadow-lg hover:scale-[1.02] hover:border-purple-300/70 hover:from-purple-900/90 hover:via-fuchsia-950/90 hover:to-purple-900/90"
                      }
`}
                >
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-white/40 rounded-tl-2xl opacity-80 group-hover:opacity-40 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-white/40 rounded-tr-2xl opacity-80 group-hover:opacity-40 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-white/40 rounded-bl-2xl opacity-80 group-hover:opacity-40 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-white/40 rounded-br-2xl opacity-80 group-hover:opacity-40 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
                  <div
                    className={`
                      absolute inset-x-0 top-0 h-1
                      bg-linear-to-r from-transparent via-white/40 to-transparent
                      opacity-80 group-hover:opacity-40 transition-opacity duration-300

                      ${activeCard === 0 ? "animate-[slide_2s_ease-in-out_infinite]" : ""}
                    `}
                  />
                  <div
                    className="absolute inset-0 opacity-[0.12] group-hover:opacity-[0.06] transition-opacity duration-300"
                    style={{
                      backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px),
                                        linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px)`,
                      backgroundSize: "12px 12px",
                    }}
                  ></div>
                  <div className="relative mb-4 mx-auto w-16 h-16">
                    <div className="relative w-full h-full rounded-xl bg-linear-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:rotate-12">
                      <Users className="lucide lucide-users w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="relative z-10 space-y-2">
                    <h3 className="text-base font-black text-white leading-tight text-center group-hover:text-white transition-colors duration-300">
                      Engage and Win Clients
                    </h3>
                    <p className="text-sm text-white/80 leading-snug text-center group-hover:text-white/60 transition-colors duration-300">
                      AI-assisted client engagement
                    </p>
                  </div>
                  <div className="flex items-center justify-center mt-4">
                    <div className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-white/20 group-hover:bg-white/30 group-hover:scale-105">
                      <div className="text-xs font-bold text-purple-900 transition-all ">
                        →
                      </div>
                      <div className="absolute inset-0 rounded-full bg-purple-400 opacity-20 group-hover:opacity-0 animate-ping"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-linear-to-r from-purple-500 to-fuchsia-500 opacity-80 group-hover:opacity-40 transition-opacity duration-300 rounded-b-2xl"></div>
                  <div className="absolute left-2 top-1/2 -translate-y-1/2 space-y-2 opacity-80 group-hover:opacity-40 transition-opacity duration-300">
                    <div className="w-1 h-1 rounded-full bg-white/40"></div>
                    <div className="w-1 h-1 rounded-full bg-fuchsia-400"></div>
                    <div className="w-1 h-1 rounded-full bg-white/40"></div>
                  </div>
                </button>
              </div>

              {/* Card 2 */}
              <div
                className="absolute top-1/2 left-1/2"
                style={{
                  transform:
                    "translate(calc(-50% + 268.467875173176px), calc(-50% + -154.99999999999997px))",
                }}
              >
                <svg
                  className="absolute pointer-events-none"
                  style={{
                    width: "388.467875173176px",
                    height: "275px",
                    left: "-268.467875173176px",
                    top: 0,
                  }}
                >
                  <line
                    x1="268.467875173176"
                    y1="0"
                    x2="60"
                    y2="94.99999999999997"
                    stroke="rgba(168, 85, 247, 0.1)"
                    strokeWidth="6"
                    className="blur-sm"
                  />

                  <line
                    x1="268.467875173176"
                    y1="0"
                    x2="60"
                    y2="94.99999999999997"
                    stroke="url(#lineGrad)"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                    className="transition-all duration-500 opacity-20"
                  />

                  <defs>
                    <linearGradient
                      id="lineGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                      <stop
                        offset="50%"
                        stopColor="#d946ef"
                        stopOpacity="0.6"
                      />
                      <stop
                        offset="100%"
                        stopColor="#a855f7"
                        stopOpacity="0.4"
                      />
                    </linearGradient>
                  </defs>
                </svg>
                <button
                  onClick={() => setSelectedCard(1)}
                  className={`
group relative w-56 p-6 rounded-2xl backdrop-blur-xl border-2
transition-all duration-500 cursor-pointer overflow-hidden

${
  activeCard === 1
    ? "bg-linear-to-br from-gray-800/95 via-purple-900/90 to-gray-800/95 border-purple-400/70 shadow-xl shadow-purple-300/40"
    : "bg-linear-to-br from-slate-800/90 via-purple-950/85 to-slate-900/90 border-purple-500/50 shadow-md hover:shadow-lg hover:scale-[1.02] hover:border-purple-300/70 hover:from-purple-900/90 hover:via-fuchsia-950/90 hover:to-purple-900/90"
}
`}
                >
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-white/40 rounded-tl-2xl opacity-80 group-hover:opacity-40 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-white/40 rounded-tr-2xl opacity-80 group-hover:opacity-40 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-white/40 rounded-bl-2xl opacity-80 group-hover:opacity-40 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-white/40 rounded-br-2xl opacity-80 group-hover:opacity-40 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
                  <div
                  className={`
                    absolute inset-x-0 top-0 h-1
                    bg-linear-to-r from-transparent via-white/40 to-transparent
                    opacity-80 group-hover:opacity-40 transition-opacity duration-300

                    ${activeCard === 0 ? "animate-[slide_2s_ease-in-out_infinite]" : ""}
                  `}
                />
                  <div
                    className="absolute inset-0 opacity-[0.12] group-hover:opacity-[0.06] transition-opacity duration-300"
                    style={{
                      backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px),
                                        linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px)`,
                      backgroundSize: "12px 12px",
                    }}
                  ></div>
                  <div className="relative mb-4 mx-auto w-16 h-16">
                    <div className="relative w-full h-full rounded-xl bg-linear-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:rotate-12">
                      <FileText className="lucide lucide-users w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="relative z-10 space-y-2">
                    <h3 className="text-base font-black text-white leading-tight text-center group-hover:text-white transition-colors duration-300">
                      Generate Winning Proposals
                    </h3>
                    <p className="text-sm text-white/80 leading-snug text-center group-hover:text-white/60 transition-colors duration-300">
                      Technical, practical proposals that convert
                    </p>
                  </div>
                  <div className="flex items-center justify-center mt-4">
                    <div className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-white/20 group-hover:bg-white/30 group-hover:scale-105">
                      <div className="text-xs font-bold text-purple-900 transition-all ">
                        →
                      </div>
                      <div className="absolute inset-0 rounded-full bg-purple-400 opacity-20 group-hover:opacity-0 animate-ping"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-linear-to-r from-purple-500 to-fuchsia-500 opacity-80 group-hover:opacity-40 transition-opacity duration-300 rounded-b-2xl"></div>
                  <div className="absolute left-2 top-1/2 -translate-y-1/2 space-y-2 opacity-80 group-hover:opacity-40 transition-opacity duration-300">
                    <div className="w-1 h-1 rounded-full bg-white/40"></div>
                    <div className="w-1 h-1 rounded-full bg-fuchsia-400"></div>
                    <div className="w-1 h-1 rounded-full bg-white/40"></div>
                  </div>
                </button>
              </div>

              {/* Card 3 */}
              <div
                className="absolute top-1/2 left-1/2"
                style={{
                  transform:
                    "translate(calc(-50% + 268.467875173176px), calc(-50% + 155px))",
                }}
              >
                <svg
                  className="absolute pointer-events-none"
                  style={{
                    width: "388.467875173176px",
                    height: "275px",
                    left: "-268.467875173176px",
                    top: "-155px",
                  }}
                >
                  <line
                    x1="268.467875173176"
                    y1="155"
                    x2="60"
                    y2="60"
                    stroke="rgba(168, 85, 247, 0.1)"
                    strokeWidth="6"
                    className="blur-sm"
                  />

                  <line
                    x1="268.467875173176"
                    y1="155"
                    x2="60"
                    y2="60"
                    stroke="url(#lineGrad)"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                    className="transition-all duration-500 opacity-20"
                  />

                  <defs>
                    <linearGradient
                      id="lineGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                      <stop
                        offset="50%"
                        stopColor="#d946ef"
                        stopOpacity="0.6"
                      />
                      <stop
                        offset="100%"
                        stopColor="#a855f7"
                        stopOpacity="0.4"
                      />
                    </linearGradient>
                  </defs>
                </svg>
                <button
                  onClick={() => setSelectedCard(2)}
                  className={`
group relative w-56 p-6 rounded-2xl backdrop-blur-xl border-2
transition-all duration-500 cursor-pointer overflow-hidden

${
  activeCard === 2
    ? "bg-linear-to-br from-gray-800/95 via-purple-900/90 to-gray-800/95 border-purple-400/70 shadow-xl shadow-purple-300/40"
    : "bg-linear-to-br from-slate-800/90 via-purple-950/85 to-slate-900/90 border-purple-500/50 shadow-md hover:shadow-lg hover:scale-[1.02] hover:border-purple-300/70 hover:from-purple-900/90 hover:via-fuchsia-950/90 hover:to-purple-900/90"
}
`}
                >
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-white/40 rounded-tl-2xl opacity-80 group-hover:opacity-40 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-white/40 rounded-tr-2xl opacity-80 group-hover:opacity-40 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-white/40 rounded-bl-2xl opacity-80 group-hover:opacity-40 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-white/40 rounded-br-2xl opacity-80 group-hover:opacity-40 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
                  <div
                  className={`
                    absolute inset-x-0 top-0 h-1
                    bg-linear-to-r from-transparent via-white/40 to-transparent
                    opacity-80 group-hover:opacity-40 transition-opacity duration-300

                    ${activeCard === 0 ? "animate-[slide_2s_ease-in-out_infinite]" : ""}
                  `}
                />
                  <div
                    className="absolute inset-0 opacity-[0.12] group-hover:opacity-[0.06] transition-opacity duration-300"
                    style={{
                      backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px),
                                        linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px)`,
                      backgroundSize: "12px 12px",
                    }}
                  ></div>
                  <div className="relative mb-4 mx-auto w-16 h-16">
                    <div className="relative w-full h-full rounded-xl bg-linear-to-br from-purple-500 to-violet-500 flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:rotate-12">
                      <Calendar className="lucide lucide-users w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="relative z-10 space-y-2">
                    <h3 className="text-base font-black text-white leading-tight text-center group-hover:text-white transition-colors duration-300">
                      Plan and Schedule Projects
                    </h3>
                    <p className="text-sm text-white/80 leading-snug text-center group-hover:text-white/60 transition-colors duration-300">
                      Smart planning with optimized timelines
                    </p>
                  </div>
                  <div className="flex items-center justify-center mt-4">
                    <div className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-white/20 group-hover:bg-white/30 group-hover:scale-105">
                      <div className="text-xs font-bold text-purple-900 transition-all ">
                        →
                      </div>
                      <div className="absolute inset-0 rounded-full bg-purple-400 opacity-20 group-hover:opacity-0 animate-ping"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-linear-to-r from-purple-500 to-fuchsia-500 opacity-80 group-hover:opacity-40 transition-opacity duration-300 rounded-b-2xl"></div>
                  <div className="absolute left-2 top-1/2 -translate-y-1/2 space-y-2 opacity-80 group-hover:opacity-40 transition-opacity duration-300">
                    <div className="w-1 h-1 rounded-full bg-white/40"></div>
                    <div className="w-1 h-1 rounded-full bg-fuchsia-400"></div>
                    <div className="w-1 h-1 rounded-full bg-white/40"></div>
                  </div>
                </button>
              </div>

              {/* Card 4 */}
              <div
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: "translate(calc(-50% + 0px), calc(-50% + 310px))",
                }}
              >
                <svg
                  className="absolute pointer-events-none"
                  style={{
                    width: "120px",
                    height: "430px",
                    left: "0px",
                    top: "-310px",
                  }}
                >
                  <line
                    x1="0"
                    y1="310"
                    x2="60"
                    y2="60"
                    stroke="rgba(168, 85, 247, 0.1)"
                    strokeWidth="6"
                    className="blur-sm"
                  />

                  <line
                    x1="0"
                    y1="310"
                    x2="60"
                    y2="60"
                    stroke="url(#lineGrad)"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                    className="opacity-20 transition-all duration-500"
                  />

                  <defs>
                    <linearGradient
                      id="lineGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                      <stop
                        offset="50%"
                        stopColor="#d946ef"
                        stopOpacity="0.6"
                      />
                      <stop
                        offset="100%"
                        stopColor="#a855f7"
                        stopOpacity="0.4"
                      />
                    </linearGradient>
                  </defs>
                </svg>
                <button
                  onClick={() => setSelectedCard(3)}
                  className={`
group relative w-56 p-6 rounded-2xl backdrop-blur-xl border-2
transition-all duration-500 cursor-pointer overflow-hidden

${
  activeCard === 3
    ? "bg-linear-to-br from-gray-800/95 via-purple-900/90 to-gray-800/95 border-purple-400/70 shadow-xl shadow-purple-300/40"
    : "bg-linear-to-br from-slate-800/90 via-purple-950/85 to-slate-900/90 border-purple-500/50 shadow-md hover:shadow-lg hover:scale-[1.02] hover:border-purple-300/70 hover:from-purple-900/90 hover:via-fuchsia-950/90 hover:to-purple-900/90"
}
`}
                >
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-white/40 rounded-tl-2xl opacity-80 group-hover:opacity-40 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-white/40 rounded-tr-2xl opacity-80 group-hover:opacity-40 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-white/40 rounded-bl-2xl opacity-80 group-hover:opacity-40 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-white/40 rounded-br-2xl opacity-80 group-hover:opacity-40 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
                  <div
                    className={`
                      absolute inset-x-0 top-0 h-1
                      bg-linear-to-r from-transparent via-white/40 to-transparent
                      opacity-80 group-hover:opacity-40 transition-opacity duration-300

                      ${activeCard === 0 ? "animate-[slide_2s_ease-in-out_infinite]" : ""}
                    `}
                  />
                  <div
                    className="absolute inset-0 opacity-[0.12] group-hover:opacity-[0.06] transition-opacity duration-300"
                    style={{
                      backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px),
                                        linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px)`,
                      backgroundSize: "12px 12px",
                    }}
                  ></div>
                  <div className="relative mb-4 mx-auto w-16 h-16">
                    <div className="relative w-full h-full rounded-xl bg-linear-to-br from-purple-500 to-violet-500 flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:rotate-12">
                      <ChartColumn className="lucide lucide-users w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="relative z-10 space-y-2">
                    <h3 className="text-base font-black text-white leading-tight text-center group-hover:text-white transition-colors duration-300">
                      Monitor Progress
                    </h3>
                    <p className="text-sm text-white/80 leading-snug text-center group-hover:text-white/60 transition-colors duration-300">
                      Real-time visibility and insights
                    </p>
                  </div>
                  <div className="flex items-center justify-center mt-4">
                    <div className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-white/20 group-hover:bg-white/30 group-hover:scale-105">
                      <div className="text-xs font-bold text-purple-900 transition-all ">
                        →
                      </div>
                      <div className="absolute inset-0 rounded-full bg-purple-400 opacity-20 group-hover:opacity-0 animate-ping"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-linear-to-r from-purple-500 to-fuchsia-500 opacity-80 group-hover:opacity-40 transition-opacity duration-300 rounded-b-2xl"></div>
                  <div className="absolute left-2 top-1/2 -translate-y-1/2 space-y-2 opacity-80 group-hover:opacity-40 transition-opacity duration-300">
                    <div className="w-1 h-1 rounded-full bg-white/40"></div>
                    <div className="w-1 h-1 rounded-full bg-fuchsia-400"></div>
                    <div className="w-1 h-1 rounded-full bg-white/40"></div>
                  </div>
                </button>
              </div>

              {/* Card 5 */}
              <div
                className="absolute top-1/2 left-1/2"
                style={{
                  transform:
                    "translate(calc(-50% + -268.467875173176px), calc(-50% + 154.99999999999997px))",
                }}
              >
                <svg
                  className="absolute pointer-events-none"
                  style={{
                    width: "388.467875173176px",
                    height: "275px",
                    left: "0px",
                    top: "-155px",
                  }}
                >
                  <line
                    x1="0"
                    y1="155"
                    x2="208.46787517317603"
                    y2="60"
                    stroke="rgba(168, 85, 247, 0.1)"
                    strokeWidth="6"
                    className="blur-sm"
                  />

                  <line
                    x1="0"
                    y1="155"
                    x2="208.46787517317603"
                    y2="60"
                    stroke="url(#lineGrad)"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                    className="transition-all duration-500 opacity-20"
                  />

                  <defs>
                    <linearGradient
                      id="lineGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                      <stop
                        offset="50%"
                        stopColor="#d946ef"
                        stopOpacity="0.6"
                      />
                      <stop
                        offset="100%"
                        stopColor="#a855f7"
                        stopOpacity="0.4"
                      />
                    </linearGradient>
                  </defs>
                </svg>
                <button
                  onClick={() => setSelectedCard(4)}
                  className={`
group relative w-56 p-6 rounded-2xl backdrop-blur-xl border-2
transition-all duration-500 cursor-pointer overflow-hidden

${
  activeCard === 4
    ? "bg-linear-to-br from-gray-800/95 via-purple-900/90 to-gray-800/95 border-purple-400/70 shadow-xl shadow-purple-300/40"
    : "bg-linear-to-br from-slate-800/90 via-purple-950/85 to-slate-900/90 border-purple-500/50 shadow-md hover:shadow-lg hover:scale-[1.02] hover:border-purple-300/70 hover:from-purple-900/90 hover:via-fuchsia-950/90 hover:to-purple-900/90"
}
`}
                >
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-white/40 rounded-tl-2xl opacity-80 group-hover:opacity-40 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-white/40 rounded-tr-2xl opacity-80 group-hover:opacity-40 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-white/40 rounded-bl-2xl opacity-80 group-hover:opacity-40 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-white/40 rounded-br-2xl opacity-80 group-hover:opacity-40 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
                  <div
                      className={`
                        absolute inset-x-0 top-0 h-1
                        bg-linear-to-r from-transparent via-white/40 to-transparent
                        opacity-80 group-hover:opacity-40 transition-opacity duration-300

                        ${activeCard === 0 ? "animate-[slide_2s_ease-in-out_infinite]" : ""}
                      `}
                    />
                  <div
                    className="absolute inset-0 opacity-[0.12] group-hover:opacity-[0.06] transition-opacity duration-300"
                    style={{
                      backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px),
                                        linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px)`,
                      backgroundSize: "12px 12px",
                    }}
                  ></div>
                  <div className="relative mb-4 mx-auto w-16 h-16">
                    <div className="relative w-full h-full rounded-xl bg-linear-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:rotate-12">
                      <UsersRound className="lucide lucide-users w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="relative z-10 space-y-2">
                    <h3 className="text-base font-black text-white leading-tight text-center group-hover:text-white transition-colors duration-300">
                      Manage Your Team
                    </h3>
                    <p className="text-sm text-white/80 leading-snug text-center group-hover:text-white/60 transition-colors duration-300">
                      Balanced workload and clear ownership
                    </p>
                  </div>
                  <div className="flex items-center justify-center mt-4">
                    <div className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-white/20 group-hover:bg-white/30 group-hover:scale-105">
                      <div className="text-xs font-bold text-purple-900 transition-all ">
                        →
                      </div>
                      <div className="absolute inset-0 rounded-full bg-purple-400 opacity-20 group-hover:opacity-0 animate-ping"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-linear-to-r from-purple-500 to-fuchsia-500 opacity-80 group-hover:opacity-40 transition-opacity duration-300 rounded-b-2xl"></div>
                  <div className="absolute left-2 top-1/2 -translate-y-1/2 space-y-2 opacity-80 group-hover:opacity-40 transition-opacity duration-300">
                    <div className="w-1 h-1 rounded-full bg-white/40"></div>
                    <div className="w-1 h-1 rounded-full bg-fuchsia-400"></div>
                    <div className="w-1 h-1 rounded-full bg-white/40"></div>
                  </div>
                </button>
              </div>

              {/* Card 6 */}
              <div
                className="absolute top-1/2 left-1/2"
                style={{
                  transform:
                    "translate(calc(-50% - 268.467875173176px), calc(-50% - 155px))",
                }}
              >
                <svg
                  className="absolute pointer-events-none"
                  style={{
                    width: "388.46787517317597px",
                    height: "275px",
                    left: "0px",
                    top: "0px",
                  }}
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="208.46787517317597"
                    y2="95.00000000000003"
                    stroke="rgba(168, 85, 247, 0.1)"
                    strokeWidth="6"
                    className="blur-sm"
                  />

                  <line
                    x1="0"
                    y1="0"
                    x2="208.46787517317597"
                    y2="95.00000000000003"
                    stroke="url(#lineGrad)"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                    className="transition-all duration-500 opacity-20"
                  />

                  <defs>
                    <linearGradient
                      id="lineGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                      <stop
                        offset="50%"
                        stopColor="#d946ef"
                        stopOpacity="0.6"
                      />
                      <stop
                        offset="100%"
                        stopColor="#a855f7"
                        stopOpacity="0.4"
                      />
                    </linearGradient>
                  </defs>
                </svg>
                <button
                  onClick={() => setSelectedCard(5)}
                  className={`
group relative w-56 p-6 rounded-2xl backdrop-blur-xl border-2
transition-all duration-500 cursor-pointer overflow-hidden

${
  activeCard === 5
    ? "bg-linear-to-br from-gray-800/95 via-purple-900/90 to-gray-800/95 border-purple-400/70 shadow-xl shadow-purple-300/40"
    : "bg-linear-to-br from-slate-800/90 via-purple-950/85 to-slate-900/90 border-purple-500/50 shadow-md hover:shadow-lg hover:scale-[1.02] hover:border-purple-300/70 hover:from-purple-900/90 hover:via-fuchsia-950/90 hover:to-purple-900/90"
}
`}
                >
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-white/40 rounded-tl-2xl opacity-80 group-hover:opacity-40 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-white/40 rounded-tr-2xl opacity-80 group-hover:opacity-40 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-white/40 rounded-bl-2xl opacity-80 group-hover:opacity-40 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-white/40 rounded-br-2xl opacity-80 group-hover:opacity-40 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
                  <div
                      className={`
                        absolute inset-x-0 top-0 h-1
                        bg-linear-to-r from-transparent via-white/40 to-transparent
                        opacity-80 group-hover:opacity-40 transition-opacity duration-300

                        ${activeCard === 0 ? "animate-[slide_2s_ease-in-out_infinite]" : ""}
                      `}
                    />
                  <div
                    className="absolute inset-0 opacity-[0.12] group-hover:opacity-[0.06] transition-opacity duration-300"
                    style={{
                      backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px),
                                        linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px)`,
                      backgroundSize: "12px 12px",
                    }}
                  ></div>
                  <div className="relative mb-4 mx-auto w-16 h-16">
                    <div className="relative w-full h-full rounded-xl bg-linear-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:rotate-12">
                      <TrendingUp className="lucide lucide-users w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="relative z-10 space-y-2">
                    <h3 className="text-base font-black text-white leading-tight text-center group-hover:text-white transition-colors duration-300">
                      Scale Confidently
                    </h3>
                    <p className="text-sm text-white/80 leading-snug text-center group-hover:text-white/60 transition-colors duration-300">
                      Consistent delivery leads to growth
                    </p>
                  </div>
                  <div className="flex items-center justify-center mt-4">
                    <div className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-white/20 group-hover:bg-white/30 group-hover:scale-105">
                      <div className="text-xs font-bold text-purple-900 transition-all ">
                        →
                      </div>
                      <div className="absolute inset-0 rounded-full bg-purple-400 opacity-20 group-hover:opacity-0 animate-ping"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-linear-to-r from-purple-500 to-fuchsia-500 opacity-80 group-hover:opacity-40 transition-opacity duration-300 rounded-b-2xl"></div>
                  <div className="absolute left-2 top-1/2 -translate-y-1/2 space-y-2 opacity-80 group-hover:opacity-40 transition-opacity duration-300">
                    <div className="w-1 h-1 rounded-full bg-white/40"></div>
                    <div className="w-1 h-1 rounded-full bg-fuchsia-400"></div>
                    <div className="w-1 h-1 rounded-full bg-white/40"></div>
                  </div>
                </button>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div
                  className="relative w-4 h-4 rounded-full flex items-center justify-center shadow-xl shadow-purple-500/50"
                  style={{ animation: "rotateCircle 24s linear infinite" }}
                >
                  <div className="absolute inset-0 rounded-full bg-linear-to-br from-purple-400 to-fuchsia-500 animate-ping opacity-75"></div>
                  <div className="absolute -inset-1 rounded-full bg-linear-to-br from-purple-500 to-fuchsia-600 blur-sm opacity-60"></div>
                </div>
              </div>
            </div>

            {/* Mobile */}
            <div className="lg:hidden space-y-4">
              {/* button 1 */}
              <button
                onClick={() => setSelectedCard(0)}
                className={`
                  group relative w-full p-5 rounded-xl backdrop-blur-xl border
                  transition-all duration-500 text-left overflow-hidden cursor-pointer

                  ${
                    activeCard === 0
                      ? "bg-linear-to-br from-gray-800/95 via-purple-900/90 to-gray-800/95 border-purple-400/70 shadow-xl shadow-purple-300/40 scale-[1.02]"
                      : "bg-linear-to-br from-slate-800/90 via-purple-950/85 to-slate-900/90 border-purple-500/50 shadow-md hover:shadow-lg hover:border-purple-300/70 hover:from-purple-900/90 hover:via-fuchsia-950/90 hover:scale-[1.02] hover:to-purple-900/90"
                  }
                  `}
              >
                <div
                  className="absolute inset-0 opacity-[0.12] group-hover:opacity-[0.06] transition-opacity duration-300"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: "10px 10px",
                  }}
                ></div>
                <div className="relative flex items-center gap-4">
                  <div className="relative shrink-0">
                    <div className="relative w-14 h-14 rounded-lg bg-linear-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center shadow-md transition-all duration-300 group-hover:shadow-lg">
                      <Users className="lucide lucide-users w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="px-2.5 py-1 rounded-full text-xs font-black text-white bg-linear-to-br from-purple-500 to-fuchsia-500 shadow-sm">
                        1
                      </span>
                      <h3 className="text-sm font-black text-white truncate group-hover:text-white transition-colors">
                        Engage and Win Clients
                      </h3>
                    </div>
                    <p className="text-xs text-white/80 leading-relaxed group-hover:text-white/60 transition-colors">
                      AI-assisted client engagement
                    </p>
                  </div>
                  <div className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 bg-white/20 group-hover:bg-white/30">
                    <ChevronRight className="lucide lucide-chevron-right w-5 h-5 text-purple-900 transition-all duration-300" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-purple-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl"></div>
              </button>

              {/* button 2 */}
              <button
                onClick={() => setSelectedCard(1)}
                className={`
                  group relative w-full p-5 rounded-xl backdrop-blur-xl border
                  transition-all duration-500 text-left overflow-hidden cursor-pointer

                  ${
                    activeCard === 1
                      ? "bg-linear-to-br from-gray-800/95 via-purple-900/90 to-gray-800/95 border-purple-400/70 shadow-xl shadow-purple-300/40 scale-[1.02]"
                      : "bg-linear-to-br from-slate-800/90 via-purple-950/85 to-slate-900/90 border-purple-500/50 shadow-md hover:shadow-lg hover:border-purple-300/70 hover:from-purple-900/90 hover:via-fuchsia-950/90 hover:scale-[1.02] hover:to-purple-900/90"
                  }
                  `}
              >
                <div
                  className="absolute inset-0 opacity-[0.12] group-hover:opacity-[0.06] transition-opacity duration-300"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: "10px 10px",
                  }}
                ></div>
                <div className="relative flex items-center gap-4">
                  <div className="relative shrink-0">
                    <div className="relative w-14 h-14 rounded-lg bg-linear-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center shadow-md transition-all duration-300 group-hover:shadow-lg">
                      <Users className="lucide lucide-users w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="px-2.5 py-1 rounded-full text-xs font-black text-white bg-linear-to-br from-purple-500 to-fuchsia-500 shadow-sm">
                        2
                      </span>
                      <h3 className="text-sm font-black text-white truncate group-hover:text-white transition-colors">
                        Generate Winning Proposals
                      </h3>
                    </div>
                    <p className="text-xs text-white/80 leading-relaxed group-hover:text-white/60 transition-colors">
                      Technical, practical proposals that convert
                    </p>
                  </div>
                  <div className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 bg-white/20 group-hover:bg-white/30">
                    <ChevronRight className="lucide lucide-chevron-right w-5 h-5 text-purple-900 transition-all duration-300" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-purple-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl"></div>
              </button>

              {/* button 3 */}
              <button
                onClick={() => setSelectedCard(2)}
                className={`
                  group relative w-full p-5 rounded-xl backdrop-blur-xl border
                  transition-all duration-500 text-left overflow-hidden cursor-pointer

                  ${
                    activeCard === 2
                      ? "bg-linear-to-br from-gray-800/95 via-purple-900/90 to-gray-800/95 border-purple-400/70 shadow-xl shadow-purple-300/40 scale-[1.02]"
                      : "bg-linear-to-br from-slate-800/90 via-purple-950/85 to-slate-900/90 border-purple-500/50 shadow-md hover:shadow-lg hover:border-purple-300/70 hover:from-purple-900/90 hover:via-fuchsia-950/90 hover:scale-[1.02] hover:to-purple-900/90"
                  }
                  `}
              >
                <div
                  className="absolute inset-0 opacity-[0.12] group-hover:opacity-[0.06] transition-opacity duration-300"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: "10px 10px",
                  }}
                ></div>
                <div className="relative flex items-center gap-4">
                  <div className="relative shrink-0">
                    <div className="relative w-14 h-14 rounded-lg bg-linear-to-br from-purple-500 to-violet-500  flex items-center justify-center shadow-md transition-all duration-300 group-hover:shadow-lg">
                      <Users className="lucide lucide-users w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="px-2.5 py-1 rounded-full text-xs font-black text-white bg-linear-to-br from-purple-500 to-violet-500  shadow-sm">
                        3
                      </span>
                      <h3 className="text-sm font-black text-white truncate group-hover:text-white transition-colors">
                        Plan and Schedule Projects
                      </h3>
                    </div>
                    <p className="text-xs text-white/80 leading-relaxed group-hover:text-white/60 transition-colors">
                      Smart planning with optimized timelines
                    </p>
                  </div>
                  <div className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 bg-white/20 group-hover:bg-white/30">
                    <ChevronRight className="lucide lucide-chevron-right w-5 h-5 text-purple-900 transition-all duration-300" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-purple-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl"></div>
              </button>

              {/* button 4 */}
              <button
                onClick={() => setSelectedCard(3)}
                className={`
                  group relative w-full p-5 rounded-xl backdrop-blur-xl border
                  transition-all duration-500 text-left overflow-hidden cursor-pointer
                  

                  ${
                    activeCard === 3
                      ? "bg-linear-to-br from-gray-800/95 via-purple-900/90 to-gray-800/95 border-purple-400/70 shadow-xl shadow-purple-300/40 scale-[1.02]"
                      : "bg-linear-to-br from-slate-800/90 via-purple-950/85 to-slate-900/90 border-purple-500/50 shadow-md hover:shadow-lg hover:border-purple-300/70 hover:from-purple-900/90 hover:via-fuchsia-950/90 hover:scale-[1.02] hover:to-purple-900/90"
                  }
                  `}
              >
                <div
                  className="absolute inset-0 opacity-[0.12] group-hover:opacity-[0.06] transition-opacity duration-300"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: "10px 10px",
                  }}
                ></div>
                <div className="relative flex items-center gap-4">
                  <div className="relative shrink-0">
                    <div className="relative w-14 h-14 rounded-lg bg-linear-to-br from-purple-500 to-violet-500  flex items-center justify-center shadow-md transition-all duration-300 group-hover:shadow-lg">
                      <Users className="lucide lucide-users w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="px-2.5 py-1 rounded-full text-xs font-black text-white bg-linear-to-br from-purple-500 to-violet-500  shadow-sm">
                        4
                      </span>
                      <h3 className="text-sm font-black text-white truncate group-hover:text-white transition-colors">
                        Monitor Progress
                      </h3>
                    </div>
                    <p className="text-xs text-white/80 leading-relaxed group-hover:text-white/60 transition-colors">
                      Real-time visibility and insights
                    </p>
                  </div>
                  <div className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 bg-white/20 group-hover:bg-white/30">
                    <ChevronRight className="lucide lucide-chevron-right w-5 h-5 text-purple-900 transition-all duration-300" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-purple-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl"></div>
              </button>

              {/* button 5 */}
              <button
                onClick={() => setSelectedCard(4)}
                className={`
                  group relative w-full p-5 rounded-xl backdrop-blur-xl border
                  transition-all duration-500 text-left overflow-hidden cursor-pointer

                  ${
                    activeCard === 4
                      ? "bg-linear-to-br from-gray-800/95 via-purple-900/90 to-gray-800/95 border-purple-400/70 shadow-xl shadow-purple-300/40 scale-[1.02]"
                      : "bg-linear-to-br from-slate-800/90 via-purple-950/85 to-slate-900/90 border-purple-500/50 shadow-md hover:shadow-lg hover:border-purple-300/70 hover:from-purple-900/90 hover:via-fuchsia-950/90 hover:scale-[1.02] hover:to-purple-900/90"
                  }
                  `}
              >
                <div
                  className="absolute inset-0 opacity-[0.12] group-hover:opacity-[0.06] transition-opacity duration-300"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: "10px 10px",
                  }}
                ></div>
                <div className="relative flex items-center gap-4">
                  <div className="relative shrink-0">
                    <div className="relative w-14 h-14 rounded-lg bg-linear-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center shadow-md transition-all duration-300 group-hover:shadow-lg">
                      <Users className="lucide lucide-users w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="px-2.5 py-1 rounded-full text-xs font-black text-white bg-linear-to-br from-purple-500 to-fuchsia-500 shadow-sm">
                        5
                      </span>
                      <h3 className="text-sm font-black text-white truncate group-hover:text-white transition-colors">
                        Manage Your Team
                      </h3>
                    </div>
                    <p className="text-xs text-white/80 leading-relaxed group-hover:text-white/60 transition-colors">
                      Balanced workload and clear ownership
                    </p>
                  </div>
                  <div className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 bg-white/20 group-hover:bg-white/30">
                    <ChevronRight className="lucide lucide-chevron-right w-5 h-5 text-purple-900 transition-all duration-300" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-purple-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl"></div>
              </button>

              {/* button 6 */}
              <button
                onClick={() => setSelectedCard(5)}
                className={`
                  group relative w-full p-5 rounded-xl backdrop-blur-xl border
                  transition-all duration-500 text-left overflow-hidden cursor-pointer

                  ${
                    activeCard === 5
                      ? "bg-linear-to-br from-gray-800/95 via-purple-900/90 to-gray-800/95 border-purple-400/70 shadow-xl shadow-purple-300/40 scale-[1.02]"
                      : "bg-linear-to-br from-slate-800/90 via-purple-950/85 to-slate-900/90 border-purple-500/50 shadow-md hover:shadow-lg hover:border-purple-300/70 hover:from-purple-900/90 hover:via-fuchsia-950/90 hover:scale-[1.02] hover:to-purple-900/90"
                  }
                  `}
              >
                <div
                  className="absolute inset-0 opacity-[0.12] group-hover:opacity-[0.06] transition-opacity duration-300"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: "10px 10px",
                  }}
                ></div>
                <div className="relative flex items-center gap-4">
                  <div className="relative shrink-0">
                    <div className="relative w-14 h-14 rounded-lg bg-linear-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center shadow-md transition-all duration-300 group-hover:shadow-lg">
                      <Users className="lucide lucide-users w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="px-2.5 py-1 rounded-full text-xs font-black text-white bg-linear-to-br from-purple-500 to-fuchsia-500 shadow-sm">
                        6
                      </span>
                      <h3 className="text-sm font-black text-white truncate group-hover:text-white transition-colors">
                        Scale Confidently
                      </h3>
                    </div>
                    <p className="text-xs text-white/80 leading-relaxed group-hover:text-white/60 transition-colors">
                      Consistent delivery leads to growth
                    </p>
                  </div>
                  <div className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 bg-white/20 group-hover:bg-white/30">
                    <ChevronRight className="lucide lucide-chevron-right w-5 h-5 text-purple-900 transition-all duration-300" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-purple-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* card button pr click krny pr ye box open hoga */}
      {selectedStep && (
        <div
          className="fixed inset-0 bg-linear-to-br from-slate-900/95 via-purple-900/95 to-fuchsia-900/95 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedCard(null)}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          <div
            className="relative bg-linear-to-br from-slate-900/95 via-purple-950/95 to-slate-900/95 rounded-3xl max-w-3xl w-full shadow-2xl border-2 border-purple-400/30 backdrop-blur-xl overflow-hidden animate-in zoom-in-95 duration-300"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="workflow-step-title"
          >
            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-purple-400/60 rounded-tl-3xl"></div>
            <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-fuchsia-400/60 rounded-tr-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-fuchsia-400/60 rounded-bl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-purple-400/60 rounded-br-3xl"></div>
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                linear-gradient(rgba(168, 85, 247, 0.8) 1px, transparent 1px),
                linear-gradient(90deg, rgba(168, 85, 247, 0.8) 1px, transparent 1px)
              `,
                backgroundSize: "20px 20px",
              }}
            ></div>
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute cursor-pointer top-6 right-6 w-12 h-12 rounded-full bg-linear-to-br from-purple-600/30 to-fuchsia-600/30 backdrop-blur-sm border border-purple-400/40 flex items-center justify-center hover:from-purple-600/50 hover:to-fuchsia-600/50 hover:border-purple-300/60 hover:scale-110 transition-all duration-300 group z-10"
              aria-label="Close step details"
            >
              <X className="lucide lucide-x w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
            </button>
            <div className="relative p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-br from-purple-500 to-fuchsia-500 shadow-lg">
                  <span className="text-sm font-black text-white tracking-wider">
                    STEP {selectedCard + 1}
                  </span>
                </div>
                <div className="flex-1 h-px bg-linear-to-r from-purple-400/50 to-transparent"></div>
              </div>
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center shadow-xl shrink-0">
                  <SelectedIcon className="lucide lucide-users w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3
                    id="workflow-step-title"
                    className="text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-white via-purple-200 to-fuchsia-200 mb-3 leading-tight"
                  >
                    {selectedStep.title}
                  </h3>
                  {selectedCard === 0 ? (
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Our AI work assistants help teams understand client needs,
                      organize relationship history, and draft personalized
                      communication for human review — so your team engages
                      clients faster and more consistently.
                    </p>
                  ) : (
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {selectedStep.description}
                    </p>
                  )}
                </div>
              </div>
              <div className="relative h-px bg-linear-to-r from-transparent via-purple-400/50 to-transparent my-8">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-400"></div>
              </div>
              <div className="space-y-5">
                <h4 className="text-sm font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-300 to-fuchsia-300 uppercase tracking-wider flex items-center gap-2">
                  <div className="w-1 h-4 bg-linear-to-b from-purple-400 to-fuchsia-400 rounded-full"></div>
                  Key Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedStep.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="w-6 h-6 rounded-lg bg-linear-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                      <span className="text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-purple-500/20">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse delay-100"></div>
                  <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
