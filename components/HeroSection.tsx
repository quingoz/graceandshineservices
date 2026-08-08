"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Star } from "lucide-react";
import QuickQuoteForm from "./QuickQuoteForm";

type Language = "en" | "es";

interface HeroSectionProps {
  language: Language;
}

const translations = {
  en: {
    title: "Bringing Grace to Every Space,",
    titleHighlight: "Leaving Every Space Shining",
    subtitle: "Professional cleaning and maintenance services for Homes, Businesses, Condominiums, and Managed Properties in Charlotte, NC.",
    ctaPrimary: "Request a Free Estimate",
    ctaSecondary: "Call Now",
    heroAlt: "Professional cleaning service in Charlotte, NC",
  },
  es: {
    title: "Llevando Gracia a Cada Espacio,",
    titleHighlight: "Dejando Cada Espacio Brillando",
    subtitle: "Servicios profesionales de limpieza y mantenimiento para Hogares, Negocios, Condominios y Propiedades Administradas en Charlotte, NC.",
    ctaPrimary: "Solicitar Cotización Gratis",
    ctaSecondary: "Llamar Ahora",
    heroAlt: "Servicio profesional de limpieza en Charlotte, NC",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export default function HeroSection({ language }: HeroSectionProps) {
  const t = translations[language];

  return (
    <section className="relative min-h-screen flex items-center bg-primary-dark overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt={t.heroAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-primary-dark/90 via-primary/80 to-primary/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-white"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Stars */}
            <motion.div variants={itemVariants} className="mb-6 flex justify-center lg:justify-start">
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 md:w-8 md:h-8 text-accent fill-accent" />
                ))}
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.h1 variants={itemVariants} className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {t.title}
              <br />
              <span className="text-accent">{t.titleHighlight}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-neutral-surface mb-8 max-w-xl">
              {t.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-accent hover:bg-accent-light text-primary-dark font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-center"
              >
                {t.ctaPrimary}
              </button>
              <a
                href="tel:7043097024"
                className="flex items-center justify-center gap-2 border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-accent/50 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                {t.ctaSecondary}: (704) 309-7024
              </a>
            </motion.div>

            {/* Trust Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-white/90 text-sm">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <span>Trusted by Charlotte families</span>
            </motion.div>
          </motion.div>

          {/* Right Content - Quick Quote Form */}
          <motion.div
            id="quote-form"
            className="lg:mt-0 mt-8"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          >
            <QuickQuoteForm language={language} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
