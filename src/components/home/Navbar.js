import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="z-50 container mx-auto flex items-center justify-between px-6 py-6 lg:px-8 absolute top-0 right-0 left-0">
      <div className="flex items-center gap-3">
        <Link href="/">
          <Image
            src="/assets/mainLogo.webp"
            alt="Covis AI Logo"
            width={200}
            height={67}
            className="h-12 w-auto object-contain"
          />
        </Link>
      </div>

      {/* Menu */}
      <div className="flex items-center gap-4">
        <Link
          href="/pricing"
          className="text-sm font-semibold transition-colors hover:opacity-80 text-white/90 hover:text-white"
        >
          Pricing
        </Link>
        <Link
          href="/contact"
          className="text-sm font-semibold transition-colors hover:opacity-80 text-white/90 hover:text-white"
        >
          Contact
        </Link>
        <Link href="/signup">
          <div className="group/button relative">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:opacity-90 shadow-lg duration-300 hover:shadow-[0_0_30px_rgba(133,0,219,0.6)] hover:scale-[1.02] h-9 px-4 py-2 has-[>svg]:px-3 font-semibold text-white transition-colors bg-[#8500db] hover:bg-[#7500c2]">
              Sign Up Now
            </button>
          </div>
        </Link>
      </div>
    </header>
  );
}
