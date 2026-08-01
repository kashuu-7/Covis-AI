import LeftContent from "./LeftContent";
import CenterAnimation from "./CenterAnimation";
import RightAnimation from "./RightAnimation";
import { Sparkles } from "lucide-react";

export default function AboutUs() {
  return (
    <>
      <section className="relative -mt-24 overflow-hidden bg-white px-4 pt-40 pb-24 sm:px-6 sm:pb-28 lg:px-8 lg:pb-32">
        <div
          className="absolute inset-0 animate-pulse bg-linear-to-br from-purple-100/30 via-white to-fuchsia-100/30"
          style={{ animationDuration: "8s" }}
        ></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(139,92,246,0.03)_1.5px,transparent_1.5px)] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] bg-size-[64px_64px]"></div>
        <div
          className="absolute top-20 left-10 h-96 w-96 animate-pulse rounded-full bg-linear-to-br from-purple-300/20 via-fuchsia-300/20 to-transparent blur-3xl "
          style={{ animationDuration: "6s" }}
        ></div>
        <div
          className="absolute right-10 bottom-20 h-96 w-96 animate-pulse rounded-full bg-linear-to-tl from-indigo-300/20 via-violet-300/20 to-transparent blur-3xl"
          style={{ animationDelay: "1s", animationDuration: "7s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-linear-to-br from-purple-200/15 via-fuchsia-200/15 to-pink-200/15 blur-3xl"
          style={{ animationDuration: "9s", animationDelay: "2s" }}
        ></div>
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgb(139, 92, 246) 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        ></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="mt-12 mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-300/60 bg-white/90 px-4 py-2 shadow-sm backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-purple-600" />
              <span className="bg-linear-to-r from-purple-700 to-fuchsia-600 bg-clip-text text-sm font-black tracking-widest text-transparent drop-shadow-sm">
                ABOUT US
              </span>
            </div>
            <div className="mt-6 mb-4 flex items-center justify-center">
              <div className="relative h-1 w-64">
                <div className="absolute inset-0 rounded-full bg-linear-to-r from-transparent via-purple-300 to-transparent"></div>
                <div className="absolute inset-0 animate-pulse rounded-full bg-linear-to-r from-transparent via-fuchsia-500 to-transparent"></div>
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  <div
                    className="absolute h-full w-24 animate-[slide_2.5s_linear_infinite] bg-linear-to-r from-transparent via-white to-transparent opacity-60"
                  ></div>
                </div>
                <div className="absolute top-1/2 left-0 h-2 w-2 -translate-y-1/2 animate-pulse rounded-full bg-purple-500 shadow-lg shadow-purple-400/50"></div>
                <div className="absolute top-1/2 right-0 h-2 w-2 -translate-y-1/2 animate-pulse rounded-full bg-fuchsia-500 shadow-lg shadow-fuchsia-400/50"></div>
              </div>
            </div>
          </div>

          {/* Main section */}
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <LeftContent />
            <CenterAnimation />
            <RightAnimation/>
          </div>
        </div>
      </section>
    </>
  );
}
