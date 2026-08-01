import React from "react";
import Sidebar from "@/components/Sidebar";
import { deletionSidebarLinks } from "@/data/deleteSidebar";
import {
  Trash2,
  User,
  Building2,
  ShieldAlert,
  Download,
  Lock,
  Zap,
  Mail,
} from "lucide-react";
import Link from "next/link";

export default function DeleteMain() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex items-start gap-8">
        {/* sidebar */}
        <Sidebar
          title="GenericTable of Contents"
          links={deletionSidebarLinks}
        />
        <main className="min-w-0 flex-1 space-y-6">
          {/* section 1 */}
          <section className="scroll-mt-8" id="overview">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Trash2 className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">Overview</h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>
                  This policy defines the procedures for permanently deleting
                  personal data and business data from the COVIS AI platform. It
                  covers individual account deletion, full workspace deletion,
                  and formal GDPR erasure requests.
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
                <div className="relative rounded-xl border py-4 pr-4 pl-5 bg-red-50 border-red-200 text-sm leading-relaxed">
                  <div className="absolute inset-y-0 left-0 w-1 rounded-full bg-gradient-to-b from-[#8500db] to-[#c500db] opacity-60" />
                  <strong>Important:</strong> Deletion is permanent and
                  irreversible after the grace period. All data exports must be
                  requested <strong>before</strong> deletion is finalized on Day
                  31.
                </div>
              </div>
            </div>
          </section>
          {/* section 2 */}
          <section className="scroll-mt-8" id="account-deletion">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <User className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Account Deletion Flow (Individual User)
                </h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <div className="mt-2 space-y-4">
                  <div className="relative flex gap-4">
                    <div className="absolute top-10 bottom-[-16px] left-[18px] w-0.5 bg-gradient-to-b from-[#8500db]/40 to-transparent"></div>
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-sm font-bold text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                      1
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="mb-2 text-sm font-semibold text-gray-900">
                        Initiation
                      </h4>
                      <ul className="space-y-1.5">
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          Navigate to: Account Settings → Privacy → Delete My
                          Account
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          A confirmation modal is displayed with a 30-day grace
                          period warning
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          You must type your registered email address to confirm
                          the request
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative flex gap-4">
                    <div className="absolute top-10 bottom-[-16px] left-[18px] w-0.5 bg-gradient-to-b from-[#8500db]/40 to-transparent"></div>
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-sm font-bold text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                      2
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="mb-2 text-sm font-semibold text-gray-900">
                        Immediate Actions (at time of request)
                      </h4>
                      <ul className="space-y-1.5">
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          All active sessions revoked — you are logged out of
                          all devices
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          Login is disabled immediately
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          You are removed from all workspace member lists
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          Your name is replaced with "Deleted User" in all
                          shared records (comments, logs, assignments)
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          A deletion confirmation email is sent to your
                          registered address
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative flex gap-4">
                    <div className="absolute top-10 bottom-[-16px] left-[18px] w-0.5 bg-gradient-to-b from-[#8500db]/40 to-transparent"></div>
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-sm font-bold text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                      3
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="mb-2 text-sm font-semibold text-gray-900">
                        30-Day Grace Period
                      </h4>
                      <ul className="space-y-1.5">
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          All data is fully preserved during this window
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          You can cancel deletion by logging back in within 30
                          days
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          A reminder email is sent at day 25 warning that
                          deletion is imminent
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          A data export is available during this window
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative flex gap-4">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-sm font-bold text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                      4
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="mb-2 text-sm font-semibold text-gray-900">
                        Hard Deletion (Day 31)
                      </h4>
                      <ul className="space-y-1.5">
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          All eligible data is permanently and irreversibly
                          purged
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          A final deletion certificate email is sent with
                          details of what was deleted and what was retained
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mt-4">
                  What Happens to Your Data on Day 31
                </h3>
                <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#8500db]/8 to-purple-50/50">
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Data
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Profile data (name, email, photo, preferences)
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Permanently deleted
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Chat history and AI outputs
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Permanently deleted
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Uploaded files and documents
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Permanently deleted
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Knowledge base contributions
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Permanently deleted
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          LinkedIn profile imports
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Permanently deleted
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Call log entries
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Permanently deleted
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          API keys
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Revoked and purged
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Session history
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Purged
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Personal usage logs
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Purged
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Billing and invoice records
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          RETAINED — 7-year legal requirement
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Audit log entries
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          RETAINED but anonymized (name/email replaced with
                          anonymous ID)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          {/* section 3 */}
          <section className="scroll-mt-8" id="workspace-deletion">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Building2 className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Workspace / Tenant Deletion Flow
                </h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <div className="relative rounded-xl border py-4 pr-4 pl-5 bg-amber-50 border-amber-200 text-sm leading-relaxed">
                  <div className="absolute inset-y-0 left-0 w-1 rounded-full bg-gradient-to-b from-[#8500db] to-[#c500db] opacity-60"></div>
                  <strong>Warning:</strong> Workspace deletion affects{" "}
                  <strong>all users</strong> in the workspace. All team members,
                  professionals, clients, their data, agents, and configurations
                  will be permanently deleted. This action cannot be undone
                  after the 30-day grace period.
                </div>
                <div className="mt-2 space-y-4">
                  <div className="relative flex gap-4">
                    <div className="absolute top-10 bottom-[-16px] left-[18px] w-0.5 bg-gradient-to-b from-[#8500db]/40 to-transparent"></div>
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-sm font-bold text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                      1
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="mb-2 text-sm font-semibold text-gray-900">
                        Pre-Deletion Checklist
                      </h4>
                      <ul className="space-y-1.5">
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          Active subscription will be cancelled (effective end
                          of billing period)
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          All workspace users will lose access immediately
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          All chat history, files, agent configurations, and
                          content will be permanently deleted
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          Invoices and billing records are retained for 7 years
                          (legal requirement)
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          Audit logs are retained for 24 months in anonymized
                          form
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative flex gap-4">
                    <div className="absolute top-10 bottom-[-16px] left-[18px] w-0.5 bg-gradient-to-b from-[#8500db]/40 to-transparent"></div>
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-sm font-bold text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                      2
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="mb-2 text-sm font-semibold text-gray-900">
                        Confirmation
                      </h4>
                      <ul className="space-y-1.5">
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          The Company Admin must type the exact
                          workspace/company name to proceed
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          A second confirmation is required acknowledging that
                          this affects all users
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative flex gap-4">
                    <div className="absolute top-10 bottom-[-16px] left-[18px] w-0.5 bg-gradient-to-b from-[#8500db]/40 to-transparent"></div>
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-sm font-bold text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                      3
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="mb-2 text-sm font-semibold text-gray-900">
                        Immediate Actions
                      </h4>
                      <ul className="space-y-1.5">
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          All workspace users are logged out of all devices
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          All new logins to the workspace are blocked
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          Subscription is cancelled and all future renewals are
                          stopped
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          All API keys and integrations are deactivated
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          Workspace is marked as 'pending deletion' in the
                          system
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative flex gap-4">
                    <div className="absolute top-10 bottom-[-16px] left-[18px] w-0.5 bg-gradient-to-b from-[#8500db]/40 to-transparent"></div>
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-sm font-bold text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                      4
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="mb-2 text-sm font-semibold text-gray-900">
                        30-Day Grace Period
                      </h4>
                      <ul className="space-y-1.5">
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          All data is preserved for potential recovery
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          Only the Company Admin can request cancellation (via
                          email to info@covis.ai)
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          A read-only data export is available during this
                          window
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          A reminder email is sent at day 25
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative flex gap-4">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-sm font-bold text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                      5
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="mb-2 text-sm font-semibold text-gray-900">
                        Hard Deletion (Day 31)
                      </h4>
                      <ul className="space-y-1.5">
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          All workspace user accounts and profiles permanently
                          deleted
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          All chat history, AI outputs, and agent configurations
                          permanently deleted
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          All uploaded files, documents, and knowledge base
                          entries permanently deleted
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          All LinkedIn profile imports permanently deleted
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          Domain/subdomain association removed
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          Storage quota freed and released back to
                          infrastructure
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                          A final deletion certificate is emailed to the Company
                          Admin
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mt-4">
                  What Is Retained After Workspace Deletion
                </h3>
                <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#8500db]/8 to-purple-50/50">
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Data
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Retention
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Billing and invoice records
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          RETAINED — 7 years (legal requirement)
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Audit logs
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          RETAINED — 24 months, then purged
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Fraud / security investigation records
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          RETAINED — per legal hold schedule
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          {/* section 4 */}
          <section className="scroll-mt-8" id="gdpr-erasure">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Right to Erasure (GDPR Article 17)
                </h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <h3 className="font-semibold text-gray-900">
                  4.1 Submitting an Erasure Request
                </h3>
                <p>Requests may be submitted via:</p>
                <ul className="space-y-2 mt-1">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Account Settings → Privacy → Request Data Deletion
                      (authenticated users)
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Email: info@covis.ai — include your registered email and
                      full name
                    </span>
                  </li>
                </ul>
                <h3 className="font-semibold text-gray-900 mt-4">
                  4.2 Processing Timeline
                </h3>
                <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#8500db]/8 to-purple-50/50">
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Milestone
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Timeframe
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Automated acknowledgement email (with ticket number)
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Within 24 hours
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Identity verification completed
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Within 48 hours
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Legal hold check (fraud, disputes, court orders)
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Within 48 hours
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Full erasure completed
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Within 30 days
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Completion certificate issued
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          At time of erasure
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="font-semibold text-gray-900 mt-4">
                  4.3 What Cannot Be Erased (Legal Exceptions)
                </h3>
                <div className="relative rounded-xl border py-4 pr-4 pl-5 bg-amber-50 border-amber-200 text-sm leading-relaxed">
                  <div className="absolute inset-y-0 left-0 w-1 rounded-full bg-gradient-to-b from-[#8500db] to-[#c500db] opacity-60"></div>
                  The following data cannot be erased regardless of an erasure
                  request. When data cannot be erased, you will be notified in
                  writing of which specific data is retained, the legal reason,
                  and when it will be deleted (if applicable).
                </div>
                <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#8500db]/8 to-purple-50/50">
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Data
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Reason
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Retention
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Billing and invoice records
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Tax law compliance
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          7 years
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Fraud investigation records
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Legal obligation
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Duration + 7 years
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Data subject to active legal proceedings
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Court order / legal hold
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Duration of hold
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Anonymized / aggregated data
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          No longer personal data
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Indefinitely
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Security incident records
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Regulatory requirement
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          7 years
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Audit log entries (anonymized)
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Accountability &amp; compliance
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          24 months
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          {/* section 5 */}
          <section className="scroll-mt-8" id="data-export">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Download className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Data Export (Portability)
                </h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>
                  Before account or workspace deletion, you may download a full
                  data export containing all your data.
                </p>
                <h3 className="font-semibold text-gray-900 mt-3">
                  Export Package Contents
                </h3>
                <div className="bg-gray-900 rounded-xl p-4 mt-2 font-mono text-xs text-gray-300 overflow-x-auto">
                  <pre className="font-mono text-xs text-gray-300 whitespace-pre">{`covis-ai-export-[date].zip
├── profile.json              # account info, settings, preferences
├── chat_history/
│   ├── session_[id].json     # full chat logs with timestamps
│   └── ...
├── files/                    # all uploaded documents and files
├── generated_content/        # all AI-generated proposals and outputs
├── agent_configurations.json # custom AI agent settings
├── knowledge_base/           # knowledge base entries and documents
├── linkedin_profiles/        # imported LinkedIn profile data
├── call_logs.csv             # call log history with metadata
├── usage_logs.csv            # token and resource usage history
└── invoices/
    ├── invoice_[id].pdf
    └── ...`}</pre>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                  <div className="p-3 rounded-xl bg-[#8500db]/5 border border-[#8500db]/15">
                    <p className="text-[10px] font-semibold text-[#8500db] uppercase tracking-wider mb-1">
                      How to Export
                    </p>
                    <p className="text-xs text-gray-700">
                      Account Settings → Privacy → Export My Data
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#8500db]/5 border border-[#8500db]/15">
                    <p className="text-[10px] font-semibold text-[#8500db] uppercase tracking-wider mb-1">
                      Generation Time
                    </p>
                    <p className="text-xs text-gray-700">
                      Up to 24 hours for large workspaces
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#8500db]/5 border border-[#8500db]/15">
                    <p className="text-[10px] font-semibold text-[#8500db] uppercase tracking-wider mb-1">
                      Download Link Expiry
                    </p>
                    <p className="text-xs text-gray-700">
                      30 days before link expires
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* section 6 */}
          <section className="scroll-mt-8" id="legal-hold">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Lock className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Legal Hold Policy
                </h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>
                  A legal hold suspends normal deletion schedules for data
                  relevant to active fraud investigations, legal proceedings,
                  regulatory investigations, or unresolved billing disputes.
                </p>
                <div className="space-y-3 mt-3">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-[#8500db] to-[#c500db] text-white text-xs font-bold shrink-0 mt-0.5">
                      1
                    </div>
                    <p className="text-sm text-gray-700">
                      A legal_hold: true flag is applied to affected records
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-[#8500db] to-[#c500db] text-white text-xs font-bold shrink-0 mt-0.5">
                      2
                    </div>
                    <p className="text-sm text-gray-700">
                      Normal automated deletion jobs and user-initiated
                      deletions are blocked for held data
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-[#8500db] to-[#c500db] text-white text-xs font-bold shrink-0 mt-0.5">
                      3
                    </div>
                    <p className="text-sm text-gray-700">
                      No user — including Super Admin — can delete held data
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-[#8500db] to-[#c500db] text-white text-xs font-bold shrink-0 mt-0.5">
                      4
                    </div>
                    <p className="text-sm text-gray-700">
                      The hold is lifted only by COVIS AI's Legal team
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-[#8500db] to-[#c500db] text-white text-xs font-bold shrink-0 mt-0.5">
                      5
                    </div>
                    <p className="text-sm text-gray-700">
                      Where legally permissible, the affected user/tenant is
                      notified of the hold and estimated duration
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-[#8500db] to-[#c500db] text-white text-xs font-bold shrink-0 mt-0.5">
                      6
                    </div>
                    <p className="text-sm text-gray-700">
                      Once lifted, standard deletion can proceed (or data is
                      deleted immediately if past its retention period)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* section 7 */}
          <section className="scroll-mt-8" id="breach-protocol">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Zap className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Data Breach — Deletion & Notification Protocol
                </h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#8500db]/8 to-purple-50/50">
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Timeframe
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap text-gray-700 uppercase">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Hour 0
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Breach detected, affected data scope identified
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Hour 1
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Incident response team activated
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Hour 4
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Affected systems isolated, further exposure stopped
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Hour 4
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Compromised sessions and API tokens force-revoked
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Hour 24
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Internal impact assessment complete
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Hour 48
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Affected tenants and users notified via email + in-app
                          banner
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Hour 72
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Regulatory authority notified (GDPR requirement)
                        </td>
                      </tr>
                      <tr className="bg-gray-50/60">
                        <td className="px-4 py-3 align-top text-gray-700">
                          Day 30
                        </td>
                        <td className="px-4 py-3 align-top text-gray-700">
                          Full incident report published to all affected tenants
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="relative rounded-xl border py-4 pr-4 pl-5 bg-amber-50 border-amber-200 text-sm leading-relaxed">
                  <div className="absolute inset-y-0 left-0 w-1 rounded-full bg-gradient-to-b from-[#8500db] to-[#c500db] opacity-60"></div>
                  <strong>Upon breach notification:</strong> Affected users will
                  be required to reset their passwords on next login and
                  re-authorize any active API integrations. Report security
                  vulnerabilities immediately to <strong>info@covis.ai</strong>.
                </div>
              </div>
            </div>
          </section>
          {/* section 8 */}
          <section className="scroll-mt-8" id="changes">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <span className="text-sm font-bold">8</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Changes to this Policy
                </h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>
                  We reserve the right to update this policy. Material changes
                  will be communicated via email notification to Company Admins
                  and an in-app notification requiring acknowledgement.
                </p>
                <p className="mt-2">
                  Previous versions are archived and available upon request at{" "}
                  <strong>info@covis.ai</strong>.
                </p>
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
                <h2 className="text-lg font-bold text-gray-900">Contact</h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <a
                    href="mailto:info@covis.ai"
                    className="group flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3 transition-all hover:border-[#8500db]/30 hover:bg-[#8500db]/5"
                  >
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
                  <a
                    href="mailto:info@covis.ai"
                    className="group flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3 transition-all hover:border-[#8500db]/30 hover:bg-[#8500db]/5"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#8500db]/15 to-[#c500db]/10">
                      <Mail className="h-3.5 w-3.5 text-[#8500db]" />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-wider text-gray-500 uppercase">
                        GDPR erasure requests
                      </p>
                      <p className="text-sm font-medium text-[#8500db] transition-colors group-hover:text-[#c500db]">
                        info@covis.ai
                      </p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@covis.ai"
                    className="group flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3 transition-all hover:border-[#8500db]/30 hover:bg-[#8500db]/5"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#8500db]/15 to-[#c500db]/10">
                      <Mail className="h-3.5 w-3.5 text-[#8500db]" />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-wider text-gray-500 uppercase">
                        Legal holds & investigations
                      </p>
                      <p className="text-sm font-medium text-[#8500db] transition-colors group-hover:text-[#c500db]">
                        info@covis.ai
                      </p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@covis.ai"
                    className="group flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3 transition-all hover:border-[#8500db]/30 hover:bg-[#8500db]/5"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#8500db]/15 to-[#c500db]/10">
                      <Mail className="h-3.5 w-3.5 text-[#8500db]" />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-wider text-gray-500 uppercase">
                        Security incidents
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
              Step-by-step deletion flows
            </span>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
