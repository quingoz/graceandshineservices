"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Clock, Gem, Shield, Star, Wrench, ThumbsUp, Users, CheckCircle } from "lucide-react";

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
  },
  es: {
    title: "¿Por Qué Elegir Grace and Shine?",
    subtitle: "Experimente la diferencia con nuestro compromiso con la excelencia",
    bannerTitle: "Vea la Diferencia de Grace and Shine",
    bannerSubtitle: "Resultados reales que hablan por sí solos — de antes a impecable después.",
    sealTitle: "Asegurado y Garantizado",
    sealSubtitle: "Su propiedad y tranquilidad están completamente protegidas en cada servicio.",
    beforeAfterAlt: "Resultados de limpieza antes y después de Grace and Shine en Charlotte, NC",
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

        {/* Before & After Banner with Insured & Bonded Seal */}
        <motion.div
          className="mt-20 grid lg:grid-cols-2 gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {/* Before/After Image */}
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.5 }}
            className="relative h-80 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl border-4 border-accent group"
          >
            <Image
              src="/before-after.jpg"
              alt={t.beforeAfterAlt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
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

          {/* Insured & Bonded Seal */}
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl border-4 border-accent text-center max-w-sm transform hover:scale-[1.01] transition-transform duration-300">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-montserrat text-2xl font-bold text-primary-dark mb-3">
                {t.sealTitle}
              </h3>
              <p className="text-neutral leading-relaxed">
                {t.sealSubtitle}
              </p>
              <div className="mt-6 flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
