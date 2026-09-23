// src/app/contact/page.js
import ContactContent from "./ContactContent";

export const metadata = {
  title: "Contact", // → "Contact | Rebbie Afuyaso"
  description:
    "Get in touch with Rebbie Afuyaso (Mr Technology) for web development, app development, backend systems and API projects. Based in Papua New Guinea, available worldwide.",
  alternates: {
    canonical: "https://rebbieafuyaso.com/contact",
  },
  openGraph: {
    title: "Contact | Rebbie Afuyaso",
    description:
      "Get in touch with Rebbie Afuyaso (Mr Technology) for web, app, backend and API projects.",
    url: "https://rebbieafuyaso.com/contact",
    images: ["/Rebbie-Afuyaso.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Rebbie Afuyaso",
    description:
      "Get in touch with Rebbie Afuyaso (Mr Technology) for web, app, backend and API projects.",
    images: ["/Rebbie-Afuyaso.png"],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}