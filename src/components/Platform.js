import React from "react";
import { Brain, Sparkles, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Platform() {
  return (
    <section className="relative min-h-[700px] lg:min-h-[800px] overflow-hidden bg-linear-to-br from-slate-950 via-purple-950 to-slate-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
      </div>
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.4) 1px, transparent 1px),
            radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(217, 70, 239, 0.2) 0%, transparent 50%)
        `,
          backgroundSize: "60px 60px, 60px 60px, 100% 100%, 100% 100%",
        }}
      ></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute animate-float-slow"
          style={{
            left: "5%",
            top: "10% ",
            animationDelay: "0s",
            animationDuration: "6s",
          }}
        >
          <div className="relative">
            <div className="w-3 h-3 rounded-full bg-linear-to-br from-purple-400 to-fuchsia-500 opacity-60 animate-pulse [animation-delay:0s]"></div>
            <div className="absolute top-1/2 left-3 w-20 h-px bg-linear-to-r from-purple-500/40 to-transparent"></div>
          </div>
        </div>

        <div
          className="absolute animate-float-slow"
          style={{
            left: "13%",
            top: "40%",
            animationDelay: "0.5s",
            animationDuration: "8s",
          }}
        >
          <div className="relative">
            <div className="w-3 h-3 rounded-full bg-linear-to-br from-purple-400 to-fuchsia-500 opacity-60 animate-pulse [animation-delay:0.3s]"></div>
          </div>
        </div>

        <div
          className="absolute animate-float-slow"
          style={{
            left: "21%",
            top: "70%",
            animationDelay: "1s",
            animationDuration: "10s",
          }}
        >
          <div className="relative">
            <div className="w-3 h-3 rounded-full bg-linear-to-br from-purple-400 to-fuchsia-500 opacity-60 animate-pulse [animation-delay:0.3s]"></div>
          </div>
        </div>

        <div
          className="absolute animate-float-slow"
          style={{
            left: "29%",
            top: "10%",
            animationDelay: "1.5s",
            animationDuration: "6s",
          }}
        >
          <div className="relative">
            <div className="w-3 h-3 rounded-full bg-linear-to-br from-purple-400 to-fuchsia-500 opacity-60 animate-pulse [animation-delay:0.3s]"></div>
            <div className="absolute top-1/2 left-3 w-20 h-px bg-linear-to-r from-purple-500/40 to-transparent"></div>
          </div>
        </div>

        <div
          className="absolute animate-float-slow"
          style={{
            left: "37%",
            top: "40%",
            animationDelay: "2s",
            animationDuration: "8s",
          }}
        >
          <div className="relative">
            <div className="w-3 h-3 rounded-full bg-linear-to-br from-purple-400 to-fuchsia-500 opacity-60 animate-pulse [animation-delay:0.3s]"></div>
          </div>
        </div>

        <div
          className="absolute animate-float-slow"
          style={{
            left: "45%",
            top: "70%",
            animationDelay: "2.5s",
            animationDuration: "10s",
          }}
        >
          <div className="relative">
            <div className="w-3 h-3 rounded-full bg-linear-to-br from-purple-400 to-fuchsia-500 opacity-60 animate-pulse [animation-delay:0.3s]"></div>
          </div>
        </div>

        <div
          className="absolute animate-float-slow"
          style={{
            left: "53%",
            top: "10%",
            animationDelay: "3s",
            animationDuration: "6s",
          }}
        >
          <div className="relative">
            <div className="w-3 h-3 rounded-full bg-linear-to-br from-purple-400 to-fuchsia-500 opacity-60 animate-pulse [animation-delay:0.3s]"></div>
            <div className="absolute top-1/2 left-3 w-20 h-px bg-linear-to-r from-purple-500/40 to-transparent"></div>
          </div>
        </div>

        <div
          className="absolute animate-float-slow"
          style={{
            left: "61%",
            top: "40%",
            animationDelay: "3.5s",
            animationDuration: "8s",
          }}
        >
          <div className="relative">
            <div className="w-3 h-3 rounded-full bg-linear-to-br from-purple-400 to-fuchsia-500 opacity-60 animate-pulse [animation-delay:0.3s]"></div>
          </div>
        </div>

        <div
          className="absolute animate-float-slow"
          style={{
            left: "69%",
            top: "70%",
            animationDelay: "4s",
            animationDuration: "10s",
          }}
        >
          <div className="relative">
            <div className="w-3 h-3 rounded-full bg-linear-to-br from-purple-400 to-fuchsia-500 opacity-60 animate-pulse [animation-delay:0.3s]"></div>
          </div>
        </div>

        <div
          className="absolute animate-float-slow"
          style={{
            left: "77%",
            top: "10%",
            animationDelay: "4.5s",
            animationDuration: "6s",
          }}
        >
          <div className="relative">
            <div className="w-3 h-3 rounded-full bg-linear-to-br from-purple-400 to-fuchsia-500 opacity-60 animate-pulse [animation-delay:0.3s]"></div>
            <div className="absolute top-1/2 left-3 w-20 h-px bg-linear-to-r from-purple-500/40 to-transparent"></div>
          </div>
        </div>

        <div
          className="absolute animate-float-slow"
          style={{
            left: "85%",
            top: "40%",
            animationDelay: "5s",
            animationDuration: "8s",
          }}
        >
          <div className="relative">
            <div className="w-3 h-3 rounded-full bg-linear-to-br from-purple-400 to-fuchsia-500 opacity-60 animate-pulse [animation-delay:0.3s]"></div>
          </div>
        </div>

        <div
          className="absolute animate-float-slow"
          style={{
            left: "93%",
            top: "70%",
            animationDelay: "5.5s",
            animationDuration: "10s",
          }}
        >
          <div className="relative">
            <div className="w-3 h-3 rounded-full bg-linear-to-br from-purple-400 to-fuchsia-500 opacity-60 animate-pulse [animation-delay:0.3s]"></div>
          </div>
        </div>
      </div>

      <div
        className="absolute pointer-events-none transition-all duration-500 ease-out"
        style={{
          left: "93px",
          top: "186px",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(217, 70, 239, 0.08) 40%, transparent 70%)",
        }}
      ></div>
      <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32 flex items-center justify-center min-h-[700px] lg:min-h-[800px]">
        <div className="max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-linear-to-r from-purple-500/10 to-fuchsia-500/10 border border-purple-500/20 backdrop-blur-sm">
            <Brain className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="text-sm font-medium text-purple-300">
              AI-Powered Platform
            </span>
            <Sparkles className="w-3 h-3 text-fuchsia-400" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
            Get Started&nbsp;
            <span className="inline-block relative">
              <span className="relative z-10 bg-linear-to-r from-purple-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                Today
              </span>
              <div className="absolute bottom-0 left-0 right-0 h-4 bg-linear-to-r from-purple-500/40 via-fuchsia-500/40 to-purple-500/40 blur-xl animate-pulse"></div>
              <div className="absolute inset-0 bg-linear-to-r from-purple-500/20 via-fuchsia-500/20 to-purple-500/20 blur-2xl"></div>
            </span>
          </h2>
          <div className="relative mb-12 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-purple-500/50 rounded-tl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-fuchsia-500/50 rounded-br-2xl"></div>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Start scaling your business with Covis. Enjoy&nbsp;
              <span className="text-purple-400 font-semibold">
                smarter project management&nbsp;
              </span>
              and&nbsp;
              <span className="text-fuchsia-400 font-semibold">
                seamless client engagement
              </span>
              —all in one platform.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
            <Link
              href="/discover"
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-linear-to-r from-purple-600 via-fuchsia-600 to-purple-600 rounded-2xl text-white font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              <div className="absolute inset-0 bg-linear-to-r from-purple-400 via-fuchsia-400 to-purple-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
              <Zap className="relative z-10 w-5 h-5" />
              <span className="relative z-10">Discover More</span>
              <ArrowRight className=" relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link href="/pricing" 
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl text-white font-semibold text-lg border-2 border-purple-500/30 hover:border-purple-500/60 backdrop-blur-sm transition-all duration-300 hover:bg-purple-500/10"
            >
              <span>
                View Plans
              </span>
              <ArrowRight className="lucide lucide-arrow-right w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500/30 rounded-full blur-md animate-pulse [animation-delay:0s]"></div>
              <Brain className="relative w-5 h-5 text-purple-400" />
            </div>
            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
              AI-Powered
            </span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="relative">
              <div className="absolute inset-0 bg-fuchsia-500/30 rounded-full blur-md animate-pulse [animation-delay:0.5s]"></div>
              <Sparkles className="relative w-5 h-5 text-fuchsia-400" />
            </div>
            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
              Enterprise Ready
            </span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-slate-950/80 to-transparent"></div>
    </section>
  );
}
