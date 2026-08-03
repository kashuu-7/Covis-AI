import React from "react";
import Navbar from "../home/Navbar";
import {
  Rocket,
  CircleX,
  Clock,
  Target,
  Users,
  DollarSign,
  CircleCheck,
  Bot,
  FileText,
  Calendar,
  ChartColumn,
  Brain, 
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function DiscoverHero() {
  return (
    <>
      {/* // Hero section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-24 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl animate-pulse [animation-delay:1s] " />
          <div
            className="absolute pointer-events-none transition-all duration-500 ease-out"
            style={{
              left: "-200px",
              top: "-200px",
              width: "400px",
              height: "400px",
              background:
                "radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)",
            }}
          />
        </div>
        <Navbar />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 border border-purple-500/20 backdrop-blur-sm">
            <Rocket className="w-4 h-4 text-purple-400 animate-bounce" />
            <span className="text-sm font-medium text-purple-300">
              The Complete Covis Story
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
            From{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
                Chaos
              </span>
              <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-purple-500/40 via-fuchsia-500/40 to-purple-500/40 blur-xl"></div>
            </span>{" "}
            to{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                Control
              </span>
              <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-purple-500/40 via-fuchsia-500/40 to-purple-500/40 blur-xl"></div>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            How we built an AI-powered platform that transforms the way
            freelancers and companies
            <span className="text-purple-400 font-semibold"> win clients</span>,
            <span className="text-fuchsia-400 font-semibold">
              {" "}
              manage projects
            </span>
            , and
            <span className="text-purple-400 font-semibold">
              {" "}
              scale operations
            </span>
            .
          </p>
        </div>
      </section>
      <section className="relative py-32 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl animate-pulse [animation-delay:1.5s] " />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[#8500db]/10 border-[#8500db]/30 border">
              <CircleX className="w-4 h-4 text-[#8500db]" />
              <span className="text-sm font-medium text-[#8500db]">
                The Problem
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              The{" "}
              <span className="bg-gradient-to-r from-[#8500db] via-[#c500db] to-[#8500db] bg-clip-text text-transparent">
                Broken
              </span>{" "}
              Reality
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common challenges reported by freelancers and growing companies in
              sales, delivery, and operations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group relative p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-brand-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-brand-primary/10 [animation-delay:0s]">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="mb-6">
                  <div className="relative w-14 h-14">
                    <div className="absolute inset-0 bg-brand-primary/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative w-14 h-14 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Time Drain
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Many freelancers spend a large share of their time on
                  non-billable tasks—finding clients, writing proposals, and
                  managing admin work.
                </p>
              </div>
            </div>
            <div className="group relative p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-brand-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-brand-primary/10 [animation-delay:0.1s]">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="mb-6">
                  <div className="relative w-14 h-14">
                    <div className="absolute inset-0 bg-brand-primary/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative w-14 h-14 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                      <Target className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Inconsistent Pipeline
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Many growing companies struggle with unpredictable lead
                  generation and inconsistent client flow.
                </p>
              </div>
            </div>
            <div className="group relative p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-brand-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-brand-primary/10 [animation-delay:0.2s] ">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="mb-6">
                  <div className="relative w-14 h-14">
                    <div className="absolute inset-0 bg-brand-primary/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative w-14 h-14 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Resource Chaos
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Poor resource allocation and team mismanagement often put
                  projects at risk.
                </p>
              </div>
            </div>
            <div className="group relative p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-brand-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-brand-primary/10 [animation-delay:0.30000000000000004s]">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="mb-6">
                  <div className="relative w-14 h-14">
                    <div className="absolute inset-0 bg-brand-primary/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative w-14 h-14 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                      <DollarSign className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Revenue Loss
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Inefficient processes and missed opportunities can lead to
                  significant revenue loss over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-32 px-6 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl animate-pulse [animation-delay:1s ]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-emerald-500/10 border-emerald-500/20 border">
              <CircleCheck className="w-4 h-4 text-emerald-300" />
              <span className="text-sm font-medium text-emerald-300">
                The Solution
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              {" "}
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                Covis
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We built an AI-powered platform that doesn't just solve
              problems—it transforms how you work.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-purple-900/30 border border-purple-500/20 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-500">
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-purple-500/30 rounded-tl-2xl group-hover:border-purple-500/60 transition-colors duration-500"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-fuchsia-500/30 rounded-br-2xl group-hover:border-fuchsia-500/60 transition-colors duration-500"></div>
              <div className="relative">
                <div className="mb-6">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-fuchsia-500/30 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center">
                      <Bot className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  AI Work Assistants
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  AI assistants that help your business development team
                  understand client needs, organize relationship history, and
                  draft personalized communication for human review.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500"></div>
                    <span>Guided client engagement</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500"></div>
                    <span>Relationship insights</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500"></div>
                    <span>Personalized message drafts</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500"></div>
                    <span>Real-time analytics</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-purple-900/30 border border-purple-500/20 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-500">
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-purple-500/30 rounded-tl-2xl group-hover:border-purple-500/60 transition-colors duration-500"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-fuchsia-500/30 rounded-br-2xl group-hover:border-fuchsia-500/60 transition-colors duration-500"></div>
              <div className="relative">
                <div className="mb-6">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-fuchsia-500/30 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Proposal Intelligence
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Tailor winning proposals in minutes using your company's
                  project knowledge and AI assistance, reviewed and sent by your
                  team.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500"></div>
                    <span>Tailored to client needs</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500"></div>
                    <span>Technical accuracy</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500"></div>
                    <span>Budget alignment</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500"></div>
                    <span>Scope alignment</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-purple-900/30 border border-purple-500/20 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-500">
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-purple-500/30 rounded-tl-2xl group-hover:border-purple-500/60 transition-colors duration-500"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-fuchsia-500/30 rounded-br-2xl group-hover:border-fuchsia-500/60 transition-colors duration-500"></div>
              <div className="relative">
                <div className="mb-6">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-fuchsia-500/30 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Smart Resource Management
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Optimize team allocation and track productivity in real-time
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500"></div>
                    <span>Capacity planning</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500"></div>
                    <span>Skill matching</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500"></div>
                    <span>Workload balancing</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500"></div>
                    <span>Performance metrics</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-purple-900/30 border border-purple-500/20 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-500">
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-purple-500/30 rounded-tl-2xl group-hover:border-purple-500/60 transition-colors duration-500"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-fuchsia-500/30 rounded-br-2xl group-hover:border-fuchsia-500/60 transition-colors duration-500"></div>
              <div className="relative">
                <div className="mb-6">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-fuchsia-500/30 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center">
                      <ChartColumn className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Growth Analytics
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Data-driven insights to scale your business intelligently
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500"></div>
                    <span>Revenue forecasting</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500"></div>
                    <span>Client insights</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500"></div>
                    <span>Team efficiency</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500"></div>
                    <span>Market trends</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-32 px-6 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl animate-pulse [animation-delay:1s] " />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-purple-900/50 to-fuchsia-900/50 border border-purple-500/30 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 rounded-3xl animate-pulse"></div>
            <div className="relative">
              <Brain className="w-16 h-16 mx-auto mb-6 text-purple-400" />
              <h2 className="text-5xl font-black text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Explore pricing, create your account, and see how Covis can
                support your business development, delivery, and team workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600 rounded-2xl text-white font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
                  href="/pricing"
                >
                  <Zap className="w-5 h-5" />
                  <span>View Pricing</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-chevron-right w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </Link>
                <Link
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl text-white font-semibold text-lg border-2 border-purple-500/30 hover:border-purple-500/60 backdrop-blur-sm transition-all duration-300 hover:bg-purple-500/10"
                  href="/"
                >
                  <span>Back to Home</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
