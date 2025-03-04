import type { Metadata } from "next";
import { Sora, Figtree } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "NG Gumani Ear Clinic | Trusted Ear Doctor & Hearing Care in Limpopo",
  description:
    "At NG Gumani Ear Clinic, our experienced ear doctor and speech therapist provide personalized hearing care across Limpopo. With 30+ years of expertise, we offer hearing tests, hearing aids, and solutions tailored to your needs.",
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
