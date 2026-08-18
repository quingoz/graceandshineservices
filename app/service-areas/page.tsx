import type { Metadata } from "next";
import ServiceAreasClient from "./ServiceAreasClient";
import { SERVICE_AREAS } from "@/lib/seo";

const description = `Grace and Shine proudly provides cleaning services throughout Charlotte, NC and nearby communities including ${SERVICE_AREAS.slice(
  0,
  8
).join(", ")}, and more.`;

export const metadata: Metadata = {
  title: "Service Areas | Cleaning Services in Charlotte, NC & Nearby Cities",
  description,
  alternates: { canonical: "/service-areas/" },
  openGraph: {
    title: "Service Areas | Cleaning Services in Charlotte, NC & Nearby Cities",
    description,
    url: "/service-areas/",
  },
};

export default function Page() {
  return <ServiceAreasClient />;
}
