import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import AosInit from "@/components/AosInit";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "StarBucks | New Cafe",
  description:
    "Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-body antialiased`}>
        <AosInit />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
