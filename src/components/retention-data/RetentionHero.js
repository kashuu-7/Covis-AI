import PageHero from "../common/HeroPage";
import { Clock } from "lucide-react";

export default function PrivacyHero() {
  return (
    <PageHero
      icon={Clock}
      title="Data Retention"
      highlight="Policy"
      description="This policy defines exactly how long COVIS AI retains each category of data, who can delete it, and how automated deletion schedules enforce these standards."
      badges={[
        {
          text: "Version 1.0",
          className:
            "rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm border-white/10 bg-white/5 text-gray-300",
        },
        {
          text: "Effective March 30, 2026",
          className:
            "rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm border-white/10 bg-white/5 text-gray-300",
        },
        {
          text: "GDPR Article 5(e)",
          className:
            "rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm border-[#8500db]/35 bg-[#8500db]/10 text-purple-200",
        },
      ]}
    />
  );
}