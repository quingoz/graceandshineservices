import type { Metadata } from "next";
import FAQClient from "./FAQClient";
import { faqs } from "@/data/faqs";

const description =
  "Frequently asked questions about Grace and Shine Cleaning & Maintenance Services in Charlotte, NC — supplies, insurance, recurring schedules, condo cleaning, and cancellation policy.";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Cleaning Services Charlotte, NC",
  description,
  alternates: { canonical: "/faq/" },
  openGraph: {
    title: "Frequently Asked Questions | Cleaning Services Charlotte, NC",
    description,
    url: "/faq/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQClient />
    </>
  );
}
