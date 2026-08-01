import { Mail } from "lucide-react";
import PageHero from "../common/HeroPage";

export default function ContactHero() {
  return (
    <PageHero
      icon={Mail}
      title="Contact"
      highlight="Us"
      description="Have a question about COVIS AI, pricing, or enterprise requirements? Send us a message and our team will get back to you."
      badges={[
        {
          text: "Response within 24 hours",
          className:
            "rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm border-white/10 bg-white/5 text-gray-300",
        },
        {
          text: "AI Support",
          className:
            "rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm border-[#8500db]/35 bg-[#8500db]/10 text-purple-200",
        },
        {
          text: "Fast Response",
          className:
            "rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
        },
      ]}
    />
  );
}