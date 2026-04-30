"use client";

import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  as?: "button" | "link";
  href?: string;
  className?: string;
};

export default function Button({
  children,
  as = "button",
  href,
  className = "",
}: ButtonProps) {
  const baseStyle = `
    relative inline-flex items-center justify-center
    px-6 py-3 rounded-xl text-sm font-medium
    border border-[var(--color-primary)]
    text-[var(--color-primary)]
    transition-all duration-300
  `;

  const glowStyle = `
    shadow-[0_0_8px_rgba(0,211,195,0.4)]
    hover:shadow-[0_0_20px_rgba(0,211,195,0.9)]
  `;

  const styles = `${baseStyle} ${glowStyle} ${className}`;

  if (as === "link" && href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return <button className={styles}>{children}</button>;
}