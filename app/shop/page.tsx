import type { Metadata } from "next";
import ShopHero from "@/components/shop/ShopHero";
import CategoryExplorer from "@/components/ui/CategoryExplorer";
import { MERCH } from "@/lib/data";

export const metadata: Metadata = {
  title: "Shop | StarBucks",
  description: "Mugs, tumblers, whole-bean coffee, and gift cards to take the cafe home.",
};

export default function ShopPage() {
  return (
    <>
      <ShopHero />
      <CategoryExplorer categories={MERCH} pillLayoutId="shop-tab-pill" sectionId="shop-grid" />
    </>
  );
}
