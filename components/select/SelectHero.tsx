import Image from "next/image";
import AnimatedText from "@/components/ui/AnimatedText";
import Marquee from "@/components/ui/Marquee";
import WavyLines from "@/components/ui/WavyLines";
import { IMAGES } from "@/lib/images";

const TICKER = ["HOT COFFEES", "COLD COFFEES", "FRAPPÉ & BLENDED", "TEA", "BAKERY"];

export default function SelectHero() {
  return (
    <section className="relative flex h-[62vh] min-h-[460px] items-end overflow-hidden bg-ink-950">
      <Image
        src={IMAGES.beansPile}
        alt="Close-up of roasted coffee beans"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/80" />
      <WavyLines className="pointer-events-none absolute right-6 top-24 h-32 w-52 text-green-400/30 sm:right-16" />

      <div className="relative w-full pt-28">
        <div className="mx-auto max-w-7xl px-6 pb-14 lg:px-10">
          <span
            data-aos="fade-up"
            className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.25em] text-green-400"
          >
            Select a coffee
          </span>
          <AnimatedText
            as="h1"
            text="Something for every craving"
            className="text-4xl font-extrabold leading-[1.08] text-cream sm:text-5xl lg:text-6xl"
          />
        </div>
        <div className="border-t border-ink-800 py-3 text-xs font-bold uppercase tracking-[0.3em] text-gray-500">
          <Marquee items={TICKER} speed={28} />
        </div>
      </div>
    </section>
  );
}
