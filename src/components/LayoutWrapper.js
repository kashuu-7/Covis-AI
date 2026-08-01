"use client";

import { usePathname } from "next/navigation";
import Footer from "../components/home/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // Jin pages par footer nahi chahiye
  const hideFooter = ["/signup"].includes(pathname);

  return (
    <>
      {children}
      {!hideFooter && <Footer />}
    </>
  );
}