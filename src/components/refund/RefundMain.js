import React from "react";
import Sidebar from "@/components/Sidebar";
import { refundSidebarLinks } from "@/data/refundSidebar";
import {
  FileText,
  Sparkles,
  RefreshCw,
  CircleCheck,
  CircleX,
  Clock,
  Mail,
} from "lucide-react";
import Link from "next/link";

export default function RefundMain() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex items-start gap-8">
        {/* sidebar */}
        <Sidebar title="GenericTable of Contents" links={refundSidebarLinks} />
        <main className="min-w-0 flex-1 space-y-6">
          {/* section 1 */}
          <section className="scroll-mt-8" id="overview">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <FileText className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">Overview</h2>
              </div>
              <div className="p-6 space-y-5 text-gray-700 text-sm leading-relaxed">
                <p>
                  <strong>COVIS AI</strong> offers subscription-based access to
                  an AI-powered, multi-tenant SaaS platform. Because we want you
                  to be sure before you ever pay, every plan begins with a{" "}
                  <strong>free trial</strong> — so you can explore COVIS AI
                  fully and decide with zero risk.
                </p>
                <p>
                  Subscription payments are processed securely by{" "}
                  <strong>Stripe</strong>. COVIS AI is operated by{" "}
                  <strong>XEVEN SOLUTIONS PVT LTD</strong>, which is the seller
                  of your subscription; Stripe handles the payment on our
                  behalf. Your receipt, invoice, and card or bank statement will
                  show the charge from <strong>XEVEN SOLUTIONS PVT LTD</strong>{" "}
                  — not "COVIS AI" — so please look for that name when reviewing
                  your payment.
                </p>
              </div>
            </div>
          </section>
          {/* section 2 */}
          <section className="scroll-mt-8" id="free-trial">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Try Before You Subscribe — Free Trial
                </h2>
              </div>
              <div className="p-6 space-y-5 text-gray-700 text-sm leading-relaxed">
                <p>
                  We give you a <strong>free trial</strong> with access to all
                  COVIS AI features, so you can evaluate the platform in full
                  before any charge is made. The trial length depends on the
                  plan you select and is shown at checkout. We only verify your
                  card without any charge. You will not pay until the trial
                  ends, or until you choose to end the trial early and start
                  your subscription.
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      You will not pay until your free trial ends, or until you
                      choose to end the trial early and start your subscription.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      We only verify your card without any charge during the
                      trial.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      You can cancel any time before the trial ends and you will
                      owe nothing.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      If you do not cancel before the trial ends (or you choose
                      to start your subscription early), your payment method is
                      charged for the first billing period. We will remind you
                      before this happens where required.
                    </span>
                  </li>
                </ul>
                <div className="relative rounded-xl border py-4 pr-4 pl-5 bg-emerald-50 border-emerald-200 text-emerald-800 text-sm leading-relaxed">
                  <div className="absolute inset-y-0 left-0 w-1 rounded-full bg-current opacity-40"></div>
                  The free trial exists so you can make an informed decision{" "}
                  <em>before</em> you pay. For that reason, paid subscriptions
                  are non-refundable — see <em>Refunds</em> below.
                </div>
              </div>
            </div>
          </section>
          {/* section 3 */}
          <section className="scroll-mt-8" id="subscriptions-billing">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <RefreshCw className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Subscriptions & Billing
                </h2>
              </div>
              <div className="p-6 space-y-5 text-gray-700 text-sm leading-relaxed">
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Your subscription starts when your free trial ends (or
                      when you choose to subscribe directly).
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Subscriptions renew automatically at the end of each
                      billing period until you cancel.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      After each subscription payment is charged, we send a
                      confirmation of the payment to your registered email so
                      you always know your billing status.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      If your subscription price ever changes, we will notify
                      you to the extent required by applicable law and
                      payment-network rules before the new price applies.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* section 4 */}
          <section className="scroll-mt-8" id="refunds">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <CircleCheck className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">Refunds</h2>
              </div>
              <div className="p-6 space-y-5 text-gray-700 text-sm leading-relaxed">
                <p>
                  <strong>
                    Because every subscription is preceded by a free trial that
                    lets you evaluate COVIS AI in full, paid subscription
                    charges are non-refundable.
                  </strong>{" "}
                  This includes both your first paid period and any subsequent
                  renewal.
                </p>
                <p>
                  If you no longer wish to continue, you can cancel at any time
                  (see <em>Cancellation</em> below) to stop all future charges —
                  but charges already made for the current period are not
                  refunded.
                </p>
                <h3 className="mt-2 text-sm font-semibold text-gray-900">
                  Exceptions we will always honour
                </h3>
                <p>
                  We keep the rule above simple, but we will always issue a
                  refund or correction in these limited cases:
                </p>
                <div className="space-y-3">
                  <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                    <p className="text-sm font-semibold text-gray-900">
                      Billing errors
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      Such as a duplicate charge, an incorrect amount, or a
                      charge taken after you had already cancelled.
                    </p>
                  </div>
                  <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                    <p className="text-sm font-semibold text-gray-900">
                      Service failure
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      If a technical fault on our side prevents you from
                      meaningfully using the service you paid for and we are
                      unable to resolve it within a reasonable time.
                    </p>
                  </div>
                  <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                    <p className="text-sm font-semibold text-gray-900">
                      Your statutory rights
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      Nothing in this policy limits any refund or cancellation
                      right you are entitled to under the consumer-protection
                      laws of your country. Where those laws grant you a right
                      to a refund, we honour it.
                    </p>
                  </div>
                </div>
                <div className="relative rounded-xl border py-4 pr-4 pl-5 bg-[#8500db]/5 border-[#8500db]/20 text-[#8500db] text-sm leading-relaxed">
                  <div className="absolute inset-y-0 left-0 w-1 rounded-full bg-current opacity-40"></div>
                  The three cases above are always refunded{" "}
                  <strong>in full</strong>.
                </div>
                <h3 className="mt-2 text-sm font-semibold text-gray-900">
                  Goodwill refunds
                </h3>
                <p>
                  Outside the situations above, refunds are made at our
                  discretion. If we choose to grant a discretionary refund as a
                  goodwill gesture, the amount returned may be reduced by the
                  payment-processing fees already charged on your original
                  payment. These fees are retained by our payment provider and
                  are not returned to us when a refund is issued, so they cannot
                  be included in a discretionary refund.
                </p>
              </div>
            </div>
          </section>
          {/* section 5 */}
          <section className="scroll-mt-8" id="cancellations">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <CircleX className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Cancellation
                </h2>
              </div>
              <div className="p-6 space-y-5 text-gray-700 text-sm leading-relaxed">
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      You can cancel your subscription at any time from your
                      portal settings or by emailing support@covis.ai.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      Cancelling stops all future renewals and charges.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8500db] to-[#c500db] shrink-0"></span>
                    <span>
                      You keep access to your paid features until the end of the
                      billing period you have already paid for.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* section 6 */}
          <section className="scroll-mt-8" id="processing">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Clock className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  How Approved Refunds Are Processed
                </h2>
              </div>
              <div className="p-6 space-y-5 text-gray-700 text-sm leading-relaxed">
                <p>
                  Where a refund is issued under the exceptions above, it is
                  returned to your original payment method via Stripe. Refunds
                  for billing errors, service failure, or your statutory rights
                  are returned in full; discretionary goodwill refunds may be
                  net of the original processing fees, as explained above. The
                  time to receive funds depends on your bank or card provider —
                  typically <strong>5–10 business days</strong>. These timelines
                  are set by your provider and are outside our direct control.
                  If an approved refund has not reached you after 10 business
                  days, contact us with your order number.
                </p>
              </div>
            </div>
          </section>
          {/* section 7 */}
          <section className="scroll-mt-8" id="contact">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#8500db]/5 via-purple-50/30 to-transparent border-b border-gray-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#8500db] to-[#c500db] text-white shadow-[0_4px_12px_rgba(133,0,219,0.3)]">
                  <Mail className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">Contact Us</h2>
              </div>
              <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>Questions about billing, cancellations, or refunds?</p>
                <Link
                  href="mailto:support@covis.ai"
                  className="group mt-3 flex w-full items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4 transition-all hover:border-[#8500db]/30 hover:bg-[#8500db]/5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#8500db]/15 to-[#c500db]/10">
                    <Mail className="h-3.5 w-3.5 text-[#8500db]" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-wider text-gray-500 uppercase">
                      Email
                    </p>
                    <p className="text-sm font-semibold text-[#8500db] transition-colors group-hover:text-[#c500db]">
                      support@covis.ai
                    </p>
                  </div>
                </Link>
                <p className="mt-4 text-xs text-gray-400">
                  Please include the email address registered to your account
                  and your order or invoice number.
                </p>
              </div>
            </div>
          </section>
          <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/service"
              className="group flex flex-col gap-1 rounded-xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:border-[#8500db]/40 hover:shadow-md"
            >
              <span className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-[#8500db]">
                Terms of Service →
              </span>
              <span className="text-xs text-gray-500">
                Usage rules and obligations
              </span>
            </Link>
            <Link
              href="/privacy-policy"
              className="group flex flex-col gap-1 rounded-xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:border-[#8500db]/40 hover:shadow-md"
            >
              <span className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-[#8500db]">
                Privacy Policy →
              </span>
              <span className="text-xs text-gray-500">
                How we handle your data
              </span>
            </Link>
            <Link
              href="/cookie"
              className="group flex flex-col gap-1 rounded-xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:border-[#8500db]/40 hover:shadow-md"
            >
              <span className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-[#8500db]">
                Cookie Policy →
              </span>
              <span className="text-xs text-gray-500">How we use cookies</span>
            </Link>
            <Link
              href="/retention"
              className="group flex flex-col gap-1 rounded-xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:border-[#8500db]/40 hover:shadow-md"
            >
              <span className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-[#8500db]">
                Data Retention →
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
