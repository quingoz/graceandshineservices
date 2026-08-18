"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  SearchCheck,
  FileSpreadsheet,
  CalendarCheck,
  Sparkles,
} from "lucide-react";

type Language = "en" | "es";

interface HowItWorksProps {
  language: Language;
}

const translations = {
  en: {
    title: "How It Works",
    subtitle: "A simple, straightforward process from your first call to a spotless space",
    steps: [
      {
        title: "Request a Quote",
        description: "Tell us about your property and cleaning needs.",
      },
      {
        title: "Property Assessment",
        description: "We review the property and scope of work.",
      },
      {
        title: "Receive Your Estimate",
        description: "We provide a customized estimate based on your needs.",
      },
      {
        title: "Schedule Your Service",
        description: "We coordinate a convenient service date.",
      },
      {
        title: "We Clean. You Enjoy the Difference.",
        description: "Sit back and relax in a clean, fresh, and well-cared-for space.",
      },
    ],
  },
  es: {
    title: "Cómo Funciona",
    subtitle: "Un proceso simple y directo desde su primera llamada hasta un espacio impecable",
    steps: [
      {
        title: "Solicite una Cotización",
        description: "Cuéntenos sobre su propiedad y sus necesidades de limpieza.",
      },
      {
        title: "Evaluación de la Propiedad",
        description: "Revisamos la propiedad y el alcance del trabajo.",
      },
      {
        title: "Reciba Su Cotización",
        description: "Le brindamos una cotización personalizada según sus necesidades.",
      },
      {
        title: "Programe Su Servicio",
        description: "Coordinamos una fecha de servicio conveniente para usted.",
      },
      {
        title: "Limpiamos. Usted Disfruta la Diferencia.",
        description: "Relájese y disfrute de un espacio limpio, fresco y bien cuidado.",
      },
    ],
  },
};

const icons = [ClipboardList, SearchCheck, FileSpreadsheet, CalendarCheck, Sparkles];

export default function HowItWorks({ language }: HowItWorksProps) {
  const t = translations[language];

  return (
    <section className="py-20 bg-neutral-surface" id="how-it-works">
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

        {/* Steps */}
        <motion.div
          className="relative grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-accent/30 -z-0" />

          {t.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step Number + Icon */}
                <div className="relative z-10 mb-5">
                  <div className="w-16 h-16 rounded-full bg-primary shadow-lg flex items-center justify-center border-4 border-neutral-surface">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-primary-dark text-xs font-bold flex items-center justify-center shadow-md">
                    {index + 1}
                  </div>
                </div>

                <h3 className="font-montserrat text-base md:text-lg font-bold text-primary mb-2 px-2">
                  {step.title}
                </h3>
                <p className="text-neutral text-sm leading-relaxed px-2">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
