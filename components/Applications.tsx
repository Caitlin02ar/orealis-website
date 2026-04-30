"use client";

import Image from "next/image";

const APPLICATIONS = [
  {
    id: "pipelines",
    label: "Pipelines",
    image: "/photos/applications-1.jpg",
    description:
      "Monitor, maintain integrity, and reduce operation costs across long-distance assets.",
  },
  {
    id: "rail",
    label: "Rail & Haul Roads",
    image: "/photos/applications-2.jpg",
    description:
      "Monitor track conditions continuously and address anomalies before they impact operations.",
  },
  {
    id: "tunnels",
    label: "Tunnels",
    image: "/photos/applications-3.jpg",
    description:
      "Monitor temperature anomalies early to support fire detection and safety systems.",
  },
  {
    id: "conveyors",
    label: "Conveyors",
    image: "/photos/applications-4.jpg",
    description:
      "Detect belt and idler component health to prevent failures and reduce downtime.",
  },
];

export default function Applications() {
    return (
        <section className="bg-[var(--color-dark-gray)] py-24 px-6 min-h-screen">
            <div className="max-w-6xl mx-auto">
            <div className="mb-24">
                <h2 className="text-white text-3xl md:text-4xl font-semibold mb-3">
                    APPLICATIONS
                </h2>
                <p className="text-[var(--color-light)] text-sm max-w-xs">
                    From pipelines to transport infrastructure, Orealis solutions adapt to a wide range of environments.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {APPLICATIONS.map((app) => (
                    <div
                    key={app.id}
                    className="group relative rounded-xl overflow-hidden aspect-[2.5/4] cursor-pointer bg-[#2d2d2d]/40 backdrop-blur-sm"
                    >
                    <Image
                        src={app.image}
                        alt={app.label}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2d2d2d] via-[#2d2d2d]/50 to-transparent group-hover:bg-[#2d2d2d]/40 transition-all duration-300" />
                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                        <div className="min-h-[72px]">
                        <p className="text-[var(--color-light)] font-semibold text-[1.5rem] mb-4">
                            {app.label}
                        </p>
                        <p className="text-[var(--color-light)] text-xs leading-relaxed">
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