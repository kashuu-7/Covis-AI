import {
  Copy,
  Volume2,
  UserPlus,
  CreditCard,
  Workflow,
  Sparkles,
  Mic,
  Send,
} from "lucide-react";

export default function ChatView({
  isDarkMode,
  speakMessage,
  copyMessage,
  setVoiceMode,
  message,
  setMessage,
}) {

    const welcomeMessage =
  "Hey there! I'm Vio — your Covis AI guide. Ask me about sign up, pricing, or how the platform works.";

  return (
    <div className="flex min-h-0 flex-1 flex-col">
            <div className="flex min-h-0 min-w-0 flex-1 flex-col">
              <div
                className={`[&::-webkit-scrollbar-thumb]:bg-brand-primary/30 hover:[&::-webkit-scrollbar-thumb]:bg-brand-primary/50 relative flex-1 space-y-4 overflow-y-auto p-4 sm:p-5 [&::-webkit-scrollbar]:w-1.5 sm:[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent bg-transparent

            ${
              isDarkMode ? "bg-white/5 text-gray-500 " : "bg-white text-black "
            }`}
              >
                <div className="pointer-events-none absolute inset-0 opacity-5">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(133, 0, 219, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(133, 0, 219, 0.1) 1px, transparent 1px)",

                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                </div>

                <div className="relative flex justify-start animate-[fadeIn_0.3s_ease-out]">
                  <div
                    className={`relative max-w-[85%] rounded-2xl px-4 py-3 backdrop-blur-xl sm:max-w-[80%] sm:px-5 sm:py-3.5 border shadow-lg backdrop-blur-lg

                ${
                  isDarkMode
                    ? "bg-white/5 text-gray-100 border-white/10"
                    : "bg-gray-100 text-gray-800 border-gray-200"
                }`}
                  >
                    <div className="relative text-sm leading-relaxed font-medium">
                      <p className="my-1">
                        {welcomeMessage}
                      </p>
                    </div>

                    <div className="mt-1.5 flex items-end justify-between gap-2 sm:mt-2">
                      <p className="relative text-xs font-medium text-gray-500">
                        17:39
                      </p>

                      <div className="mt-1.5 flex items-center justify-end gap-1">
                        <button
                        type="button"
                          onClick={() => copyMessage(welcomeMessage)}
                          className="inline-flex items-center justify-center rounded-md p-1 transition-all duration-200 cursor-pointer text-gray-500 hover:text-white hover:bg-white/10"
                        >
                          <Copy className="h-3.5 w-3.5" />
                        </button>

                        <button
                        type="button"
                          onClick={() => speakMessage(welcomeMessage)}
                          className="inline-flex items-center justify-center rounded-md p-1 transition-all duration-200 cursor-pointer text-gray-500 hover:text-white hover:bg-white/10"
                        >
                          <Volume2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative animate-[fadeIn_0.3s_ease-out]">
                  <p className="mb-2 text-[11px] font-semibold tracking-wide uppercase text-gray-500">
                    Or pick one to get started:
                  </p>

                  <div className="grid grid-cols-1 gap-2 min-[400px]:grid-cols-2">
                    <button
                    type="button"
                      className={`group flex cursor-pointer items-start gap-2.5 rounded-2xl border-2 px-3.5 py-3 text-left backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(133,0,219,0.35)]

                      ${
                        isDarkMode
                          ? "bg-white/5 border-white/10 text-gray-300 hover:bg-brand-primary/10 hover:border-brand-primary/30 hover:text-white"
                          : "bg-gray-100 border-gray-200 text-gray-700 hover:bg-brand-primary/10 hover:border-brand-primary/30 hover:text-brand-primary"
                      }`}
                    >
                      <span className="bg-brand-primary/15 text-brand-primary group-hover:bg-brand-primary/25 mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-lg transition-colors">
                        <UserPlus className="h-4 w-4" />
                      </span>

                      <span className="min-w-0">
                        <span className="block text-xs font-bold">Sign up</span>

                        <span className="mt-0.5 block text-[11px] leading-snug text-gray-400">
                          How do I sign up for Covis AI?
                        </span>
                      </span>
                    </button>

                    <button
                      type="button"
                      className={`group flex cursor-pointer items-start gap-2.5 rounded-2xl border-2 px-3.5 py-3 text-left backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(133,0,219,0.35)]

                      ${
                        isDarkMode
                          ? "bg-white/5 border-white/10 text-gray-300 hover:bg-brand-primary/10 hover:border-brand-primary/30 hover:text-white"
                          : "bg-gray-100 border-gray-200 text-gray-700 hover:bg-brand-primary/10 hover:border-brand-primary/30 hover:text-brand-primary"
                      }`}
                    >
                      <span className="bg-brand-primary/15 text-brand-primary group-hover:bg-brand-primary/25 mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-lg transition-colors">
                        <CreditCard className="h-4 w-4" />
                      </span>

                      <span className="min-w-0">
                        <span className="block text-xs font-bold">
                          Pricing & plans
                        </span>

                        <span className="mt-0.5 block text-[11px] leading-snug text-gray-400">
                          What are the pricing plans for Covis AI?
                        </span>
                      </span>
                    </button>

                    <button
                      type="button"
                      className={`group flex cursor-pointer items-start gap-2.5 rounded-2xl border-2 px-3.5 py-3 text-left backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(133,0,219,0.35)]

                      ${
                        isDarkMode
                          ? "bg-white/5 border-white/10 text-gray-300 hover:bg-brand-primary/10 hover:border-brand-primary/30 hover:text-white"
                          : "bg-gray-100 border-gray-200 text-gray-700 hover:bg-brand-primary/10 hover:border-brand-primary/30 hover:text-brand-primary"
                      }`}
                    >
                      <span className="bg-brand-primary/15 text-brand-primary group-hover:bg-brand-primary/25 mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-lg transition-colors">
                        <Workflow className="h-4 w-4" />
                      </span>

                      <span className="min-w-0">
                        <span className="block text-xs font-bold">
                          How it works
                        </span>

                        <span className="mt-0.5 block text-[11px] leading-snug text-gray-400">
                          How does the Covis AI platform work?
                        </span>
                      </span>
                    </button>

                    <button
                      type="button"
                      className={`group flex cursor-pointer items-start gap-2.5 rounded-2xl border-2 px-3.5 py-3 text-left backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(133,0,219,0.35)]

                      ${
                        isDarkMode
                          ? "bg-white/5 border-white/10 text-gray-300 hover:bg-brand-primary/10 hover:border-brand-primary/30 hover:text-white"
                          : "bg-gray-100 border-gray-200 text-gray-700 hover:bg-brand-primary/10 hover:border-brand-primary/30 hover:text-brand-primary"
                      }`}
                    >
                      <span className="bg-brand-primary/15 text-brand-primary group-hover:bg-brand-primary/25 mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-lg transition-colors">
                        <Sparkles className="h-4 w-4" />
                      </span>

                      <span className="min-w-0">
                        <span className="block text-xs font-bold">
                          Features
                        </span>

                        <span className="mt-0.5 block text-[11px] leading-snug text-gray-400">
                          What features does Covis AI offer?
                        </span>
                      </span>
                    </button>
                  </div>
                </div>

                <div></div>
              </div>

              <div
                className={`relative shrink-0 border-t p-3 backdrop-blur-xl sm:p-4

                ${
                  isDarkMode
                    ? "bg-[#1a1a1f]/80 border-white/10"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="via-brand-primary absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent to-transparent opacity-50" />

                <form className="relative flex items-center gap-2 sm:gap-3">
                  <button
                  type="button"
                  onClick={() => setVoiceMode(true)}
                    className={`inline-flex items-center justify-center shrink-0 size-11 sm:size-12 rounded-xl border-2 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed

                  ${
                    isDarkMode
                      ? "bg-white/5 border-white/10 text-gray-300 hover:bg-brand-primary/10 hover:border-brand-primary/30 hover:text-white"
                      : "bg-gray-100 border-gray-200 text-gray-700 hover:bg-brand-primary/10 hover:border-brand-primary/30 hover:text-brand-primary"
                  }`}
                  >
                    <span className="relative inline-flex items-center justify-center">
                      <Mic className="w-5 h-5 z-10" />
                    </span>
                  </button>

                  <div className="group relative flex-1">
                    <div className="from-brand-primary/20 to-brand-secondary/20 absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 blur-md transition-opacity duration-300 group-focus-within:opacity-100" />

                    <input
                    type="text"
                      placeholder="Ask Vio..."
                      value={message}
onChange={(e) => setMessage(e.target.value)}
                      className={`focus:ring-brand-primary/50 relative w-full rounded-xl border-2 px-4 py-2.5 text-sm font-medium backdrop-blur-sm transition-all focus:ring-2 focus:outline-none sm:px-5 sm:py-3 placeholder:font-normal

                    ${
                      isDarkMode
                        ? "bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-brand-primary/50 focus:ring-brand-primary/20"
                        : "bg-gray-100 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-brand-primary/50 focus:ring-brand-primary/20"
                    }`}
                      type="text"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!message.trim()}
                    title={message.trim() ? "Send message" : "Please type a message first"}
                    className="from-brand-primary to-brand-secondary group relative inline-flex size-11 shrink-0 items-center justify-center rounded-xl border-2 border-white/20 bg-gradient-to-r via-purple-600 transition-all duration-300 hover:scale-105 hover:border-white/40 hover:shadow-[0_0_30px_rgba(133,0,219,0.6)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:shadow-none sm:size-12"
                    aria-label="Send message"
                  >
                    <Send className="relative h-5 w-5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </form>
              </div>
            </div>
          </div>
  );
}