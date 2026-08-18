"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ChevronDown, ChevronUp, CheckCircle } from "lucide-react";
import { faqs } from "@/data/faqs";

type Language = "en" | "es";

interface ServiceAreasAndFAQProps {
  language: Language;
  activeSection?: "all" | "areas" | "faq";
}

const translations = {
  en: {
    areasTitle: "Areas We Serve",
    areasEyebrow: "Service Areas",
    areasSubtitle: "Our primary focus is Charlotte, NC and the nearby communities where we proudly provide our services.",
    mapHeading: "Charlotte, NC & Surrounding Areas",
    additionalNote: "Additional nearby areas may be available depending on service type, location, scheduling, and project scope.",
    notListed: "Don't see your area listed?",
    contactUs: "Contact us",
    checkAvailability: "to check availability in your location.",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Find answers to common questions about our services",
  },
  es: {
    areasTitle: "Áreas que Atendemos",
    areasEyebrow: "Áreas de Servicio",
    areasSubtitle: "Nuestro enfoque principal es Charlotte, NC y las comunidades cercanas donde ofrecemos con orgullo nuestros servicios.",
    mapHeading: "Charlotte, NC y Áreas Circundantes",
    additionalNote: "Es posible atender áreas cercanas adicionales según el tipo de servicio, la ubicación, la programación y el alcance del proyecto.",
    notListed: "¿No ve su área en la lista?",
    contactUs: "Contáctenos",
    checkAvailability: "para verificar disponibilidad en su ubicación.",
    faqTitle: "Preguntas Frecuentes",
    faqSubtitle: "Encuentre respuestas a preguntas comunes sobre nuestros servicios",
  },
};

const serviceAreas = [
  "Charlotte",
  "Matthews",
  "Mint Hill",
  "Pineville",
  "Huntersville",
  "Cornelius",
  "Davidson",
  "Indian Trail",
  "Stallings",
  "Waxhaw",
  "Weddington",
  "Monroe",
  "Concord",
  "Harrisburg",
  "Kannapolis",
  "Gastonia",
  "Belmont",
  "Mount Holly",
];

export default function ServiceAreasAndFAQ({ language, activeSection = "all" }: ServiceAreasAndFAQProps) {
  const t = translations[language];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-20 bg-base" id={activeSection === "faq" ? "faq" : "areas"}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Service Areas */}
        {activeSection !== "faq" && (<div className="mb-20">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-4">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t.areasEyebrow}</span>
            </div>
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-primary mb-4">
              {t.areasTitle}
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-neutral max-w-2xl mx-auto">
              {t.areasSubtitle}
            </p>
          </motion.div>

          {/* Visual Map Representation */}
          <div className="bg-gradient-to-br from-primary via-primary to-primary-dark rounded-3xl p-8 md:p-10 mb-8 border border-accent/30 shadow-xl relative overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

            <div className="relative z-10 flex items-center justify-center gap-2 mb-8">
              <MapPin className="w-6 h-6 text-accent" />
              <h3 className="font-montserrat text-2xl font-bold text-white text-center">
                {t.mapHeading}
              </h3>
            </div>

            {/* Grid of Areas */}
            <motion.div 
              className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.04,
                  },
                },
              }}
            >
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { y: 10, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center justify-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2.5 text-center text-sm font-medium text-white border border-white/20 hover:border-accent hover:bg-white/20 transition-all duration-200 cursor-default"
                >
                  <MapPin className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span>{area}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional Note */}
            <p className="relative z-10 text-center text-neutral-surface text-sm mt-8 pt-6 border-t border-white/15 max-w-2xl mx-auto">
              {t.additionalNote}
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-neutral">
              {t.notListed}{" "}
              <a href="/contact/" className="text-primary font-semibold hover:text-accent transition-colors">
                {t.contactUs}
              </a>{" "}
              {t.checkAvailability}
            </p>
          </div>
        </div>)}

        {/* FAQ Section */}
        {activeSection !== "areas" && (<div id={activeSection === "all" ? "faq" : undefined}>
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-primary mb-4">
              {t.faqTitle}
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-neutral max-w-2xl mx-auto">
              {t.faqSubtitle}
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            className="max-w-3xl mx-auto space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
                }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-neutral-light hover:border-sky-400/50 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-neutral-surface transition-all duration-300"
                  aria-expanded={openFaq === index}
                >
                  <span className="font-semibold text-primary pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-accent flex-shrink-0" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-0">
                        <div className="border-t border-neutral-light pt-4">
                          <p className="text-neutral leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Help */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">
                Still have questions? Contact us at (704) 309-7024
              </span>
            </div>
          </div>
        </div>)}
      </div>
    </section>
  );
}
