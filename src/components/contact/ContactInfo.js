import { Sparkles, Mail, MessageSquare } from 'lucide-react'
import React from 'react'

export default function ContactInfo() {
  return (
    <div className="relative p-8 md:p-12 bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" 
        style={{
            backgroundImage: "linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
        }}></div>
      </div>
      <div className="absolute top-10 right-10 w-2 h-2 bg-fuchsia-400 rounded-full animate-ping"></div>
      <div className="absolute top-20 right-20 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-700"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-fuchsia-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="relative z-10">
        <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 mb-4">
            <Sparkles className="w-4 h-4 text-purple-300 animate-pulse" />
            <span className="text-xs font-semibold text-purple-200 tracking-wider">
                AI-POWERED SUPPORT
            </span>
            </div>
            <h3 className="text-3xl font-black mb-3 bg-linear-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Get in Touch
            </h3>
            <div className="h-1 w-20 bg-linear-to-r from-purple-400 to-fuchsia-400 rounded-full mb-4"></div>
            <p className="text-gray-300 leading-relaxed">
                Connect with our AI-enhanced team. We're here to help you transform your business operations with intelligent automation.
            </p>
        </div>
        <div className="space-y-4 mb-8">
            <div className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-purple-500/30 hover:border-purple-400/50 hover:bg-white/10 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-purple-400 to-transparent group-hover:animate-scan"></div>
            <div className="flex items-start gap-4">
                <div className="relative w-12 h-12 rounded-lg bg-linear-to-br from-purple-500/20 to-fuchsia-500/20 border border-purple-400/30 flex items-center justify-center shrink-0">
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-purple-400 rounded-tl"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-fuchsia-400 rounded-br"></div>
                <Mail className="w-5 h-5 text-purple-300" />
                </div>
                <div>
                    <div className="font-bold mb-1 text-white">
                        Email Support
                    </div>
                    <div className="text-purple-200 text-sm font-mono">
                        info@covis.ai
                    </div>
                    <div className="text-gray-400 text-xs mt-1">
                        Response within 24 hours
                    </div>
                </div>
            </div>
            </div>
            <div className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-purple-500/30 hover:border-purple-400/50 hover:bg-white/10 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-fuchsia-400 to-transparent group-hover:animate-scan"></div>
            <div className="flex items-start gap-4">
                <div className="relative w-12 h-12 rounded-lg bg-linear-to-br from-purple-500/20 to-fuchsia-500/20 border border-purple-400/30 flex items-center justify-center shrink-0">
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-purple-400 rounded-tl"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-fuchsia-400 rounded-br"></div>
                <MessageSquare className="w-5 h-5 text-fuchsia-300" />
                </div>
                <div>
                    <div className="font-bold mb-1 text-white flex items-center gap-2">
                        AI Live Chat
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-[10px] font-semibold">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                            ONLINE
                        </span>
                    </div>
                    <div className="text-purple-200 text-sm">
                        Instant AI-powered assistance
                    </div>
                    <div className="text-gray-400 text-xs mt-1">
                        Available 24/7
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="relative p-6 bg-linear-to-br from-purple-500/10 via-fuchsia-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl border border-purple-400/30 overflow-hidden">
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-purple-400/50"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-purple-400/50"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-fuchsia-400/50"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-fuchsia-400/50"></div>
        <div className="relative">
            <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-purple-300" />
                <h4 className="text-lg font-black text-white">
                    AI Updates & Insights
                </h4>
            </div>
            <div className="text-purple-200 text-sm">
                Get the latest AI-powered features and productivity tips. Stay tuned for updates!
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}
