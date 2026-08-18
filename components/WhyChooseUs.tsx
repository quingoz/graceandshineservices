"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Heart,
  Clock,
  Gem,
  Shield,
  Star,
  Wrench,
  ThumbsUp,
  Users,
  CheckCircle,
  ShieldCheck,
  Umbrella,
  Car,
  FileCheck,
  Building2,
} from "lucide-react";

type Language = "en" | "es";

interface WhyChooseUsProps {
  language: Language;
}

const translations = {
  en: {
    title: "Why Choose Grace and Shine?",
    subtitle: "Experience the difference with our commitment to excellence",
    bannerTitle: "See the Grace and Shine Difference",
    bannerSubtitle: "Real results that speak for themselves — from before to spotless after.",
    sealTitle: "Insured & Bonded",
    sealSubtitle: "Your property and peace of mind are fully protected with every service.",
    beforeAfterAlt: "Before and after cleaning results by Grace and Shine in Charlotte, NC",
    insurance: {
      eyebrow: "Trusted by Commercial Clients & Property Managers",
      title: "Fully Insured & Bonded",
      description:
        "Grace & Shine Cleaning & Maintenance Services is committed to providing professional and dependable services while maintaining appropriate insurance and bonding coverage for our business operations.",
      coverages: [
        {
          icon: ShieldCheck,
          title: "General Liability Insurance",
        },
        {
          icon: Umbrella,
          title: "Umbrella Insurance",
        },
        {
          icon: Car,
          title: "Commercial Auto Liability Insurance",
        },
      ],
      coiNote: "Certificate of Insurance (COI) available upon request.",
      coiBadge: "COI Available on Request",
      audienceNote: "Serving businesses, HOAs, condominiums, and managed properties with confidence.",
    },
  },
  es: {
    title: "¿Por Qué Elegir Grace and Shine?",
    subtitle: "Experimente la diferencia con nuestro compromiso con la excelencia",
    bannerTitle: "Vea la Diferencia de Grace and Shine",
    bannerSubtitle: "Resultados reales que hablan por sí solos — de antes a impecable después.",
    sealTitle: "Asegurado y Garantizado",
    sealSubtitle: "Su propiedad y tranquilidad están completamente protegidas en cada servicio.",
    beforeAfterAlt: "Resultados de limpieza antes y después de Grace and Shine en Charlotte, NC",
    insurance: {
      eyebrow: "Confiado por Clientes Comerciales y Administradores de Propiedades",
      title: "Totalmente Asegurados y Garantizados",
      description:
        "Grace & Shine Cleaning & Maintenance Services está comprometido a brindar servicios profesionales y confiables, manteniendo la cobertura de seguros y fianza apropiada para nuestras operaciones comerciales.",
      coverages: [
        {
          icon: ShieldCheck,
          title: "Seguro de Responsabilidad Civil General",
        },
        {
          icon: Umbrella,
          title: "Seguro Umbrella (Cobertura Adicional)",
        },
        {
          icon: Car,
          title: "Seguro de Responsabilidad de Auto Comercial",
        },
      ],
      coiNote: "Certificado de Seguro (COI) disponible a solicitud.",
      coiBadge: "COI Disponible a Solicitud",
      audienceNote: "Servimos a negocios, HOAs, condominios y propiedades administradas con total confianza.",
    },
  },
};

const reasons = [
  {
    icon: Users,
    title: "Family-Owned & Local",
    description: "Proudly serving Charlotte as a local family business with deep community roots.",
    highlighted: false,
  },
  {
    icon: Clock,
    title: "Reliable & Professional Service",
    description: "Count on us for punctual, thorough, and professional cleaning every time.",
    highlighted: false,
  },
  {
    icon: Gem,
    title: "Attention to Every Detail",
    description: "We don't cut corners. Every space receives meticulous care and attention.",
    highlighted: false,
  },
  {
    icon: Shield,
    title: "🛡️ Insured for Your Peace of Mind",
    description: "Fully insured and licensed to protect your property and give you complete peace of mind.",
    highlighted: true,
  },
  {
    icon: Wrench,
    title: "Professional Equipment & Supplies",
    description: "We use industry-leading equipment and high-quality supplies for superior results.",
    highlighted: false,
  },
  {
    icon: ThumbsUp,
    title: "Customer Satisfaction Guaranteed",
    description: "Your satisfaction is our priority. We're not happy until you're thrilled with the results.",
    highlighted: false,
  },
];

