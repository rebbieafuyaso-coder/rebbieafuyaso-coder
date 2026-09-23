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