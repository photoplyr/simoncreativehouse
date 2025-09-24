import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ClientsHero } from "@/components/clients-hero"
import { ClientsGrid } from "@/components/clients-grid"
import { ClientTestimonials } from "@/components/client-testimonials"

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <ClientsHero />
        <ClientsGrid />
        <ClientTestimonials />
      </main>
      <Footer />
    </div>
  )
}
