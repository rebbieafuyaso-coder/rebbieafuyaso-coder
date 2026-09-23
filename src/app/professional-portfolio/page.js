// src/app/professional-portfolio/page.js
import ProfessionalPortfolioContent from "./ProfessionalPortfolioContent";

export const metadata = {
  title: "Professional Portfolio", // → "Professional Portfolio | Rebbie Afuyaso"
  description:
    "Explore the professional portfolio of Rebbie Afuyaso (Mr Technology) — featuring websites, web apps, backend systems and APIs built for businesses and organizations.",
  alternates: {
    canonical: "https://rebbieafuyaso.com/professional-portfolio",
  },
  openGraph: {
    title: "Professional Portfolio | Rebbie Afuyaso",
    description:
      "Explore the professional portfolio of Rebbie Afuyaso (Mr Technology) — websites, web apps, backend systems and APIs.",
    url: "https://rebbieafuyaso.com/professional-portfolio",
    images: ["/Rebbie-Afuyaso.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Portfolio | Rebbie Afuyaso",
    description:
      "Explore the professional portfolio of Rebbie Afuyaso (Mr Technology).",
    images: ["/Rebbie-Afuyaso.png"],
  },
};

export default function ProfessionalPortfolioPage() {
  return <ProfessionalPortfolioContent />;
}