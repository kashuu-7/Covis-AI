import React from "react";
import {
  Users,
  Building2,
  CreditCard,
  ChevronRight,
  Check,
} from "lucide-react";

export default function Stepper({ step, accountType }) {
  return (
    <div className="mb-4 flex-shrink-0 sm:mb-6">
      <div className="flex w-full items-center justify-between gap-0.5 sm:justify-center sm:gap-4">
        <div className="flex min-w-0 flex-1 items-center gap-0.5 sm:flex-none sm:gap-3">
          <div className="flex min-w-0 items-center gap-1.5 sm:gap-3">
            <div
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:h-10 sm:w-10 
                ${
                  step >= 2
                    ? "bg-[#8500db] text-white"
                    : step === 1
                      ? "bg-gradient-to-r from-[#8500db] to-[#c500db] text-white"
                      : "bg-gray-200 text-gray-500"
                }`}
            >
              {step >= 2 ? (
                <Check className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
              ) : (
                <Users className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
              )}
            </div>
            <div className="min-w-0 text-left">
              <div
                className={`text-[10px] leading-tight font-semibold sm:text-sm  ${
                  step >= 1 ? "text-[#8500db]" : "text-gray-600"
                }`}
              >
                Step 1
              </div>
              <div className="truncate text-[10px] leading-tight text-gray-500 sm:text-xs">
                Account Type
              </div>
            </div>
          </div>
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-0.5 sm:flex-none sm:gap-3">
          <ChevronRight className="h-3.5 w-3.5 shrink-0 text-gray-400 sm:-ml-3 sm:h-5 sm:w-5" />
          <div className="flex min-w-0 items-center gap-1.5 sm:gap-3">
            <div
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:h-10 sm:w-10 
                ${
                  step >= 3
                    ? "bg-[#8500db] text-white"
                    : step >= 2
                      ? "bg-gradient-to-r from-[#8500db] to-[#c500db] text-white"
                      : "bg-gray-200 text-gray-500"
                }`}
            >
              {step >= 3 ? (
                <Check className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
              ) : (
                <Building2 className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
              )}
            </div>
            <div className="min-w-0 text-left">
              <div
                className={`text-[10px] leading-tight font-semibold sm:text-sm  ${
                  step >= 2 ? "text-[#8500db]" : "text-gray-600"
                }`}
              >
                Step 2
              </div>

              <div className="truncate text-[10px] leading-tight text-gray-500 sm:text-xs">
                {accountType === "company" ? "Company Info" : "Personal Info"}
              </div>
            </div>
          </div>
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-0.5 sm:flex-none sm:gap-3">
          <ChevronRight className="h-3.5 w-3.5 shrink-0 text-gray-400 sm:-ml-3 sm:h-5 sm:w-5" />
          <div className="flex min-w-0 items-center gap-1.5 sm:gap-3">
            <div
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:h-10 sm:w-10 
                    ${
                      step >= 3
                        ? "bg-linear-to-r from-[#8500db] to-[#c500db] text-white shadow-[0_0_20px_rgba(133,0,219,0.4)]"
                        : "bg-gray-200 text-gray-500"
                    }`}
            >
              <CreditCard className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
            </div>
            <div className="min-w-0 text-left">
              <div
                className={`text-[10px] leading-tight font-semibold sm:text-sm  ${
                  step >= 3 ? "text-[#8500db]" : "text-gray-600"
                }`}
              >
                Step 3
              </div>
              <div className="truncate text-[10px] leading-tight text-gray-500 sm:text-xs">
                Subscription Plan
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
