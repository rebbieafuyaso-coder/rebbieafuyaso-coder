// src/app/blogs-social/page.js
import BlogContent from "./BlogContent";

export const metadata = {
  title: "Blogs & Social",
  description:
    "Read articles by Rebbie Afuyaso (Mr Technology) on web development, AI, cybersecurity, and tech. Subscribe to get notified when new posts go live.",
  alternates: {
    canonical: "https://rebbieafuyaso.com/blogs-social",
  },
  openGraph: {
    title: "Blogs & Social | Rebbie Afuyaso",
    description:
      "Read articles on web development, AI, cybersecurity, and tech by Rebbie Afuyaso. Subscribe for updates.",
    url: "https://rebbieafuyaso.com/blogs-social",
    images: ["/Rebbie-Afuyaso.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs & Social | Rebbie Afuyaso",
    description:
      "Articles on web development, AI, cybersecurity, and tech by Rebbie Afuyaso.",
    images: ["/Rebbie-Afuyaso.png"],
  },
};

export default function BlogsContentPage() {
  return <BlogContent />;
}