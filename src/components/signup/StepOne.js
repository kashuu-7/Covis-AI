import React from "react";
import {
  Users,
  Building2,
  CircleUser,
  Check,
  ChevronRight,
} from "lucide-react";

export default function StepOne({
  formData,
  setFormData,
  nextStep,
}) {
  return (
    <div className="stepper-form-shell flex-shrink-0 rounded-2xl border border-gray-200/60 bg-white p-3 shadow-[0_0_40px_rgba(133,0,219,0.1)] sm:p-6 md:p-8">
      <form
        className="flex h-full flex-col"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-1 flex-col space-y-5">
          <div className="mb-6 flex-shrink-0">
            <h2 className="mb-1 flex items-center gap-2 text-xl font-bold text-gray-900">
              <Users className="h-5 w-5 text-[#8500db]" />
              Account Type
            </h2>
            <p className="text-sm text-gray-600">
              Choose how you want to use COVIS AI
            </p>
          </div>
          <div className="flex-1">
            <div className="space-y-4">
              <div className="space-y-4">
                {/* company button */}
                <button
                  type="button"
                  onClick={() => {
                    setFormData((prev) => ({
                      ...prev,
                      accountType: "company",
                    }));
                  }}
                  className={`group relative block w-full cursor-pointer overflow-hidden rounded-2xl border-2 p-4 text-left transition-all duration-300 sm:p-6
                    ${
                      formData.accountType === "company"
                        ? "border-[#8500db] bg-[#8500db]/5 shadow-[0_0_25px_rgba(133,0,219,0.15)]"
                        : "border-gray-200 bg-white hover:-translate-y-0.5 hover:border-[#8500db]/40 hover:shadow-[0_8px_24px_rgba(133,0,219,0.08)]"
                    }
                `}
                >
                  <span className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-[#8500db]/15 to-[#c500db]/10 blur-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-60" />
                  <span className="relative block">
                    <span className="flex items-start gap-3 sm:items-center sm:gap-4">
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 sm:h-14 sm:w-14 sm:rounded-2xl 
                        ${
                          formData.accountType === "company"
                            ? "bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_6px_16px_rgba(133,0,219,0.35)]"
                            : "bg-gray-100 text-gray-500 group-hover:bg-[#8500db]/10 group-hover:text-[#8500db]"
                        }`}
                      >
                        <Building2 className="h-5 w-5 sm:h-7 sm:w-7" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-start justify-between gap-2 sm:items-center sm:gap-3">
                          <span className="min-w-0">
                            <span
                              className={`block text-base leading-snug font-bold transition-colors sm:text-lg  ${
                                formData.accountType === "company"
                                  ? "text-[#8500db]"
                                  : "text-gray-900"
                              }`}
                            >
                              Company
                            </span>
                            <span className="mt-0.5 block text-xs leading-snug font-medium text-gray-500 sm:text-sm">
                              For businesses, agencies & teams
                            </span>
                          </span>
                          <span
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200 sm:mt-0 sm:h-6 sm:w-6 
                                ${
                                  formData.accountType === "company"
                                    ? "border-[#8500db] bg-[#8500db]"
                                    : "border-gray-300 bg-white"
                                }
                            `}
                          >
                            {formData.accountType === "company" && (
                              <Check className="h-3 w-3 text-white sm:h-3.5 sm:w-3.5" />
                            )}
                          </span>
                        </span>
                      </span>
                    </span>
                    <span className="mt-4 block border-t pt-3 border-gray-100">
                      <span
                        className={`mb-3 flex items-start gap-2.5 rounded-xl px-3 py-2.5 text-[13px] leading-snug font-medium
                        ${
                          formData.accountType === "company"
                            ? "bg-[#8500db]/10 text-[#8500db]"
                            : "bg-gray-50 text-gray-700"
                        }
                        `}
                      >
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full
                                ${
                                  formData.accountType === "company"
                                    ? "transition-colors bg-[#8500db]/10 text-[#8500db]"
                                    : "bg-gray-100 text-gray-400"
                                }`}
                        >
                          <Check className="h-3 w-3" />
                        </span>
                        Includes Lead Generation, Project Management & User Role
                        Management
                      </span>
                      <ul className="grid grid-cols-1 items-start gap-x-6 gap-y-2 sm:grid-cols-2">
                        <li className="flex items-start gap-2.5 text-[13px] leading-snug text-gray-600">
                          <span
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full
                                ${
                                  formData.accountType === "company"
                                    ? "transition-colors bg-[#8500db]/10 text-[#8500db]"
                                    : "bg-gray-100 text-gray-400"
                                }`}
                          >
                            <Check className="h-3 w-3" />
                          </span>
                          You're registering an organization where a team will
                          use COVIS AI
                        </li>
                        <li className="flex items-start gap-2.5 text-[13px] leading-snug text-gray-600">
                          <span
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full
                                ${
                                  formData.accountType === "company"
                                    ? "transition-colors bg-[#8500db]/10 text-[#8500db]"
                                    : "bg-gray-100 text-gray-400"
                                }`}
                          >
                            <Check className="h-3 w-3" />
                          </span>
                          You need to manage multiple users, professionals, and
                          clients
                        </li>
                        <li className="flex items-start gap-2.5 text-[13px] leading-snug text-gray-600">
                          <span
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full
                                ${
                                  formData.accountType === "company"
                                    ? "transition-colors bg-[#8500db]/10 text-[#8500db]"
                                    : "bg-gray-100 text-gray-400"
                                }`}
                          >
                            <Check className="h-3 w-3" />
                          </span>
                          You want a branded portal on your own subdomain
                          (yourcompany.covis.ai)
                        </li>
                      </ul>
                    </span>
                  </span>
                </button>
                {/* individuals button */}
                <button
                  type="button"
                  onClick={() => {
                    setFormData((prev) => ({
                      ...prev,
                      accountType: "individual",
                    }));
                  }}
                  className={`group relative block w-full cursor-pointer overflow-hidden rounded-2xl border-2 p-4 text-left transition-all duration-300 sm:p-6
                        ${
                          formData.accountType === "individual"
                            ? "border-[#8500db] bg-[#8500db]/5 shadow-[0_0_25px_rgba(133,0,219,0.15)]"
                            : "border-gray-200 bg-white hover:-translate-y-0.5 hover:border-[#8500db]/40 hover:shadow-[0_8px_24px_rgba(133,0,219,0.08)]"
                        }
                    `}
                >
                  <span className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-[#8500db]/15 to-[#c500db]/10 blur-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-60" />
                  <span className="relative block">
                    <span className="flex items-start gap-3 sm:items-center sm:gap-4">
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 sm:h-14 sm:w-14 sm:rounded-2xl
                        ${
                          formData.accountType === "individual"
                            ? "bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_6px_16px_rgba(133,0,219,0.35)]"
                            : "bg-gray-100 text-gray-500 group-hover:bg-[#8500db]/10 group-hover:text-[#8500db]"
                        }`}
                      >
                        <CircleUser className="h-5 w-5 sm:h-7 sm:w-7" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-start justify-between gap-2 sm:items-center sm:gap-3">
                          <span className="min-w-0">
                            <span
                              className={`block text-base leading-snug font-bold transition-colors sm:text-lg ${
                                formData.accountType === "individual"
                                  ? "text-[#8500db]"
                                  : "text-gray-900"
                              }`}
                            >
                              Individual Freelancer
                            </span>
                            <span className="mt-0.5 block text-xs leading-snug font-medium text-gray-500 sm:text-sm">
                              For solo professionals
                            </span>
                          </span>
                          <span
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200 sm:mt-0 sm:h-6 sm:w-6
                                ${
                                  formData.accountType === "individual"
                                    ? "border-[#8500db] bg-[#8500db]"
                                    : "border-gray-300 bg-white"
                                }
                            `}
                          >
                            {formData.accountType === "individual" && (
                              <Check className="h-3 w-3 text-white sm:h-3.5 sm:w-3.5" />
                            )}
                          </span>
                        </span>
                      </span>
                    </span>
                    <span className="mt-4 block border-t pt-3 border-gray-100">
                      <span
                        className={`mb-3 flex items-start gap-2.5 rounded-xl px-3 py-2.5 text-[13px] leading-snug font-medium
                            ${
                              formData.accountType === "individual"
                                ? "bg-[#8500db]/10 text-[#8500db]"
                                : "bg-gray-50 text-gray-700"
                            }
                            `}
                      >
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full
                                ${
                                  formData.accountType === "individual"
                                    ? "transition-colors bg-[#8500db]/10 text-[#8500db]"
                                    : "bg-gray-100 text-gray-400"
                                }`}
                        >
                          <Check className="h-3 w-3" />
                        </span>
                        Includes Lead Generation only — sized for solo
                        professionals
                      </span>
                      <ul className="grid grid-cols-1 items-start gap-x-6 gap-y-2 sm:grid-cols-2">
                        <li className="flex items-start gap-2.5 text-[13px] leading-snug text-gray-600">
                          <span
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full
                                ${
                                  formData.accountType === "individual"
                                    ? "transition-colors bg-[#8500db]/10 text-[#8500db]"
                                    : "bg-gray-100 text-gray-400"
                                }`}
                          >
                            <Check className="h-3 w-3" />
                          </span>
                          You work independently and manage your own clients
                        </li>
                        <li className="flex items-start gap-2.5 text-[13px] leading-snug text-gray-600">
                          <span
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full
                                ${
                                  formData.accountType === "individual"
                                    ? "transition-colors bg-[#8500db]/10 text-[#8500db]"
                                    : "bg-gray-100 text-gray-400"
                                }`}
                          >
                            <Check className="h-3 w-3" />
                          </span>
                          You want a quick, single-user setup with no team
                          management
                        </li>
                        <li className="flex items-start gap-2.5 text-[13px] leading-snug text-gray-600">
                          <span
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full
                                ${
                                  formData.accountType === "individual"
                                    ? "transition-colors bg-[#8500db]/10 text-[#8500db]"
                                    : "bg-gray-100 text-gray-400"
                                }`}
                          >
                            <Check className="h-3 w-3" />
                          </span>
                          You get a personal portal at
                          app.covis.ai/your-username
                        </li>
                      </ul>
                    </span>
                  </span>
                </button>
              </div>
              <p className="text-xs leading-relaxed text-gray-500">
                Not sure which to pick? Choose{" "}
                <span className="font-semibold text-gray-700">Company</span> if
                more than one person will use COVIS AI otherwise{" "}
                <span className="font-semibold text-gray-700">
                  Individual Freelancer
                </span>{" "}
                is the right fit. You can come back to this step anytime before
                completing registration.
              </p>
            </div>
          </div>
          <div className="mt-auto flex w-full flex-shrink-0 items-center">
            <div className="ml-auto flex items-center">
              <div className="group/button relative">
                {/* continue button */}
                <button
                  type="button"
                  disabled={!formData.accountType}
                  onClick={() => {
                    if (!formData.accountType) return;

                    nextStep();
                  }}
                  className={`inline-flex items-center justify-center gap-2 rounded-md h-9 sm:px-4 py-2 px-3 transition-all duration-300
                        ${
                          formData.accountType
                            ? "bg-brand-gradient text-white hover:scale-105 shadow-lg"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                >
                  Continue
                  <ChevronRight className="mt-1 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}