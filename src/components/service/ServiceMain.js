import React from "react";
import Sidebar from "@/components/Sidebar";
import { serviceSidebarLinks } from "@/data/serviceSidebar";
import {
  FileText,
  Layers,
  Shield,
  CircleCheckBig,
  CreditCard,
  TriangleAlert,
  Scale,
  Mail,
  CircleX,
} from "lucide-react";
import Link from "next/link";

export default function ServiceMain() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex items-start gap-8">
        {/* sidebar */}
        <Sidebar title="GenericTable of Contents" links={serviceSidebarLinks} />
        <main className="min-w-0 flex-1 space-y-6">
          {/* section 1 */}
          <section className="scroll-mt-8" id="acceptance">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <FileText className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Acceptance of Terms
                </h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>
                  The COVIS AI platform ("Service") is owned and operated by{" "}
                  <strong>XEVEN SOLUTIONS PVT LTD</strong> ("COVIS AI", the
                  "Company", "we", "us", or "our"). By creating an account,
                  accessing, or using the Service, you ("User", "Company Admin",
                  "Professional", "Client", or "Organization") agree to be bound
                  by these Terms of Service. If you are accepting on behalf of a
                  company or organization, you represent and warrant that you
                  have full legal authority to bind that entity to these Terms.
                </p>
                <div className="relative rounded-xl border py-4 pr-4 pl-5 bg-amber-50 border-amber-200 text-sm leading-relaxed">
                  <div className="absolute inset-y-0 left-0 w-1 rounded-full bg-gradient-to-b from-[#8500db] to-[#c500db] opacity-60" />
                  <strong>
                    If you do not agree to these Terms, you must not access or
                    use the Service.
                  </strong>
                </div>
              </div>
            </div>
          </section>
          {/* section 2 */}
          <section className="scroll-mt-8" id="service-description">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Layers className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Description of Service
                </h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>
                  COVIS AI provides a multi-tenant, AI-powered SaaS platform
                  that includes:
                </p>
                <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <div className="flex items-start gap-2 rounded-lg border border-gray-100 bg-gray-50 p-2.5 text-xs text-gray-700">
                    <CircleCheckBig className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8500db]" />
                    AI-powered conversational agents (chat, proposals,
                    messaging)
                  </div>
                  <div className="flex items-start gap-2 rounded-lg border border-gray-100 bg-gray-50 p-2.5 text-xs text-gray-700">
                    <CircleCheckBig className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8500db]" />
                    Custom AI agent configuration and management
                  </div>
                  <div className="flex items-start gap-2 rounded-lg border border-gray-100 bg-gray-50 p-2.5 text-xs text-gray-700">
                    <CircleCheckBig className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8500db]" />
                    Multi-user tenant workspace with role-based access (Admin,
                    Professional, Client)
                  </div>
                  <div className="flex items-start gap-2 rounded-lg border border-gray-100 bg-gray-50 p-2.5 text-xs text-gray-700">
                    <CircleCheckBig className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8500db]" />
                    Token-based usage metering and subscription billing
                  </div>
                  <div className="flex items-start gap-2 rounded-lg border border-gray-100 bg-gray-50 p-2.5 text-xs text-gray-700">
                    <CircleCheckBig className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8500db]" />
                    Knowledge base management for company-specific AI training
                  </div>
                  <div className="flex items-start gap-2 rounded-lg border border-gray-100 bg-gray-50 p-2.5 text-xs text-gray-700">
                    <CircleCheckBig className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8500db]" />
                    Call logging and interaction history management
                  </div>
                  <div className="flex items-start gap-2 rounded-lg border border-gray-100 bg-gray-50 p-2.5 text-xs text-gray-700">
                    <CircleCheckBig className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8500db]" />
                    LinkedIn profile import and professional lead management
                  </div>
                  <div className="flex items-start gap-2 rounded-lg border border-gray-100 bg-gray-50 p-2.5 text-xs text-gray-700">
                    <CircleCheckBig className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8500db]" />
                    Document and file processing via AI
                  </div>
                  <div className="flex items-start gap-2 rounded-lg border border-gray-100 bg-gray-50 p-2.5 text-xs text-gray-700">
                    <CircleCheckBig className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8500db]" />
                    Support ticket management system
                  </div>
                  <div className="flex items-start gap-2 rounded-lg border border-gray-100 bg-gray-50 p-2.5 text-xs text-gray-700">
                    <CircleCheckBig className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8500db]" />
                    Financial and analytics dashboards
                  </div>
                  <div className="flex items-start gap-2 rounded-lg border border-gray-100 bg-gray-50 p-2.5 text-xs text-gray-700">
                    <CircleCheckBig className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8500db]" />
                    API access for programmatic integration
                  </div>
                  <div className="flex items-start gap-2 rounded-lg border border-gray-100 bg-gray-50 p-2.5 text-xs text-gray-700">
                    <CircleCheckBig className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8500db]" />
                    Subscription plan management with resource limits (agents,
                    professionals, clients, projects, storage)
                  </div>
                </div>
                <p className="mt-3 text-xs text-gray-500">
                  Features available to you depend on your active subscription
                  plan and the resource limits (maxAgents, maxProfessionals,
                  maxClients, maxProjects, storage) defined therein.
                </p>
              </div>
            </div>
          </section>
          {/* section 3 */}
          <section className="scroll-mt-8" id="eligibility">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <span className="text-sm font-bold">3</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900">Eligibility</h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>To use the Service, you must:</p>
                <ul className="space-y-2 mt-1">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Be at least 18 years of age or the legal age of majority
                      in your jurisdiction
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Have the legal capacity to enter into a binding agreement
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Not be located in a country subject to a government
                      embargo or designated as a terrorist-supporting country
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Not be on any government list of prohibited or restricted
                      parties
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* section 4 */}
          <section className="scroll-mt-8" id="account">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Shield className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Account Registration & Responsibilities
                </h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <h3 className="font-semibold text-gray-900">
                  4.1 Account Creation
                </h3>
                <p>
                  You must provide accurate, current, and complete information
                  during registration and maintain its accuracy.
                </p>
                <h3 className="mt-3 font-semibold text-gray-900">
                  4.2 Company Admin Responsibilities
                </h3>
                <p>The Company Admin account holds full responsibility for:</p>
                <ul className="space-y-2 mt-1">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      All users invited to and operating under their workspace
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Ensuring all workspace users comply with these Terms
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Managing user roles, permissions, and access controls
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Maintaining valid and up-to-date billing information
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      All activity that occurs under the tenant workspace
                    </span>
                  </li>
                </ul>
                <h3 className="mt-3 font-semibold text-gray-900">
                  4.3 Account Security
                </h3>
                <ul className="space-y-2 mt-1">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      You are solely responsible for maintaining the
                      confidentiality of your login credentials
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Sharing credentials between users is strictly prohibited
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Notify COVIS AI immediately at info@covis.ai upon
                      discovering unauthorized access
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      COVIS AI is not liable for any loss resulting from
                      unauthorized use of your account
                    </span>
                  </li>
                </ul>
                <h3 className="mt-3 font-semibold text-gray-900">
                  4.4 Tenant Isolation
                </h3>
                <p>
                  Each tenant workspace is logically isolated. You may not
                  attempt to access, read, modify, or interfere with another
                  tenant's data, configuration, or workspace.
                </p>
              </div>
            </div>
          </section>
          {/* section 5 */}
          <section className="scroll-mt-8" id="acceptable-use">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <CircleCheckBig className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Acceptable Use Policy
                </h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <h3 className="mt-3 font-semibold text-gray-900">
                  5.1 Permitted Uses
                </h3>
                <ul className="space-y-2 mt-1">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Use AI agents for lawful business communication, proposal
                      generation, and client engagement
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Import and manage professional profiles via LinkedIn
                      integration for legitimate lead management
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Manage team members (Professionals, Clients) within your
                      subscription resource limits
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Access the platform via API for legitimate programmatic
                      automation
                    </span>
                  </li>
                </ul>
                <h3 className="mt-4 mb-2 font-semibold text-gray-900">
                  5.2 Prohibited Uses
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2.5">
                    <CircleX className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    <span>
                      Generate, distribute, or store content that is illegal,
                      harmful, abusive, defamatory, or discriminatory
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CircleX className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    <span>
                      Use AI outputs to deceive, manipulate, defraud, or mislead
                      third parties
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CircleX className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    <span>
                      Use AI agents for mass unsolicited communications (spam)
                      or phishing
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CircleX className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    <span>
                      Attempt to reverse-engineer, decompile, or extract the
                      underlying AI models
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CircleX className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    <span>
                      Use the platform or its outputs to train competing AI
                      systems without explicit written consent
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CircleX className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    <span>
                      Scrape, bulk-extract, or harvest data beyond your intended
                      use via API
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CircleX className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    <span>
                      Circumvent, disable, or interfere with security features
                      or access controls
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CircleX className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    <span>
                      Use LinkedIn profile import features to harvest contact
                      data for illegal purposes
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CircleX className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    <span>
                      Use the Service for money laundering, fraud, or sanctions
                      violations
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CircleX className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    <span>
                      Attempt to gain unauthorized access to any system,
                      workspace, or account
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* section 6 */}
          <section className="scroll-mt-8" id="ai-terms">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <span className="text-sm font-bold">6</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  AI-Specific Terms
                </h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <h3 className="font-semibold text-gray-900">
                  6.1 AI Output Disclaimer
                </h3>
                <div className="relative rounded-xl border py-4 pr-4 pl-5 bg-amber-50 border-amber-200 text-sm leading-relaxed">
                  <div className="absolute inset-y-0 left-0 w-1 rounded-full bg-gradient-to-b from-[#8500db] to-[#c500db] opacity-60" />
                  Content generated by COVIS AI is produced by artificial
                  intelligence and{" "}
                  <strong>
                    may be inaccurate, incomplete, outdated, biased, or
                    inappropriate
                  </strong>
                  . You are solely responsible for reviewing, validating, and
                  determining the appropriateness of all AI-generated outputs
                  before use.
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">
                  6.2 No Professional Advice
                </h3>
                <p>
                  AI-generated proposals, messages, documents, or any other
                  outputs do <strong>not</strong> constitute legal, financial,
                  medical, or any other form of professional advice. Always
                  consult qualified professionals for advice in regulated
                  domains.
                </p>

                <h3 className="mt-4 font-semibold text-gray-900">
                  6.3 Third-Party AI Providers
                </h3>
                <p>
                  The Service uses third-party AI model providers (including
                  Anthropic and OpenAI) to process your inputs and generate
                  outputs. Your data is transmitted to these providers subject
                  to their respective privacy policies. By using the Service,
                  you consent to this processing.
                </p>

                <h3 className="mt-4 font-semibold text-gray-900">
                  6.4 AI Model Changes
                </h3>
                <p>
                  COVIS AI reserves the right to change, update, or replace the
                  underlying AI models at any time without prior notice. Such
                  changes may affect the nature, quality, or style of
                  AI-generated outputs.
                </p>
              </div>
            </div>
          </section>
          {/* section 7 */}
          <section className="scroll-mt-8" id="billing">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <CreditCard className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Token Usage & Billing
                </h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <h3 className="font-semibold text-gray-900">
                  7.1 Token-Based Consumption
                </h3>
                <p>
                  The Service operates on a token-based consumption model.
                  Tokens are consumed with each AI request. The number consumed
                  depends on the length and complexity of inputs and outputs,
                  and may vary by agent type.
                </p>
                <h3 className="mt-4 font-semibold text-gray-900">
                  7.2 Subscription Plans & Resource Limits
                </h3>
                <p>
                  Each subscription plan defines your monthly token quota and
                  the following resource limits:
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  <div className="flex items-center gap-2 rounded-lg border border-[#8500db]/15 bg-[#8500db]/5 p-2.5 text-xs font-medium text-[#8500db]">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#8500db]"></span>
                    Max Token Quota
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-[#8500db]/15 bg-[#8500db]/5 p-2.5 text-xs font-medium text-[#8500db]">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#8500db]"></span>
                    Max Users
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-[#8500db]/15 bg-[#8500db]/5 p-2.5 text-xs font-medium text-[#8500db]">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#8500db]"></span>
                    Max AI Agents
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-[#8500db]/15 bg-[#8500db]/5 p-2.5 text-xs font-medium text-[#8500db]">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#8500db]"></span>
                    Max Professionals
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-[#8500db]/15 bg-[#8500db]/5 p-2.5 text-xs font-medium text-[#8500db]">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#8500db]"></span>
                    Max Clients
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-[#8500db]/15 bg-[#8500db]/5 p-2.5 text-xs font-medium text-[#8500db]">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#8500db]"></span>
                    Max Projects
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-[#8500db]/15 bg-[#8500db]/5 p-2.5 text-xs font-medium text-[#8500db]">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#8500db]"></span>
                    Storage Quota (GB)
                  </div>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  A value of{" "}
                  <code className="rounded bg-gray-100 px-1 py-0.5 text-xs">
                    -1
                  </code>{" "}
                  for any resource limit indicates unlimited usage at that tier.
                </p>
                <h3 className="mt-4 font-semibold text-gray-900">
                  7.3 Billing Terms
                </h3>
                <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#8500db]/8 to-purple-50/50">
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Term
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Policy
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Billing cycle
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Monthly or annual, billed in advance
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Payment processor
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          All payments are processed by Paddle.com Market
                          Limited (paddle.com), our authorized reseller and
                          Merchant of Record
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Token rollover
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Unused tokens do not roll over
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Failed payments
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          7-day grace period before service suspension
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Upgrades
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Take effect immediately; prorated charge applied
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Downgrades
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Take effect at start of next billing period
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Refunds
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Full refund available within 14 days of any payment —
                          see our Refund Policy
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">
                  7.4 Service Suspension
                </h3>
                <p>
                  COVIS AI reserves the right to throttle, limit, or suspend
                  accounts with outstanding unpaid invoices, that exceed fair
                  use thresholds, or that violate these Terms.
                </p>
                <h3 className="mt-4 font-semibold text-gray-900">
                  7.5 Merchant of Record
                </h3>
                <p>
                  Our order process and payments are conducted by our authorized
                  reseller and Merchant of Record, Paddle.com Market Limited
                  ("Paddle"). Paddle is the Merchant of Record for all orders
                  placed through the Service. When you purchase a subscription
                  or make any payment for the Service, your purchase creates a
                  separate contract with Paddle for the supply of the Product,
                  governed by Paddle's Buyer Terms available at{" "}
                  <a
                    href="https://www.paddle.com/legal/checkout-buyer-terms"
                    target="_blank"
                    className="font-medium text-[#8500db] hover:underline"
                  >
                    https://www.paddle.com/legal/checkout-buyer-terms
                  </a>
                  , while these Terms continue to govern your use of the Service
                  itself.
                </p>
                <p>
                  Paddle is responsible, as Merchant of Record, for processing
                  payments, issuing invoices and receipts, and calculating,
                  collecting, and remitting applicable sales tax, VAT, and other
                  transaction taxes. Paddle's name (or "Paddle.net") will appear
                  on your bank or card statement for any charges relating to the
                  Service. COVIS AI does not directly store or process your card
                  or payment details.
                </p>
                <p>
                  Refunds and chargebacks are handled by Paddle in accordance
                  with our Refund Policy and Paddle's Buyer Terms. Any refund
                  request will be processed through Paddle.
                </p>
              </div>
            </div>
          </section>
          {/* section 8 */}
          <section className="scroll-mt-8" id="data-ownership">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Shield className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Data Ownership & License
                </h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <h3 className="font-semibold text-gray-900">8.1 Your Data</h3>
                <p>
                  You retain full ownership of all content you input into the
                  Service (Input Data), all AI-generated outputs produced from
                  your inputs (Output Data), and all files and documents you
                  upload.
                </p>
                <h3 className="mt-4 font-semibold text-gray-900">
                  8.2 License Grant to COVIS AI
                </h3>
                <p>
                  By using the Service, you grant COVIS AI a{" "}
                  <strong>
                    limited, non-exclusive, worldwide, royalty-free license
                  </strong>{" "}
                  to:
                </p>
                <ul className="space-y-2 mt-1">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Process, store, and transmit your Input Data solely to
                      provide the Service
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Use aggregated, anonymized data derived from usage to
                      improve the Service
                    </span>
                  </li>
                </ul>
                <div className="relative rounded-xl border py-4 pr-4 pl-5 bg-emerald-50 border-emerald-200 text-sm leading-relaxed">
                  <div className="absolute inset-y-0 left-0 w-1 rounded-full bg-gradient-to-b from-[#8500db] to-[#c500db] opacity-60" />
                  This license does <strong>not</strong> include the right to
                  use your Input Data or Output Data to train AI models without
                  your explicit written consent.
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">
                  8.3 COVIS AI Intellectual Property
                </h3>
                <p>
                  The COVIS AI platform — including its software, UI, design,
                  algorithms, AI agent framework, and documentation — is the
                  exclusive property of COVIS AI. You may not copy, modify,
                  distribute, reverse-engineer, or create derivative works of
                  the platform.
                </p>
              </div>
            </div>
          </section>
          {/* section 9 */}
          <section className="scroll-mt-8" id="privacy">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Shield className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">Privacy</h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>
                  Your use of the Service is governed by our{" "}
                  <Link
                    href="/privacy-policy"
                    className="font-medium text-[#8500db] hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  , our{" "}
                  <Link href="/cookie" className="font-medium text-[#8500db] hover:underline">
                    Cookie Policy
                    </Link>
                    , and our{" "}
                    <Link href="/retention" className="font-medium text-[#8500db] hover:underline">
                      Data Retention & Deletion Policy
                    </Link>
                    , each incorporated into these Terms by reference.
                </p>
              </div>
            </div>
          </section>
          {/* section 10 */}
          <section className="scroll-mt-8" id="confidentiality">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <span className="text-sm font-bold">10</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Confidentiality
                </h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>
                  Each party agrees to keep confidential any non-public information of the other party disclosed in connection with the Service, using the same degree of care it uses to protect its own confidential information, but no less than reasonable care. This obligation does not apply to information that is publicly available, independently developed, or disclosed pursuant to a court order.
                </p>
              </div>
            </div>
          </section>
          {/* section 11 */}
          <section className="scroll-mt-8" id="warranties">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <TriangleAlert className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Warranties & Disclaimers
                </h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <h3 className="font-semibold text-gray-900">
                  11.1 Service Warranty
                </h3>
                <p>
                  COVIS AI warrants that it will use commercially reasonable efforts to provide the Service in a professional manner consistent with industry standards.
                </p>
                <h3 className="mt-4 font-semibold text-gray-900">
                  11.2 Disclaimer of Warranties
                </h3>
                <div className="relative rounded-xl border py-4 pr-4 pl-5 bg-red-50 border-red-200 text-sm leading-relaxed">
                  <div className="absolute inset-y-0 left-0 w-1 rounded-full bg-gradient-to-b from-[#8500db] to-[#c500db] opacity-60" />
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR UNINTERRUPTED, ERROR-FREE OPERATION. COVIS AI DOES NOT WARRANT THAT AI-GENERATED OUTPUTS WILL BE ACCURATE, COMPLETE, OR SUITABLE FOR YOUR INTENDED USE.
                </div>
              </div>
            </div>
          </section>
          {/* section 12 */}
          <section className="scroll-mt-8" id="liability">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Scale className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Limitation of Liability
                </h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <div className="relative rounded-xl border py-4 pr-4 pl-5 bg-red-50 border-red-200 text-sm leading-relaxed">
                  <div className="absolute inset-y-0 left-0 w-1 rounded-full bg-gradient-to-b from-[#8500db] to-[#c500db] opacity-60" />
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, COVIS AI'S TOTAL CUMULATIVE LIABILITY SHALL NOT EXCEED THE TOTAL FEES PAID BY YOU IN THE THREE (3) MONTHS PRECEDING THE CLAIM. IN NO EVENT SHALL COVIS AI BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING LOSS OF PROFITS, DATA, GOODWILL, OR BUSINESS INTERRUPTION.
                </div>
                <p className="mt-3 text-xs text-gray-500">
                  These limitations apply regardless of the theory of liability and even if COVIS AI has been advised of the possibility of such damages.
                </p>
              </div>
            </div>
          </section>
          {/* section 13 */}
          <section className="scroll-mt-8" id="indemnification">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <span className="text-sm font-bold">13</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Indemnification
                </h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>
                  You agree to indemnify, defend, and hold harmless COVIS AI and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or related to:
                </p>
                <ul className="space-y-2 mt-1">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Your use of the Service in violation of these Terms
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Your Input Data or Output Data
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Your violation of any applicable law or third-party rights
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Any claim that your use of AI-generated content infringes a third party's rights
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* section 14 */}
          <section className="scroll-mt-8" id="termination">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <span className="text-sm font-bold">14</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Suspension & Termination
                </h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <h3 className="font-semibold text-gray-900">
                  14.1 Termination by You
                </h3>
                <p>
                  You may cancel your subscription at any time through account settings. Cancellation takes effect at the end of the current billing period. Refunds are governed by our <Link href="/privacy-policy" className="font-medium text-[#8500db] hover:underline">Refund Policy</Link> , which provides a full refund within 14 days of any payment. Refunds are processed through Paddle, our Merchant of Record, in accordance with our Refund Policy.
                </p>
                <h3 className="mt-3 font-semibold text-gray-900">
                  14.2 Termination by COVIS AI
                </h3>
                <p>
                  COVIS AI may suspend or terminate your account immediately and without notice if you:
                </p>
                <ul className="space-y-2 mt-1">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Violate these Terms or the Acceptable Use Policy
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Fail to pay applicable fees after the grace period
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Engage in fraudulent or illegal activity
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Pose a security risk to the Service or other users
                    </span>
                  </li>
                </ul>
                <h3 className="mt-3 font-semibold text-gray-900">
                  14.3 Effect of Termination
                </h3>
                <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#8500db]/8 to-purple-50/50">
                      <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                        Upon Termination
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                        Action
                      </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Service access
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Immediately revoked
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Your data
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Retained for 30 days — export available
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          After 30 days
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Permanently deleted per Data Retention Policy
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Billing records
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Retained for 7 years (legal requirement)
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Outstanding fees
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Remain due and payable
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
                  <span className="text-sm font-bold">15</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Changes to Terms
                </h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>
                  COVIS AI reserves the right to modify these Terms at any time. We will notify you of material changes via email to your registered address and an in-app notification requiring re-acceptance. Your continued use after the effective date constitutes acceptance.
                </p>
              </div>
            </div>
          </section>
          {/* section 16 */}
          <section className="scroll-mt-8" id="governing-law">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Scale className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Governing Law & Dispute Resolution
                </h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <h3 className="font-semibold text-gray-900">
                  16.1 Governing Law
                </h3>
                <p>
                  These Terms shall be governed by and construed in accordance with the applicable laws of the jurisdiction in which <strong>XEVEN SOLUTIONS PVT LTD</strong> is registered, without regard to conflict of law provisions.
                </p>
                <h3 className="mt-3 font-semibold text-gray-900">
                  16.2 Dispute Resolution
                </h3>
                <p>
                  Any dispute shall first be attempted to be resolved through good-faith negotiation. If unresolved within 30 days, disputes shall be submitted to binding arbitration in accordance with applicable arbitration rules.
                </p>
                <h3 className="mt-3 font-semibold text-gray-900">
                  16.3 General Provisions
                </h3>
                <ul className="space-y-2 mt-1">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0" />
                    <span>
                      Entire Agreement: These Terms, together with the Privacy Policy and Data Retention Policy, constitute the entire agreement
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0" />
                    <span>
                      Severability: If any provision is unenforceable, the remaining provisions remain in force
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0" />
                    <span>
                      Waiver: Failure to enforce any provision does not constitute a waiver
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0" />
                    <span>
                      Assignment: You may not assign your rights without prior written consent
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* section 17 */}
          <section className="scroll-mt-8" id="contact">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Mail className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Contact Information
                </h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>
                  COVIS AI is a product of <strong>XEVEN SOLUTIONS PVT LTD</strong>. For any legal, privacy, security, or general enquiry, contact us at:
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <Link href="/mailto:info@covis.ai" className="group flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3 transition-all hover:border-[#8500db]/30 hover:bg-[#8500db]/5">
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
                  </Link>
                  <Link href="/mailto:info@covis.ai" className="group flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3 transition-all hover:border-[#8500db]/30 hover:bg-[#8500db]/5">
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
                  </Link>
                  <Link href="/mailto:info@covis.ai" className="group flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3 transition-all hover:border-[#8500db]/30 hover:bg-[#8500db]/5">
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
                  </Link>
                  <Link href="/mailto:info@covis.ai" className="group flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3 transition-all hover:border-[#8500db]/30 hover:bg-[#8500db]/5">
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
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/privacy-policy" className="group flex flex-col gap-1 rounded-xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:border-[#8500db]/40 hover:shadow-md">
            <span className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-[#8500db]">
              Privacy Policy →
            </span>
            <span className="text-xs text-gray-500">
              How we handle your data
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
