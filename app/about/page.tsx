import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { AboutStory } from "@/components/about-story"
import { TeamSection } from "@/components/team-section"
import { AboutValues } from "@/components/about-values"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <AboutHero />
        <AboutStory />
        <TeamSection />
        <AboutValues />
      </main>
      <Footer />
    </div>
  )
}
