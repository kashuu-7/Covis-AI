import React from "react";
import Sidebar from "@/components/Sidebar";
import { privacySidebarLinks } from "@/data/privacySidebar";
import { Shield, Database, UserCheck, Eye, Globe, Lock, TriangleAlert, Bell, Mail } from "lucide-react";
import Link from "next/link";

export default function PrivacyMain() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex items-start gap-8">
        {/* sidebar */}
        <Sidebar title="GenericTable of Contents" links={privacySidebarLinks} />
        <main className="min-w-0 flex-1 space-y-6">
          {/* section 1 */}
          <section className="scroll-mt-8" id="who-we-are">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Shield className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">Who We Are</h2>
              </div>
              <div className="p-6 space-y-5 text-gray-700 text-sm leading-relaxed">
                <p>
                  <strong>COVIS AI</strong> is a product of{" "}
                  <strong>XEVEN SOLUTIONS PVT LTD</strong> ("we", "us", "our"),
                  which operates the COVIS AI tenant portal — an AI-powered
                  multi-tenant SaaS platform designed to streamline business
                  operations through intelligent agents, proposal generation,
                  client management, and workforce collaboration tools. We are
                  the <strong>data controller</strong> responsible for your
                  personal data.
                </p>
                <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#8500db]/8 to-purple-50/50">
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Contact Type
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Email
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Privacy Requests & GDPR
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          info@covis.ai
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          General Support
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          info@covis.ai
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Security Vulnerabilities
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          info@covis.ai
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Legal Inquiries
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          info@covis.ai
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          {/* section 2 */}
          <section className="scroll-mt-8" id="scope">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <span className="text-sm font-bold">2</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900">Scope</h2>
              </div>
              <div className="p-6 space-y-5 text-gray-700 text-sm leading-relaxed">
                <p>This Privacy Policy applies to:</p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      All users of the COVIS AI platform (Super Admins, Company
                      Admins, Professionals, Clients)
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>Visitors to our web portal and landing pages</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Anyone who contacts us for support, partnership, or
                      business inquiries
                    </span>
                  </li>
                </ul>
                <div className="relative rounded-xl border py-4 pr-4 pl-5 bg-amber-50 border-amber-200 text-amber-800 text-sm leading-relaxed">
                  <div className="absolute inset-y-0 left-0 w-1 rounded-full bg-current opacity-40"></div>
                  This policy does <strong>not</strong> apply to third-party
                  services linked or integrated with our platform. Please review
                  those services' privacy policies separately.
                </div>
              </div>
            </div>
          </section>
          {/* section 3 */}
          <section className="scroll-mt-8" id="data-we-collect">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Database className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Data We Collect
                </h2>
              </div>
              <div className="p-6 space-y-5 text-gray-700 text-sm leading-relaxed">
                <h3 className="mt-1 text-sm font-semibold text-gray-900">
                  3.1 Account & Identity Data
                </h3>
                <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#8500db]/8 to-purple-50/50">
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Data
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Purpose
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Full Name
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Account identification, personalization
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Email address
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Authentication, notifications, support
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Company / organization name
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Tenant workspace identification
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Job title / role
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Access control, feature gating, personalization
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Profile photo (optional)
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          UI personalization
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Password (hashed — never plain text)
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Authentication
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Years of experience
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Professional profile enrichment
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="mt-1 text-sm font-semibold text-gray-900">
                  3.2 Billing & Payment Data
                </h3>
                <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#8500db]/8 to-purple-50/50">
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Data
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Purpose
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Subscription plan & tier
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Service delivery, feature access
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Invoice & transaction history
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Billing records, tax compliance
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Payment method (tokenized via payment provider)
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Payment processing — raw card numbers never stored
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Billing address
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Tax calculation, invoicing
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Order IDs from payment provider
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Payment confirmation and reconciliation
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="mt-1 text-sm font-semibold text-gray-900">
                  3.3 Usage & Activity Data
                </h3>
                <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#8500db]/8 to-purple-50/50">
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Data
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Purpose
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Token consumption (count, type, timestamp)
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Billing, quota management, overage tracking
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          AI agent type and configuration used
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Analytics, billing, service optimization
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Feature usage patterns
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Product improvement, UX optimization
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Login timestamps and session frequency
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Security, fraud detection
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Call log metadata (duration, timestamp, participants)
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Business records, analytics
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          LinkedIn profile interaction data
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Lead sourcing analytics, professional matching
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Support ticket activity
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Customer success, platform improvement
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="mt-1 text-sm font-semibold text-gray-900">
                  3.4 Content Data
                </h3>
                <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#8500db]/8 to-purple-50/50">
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Data
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Purpose
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Chat inputs and AI prompts
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          AI response generation
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          AI-generated outputs (proposals, messages)
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Service delivery, history
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Uploaded files and documents
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          AI processing, knowledge base
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Custom AI agent configurations
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Service personalization
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Knowledge base entries
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Company-specific AI training and retrieval
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          LinkedIn profile imports
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Professional lead management
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="relative rounded-xl border py-4 pr-4 pl-5 bg-[#8500db]/5 border-[#8500db]/20 text-[#8500db] text-sm leading-relaxed">
                  <div className="absolute inset-y-0 left-0 w-1 rounded-full bg-current opacity-40"></div>
                  <strong>Important:</strong> Chat inputs, prompts, and uploaded
                  files are transmitted to third-party AI providers to generate
                  responses. See Section 7 for full details.
                </div>
                <h3 className="mt-1 text-sm font-semibold text-gray-900">
                  3.5 Technical & Device Data
                </h3>
                <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#8500db]/8 to-purple-50/50">
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Data
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Purpose
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          IP address
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Security, fraud prevention, geolocation
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Browser type and version
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Compatibility, debugging
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Operating system
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Compatibility
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Error logs and crash reports
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Debugging, service quality
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Referring URLs
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Analytics
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          {/* section 4 */}
          <section className="scroll-mt-8" id="how-we-collect">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <span className="text-sm font-bold">4</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  How We Collect Data
                </h2>
              </div>
              <div className="p-6 space-y-5 text-gray-700 text-sm leading-relaxed">
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Directly from you — when you register, configure your
                      workspace, send messages, upload files, or contact support
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Automatically — via server logs, session tracking, and
                      usage metrics as you use the platform
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      From your organization — when a Company Admin or Super
                      Admin creates your account and invites you to a workspace
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      From payment processors — transaction confirmations and
                      billing events from our payment provider
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      From LinkedIn — when you import profile data using our
                      LinkedIn integration
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* section 5 */}
          <section className="scroll-mt-8" id="legal-basis">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <UserCheck className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Legal Basis for Processing (GDPR)
                </h2>
              </div>
              <div className="p-6 space-y-5 text-gray-700 text-sm leading-relaxed">
                <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#8500db]/8 to-purple-50/50">
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Processing Activity
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Legal Basis
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Account registration and authentication
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Contract performance
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Service delivery (AI processing, storage)
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Contract performance
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Billing and invoicing
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Contract performance + Legal obligation
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Security monitoring and fraud prevention
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Legitimate interests
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Product analytics and improvement
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Legitimate interests
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Marketing communications
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Consent (opt-in only)
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Legal compliance and record keeping
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Legal obligation
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Processing GDPR data requests
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Legal obligation
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          {/* section 6 */}
          <section className="scroll-mt-8" id="how-we-use">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Eye className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  How We Use Your Data
                </h2>
              </div>
              <div className="p-6 space-y-5 text-gray-700 text-sm leading-relaxed">
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Deliver the Service: Process AI requests, store your
                      history, manage your workspace, enable AI agents
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Billing: Calculate token and resource usage, generate
                      invoices, process payments
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Security: Detect fraud, unauthorized access, and abuse
                      patterns
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Support: Respond to your tickets, resolve technical issues
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Communications: Send transactional emails (invoices,
                      alerts, security notices, service updates)
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Compliance: Meet our legal and regulatory obligations
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Product improvement: Analyze aggregated, anonymized usage
                      patterns to improve features
                    </span>
                  </li>
                </ul>
                <div className="relative rounded-xl border py-4 pr-4 pl-5 bg-emerald-50 border-emerald-200 text-emerald-800 text-sm leading-relaxed">
                  <div className="absolute inset-y-0 left-0 w-1 rounded-full bg-current opacity-40"></div>
                  <strong>What we do NOT do:</strong> We do not sell your data
                  to third parties. We do not use your Input Data or AI outputs
                  to train AI models without your explicit written consent. We
                  do not serve advertising based on your data.
                </div>
              </div>
            </div>
          </section>
          {/* section 7 */}
          <section className="scroll-mt-8" id="data-sharing">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Globe className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Data Sharing & Third Parties
                </h2>
              </div>
              <div className="p-6 space-y-5 text-gray-700 text-sm leading-relaxed">
                <p className="font-medium text-gray-800">
                  We share data only when necessary to provide the Service:
                </p>
                <h3 className="mt-3 text-sm font-semibold text-gray-900">
                  7.1 AI Model Providers
                </h3>
                <p>
                  Your chat inputs, prompts, and uploaded file contents are
                  transmitted to AI model providers to generate responses. These
                  providers act as <strong>data processors</strong> under our
                  instructions.
                </p>
                <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#8500db]/8 to-purple-50/50">
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Provider
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Data Shared
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Purpose
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Anthropic (Claude)
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Chat inputs, prompts
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          AI response generation
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          OpenAI (GPT)
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Chat inputs, prompts
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          AI response generation
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Additional providers (listed in-app)
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Chat inputs as applicable
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Specialized AI capabilities
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-gray-900">
                  7.2 Payment Processors
                </h3>
                <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#8500db]/8 to-purple-50/50">
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Provider
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Data Shared
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Purpose
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Payment provider (Merchant of Record)
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Billing details, transaction data
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Payment processing as our reseller and Merchant of
                          Record — raw card data never stored by COVIS AI
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-gray-900">
                  7.3 Cloud Infrastructure & Communications
                </h3>
                <p>
                  We use cloud infrastructure providers for hosting, storage,
                  and compute, and transactional email providers for system
                  notifications. All providers are contractually bound under
                  Data Processing Agreements (DPAs).
                </p>
                <h3 className="mt-3 text-sm font-semibold text-gray-900">
                  7.4 Legal Disclosures
                </h3>
                <p>
                  We may disclose your data if required by law, court order, or
                  governmental authority. Where legally permitted, we will
                  notify you before complying.
                </p>
              </div>
            </div>
          </section>
          {/* section 8 */}
          <section className="scroll-mt-8" id="ai-data-processing">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <span className="text-sm font-bold">8</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  AI Data Processing — Special Notice
                </h2>
              </div>
              <div className="p-6 space-y-5 text-gray-700 text-sm leading-relaxed">
                <div className="relative rounded-xl border py-4 pr-4 pl-5 bg-amber-50 border-amber-200 text-amber-800 text-sm leading-relaxed">
                  <div className="absolute inset-y-0 left-0 w-1 rounded-full bg-current opacity-40"></div>
                  When you use COVIS AI, your input (message, prompt, uploaded
                  file, or agent configuration) is processed by third-party AI
                  model providers. COVIS AI does not control what providers do
                  with data once transmitted — please review their privacy
                  policies.
                </div>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Your input is sent from our servers to the selected AI
                      model provider
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      The AI provider processes your input and returns a
                      response
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Both the input and response are stored in your workspace
                      history (subject to your retention settings)
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Custom AI agent configurations are stored on COVIS AI
                      servers and shared with AI providers only at the time of a
                      request
                    </span>
                  </li>
                </ul>
                <div className="relative rounded-xl border py-4 pr-4 pl-5 bg-[#8500db]/5 border-[#8500db]/20 text-[#8500db] text-sm leading-relaxed">
                  <div className="absolute inset-y-0 left-0 w-1 rounded-full bg-current opacity-40"></div>
                  <strong>Recommendation:</strong> Do not include highly
                  sensitive personal data (national ID numbers, financial
                  account credentials, medical records) in AI prompts or
                  uploaded files unless strictly necessary for your business
                  purpose.
                </div>
              </div>
            </div>
          </section>
          {/* section 9 */}
          <section className="scroll-mt-8" id="international-transfers">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Globe className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  International Data Transfers
                </h2>
              </div>
              <div className="p-6 space-y-5 text-gray-700 text-sm leading-relaxed">
                <p>
                  COVIS AI may transfer your data to countries outside your home
                  jurisdiction. We safeguard all international transfers
                  through:
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Standard Contractual Clauses (SCCs) approved by the
                      European Commission
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Data Processing Agreements (DPAs) with all sub-processors
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>Adequacy decisions where applicable</span>
                  </li>
                </ul>
                <p>
                  To request a copy of the safeguards in place, contact{" "}
                  <strong>info@covis.ai</strong>
                </p>
              </div>
            </div>
          </section>
          {/* section 10 */}
          <section className="scroll-mt-8" id="cookies-tracking">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <span className="text-sm font-bold">10</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Cookies & Tracking
                </h2>
              </div>
              <div className="p-6 space-y-5 text-gray-700 text-sm leading-relaxed">
                <p>
                  The categories below summarize how we use cookies. For the
                  full cookie inventory, durations, and how to control them, see
                  our{" "}
                  <Link
                    href="/cookie"
                    className="font-medium text-[#8500db] hover:underline"
                  >
                    Cookie Policy
                  </Link>
                  .
                </p>
                <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#8500db]/8 to-purple-50/50">
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Cookie type
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Purpose
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Can Opt Out?
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Essential
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Session management, authentication, security
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          No — required for the Service
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Functional
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Language preference, theme, UI settings
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Yes
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Analytics
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Aggregated usage patterns, feature adoption
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Yes
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="relative rounded-xl border py-4 pr-4 pl-5 bg-emerald-50 border-emerald-200 text-emerald-800 text-sm leading-relaxed">
                  <div className="absolute inset-y-0 left-0 w-1 rounded-full bg-current opacity-40"></div>
                  We do <strong>not</strong> use advertising cookies,
                  retargeting cookies, or third-party social media tracking
                  pixels.
                </div>
              </div>
            </div>
          </section>
          {/* section 11 */}
          <section className="scroll-mt-8" id="your-rights">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <UserCheck className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Your Privacy Rights
                </h2>
              </div>
              <div className="p-6 space-y-5 text-gray-700 text-sm leading-relaxed">
                <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#8500db]/8 to-purple-50/50">
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Right
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Description
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          How to Exercise
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Access
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Receive a copy of all personal data we hold
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Account Settings → Privacy → Request My Data
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Rectification
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Correct inaccurate or incomplete data
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Account Settings → Profile
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Erasure
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Request deletion of your personal data
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Account Settings → Privacy → Delete Account
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Portability
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Export your data in machine-readable format
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Account Settings → Privacy → Export My Data
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Restriction
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Pause processing in certain circumstances
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Email info@covis.ai
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Objection
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Object to processing based on legitimate interests
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Email info@covis.ai
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Withdraw consent
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Withdraw where processing is consent-based
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Email info@covis.ai
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-xs text-gray-500">
                  Response time: We respond to all requests within{" "}
                  <strong>30 days</strong>. Complex requests may be extended to
                  60 days with notice. Identity verification may be required
                  before processing.
                </p>
              </div>
            </div>
          </section>
          {/* section 12 */}
          <section className="scroll-mt-8" id="data-security">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Lock className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Data Security
                </h2>
              </div>
              <div className="p-6 space-y-5 text-gray-700 text-sm leading-relaxed">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db]"></div>
                    <div>
                      <p className="text-xs font-medium text-gray-900">
                        Encryption in Transit
                      </p>
                      <p className="mt-0.5 text-xs text-gray-500">
                        TLS 1.2+ for all browser-server communication
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db]"></div>
                    <div>
                      <p className="text-xs font-medium text-gray-900">
                        Encryption at Rest
                      </p>
                      <p className="mt-0.5 text-xs text-gray-500">
                        AES-256 encryption for all stored data
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db]"></div>
                    <div>
                      <p className="text-xs font-medium text-gray-900">
                        Access Control
                      </p>
                      <p className="mt-0.5 text-xs text-gray-500">
                        Role-based access control (RBAC) — need-to-know basis
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db]"></div>
                    <div>
                      <p className="text-xs font-medium text-gray-900">
                        Multi-Factor Authentication
                      </p>
                      <p className="mt-0.5 text-xs text-gray-500">
                        MFA available for all accounts
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db]"></div>
                    <div>
                      <p className="text-xs font-medium text-gray-900">
                        Audit Logging
                      </p>
                      <p className="mt-0.5 text-xs text-gray-500">
                        All sensitive data access is logged and monitored
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db]"></div>
                    <div>
                      <p className="text-xs font-medium text-gray-900">
                        Security Audits
                      </p>
                      <p className="mt-0.5 text-xs text-gray-500">
                        Regular third-party penetration testing
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-xl border py-4 pr-4 pl-5 bg-amber-50 border-amber-200 text-amber-800 text-sm leading-relaxed">
                  <div className="absolute inset-y-0 left-0 w-1 rounded-full bg-current opacity-40"></div>
                  <strong>Data Breach Notification:</strong> In the event of a
                  breach affecting your data, we will notify affected users
                  within <strong>48 hours</strong> and the relevant supervisory
                  authority within <strong>72 hours</strong> as required by
                  GDPR. Report security vulnerabilities to{" "}
                  <strong>info@covis.ai</strong>
                </div>
              </div>
            </div>
          </section>
          {/* section 13 */}
          <section className="scroll-mt-8" id="childrens-privacy">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <TriangleAlert className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Children's Privacy
                </h2>
              </div>
              <div className="p-6 space-y-5 text-gray-700 text-sm leading-relaxed">
                <p>
                  The COVIS AI Service is <strong>not directed at or intended for individuals under the age of 18</strong>. We do not knowingly collect personal data from minors. If we discover that we have collected data from a minor without verifiable parental consent, we will delete it immediately.
                </p>
                <p className="mt-2">
                  If you believe a minor has provided us with personal data, contact <strong>info@covis.ai</strong> immediately. 
                </p>
              </div>
            </div>
          </section>
          {/* section 14 */}
          <section className="scroll-mt-8" id="data-retention">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <span className="text-sm font-bold">14</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Data Retention
                </h2>
              </div>
              <div className="p-6 space-y-5 text-gray-700 text-sm leading-relaxed">
                <p>
                  Data is retained according to our <Link href="/retention" className="font-medium text-[#8500db] hover:underline">Data Retention Policy</Link>. Key periods:
                </p>
                <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#8500db]/8 to-purple-50/50">
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Data Type
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Retention Period
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Account & identity data
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Duration of account + 30 days
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Chat history & AI outputs
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          12 months (configurable by Admin)
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Call logs
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          12 months
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          LinkedIn profile data
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Account active + 30 days
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Token usage logs
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          12 months
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Billing & invoice records
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          7 years (legal requirement — cannot be shortened)
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Audit logs
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          24 months, then anonymized
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Technical / error logs
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          90 days
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          {/* section 15 */}
          <section className="scroll-mt-8" id="changes">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Bell className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Changes to This Policy
                </h2>
              </div>
              <div className="p-6 space-y-5 text-gray-700 text-sm leading-relaxed">
                <p>
                  We may update this Privacy Policy from time to time. When we make material changes, we will:
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Notify you via email to your registered address
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Display an in-app notification banner requiring acknowledgement
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Update the "Last Updated" date at the top of this document
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* section 16 */}
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
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
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
                      Security issues
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
                      General support
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
                <p className="mt-4 text-xs text-gray-400">
                  Response time: within 30 days · GDPR requests: within 30 days, may extend to 60 days with notice
                </p>
              </div>
            </div>
          </section>
          <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/service" className="group flex flex-col gap-1 rounded-xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:border-[#8500db]/40 hover:shadow-md">
            <span className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-[#8500db]">
              Terms of Service →
            </span>
            <span className="text-xs text-gray-500">
              Usage rules and obligations
            </span>
            </Link>
            <Link href="/cookie" className="group flex flex-col gap-1 rounded-xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:border-[#8500db]/40 hover:shadow-md">
            <span className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-[#8500db]">
              Cookie Policy →
            </span>
            <span className="text-xs text-gray-500">
              Cookies and similar technologies
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
            <Link href="/deletion" className="group flex flex-col gap-1 rounded-xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:border-[#8500db]/40 hover:shadow-md">
            <span className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-[#8500db]">
              Data Deletion Policy →
            </span>
            <span className="text-xs text-gray-500">
              How to delete your data
            </span>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
