import PageHero from "../common/HeroPage";
import { FileText } from "lucide-react";

export default function ServiceHero() {
  return (
    <PageHero
      icon={FileText}
      title="Terms of"
      highlight="Service"
      description="These Terms govern your access to and use of the COVIS AI platform. By using COVIS AI, you agree to these Terms. Please read them carefully."
      badges={[
        {
          text: "Version 1.2",
          className:
            "rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm border-white/10 bg-white/5 text-gray-300",
        },
        {
          text: "Effective June 26, 2026",
          className:
            "rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm border-white/10 bg-white/5 text-gray-300",
        },
        {
          text: "Blinding Agreement",
          className:
            "rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm border-amber-500/30 bg-amber-500/10 text-amber-300",
        },
      ]}
    />
  );
}