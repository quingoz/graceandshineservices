import type { Metadata } from "next";
import AboutClient from "./AboutClient";

const description =
  "Meet the family behind Grace and Shine Cleaning & Maintenance Services in Charlotte, NC. Learn our story, mission, vision, and the values that guide every cleaning service we provide.";

export const metadata: Metadata = {
  title: "About Us | Family-Owned Cleaning Company in Charlotte, NC",
  description,
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About Us | Family-Owned Cleaning Company in Charlotte, NC",
    description,
    url: "/about/",
  },
};

export default function Page() {
  return <AboutClient />;
}
