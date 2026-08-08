"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Mail, Shield, Menu, X, ChevronDown } from "lucide-react";

type Language = "en" | "es";

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onGetEstimate: () => void;
}

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      areas: "Service Areas",
      faq: "FAQ",
      contact: "Contact",
    },
    badges: {
      insured: "Insured Local Family-Owned",
    },
    cta: "Get a Free Estimate",
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      areas: "Áreas de Servicio",
      faq: "Preguntas",
      contact: "Contacto",
    },
    badges: {
      insured: "Asegurado Familiar Local",
    },
    cta: "Obtener Cotización Gratis",
  },
};

export default function Header({ language, setLanguage, onGetEstimate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "home", label: t.nav.home },
    { key: "about", label: t.nav.about },
    { key: "services", label: t.nav.services },
    { key: "areas", label: t.nav.areas },
    { key: "faq", label: t.nav.faq },
    { key: "contact", label: t.nav.contact },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/90 backdrop-blur-md shadow-lg" 
        : "bg-white shadow-md"
    }`}>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:7043097024" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span>(704) 309-7024</span>
            </a>
            <a href="mailto:graceandshineservice@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              <span>graceandshineservice@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-accent">
            <Shield className="w-4 h-4" />
            <span className="font-medium">{t.badges.insured}</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center bg-white rounded-lg">
            <a href="/" className="block">
              <Image
                src="/logo.jpg"
                alt="Grace and Shine Cleaning & Maintenance Services Logo"
                width={200}
                height={60}
                className="h-10 w-auto md:h-14 object-contain"
                priority
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={`#${item.key}`}
                className="text-neutral hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={onGetEstimate}
              className="bg-accent hover:bg-accent-light text-primary-dark font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              {t.cta}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-primary hover:bg-neutral-surface rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-neutral-light pt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={`#${item.key}`}
                  className="text-neutral hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  onGetEstimate();
                  setIsMenuOpen(false);
                }}
                className="bg-accent hover:bg-accent-light text-primary-dark font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 mt-2"
              >
                {t.cta}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
