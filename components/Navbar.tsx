"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Applications", href:"#applications"},
  { label: "Technology", href: "#technology" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > lastY.current && y > 80) {
        setHidden(true);
        setMenuOpen(false);
      } else {
        setHidden(false);
      }
      lastY.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 h-18
          flex items-center justify-between px-6 md:px-12
          bg-[var(--color-dark-gray)]/85 backdrop-blur-md
          border-b border-white/[0.06]
          transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}
        `}
      >
        {/* LEFT: Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/orealis-project.webp"
            alt="Orealis Logo"
            width={120}
            height={32}
            priority
            className="h-8 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP: Nav + Button */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-9">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-[var(--color-light)] text-sm tracking-wide
                           transition-colors duration-200 hover:text-[var(--color-primary)]
                           after:bg-[var(--color-primary)]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <Button
                  as="link"
                  href="mailto:rob.crawford@orealis.com.au?subject=Project%20Inquiry&body=Hello%20Rob,"
                  
                >
                  Contact Us
                </Button>
        </div>

        {/* MOBILE: Hamburger */}
        <button
          className="md:hidden flex justify-center items-center w-10 h-10"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <div className={`flex flex-col gap-[6px] transition-all duration-500 ${menuOpen ? "rotate-90" : ""}`}>
            <span className="block h-[2px] w-6 bg-[var(--color-light)] rounded-full" />
            <span className="block h-[2px] w-6 bg-[var(--color-light)] rounded-full" />
            <span className="block h-[2px] w-6 bg-[var(--color-light)] rounded-full" />
          </div>
        </button>
      </nav>

      {/* MOBILE: Fullscreen Menu */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden
          bg-[var(--color-dark-gray)] backdrop-blur-md
          flex flex-col items-center justify-center gap-2
          transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="text-[var(--color-light)] text-2xl font-medium py-3
                       hover:text-[var(--color-primary)] transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}

        <div className="mt-8 w-full max-w-xs">
          <Button
                  as="link"
                  href="mailto:rob.crawford@orealis.com.au?subject=Project%20Inquiry&body=Hello%20Rob," >
                  Contact Us
                </Button>
        </div>
      </div>
    </>
  );
}