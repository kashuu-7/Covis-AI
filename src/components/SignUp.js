import React from "react";
import { Sparkles, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="relative flex h-screen w-full min-h-0 overflow-hidden lg:grid lg:w-screen lg:max-w-[100vw] lg:grid-cols-2">
      <div className="relative flex min-h-0 w-full shrink-0 justify-center bg-gradient-to-br from-white via-gray-50 to-purple-50 p-6 overflow-y-auto overflow-x-hidden h-screen scrollbar-none transition-[grid-column] duration-500 ease-in-out lg:min-w-0 lg:overflow-x-hidden">
        <div className="w-full max-w-lg my-auto shrink-0">
          <div className="animate-in fade-in zoom-in-95 flex w-full flex-col items-center py-8 duration-700">
            <div className="group relative mb-8">
              <div className="from-brand-primary/20 to-brand-secondary/20 absolute inset-0 rounded-full bg-gradient-to-br blur-2xl"></div>
              <div className="relative flex items-center justify-center">
                <div
                  className="vio-mascot"
                  style={{
                    width: "120px",
                    height: "136px",
                    minWidth: "120px",
                    minHeight: "136px",
                    animation: "float 3s ease-in-out infinite",
                  }}
                >
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
                      <circle
                        cx="61"
                        cy="22"
                        r="3"
                        fill="url(#robotGradient)"
                      />
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
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50/80 px-3 py-1">
              <Sparkles className="text-[#8500db] h-3.5 w-3.5" />
              <span className="text-brand-primary text-xs font-bold tracking-wider uppercase">
                Almost there
              </span>
            </div>
            <h1 className="mb-3 text-center text-4xl leading-tight font-bold tracking-tight text-gray-900">
              Coming&nbsp;
              <span className="from-[#8500db] to-[#c500db] bg-gradient-to-r via-purple-600 bg-clip-text text-transparent">
                Soon
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-sm text-center text-base leading-relaxed font-medium text-gray-500">
              Self-serve signup isn't open yet. We're putting the finishing
              touches on COVIS AI registration — check back shortly.
            </p>
            <div className="flex w-full max-w-sm justify-center">
              <Link href="/" className="w-full sm:w-auto">
                <div className="group/button relative">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 w-full border-gray-200 bg-white text-gray-700 hover:bg-gray-50">
                    Back to home
                  </button>
                </div>
              </Link>
            </div>
            <p className="mt-8 text-center text-sm text-gray-500">
              Need access now?&nbsp;
              <Link
                href="/contact"
                className="text-[#8500db] font-semibold transition-colors hover:text-[#c500db]"
              >
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="relative hidden min-h-0 min-w-0 lg:block overflow-hidden h-screen border-l border-gray-200/50 transition-[grid-column] duration-500 ease-in-out">
        <div className="absolute inset-0 size-full transition-all duration-500 ease-in-out z-10 opacity-100 scale-100">
          <div className="relative isolate flex h-full min-h-0 w-full min-w-full flex-col overflow-hidden text-white">
            <div className="pointer-events-none absolute inset-0 z-0 h-full w-full min-w-full overflow-hidden">
              <div className="absolute inset-0 size-full min-w-full">
                <div className="size-full min-h-full min-w-full opacity-90">
                  {/* Background */}
                  <div className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,rgba(133,0,219,0.35),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(197,0,219,0.30),transparent_40%),linear-gradient(180deg,#14051f_0%,#220632_30%,#3a0b5d_65%,#0d0318_100%)]"></div>
                </div>
              </div>
              <div className="absolute top-20 right-20 w-64 h-64 bg-brand-primary/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-40 left-20 w-48 h-48 bg-brand-primary/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>
            </div>
            <div className="relative z-10 flex min-h-0 min-w-0 flex-1 flex-col w-full">
              <div className="shrink-0 px-6 pt-6 pb-2">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-white/90 hover:text-white"
                >
                  <button className="inline-flex items-center gap-2 cursor-pointer group text-white/90 hover:text-white">
                    <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                    <span className="text-xl font-light">Home</span>
                  </button>
                </Link>
              </div>
              <div className="relative flex min-h-0 flex-1 flex-col w-full px-6 pb-6 xl:px-10 xl:pb-10">
                <div className="relative flex w-full max-w-xl flex-1 min-h-0 flex-col mx-auto">
                  <div className="pointer-events-none absolute inset-0 bg-brand-primary/10 rounded-3xl blur-2xl animate-pulse"></div>
                  <div className="flex h-full w-full flex-col overflow-hidden border-2 shadow-[0_0_80px_rgba(133,0,219,0.4)] backdrop-blur-2xl sm:rounded-3xl bg-gradient-to-b from-[#1a1a1f] to-[#0a0a0c] border-brand-primary/20 relative min-h-0 flex-1 border-none">
                    <div className="from-[#8500db] to-[#c500db] relative flex shrink-0 items-center justify-between border-b border-white/10 bg-gradient-to-r via-purple-600 p-4 sm:p-5">
                      <div className="absolute inset-0 opacity-10">
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage:
                              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0px)",
                            backgroundSize: "32px 32px",
                          }}
                        ></div>
                      </div>
                      {/* TOP BAR */}
                      {/* Left Side */}
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md border border-white/20">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-white">
                            Welcome to COVIS AI
                          </h3>

                          <p className="text-xs text-white/70">
                            Early Access Registration
                          </p>
                        </div>
                      </div>

                      {/* Right Side */}

                      <div className="flex items-center gap-3">
                        <div className="hidden xl:flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md border border-white/10">
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse"></span>

                          <span className="text-xs font-semibold text-white">
                            System Online
                          </span>
                        </div>

                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 border border-white/20 font-bold text-white">
                          C
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                      <div className="space-y-6">
                        {/* Header */}
                        <div>
                          <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-purple-300">
                            Early Access
                          </span>

                          <h2 className="mt-4 text-3xl font-bold text-white">
                            Create your
                            <span className="bg-gradient-to-r from-[#8500db] to-[#c500db] bg-clip-text text-transparent">
                              {" "}
                              COVIS AI
                            </span>{" "}
                            account
                          </h2>

                          <p className="mt-3 text-sm leading-7 text-gray-300">
                            We're almost ready to launch. Join the waiting list
                            and be among the first businesses to experience the
                            future of AI-powered workflow automation.
                          </p>
                        </div>

                        {/* Features */}

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                          <h3 className="mb-5 text-lg font-semibold text-white">
                            What's waiting for you
                          </h3>

                          <div className="grid grid-cols-2 gap-4">
                            {[
                              "AI Lead Generation",
                              "Project Management",
                              "AI Email Assistant",
                              "Advanced Analytics",
                              "Smart Automation",
                              "24/7 Support",
                            ].map((item) => (
                              <div
                                key={item}
                                className="flex items-center gap-2"
                              >
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] text-xs font-bold text-white">
                                  ✓
                                </span>

                                <span className="text-sm text-gray-300">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Quote */}

                        <div className="rounded-2xl border border-[#8500db]/30 bg-gradient-to-r from-[#8500db]/15 to-[#c500db]/15 p-6">
                          <p className="text-lg italic leading-8 text-white">
                            "COVIS AI is designed to help businesses automate
                            repetitive work, increase productivity and make
                            smarter decisions with AI."
                          </p>

                          <div className="mt-5 flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] font-bold text-white">
                              C
                            </div>

                            <div>
                              <h4 className="font-semibold text-white">
                                COVIS AI Team
                              </h4>

                              <p className="text-sm text-gray-400">
                                Building the future of business automation
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
