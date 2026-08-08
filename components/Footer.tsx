"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, Shield, ArrowUp } from "lucide-react";

type Language = "en" | "es";

interface FooterProps {
  language: Language;
}

const translations = {
  en: {
    company: "Grace and Shine Cleaning & Maintenance Services",
    quickLinks: "Quick Links",
    contactInfo: "Contact Information",
    rights: "All rights reserved.",
    insured: "Insured & Licensed",
    backToTop: "Back to Top",
    links: {
      home: "Home",
      about: "About Us",
      services: "Services",
      areas: "Service Areas",
      faq: "FAQ",
      contact: "Contact",
    },
  },
  es: {
    company: "Grace and Shine Cleaning & Maintenance Services",
    quickLinks: "Enlaces Rápidos",
    contactInfo: "Información de Contacto",
    rights: "Todos los derechos reservados.",
    insured: "Asegurado y Licenciado",
    backToTop: "Volver Arriba",
    links: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      areas: "Áreas de Servicio",
      faq: "Preguntas",
      contact: "Contacto",
    },
  },
};

export default function Footer({ language }: FooterProps) {
  const t = translations[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            {/* Logo */}
            <div className="mb-4 bg-white rounded-lg p-2 inline-block">
              <a href="/">
                <Image
                  src="/logo.jpg"
                  alt="Grace and Shine Cleaning & Maintenance Services Logo"
                  width={200}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </a>
            </div>
            <div className="space-y-3 text-neutral-surface">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-sm">
                  7708 Arboretum Drive<br />
                  Charlotte, NC
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:7043097024" className="text-sm hover:text-accent transition-colors">
                  (704) 309-7024
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:graceandshineservice@gmail.com" className="text-sm hover:text-accent transition-colors">
                  graceandshineservice@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="https://instagram.com/graceandshineservices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-accent transition-colors"
                >
                  @graceandshineservices
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat text-xl font-bold mb-4 text-accent">
              {t.quickLinks}
            </h3>
            <nav className="space-y-2">
              <a href="#" className="block text-neutral-surface hover:text-accent transition-colors text-sm">
                {t.links.home}
              </a>
              <a href="#about" className="block text-neutral-surface hover:text-accent transition-colors text-sm">
                {t.links.about}
              </a>
              <a href="#services" className="block text-neutral-surface hover:text-accent transition-colors text-sm">
                {t.links.services}
              </a>
              <a href="#areas" className="block text-neutral-surface hover:text-accent transition-colors text-sm">
                {t.links.areas}
              </a>
              <a href="#faq" className="block text-neutral-surface hover:text-accent transition-colors text-sm">
                {t.links.faq}
              </a>
              <a href="#contact" className="block text-neutral-surface hover:text-accent transition-colors text-sm">
                {t.links.contact}
              </a>
            </nav>
          </div>

          {/* Trust Badge & CTA */}
          <div>
            <h3 className="font-montserrat text-xl font-bold mb-4 text-accent">
              {t.contactInfo}
            </h3>
            <div className="space-y-4">
              {/* Trust Badge */}
              <div className="bg-white/10 rounded-lg p-4 border border-accent/30">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-accent" />
                  <span className="font-semibold text-white">{t.insured}</span>
                </div>
                <p className="text-xs text-neutral-surface">
                  Fully insured and licensed for your peace of mind
                </p>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full bg-accent hover:bg-accent-light text-primary-dark font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-neutral-surface">
              © {new Date().getFullYear()} {t.company}. {t.rights}
            </p>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-accent hover:text-white transition-colors text-sm font-medium"
              aria-label="Back to top"
            >
              {t.backToTop}
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
