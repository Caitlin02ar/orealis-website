"use client";

import Image from "next/image";

const REASONS = [
    {
        id: "practical",
        title: "Practical Problem Solvers",
        icon: "/photos/whys-1.png",
        description:
        "We combine fibre optic sensing expertise with real-world engineering knowledge to ensure solutions that improve asset performance.",
    },
    {
        id: "industry",
        title: "Deep Industry Experience",
        icon: "/photos/whys-2.png",
        description:
        "Extensive infrastructure analysis and delivery experience, and great links with networks.",
    },
    {
        id: "ai",
        title: "AI-Driven Capability",
        icon: "/photos/whys-3.png",
        description:
        "AI-powered signal processing that works autonomously across sectors including defence, infrastructure, and resources.",
    },
    {
        id: "solutions",
        title: "Solutions Built for You",
        icon: "/photos/whys-4.png",
        description:
        "Considered implementation strategies tailored to your specific operations.",
    },
];

export default function WhyOrealis() {
    return (
        <section className="bg-[var(--color-dark-gray)] py-16 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto py-12">
            <h2 className="text-white text-3xl md:text-6xl font-semibold mb-12">
            WHY OREALIS
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {REASONS.map((reason) => (
                <div
                    key={reason.id}
                    className="
                        group relative rounded-2xl p-8 pb-12 pl-12
                        bg-[var(--color-gray-dark)]
                        overflow-hidden
                        flex items-center
                        min-h-[200px]
                    "
                    >
                    {/* TEXT (center vertical) */}
                    <div className="relative z-10">
                        <h3 className="text-[var(--color-light)] text-[1.75rem] font-medium mb-3 max-w-[50%]">
                        {reason.title}
                        </h3>
                        <p className="text-[var(--color-light)] text-md leading-relaxed max-w-[55%] font-light">
                        {reason.description}
                        </p>
                    </div>

                    {/* ICON (kanan atas) */}
                    <div className="absolute top-0 right-0 w-[200px] h-[200px] pointer-events-none">
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