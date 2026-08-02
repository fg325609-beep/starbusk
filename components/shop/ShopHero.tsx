"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedText from "@/components/ui/AnimatedText";
import Button from "@/components/ui/Button";
import TiltCard from "@/components/ui/TiltCard";
import ScallopBadge from "@/components/ui/ScallopBadge";
import { MERCH } from "@/lib/data";

const featured = MERCH[2].items[0];

export default function ShopHero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 pb-20 pt-36 sm:pt-40">
      <div className="glow-pulse pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-green-600/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <div className="flex flex-col items-start gap-6">
          <span
            data-aos="fade-up"
            className="text-xs font-bold uppercase tracking-[0.25em] text-green-400"
          >
            The StarBucks Shop
          </span>
          <AnimatedText
            as="h1"
            text="Take a piece of the cafe home"
            className="text-4xl font-extrabold leading-[1.1] text-cream sm:text-5xl lg:text-6xl"
          />
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-md text-base leading-relaxed text-gray-400 sm:text-lg"
          >
            Mugs, tumblers, whole-bean bags, and gift cards — everything you need to keep the ritual going
            between visits.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            <Button href="#shop-grid" variant="primary">
              Browse the Shop
            </Button>
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-xs lg:mx-0 lg:justify-self-end">
          <TiltCard
            intensity={8}
            className="relative rounded-[2.5rem] border border-ink-700 bg-ink-900 p-5 shadow-2xl shadow-ink-950/60"
          >
            <div className="relative aspect-square overflow-hidden rounded-[2rem]">
              <Image
                src={featured.image}
                alt={featured.name}
                fill
                sizes="320px"
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-between px-1 pt-4">
              <div>
                <p className="text-base font-bold text-cream">{featured.name}</p>
                <p className="text-xs text-gray-500">Most gifted this month</p>
              </div>
              <span className="rounded-full bg-gradient-to-b from-green-400 to-green-600 px-3 py-1 text-xs font-bold text-ink-950">
                ${featured.price.toFixed(2)}
              </span>
            </div>
          </TiltCard>
          <div className="absolute -left-6 -top-6 z-10 scale-[0.85] sm:scale-100">
            <ScallopBadge size={80} scallops={12}>
              <span className="text-[11px] font-extrabold leading-tight text-ink-950">
                TOP
                <br />
                PICK
              </span>
            </ScallopBadge>
          </div>
        </div>
      </div>
    </section>
  );
}
