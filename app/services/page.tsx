import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

const description =
  "Explore our cleaning services in Charlotte, NC: residential cleaning, commercial cleaning, deep cleaning, move-out cleaning, apartment turnover cleaning, condo cleaning, office cleaning, post-construction cleaning, and property maintenance.";

export const metadata: Metadata = {
  title: "Cleaning Services in Charlotte, NC | Residential, Commercial & More",
  description,
  alternates: { canonical: "/services/" },
  openGraph: {
    title: "Cleaning Services in Charlotte, NC | Residential, Commercial & More",
    description,
    url: "/services/",
  },
};

export default function Page() {
  return <ServicesClient />;
}
