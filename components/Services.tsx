"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Home,
  Sparkles,
  Building,
  Briefcase,
  Truck,
  Hammer,
  Building2,
  Wrench,
  ChevronRight,
} from "lucide-react";

type Language = "en" | "es";

interface ServicesProps {
  language: Language;
}

const translations = {
  en: {
    title: "Our Services",
    subtitle: "Professional cleaning and maintenance solutions for every need",
    learnMore: "Learn More",
    cta: "Get a Free Quote",
  },
  es: {
    title: "Nuestros Servicios",
    subtitle: "Soluciones profesionales de limpieza y mantenimiento para cada necesidad",
    learnMore: "Saber Más",
    cta: "Obtener Cotización Gratis",
  },
};

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Complete home cleaning services tailored to your needs and schedule.",
    color: "from-blue-500 to-blue-600",
    image: "/service-residential.jpg",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Thorough cleaning for a fresh start, perfect for seasonal refreshes.",
    color: "from-purple-500 to-purple-600",
    image: "/service-deep.jpg",
  },
  {
    icon: Building,
    title: "Commercial Cleaning",
    description: "Professional cleaning for retail spaces, restaurants, and facilities.",
    color: "from-green-500 to-green-600",
    image: "/service-commercial.jpg",
  },
  {
    icon: Briefcase,
    title: "Office Cleaning",
    description: "Keep your workspace clean, healthy, and productive for your team.",
    color: "from-teal-500 to-teal-600",
    image: "/service-office.jpg",
  },
  {
    icon: Truck,
    title: "Move-In / Move-Out Cleaning",
    description: "Make your transition smooth with thorough move-in or move-out cleaning.",
    color: "from-orange-500 to-orange-600",
    image: "/service-move.jpg",
  },
  {
    icon: Hammer,
    title: "Post-Construction Cleaning",
    description: "Remove dust and debris after renovations with detailed post-construction cleaning.",
    color: "from-amber-500 to-amber-600",
    image: "/service-post-construction.jpg",
  },
  {
    icon: Building2,
    title: "Condominium Services",
    description: "Specialized cleaning for condos and HOA-managed properties.",
    color: "from-cyan-500 to-cyan-600",
    image: "/service-condo.jpg",
  },
  {
    icon: Wrench,
    title: "Maintenance Services",
    description: "Ongoing maintenance to keep your property in pristine condition.",
    color: "from-indigo-500 to-indigo-600",
    image: "/service-maintenance.jpg",
  },
];

export default function Services({ language }: ServicesProps) {
  const t = translations[language];
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section className="py-20 bg-neutral-surface" id="services">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-primary mb-4">
            {t.title}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-neutral max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-200 hover:scale-[1.02] border-2 border-transparent hover:border-sky-400 cursor-pointer group overflow-hidden"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Service Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-montserrat text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-neutral text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-accent font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>{t.learnMore}</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-12">
          <motion.button
            onClick={() => document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-accent hover:bg-accent-light text-primary-dark font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2"
            whileTap={{ scale: 0.98 }}
          >
            {t.cta}
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
