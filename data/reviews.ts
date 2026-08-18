// Client reviews shown in the "What Our Clients Say" section on the homepage.
//
// HOW TO ADD A NEW REVIEW:
// Copy a real review (with the client's permission) from Google, Facebook, or
// direct client feedback, and add a new object to the `reviews` array below.
//
//   {
//     name: "Client Name",
//     location: "Charlotte, NC",       // optional, city/neighborhood is enough
//     rating: 5,                       // 1 to 5
//     text: { en: "Review text in English...", es: "Texto de la reseña en español..." },
//     source: "google",                // "google" | "facebook" | "direct"
//   }
//
// The section automatically switches from the "no reviews yet" placeholder to
// a review grid as soon as this array has at least one entry.

// TODO: Replace with your real Google Business Profile review link once available.
// You can find it in Google Business Profile > "Ask for reviews" > copy link.
export const GOOGLE_REVIEW_URL = "#";

export interface ClientReview {
  name: string;
  location?: string;
  rating: number;
  text: {
    en: string;
    es: string;
  };
  source: "google" | "facebook" | "direct";
}

export const reviews: ClientReview[] = [];
