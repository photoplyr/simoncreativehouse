import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CaseStudy } from "@/components/case-study"

// Generate static params for all case study slugs
export async function generateStaticParams() {
  // For now, we have one case study - you can expand this array as you add more
  return [
    { slug: 'chamelo-brand-campaign' },
    // Add more case study slugs here as needed
  ]
}

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
