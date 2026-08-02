"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import TiltCard from "./TiltCard";
import type { MenuItem } from "@/lib/data";

type ProductCardProps = {
  item: MenuItem;
  index?: number;
  featured?: boolean;
};

export default function ProductCard({ item, index = 0, featured = false }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <TiltCard
        intensity={6}
        className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-ink-900 p-5 transition-all duration-500 ${
          featured
            ? "border-green-500/60 shadow-[0_0_40px_-10px_rgba(34,197,94,0.45)]"
            : "border-ink-700 hover:border-green-500/40 hover:shadow-[0_0_30px_-12px_rgba(34,197,94,0.3)]"
        }`}
      >
        {item.tag && (
          <span className="absolute left-5 top-5 z-10 rounded-full bg-green-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ink-950">
            {item.tag}
          </span>
        )}

        <div className="relative mx-auto flex h-40 w-40 items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-green-500/25 blur-2xl transition-opacity duration-500 group-hover:bg-green-400/35" />
          <div className="relative h-32 w-32 overflow-hidden rounded-full ring-1 ring-cream/10">
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="128px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-1.5 pt-5 text-center">
          <h3 className="text-lg font-bold text-cream">{item.name}</h3>
          <p className="text-sm leading-relaxed text-gray-500">{item.description}</p>

          <div className="flex items-center justify-center gap-2 pt-3">
            <span className="text-xl font-extrabold text-cream">${item.price.toFixed(2)}</span>
            <span className="text-xs text-gray-500">330 ml</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-full bg-gradient-to-b from-green-400 to-green-600 py-3 text-sm font-bold text-ink-950"
          >
            <Plus className="h-4 w-4" />
            Buy Product
          </motion.button>
        </div>
      </TiltCard>
    </motion.div>
  );
}
