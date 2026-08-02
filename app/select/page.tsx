import type { Metadata } from "next";
import SelectHero from "@/components/select/SelectHero";
import CategoryExplorer from "@/components/ui/CategoryExplorer";
import { MENU } from "@/lib/data";

export const metadata: Metadata = {
  title: "Select | StarBucks",
  description: "Browse hot and cold coffees, frappés, tea, and bakery favorites.",
};

export default function SelectPage() {
  return (
    <>
      <SelectHero />
      <CategoryExplorer categories={MENU} pillLayoutId="select-tab-pill" />
    </>
  );
}
