"use client";

import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS = {
    Home: [
        { label: "Converting Light Into Insight", href: "/" },
    ],
    "About":[
        {label: "Fibre optic specialist", href:"/"}
    ],
    "Our Technology": [
        { label: "CIQ", href: "/technology#ciq" },
        { label: "FlowProtect", href: "/technology#flowprotect" },
    ],
    Applications: [
        { label: "Pipelines", href: "/applications#pipelines" },
        { label: "Rail & Haul Roads", href: "/applications#rail" },
        { label: "Tunnels", href: "/applications#tunnels" },
        { label: "Conveyors", href: "/applications#conveyors" },
    ],
    "Our Solutions": [
        { label: "Installation", href: "/solutions#light" },
        { label: "Light Transmission", href: "/solutions#data" },
        { label: "Backscatter Detection", href: "/solutions#detection" },
        { label: "Environment Response", href: "/solutions#response" },
        { label: "Data Processing", href: "/solutions#process" },


    ],
    Contact: [
        { label: "Contact Us", href: "/contact" },
    ],
    };

    export default function Footer() {
    return (
        <footer className="bg-[var(--color-gray-dark)] pt-12">
        <div className="max-w-8xl mx-auto px-6 mb-8 pl-16">
            <Image
            src="/logo/orealis-project.webp"
            alt="Orealis"
            width={240}
            height={64}
            className="h-25 w-auto object-contain"
            />
        </div>

        <div className="w-full pb-32">
            <div className="max-w-8xl mx-auto px-6 py-6 flex flex-wrap justify-between gap-8 pl-16">
            
            {Object.entries(FOOTER_LINKS).map(([category, links]) => (
                <div key={category} className="flex flex-col gap-2 min-w-[120px]">
                
                <p className="text-[var(--color-light)] text-lg font-bold tracking-wider uppercase">
                    {category}
                </p>

                {links.map((link) => (
                    <Link
                    key={link.href}
                    href={link.href}
                    className="text-[var(--color-light)] text-sm hover:text-[var(--color-primary)] transition-colors"
                    >
                    {link.label}
                    </Link>
                ))}
                </div>
            ))}
            </div>
        </div>

        <div className="w-full bg-[var(--color-dark-gray)] py-4">
            <div className="max-w-8xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
            
            <p className="text-[var(--color-light)] text-sm font-light font-sans ">
                Orealis Pty Ltd   |   ABN 22 688 011 403   |   © 2026 Orealis. All rights reserved.
            </p>

            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-[var(--color-light)] text-lg hover:text-[var(--color-primary)] transition-colors flex items-center gap-1"
            >
                Back to top
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m18 15-6-6-6 6"/>
                </svg>
            </button>

            </div>
        </div>

        </footer>
    );
}