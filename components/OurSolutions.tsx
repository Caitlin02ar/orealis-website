"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Step = {
  step: number;
  title: string;
  icon: string;
  subtitle: string;
  description: string;
  bullets?: string[];
  footer?: string;
};

const STEPS: Step[] = [
  {
    step: 1,
    title: "Installation",
    icon: "/photos/solutions-1.png",
    subtitle: "Fibre as a continuous sensor",
    description:
      "Fibre optic cable is installed on or near the linear asset, enabling continuous monitoring along its entire length",
  },
  {
    step: 2,
    title: "Light Transmission",
    icon: "/photos/solutions-2.png",
    subtitle: "Light travels through the fibre",
    description:
      "An interrogator sends light pulses through the fibre optic cable.",
  },
  {
    step: 3,
    title: "Backscatter Detection",
    icon: "/photos/solutions-3.png",
    subtitle: "Light scattered back from imperfections",
    description:
      "Light reflections (backscatter) travel back to the interrogator and are continuously measured.",
  },
  {
    step: 4,
    title: "Environmental Response",
    icon: "/photos/solutions-4.png",
    subtitle: "Changes in the environment",
    description:
      "Changes in temperature, vibration, or strain along the fibre cause measurable variations in the backscatter signal.",
  },
  {
    step: 5,
    title: "Data Processing",
    icon: "/photos/solutions-5.png",
    subtitle: "Analyzing the data",
    description: "Backscatter data is processed into actionable insights using:",
    bullets: [
      "Distributed Temperature Sensing (DTS)",
      "Distributed Acoustic Sensing (DAS)",
      "Distributed Strain Sensing (DSS)",
    ],
    footer: "Low-intensity light makes the system safe for use in hazardous environments.",
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
    <section id="solutions" ref={sectionRef} className="bg-[var(--color-dark-gray)] pt-10 pb-24 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
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
              <div className="flex-shrink-0">
                <Image
                  src={s.icon}
                  alt={s.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>

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
                {s.bullets && (
                  <>
                    <ul className="mt-1 flex flex-col gap-1">
                      {s.bullets.map((b) => (
                        <li key={b} className="text-[var(--color-light)] text-sm font-light flex items-start gap-2">
                          <span className="mt-2 w-1 h-1 rounded-full bg-[var(--color-light)] flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <p className="text-[var(--color-light)] text-sm font-light mt-2">{s.footer}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── DESKTOP LAYOUT ── */}
        <div className="hidden md:block">
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
                  {s.bullets && (
                    <>
                      <ul className="flex flex-col gap-1">
                        {s.bullets.map((b) => (
                          <li key={b} className="text-[var(--color-light)] text-md font-light flex items-start gap-2">
                            <span className="mt-2 w-1 h-1 rounded-full bg-[var(--color-light)] flex-shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                      <p className="text-[var(--color-light)] text-md font-light max-w-xs">{s.footer}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}