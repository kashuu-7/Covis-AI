import PageHero from "../common/HeroPage";
import { Trash2 } from "lucide-react";

export default function PrivacyHero() {
  return (
    <PageHero
      icon={Trash2}
      title="Data Deletion"
      highlight="Policy"
      description="Your right to delete your data is fundamental. This policy explains exactly how account deletion, workspace deletion, and GDPR erasure requests work — step by step."
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
          text: "GDPR Article 17",
          className:
            "rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm border-[#8500db]/35 bg-[#8500db]/10 text-purple-200",
        },
      ]}
    />
  );
}