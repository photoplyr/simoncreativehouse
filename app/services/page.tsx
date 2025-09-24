import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services-hero"
import { ServicesGrid } from "@/components/services-grid"
import { ProcessSection } from "@/components/process-section"
import { ServicesCTA } from "@/components/services-cta"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <ServicesHero />
        <ServicesGrid />
        <ProcessSection />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  )
}
