"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "@/components/ui/ProductCard";
import type { MenuCategory } from "@/lib/data";

type CategoryExplorerProps = {
  categories: MenuCategory[];
  pillLayoutId: string;
  sectionId?: string;
};

export default function CategoryExplorer({ categories, pillLayoutId, sectionId }: CategoryExplorerProps) {
  const [activeId, setActiveId] = useState(categories[0].id);
  const active = categories.find((c) => c.id === activeId) ?? categories[0];

  return (
    <section id={sectionId} className="scroll-mt-24 bg-ink-950 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div
          data-aos="fade-up"
          className="mx-auto flex w-fit max-w-full flex-wrap justify-center gap-1.5 rounded-full border border-ink-700 bg-ink-900 p-1.5"
        >
          {categories.map((category) => {
            const isActive = category.id === activeId;
            return (
              <button
                key={category.id}
                onClick={() => setActiveId(category.id)}
                className={`relative rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-300 sm:px-5 ${
                  isActive ? "text-ink-950" : "text-gray-400 hover:text-cream"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId={pillLayoutId}
                    className="absolute inset-0 rounded-full bg-gradient-to-b from-green-400 to-green-600"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{category.label}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {active.items.map((item, i) => (
              <ProductCard key={item.id} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
