import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { WhatWeDoSection } from "@/components/what-we-do-section"
import { FeaturedWorkSection } from "@/components/featured-work-section"
import { ClientProofSection } from "@/components/client-proof-section"
import Script from "next/script"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <FeaturedWorkSection />
        <ClientProofSection />
      </main>
      <Footer />
    </div>
  )
}
