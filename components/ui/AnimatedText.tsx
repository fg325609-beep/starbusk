"use client";

import { motion, type Variants } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  wordClassName?: string;
  delay?: number;
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.055 },
  },
};

const wordVariants: Variants = {
  hidden: { y: "115%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const TAGS = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
} as const;

/**
 * Splits `text` into words and reveals them word-by-word, each rising out
 * of a clipped mask, staggered as the element scrolls into view.
 */
export default function AnimatedText({
  text,
  as = "span",
  className = "",
  wordClassName = "",
  delay = 0,
}: AnimatedTextProps) {
  const MotionTag = TAGS[as];
  const words = text.split(" ");

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={containerVariants}
      transition={{ delayChildren: delay }}
    >
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className="inline-block overflow-hidden align-top pb-[0.15em] -mb-[0.15em]"
        >
          <motion.span
            variants={wordVariants}
            className={`inline-block ${wordClassName}`}
          >
            {w}
            {i !== words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
