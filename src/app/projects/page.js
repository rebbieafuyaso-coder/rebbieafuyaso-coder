// src/app/projects/page.js
import ProjectsContent from "./ProjectsContent";

export const metadata = {
  title: "Projects", // → "Projects | Rebbie Afuyaso"
  description:
    "Browse projects by Rebbie Afuyaso (Mr Technology) — from modern websites and mobile apps to secure backend systems, REST APIs and full-stack digital platforms.",
  alternates: {
    canonical: "https://rebbieafuyaso.com/projects",
  },
  openGraph: {
    title: "Projects | Rebbie Afuyaso",
    description:
      "Browse projects by Rebbie Afuyaso (Mr Technology) — websites, apps, backend systems and APIs.",
    url: "https://rebbieafuyaso.com/projects",
    images: ["/Rebbie-Afuyaso.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Rebbie Afuyaso",
    description:
      "Browse projects by Rebbie Afuyaso (Mr Technology) — websites, apps, backend systems and APIs.",
    images: ["/Rebbie-Afuyaso.png"],
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}