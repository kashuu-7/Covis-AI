import React from "react";
import Sidebar from "@/components/Sidebar";
import { retentionSidebarLinks } from "@/data/retentionSidebar";
import Link from "next/link";
import {
  Clock,
  Users,
  Zap,
  Database,
  Shield,
  Settings,
  Mail,
} from "lucide-react";

export default function RetentionMain() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex items-start gap-8">
        {/* sidebar */}
        <Sidebar
          title="GenericTable of Contents"
          links={retentionSidebarLinks}
        />
        <main className="min-w-0 flex-1 space-y-6">
          {/* section 1 */}
          <section className="scroll-mt-8" id="overview">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Clock className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">Overview</h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>
                  This policy defines how COVIS AI retains, manages, and
                  permanently deletes personal data and business data across the
                  platform. It applies to all tenants, users, and data processed
                  through the COVIS AI platform.
                </p>
                <p>
                  This policy is incorporated by reference into our{" "}
                  <Link
                    href="/privacy-policy"
                    className="font-medium text-[#8500db] hover:underline"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/service"
                    className="font-medium text-[#8500db] hover:underline"
                  >
                    Terms of Service
                  </Link>
                  .
                </p>
                <div className="relative rounded-xl border py-4 pr-4 pl-5 bg-[#8500db]/5 border-[#8500db]/20 text-sm leading-relaxed">
                  <div className="absolute inset-y-0 left-0 w-1 rounded-full bg-gradient-to-b from-[#8500db] to-[#c500db] opacity-60" />
                  <strong>Principle of Data Minimization:</strong> COVIS AI
                  retains data only for as long as necessary to fulfil the
                  purposes for which it was collected, to comply with legal
                  obligations, or to resolve disputes — in accordance with GDPR
                  Article 5(e).
                </div>
              </div>
            </div>
          </section>
          {/* section 2 */}
          <section className="scroll-mt-8" id="account-identity">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Users className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Account & Identity Data
                </h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
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
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Deletion Trigger
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Who can delete
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Full name, email, role
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Account active + 30 days
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Account deletion request
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          User (self) or Super Admin
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Password hash
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Account active + 30 days
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Account deletion
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Auto-purged
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Profile photo
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Account active + 30 days
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Account deletion or manual removal
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          User (self)
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Login history
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          90 days rolling
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Rolling auto-purge
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Auto-purged
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Session tokens
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Session expiry or logout
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Session end
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Auto-purged
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Active sessions list
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Real-time
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Session revocation
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          User or Super Admin
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Years of experience / professional profile
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Account active + 30 days
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Account deletion
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          User (self) or Super Admin
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          {/* section 3 */}
          <section className="scroll-mt-8" id="billing-financial">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Zap className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Billing & Financial Data
                </h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <div className="relative rounded-xl border py-4 pr-4 pl-5 bg-red-50 border-red-200 text-sm leading-relaxed">
                  <div className="absolute inset-y-0 left-0 w-1 rounded-full bg-gradient-to-b from-[#8500db] to-[#c500db] opacity-60" />
                  <strong>Legal Requirement:</strong> Billing and financial
                  records must be retained for a minimum of 7 years to comply
                  with tax and financial regulations. These records{" "}
                  <strong>cannot be deleted</strong> even upon user request.
                </div>
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
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Who can delete
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Invoices and receipts
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          7 years
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Cannot be deleted — legally required
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Subscription history
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          7 years
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Cannot be deleted
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Transaction records
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          7 years
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Cannot be deleted
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Payment method tokens
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Until removed by user
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          User (via payment settings)
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Raw card numbers
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Never stored
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          N/A — tokenized via payment provider
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Order IDs (payment gateway)
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          7 years
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          cannot be deleted
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Billing disputes / chargebacks
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          7 years
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          COVIS AI Super Admin only
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          {/* section 4 */}
          <section className="scroll-mt-8" id="content-ai">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Database className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Content & AI Data
                </h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
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
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Default
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Who can delete
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Chat history (inputs + outputs)
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Configurable by Company Admin
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          12 months
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Company Admin or User
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Uploaded files and documents
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Configurable by Company Admin
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          12 months
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Company Admin or User
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          AI-generated proposals and outputs
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Configurable by Company Admin
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          12 months
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Company Admin or User
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Custom AI agent configurations
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Account active + 30 days
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Account deletion
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Company Admin
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Knowledge base entries
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Configurable by Company Admin
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          12 months
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Company Admin
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          LinkedIn profile imports
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Account active + 30 days
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Account deletion or manual removal
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Company Admin or User
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Call logs (metadata)
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          12 months
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          12 months
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Company Admin
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Call recordings (if applicable)
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Configurable by Company Admin
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          12 months
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Company Admin
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="relative rounded-xl border py-4 pr-4 pl-5 bg-amber-50 border-amber-200 text-sm leading-relaxed">
                  <div className="absolute inset-y-0 left-0 w-1 rounded-full bg-gradient-to-b from-[#8500db] to-[#c500db] opacity-60" />
                  Tenant-configured retention cannot override legally required
                  minimum retention periods.
                </div>
              </div>
            </div>
          </section>
          {/* section 5 */}
          <section className="scroll-mt-8" id="usage-analytics">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <span className="text-sm font-bold">5</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Usage & Analytics Data
                </h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
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
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Who can delete
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Token usage logs (count, type, timestamp)
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          12 months
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Auto-purged
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          API call logs
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          12 months
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Auto-purged
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Agent usage statistics
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          12 months
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Auto-purged
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Feature usage analytics
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          12 months (then anonymized indefinitely)
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Auto-purged
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Resource usage metrics (users, clients, agents,
                          projects, storage)
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          12 months
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Auto-purged
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Aggregated / anonymized analytics
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Indefinitely
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          N/A — no PII
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          {/* section 6 */}
          <section className="scroll-mt-8" id="security-audit">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Shield className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Security & Audit Data
                </h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
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
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Who can delete
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Audit logs (who did what, when)
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          24 months
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Immutable — cannot be deleted
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          IP address logs
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          90 days
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Auto-purged
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Error logs / crash reports
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          90 days
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Auto-purged
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Technical / server logs
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          90 days
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Auto-purged
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Security incident records
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          7 years
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          COVIS AI Legal team only
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Fraud investigation records
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Duration of investigation + 7 years
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          COVIS AI Legal team only
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Subscription status change history
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          24 months
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Immutable — audit trail
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="relative rounded-xl border py-4 pr-4 pl-5 bg-emerald-50 border-emerald-200 text-sm leading-relaxed">
                  <div className="absolute inset-y-0 left-0 w-1 rounded-full bg-gradient-to-b from-[#8500db] to-[#c500db] opacity-60"></div>
                  Audit logs are <strong>immutable</strong> — they cannot be
                  altered or deleted by any user, including Super Admins, to
                  ensure accountability and regulatory compliance.
                </div>
              </div>
            </div>
          </section>
          {/* section 7 */}
          <section className="scroll-mt-8" id="communication">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <span className="text-sm font-bold">7</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Communication Data
                </h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
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
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Who can delete
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Support tickets
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          3 years
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          COVIS AI Admin only
                        </td>
                      </tr>

                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Support ticket attachments
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          3 years
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          COVIS AI Admin only
                        </td>
                      </tr>

                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          In-app feedback
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          2 years
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          COVIS AI Admin only
                        </td>
                      </tr>

                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Email correspondence
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          3 years
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          COVIS AI Admin only
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          {/* section 8 */}
          <section className="scroll-mt-8" id="configurable">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Settings className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Tenant-Configurable Retention Settings
                </h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>
                  Company Admins may customize the following retention settings
                  from:{" "}
                  <strong>
                    Settings → Data &amp; Privacy → Retention Policy
                  </strong>
                </p>
                <h3 className="mt-3 font-semibold text-gray-900">
                  Chat & AI Output Retention
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-lg border px-3 py-1.5 text-xs font-medium border-gray-200 bg-gray-50 text-gray-600">
                    3 months
                  </span>
                  <span className="rounded-lg border px-3 py-1.5 text-xs font-medium border-gray-200 bg-gray-50 text-gray-600">
                    6 months
                  </span>
                  <span className="rounded-lg border px-3 py-1.5 text-xs font-medium border-[#8500db]/30 bg-[#8500db]/10 text-[#8500db]">
                    12 months (default)
                  </span>
                  <span className="rounded-lg border px-3 py-1.5 text-xs font-medium border-gray-200 bg-gray-50 text-gray-600">
                    24 months
                  </span>
                  <span className="rounded-lg border px-3 py-1.5 text-xs font-medium border-gray-200 bg-gray-50 text-gray-600">
                    Keep until manually deleted
                  </span>
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">
                  File & Document Retention
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-lg border px-3 py-1.5 text-xs font-medium border-gray-200 bg-gray-50 text-gray-600">
                    30 days after last access
                  </span>
                  <span className="rounded-lg border px-3 py-1.5 text-xs font-medium border-[#8500db]/30 bg-[#8500db]/10 text-[#8500db]">
                    12 months (default)
                  </span>
                  <span className="rounded-lg border px-3 py-1.5 text-xs font-medium border-gray-200 bg-gray-50 text-gray-600">
                    Keep until manually deleted
                  </span>
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">
                  Auto-Delete Inactive User Data
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-lg border px-3 py-1.5 text-xs font-medium border-gray-200 bg-gray-50 text-gray-600">
                    After 6 months of inactivity
                  </span>
                  <span className="rounded-lg border px-3 py-1.5 text-xs font-medium border-[#8500db]/30 bg-[#8500db]/10 text-[#8500db]">
                    After 12 months of inactivity (default)
                  </span>
                  <span className="rounded-lg border px-3 py-1.5 text-xs font-medium border-gray-200 bg-gray-50 text-gray-600">
                    Never auto-delete
                  </span>
                </div>
                <div className="relative rounded-xl border py-4 pr-4 pl-5 bg-amber-50 border-amber-200 text-sm leading-relaxed">
                  <div className="absolute inset-y-0 left-0 w-1 rounded-full bg-gradient-to-b from-[#8500db] to-[#c500db] opacity-60" />
                   Tenant-configured retention periods cannot override legally required minimums. For example, billing records must be kept for 7 years regardless of any Admin setting.
                </div>
              </div>
            </div>
          </section>
          {/* section 9 */}
          <section className="scroll-mt-8" id="deletion-tiers">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Users className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">Deletion Tiers — Who Can Delete What</h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-xl border border-gray-200">
                    <div className="bg-gradient-to-r px-4 py-3 from-blue-500 to-blue-600 text-white">
                      <p className="text-sm font-semibold">
                        Tier 1 — End User
                      </p>
                    </div>
                    <ul className="space-y-2 p-4">
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db]" />
                        Own chat history and messages
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db]" />
                        Own uploaded files and documents
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db]" />
                        Own profile data (name, avatar, preferences)
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db]" />
                        Own account (triggers Account Deletion Flow)
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db]" />
                        Own API keys (revocation)
                      </li>
                    </ul>
                  </div>
                  <div className="overflow-hidden rounded-xl border border-gray-200">
                    <div className="bg-gradient-to-r px-4 py-3 from-[#8500db] to-purple-600 text-white">
                      <p className="text-sm font-semibold">
                        Tier 2 — Company Admin
                      </p>
                    </div>
                    <ul className="space-y-2 p-4">
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db]" />
                        Any user's chat history within the workspace
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db]" />
                        All workspace files and AI-generated content
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db]" />
                        Invite and remove users (removal anonymizes shared records)
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db]" />
                        Workspace-level agent configurations and knowledge base
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db]" />
                        Full workspace deletion (triggers Workspace Deletion Flow)
                      </li>
                    </ul>
                  </div>
                  <div className="overflow-hidden rounded-xl border border-gray-200">
                    <div className="bg-gradient-to-r px-4 py-3 from-[#c500db] to-pink-600 text-white">
                      <p className="text-sm font-semibold">
                        Tier 3 — COVIS AI Super Admin
                      </p>
                    </div>
                    <ul className="space-y-2 p-4">
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db]" />
                        Process GDPR / regulatory erasure requests
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db]" />
                        Apply or release legal holds
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db]" />
                        Override retention schedules under court orders
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db]" />
                        Hard-delete billing records after legal hold period expires
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db]" />
                        Emergency deletion in the event of a data breach
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db]" />
                        Anonymize audit log PII on schedule
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* section 10 */}
          <section className="scroll-mt-8" id="legal-hold">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Shield className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">Legal Hold Policy</h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>
                  A legal hold suspends normal deletion schedules for data relevant to:
                </p>
                <ul className="space-y-2 mt-1">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0" />
                    <span>Active fraud investigations</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0" />
                    <span>Legal proceedings or court orders</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0" />
                    <span>Regulatory investigations</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0" />
                    <span>Unresolved billing disputes</span>
                  </li>
                </ul>
                <h3 className="mt-4 font-semibold text-gray-900">
                  Legal Hold Process
                </h3>
                <div className="mt-2 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#8500db] to-[#c500db] text-xs font-bold text-white">1</div>
                    <p className="text-sm text-gray-700">
                      A legal_hold: true flag is applied to affected records
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#8500db] to-[#c500db] text-xs font-bold text-white">2</div>
                    <p className="text-sm text-gray-700">
                      Normal automated deletion jobs skip legal-held records
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#8500db] to-[#c500db] text-xs font-bold text-white">3</div>
                    <p className="text-sm text-gray-700">
                      No user — including Super Admin — can delete held data
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#8500db] to-[#c500db] text-xs font-bold text-white">4</div>
                    <p className="text-sm text-gray-700">
                      The hold is lifted only by COVIS AI's Legal team
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#8500db] to-[#c500db] text-xs font-bold text-white">5</div>
                    <p className="text-sm text-gray-700">
                      Where legally permissible, the affected user/tenant is notified
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#8500db] to-[#c500db] text-xs font-bold text-white">6</div>
                    <p className="text-sm text-gray-700">
                      Once lifted, standard retention schedules resume (or data is deleted if past retention period)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* section 11 */}
          <section className="scroll-mt-8" id="automated-jobs">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Zap className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">Automated Deletion Jobs</h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <p className="mb-1 text-xs text-gray-500">
                  All automated jobs are logged. Failures trigger alerts to the infrastructure team.
                </p>
                <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#8500db]/8 to-purple-50/50">
                      <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                        Job Name
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                        Frequency
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                        Action
                      </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          purge-expired-sessions
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Hourly
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Delete all sessions past expiry time
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          purge-error-logs
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Daily
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Delete error / crash logs older than 90 days
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          purge-ip-logs
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Daily
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Delete IP and technical logs older than 90 days
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          purge-chat-history
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Daily
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Delete chat history past tenant retention setting
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          purge-call-logs
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Daily
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Delete call logs older than 12 months
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          purge-linkedin-data
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Daily
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Delete LinkedIn profile data for deleted accounts
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          purge-inactive-users
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Daily
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Anonymize users inactive beyond tenant setting
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          purge-deleted-accounts
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Daily
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Hard-delete accounts past 30-day grace period
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          purge-deleted-workspaces
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Daily
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Hard-delete workspaces past 30-day grace period
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          purge-token-logs
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Monthly
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Delete token usage logs older than 12 months
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          purge-resource-usage-logs
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Monthly
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Delete resource usage metrics older than 12 months
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          anonymize-audit-logs
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Monthly
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Replace PII in audit logs older than 12 months
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          purge-old-audit-logs
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Monthly
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Delete anonymized audit logs older than 24 months
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          purge-support-tickets
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Quarterly
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Delete resolved tickets older than 3 years
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          {/* section 12 */}
          <section className="scroll-mt-8" id="summary">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Clock className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">Key Retention Timeframes Summary</h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <div className="space-y-3">
                  <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-3">
                    <span className="rounded-lg px-3 py-1.5 text-xs font-bold whitespace-nowrap bg-gray-100 text-gray-700">
                      Immediately
                    </span>
                    <p className="text-sm text-gray-700">
                      Sessions revoked, login disabled on deletion request
                    </p>
                  </div>
                  <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-3">
                    <span className="rounded-lg px-3 py-1.5 text-xs font-bold whitespace-nowrap bg-blue-50 text-blue-700">
                      30 days
                    </span>
                    <p className="text-sm text-gray-700">
                      Grace period — user or tenant can cancel deletion request
                    </p>
                  </div>
                  <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-3">
                    <span className="rounded-lg px-3 py-1.5 text-xs font-bold whitespace-nowrap bg-red-50 text-red-700">
                      Day 31
                    </span>
                    <p className="text-sm text-gray-700">
                      Hard deletion executed for all eligible data
                    </p>
                  </div>
                  <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-3">
                    <span className="rounded-lg px-3 py-1.5 text-xs font-bold whitespace-nowrap bg-amber-50 text-amber-700">
                      90 days
                    </span>
                    <p className="text-sm text-gray-700">
                      Technical logs, IP logs, error logs auto-purged
                    </p>
                  </div>
                  <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-3">
                    <span className="rounded-lg px-3 py-1.5 text-xs font-bold whitespace-nowrap bg-[#8500db]/10 text-[#8500db]">
                      12 months
                    </span>
                    <p className="text-sm text-gray-700">
                      Chat history, files, call logs, token logs, AI outputs auto-purged
                    </p>
                  </div>
                  <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-3">
                    <span className="rounded-lg px-3 py-1.5 text-xs font-bold whitespace-nowrap bg-purple-50 text-purple-700">
                      24 months
                    </span>
                    <p className="text-sm text-gray-700">
                      Audit logs anonymized, then purged on rolling basis
                    </p>
                  </div>
                  <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-3">
                    <span className="rounded-lg px-3 py-1.5 text-xs font-bold whitespace-nowrap bg-indigo-50 text-indigo-700">
                      3 years
                    </span>
                    <p className="text-sm text-gray-700">
                      Support tickets and email correspondence deleted
                    </p>
                  </div>
                  <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-3">
                    <span className="rounded-lg px-3 py-1.5 text-xs font-bold whitespace-nowrap bg-emerald-50 text-emerald-700">
                      7 years
                    </span>
                    <p className="text-sm text-gray-700">
                      Billing / invoice records — legally cannot be deleted earlier
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* section 13 */}
          <section className="scroll-mt-8" id="changes">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <span className="text-sm font-bold">13</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900">Changes to This Policy</h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>
                  We reserve the right to update this policy. Material changes will be communicated via:
                </p>
                <ul className="space-y-2 mt-1">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0" />
                    <span>Email notification to Company Admins</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0" />
                    <span>In-app notification requiring acknowledgement</span>
                  </li>
                </ul>
                <p>
                  Previous versions are archived and available upon request at <strong>info@covis.ai</strong>
                </p>
              </div>
            </div>
          </section>
          {/* section 14 */}
          <section className="scroll-mt-8" id="contact">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Mail className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">Contact</h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                  <a href="mailto:info@covis.ai" className="group flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3 transition-all hover:border-[#8500db]/30 hover:bg-[#8500db]/5">
                                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#8500db]/15 to-[#c500db]/10">
                                  <Mail className="h-3.5 w-3.5 text-[#8500db]" />
                                  </div>
                                  <div>
                                    <p className="text-[10px] tracking-wider text-gray-500 uppercase">
                                      Data deletion requests
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
                                      Security issues
                                    </p>
                                    <p className="text-sm font-medium text-[#8500db] transition-colors group-hover:text-[#c500db]">
                                      info@covis.ai
                                    </p>
                                  </div>
                                  </a>
                                </div>
                                <p className="mt-4 text-xs text-gray-400">
                                  Response time: within 30 days
                                </p>
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
            <Link href="/deletion" className="group flex flex-col gap-1 rounded-xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:border-[#8500db]/40 hover:shadow-md">
            <span className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-[#8500db]">
              Data Deletion Policy →
            </span>
            <span className="text-xs text-gray-500">
              Step-by-step deletion flows
            </span>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
