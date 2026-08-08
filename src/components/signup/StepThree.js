"use client";

import React from "react";
import {
  CreditCard,
  ChevronRight,
  Check,
  BadgeCheck,
  Sparkles,
  Crown,
} from "lucide-react";

export default function StepThree({ prevStep, formData, setFormData }) {
  const billing = formData.billing;
const selectedPlan = formData.subscription;

  const handleSubmit = async () => {
    if (!selectedPlan) return;

    const finalData = {
      ...formData,
      subscription: {
        plan: formData.subscription,
        billing: formData.billing,
      },
    };

    console.log("FINAL DATA");
    console.log(finalData);

    try {
      // yahan API call hogi

      /*
    const res = await fetch("YOUR_API_URL", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(finalData)
    });

    const data = await res.json();
    console.log(data);
    */

      alert("Registration Completed 🎉");
    } catch (err) {
      console.log(err);
    }
  };

  const plans = [
    {
      id: "starter",
      icon: <BadgeCheck className="h-7 w-7" />,
      title: "Starter",
      monthly: 19,
      yearly: 15,
      features: [
        "5 Team Members",
        "500 Leads",
        "AI Assistant",
        "Email Support",
      ],
    },
    {
      id: "professional",
      icon: <Sparkles className="h-7 w-7" />,
      title: "Professional",
      monthly: 49,
      yearly: 39,
      popular: true,
      features: [
        "Unlimited Users",
        "Unlimited Leads",
        "CRM",
        "Automation",
        "Priority Support",
      ],
    },
    {
      id: "enterprise",
      icon: <Crown className="h-7 w-7" />,
      title: "Enterprise",
      monthly: null,
      yearly: null,
      enterprise: true,
      features: [
        "Everything Included",
        "Dedicated Manager",
        "Custom Integrations",
        "24/7 Premium Support",
      ],
    },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-[0_0_40px_rgba(133,0,219,0.1)]">
      {/* Heading */}

      <div className="mb-8">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <CreditCard className="text-[#8500db]" />
          Subscription Plan
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Choose the perfect subscription for your business.
        </p>
      </div>

      {/* Billing Toggle */}

      <div className="mb-10 flex justify-center">
        <div className="flex rounded-xl bg-gray-100 p-1">
          <button
                            onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    billing: "monthly",
                  }))
                }
            className={`rounded-lg px-6 py-2 text-sm font-semibold transition
            ${
              billing === "monthly"
                ? "bg-white shadow text-[#8500db]"
                : "text-gray-500"
            }`}
          >
            Monthly
          </button>

          <button
            onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  billing: "yearly",
                }))
              }
            className={`relative rounded-lg px-6 py-2 text-sm font-semibold transition
            ${
              billing === "yearly"
                ? "bg-white shadow text-[#8500db]"
                : "text-gray-500"
            }`}
          >
            Yearly
            {billing !== "yearly" && (
              <span className="absolute -top-2 -right-2 rounded-full bg-green-500 px-2 py-0.5 text-[10px] text-white">
                Save 20%
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Pricing Cards */}

      <div className="grid gap-6 lg:grid-cols-1">
        {plans.map((plan) => (
          <div
            key={plan.id}
            onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  subscription: plan.id,
                }))
              }
            className={`relative cursor-pointer rounded-2xl border-2 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
      ${
        selectedPlan === plan.id
          ? "border-[#8500db] bg-[#8500db]/5 shadow-[0_0_25px_rgba(133,0,219,0.18)]"
          : "border-gray-200 bg-white"
      }`}
          >
            {/* Most Popular Badge */}

            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] px-4 py-1 text-xs font-bold text-white shadow-lg">
                MOST POPULAR
              </span>
            )}

            {/* Icon */}

            <div
              className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl
        ${
          selectedPlan === plan.id
            ? "bg-gradient-to-r from-[#8500db] to-[#c500db] text-white"
            : "bg-gray-100 text-gray-500"
        }`}
            >
              {plan.icon}
            </div>

            {/* Title */}

            <h3 className="text-xl font-bold">{plan.title}</h3>

            {/* Price */}

            {!plan.enterprise ? (
              <div className="mt-4">
                <span className="text-4xl font-extrabold">
                  ${billing === "monthly" ? plan.monthly : plan.yearly}
                </span>

                <span className="ml-1 text-gray-500">
                  /month
                </span>

                {billing === "yearly" && (
                  <p className="mt-1 text-sm font-medium text-green-600">
                    Billed yearly
                  </p>
                )}
              </div>
            ) : (
              <div className="mt-4">
                <span className="text-3xl font-bold">Contact Sales</span>

                <p className="mt-2 text-sm text-gray-500">
                  Best for large organizations
                </p>
              </div>
            )}

            {/* Divider */}

            <div className="my-6 h-px bg-gray-200"></div>

            {/* Features */}

            <ul className="space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm text-gray-600"
                >
                  <div
                    className={`flex h-5 w-5 items-center justify-center rounded-full
            ${
              selectedPlan === plan.id
                ? "bg-[#8500db]/10 text-[#8500db]"
                : "bg-gray-100 text-gray-500"
            }`}
                  >
                    <Check className="h-3.5 w-3.5" />
                  </div>

                  {feature}
                </li>
              ))}
            </ul>

            {/* Button */}

            <button
              type="button"
              className={`mt-8 w-full rounded-xl py-3 font-semibold transition-all duration-300
      ${
        selectedPlan === plan.id
          ? "bg-gradient-to-r from-[#8500db] to-[#c500db] text-white shadow-lg"
          : "border border-gray-300 hover:border-[#8500db] hover:text-[#8500db]"
      }`}
            >
              {plan.enterprise
                ? "Contact Sales"
                : selectedPlan === plan.id
                  ? "Selected"
                  : "Select Plan"}
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Buttons */}

      <div className="mt-10 flex items-center">
        {/* Back */}

        <button
          type="button"
          onClick={prevStep}
          className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-5 text-sm font-medium transition hover:bg-gray-50"
        >
          Back
        </button>

        {/* Continue */}

        <button
          type="button"
          disabled={!selectedPlan}
          onClick={handleSubmit}
          className={`ml-auto inline-flex h-10 items-center gap-2 rounded-md px-6 text-sm font-semibold transition-all duration-300
            ${
              selectedPlan
                ? "bg-gradient-to-r from-[#8500db] to-[#c500db] text-white shadow-lg hover:scale-105"
                : "cursor-not-allowed bg-gray-300 text-gray-500"
            }`}
        >
          Continue
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
