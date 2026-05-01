"use client";

import Image from "next/image";

const APPLICATIONS = [
  {
    id: "pipelines",
    label: "Pipelines",
    image: "/photos/applications-1.jpg",
    description: "Detect leaks, monitor integrity, and reduce inspection costs across long-distance assets.",
  },
  {
    id: "rail",
    label: "Rail & Haul Roads",
    image: "/photos/applications-2.jpg",
    description: "Monitor track conditions and detect anomalies before they impact operations.",
  },
  {
    id: "tunnels",
    label: "Tunnels",
    image: "/photos/applications-3.jpg",
    description: "Identify temperature anomalies early to support fire detection and safety systems.",
  },
  {
    id: "conveyors",
    label: "Conveyors",
    image: "/photos/applications-4.jpg",
    description: "Monitor belt and idler component health to prevent failures and reduce downtime.",
  },
];

export default function Applications() {
  return (
    <section id="applications" className="bg-[var(--color-dark-gray)] py-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-white text-3xl md:text-5xl font-semibold mb-3">
            APPLICATIONS
          </h2>
          <p className="text-[var(--color-light)] text-sm max-w-xs">
            From pipelines to transport infrastructure, Orealis solutions adapt
            to a wide range of environments.
          </p>
        </div>

        {/* Grid */}
        <div className="flex flex-col gap-4 md:grid md:grid-cols-4 md:gap-5">
          {APPLICATIONS.map((app) => (
            <div
              key={app.id}
              id={app.id}
              className="scroll-mt-32 group relative rounded-xl overflow-hidden cursor-pointer bg-[#2d2d2d]/40 backdrop-blur-sm
                         min-h-[120px] md:h-auto md:aspect-[2.5/4]"
            >
              <Image
                src={app.image}
                alt={app.label}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Mobile: gradient kiri ke kanan */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#2d2d2d] via-[#2d2d2d]/80 to-transparent md:hidden" />

              {/* Desktop: gradient bawah ke atas */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2d2d2d] via-[#2d2d2d]/50 to-transparent
                              group-hover:bg-[#2d2d2d]/40 transition-all duration-300 hidden md:block" />

              {/* Mobile layout */}
              <div className="absolute inset-0 flex flex-col justify-center px-5 md:hidden">
                <p className="text-[var(--color-light)] font-semibold text-lg leading-tight mb-1">
                  {app.label}
                </p>
                <p className="text-[var(--color-light)] text-xs leading-relaxed max-w-[55%]">
                  {app.description}
                </p>
              </div>

              {/* Desktop layout */}
              <div className="absolute inset-0 flex-col justify-end p-5 hidden md:flex pb-8">
                <div className="min-h-[72px]">
                  <p className="text-[var(--color-light)] font-semibold text-[1.5rem] mb-4">
                    {app.label}
                  </p>
                  <p className="text-[var(--color-light)] text-sm leading-relaxed h-[60px] max-w-[85%]">
                    {app.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}