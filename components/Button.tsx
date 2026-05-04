"use client";

import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  as?: "button" | "link";
  href?: string;
  className?: string;
  target?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void; // Updated type
};

export default function Button({
  children,
  as = "button",
  href,
  className = "",
  target,
  onClick,
}: ButtonProps) {
  const baseStyle = `
  relative inline-flex items-center justify-center
  px-6 py-3 rounded-xl text-sm font-medium
  border border-[var(--color-primary)]
  text-[var(--color-primary)]
  transition-all duration-300
  w-full md:w-auto
`;

  const glowStyle = `
    shadow-[0_0_8px_rgba(0,211,195,0.4)]
    hover:shadow-[0_0_20px_rgba(0,211,195,0.9)]
  `;

  const styles = `${baseStyle} ${glowStyle} ${className}`;

  if (as === "link" && href) {
    const isExternal = href.startsWith("http");

    if (isExternal) {
      return (
        <a
          href={href}
          target={target || "_blank"}
          rel="noopener noreferrer"
          className={styles}
          onClick={onClick} // Added this
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={styles} onClick={onClick}> {/* Added this */}
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
}