"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const REASONS = [
  {
    id: "practical",
    title: "Practical Problem Solvers",
    icon: "/photos/whys-1.png",
    description:
      "Combining fibre optic sensing expertise with AI to deliver practical, real-world solutions that improve asset performance.",
  },
  {
    id: "industry",
    title: "Deep Industry Experience",
    icon: "/photos/whys-2.png",
    description:
      "Extensive experience across oil and gas, structural monitoring, and global fibre optic networks.",
  },
  {
    id: "ai",
    title: "AI-Driven Capability",
    icon: "/photos/whys-3.png",
    description:
      "AI-focused approach to ensure productivity across sectors including defence, infrastructure, and construction.",
  },
  {
    id: "solutions",
    title: "Solutions Built for You",
    icon: "/photos/whys-4.png",
    description:
      "Design and implementing systems tailored to your specific operations.",
  },
];

export default function WhyOrealis() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(cardRefs.current, { opacity: 0, y: 40 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "bottom 80%",
        end: "bottom 20%",
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

      gsap.to(cardRefs.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto py-12">
        <h2 className="text-white text-3xl md:text-5xl font-semibold mb-12">
          WHY OREALIS
        </h2>

        <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-6">
          {REASONS.map((reason, i) => (
            <div
              key={reason.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="
                group relative rounded-2xl overflow-hidden
                bg-[var(--color-gray-dark)]
                flex items-center
                min-h-[130px] sm:h-auto sm:min-h-[200px]
                p-5 sm:p-8 sm:pb-12 sm:pl-12
              "
            >
              {/* TEXT */}
              {/* TEXT */}
<div className="relative z-10 flex flex-col justify-center pr-[120px] sm:pr-0">
  <h3 className="text-[var(--color-light)] font-medium mb-1 sm:mb-3
                 text-base sm:text-[1.75rem]
                 sm:max-w-[50%]
                 leading-tight">
    {reason.title}
  </h3>
  <p className="text-[var(--color-light)] leading-relaxed font-light
                text-xs sm:text-md
                sm:max-w-[55%]">
    {reason.description}
  </p>
</div>

              {/* ICON */}
              <div className="absolute top-0 right-0
                              w-[110px] h-[110px]
                              sm:w-[200px] sm:h-[200px]
                              pointer-events-none">
                <Image
                  src={reason.icon}
                  alt={reason.title}
                  fill
                  className="object-contain object-top-right"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}