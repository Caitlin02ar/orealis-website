"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FOOTER_LINKS = {
  Home: [
    { label: "Converting Light Into Insight", href: "#hero" },
  ],
  About: [
    { label: "Fibre optic specialist", href: "#about" },
  ],
  "Our Technology": [
    { label: "CIQ - Conveyor Monitoring", href: "/technology#ciq" },
    { label: "FlowProtect - Pipeline Leak Detection", href: "/technology#flowprotect" },
  ],
    Applications: [
    { label: "Pipelines",      href: "#pipelines" },
    { label: "Rail & Haul Roads", href: "#rail" },
    { label: "Tunnels",        href: "#tunnels" },
    { label: "Conveyors",      href: "#conveyors" },
    ],
    "Our Solutions": [
    { label: "Installation",        href: "/#installation" },
    { label: "Light Transmission",  href: "/#light-transmission" },
    { label: "Backscatter Detection", href: "/#backscatter-detection" },
    { label: "Environment Response", href: "/#environmental-response" },
    { label: "Data Processing",     href: "/#data-processing" },
    ],
  Contact: [
    { label: "rob.crawford@orealis.com.au", href: "#contact" },
  ],
};

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: footerRef.current,
        start: "top 80%",
        end: "top 20%",
        onEnter: () => {
          gsap.to("body", {
            backgroundColor: "#2D2D2D",
            duration: 1.2,
            ease: "power2.inOut",
          });
        },
        onLeaveBack: () => {
          gsap.to("body", {
            backgroundColor: "#0e1212",
            duration: 1.2,
            ease: "power2.inOut",
          });
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="pt-12">
      {/* Logo */}
      <div className="max-w-8xl mx-auto px-6 mb-8 md:pl-16">
        <Image
          src="/logo/orealis-project.webp"
          alt="Orealis"
          width={240}
          height={64}
          className="h-25 w-auto object-contain"
        />
      </div>

      {/* Links */}
      <div className="w-full pb-32">
        <div className="max-w-8xl mx-auto px-6 py-6 md:pl-16
                flex flex-col gap-y-10
                md:flex-row md:flex-wrap md:justify-between md:gap-8">
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-2 min-w-[120px]">
              <p className="text-[var(--color-light)] text-lg font-bold tracking-wider uppercase">
                {category}
              </p>
              {links.map((link) => (
               <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                    setTimeout(() => {
                    window.history.replaceState(null, "", window.location.pathname);
                    }, 300);
                }}
                className="text-[var(--color-light)] text-sm"
                >
                {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full bg-[var(--color-dark-gray)] py-4">
        <div className="max-w-8xl mx-auto px-6 flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
            
            <p className="text-[var(--color-light)] text-sm font-sans text-left">
            <span className="font-bold">Orealis Pty Ltd</span>
            &nbsp;|&nbsp; ABN 22 688 011 403 &nbsp;|&nbsp; © 2026 Orealis. All rights reserved.
            </p>

            <button
            onClick={() => {
                window.history.replaceState(null, "", " ");
                window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-[var(--color-light)] text-lg hover:text-[var(--color-primary)] transition-colors flex items-center gap-1"
            >
            Back to top
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m18 15-6-6-6 6" />
            </svg>
            </button>

        </div>
        </div>
    </footer>
  );
}