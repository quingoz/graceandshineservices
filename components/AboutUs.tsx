"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Sparkles, Target, Eye, Shield, Star, Gem, Handshake } from "lucide-react";

type Language = "en" | "es";

interface AboutUsProps {
  language: Language;
}

const translations = {
  en: {
    title: "About Us",
    subtitle: "Our Story",
    grace: '"Grace"',
    graceMeaning: "God's grace, kindness, and integrity in everything we do",
    shine: '"Shine"',
    shineMeaning: "Beauty, freshness, and brightness in every space we touch",
    story: "Grace and Shine Cleaning & Maintenance Services was founded from the dream of an immigrant family who came to the United States with the hope of building a better future through honest work, perseverance, and faith in God. Like many families starting a new life in a different country, we faced many challenges—adapting to a new culture, learning new ways of working, and building a business from the ground up. Every challenge strengthened our commitment to grow with integrity, responsibility, and excellence. What began as an opportunity to create a better future soon became a family-owned cleaning and maintenance company dedicated to delivering high-quality service. From the very beginning, we understood that cleaning is about much more than appearance; it is about providing peace of mind, building trust, and creating spaces where people feel comfortable and at home. Every home, apartment, and business we serve is treated with the same care and respect we would give our own. We believe excellence is found in the smallest details and that trust is earned through quality work, reliability, punctuality, and kindness. Our name, Grace and Shine, reflects the values that inspire us every day. Grace represents our commitment to serving others with humility, honesty, and respect. Shine reflects our dedication to excellence and our promise to leave every space spotless, allowing our work to speak for itself. Today, we are deeply grateful for every client who has placed their trust in us. Because of that trust, we continue to grow while staying true to our roots and the values on which we built our business. More than providing cleaning services, our mission is to reflect quality, commitment, and the value of work done with care and dedication. Because we believe every new beginning deserves a clean, well-cared-for space filled with hope.",
    mission: {
      title: "Our Mission",
      description: "To provide exceptional cleaning and maintenance services that exceed expectations, creating clean, healthy, and beautiful spaces for our clients.",
    },
    vision: {
      title: "Our Vision",
      description: "To be the most trusted and respected cleaning service in Charlotte, known for our integrity, quality, and commitment to customer satisfaction.",
    },
    values: {
      title: "Our Values",
      integrity: "Integrity",
      quality: "Quality",
      trust: "Trust",
      detail: "Attention to Detail",
      commitment: "Commitment",
    },
    aboutAlt: "Grace and Shine cleaning team at work in Charlotte, NC",
  },
  es: {
    title: "Sobre Nosotros",
    subtitle: "Nuestra Historia",
    grace: '"Gracia"',
    graceMeaning: "La gracia de Dios, amabilidad e integridad en todo lo que hacemos",
    shine: '"Brillo"',
    shineMeaning: "Belleza, frescura y brillo en cada espacio que tocamos",
    story: "Grace and Shine Cleaning & Maintenance Services es un negocio familiar dedicado a traer excelencia a cada hogar y negocio que servimos. Nuestro nombre refleja nuestro compromiso de tratar a cada cliente con gracia y dejar cada espacio brillando.",
    mission: {
      title: "Nuestra Misión",
      description: "Proporcionar servicios excepcionales de limpieza y mantenimiento que superen las expectativas, creando espacios limpios, saludables y hermosos para nuestros clientes.",
    },
    vision: {
      title: "Nuestra Visión",
      description: "Ser el servicio de limpieza más confiable y respetado en Charlotte, conocido por nuestra integridad, calidad y compromiso con la satisfacción del cliente.",
    },
    values: {
      title: "Nuestros Valores",
      integrity: "Integridad",
      quality: "Calidad",
      trust: "Confianza",
      detail: "Atención al Detalle",
      commitment: "Compromiso",
    },
    aboutAlt: "Equipo de limpieza de Grace and Shine trabajando en Charlotte, NC",
  },
};

export default function AboutUs({ language }: AboutUsProps) {
  const t = translations[language];

  const sentences = t.story.split(". ");
  const storyIntro = sentences.slice(0, 4).join(". ") + ".";
  const storyRest = sentences.slice(4).join(". ");

  const values = [
    { icon: Shield, label: t.values.integrity },
    { icon: Star, label: t.values.quality },
    { icon: Handshake, label: t.values.trust },
    { icon: Gem, label: t.values.detail },
    { icon: Heart, label: t.values.commitment },
  ];

  return (
    <section className="py-20 bg-base" id="about">
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
        </motion.div>

        {/* Grace & Shine Meaning */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {/* Grace */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border-l-4 border-accent hover:border-sky-400 hover:scale-[1.01] transition-all duration-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-accent" />
              <h4 className="font-montserrat text-2xl font-bold text-primary">
                {t.grace}
              </h4>
            </div>
            <p className="text-neutral text-lg">{t.graceMeaning}</p>
          </motion.div>

          {/* Shine */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border-l-4 border-accent hover:border-sky-400 hover:scale-[1.01] transition-all duration-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-accent" />
              <h4 className="font-montserrat text-2xl font-bold text-primary">
                {t.shine}
              </h4>
            </div>
            <p className="text-neutral text-lg">{t.shineMeaning}</p>
          </motion.div>
        </motion.div>

        {/* Story - Two Column Layout */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {/* Image with Gold Accent Frame */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.3 }}
            className="order-2 lg:order-1"
          >
            <div className="relative group">
              {/* Decorative Gold Frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-accent rounded-3xl z-0" />

              {/* Image Container */}
              <div className="relative z-10 w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/about-us.jpg"
                  alt={t.aboutAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>

              {/* Gold Badge */}
              <div className="absolute -top-3 -left-3 z-20 bg-accent text-primary-dark text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-1">
                <Star className="w-3 h-3 fill-primary-dark" />
                <span>Grace &amp; Shine</span>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.3 }}
            className="order-1 lg:order-2"
          >
            <h3 className="font-montserrat text-2xl md:text-3xl font-semibold text-accent mb-4">
              {t.subtitle}
            </h3>
            <p className="text-lg text-neutral leading-relaxed">
              {storyIntro}
            </p>
          </motion.div>
        </motion.div>

        {/* Rest of the Story */}
        <div className="max-w-5xl mx-auto mt-16">
          <p className="text-lg text-neutral leading-relaxed">
            {storyRest}
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-accent/20 hover:border-sky-400 hover:shadow-xl transition-all hover:scale-[1.01]"
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-primary" />
              <h4 className="font-montserrat text-xl font-bold text-primary">
                {t.mission.title}
              </h4>
            </div>
            <p className="text-neutral">{t.mission.description}</p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-accent/20 hover:border-sky-400 hover:shadow-xl transition-all hover:scale-[1.01]"
          >
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-8 h-8 text-primary" />
              <h4 className="font-montserrat text-xl font-bold text-primary">
                {t.vision.title}
              </h4>
            </div>
            <p className="text-neutral">{t.vision.description}</p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="font-montserrat text-3xl font-bold text-primary text-center mb-8">
            {t.values.title}
          </h3>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-5 gap-4"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-6 shadow-md border-2 border-accent/30 hover:border-amber-400/40 hover:shadow-lg transition-all duration-200 text-center group hover:scale-[1.01]"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
                  <value.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <p className="font-semibold text-primary text-sm">{value.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
