"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ScallopBadgeProps = {
  children: ReactNode;
  className?: string;
  size?: number;
  scallops?: number;
  fill?: string;
  rotate?: number;
  pulse?: boolean;
};


export default function ScallopBadge({
  children,
  className = "",
  size = 120,
  scallops = 14,
  fill = "var(--color-green-500)",
  rotate = -8,
  pulse = true,
}: ScallopBadgeProps) {
  const petalR = size * 0.16;
  const ringR = size * 0.33;
  const center = size / 2;

  const petals = Array.from({ length: scallops }, (_, i) => {
    const angle = (i / scallops) * Math.PI * 2;
    return {
      cx: center + ringR * Math.cos(angle),
      cy: center + ringR * Math.sin(angle),
    };
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, rotate: rotate - 20 }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ type: "spring", stiffness: 220, damping: 16 }}
      className={`relative flex shrink-0 items-center justify-center ${pulse ? "badge-pulse" : ""} ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox={`0 0 ${size} ${size}`} className="absolute inset-0 h-full w-full drop-shadow-lg">
        <circle cx={center} cy={center} r={ringR} fill={fill} />
        {petals.map((p, i) => (
          <circle key={i} cx={p.cx} cy={p.cy} r={petalR} fill={fill} />
        ))}
      </svg>
      <div className="relative z-10 flex flex-col items-center justify-center px-2 text-center leading-[1.05]">
        {children}
      </div>
    </motion.div>
  );
}
