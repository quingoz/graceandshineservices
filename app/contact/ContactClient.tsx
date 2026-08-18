"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Header from "@/components/Header";
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

export default function ContactClient() {
  const [language, setLanguage] = useState<Language>("en");
  const t = translations[language];

  const handleGetEstimate = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/#quote-form";
    }
  };

  return (
    <main className="min-h-screen pb-20 md:pb-0">
      <Header language={language} setLanguage={setLanguage} onGetEstimate={handleGetEstimate} />

      <section className="py-16 bg-base">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            {t.contactTitle}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-neutral-surface hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-primary mb-2">Phone</h3>
              <a href="tel:7043097024" className="text-neutral hover:text-primary transition-colors">
                (704) 309-7024
              </a>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-neutral-surface hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-primary mb-2">Email</h3>
              <a href="mailto:graceandshineservice@gmail.com" className="text-neutral hover:text-primary transition-colors">
                graceandshineservice@gmail.com
              </a>
            </div>

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

      <Footer language={language} onGetEstimate={handleGetEstimate} />
      <MobileStickyCTA language={language} onQuoteClick={handleGetEstimate} />
    </main>
  );
}
