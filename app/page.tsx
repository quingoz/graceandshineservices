import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { SITE_NAME, DEFAULT_DESCRIPTION } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Cleaning Services in Charlotte, NC",
  description: DEFAULT_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: `Cleaning Services in Charlotte, NC | ${SITE_NAME}`,
    description: DEFAULT_DESCRIPTION,
    url: "/",
  },
};

export default function Page() {
  return <HomeClient />;
}
