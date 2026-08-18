import type { Metadata } from "next";
import ContactClient from "./ContactClient";

const description =
  "Contact Grace and Shine Cleaning & Maintenance Services in Charlotte, NC. Call, email, or request a free estimate for residential, commercial, or property maintenance cleaning.";

export const metadata: Metadata = {
  title: "Contact Us | Cleaning Services in Charlotte, NC",
  description,
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact Us | Cleaning Services in Charlotte, NC",
    description,
    url: "/contact/",
  },
};

export default function Page() {
  return <ContactClient />;
}
