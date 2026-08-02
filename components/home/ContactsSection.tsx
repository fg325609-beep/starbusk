import { Camera, Phone } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealImage from "@/components/ui/RevealImage";
import ScallopBadge from "@/components/ui/ScallopBadge";
import WavyLines from "@/components/ui/WavyLines";
import { IMAGES } from "@/lib/images";
import { CONTACT } from "@/lib/data";

export default function ContactsSection() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div className="flex flex-col items-start gap-6">
          <SectionHeading
            eyebrow="Get in touch"
            title="Our Contacts"
            subcopy="Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!"
          />

          <div data-aos="fade-up" data-aos-delay="150" className="flex flex-col gap-4 pt-2">
            <a
              href="#"
              className="group flex items-center gap-3 text-base font-semibold text-cream transition-colors hover:text-green-400"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-green-500/40 text-green-400 transition-colors group-hover:bg-green-500 group-hover:text-ink-950">
                <Camera className="h-4 w-4" />
              </span>
              {CONTACT.instagram}
            </a>
            <a
              href={`tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`}
              className="group flex items-center gap-3 text-base font-semibold text-cream transition-colors hover:text-green-400"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-green-500/40 text-green-400 transition-colors group-hover:bg-green-500 group-hover:text-ink-950">
                <Phone className="h-4 w-4" />
              </span>
              {CONTACT.phone}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[2.5rem] bg-green-600/70" />
          <RevealImage
            src={IMAGES.storefront}
            alt="Starbucks-style storefront"
            className="relative aspect-[4/5] rounded-[2.5rem]"
          />
          <div className="absolute -left-5 -top-5 z-10 scale-[0.82] sm:scale-100">
            <ScallopBadge size={88} scallops={12}>
              <span className="text-xs font-extrabold leading-tight text-cream">
                WE
                <br />
                HAVE
              </span>
            </ScallopBadge>
          </div>
          <WavyLines className="pointer-events-none absolute -bottom-10 -left-16 h-28 w-48 -scale-x-100 text-green-400/50" />
        </div>
      </div>
    </section>
  );
}
