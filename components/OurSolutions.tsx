"use client";

import Image from "next/image";

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
  return (
    <section className="bg-[var(--color-dark-gray)] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <h2 className="text-white text-3xl md:text-4xl font-semibold mb-3">
            OUR SOLUTIONS
          </h2>
          <p className="text-[var(--color-light)] text-md max-w-xs">
            Turn fibre optic sensing data into real-time, actionable insight.
          </p>
        </div>

        {/* Connector line + icons row */}
        <div className="relative flex items-center justify-between mb-12 mt-10 px-2">
          {/* Dashed line */}
          <div className="absolute top-1/2 left-0 right-0 h-px " />

          
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-16">

            {/* ICONS */}
            {STEPS.map((s) => (
                <div
                key={s.step}
                className="relative z-10 flex flex-col items-center justify-center gap-2"
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

            <div className="col-span-2 md:col-span-5 relative h-0 my-2">
                <div className="absolute left-1/2 -translate-x-1/2 w-screen h-px bg-[#FFFFFF]" />
            </div>

            {/* CONTENT */}
            {STEPS.map((s) => (
                <div key={s.step} className="flex flex-col gap-4">
                
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
    </section>
  );
}