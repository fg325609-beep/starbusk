"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";
import RevealImage from "@/components/ui/RevealImage";
import SectionHeading from "@/components/ui/SectionHeading";
import ScallopBadge from "@/components/ui/ScallopBadge";
import WavyLines from "@/components/ui/WavyLines";
import { IMAGES } from "@/lib/images";

export default function DeliciousSection() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div className="relative">
          <div className="absolute -bottom-5 -left-5 h-full w-full rounded-[2.5rem] bg-green-600/70" />
          <RevealImage
            src={IMAGES.shopInterior}
            alt="Cozy Starbucks-style cafe interior"
            className="relative aspect-[4/5] rounded-[2.5rem]"
          />
          <div className="absolute -right-5 -top-5 z-10 scale-[0.82] sm:scale-100">
            <ScallopBadge size={88} scallops={12}>
              <span className="text-xs font-extrabold leading-tight text-cream">
                WE
                <br />
                HAVE
              </span>
            </ScallopBadge>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6">
          <SectionHeading
            eyebrow="What we do"
            title="We make delicious"
            subcopy="Only in 2021 we have made more than 100,000 orders for you, your loved ones, all of you, and in 2022 we are ready to destroy the market."
          />

          <div className="relative mt-2 w-full max-w-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[16/10] overflow-hidden rounded-2xl"
            >
              <Image
                src={IMAGES.pourEspresso}
                alt="Behind the counter — the cooking process"
                fill
                sizes="320px"
                className="object-cover brightness-[0.55]"
              />
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className="absolute inset-x-0 bottom-4 mx-auto flex w-fit items-center gap-2 rounded-full bg-gradient-to-b from-green-400 to-green-600 px-5 py-2.5 text-sm font-bold text-ink-950 shadow-lg"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                Cooking Process
              </motion.button>
            </motion.div>
            <WavyLines className="pointer-events-none absolute -bottom-10 -right-16 h-28 w-48 text-green-400/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
