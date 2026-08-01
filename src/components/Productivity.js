import React from "react";
import Image from "next/image";
import { Sparkles, Zap, ChevronRight } from "lucide-react";

export default function Productivity() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-linear-to-br from-purple-300/20 via-fuchsia-300/20 to-transparent rounded-full blur-3xl animate-pulse [animation-duration:6s]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-linear-to-tl from-indigo-300/20 via-violet-300/20 to-transparent rounded-full blur-3xl animate-pulse [animation-delay:1s] [animation-duration:7s]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-linear-to-br from-purple-200/15 via-fuchsia-200/15 to-pink-200/15 rounded-full blur-3xl animate-pulse [animation-delay:2s] [animation-duration:9s]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(139,92,246,0.03)_1.5px,transparent_1.5px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group h-full">
            <div className="relative h-full flex items-center">
              <div className="absolute inset-0 bg-linear-to-br from-purple-600/10 via-fuchsia-500/10 to-purple-600/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative w-full aspect-3/4 bg-linear-to-br from-purple-800 via-fuchsia-700 to-purple-800 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-purple-400/40 group-hover:border-purple-300/60 transition-all duration-500">
                <Image
                  src="/assets/aiRobot.webp"
                  alt="Productivity"
                  fill
                  sizes="100%"
                  className="object-cover opacity-90 object-center"
                />
              </div>
              <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-0 w-32 h-32 bg-linear-to-br from-emerald-400/20 to-transparent rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-linear-to-br from-purple-400/20 to-transparent rounded-full blur-2xl animate-pulse [animation-delay:1s]"></div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-purple-300/60 shadow-sm">
              <Sparkles className="lucide lucide-sparkles w-4 h-4 text-purple-600" />
              <span className="text-xs font-black tracking-[0.2em] text-purple-800 uppercase">
                Productivity
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
              Transform Your Team's
              <span className="relative inline-block">
                <span className="bg-linear-to-r from-purple-700 via-fuchsia-600 to-purple-700 bg-clip-text text-transparent drop-shadow-sm">
                  Productivity &nbsp;
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-linear-to-r from-purple-600 via-fuchsia-500 to-purple-600 rounded-full shadow-lg shadow-purple-400/50"></span>
              </span>
            </h2>
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-r from-purple-600/20 via-fuchsia-500/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-linear-to-br from-white/95 via-purple-50/30 to-white/95 backdrop-blur-md px-6 py-5 rounded-2xl border-2 border-purple-200/40 shadow-lg hover:shadow-xl hover:border-purple-300/60 transition-all duration-300">
                <p className="text-base lg:text-lg text-gray-800 leading-relaxed font-medium">
                  Boost your team's efficiency with Covis' intelligent workload
                  distribution. Keep everyone aligned and prevent burnout for
                  sustainable growth.
                </p>
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-purple-400/60 rounded-tl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-purple-400/60 rounded-br-2xl"></div>
              </div>
            </div>
            <div className="space-y-6 pt-4">
              <div className="group relative overflow-hidden rounded-xl bg-white/95 backdrop-blur-md border border-transparent shadow-2xl shadow-purple-500/20 hover:border-gray-200/80 hover:shadow-lg transition-all duration-500">
                <div className="absolute inset-0 bg-linear-to-r from-purple-600 via-fuchsia-500 to-purple-600 opacity-100 group-hover:opacity-0 transition-opacity duration-500 p-px rounded-xl">
                  <div className="h-full w-full rounded-xl bg-white/95 backdrop-blur-md"></div>
                </div>
                <div className="relative flex items-center gap-4 p-4">
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 rounded-lg bg-linear-to-br from-purple-600 via-fuchsia-500 to-purple-700 opacity-30 group-hover:opacity-0 blur-xl transition-opacity duration-500"></div>
                    <div className="relative w-10 h-10 rounded-lg bg-linear-to-br from-purple-600 via-fuchsia-500 to-purple-700 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Zap className="lucide lucide-zap w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-purple-700 group-hover:text-gray-600 transition-colors duration-500 mb-1">
                      Smarter Workload
                    </h3>
                    <p className="text-sm text-gray-700 group-hover:text-gray-500 transition-colors duration-500 leading-relaxed">
                      Automatically balance team tasks for maximum productivity.
                    </p>
                  </div>
                  <div className="shrink-0 w-6 h-6 rounded-full bg-linear-to-br from-purple-600 via-fuchsia-500 to-purple-600 group-hover:bg-gray-200 flex items-center justify-center transition-all duration-500 group-hover:translate-x-1">
                    <ChevronRight className="w-3 h-3 text-white group-hover:text-gray-600 transition-colors duration-500" />
                  </div>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-xl bg-white/95 backdrop-blur-md border border-transparent shadow-2xl shadow-purple-500/20 hover:border-gray-200/80 hover:shadow-lg transition-all duration-500">
                <div className="absolute inset-0 bg-linear-to-r from-purple-600 via-fuchsia-500 to-purple-600 opacity-100 group-hover:opacity-0 transition-opacity duration-500 p-px rounded-xl">
                  <div className="h-full w-full rounded-xl bg-white/95 backdrop-blur-md"></div>
                </div>
                <div className="relative flex items-center gap-4 p-4">
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 rounded-lg bg-linear-to-br from-purple-600 via-fuchsia-500 to-purple-700 opacity-30 group-hover:opacity-0 blur-xl transition-opacity duration-500"></div>
                    <div className="relative w-10 h-10 rounded-lg bg-linear-to-br from-fuchsia-600 via-pink-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Zap className="lucide lucide-zap w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-purple-700 group-hover:text-gray-600 transition-colors duration-500 mb-1">
                      Effortless Collaboration
                    </h3>
                    <p className="text-sm text-gray-700 group-hover:text-gray-500 transition-colors duration-500 leading-relaxed">
                      Collaborate seamlessly across teams with real-time updates.
                    </p>
                  </div>
                  <div className="shrink-0 w-6 h-6 rounded-full bg-linear-to-br from-purple-600 via-fuchsia-500 to-purple-600 group-hover:bg-gray-200 flex items-center justify-center transition-all duration-500 group-hover:translate-x-1">
                    <ChevronRight className="w-3 h-3 text-white group-hover:text-gray-600 transition-colors duration-500" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
