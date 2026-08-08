import React from "react";
import {
  Building2,
  Zap,
  Info,
  CircleUserRound,
  ChevronRight,
} from "lucide-react";
import PhoneInput from "react-phone-input-2";

export default function StepTwo({
  nextStep,
  prevStep,
  formData,
  setFormData,
}) {
  const isFormValid = Boolean(
  formData.companyName.trim() &&
  formData.companyEmail.trim() &&
  formData.companyPhone &&
  formData.subDomain.trim() &&
  formData.representativeName.trim() &&
  formData.representativeEmail.trim() &&
  formData.representativePhone
);

  return (
    <div className="stepper-form-shell flex-shrink-0 rounded-2xl border border-gray-200/60 bg-white p-8 shadow-[0_0_40px_rgba(133,0,219,0.1)]">
      <form
          className="flex h-full flex-col"
          onSubmit={(e) => e.preventDefault()}
        >
        <div className="flex flex-1 flex-col space-y-5">
          <div className="mb-6 flex-shrink-0">
            <h2 className="mb-1 flex items-center gap-2 text-xl font-bold text-gray-900">
              <Building2 className="h-5 w-5 text-[#8500db]" />
              Company Info
            </h2>
            <p className="text-sm text-gray-600">
              Tell us about your organization
            </p>
          </div>
          <div className="flex-1">
            <div className="space-y-4">
              <div>
                <div className="space-y-4 pt-2">
                  <div className="w-full space-y-2">
                    <label
                      htmlFor="company_name"
                      className="flex items-center gap-1 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                    >
                      Company Name
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <input
                        value={formData.companyName}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            companyName: e.target.value,
                          }))
                        }
                        placeholder="Enter your company name"
                        maxLength="150"
                        id="company_name"
                        name="company_name"
                        className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-[#c500db] focus-visible:ring-[3px] focus-visible:ring-[#c500db]/30 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pr-16"
                      />
                      <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-xs text-gray-400">
                        {formData.companyName?.length || 0}/150
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="w-full space-y-2">
                      <label
                        htmlFor="company_email"
                        className="flex items-center gap-1 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                      >
                        Company Email
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <input
                          value={formData.companyEmail}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              companyEmail: e.target.value,
                            }))
                          }
                          placeholder="company@example.com"
                          type="email"
                          id="company_email"
                          name="company_email"
                          className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-[#c500db] focus-visible:ring-[3px] focus-visible:ring-[#c500db]/30 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pr-10"
                        />
                        <div className="absolute top-1/2 right-2 flex -translate-y-1/2 items-center">
                          <button type="button" className="group relative flex items-center justify-center gap-1.5 rounded-md bg-purple-600 px-2 py-1 text-[10px] font-black text-white transition-all duration-300 hover:bg-purple-700 disabled:bg-gray-400">
                            <Zap className="h-3 w-3 transition-transform group-hover:scale-110 text-yellow-300" />
                            <span>Get OTP</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full space-y-2">
                    <label
                      className="flex items-center gap-1 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                      htmlFor="companyPhone"
                    >
                      Company Phone<span className="text-red-500">*</span>
                    </label>
                    <div className="flex w-full PhoneInput">
                      <PhoneInput
                        value={formData.companyPhone}
                        onChange={(value) =>
                          setFormData((prev) => ({
                            ...prev,
                            companyPhone: value,
                          }))
                        }
                        country="pk"
                        enableSearch
                        containerClass="w-full"
                        inputClass="!w-full !h-9"
                        buttonClass="!border-input"
                        dropdownClass="!rounded-xl"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                  <div className="w-full space-y-2">
                    <div className="flex items-center gap-2">
                      <label
                        htmlFor="sub_domain"
                        className="flex items-center gap-1 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                      >
                        Preferred Sub Domain
                        <span className="text-red-500">*</span>
                      </label>
                      <button type="button" className="inline-flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors ">
                        <Info className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="relative flex min-w-0 items-center overflow-hidden">
                      <div className="relative min-w-0 flex-1">
                        <input
                          value={formData.subDomain}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              subDomain: e.target.value,
                            }))
                          }
                          id="subDomain"
                          placeholder="yourcompany"
                          maxLength="30"
                          data-slot="input"
                          className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 h-9 w-full min-w-0 rounded-l-md rounded-r-none border border-r-0 bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-input focus-visible:border-[#c500db] focus-visible:ring-[3px] focus-visible:ring-[#c500db]/30"
                          type="text"
                          name="subDomain"
                        />
                        <span className="pointer-events-none text-xs tabular-nums text-gray-400 absolute top-1/2 -translate-y-1/2 right-3">
                          {formData.subDomain?.length || 0}/30
                        </span>
                      </div>
                      <div className="flex h-9 shrink-0 items-center rounded-r-md border border-l-0 bg-transparent px-4 text-base whitespace-nowrap border-input">
                        <span className="text-[#666666] text-base">
                          .covis.ai
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 space-y-4 border-t border-gray-200 pt-6">
                    <div className="mb-4">
                      <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900">
                        <CircleUserRound className="h-5 w-5 text-[#8500db]" />
                        Representative
                      </h3>
                      <p className="text-sm text-gray-500">
                        Primary contact person for your organization
                      </p>
                    </div>
                    <div className="w-full space-y-2">
                      <label
                        htmlFor="full_name"
                        className="flex items-center gap-1 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                      >
                        Full Name
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <input
                          value={formData.representativeName}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              representativeName: e.target.value,
                            }))
                          }
                          placeholder="Enter full name"
                          maxLength="150"
                          id="full_name"
                          name="full_name"
                          className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-[#c500db] focus-visible:ring-[3px] focus-visible:ring-[#c500db]/30 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pr-16"
                        />
                        <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-xs text-gray-400">
                          {formData.representativeName?.length || 0}/150
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50/50 p-4">
                      <input
                        id="useCompanyEmailPhone"
                        type="checkbox"
                        name="useCompanyEmailPhone"
                        className="h-5 w-5 rounded border-gray-300 accent-[#8500db] focus:ring-[#8500db] disabled:cursor-not-allowed disabled:opacity-50"
                      />
                      <label
                        htmlFor="useCompanyEmailPhone"
                        className="cursor-pointer text-sm font-semibold select-none text-gray-400"
                      >
                        Use same email and phone number as company
                      </label>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-4">
                        <div className="w-full space-y-2">
                          <label
                            htmlFor="email_address"
                            className="flex items-center gap-1 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                          >
                            Email Address
                            <span className="text-red-500">*</span>
                          </label>
                          <div className="relative flex items-center">
                            <input
                              value={formData.representativeEmail}
                              onChange={(e) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  representativeEmail: e.target.value,
                                }))
                              }
                              placeholder="admin@example.com"
                              type="email"
                              id="email_address"
                              name="email_address"
                              className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-[#c500db] focus-visible:ring-[3px] focus-visible:ring-[#c500db]/30 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pr-10"
                            />
                            <div className="absolute top-1/2 right-2 flex -translate-y-1/2 items-center">
                              <button type="button" className="group relative flex items-center justify-center gap-1.5 rounded-md bg-purple-600 px-2 py-1 text-[10px] font-black text-white transition-all duration-300 hover:bg-purple-700 disabled:bg-gray-400">
                                <Zap className="h-3 w-3 transition-transform group-hover:scale-110 text-yellow-300" />
                                <span>Get OTP</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full space-y-2">
                        <label
                          className="flex items-center gap-1 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                          htmlFor="phoneNumber"
                        >
                          Phone Number<span className="text-red-500">*</span>
                        </label>
                        <div className="flex w-full PhoneInput">
                          <PhoneInput
                            country="pk"
                            enableSearch
                            value={formData.representativePhone}
                            onChange={(value) =>
                              setFormData((prev) => ({
                                ...prev,
                                representativePhone: value,
                              }))
                            }
                            containerClass="w-full"
                            inputClass="!w-full !h-9"
                            buttonClass="!border-input"
                            dropdownClass="!rounded-xl"
                            placeholder="Enter phone number"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-auto flex w-full flex-shrink-0 items-center">
            <div className="group/button relative">
              <button
                type="button"
                onClick={prevStep}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3"
              >
                Back
              </button>
            </div>
            <div className="ml-auto flex items-center">
              <div className="group/button relative">
                {/* continue button */}
                <button
                  type="button"
                  disabled={!isFormValid}
                  onClick={() => {
                      if (isFormValid) {
                        nextStep();
                      }
                    }}
                  className={`inline-flex items-center justify-center gap-2 rounded-md h-9 px-4 py-2 transition-all duration-300
                        ${
                          isFormValid
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
