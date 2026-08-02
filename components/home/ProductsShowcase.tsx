"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import { BESTSELLERS } from "@/lib/data";

export default function ProductsShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    trackRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section className="bg-ink-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Fresh picks"
            title="New Our Products"
            subcopy="Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!"
          />
          <motion.button
            onClick={scrollNext}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            aria-label="Next products"
            data-aos="fade-left"
            className="hidden h-14 w-14 shrink-0 items-center justify-center self-center rounded-full border border-green-500/50 text-green-400 transition-colors hover:bg-green-500 hover:text-ink-950 md:flex"
          >
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </div>

        <div
          ref={trackRef}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {BESTSELLERS.map((item, i) => (
            <div key={item.id} className="w-[78vw] shrink-0 snap-start sm:w-72">
              <ProductCard item={item} index={i} featured={i === BESTSELLERS.length - 1} />
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <motion.button
            onClick={scrollNext}
            whileTap={{ scale: 0.94 }}
            aria-label="Next products"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-green-500/50 text-green-400"
          >
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
