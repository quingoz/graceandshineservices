"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Send, Sparkles } from "lucide-react";

type Language = "en" | "es";

interface QuickQuoteFormProps {
  language: Language;
}

const translations = {
  en: {
    title: "Get Your Free Quote",
    subtitle: "Fill out the form below and we'll get back to you within 24 hours",
    fields: {
      name: "Full Name",
      phone: "Phone Number",
      email: "Email Address",
      service: "Service Type",
      zip: "Zip Code",
      squareFootage: "Approximate Square Footage",
    },
    serviceOptions: {
      residential: "Residential Cleaning",
      deep: "Deep Cleaning",
      commercial: "Commercial Cleaning",
      office: "Office Cleaning",
      moveInOut: "Move-In / Move-Out Cleaning",
      postConstruction: "Post-Construction Cleaning",
      condo: "Apartment & Condominium Cleaning",
      maintenance: "Property Maintenance",
    },
    button: "Request Free Quote",
    success: "Thank you! We'll contact you within 24 hours.",
    submitError: "Something went wrong sending your request. Please call us at (704) 309-7024 or try again.",
    errors: {
      required: "This field is required",
      email: "Please enter a valid email address",
      phone: "Please enter a valid 10-digit phone number",
      zip: "Please enter a valid 5-digit zip code",
      squareFootage: "Please enter a valid square footage",
    },
  },
  es: {
    title: "Obtenga Su Cotización Gratis",
    subtitle: "Complete el formulario a continuación y nos pondremos en contacto con usted en 24 horas",
    fields: {
      name: "Nombre Completo",
      phone: "Número de Teléfono",
      email: "Correo Electrónico",
      service: "Tipo de Servicio",
      zip: "Código Postal",
      squareFootage: "Pies Cuadrados Aproximados",
    },
    serviceOptions: {
      residential: "Limpieza Residencial",
      deep: "Limpieza Profunda",
      commercial: "Limpieza Comercial",
      office: "Limpieza de Oficinas",
      moveInOut: "Limpieza de Mudanza (Move-In/Out)",
      postConstruction: "Limpieza Post-Construcción",
      condo: "Limpieza de Apartamentos y Condominios",
      maintenance: "Mantenimiento de Propiedades",
    },
    button: "Solicitar Cotización Gratis",
    success: "¡Gracias! Nos pondremos en contacto en 24 horas.",
    submitError: "Ocurrió un error al enviar su solicitud. Por favor llámenos al (704) 309-7024 o intente de nuevo.",
    errors: {
      required: "Este campo es requerido",
      email: "Por favor ingrese un correo electrónico válido",
      phone: "Por favor ingrese un número de teléfono válido de 10 dígitos",
      zip: "Por favor ingrese un código postal válido de 5 dígitos",
      squareFootage: "Por favor ingrese pies cuadrados válidos",
    },
  },
};

