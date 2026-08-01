import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0a0a0c]">
        <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-[#8500db] to-transparent"></div>
        <div className="pointer-events-none absolute top-0 left-1/2 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-[#8500db]/8 blur-3xl"></div>
        <div className="pointer-events-none absolute bottom-0 left-0 h-[200px] w-[300px] rounded-full bg-[#8500db]/5 blur-3xl"></div>
        <div className="pointer-events-none absolute right-0 bottom-0 h-[200px] w-[300px] rounded-full bg-[#c500db]/5 blur-3xl"></div>
        <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-2 lg:grid-cols-5">
                <div className="flex flex-col gap-6 lg:col-span-3">
                    <div className="flex items-center gap-3">
                        <Image src="/assets/mainLogo.webp" alt="Covis Logo" width={140} height={38}/>
                    </div>
                    <p className="max-w-sm text-sm leading-relaxed text-gray-400">
                        An AI-powered multi-tenant SaaS platform built for enterprises — unifying intelligent agents, proposal intelligence, client management, and workforce collaboration in one platform.
                    </p>
                    <div className="h-px w-16 bg-gradient-to-r from-[#8500db] to-transparent"></div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                        <span className="h-4 w-1 rounded-full bg-gradient-to-b from-[#8500db] to-[#c500db]"></span>
                        <h3 className="text-xs font-bold tracking-widest text-[#8500db] uppercase">
                            Platform
                        </h3>
                    </div>
                    <ul className="space-y-3">
                        <li>
                            <Link href="/signup" className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-white">
                                <span className="inline-block h-0.5 w-0 bg-[#8500db] transition-all duration-300 group-hover:w-3"></span>
                                Create Account
                            </Link>
                        </li>
                        <li>
                            <Link href="/pricing" className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-white">
                                <span className="inline-block h-0.5 w-0 bg-[#8500db] transition-all duration-300 group-hover:w-3"></span>
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-white">
                                <span className="inline-block h-0.5 w-0 bg-[#8500db] transition-all duration-300 group-hover:w-3"></span>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                        <span className="h-4 w-1 rounded-full bg-gradient-to-b from-[#8500db] to-[#c500db]"></span>
                        <h3 className="text-xs font-bold tracking-widest text-[#8500db] uppercase">
                            Legal
                        </h3>
                    </div>
                    <ul className="space-y-3">
                        <li>
                            <Link href="/privacy-policy" className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-white">
                                <span className="inline-block h-0.5 w-0 bg-[#8500db] transition-all duration-300 group-hover:w-3"></span>
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/service" className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-white">
                                <span className="inline-block h-0.5 w-0 bg-[#8500db] transition-all duration-300 group-hover:w-3"></span>
                                Terms of Service
                            </Link>
                        </li>
                        <li>
                            <Link href="/cookie" className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-white">
                                <span className="inline-block h-0.5 w-0 bg-[#8500db] transition-all duration-300 group-hover:w-3"></span>
                                Cookie Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/retention" className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-white">
                                <span className="inline-block h-0.5 w-0 bg-[#8500db] transition-all duration-300 group-hover:w-3"></span>
                                Data Retention
                            </Link>
                        </li>
                        <li>
                            <Link href="/deletion" className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-white">
                                <span className="inline-block h-0.5 w-0 bg-[#8500db] transition-all duration-300 group-hover:w-3"></span>
                                Data Deletion
                            </Link>
                        </li>
                        <li>
                            <Link href="/refund" className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-white">
                                <span className="inline-block h-0.5 w-0 bg-[#8500db] transition-all duration-300 group-hover:w-3"></span>
                                Refund Policy
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mb-6 h-px bg-gradient-to-r from-transparent via-[#8500db]/40 to-transparent"></div>
            <div className="mb-6 flex items-center justify-center gap-2.5">
                <Image src="/assets/taqwi.webp" alt="Covis Logo" width={72} height={24} className="opacity-70 " />
                <p className="text-xs text-gray-500">
                    is the official publisher of Covis AI on the App Store and Google Play.
                </p>
            </div>
            <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
                <p className="text-xs text-gray-500">
                    Questions?&nbsp;
                    <a href="mailto:support@covis.ai" className="font-medium text-[#8500db] hover:underline">
                        info@covis.ai
                    </a>
                </p>
                <p className=" text-xs text-gray-500">
                    © 2026
                    <span className="font-semibold text-[#8500db]">
                        COVIS AI
                    </span>
                     — a product of XEVEN SOLUTIONS PVT LTD. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}
