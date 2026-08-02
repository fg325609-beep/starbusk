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
  // Asosiy ma'lumotlar
  title: "Starbucks | New Cafe",
  description:
    "Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!",
  keywords: ["Starbucks", "Coffee", "New Cafe", "Discount", "Drinks", "Cafe"],
  authors: [{ name: "Starbucks Team" }],
  
  // Open Graph (Facebook, Telegram, LinkedIn va boshqalar uchun)
  openGraph: {
    title: "Starbucks | New Cafe",
    description:
      "Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!",
    url: "https://StarBucks.com", // O'zingizning domen nomingizni yozing
    siteName: "Starbucks New Cafe",
    images: [
      {
        url: "public/Group 2.png", // public papkasidagi rasm manzili (masalan: 1200x630 o'lchamda)
        width: 1200,
        height: 630,
        alt: "Starbucks New Cafe Drinks",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter uchun maxsus
  twitter: {
    card: "summary_large_image",
    title: "Starbucks | New Cafe",
    description:
      "Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!",
    images: ["/Group 2.png"], // public papkasidagi rasm manzili
  },

  // Sayt ikonkalari (Favicon)
  icons: {
    icon: "/image.png",
    shortcut: "/Group 2.png",
    apple: "/Group 2.png",
  },
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