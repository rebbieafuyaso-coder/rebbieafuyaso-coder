// src/app/about/page.js
import AboutContent from "./AboutContent";

export const metadata = {
  title: "About", // → "About | Rebbie Afuyaso"
  description:
    "Learn about Rebbie Afuyaso (Mr Technology) — a Papua New Guinea based programmer and web developer focused on clean code, secure architecture and minimal UI design.",
  alternates: {
    canonical: "https://rebbieafuyaso.com/about",
  },
  openGraph: {
    title: "About | Rebbie Afuyaso",
    description:
      "Learn about Rebbie Afuyaso (Mr Technology) — a Papua New Guinea based programmer and web developer.",
    url: "https://rebbieafuyaso.com/about",
    images: ["/Rebbie-Afuyaso.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Rebbie Afuyaso",
    description:
      "Learn about Rebbie Afuyaso (Mr Technology) — a PNG based programmer and web developer.",
    images: ["/Rebbie-Afuyaso.png"],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}