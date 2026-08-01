import PageHero from "../common/HeroPage";
import { CreditCard } from "lucide-react";

export default function PricingHero() {
  return (
    <PageHero
      icon={CreditCard}
      title="Our"
      highlight="Pricing"
      description="Flexible, transparent pricing plans designed to grow with your business. Choose the tier that best fits your operational needs."
      badges={[
        {
          text: "Cancel Anytime",
          className:
            "rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm border-white/10 bg-white/5 text-gray-300",
        },
        {
          text: "Enterprise Ready",
          className:
            "rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm border-[#8500db]/35 bg-[#8500db]/10 text-purple-200",
        },
        {
          text: "Secure Payment",
          className:
            "rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
        },
      ]}
    />
  );
}