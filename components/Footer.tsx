"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FOOTER_LINKS = {
  Home: [{ label: "Converting Light Into Insight", href: "#hero" }],
  About: [{ label: "Fibre optic specialist", href: "#about" }],
  "Our Solutions": [
    { label: "Installation", href: "#installation" },
    { label: "Light Transmission", href: "#light-transmission" },
    { label: "Backscatter Detection", href: "#backscatter-detection" },
    { label: "Environment Response", href: "#environmental-response" },
    { label: "Data Processing", href: "#data-processing" },
  ],
  Applications: [
    { label: "Pipelines", href: "#pipelines" },
    { label: "Rail & Haul Roads", href: "#rail" },
    { label: "Tunnels", href: "#tunnels" },
    { label: "Conveyors", href: "#conveyors" },
  ],
  "Our Technology": [
    { label: "CIQ - Conveyor Monitoring", href: "#ciq" },
    { label: "FlowProtect - Pipeline Leak Detection", href: "#flowprotect" },
  ],
  
  Contact: [{ label: "rob.crawford@orealis.com.au", href: "#contact" }],
};

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: footerRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(document.body, { backgroundColor: "#2D2D2D", duration: 1.2, ease: "power2.inOut" });
        },
        onLeaveBack: () => {
          gsap.to(document.body, { backgroundColor: "#0e1212", duration: 1.2, ease: "power2.inOut" });
        },
      });
    });
    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    let id = href.replace("#", "");
    const isMobile = window.innerWidth < 768;

    // Jika ini adalah bagian "Our Solutions", arahkan ke ID mobile jika di mobile
    const solutionIds = ["installation", "light-transmission", "backscatter-detection", "environmental-response", "data-processing"];
    if (isMobile && solutionIds.includes(id)) {
      id = `${id}-mobile`;
    }

    const element = document.getElementById(id);

    if (element) {
      // Sangat Penting: Refresh ScrollTrigger agar kalkulasi posisi tepat
      ScrollTrigger.refresh();

      const offset = isMobile ? 80 : 120; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      window.location.hash = href;
    }
  };

  return (
    <footer ref={footerRef} className="pt-12">
      <div className="max-w-8xl mx-auto px-6 mb-8 md:pl-16">
        <Image src="/logo/orealis-project.webp" alt="Orealis" width={240} height={64} className="h-16 w-auto object-contain" />
      </div>

      <div className="w-full pb-32">
        <div className="max-w-8xl mx-auto px-6 py-6 md:pl-16 flex flex-col gap-y-10 md:flex-row md:flex-wrap md:justify-between md:gap-8">
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-2 min-w-[120px]">
              <p className="text-[var(--color-light)] text-lg font-bold tracking-wider uppercase">{category}</p>
              {links.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-[var(--color-light)] text-sm hover:text-[var(--color-primary)] transition-colors text-left duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-[var(--color-dark-gray)] py-4">
        <div className="max-w-8xl mx-auto px-6 flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-[var(--color-light)] text-sm font-sans">
            <span className="font-bold">Orealis Pty Ltd</span> | ABN 22 688 011 403 | © 2026 Orealis.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[var(--color-light)] text-lg hover:text-[var(--color-primary)] transition-colors flex items-center gap-1"
          >
            Back to top
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m18 15-6-6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}