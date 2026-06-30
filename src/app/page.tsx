import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { CtaSection } from "@/components/sections/cta-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { HeroSection } from "@/components/sections/hero-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-950">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
