"use client";

import type { ReactNode } from "react";

interface GlowingButtonProps {
  children: ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "gold" | "outline" | "white";
}

export default function GlowingButton({
  children,
  href,
  target,
  onClick,
  className = "",
  size = "md",
  variant = "gold",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-3 text-[10px] tracking-[0.14em]",
    md: "px-6 py-3.5 text-xs tracking-[0.15em]",
    lg: "px-7 py-4 text-xs tracking-[0.15em]",
  }[size];

  const variantClasses = {
    gold: "border border-[#fdf0a6]/50 bg-gradient-to-r from-[#987226] via-[#d4af37] to-[#fce778] text-[#010d1a] font-black shadow-md shadow-[#987226]/30 hover:-translate-y-0.5 hover:from-[#d4af37] hover:via-[#fdf0a6] hover:to-[#987226] hover:shadow-lg hover:shadow-[#d4af37]/40",
    outline: "border border-[#d4af37]/50 bg-transparent text-[#987226] hover:-translate-y-0.5 hover:border-[#d4af37] hover:bg-[#d4af37]/10 hover:text-[#5f4512]",
    white: "border border-white/20 bg-white text-[#021426] shadow-md hover:-translate-y-0.5 hover:bg-[#faf8f2] hover:shadow-lg",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-full font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#d4af37] select-none text-center cursor-pointer " +
    sizeClasses +
    " " +
    variantClasses +
    " " +
    className;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
