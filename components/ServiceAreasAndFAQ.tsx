"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ChevronDown, ChevronUp, CheckCircle } from "lucide-react";

type Language = "en" | "es";

interface ServiceAreasAndFAQProps {
  language: Language;
}

const translations = {
  en: {
    areasTitle: "Service Areas",
    areasSubtitle: "Proudly serving Charlotte, NC and surrounding communities",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Find answers to common questions about our services",
  },
  es: {
    areasTitle: "Áreas de Servicio",
    areasSubtitle: "Orgullosamente sirviendo Charlotte, NC y comunidades circundantes",
    faqTitle: "Preguntas Frecuentes",
    faqSubtitle: "Encuentre respuestas a preguntas comunes sobre nuestros servicios",
  },
};

const serviceAreas = [
  "Charlotte, NC",
  "South Charlotte",
  "Ballantyne",
  "Myers Park",
  "Dilworth",
  "Elizabeth",
  "Plaza Midwood",
  "NoDa",
  "University City",
  "Huntersville",
  "Cornelius",
  "Davidson",
  "Matthews",
  "Mint Hill",
  "Pineville",
];

const faqs = [
  {
    question: "Do you provide your own cleaning supplies and equipment?",
    answer: "Yes, we bring all necessary cleaning supplies and professional-grade equipment to ensure the best results. We use high-quality, eco-friendly products that are safe for your family and pets.",
  },
  {
    question: "Are you insured and licensed?",
    answer: "Absolutely. Grace and Shine is fully insured and licensed for your peace of mind. We carry comprehensive liability insurance and workers' compensation coverage to protect your property and our team.",
  },
  {
    question: "Do you offer recurring cleaning services?",
    answer: "Yes, we offer flexible recurring cleaning schedules including weekly, bi-weekly, and monthly services. We can also customize a schedule to fit your specific needs and preferences.",
  },
  {
    question: "Do you clean condominiums and managed properties?",
    answer: "Yes, we specialize in condominium and HOA-managed property cleaning. Our team is experienced with the specific requirements and regulations of managed properties and works seamlessly with property managers.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "We understand that plans change. Please provide at least 24 hours' notice for cancellations or rescheduling. Late cancellations may incur a fee. We're happy to work with you to find a convenient alternative time.",
  },
  {
    question: "How do you handle special requests or specific areas of concern?",
    answer: "We encourage you to share any special requests or areas that need extra attention. Our team is trained to adapt to your specific needs and will ensure your concerns are addressed during every visit.",
  },
];

export default function ServiceAreasAndFAQ({ language }: ServiceAreasAndFAQProps) {
  const t = translations[language];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-20 bg-base" id="areas">
      <div className="max-w-7xl mx-auto px-4">
        {/* Service Areas */}
        <div className="mb-20">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-primary mb-4">
              {t.areasTitle}
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-neutral max-w-2xl mx-auto">
              {t.areasSubtitle}
            </p>
          </motion.div>

          {/* Visual Map Representation */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 mb-8 border border-accent/20">
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-6 h-6 text-accent" />
              <h3 className="font-montserrat text-2xl font-bold text-primary">
                Charlotte, NC Metropolitan Area
              </h3>
            </div>

            {/* Grid of Areas */}
            <motion.div 
              className="grid grid-cols-3 sm:grid-cols-5 gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.05,
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
                  className="bg-white rounded-lg px-3 py-2 text-center text-sm text-neutral border border-primary/20 hover:border-sky-400 hover:text-primary transition-colors cursor-default hover:scale-[1.01]"
                >
                  {area}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-neutral mb-4">
              Don't see your area listed?{" "}
              <span className="text-primary font-semibold">Contact us</span> to check availability in your location.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faq">
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
        </div>
      </div>
    </section>
  );
}
