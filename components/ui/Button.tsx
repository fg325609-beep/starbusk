"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "dark" | "outline";
  className?: string;
  type?: "button" | "submit";
};

const VARIANT_CLASSES: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-gradient-to-b from-green-400 to-green-600 text-ink-950 shadow-lg shadow-green-600/30 hover:shadow-green-500/40",
  dark: "bg-ink-800 text-cream border border-ink-700 hover:border-green-500/50",
  outline: "border border-cream/25 text-cream hover:border-green-400 hover:text-green-300",
};

const springTransition = { type: "spring", stiffness: 400, damping: 24 } as const;

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-tight transition-all duration-300 ${VARIANT_CLASSES[variant]} ${className}`;

  if (href) {
    return (
      <motion.div
        className="inline-block"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        transition={springTransition}
      >
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={springTransition}
    >
      {children}
    </motion.button>
  );
}
