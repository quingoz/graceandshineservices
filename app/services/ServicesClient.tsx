"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

type Language = "en" | "es";

export default function ServicesClient() {
  const [language, setLanguage] = useState<Language>("en");

  const handleGetEstimate = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/#quote-form";
    }
  };

  return (
    <main className="min-h-screen pb-20 md:pb-0">
      <Header language={language} setLanguage={setLanguage} onGetEstimate={handleGetEstimate} />
      <Services language={language} onGetEstimate={handleGetEstimate} />
      <Footer language={language} onGetEstimate={handleGetEstimate} />
      <MobileStickyCTA language={language} onQuoteClick={handleGetEstimate} />
    </main>
  );
}
