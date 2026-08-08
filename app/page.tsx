"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceAreasAndFAQ from "@/components/ServiceAreasAndFAQ";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

type Language = "en" | "es";

const translations = {
  en: {
    contactTitle: "Contact Us",
  },
  es: {
    contactTitle: "Contáctenos",
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  const handleGetEstimate = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen pb-20 md:pb-0">
      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:bg-white transition-colors border border-accent/20"
          aria-label="Toggle language"
        >
          <Globe className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">{language === "en" ? "ES" : "EN"}</span>
        </button>
      </div>

      {/* Header */}
      <Header language={language} setLanguage={setLanguage} onGetEstimate={handleGetEstimate} />

      {/* Hero Section */}
      <HeroSection language={language} />

      {/* About Us Section */}
      <AboutUs language={language} />

      {/* Services Section */}
      <Services language={language} />

      {/* Why Choose Us Section */}
      <WhyChooseUs language={language} />

      {/* Service Areas & FAQ Section */}
      <ServiceAreasAndFAQ language={language} />

      {/* Contact Information Section */}
      <section className="py-16 bg-base" id="contact">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            {t.contactTitle}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-neutral-surface hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-primary mb-2">Phone</h3>
              <a href="tel:7043097024" className="text-neutral hover:text-primary transition-colors">
                (704) 309-7024
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-neutral-surface hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-primary mb-2">Email</h3>
              <a href="mailto:graceandshineservice@gmail.com" className="text-neutral hover:text-primary transition-colors">
                graceandshineservice@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-neutral-surface hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-primary mb-2">Location</h3>
              <p className="text-neutral">
                Charlotte, North Carolina
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer language={language} />

      {/* Mobile Sticky CTA */}
      <MobileStickyCTA language={language} />
    </main>
  );
}
