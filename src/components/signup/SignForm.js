"use client";

import React, { useState } from "react";
import { CircleQuestionMark } from "lucide-react";
import Stepper from "./Stepper";
import StepOne from "./StepOne";
import Link from "next/link";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import IndividualStep from "./IndividualStep";

export default function SignForm() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    accountType: "",

    // Company
    companyName: "",
    companyEmail: "",
    companyPhone: "",
    subDomain: "",

    representativeName: "",
    representativeEmail: "",
    representativePhone: "",

    // Individual
    fullName: "",
    email: "",
    phone: "",
    username: "",

    subscription: "",
    billing: "monthly",
  });

  return (
    <div className="scrollbar-none relative flex h-screen min-h-0 w-full shrink-0 justify-center overflow-x-hidden overflow-y-auto bg-gradient-to-br from-white via-gray-50 to-purple-50 p-6 transition-[grid-column] duration-500 ease-in-out lg:min-w-0 lg:overflow-x-hidden">
      <div className="my-auto w-full shrink-0 max-w-lg">
        <div>
          <button className="absolute top-4 right-4 z-10 inline-flex cursor-pointer items-center gap-1.5 border-none bg-transparent text-sm font-semibold text-purple-600 transition-colors outline-none hover:text-purple-800">
            <span className="underline underline-offset-4">Need Help</span>
            <CircleQuestionMark className="w-4 h-4 shrink-0" />
          </button>
          <div className="my-4 flex w-full max-w-2xl flex-col py-4">
            <div className="mb-6 flex-shrink-0 text-center">
              <h1 className="mb-2 text-3xl font-bold text-[#c500db]">
                Sign up
              </h1>
              <p className="text-sm text-gray-600">
                Choose your account type, create your account, and complete your
                COVIS AI registration
              </p>
            </div>
            <Stepper
            step={step}
            accountType={formData.accountType}
          />
            {step === 1 && (
              <StepOne
                formData={formData}
                setFormData={setFormData}
                nextStep={() => setStep(2)}
              />
            )}
            {step === 2 &&
              (formData.accountType === "company" ? (
                <StepTwo
                  formData={formData}
                  setFormData={setFormData}
                  nextStep={() => setStep(3)}
                  prevStep={() => setStep(1)}
                />
              ) : (
                <IndividualStep
                  formData={formData}
                  setFormData={setFormData}
                  nextStep={() => setStep(3)}
                  prevStep={() => setStep(1)}
                />
              ))}
            {step === 3 && (
              <StepThree
                prevStep={() => setStep(2)}
                formData={formData}
                setFormData={setFormData}
              />
            )}
            <div className="mt-6 flex-shrink-0">
              <div className="space-y-2 text-center">
                <p className="text-xs text-gray-500">
                  By submitting this form, you agree to our{" "}
                  <Link
                    href="/service"
                    className="text-[#8500db] hover:underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-[#8500db] hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </p>
                <p className="text-xs leading-relaxed text-gray-400 text-center">
                  This site is protected by reCAPTCHA and the Google{" "}
                  <Link
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-gray-600"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="https://policies.google.com/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-gray-600"
                  >
                    Terms of Service
                  </Link>{" "}
                  apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
