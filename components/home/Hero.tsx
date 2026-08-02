"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedText from "@/components/ui/AnimatedText";
import Button from "@/components/ui/Button";
import ScallopBadge from "@/components/ui/ScallopBadge";
import WavyLines from "@/components/ui/WavyLines";
import Counter from "@/components/ui/Counter";
import { STATS, WE_HAVE_FEATURES } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 pb-28 pt-36 sm:pt-40">
      <div className="glow-pulse pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-green-600/20 blur-3xl" />
      <div className="glow-pulse pointer-events-none absolute -right-20 top-60 h-72 w-72 rounded-full bg-green-500/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <div className="flex flex-col items-start gap-6">
          <AnimatedText
            as="h1"
            text="New Cafe by StarBucks"
            className="text-5xl font-extrabold leading-[1.08] text-cream sm:text-6xl lg:text-7xl"
            wordClassName="[&:nth-child(3)]:text-green-500"
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="max-w-md text-base leading-relaxed text-gray-400 sm:text-lg"
          >
            Have time to buy the most harmonious drinks in the new Starbucks coffee and don&apos;t forget about
            the discount!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button href="/select" variant="primary">
              Select a coffee
            </Button>
            <Button href="/" variant="dark">
              More
            </Button>
          </motion.div>

          <div className="flex flex-wrap items-center gap-8 pt-6 sm:gap-10">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col"
              >
                <span className="text-3xl font-extrabold text-cream sm:text-4xl">
                  <Counter to={Number(stat.value)} suffix={stat.suffix} />
                </span>
                <span className="text-xs text-gray-500 sm:text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="float-slow relative aspect-[4/5]"
          >
            <Image
              src="/Group 2.png"
              alt="Fresh Starbucks-style coffee cup"
              fill
              priority
              sizes="(min-width: 1024px) 420px, 80vw"
              className="rounded-[2.5rem] object-cover"
            />
            <div className="absolute -right-6 -top-8 scale-[0.8] sm:-right-10 sm:scale-100">
              <ScallopBadge size={104} fill="var(--color-green-500)">
                <span className="text-2xl font-extrabold text-ink-950">45%</span>
              </ScallopBadge>
            </div>
          </motion.div>
          <WavyLines
            className="pointer-events-none absolute -bottom-6 -right-16 h-32 w-52 text-green-400/60 sm:-right-24"
          />
        </div>
      </div>

      <div className="relative mx-auto mt-20 max-w-6xl px-6 lg:px-10">
        <div className="absolute -top-7 left-8 z-10 scale-[0.82] sm:left-12 sm:scale-100">
          <ScallopBadge size={92} scallops={12}>
            <span className="text-sm font-extrabold leading-tight text-cream">
              WE
              <br />
              HAVE
            </span>
          </ScallopBadge>
        </div>

        <div
          data-aos="fade-up"
          className="grid grid-cols-1 gap-10 rounded-[2.5rem] bg-cream px-8 pb-10 pt-16 text-ink-950 sm:grid-cols-3 sm:px-14"
        >
          {WE_HAVE_FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left"
            >
              <motion.span
                whileHover={{ scale: 1.12, rotate: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-3xl"
              >
                {feature.emoji}
              </motion.span>
              <h3 className="text-lg font-extrabold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-ink-700/70">{feature.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
