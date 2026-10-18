"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  if (pathname === "/studio" || pathname.startsWith("/studio/")) return null;

  return (
    <header className="document-header">
      <a className="skip-link" href="#top">Skip to content</a>
      <Link className="site-name" href="/#top">mayshecodes</Link>
      <nav aria-label="Page sections">
        <Link href="/#projects">Projects</Link>
        <Link href="/#about">About</Link>
        <Link href="/#experience">Experience</Link>
        <Link href="/#education">Education</Link>
      </nav>
    </header>
  );
}
