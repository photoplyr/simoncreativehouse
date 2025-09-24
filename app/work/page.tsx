import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WorkPortfolio } from "@/components/work-portfolio"

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <WorkPortfolio />
      </main>
      <Footer />
    </div>
  )
}
