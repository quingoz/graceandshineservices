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
    },
    serviceOptions: {
      residential: "Residential Cleaning",
      commercial: "Commercial Cleaning",
      moveInOut: "Move-In/Out Cleaning",
      condo: "Condo/Maintenance",
    },
    button: "Request Free Quote",
    success: "Thank you! We'll contact you within 24 hours.",
    errors: {
      required: "This field is required",
      email: "Please enter a valid email",
      phone: "Please enter a valid phone number",
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
    },
    serviceOptions: {
      residential: "Limpieza Residencial",
      commercial: "Limpieza Comercial",
      moveInOut: "Limpieza de Mudanza",
      condo: "Condominio/Mantenimiento",
    },
    button: "Solicitar Cotización Gratis",
    success: "¡Gracias! Nos pondremos en contacto en 24 horas.",
    errors: {
      required: "Este campo es requerido",
      email: "Por favor ingrese un email válido",
      phone: "Por favor ingrese un número de teléfono válido",
    },
  },
};

export default function QuickQuoteForm({ language }: QuickQuoteFormProps) {
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    zip: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    if (!formData.zip.trim()) newErrors.zip = t.errors.required;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", email: "", service: "", zip: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
            className={`w-full px-4 py-3 rounded-lg border ${
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
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
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
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
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
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.service ? "border-red-500" : "border-neutral-light"
            } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white`}
          >
            <option value="">{t.fields.service}</option>
            <option value="residential">{t.serviceOptions.residential}</option>
            <option value="commercial">{t.serviceOptions.commercial}</option>
            <option value="moveInOut">{t.serviceOptions.moveInOut}</option>
            <option value="condo">{t.serviceOptions.condo}</option>
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
            value={formData.zip}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.zip ? "border-red-500" : "border-neutral-light"
            } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
            placeholder="28202"
            maxLength={5}
          />
          {errors.zip && <p className="text-red-500 text-xs mt-1">{errors.zip}</p>}
        </div>

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
