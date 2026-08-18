"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
  X,
  CheckCircle2,
} from "lucide-react";

type Language = "en" | "es";

interface ServicesProps {
  language: Language;
  onGetEstimate?: () => void;
}

const translations = {
  en: {
    title: "Our Services",
    subtitle: "Professional cleaning and maintenance solutions for every need",
    learnMore: "Learn More",
    cta: "Get a Free Quote",
    includes: "This service may include:",
    close: "Close",
    requestQuote: "Request a Free Quote",
  },
  es: {
    title: "Nuestros Servicios",
    subtitle: "Soluciones profesionales de limpieza y mantenimiento para cada necesidad",
    learnMore: "Saber Más",
    cta: "Obtener Cotización Gratis",
    includes: "Este servicio puede incluir:",
    close: "Cerrar",
    requestQuote: "Solicitar Cotización Gratis",
  },
};

const services = [
  {
    icon: Home,
    color: "from-blue-500 to-blue-600",
    image: "/service-residential.jpg",
    en: {
      title: "Residential Cleaning",
      description: "Complete home cleaning services tailored to your needs and schedule.",
      intro:
        "We provide professional residential cleaning services designed to keep your home clean, fresh, comfortable, and well-maintained. Our services can be customized to meet the specific needs of each home, whether you need a one-time cleaning or recurring service.",
      items: [
        "Cleaning and sanitizing bathrooms.",
        "Cleaning sinks, toilets, showers, and tubs.",
        "Cleaning kitchen countertops and surfaces.",
        "Cleaning the exterior of appliances.",
        "Cleaning tables and accessible surfaces.",
        "Dusting.",
        "Vacuuming carpets and rugs.",
        "Sweeping and mopping floors.",
        "Cleaning bedrooms and common living areas.",
        "Trash removal.",
        "Cleaning high-touch areas.",
        "General cleaning of doors and accessible surfaces.",
      ],
      outro: "One-time and recurring cleaning services are available based on each client's needs.",
    },
    es: {
      title: "Limpieza Residencial",
      description: "Servicios completos de limpieza para el hogar adaptados a sus necesidades y horario.",
      intro:
        "Ofrecemos servicios profesionales de limpieza residencial diseñados para mantener su hogar limpio, fresco, cómodo y bien cuidado. Adaptamos nuestros servicios a las necesidades de cada hogar, ya sea una limpieza de una sola vez o un servicio recurrente.",
      items: [
        "Limpieza y desinfección de baños.",
        "Limpieza de lavamanos, inodoros, duchas y bañeras.",
        "Limpieza de encimeras y superficies de cocina.",
        "Limpieza exterior de electrodomésticos.",
        "Limpieza de mesas y superficies accesibles.",
        "Eliminación de polvo.",
        "Aspirado de alfombras y tapetes.",
        "Barrido y trapeado de pisos.",
        "Limpieza de dormitorios y áreas comunes.",
        "Eliminación de basura.",
        "Limpieza de áreas de alto contacto.",
        "Limpieza general de puertas y superficies accesibles.",
      ],
      outro: "Ofrecemos servicios de limpieza de una sola vez y opciones recurrentes según las necesidades del cliente.",
    },
  },
  {
    icon: Sparkles,
    color: "from-purple-500 to-purple-600",
    image: "/service-deep.jpg",
    en: {
      title: "Deep Cleaning",
      description: "Thorough cleaning for a fresh start, perfect for seasonal refreshes.",
      intro:
        "Our deep cleaning service is designed for properties that require more detailed attention than a standard cleaning.",
      items: [
        "Everything included in residential cleaning.",
        "Detailed kitchen and bathroom cleaning.",
        "Baseboard cleaning.",
        "Doors and door frames.",
        "Light switches.",
        "Detailed surface cleaning.",
        "Exterior cabinet cleaning.",
        "Hard-to-reach areas.",
        "Removal of accumulated dust and buildup.",
        "Detailed floor cleaning.",
        "Additional detailing based on the property's condition.",
      ],
      outro: "The final scope of service may vary depending on the size, condition, and specific needs of the property.",
    },
    es: {
      title: "Limpieza Profunda",
      description: "Limpieza minuciosa para un nuevo comienzo, ideal para refrescar sus espacios.",
      intro:
        "Nuestro servicio de limpieza profunda está diseñado para propiedades que necesitan una atención más detallada que una limpieza regular.",
      items: [
        "Todo lo incluido en la limpieza residencial.",
        "Limpieza detallada de cocinas y baños.",
        "Limpieza de zócalos (baseboards).",
        "Limpieza de puertas y marcos.",
        "Limpieza de interruptores de luz.",
        "Limpieza detallada de superficies.",
        "Limpieza exterior de gabinetes.",
        "Limpieza de áreas difíciles de alcanzar.",
        "Eliminación de acumulación de polvo y suciedad.",
        "Limpieza detallada de pisos.",
        "Atención adicional según las condiciones de la propiedad.",
      ],
      outro: "El alcance final puede variar dependiendo del tamaño, condición y necesidades de la propiedad.",
    },
  },
  {
    icon: Building,
    color: "from-green-500 to-green-600",
    image: "/service-commercial.jpg",
    en: {
      title: "Commercial Cleaning",
      description: "Professional cleaning for retail spaces, restaurants, and facilities.",
      intro:
        "We provide professional commercial cleaning solutions for businesses and properties that need to maintain a clean, safe, and presentable environment.",
      items: [
        "General cleaning of commercial areas.",
        "Restroom cleaning and sanitizing.",
        "Common area cleaning.",
        "Kitchen and break room cleaning.",
        "Surface cleaning.",
        "Dusting.",
        "Vacuuming.",
        "Sweeping and mopping floors.",
        "Trash removal.",
        "High-touch area cleaning.",
        "Entryway and reception area cleaning.",
        "Scheduled recurring cleaning.",
        "Customized cleaning plans.",
      ],
      outro: "We serve small businesses, commercial properties, condominiums, residential communities, and managed properties.",
    },
    es: {
      title: "Limpieza Comercial",
      description: "Limpieza profesional para locales comerciales, restaurantes e instalaciones.",
      intro:
        "Ofrecemos soluciones profesionales de limpieza comercial para negocios y propiedades que necesitan mantener un ambiente limpio, seguro y presentable.",
      items: [
        "Limpieza general de áreas comerciales.",
        "Limpieza y desinfección de baños.",
        "Limpieza de áreas comunes.",
        "Limpieza de cocinas y áreas de descanso.",
        "Limpieza de superficies.",
        "Eliminación de polvo.",
        "Aspirado.",
        "Barrido y trapeado de pisos.",
        "Eliminación de basura.",
        "Limpieza de áreas de alto contacto.",
        "Limpieza de entradas y áreas de recepción.",
        "Servicios recurrentes programados.",
        "Planes de limpieza personalizados.",
      ],
      outro: "Atendemos pequeños negocios, propiedades comerciales, condominios, comunidades residenciales y propiedades administradas.",
    },
  },
  {
    icon: Briefcase,
    color: "from-teal-500 to-teal-600",
    image: "/service-office.jpg",
    en: {
      title: "Office Cleaning",
      description: "Keep your workspace clean, healthy, and productive for your team.",
      intro:
        "We help maintain clean, organized, and professional workspaces where employees, clients, and visitors feel comfortable.",
      items: [
        "Cleaning desks and accessible surfaces.",
        "Reception areas.",
        "Conference rooms.",
        "Common areas.",
        "Break rooms.",
        "Office kitchens.",
        "Restrooms.",
        "Carpet vacuuming.",
        "Sweeping and mopping floors.",
        "Trash removal.",
        "High-touch surface cleaning.",
        "Dusting.",
        "Recurring cleaning services.",
      ],
      outro: "We can create a cleaning schedule tailored to each office's needs and operating hours.",
    },
    es: {
      title: "Limpieza de Oficinas",
      description: "Mantenga su espacio de trabajo limpio, saludable y productivo para su equipo.",
      intro:
        "Ayudamos a mantener espacios de trabajo limpios, organizados y profesionales para empleados, clientes y visitantes.",
      items: [
        "Limpieza de escritorios y superficies accesibles.",
        "Áreas de recepción.",
        "Salas de reuniones.",
        "Áreas comunes.",
        "Salas de descanso.",
        "Cocinas de oficina.",
        "Baños.",
        "Aspirado de alfombras.",
        "Barrido y trapeado de pisos.",
        "Eliminación de basura.",
        "Limpieza de superficies de alto contacto.",
        "Eliminación de polvo.",
        "Servicios de limpieza recurrentes.",
      ],
      outro: "Podemos crear un programa de limpieza adaptado a las necesidades y horarios de cada oficina.",
    },
  },
  {
    icon: Truck,
    color: "from-orange-500 to-orange-600",
    image: "/service-move.jpg",
    en: {
      title: "Move-In / Move-Out Cleaning",
      description: "Make your transition smooth with thorough move-in or move-out cleaning.",
      intro:
        "We provide specialized Move-In and Move-Out cleaning services to prepare a property for a new resident or leave it ready for inspection, turnover, or the next occupant.",
      items: [
        "Kitchen cleaning.",
        "Bathroom cleaning.",
        "Floor cleaning.",
        "Interior and exterior cabinet cleaning.",
        "Interior and exterior appliance cleaning.",
        "Closet cleaning.",
        "Doors and door frames.",
        "Baseboards.",
        "Accessible surface cleaning.",
        "Removal of accumulated dust and dirt.",
        "Detailed cleaning of the entire property.",
        "Unit preparation for inspection or turnover.",
        "Turnover cleaning between residents.",
      ],
      outro:
        "Move-Out: We leave the property clean and prepared for inspection and turnover. Move-In: We prepare the property so the new resident can move into a clean, fresh, and ready-to-occupy space.",
    },
    es: {
      title: "Limpieza de Mudanza",
      description: "Facilite su transición con una limpieza minuciosa al entrar o salir de una propiedad.",
      intro:
        "Ofrecemos servicios especializados de limpieza Move-In y Move-Out para preparar una propiedad para un nuevo residente o dejarla lista para inspección, entrega o próximo ocupante.",
      items: [
        "Limpieza de cocinas.",
        "Limpieza de baños.",
        "Limpieza de pisos.",
        "Limpieza interior y exterior de gabinetes.",
        "Limpieza interior y exterior de electrodomésticos.",
        "Limpieza de closets.",
        "Limpieza de puertas y marcos.",
        "Limpieza de zócalos (baseboards).",
        "Limpieza de superficies accesibles.",
        "Eliminación de polvo y suciedad acumulada.",
        "Limpieza detallada de toda la propiedad.",
        "Preparación de la unidad para inspección o entrega.",
        "Limpieza entre residentes (turnover cleaning).",
      ],
      outro:
        "Move-Out: dejamos la propiedad limpia y preparada para la inspección y entrega. Move-In: preparamos la propiedad para que el nuevo residente pueda entrar a un espacio limpio, fresco y listo para ocupar.",
    },
  },
  {
    icon: Hammer,
    color: "from-amber-500 to-amber-600",
    image: "/service-post-construction.jpg",
    en: {
      title: "Post-Construction Cleaning",
      description: "Remove dust and debris after renovations with detailed post-construction cleaning.",
      intro:
        "Our post-construction cleaning service helps prepare spaces after construction, remodeling, or renovation. Our goal is to remove construction dust and light debris and leave the space clean, presentable, and ready for use.",
      items: [
        "Construction dust removal.",
        "Surface cleaning.",
        "Floor cleaning.",
        "Cabinet cleaning.",
        "Kitchen cleaning.",
        "Bathroom cleaning.",
        "Glass and window surface cleaning when applicable.",
        "Removal of light construction debris.",
        "Final detail cleaning.",
        "Preparing the space for occupancy.",
      ],
      outro: "The scope of service will depend on the type of project and the condition of the property.",
    },
    es: {
      title: "Limpieza Post-Construcción",
      description: "Eliminamos polvo y residuos después de renovaciones con una limpieza detallada.",
      intro:
        "Nuestro servicio de limpieza post-construcción ayuda a preparar espacios después de una construcción, remodelación o renovación. El objetivo es eliminar polvo y residuos ligeros de construcción y dejar el espacio limpio, presentable y listo para su uso.",
      items: [
        "Eliminación de polvo de construcción.",
        "Limpieza de superficies.",
        "Limpieza de pisos.",
        "Limpieza de gabinetes.",
        "Limpieza de cocinas.",
        "Limpieza de baños.",
        "Limpieza de vidrios y superficies de vidrio cuando corresponda.",
        "Eliminación de residuos ligeros.",
        "Limpieza detallada final.",
        "Preparación del espacio para ocupación.",
      ],
      outro: "El alcance depende del tipo de proyecto y las condiciones de la propiedad.",
    },
  },
  {
    icon: Building2,
    color: "from-cyan-500 to-cyan-600",
    image: "/service-condo.jpg",
    en: {
      title: "Apartment & Condominium Cleaning",
      description: "Specialized cleaning for condos and HOA-managed properties.",
      intro:
        "We provide professional cleaning services for apartments and condominiums, including unit cleaning, resident turnover preparation, and recurring services.",
      items: [
        "Unit cleaning.",
        "Move-In / Move-Out cleaning.",
        "Apartment preparation for new residents.",
        "Kitchen and bathroom cleaning.",
        "Floor cleaning.",
        "Interior and exterior cabinet cleaning.",
        "Interior and exterior appliance cleaning.",
        "Closet cleaning.",
        "Common area cleaning.",
        "Turnover cleaning between residents.",
        "Recurring cleaning services.",
        "Unit preparation for inspections.",
      ],
    },
    es: {
      title: "Limpieza de Apartamentos y Condominios",
      description: "Limpieza especializada para condominios y propiedades administradas por HOA.",
      intro:
        "Ofrecemos servicios profesionales de limpieza para apartamentos y condominios, incluyendo limpieza de unidades, preparación para nuevos residentes y servicios recurrentes.",
      items: [
        "Limpieza de unidades.",
        "Limpieza Move-In / Move-Out.",
        "Preparación de apartamentos para nuevos residentes.",
        "Limpieza de cocinas y baños.",
        "Limpieza de pisos.",
        "Limpieza interior y exterior de gabinetes.",
        "Limpieza interior y exterior de electrodomésticos.",
        "Limpieza de closets.",
        "Limpieza de áreas comunes.",
        "Limpieza entre residentes.",
        "Servicios recurrentes.",
        "Preparación de unidades para inspección.",
      ],
    },
  },
  {
    icon: Wrench,
    color: "from-indigo-500 to-indigo-600",
    image: "/service-maintenance.jpg",
    en: {
      title: "Property Maintenance",
      description: "Ongoing maintenance to keep your property in pristine condition.",
      intro:
        "We provide basic property maintenance and preparation services to help keep apartments, homes, and condominiums in good condition and ready for their residents.",
      items: [
        "Minor repairs.",
        "Interior painting and touch-ups.",
        "Repairing small imperfections on walls.",
        "Replacement or installation of basic fixtures.",
        "Replacement of minor property items.",
        "Simple adjustments and improvements within the property.",
        "General preparation of interior spaces.",
        "Basic maintenance services based on the property's needs.",
      ],
      outro: "Each service is evaluated according to the specific condition and needs of the property.",
    },
    es: {
      title: "Mantenimiento de Propiedades",
      description: "Mantenimiento continuo para conservar su propiedad en óptimas condiciones.",
      intro:
        "Ofrecemos servicios básicos de mantenimiento y preparación de propiedades para ayudar a mantener apartamentos, casas y condominios en buenas condiciones y listos para sus residentes.",
      items: [
        "Reparaciones menores.",
        "Pintura interior y retoques de pintura.",
        "Reparación de pequeñas imperfecciones en paredes.",
        "Cambio o instalación de accesorios básicos.",
        "Reemplazo de elementos menores de la propiedad.",
        "Ajustes y mejoras sencillas dentro de la propiedad.",
        "Preparación general de espacios interiores.",
        "Trabajos básicos de mantenimiento según las necesidades de la propiedad.",
      ],
      outro: "Cada servicio se evalúa de acuerdo con las condiciones y necesidades específicas de la propiedad.",
    },
  },
];

