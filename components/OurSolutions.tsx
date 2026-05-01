"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    step: 1,
    title: "Installation",
    icon: "/photos/solutions-1.png",
    subtitle: "Fibre as a continuous sensor",
    description:
      "Fibre as a continuous sensor. Fibre optic cable is installed along the asset, enabling continuous monitoring along its entire length.",
  },
  {
    step: 2,
    title: "Light Transmission",
    icon: "/photos/solutions-2.png",
    subtitle: "Light travels through the fibre",
    description:
      "Light travels through the fibre. A laser signal travels continuously through the fibre optic cable.",
  },
  {
    step: 3,
    title: "Backscatter Detection",
    icon: "/photos/solutions-3.png",
    subtitle: "Light scattered back from imperfections",
    description:
      "Reflected signals return. Light scattered back from imperfections in the fibre is continuously monitored.",
  },
  {
    step: 4,
    title: "Environmental Response",
    icon: "/photos/solutions-4.png",
    subtitle: "Changes in the environment",
    description:
      "Changes are detected along the asset. Changes in strain or stress along the fibre alter measurable variations of the backscattered signals.",
  },
  {
    step: 5,
    title: "Data Processing",
    icon: "/photos/solutions-5.png",
    subtitle: "Analyzing the data",
    description:
      "Insights from sensing technologies. Combines Distributed Acoustic Sensing (DAS), Distributed Temperature Sensing (DTS), and Distributed Strain Sensing (DSS). Low-intrusivity light makes this system safe for use in hazardous environments.",
  },
];

export default function OurSolutions() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileRowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        // Mobile: tiap row muncul sendiri saat scroll
        gsap.set(mobileRowRefs.current, { opacity: 0, y: 32 });

        mobileRowRefs.current.forEach((row) => {
          gsap.to(row, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        });
      } else {
        // Desktop: line progress + icon/content stagger
        const totalSteps = STEPS.length;

        gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" });
        gsap.set(iconRefs.current, { opacity: 0, y: 20 });
        gsap.set(contentRefs.current, { opacity: 0, y: 24 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none none",
          },
        });

        STEPS.forEach((_, i) => {
          const progress = (i + 1) / totalSteps;

          tl.to(
            lineRef.current,
            { scaleX: progress, duration: 0.55, ease: "power2.inOut" },
            i === 0 ? ">" : "-=0.1"
          );

          tl.to(
            iconRefs.current[i],
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
            "<0.2"
          );

          tl.to(
            contentRefs.current[i],
            { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" },
            "<0.1"
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
<section id="solutions" ref={sectionRef} className="bg-[var(--color-dark-gray)] pt-10 pb-24 md:py-24 px-6">      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <h2 className="text-white text-3xl md:text-5xl font-semibold mb-3">
            OUR SOLUTIONS
          </h2>
          <p className="text-[var(--color-light)] text-md max-w-xs">
            Turn fibre optic sensing data into real-time, actionable insight.
          </p>
        </div>

        {/* ── MOBILE LAYOUT ── */}
        <div className="flex flex-col gap-8 mt-10 md:hidden">
          {STEPS.map((s, i) => (
            <div
              key={s.step}
               id={s.title.toLowerCase().replace(/\s+/g, "-")}
              ref={(el) => { mobileRowRefs.current[i] = el; }}
              className="scroll-mt-32 flex items-start gap-8"
            >
              {/* Icon kiri */}
              <div className="flex-shrink-0">
                <Image
                  src={s.icon}
                  alt={s.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>

              {/* Content kanan */}
              <div className="flex flex-col gap-1">
                <p className="text-[#BFBFBF] text-xs font-semibold tracking-widest">
                  Step {s.step}
                </p>
                <h3 className="text-white text-lg font-medium">{s.title}</h3>
                <p className="text-[var(--color-light)] text-sm font-medium mt-1">
                  {s.subtitle}
                </p>
                <p className="text-[var(--color-light)] text-sm leading-relaxed font-light mt-1">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── DESKTOP LAYOUT ── */}
        <div className="hidden md:block">
          {/* Connector line + icons row */}
          <div className="relative flex items-center justify-between mb-12 mt-10 px-2">
            <div className="absolute top-1/2 left-0 right-0 h-px" />
          </div>

          <div className="grid grid-cols-5 gap-16">
            {STEPS.map((s, i) => (
              <div
                key={s.step}
                 id={s.title.toLowerCase().replace(/\s+/g, "-")}
                ref={(el) => { iconRefs.current[i] = el; }}
                className="scroll-mt-32 relative z-10 flex flex-col items-center justify-center gap-2"
              >
                <Image
                  src={s.icon}
                  alt={s.title}
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>
            ))}

            <div className="col-span-5 relative h-0 my-2">
              <div
                ref={lineRef}
                className="absolute left-1/2 -translate-x-1/2 w-screen h-px bg-[#FFFFFF]"
              />
            </div>

            {STEPS.map((s, i) => (
              <div
                key={s.step}
                ref={(el) => { contentRefs.current[i] = el; }}
                className="flex flex-col gap-4"
              >
                <div className="flex flex-col gap-1">
                  <p className="text-[#BFBFBF] text-sm font-semibold tracking-widest">
                    Step {s.step}
                  </p>
                  <h3 className="text-white text-[1.5rem] font-medium">
                    {s.title}
                  </h3>
                </div>

                <div className="flex flex-col gap-3">
                  <p className="text-[var(--color-light)] text-lg font-medium max-w-xs">
                    {s.subtitle}
                  </p>
                  <p className="text-[var(--color-light)] text-md leading-relaxed font-light max-w-xs">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}