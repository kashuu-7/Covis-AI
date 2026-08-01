import React from "react";
import { Bot, ArrowRight, FileText, Users } from "lucide-react";

export default function LeftContent() {
  const cards = [
    {
      icon: Bot,
      iconBg: "from-purple-600 via-fuchsia-500 to-purple-700",
      blurBg: "from-purple-600 via-fuchsia-500 to-purple-700",
      title: "AI Knowledge Assistants",
      description:
        "AI assistants that help teams understand projects, draft responses, and prepare proposals for human review.",
    },
    {
      icon: FileText,
      iconBg: "from-fuchsia-600 via-pink-500 to-purple-600",
      blurBg: "from-fuchsia-600 via-pink-500 to-purple-600",
      title: "Proposal Intelligence",
      description:
        "Generate tailored, winning proposals in seconds using your company's project knowledge and AI assistance.",
    },
    {
      icon: Users,
      iconBg: "from-purple-600 via-violet-500 to-indigo-600",
      blurBg: "from-purple-600 via-violet-500 to-indigo-600",
      title: "Client & Workforce Hub",
      description:
        "Manage clients, projects, teams, documents, and analytics from one unified platform.",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-4xl leading-tight font-bold text-gray-900 lg:text-5xl">
        Covis is&nbsp;
        <span className="relative inline-block">
          <span className="bg-linear-to-r from-purple-700 via-fuchsia-600 to-purple-700 bg-clip-text text-transparent drop-shadow-sm">
            Unifying
          </span>
          <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-linear-to-r from-purple-600 via-fuchsia-500 to-purple-600 shadow-lg shadow-purple-400/50"></span>
        </span>
        {" "}Enterprise AI
      </h2>

      <div className="group relative">
        <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-purple-600/20 via-fuchsia-500/20 to-purple-600/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"></div>
        <div className="relative rounded-2xl border-2 border-purple-200/40 bg-linear-to-br from-white/95 via-purple-50/30 to-white/95 px-6 py-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-purple-300/60 hover:shadow-xl">
          <p className="text-base leading-relaxed font-medium text-gray-800 lg:text-lg">
            Built for {" "}
            <span className="font-semibold text-purple-700">enterprises</span>{" "}
             and {" "}
            <span className="font-semibold text-purple-700">
              multi-tenant teams
            </span>
            , Covis combines{" "}
            <span className="relative inline-block">
              <span className="font-semibold text-fuchsia-600">
                AI-powered work assistants
              </span>
              <span className="absolute bottom-0 left-0 h-0.5 w-full bg-linear-to-r from-transparent via-fuchsia-400 to-transparent"></span>
            </span>
            ,{" "}
            <span className="relative inline-block">
              <span className="font-semibold text-fuchsia-600">
                proposal generation
              </span>
              <span className="absolute bottom-0 left-0 h-0.5 w-full bg-linear-to-r from-transparent via-fuchsia-400 to-transparent"></span>
            </span>
            ,{" "}
            <span className="relative inline-block">
              <span className="font-semibold text-fuchsia-600">
                project knowledge
              </span>
              <span className="absolute bottom-0 left-0 h-0.5 w-full bg-linear-to-r from-transparent via-fuchsia-400 to-transparent"></span>
            </span>
            , and{" "}
            <span className="relative inline-block">
              <span className="font-semibold text-fuchsia-600">
                workforce collaboration
              </span>
              <span className="absolute bottom-0 left-0 h-0.5 w-full bg-linear-to-r from-transparent via-fuchsia-400 to-transparent"></span>
            </span>{" "}
            {""} in one platform.
          </p>
          <div className="absolute top-0 left-0 h-3 w-3 rounded-tl-2xl border-t-2 border-l-2 border-purple-400/60"></div>
          <div className="absolute right-0 bottom-0 h-3 w-3 rounded-br-2xl border-r-2 border-b-2 border-purple-400/60"></div>
        </div>
      </div>

      <div className="space-y-3 pt-2 pb-6">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-transparent bg-white/95 shadow-2xl shadow-purple-500/20 backdrop-blur-md transition-all duration-500 hover:border-gray-200/80 hover:shadow-lg hover:scale-[1.02]"
            >
              <div className="absolute inset-0 rounded-xl bg-linear-to-r from-purple-600 via-fuchsia-500 to-purple-600 p-px opacity-100 transition-opacity duration-500 group-hover:opacity-0">
                <div className="h-full w-full rounded-xl bg-white/95 backdrop-blur-md"></div>
              </div>

              <div className="relative flex items-center gap-4 p-4">
                <div className="relative shrink-0">
                  <div
                    className={`absolute inset-0 rounded-lg bg-linear-to-br ${card.blurBg} opacity-30 blur-xl transition-opacity duration-500 group-hover:opacity-0`}
                  ></div>

                  <div
                    className={`relative flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br ${card.iconBg} shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <h3 className="bg-linear-to-r from-purple-700 to-fuchsia-600 bg-clip-text text-sm font-bold text-transparent transition-all duration-300 group-hover:bg-none group-hover:text-gray-900">
                      {card.title}
                    </h3>

                    <ArrowRight className="h-3.5 w-3.5 translate-x-0 text-purple-600 opacity-100 transition-all duration-300 group-hover:-translate-x-2 group-hover:opacity-0" />
                  </div>

                  <p className="text-xs leading-relaxed text-gray-700">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