export default function Services({ language, onGetEstimate }: ServicesProps) {
  const t = translations[language];
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const handleGetEstimateClick = () => {
    setSelectedService(null);
    if (onGetEstimate) {
      onGetEstimate();
    } else {
      document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (selectedService === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedService(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedService]);

  const activeService = selectedService !== null ? services[selectedService] : null;
  const activeContent = activeService ? activeService[language] : null;

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
          {services.map((service, index) => {
            const content = service[language];
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-200 hover:scale-[1.02] border-2 border-transparent hover:border-sky-400 cursor-pointer group overflow-hidden"
                onClick={() => setSelectedService(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setSelectedService(index);
                }}
                aria-label={content.title}
              >
                {/* Service Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={content.title}
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
                    {content.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral text-sm mb-4 line-clamp-2">
                    {content.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-accent font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>{t.learnMore}</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-12">
          <motion.button
            onClick={handleGetEstimateClick}
            className="bg-accent hover:bg-accent-light text-primary-dark font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2"
            whileTap={{ scale: 0.98 }}
          >
            {t.cta}
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {activeService && activeContent && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-primary-dark/70 backdrop-blur-sm"
              onClick={() => setSelectedService(null)}
            />

            {/* Modal Panel */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              role="dialog"
              aria-modal="true"
              aria-label={activeContent.title}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Image */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden rounded-t-2xl">
                <Image
                  src={activeService.image}
                  alt={activeContent.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 640px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/20 to-transparent" />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  aria-label={t.close}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-primary rounded-full p-2 shadow-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Icon + Title */}
                <div className="absolute bottom-4 left-4 sm:left-6 flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${activeService.color} flex items-center justify-center shadow-lg`}>
                    <activeService.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-montserrat text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                    {activeContent.title}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8">
                <p className="text-neutral leading-relaxed mb-6">
                  {activeContent.intro}
                </p>

                <h4 className="font-montserrat text-base font-bold text-primary mb-3">
                  {t.includes}
                </h4>

                <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                  {activeContent.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {activeContent.outro && (
                  <p className="text-neutral text-sm leading-relaxed border-t border-neutral-light pt-4 mb-6">
                    {activeContent.outro}
                  </p>
                )}

                <button
                  onClick={handleGetEstimateClick}
                  className="w-full bg-accent hover:bg-accent-light text-primary-dark font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
                >
                  {t.requestQuote}
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
