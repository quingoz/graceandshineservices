"use client";

import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

type Language = "en" | "es";

export default function HomeClient() {
  const [language, setLanguage] = useState<Language>("en");

  const handleGetEstimate = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen pb-20 md:pb-0">
      <Header language={language} setLanguage={setLanguage} onGetEstimate={handleGetEstimate} />
      <HeroSection language={language} />
      <HowItWorks language={language} />
      <WhyChooseUs language={language} />
      <Reviews language={language} />
      <Footer language={language} onGetEstimate={handleGetEstimate} />
      <MobileStickyCTA language={language} onQuoteClick={handleGetEstimate} />
    </main>
  );
}
