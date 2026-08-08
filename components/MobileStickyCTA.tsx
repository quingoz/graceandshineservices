"use client";

import { Phone, MessageSquare, Sparkles } from "lucide-react";

type Language = "en" | "es";

interface MobileStickyCTAProps {
  language: Language;
}

const translations = {
  en: {
    call: "Call Now",
    text: "Text / SMS",
    quote: "Free Quote",
  },
  es: {
    call: "Llamar Ahora",
    text: "Texto / SMS",
    quote: "Cotización Gratis",
  },
};

export default function MobileStickyCTA({ language }: MobileStickyCTAProps) {
  const t = translations[language];

  const handleQuoteClick = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-neutral-light shadow-2xl">
      <div className="flex items-center justify-around py-3 px-4 gap-2">
        {/* Call Button */}
        <a
          href="tel:7043097024"
          className="flex-1 flex flex-col items-center justify-center gap-1 bg-primary hover:bg-primary-dark text-white px-3 py-2 rounded-lg transition-all duration-300 min-w-0 active:scale-[0.98] hover:-translate-y-0.5"
        >
          <Phone className="w-5 h-5" />
          <span className="text-xs font-medium">{t.call}</span>
        </a>

        {/* Text/SMS Button */}
        <a
          href="sms:7043097024"
          className="flex-1 flex flex-col items-center justify-center gap-1 bg-accent hover:bg-accent-light text-primary-dark px-3 py-2 rounded-lg transition-all duration-300 min-w-0 active:scale-[0.98] hover:-translate-y-0.5"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="text-xs font-medium">{t.text}</span>
        </a>

        {/* Free Quote Button */}
        <button
          onClick={handleQuoteClick}
          className="flex-1 flex flex-col items-center justify-center gap-1 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-3 py-2 rounded-lg transition-all duration-300 min-w-0 active:scale-[0.98] hover:-translate-y-0.5"
        >
          <Sparkles className="w-5 h-5" />
          <span className="text-xs font-medium">{t.quote}</span>
        </button>
      </div>
    </div>
  );
}
