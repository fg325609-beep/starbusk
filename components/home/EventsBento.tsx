"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import WavyLines from "@/components/ui/WavyLines";
import { EVENTS } from "@/lib/data";

export default function EventsBento() {
  const large = EVENTS.filter((e) => e.size === "lg");
  const small = EVENTS.filter((e) => e.size === "sm");

  return (
    <section className="relative overflow-hidden bg-ink-950 py-24">
      <WavyLines className="pointer-events-none absolute -left-6 top-10 h-40 w-64 text-green-400/25" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="What's on"
          title="Our New Events"
          subcopy="Only in 2021 we have made more than 100,000 orders for you, your loved ones, all of you, and in 2022 we are ready to destroy the market."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {large.map((event, i) => (
            <EventCard key={event.title} event={event} index={i} className="h-64 sm:h-72" />
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {small.map((event, i) => (
            <EventCard key={event.title} event={event} index={i + large.length} className="h-56" />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventCard({
  event,
  index,
  className = "",
}: {
  event: { title: string; image: string };
  index: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden rounded-3xl ${className}`}
    >
      <Image
        src={event.image}
        alt={event.title}
        fill
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-ink-950/10" />
      <div className="relative flex h-full flex-col justify-end gap-3 p-6">
        <h3 className="max-w-[14ch] text-xl font-extrabold uppercase leading-tight text-cream">
          {event.title}
        </h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-fit rounded-full bg-gradient-to-b from-green-400 to-green-600 px-5 py-2 text-sm font-bold text-ink-950"
        >
          More
        </motion.button>
      </div>
    </motion.div>
  );
}
