"use client";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
export default function ConditionalLayoutWrapper({ children, footerSections }) {
  const pathname = usePathname();
  const noHeaderFooterPaths = ["/login"];
  const hideHeaderFooter = noHeaderFooterPaths.includes(pathname);
  return (
    <>
      {!hideHeaderFooter && <Header />}
         <main>{children}</main>
      {!hideHeaderFooter && <Footer sections={footerSections} />}
    </>
  );
}