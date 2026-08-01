import PageHero from "../common/HeroPage";
import { CreditCard } from "lucide-react";

export default function PrivacyHero() {
  return (
    <PageHero
      icon={CreditCard}
      title="Free Trial, Billing &"
      highlight="Refund Policy"
      description="Every COVIS AI plan starts with a free trial so you can explore the platform with zero risk. This policy explains how billing, cancellations, and refunds work once you subscribe."
      badges={[
        {
          text: "Version 3.0",
          className:
            "rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm border-white/10 bg-white/5 text-gray-300",
        },
        {
          text: "Effective July 16, 2026",
          className:
            "rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm border-white/10 bg-white/5 text-gray-300",
        },
        {
          text: "Free Trial included", 
          className:
            "rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm border-[#8500db]/35 bg-[#8500db]/10 text-purple-200",
        },
        {
          text: "Stripe Secure Payments", 
          className:
            "rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
        },
      ]}
    />
  );
}