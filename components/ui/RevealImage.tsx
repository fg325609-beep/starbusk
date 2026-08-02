"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type RevealImageProps = {
  src: string;
  alt: string;
  /** Applied to the wrapping div — control aspect ratio, size & radius here. Must include `relative`. */
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
  hoverZoom?: boolean;
  delay?: number;
};


export default function RevealImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  hoverZoom = true,
  delay = 0,
}: RevealImageProps) {
  return (
    <motion.div
      className={`group relative overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 1.08 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover transition-transform duration-700 ease-out ${
          hoverZoom ? "group-hover:scale-110" : ""
        } ${imgClassName}`}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/20 via-transparent to-transparent" />
    </motion.div>
  );
}
