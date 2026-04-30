"use client";

import Button from "./Button";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative bg-[#0e1212] py-32 px-6 overflow-hidden min-h-screen flex flex-col items-center justify-center">
      <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center gap-6 mb-24">
        <h2 className="text-[var(--color-light)] text-4xl md:text-7xl font-semibold leading-tight whitespace-nowrap">
          TURN FIBRE OPTIC DATA <br className="hidden md:block" />
          INTO ACTIONABLE INSIGHT
        </h2>

        <p className="text-[var(--color-light)] text-sm md:text-base max-w-md">
          Let&apos;s discuss how Orealis can support your infrastructure.
        </p>
      </div>
      <Button as="link" href="/contact">
          Contact Us
        </Button>
        <div className="email mt-16 flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F4F4F4"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
            <Link href="#" className="text-[var(--color-light)] underline">
                rob.crawford@orealis.com.au
            </Link>
        </div>
    </section>
  );
}