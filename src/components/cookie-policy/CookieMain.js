import React from "react";
import Sidebar from "@/components/Sidebar";
import { cookieSidebarLinks } from "@/data/cookieSidebar";
import { Info, Cookie, Shield, Database, Globe, Settings, HardDrive, Bell, Mail } from "lucide-react";
import Link from "next/link";

export default function CookieMain() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex items-start gap-8">
        {/* sidebar */}
        <Sidebar title="GenericTable of Contents" links={cookieSidebarLinks} />
        <main className="min-w-0 flex-1 space-y-6">
          {/* section 1 */}
          <section className="scroll-mt-8" id="what-are-cookies">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Info className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  What Are Cookies?
                </h2>
              </div>
              <div className="p-6 space-y-5 text-gray-700 text-sm leading-relaxed">
                <p>
                  Cookies are small text files that a website stores on your device (computer, tablet, or phone) when you visit. They are widely used to make websites work, to keep you signed in, and to remember your preferences. Cookies set by COVIS AI are called <strong>first-party cookies</strong>; cookies set by other services we rely on are called <strong>third-party cookies</strong>.
                </p>
                <p>
                  Alongside cookies we also use <strong>similar technologies</strong> such as your browser's <code className="rounded bg-gray-100 px-1 py-0.5 text-xs">localStorage</code>. These are described in Section 7. 
                </p>
              </div>
            </div>
          </section>
          {/* section 2 */}
          <section className="scroll-mt-8" id="how-we-use">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Cookie className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  How We Use Cookies
                </h2>
              </div>
              <div className="p-6 space-y-5 text-gray-700 text-sm leading-relaxed">
                <p>
                  We use cookies and similar technologies to:
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0" />
                    <span>
                      Keep you signed in and protect access to the admin modules you are permitted to use
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0" />
                    <span>
                      Secure the platform against fraud and unauthorized access
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0" />
                    <span>
                      Remember preferences such as your theme and language
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0" />
                    <span>
                      Operate the public AI chat experience on tenant subdomains
                    </span>
                  </li>
                </ul>
                <div className="relative rounded-xl border py-4 pr-4 pl-5 bg-emerald-50 border-emerald-200 text-emerald-800 text-sm leading-relaxed">
                  <div className="absolute inset-y-0 left-0 w-1 rounded-full bg-current opacity-40" />
                  We do <strong>not</strong> use advertising, retargeting, or social media tracking cookies, and we do not sell information collected through cookies.
                </div>
              </div>
            </div>
          </section>
          {/* section 3 */}
          <section className="scroll-mt-8" id="types">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Shield className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Types of Cookies We Use
                </h2>
              </div>
              <div className="p-6 space-y-5 text-gray-700 text-sm leading-relaxed">
                <h3 className="text-sm font-semibold text-gray-900">
                  3.1 Strictly necessary (always on)
                </h3>
                <p>
                  Required for the platform to function. They enable core features such as signing in and enforcing which admin modules you can access. These cannot be switched off through our systems.
                </p>
                <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#8500db]/8 to-purple-50/50">
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Cookie
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Purpose
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Duration
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Provider
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          logged_in
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Keeps you signed in and protects access to admin routes
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Session / up to 24 hours
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          COVIS AI
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          user_modules
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Stores which admin modules you are permitted to access for route protection
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Same as session
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          COVIS AI
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          admin_session
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Encrypted JWT session token used to authenticate your requests
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          8–24 hours
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          COVIS AI
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-gray-900">
                  3.2 Functional / preference
                </h3>
                <p>
                  Remember choices you make to give you a more personalized experience, such as your theme and language.
                </p>
                <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#8500db]/8 to-purple-50/50">
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Cookie
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Purpose
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Duration
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Provider
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          portal_theme
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Remembers your light or dark theme preference
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          30 days
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          COVIS AI
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          portal_locale
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Remembers your language / locale preference
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          30 days
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          COVIS AI
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          admin_session
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Encrypted JWT session token used to authenticate your requests
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          8–24 hours
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          COVIS AI
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-gray-900">
                  3.3 Analytics
                </h3>
                <div className="relative rounded-xl border py-4 pr-4 pl-5 bg-[#8500db]/5 border-[#8500db]/20 text-[#8500db] text-sm leading-relaxed">
                <div className="absolute inset-y-0 left-0 w-1 rounded-full bg-current opacity-40"></div>
                We do <strong>not</strong> currently set analytics cookies. Where we measure aggregated, anonymized usage, it is done on our servers without storing analytics cookies on your device.
                </div>
                <h3 className="mt-4 text-sm font-semibold text-gray-900">
                  3.4 Marketing
                </h3>
                <div className="relative rounded-xl border py-4 pr-4 pl-5 bg-[#8500db]/5 border-[#8500db]/20 text-[#8500db] text-sm leading-relaxed">
                <div className="absolute inset-y-0 left-0 w-1 rounded-full bg-current opacity-40" />
                We do <strong>not</strong> use marketing, advertising, or retargeting cookies.
                </div>
              </div>
            </div>
          </section>
          {/* section 4 */}
          <section className="scroll-mt-8" id="cookie-details">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Database className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Cookie Details
                </h2>
              </div>
              <div className="p-6 space-y-5 text-gray-700 text-sm leading-relaxed">
                <p>
                  The table below lists the cookies COVIS AI may set, what each is for, and how long it lasts.
                </p>
                <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#8500db]/8 to-purple-50/50">
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Cookie name
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Purpose
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Category
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Duration
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Provider
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          logged_in
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Keeps you signed in and protects admin routes
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Strictly necessary
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Session / up to 24 hours
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          COVIS AI
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          user_modules
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Permitted admin module routes for route protection
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Strictly necessary
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Same as session
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          COVIS AI
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          admin_session
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Encrypted JWT session token
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Strictly necessary
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          8–24 hours
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          COVIS AI
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          portal_theme
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Light or dark theme preference
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Functional
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          30 days
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          COVIS AI
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          portal_locale
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Language / locale preference
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Functional
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          30 days
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          COVIS AI
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          {/* section 5 */}
          <section className="scroll-mt-8" id="third-party">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Globe className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Third-Party Cookies
                </h2>
              </div>
              <div className="p-6 space-y-5 text-gray-700 text-sm leading-relaxed">
                <p>
                  Some features rely on trusted third-party services that may set their own cookies. These providers act under contractual data protection agreements. The cookies below apply only where the relevant feature is in use.
                </p>
                <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#8500db]/8 to-purple-50/50">
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Provider
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Cookies
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Purpose
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Sentry
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          sentry-* (if set)
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Error monitoring and crash diagnostics
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Payment provider
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Checkout session cookies
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Secure billing and checkout
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          status.covis.ai
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Third-party cookies if the status page is embedded
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Service status and uptime information
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          {/* section 6 */}
          <section className="scroll-mt-8" id="control">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Settings className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  How to Control Cookies
                </h2>
              </div>
              <div className="p-6 space-y-5 text-gray-700 text-sm leading-relaxed">
                <ul className="space-y-2 mt-2">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Adjust your browser settings to block, delete, or be notified about cookies — most browsers let you manage cookies under Settings → Privacy.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Use the cookie preference center where available to accept or reject non-essential cookies.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Use private / incognito browsing to limit how long cookies persist on your device.
                    </span>
                  </li>
                </ul>
                <div className="relative rounded-xl border py-4 pr-4 pl-5 bg-amber-50 border-amber-200 text-amber-800 text-sm leading-relaxed">
                  <div className="absolute inset-y-0 left-0 w-1 rounded-full bg-current opacity-40" />
                  Blocking <strong>sticktly necessary</strong> cookies may prevent you from logging in or using admin features. Functional cookies can be cleared at any time without breaking sign-in.
                </div>
              </div>
            </div>
          </section>
          {/* section 7 */}
          <section className="scroll-mt-8" id="similar-tech">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <HardDrive className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Similar Technologies
                </h2>
              </div>
              <div className="p-6 space-y-5 text-gray-700 text-sm leading-relaxed">
                <p>In addition to cookies, we store some information in your browser's <code className="rounded bg-gray-100 px-1 py-0.5 text-xs">localStorage</code>. Unlike cookies, this data is not automatically sent to our servers; it stays in your browser and helps the app load and behave correctly.</p>
                <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#8500db]/8 to-purple-50/50">
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Key
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Purpose
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Type
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          accessToken
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          JWT used to authenticate API calls
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Strictly necessary
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          tokenExpiresAt
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Timestamp marking when your session token expires
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Strictly necessary
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          userData
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Cached copy of your user profile for faster loading
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Strictly necessary
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          userPermissions
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Cached permissions used to render the UI you can access
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Strictly necessary
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          userSettings
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Theme, localization, and notification preferences
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Functional
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          publicAccessToken
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Token for the public AI chat experience
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Strictly necessary (public chat)
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Visitor information
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Lead-capture details entered on public chat / explore
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Functional / consent-based
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500">
                  For a full description of how we process personal data, see our <Link href="/privacy-policy" className="font-medium text-[#8500db] hover:underline">Privacy Policy</Link>.
                </p>
              </div>
            </div>
          </section>
          {/* section 8 */}
          <section className="scroll-mt-8" id="changes">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Bell className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Updates to This Policy
                </h2>
              </div>
              <div className="p-6 space-y-5 text-gray-700 text-sm leading-relaxed">
                <p>We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for legal and regulatory reasons. When we make material changes we will update the <strong>Effective Date</strong> date shown at the top of this page.</p>
              </div>
            </div>
          </section>
          {/* section 9 */}
          <section className="scroll-mt-8" id="contact">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Mail className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Contact Us
                </h2>
              </div>
              <div className="p-6 space-y-5 text-gray-700 text-sm leading-relaxed">
                <p>
                  If you have questions about our use of cookies, contact us:
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <a href="mailto:support@xevensolutions.com" className="group flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3 transition-all hover:border-[#8500db]/30 hover:bg-[#8500db]/5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#8500db]/15 to-[#c500db]/10">
                  <Mail className="h-3.5 w-3.5 text-[#8500db]" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-wider text-gray-500 uppercase">
                      General support
                    </p>
                    <p className="text-sm font-medium text-[#8500db] transition-colors group-hover:text-[#c500db]">
                      support@xevensolutions.com
                    </p>
                  </div>
                  </a>
                  <a href="mailto:info@covis.ai" className="group flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3 transition-all hover:border-[#8500db]/30 hover:bg-[#8500db]/5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#8500db]/15 to-[#c500db]/10">
                  <Mail className="h-3.5 w-3.5 text-[#8500db]" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-wider text-gray-500 uppercase">
                      Privacy requests
                    </p>
                    <p className="text-sm font-medium text-[#8500db] transition-colors group-hover:text-[#c500db]">
                      info@covis.ai
                    </p>
                  </div>
                  </a>
                  <a href="mailto:info@covis.ai" className="group flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3 transition-all hover:border-[#8500db]/30 hover:bg-[#8500db]/5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#8500db]/15 to-[#c500db]/10">
                  <Mail className="h-3.5 w-3.5 text-[#8500db]" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-wider text-gray-500 uppercase">
                      Legal inquiries
                    </p>
                    <p className="text-sm font-medium text-[#8500db] transition-colors group-hover:text-[#c500db]">
                      info@covis.ai
                    </p>
                  </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-3">
            <Link href="/privacy-policy" className="group flex flex-col gap-1 rounded-xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:border-[#8500db]/40 hover:shadow-md">
            <span className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-[#8500db]">
              Privacy Policy →
            </span>
            <span className="text-xs text-gray-500">
              How we handle your data
            </span>
            </Link>
            <Link href="/service" className="group flex flex-col gap-1 rounded-xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:border-[#8500db]/40 hover:shadow-md">
            <span className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-[#8500db]">
              Terms of Service →
            </span>
            <span className="text-xs text-gray-500">
              Usage rules and obligations
            </span>
            </Link>
            <Link href="/retention" className="group flex flex-col gap-1 rounded-xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:border-[#8500db]/40 hover:shadow-md">
            <span className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-[#8500db]">
              Data Retention Policy →
            </span>
            <span className="text-xs text-gray-500">
              How long we keep your data
            </span>
            </Link>
          </div>

        </main>
      </div>
    </div>
  );
}
