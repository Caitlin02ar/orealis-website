"use client";

import Button from "./Button";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 20%",
        onEnter: () => {
          gsap.to("body", {
            backgroundColor: "#0e1212",
            duration: 1.2,
            ease: "power2.inOut",
          });
        },
        onLeaveBack: () => {
          gsap.to("body", {
            backgroundColor: "#1F1F1F",
            duration: 1.2,
            ease: "power2.inOut",
          });
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
    id="contact"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden min-h-screen flex flex-col items-center justify-center"
    >
      <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center gap-6 mb-24">
        <h2 className="text-[var(--color-light)] text-3xl sm:text-5xl md:text-7xl font-semibold leading-tight">
          TURN FIBRE OPTIC DATA{" "}
          <br className="hidden md:block" />
          INTO ACTIONABLE INSIGHT
        </h2>

        <p className="text-[var(--color-light)] text-sm md:text-base max-w-md">
          Let&apos;s discuss how Orealis can support your infrastructure.
        </p>
      </div>

      <Button
        as="link"
        href="https://mail.google.com/mail/?view=cm&to=caitlinliadi@gmail.com&subject=Project Inquiry&body=Hello Rob,"
        target="_blank"
      >
        Contact Us
      </Button>

      <div className="email mt-16 flex items-center justify-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F4F4F4">
          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
          <rect x="2" y="4" width="20" height="16" rx="2" />
        </svg>
        <Link href="#" className="text-[var(--color-light)] text-sm md:text-base underline">
          rob.crawford@orealis.com.au
        </Link>
      </div>
    </section>
  );
}