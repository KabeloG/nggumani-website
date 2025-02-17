import Hero from "@/components/Hero";
import Appointment from "../components/Appointment";
import AboutSection from "@/components/AboutSection";
import FocusedSection from "@/components/FocusedSection";
import ServicesSection from "@/components/ServicesSection";
import EarSection from "@/components/EarSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <FocusedSection />
      <ServicesSection />
      <EarSection />
      <Appointment />
    </main>
  );
}
