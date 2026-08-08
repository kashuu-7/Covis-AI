import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import RobotBox from "../RobotBox";
import SignForm from "./SignForm";

export default function SignUp() {
  return (
    <div className="relative flex h-screen w-full min-h-0 overflow-hidden lg:grid lg:w-screen lg:max-w-[100vw] lg:grid-cols-2">
      <SignForm/>

      {/* Right Side */}
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
                <RobotBox isSignup={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
