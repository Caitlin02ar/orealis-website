"use client";

import Image from "next/image";

const TECHNOLOGIES = [
    {
        id: "ciq",
        tag: "CIQ",
        title: "Conveyor Monitoring",
        image: "/photos/technology-1.png",
        description:
        "Smarter inspection and maintenance through continuous monitoring.",
        points: [
        "24/7 component-level visibility",
        "Detect potential failures before they disrupt operations",
        "Reduce downtime and maintenance cost",
        ],
    },
    {
        id: "flowprotect",
        tag: "FlowProtect",
        title: "Pipeline Leak Detection",
        image: "/photos/technology-2.png",
        description: "Detect leaks early and reduce operational risk",
        points: [
        "Detect leaks instantly with precise location",
        "Reduce field inspections and response time",
        "Improve safety across remote assets",
        ],
    },
    ];

    export default function OurTechnology() {
    return (
        <section className="bg-[var(--color-dark)] py-24 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">            
                <h2 className="text-[var(--color-light)] text-3xl md:text-5xl font-semibold mb-14">
                    OUR TECHNOLOGY
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                {TECHNOLOGIES.map((tech) => (
                    <div
                    key={tech.id}
                    className="relative rounded-2xl overflow-hidden bg-[var(--color-dark-gray)] p-8">
                    
                    <div className="absolute bottom-0 right-0 w-[110%] h-[110%] pointer-events-none">
                        <Image
                        src={tech.image}
                        alt={tech.title}
                        fill
                        className="object-contain object-bottom-right"/>
                    </div>
                    <div className="relative z-10 max-w-[75%]">
                        
                        <p className="text-[var(--color-light)] text-[2rem] tracking-widest uppercase mb-3 font-medium">
                            {tech.tag}
                        </p>
                        <h3 className="text-[var(--color-light)] text-[1.75rem] font-medium mb-3">
                            {tech.title}
                        </h3>
                        <p className="text-[var(--color-light)] text-sm mb-5 leading-relaxed">
                            {tech.description}
                        </p>
                        <ul className="space-y-2 pb-24 pl-2">
                        {tech.points.map((point) => (
                            <li
                            key={point}
                            className="flex items-start gap-2 text-[var(--color-light)] text-sm leading-relaxed"
                            >
                            <span className="mt-2 w-1 h-1 rounded-full bg-[var(--color-light)] flex-shrink-0" />
                            {point}
                            </li>
                        ))}
                        </ul>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}