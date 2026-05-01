"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative bg-[var(--color-dark)] flex flex-col items-center justify-center overflow-hidden min-h-0 py-20 md:min-h-screen px-6">
      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center justify-center">
        
        <div className="mb-10">
          <Image
            src="/logo/orealis-project-logo.png"
            alt="Orealis"
            width={320}
            height={90}
            className="w-[240px] sm:w-[400px] md:w-[700px] h-auto object-contain pb-8 md:pb-12"
            priority
          />
        </div>

        <p className="text-[var(--color-light)] max-w-2xl 
            text-sm md:text-base leading-relaxed mb-6 font-light">
          We're a Perth-based{" "}
          <span className="font-bold">fibre optic specialist</span>{" "}
          with extensive experience across complex, multi-stakeholder
          projects in sectors including{" "}
          <span className="font-bold">superannuation, oil and gas, and infrastructure</span>.
        </p>

        <p className="text-[var(--color-light)] max-w-2xl 
            text-sm md:text-base leading-relaxed font-light">
          Through a combination of{" "}
          <span className="font-bold">sensing expertise</span>,{" "}
          <span className="font-bold">considered technology selection</span>, and{" "}
          <span className="font-bold">AI-driven analysis</span>, we deliver solutions that reduce operating costs
          and create immediate value.
        </p>
      </div>
    </section>
  );
}