function formatPhoneNumber(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  const length = digits.length;

  if (length === 0) return "";
  if (length < 4) return `(${digits}`;
  if (length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export default function QuickQuoteForm({ language }: QuickQuoteFormProps) {
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    zip: "",
    squareFootage: "",
    website: "", // honeypot field, kept empty and hidden from real visitors
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = t.errors.required;
    if (!formData.phone.trim()) {
      newErrors.phone = t.errors.required;
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = t.errors.phone;
    }
    if (!formData.email.trim()) {
      newErrors.email = t.errors.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.errors.email;
    }
    if (!formData.service) newErrors.service = t.errors.required;
    if (!formData.zip.trim()) {
      newErrors.zip = t.errors.required;
    } else if (!/^\d{5}$/.test(formData.zip)) {
      newErrors.zip = t.errors.zip;
    }
    if (!formData.squareFootage.trim()) {
      newErrors.squareFootage = t.errors.required;
    } else if (!/^\d+$/.test(formData.squareFootage) || parseInt(formData.squareFootage, 10) <= 0) {
      newErrors.squareFootage = t.errors.squareFootage;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const response = await fetch("/send-quote.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, language }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();
      if (!data.success) {
        throw new Error(data.message || "Request failed");
      }

      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", phone: "", email: "", service: "", zip: "", squareFootage: "", website: "" });
      }, 3000);
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "phone") {
      newValue = formatPhoneNumber(value);
    } else if (name === "zip") {
      newValue = value.replace(/\D/g, "").slice(0, 5);
    } else if (name === "squareFootage") {
      newValue = value.replace(/\D/g, "").slice(0, 6);
    }

    setFormData((prev) => ({ ...prev, [name]: newValue }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-montserrat text-2xl font-bold text-primary mb-2">
          {t.success}
        </h3>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-accent" />
          <h3 className="font-montserrat text-xl md:text-2xl font-bold text-primary">
            {t.title}
          </h3>
          <Sparkles className="w-5 h-5 text-accent" />
        </div>
        <p className="text-neutral text-sm">{t.subtitle}</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot field - hidden from real visitors, helps deter spam bots */}
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral mb-1">
            {t.fields.name}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border bg-white text-neutral-dark placeholder:text-neutral-light ${
              errors.name ? "border-red-500" : "border-neutral-light"
            } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
            placeholder={t.fields.name}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral mb-1">
            {t.fields.phone}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            inputMode="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border bg-white text-neutral-dark placeholder:text-neutral-light ${
              errors.phone ? "border-red-500" : "border-neutral-light"
            } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
            placeholder="(704) 555-1234"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral mb-1">
            {t.fields.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            inputMode="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border bg-white text-neutral-dark placeholder:text-neutral-light ${
              errors.email ? "border-red-500" : "border-neutral-light"
            } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
            placeholder="your@email.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Service Type */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-neutral mb-1">
            {t.fields.service}
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border bg-white text-neutral-dark ${
              errors.service ? "border-red-500" : "border-neutral-light"
            } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
          >
            <option value="">{t.fields.service}</option>
            <option value="residential">{t.serviceOptions.residential}</option>
            <option value="deep">{t.serviceOptions.deep}</option>
            <option value="commercial">{t.serviceOptions.commercial}</option>
            <option value="office">{t.serviceOptions.office}</option>
            <option value="moveInOut">{t.serviceOptions.moveInOut}</option>
            <option value="postConstruction">{t.serviceOptions.postConstruction}</option>
            <option value="condo">{t.serviceOptions.condo}</option>
            <option value="maintenance">{t.serviceOptions.maintenance}</option>
          </select>
          {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
        </div>

        {/* Zip Code */}
        <div>
          <label htmlFor="zip" className="block text-sm font-medium text-neutral mb-1">
            {t.fields.zip}
          </label>
          <input
            type="text"
            id="zip"
            name="zip"
            inputMode="numeric"
            autoComplete="postal-code"
            value={formData.zip}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border bg-white text-neutral-dark placeholder:text-neutral-light ${
              errors.zip ? "border-red-500" : "border-neutral-light"
            } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
            placeholder="28202"
            maxLength={5}
          />
          {errors.zip && <p className="text-red-500 text-xs mt-1">{errors.zip}</p>}
        </div>

        {/* Square Footage */}
        <div>
          <label htmlFor="squareFootage" className="block text-sm font-medium text-neutral mb-1">
            {t.fields.squareFootage}
          </label>
          <div className="relative">
            <input
              type="text"
              id="squareFootage"
              name="squareFootage"
              inputMode="numeric"
              value={formData.squareFootage}
              onChange={handleChange}
              className={`w-full px-4 py-3 pr-16 rounded-lg border bg-white text-neutral-dark placeholder:text-neutral-light ${
                errors.squareFootage ? "border-red-500" : "border-neutral-light"
              } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
              placeholder="1500"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-light text-sm font-medium">
              sq ft
            </span>
          </div>
          {errors.squareFootage && <p className="text-red-500 text-xs mt-1">{errors.squareFootage}</p>}
        </div>

        {/* Submit Error */}
        {submitError && (
          <p className="text-red-500 text-sm text-center">{t.submitError}</p>
        )}

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent hover:bg-accent-light text-primary-dark font-semibold px-6 py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-primary-dark border-t-transparent rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              {t.button}
            </>
          )}
        </motion.button>
      </form>

      {/* Trust Badge */}
      <div className="mt-6 text-center text-xs text-neutral-light">
        <p className="flex items-center justify-center gap-1">
          <CheckCircle className="w-3 h-3 text-green-600" />
          <span>Your information is secure and will never be shared</span>
        </p>
      </div>
    </div>
  );
}
