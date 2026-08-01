import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";
import { TrendingUp, Users, Target, Shield } from "lucide-react";

export default function Hero() {
  const cards = [
    {
      icon: TrendingUp,
      title: "Scale Your Business",
      description:
        "AI-driven insights and automation to grow your business intelligently and sustainably.",
      dark: true,
    },
    {
      icon: Users,
      title: "Manage Your Team",
      description:
        "Streamline project management and prevent burnout with smart workload distribution.",
      dark: false,
    },
    {
      icon: Target,
      title: "Win More Clients",
      description:
        "Generate compelling proposals and engage clients with AI-powered communication tools.",
      dark: true,
    },
    {
      icon: Shield,
      title: "Control Damage",
      description:
        "Proactive monitoring and risk management to prevent issues before they happen.",
      dark: false,
    },
  ];
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <Image
          src="/assets/aiRobot.webp"
          alt="AI Robot"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgb(255 255 255) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>
      <Navbar />

      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-20 lg:pt-28 pb-32 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] tracking-tight text-balance">
            Scale Smarter.
            <span className="relative inline-block">
              <span className="bg-linear-to-r from-purple-700 via-fuchsia-600 to-purple-700 bg-clip-text text-transparent drop-shadow-sm">
                Work Faster.
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-linear-to-r from-purple-600 via-fuchsia-500 to-purple-600 rounded-full shadow-lg shadow-purple-400/50"></span>
            </span>{" "}
            Win More.
          </h1>
          <div className="space-y-4 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-white font-medium text-balance leading-relaxed">
              Your freelancing, your tech company, your growth, empowered by
              Covis.
            </p>
            <p className="text-base md:text-lg text-white/90 text-balance leading-relaxed">
              Meet Covis, the smart system to win clients, scale teams, and
              deliver with confidence.
            </p>
          </div>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <div className="group/button relative">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-brand-gradient hover:opacity-90 hover:shadow-[0_0_30px_rgba(133,0,219,0.6)] h-10 rounded-md has-[>svg]:px-4 bg-linear-to-r from-purple-500 to-fuchsia-500 text-white font-bold hover:from-purple-400 hover:to-fuchsia-400 px-10 py-6 text-lg shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/60 hover:scale-105 transition-all duration-300">
                  View Pricing
                </button>
              </div>
            </Link>
            <Link href="/">
              <div className="group/button relative">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md has-[>svg]:px-4 border-2 border-white/40 bg-white/10 text-white font-bold hover:bg-white/20 px-10 py-6 text-lg backdrop-blur-sm transition-all duration-300">
                  Sign Up Now
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 max-w-7xl mx-auto">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className={`
          group relative p-10 text-center overflow-hidden cursor-pointer border-r border-b last:border-r-0
          transition-all duration-500 ease-out
          ${
            card.dark
              ? "bg-linear-to-br from-purple-700 via-fuchsia-600 to-purple-700 border-purple-300/20"
              : "bg-white border-gray-200"
          }
          scale-100 hover:scale-105 hover:shadow-2xl hover:z-20 hover:-translate-y-2 transition-all duration-300
        `}
                style={{
                  transitionDelay: "0ms",
                  animation:
                    "slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0s both",
                }}
              >
                <div
                  className={`
            absolute inset-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100
            ${
              card.dark
                ? "bg-linear-to-br from-purple-500 via-fuchsia-400 to-purple-300"
                : "bg-linear-to-br from-purple-50 via-fuchsia-50 to-purple-50"
            }
          `}
                ></div>

                <div
                  className={`
            absolute top-0 left-0 border-t-2 border-l-2 transition-all duration-500
            w-12 h-12 group-hover:w-16 group-hover:h-16 group-hover:border-white/50
            ${card.dark ? "border-white/30" : "border-purple-500/30"}
          `}
                ></div>

                <div
                  className={`
            absolute bottom-0 right-0 border-b-2 border-r-2 transition-all duration-500
            w-12 h-12 group-hover:w-16 group-hover:h-16 group-hover:border-white/50
            ${card.dark ? "border-white/30" : "border-purple-500/30"}
          `}
                ></div>

                <div
                  className={`
            relative w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6
            transition-all duration-500
            scale-100 rotate-0 group-hover:scale-110 group-hover:rotate-6
            ${
              card.dark
                ? "bg-white/90 backdrop-blur-sm shadow-xl text-[#9810fa]"
                : "bg-linear-to-br from-purple-600 to-fuchsia-500 shadow-xl shadow-purple-500/30 text-white"
            }
          `}
                >
                  <Icon />
                </div>

                <h3
                  className={`
            relative text-xl font-bold mb-4 transition-all duration-300 tracking-tight
            ${card.dark ? "text-white" : "text-gray-900"}
          `}
                >
                  {card.title}
                </h3>

                <p
                  className={`
            relative text-sm leading-relaxed transition-all duration-300
            ${card.dark ? "text-white/90" : "text-gray-600"}
          `}
                >
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-b from-transparent via-gray-50/50 to-white z-0 pointer-events-none"></div>
    </section>
  );
}
