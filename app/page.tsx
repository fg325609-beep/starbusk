import Hero from "@/components/home/Hero";
import DeliciousSection from "@/components/home/DeliciousSection";
import ProductsShowcase from "@/components/home/ProductsShowcase";
import EventsBento from "@/components/home/EventsBento";
import ContactsSection from "@/components/home/ContactsSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DeliciousSection />
      <ProductsShowcase />
      <EventsBento />
      <ContactsSection />
    </>
  );
}
