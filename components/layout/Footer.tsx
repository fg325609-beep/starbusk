"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp, Camera } from "lucide-react";
import { CONTACT } from "@/lib/data";

const COLUMNS = [
  { title: "Main", links: [{ label: "Buy", href: "/select" }, { label: "More", href: "/" }] },
  { title: "We make", links: [{ label: "Process", href: "/" }] },
  {
    title: "Products",
    links: [
      { label: "Cappuccino", href: "/select" },
      { label: "Fast", href: "/select" },
      { label: "Fast", href: "/select" },
    ],
  },
  { title: "Events", links: [{ label: "Drinks", href: "/" }, { label: "Eat", href: "/shop" }] },
  { title: "Contacts", links: [{ label: "Instagram", href: "#" }, { label: "Number", href: "#" }] },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-ink-800 bg-ink-950 pb-10 pt-16 text-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-start">
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <Link href="/" className="text-xl font-extrabold tracking-tight text-cream">
              Star<span className="text-green-500">Bucks</span>
            </Link>

            <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
              {COLUMNS.map((col) => (
                <div key={col.title} data-aos="fade-up" className="flex flex-col gap-3">
                  <h3 className="text-sm font-semibold text-cream">{col.title}</h3>
                  {col.links.map((link, i) => (
                    <Link
                      key={`${col.title}-${link.label}-${i}`}
                      href={link.href}
                      className="text-sm text-gray-500 transition-colors hover:text-green-400"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.94 }}
            aria-label="Scroll to top"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-green-500/50 text-green-400 transition-colors hover:bg-green-500 hover:text-ink-950"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-ink-800 pt-8 sm:flex-row">
          <a
            href={`tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`}
            className="text-sm font-semibold text-green-400 [text-shadow:0_0_16px_rgba(34,197,94,0.5)]"
          >
            {CONTACT.phone}
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-green-500/50 text-green-400 shadow-[0_0_16px_rgba(34,197,94,0.35)] transition-transform hover:scale-110"
          >
            <Camera className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
