"use client";

import { motion } from "framer-motion";

type MarqueeProps = {
  items: string[];
  className?: string;
  speed?: number;
};

export default function Marquee({ items, className = "", speed = 24 }: MarqueeProps) {
  const content = [...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex w-max items-center gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {content.map((item, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            {item}
            <span aria-hidden="true" className="text-green-400">
              ✦
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
