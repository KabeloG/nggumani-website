import type { Metadata } from "next";
import { Sora, Figtree } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "NG Gumani Ear Clinic | Trusted Ear Doctor in Limpopo",
  description:
    "Looking for an ear doctor in Limpopo? NG Gumani Ear Clinic provides expert hearing test, hearing aids and personalized care across Limpopo. Book your consultation today!",
};

const sora = Sora({
  subsets: ["latin"],
});

const figtree = Figtree({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={figtree.className}>
      <body>
        <Header />
        {children}
        <BackToTop />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
