"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import PricingCard from "./PricingCard";
import { companiesPlans, individualsPlans } from "./PricingData";

export default function PricingCards() {
  const [planType, setPlanType] = useState("companies");
  const [billing, setBilling] = useState("monthly");

  const plans = planType === "companies" ? companiesPlans : individualsPlans;

  return (
    <div className="relative z-10">
      <section className="relative pt-24 pb-24 overflow-hidden bg-gray-50">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-6 border border-purple-200">
              <Sparkles className="w-4 h-4" />
              PRICING PLANS
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Simple, Transparent&nbsp;
              <span className="relative inline-block">
                <span className="bg-linear-to-r from-purple-700 via-fuchsia-600 to-purple-700 bg-clip-text text-transparent">
                  Pricing
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-purple-700 via-fuchsia-600 to-purple-700 rounded-full opacity-60"></div>
              </span>
            </h2>
          </div>
          <div className="mb-4 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white p-2 shadow-sm">
              <button
                onClick={() => setPlanType("companies")}
                className={`cursor-pointer rounded-full px-10 py-3.5 text-lg font-bold transition-all
                ${
                  planType === "companies"
                    ? "bg-gradient-to-r from-[#8500db] to-[#c500db] text-white"
                    : "text-gray-600 hover:bg-purple-50"
                }`}
              >
                Companies
              </button>
              <button
                onClick={() => setPlanType("individuals")}
                className={`cursor-pointer rounded-full px-10 py-3.5 text-lg font-bold transition-all
                ${
                  planType === "individuals"
                    ? "bg-gradient-to-r from-[#8500db] to-[#c500db] text-white"
                    : "text-gray-600 hover:bg-purple-50"
                }`}
              >
                Individuals
              </button>
            </div>
          </div>
          <div className="mb-12 flex justify-center">
            <div className="inline-flex items-center gap-1 rounded-xl border border-purple-200 bg-white p-1 shadow-sm">
              <button
                onClick={() => setBilling("monthly")}
                className={`flex cursor-pointer items-center gap-2 rounded-lg px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                  billing === "monthly"
                    ? "bg-gradient-to-r from-[#8500db] to-[#c500db] text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-purple-50"
                }`}
              >
                Monthly
              </button>

              <button
                onClick={() => setBilling("yearly")}
                className={`flex cursor-pointer items-center gap-2 rounded-lg px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                  billing === "yearly"
                    ? "bg-gradient-to-r from-[#8500db] to-[#c500db] text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-purple-50"
                }`}
              >
                Yearly
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
                    billing === "yearly"
                      ? "bg-white/20 text-white"
                      : "bg-emerald-100 text-emerald-700"
                  }`}
                >
                  Save 20%
                </span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch max-w-6xl mx-auto">
            {plans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} billing={billing} />
            ))}
          </div>
          <div className="mx-auto mt-14 max-w-3xl text-center">
            <div className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50/70 px-5 py-4 text-left">
              <p className="text-sm font-semibold text-emerald-800">
                Free trial — $0 today
              </p>
              <p className="mt-1 text-sm text-gray-700">
                You will not pay until your free trial ends, or until you choose
                to end the trial early and start your subscription.
              </p>
              <p className="mt-1 text-sm text-gray-700">
                We only verify your card without any charge during the trial.
                Billing starts only after the trial ends or when you opt to
                begin your paid subscription.
              </p>
            </div>
            <p className="text-sm text-gray-600">
              Prices are listed in <strong>USD</strong> and exclude applicable
              taxes, which are calculated at checkout. Payments are securely
              processed by Stripe on behalf of XEVEN SOLUTIONS PVT LTD.
            </p>
            <p className="mt-3 text-sm text-gray-600">
              Every plan is backed by our&nbsp;
              <a
                href="refund-policy"
                className="font-semibold text-purple-700 hover:underline"
              >
                14-day money-back guarantee
              </a>
              . By subscribing you agree to our&nbsp;
              <a
                href="terms-of-policy"
                className="font-semibold text-purple-700 hover:underline"
              >
                Terms of Service&nbsp;
              </a>
              and&nbsp;
              <a
                href="privacy-policy"
                className="font-semibold text-purple-700 hover:underline"
              >
                Privacy Policy.
              </a>
            </p>
            <p className="mt-3 text-sm text-gray-500">
              Need a custom or Enterprise plan?&nbsp;
              <a
                href="/contact"
                className="font-semibold text-purple-700 hover:underline"
              >
                Contact us&nbsp;
              </a>
              for tailored pricing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
