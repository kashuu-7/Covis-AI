import PageHero from "../common/HeroPage";
import { Cookie } from "lucide-react";

export default function PrivacyHero() {
  return (
    <PageHero
      icon={Cookie}
      title="Cookie"
      highlight="Policy"
      description="This policy explains what cookies and similar technologies COVIS AI uses across our website and tenant portals at *.covis.ai, why we use them, and how you stay in control."
      badges={[
        {
          text: "Version 1.0",
          className:
            "rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm border-white/10 bg-white/5 text-gray-300",
        },
        {
          text: "Effective June 15, 2026",
          className:
            "rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm border-white/10 bg-white/5 text-gray-300",
        },
        {
          text: "GDPR / ePrivacy",
          className:
            "rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm border-[#8500db]/35 bg-[#8500db]/10 text-purple-200",
        },
      ]}
    />
  );
}