"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Technology", href: "/technology" },
  { label: "Solutions", href: "/solutions" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      if (y > lastY.current && y > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastY.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 h-18
        flex items-center justify-between px-12
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

      {/* RIGHT: Nav + Button */}
      <div className="flex items-center gap-12">
        
        {/* Nav Items */}
        <div className="flex items-center gap-9">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
                relative text-[var(--color-light)] text-sm tracking-wide
                transition-colors duration-200 hover:text-[var(--color-primary)]

                after:absolute after:bottom-[-4px] after:left-0 after:right-0
                after:h-px after:bg-[var(--color-primary)] after:scale-x-0
                after:transition-transform after:duration-200 after:origin-left
                hover:after:scale-x-100
              "
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Button as="link" href="/contact">
          Contact Us
        </Button>

      </div>
    </nav>
  );
}