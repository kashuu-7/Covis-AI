import { Check, ShieldCheck } from "lucide-react";

export default function PricingCard({ plan, billing }) {
  const currentPrice =
    billing === "monthly" ? plan.monthlyPrice : plan.discountPrice;

  return (
    <div className="relative flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-[#8500db]/30 hover:shadow-xl">
      {/* Heading */}
      <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-500">
        {plan.description}
      </p>

      {/* Price */}
      <div className="mt-5">
        <div className="flex items-end gap-2">
          {billing === "yearly" && (
            <span className="text-2xl font-semibold text-gray-400 line-through">
              ${plan.monthlyPrice}
            </span>
          )}

          <span className="text-5xl font-extrabold tracking-tight text-gray-900">
            ${currentPrice}
          </span>

          <span className="mb-1 text-base font-semibold text-gray-500">
  /mo
</span>
        </div>

        <p className="mt-2 text-[13px] font-medium text-gray-500">
          {billing === "monthly"
            ? `or $${plan.yearlyPrice}/yr · save 20%`
            : `$${plan.discountYearlyPrice}/yr billed yearly`}
        </p>
      </div>
      {/* Trial */}
      <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 rounded-lg bg-[#8500db]/5 px-3 py-1.5 text-xs text-gray-700">
            <b className="text-gray-900">{plan.trialDays}</b>
            free trial
          </span>

          <span className="inline-flex items-center gap-1 rounded-lg bg-[#8500db]/5 px-3 py-1.5 text-xs text-gray-700">
            <b className="text-gray-900">{plan.trialTokens}</b>
            trial tokens
          </span>
        </div>

        <div className="mt-3 flex items-start gap-2">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />

          <p className="text-xs leading-relaxed text-gray-500">
            <span className="font-semibold text-gray-800">
              Free trial — $0 today.
            </span>{" "}
            We only verify your card without any charge during the trial.
          </p>
        </div>
      </div>
      {/* Button */}
      <button className="mt-5 h-11 w-full rounded-xl bg-gradient-to-r from-[#8500db] to-[#c500db] font-bold text-white transition-all duration-300 hover:opacity-90 hover:shadow-[0_0_25px_rgba(133,0,219,0.5)]">
        Get Started
      </button>
      {/* Included Modules */}
      <div className="mt-6 border-t border-gray-100 pt-5">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-[#8500db]">
          Included Modules
        </p>

        <ul className="space-y-2">
          {plan.modules.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="grid h-[18px] w-[18px] place-items-center rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] text-white">
                <Check className="h-2.5 w-2.5" />
              </span>

              <span className="text-sm font-medium text-gray-800">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Features */}
      <div className="mt-6 border-t border-gray-100 pt-5">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
          What's Included
        </p>

        <ul className="space-y-2.5">
          {plan.features.map((item, index) => (
            <li key={index} className="flex items-start gap-2.5">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#8500db]" />

              <span
                className={`text-[13.5px] leading-snug ${
                  index < 3 ? "font-semibold text-gray-900" : "text-gray-700"
                }`}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/* Limits */}
      <div className="mt-6 border-t border-gray-100 pt-5">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
          Plan Limits
        </p>

        <div className="flex flex-wrap gap-2">
          {Object.entries(plan.limits).map(([label, value]) => (
            <span
              key={label}
              className="inline-flex items-center gap-1 rounded-lg bg-[#8500db]/5 px-3 py-1.5 text-xs text-gray-700"
            >
              <b className="text-gray-900">{value}</b>
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
