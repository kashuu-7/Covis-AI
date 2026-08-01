import React from "react";
import { Sparkles } from "lucide-react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactUs() {
  return (
    <section className="relative bg-white pb-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-[10%] h-[500px] w-[500px] animate-pulse rounded-full bg-purple-300/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-[10%] h-[500px] w-[500px] animate-pulse rounded-full bg-fuchsia-300/20 blur-3xl [animation-delay:1.5s]"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        {/* Top heading */}
        <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
                <Sparkles className="h-4 w-4" />
                CONTACT US
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                Let's Start a&nbsp;
                <span className="relative inline-block">
                    <span className="bg-linear-to-r from-purple-700 via-fuchsia-600 to-purple-700 bg-clip-text text-transparent">
                        Conversation
                    </span>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-purple-700 via-fuchsia-600 to-purple-700 rounded-full opacity-60"></div>
                </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ready to transform your business? Get in touch with our team and discover how Covis can revolutionize your workflow.
            </p>
        </div>
        {/* center */}
        <div className="relative group">
            <div className="absolute -inset-px bg-linear-to-r from-purple-600 via-fuchsia-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200 shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
                <ContactForm/>
                <ContactInfo/>
            </div>
            </div>
        </div>
      </div>
      
    </section>
  )
}
