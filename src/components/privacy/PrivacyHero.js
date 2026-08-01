import PageHero from "../common/HeroPage";
import { Shield } from "lucide-react";

export default function PrivacyHero() {
  return (
    <PageHero
      icon={Shield}
      title="Privacy"
      highlight="Policy"
      description="We believe your privacy is a fundamental right. This policy explains exactly what data COVIS AI collects, why we collect it, and how you remain in control at all times."
      badges={[
        {
          text: "Version 1.1",
          className:
            "rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm border-white/10 bg-white/5 text-gray-300",
        },
        {
          text: "Effective June 17, 2026",
          className:
            "rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm border-white/10 bg-white/5 text-gray-300",
        },
        {
          text: "GDPR Compliant",
          className:
            "rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm border-[#8500db]/35 bg-[#8500db]/10 text-purple-200",
        },
        {
          text: "PCI-DSS Compliant",
          className:
            "rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
        },
      ]}
    />
  );
}