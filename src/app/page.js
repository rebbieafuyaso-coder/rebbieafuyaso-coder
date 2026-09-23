export const metadata = {
  title: "Mr Technology - Programmer & Web Developer in PNG",
  description:
    "Rebbie Afuyaso (Mr Technology) builds clean, secure digital systems — websites, apps, backend APIs and online platforms for businesses and organizations in Papua New Guinea and beyond.",
  alternates: {
    canonical: "https://rebbieafuyaso.com",
  },
  openGraph: {
    title: "Mr Technology - Programmer & Web Developer in PNG",
    description:
      "Rebbie Afuyaso (Mr Technology) builds clean, secure digital systems — websites, apps, backend APIs and online platforms for businesses and organizations.",
    url: "https://rebbieafuyaso.com",
    images: ["/Rebbie-Afuyaso.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mr Technology - Programmer & Web Developer in PNG",
    description:
      "Rebbie Afuyaso (Mr Technology) builds clean, secure digital systems for businesses and organizations.",
    images: ["/Rebbie-Afuyaso.png"],
  },
};


import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"
import CTA from "@/components/sections/CTA"
import Hero from "@/components/sections/Hero"
import HomeAbout from "@/components/sections/HomeAbout"
import HomeWork from "@/components/sections/HomeWork"
import LearningJourney from "@/components/sections/LearningJourney"
import Stats from "@/components/sections/Stats"
import Techstacks from "@/components/sections/Techstacks"
import Testimonials from "@/components/sections/Testimonials"

export default function Home() {
  return(
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <HomeAbout />
      <Techstacks />
      <HomeWork />
      <LearningJourney />
      {/*<Testimonials />*/}

      <CTA />
      <Footer />
    </main>
  )
}