export default function WhyChooseUs({ language }: WhyChooseUsProps) {
  const t = translations[language];

  return (
    <section className="py-20 bg-primary text-white" id="why-choose">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-4">
            {t.title}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-neutral-surface max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ duration: 0.3 }}
              className={`relative rounded-2xl p-8 transition-all duration-200 ${
                reason.highlighted
                  ? "bg-gradient-to-br from-accent to-accent-dark text-primary-dark shadow-2xl transform scale-105 border-4 border-white/30"
                  : "bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 hover:border-amber-400/40 hover:scale-[1.01]"
              }`}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                  reason.highlighted
                    ? "bg-primary-dark text-accent"
                    : "bg-accent/20 text-accent"
                }`}
              >
                <reason.icon className="w-8 h-8" />
              </div>

              {/* Title */}
              <h3
                className={`font-montserrat text-xl font-bold mb-3 ${
                  reason.highlighted ? "text-primary-dark" : "text-white"
                }`}
              >
                {reason.title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed ${
                  reason.highlighted ? "text-primary-dark/80" : "text-neutral-surface"
                }`}
              >
                {reason.description}
              </p>

              {/* Highlighted Badge */}
              {reason.highlighted && (
                <div className="absolute -top-3 -right-3">
                  <div className="bg-primary-dark text-accent text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    TOP PRIORITY
                  </div>
                </div>
              )}

              {/* Check Mark for Non-Highlighted */}
              {!reason.highlighted && (
                <div className="absolute bottom-4 right-4">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Before & After Banner */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="relative mt-20 h-80 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl border-4 border-accent group"
        >
          <Image
            src="/before-after.jpg"
            alt={t.beforeAfterAlt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-white mb-2">
              {t.bannerTitle}
            </h3>
            <p className="text-neutral-surface max-w-md">
              {t.bannerSubtitle}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Insurance & Bonding — High-Visibility Panel */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white text-primary-dark">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="rounded-3xl bg-gradient-to-br from-primary-dark via-primary to-primary-dark p-8 md:p-12 shadow-2xl border border-accent/40 relative overflow-hidden">
              {/* Decorative accent glow */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

              <div className="relative z-10 grid lg:grid-cols-[auto,1fr] gap-10 items-start">
                {/* Seal */}
                <div className="flex flex-col items-center text-center lg:w-56">
                  <div className="w-24 h-24 rounded-full bg-accent/15 border-2 border-accent flex items-center justify-center mb-4">
                    <Shield className="w-12 h-12 text-accent" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 bg-accent text-primary-dark text-xs font-bold px-4 py-1.5 rounded-full mb-2">
                    <FileCheck className="w-3.5 h-3.5" />
                    {t.insurance.coiBadge}
                  </span>
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-2 flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    {t.insurance.eyebrow}
                  </p>
                  <h3 className="font-montserrat text-3xl md:text-4xl font-bold text-white mb-4">
                    {t.insurance.title}
                  </h3>
                  <p className="text-neutral-surface leading-relaxed mb-8 max-w-3xl">
                    {t.insurance.description}
                  </p>

                  {/* Coverage Cards */}
                  <div className="grid sm:grid-cols-3 gap-4 mb-8">
                    {t.insurance.coverages.map((coverage, index) => (
                      <div
                        key={index}
                        className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-accent/50 hover:bg-white/15 transition-all duration-200 rounded-xl p-5"
                      >
                        <div className="w-11 h-11 rounded-lg bg-accent/20 flex items-center justify-center mb-3">
                          <coverage.icon className="w-6 h-6 text-accent" />
                        </div>
                        <p className="text-white font-semibold text-sm leading-snug">
                          {coverage.title}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* COI note + audience note */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-t border-white/15 pt-6">
                    <div className="flex items-center gap-2 text-white/95 text-sm font-medium">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>{t.insurance.coiNote}</span>
                    </div>
                    <div className="hidden sm:block w-px h-5 bg-white/20" />
                    <p className="text-neutral-surface text-sm">
                      {t.insurance.audienceNote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
