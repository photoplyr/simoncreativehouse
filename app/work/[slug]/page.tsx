import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CaseStudy } from "@/components/case-study"

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <CaseStudy slug={params.slug} />
      </main>
      <Footer />
    </div>
  )
}
