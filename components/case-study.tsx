import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Play } from "lucide-react"
import Link from "next/link"

interface CaseStudyProps {
  slug: string
}

// Mock data - in a real app, this would come from a CMS or API
const caseStudyData = {
  title: "Chamelo Brand Campaign",
  client: "Chamelo",
  year: "2024",
  category: "Commercial",
  heroVideo: "/cinematic-brand-campaign-video-thumbnail.jpg",
  description:
    "A cinematic journey through sustainable fashion that redefined how consumers connect with eco-conscious brands.",

  theAsk: {
    title: "The Ask",
    content:
      "Chamelo needed to launch their sustainable fashion line with a campaign that would differentiate them in a crowded market. The challenge was to create content that felt authentic to their values while appealing to a broader, style-conscious audience.",
  },

  ourRole: {
    title: "Our Role",
    services: [
      "Creative Strategy",
      "Creative Direction",
      "Cinematic Production",
      "Post-Production",
      "Distribution Strategy",
    ],
  },

  theWork: {
    title: "The Work",
    content:
      "We developed a narrative-driven campaign centered around the journey of sustainable materials from source to finished product. The hero film combined intimate storytelling with sweeping cinematography, while supporting social content provided behind-the-scenes authenticity.",
    media: [
      "/cinematic-brand-campaign-video-thumbnail.jpg",
      "/sustainable-fashion-behind-scenes.jpg",
      "/brand-campaign-social-content.jpg",
    ],
  },

  results: {
    title: "Results",
    metrics: [
      { label: "Brand Awareness Increase", value: "340%" },
      { label: "Social Engagement", value: "2.8M" },
      { label: "Website Traffic Increase", value: "450%" },
      { label: "Sales Conversion", value: "28%" },
    ],
    qualitative:
      "The campaign not only exceeded performance metrics but also established Chamelo as a thought leader in sustainable fashion, earning recognition from industry publications and influencers.",
  },

  behindTheScenes: [
    "/sustainable-fashion-behind-scenes.jpg",
    "/film-production-behind-scenes.jpg",
    "/creative-direction-process.jpg",
  ],
}

export function CaseStudy({ slug }: CaseStudyProps) {
  return (
    <div className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/work"
          className="inline-flex items-center text-muted-foreground hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Work
        </Link>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
              {caseStudyData.category}
            </span>
            <span className="text-muted-foreground">{caseStudyData.year}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-foreground mb-4 text-balance">{caseStudyData.title}</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">{caseStudyData.description}</p>

          {/* Hero Video */}
          <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
            <img
              src={caseStudyData.heroVideo || "/placeholder.svg"}
              alt={caseStudyData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-4 rounded-full bg-primary/90 hover:bg-primary transition-colors cursor-pointer">
                <Play className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>

        {/* The Ask */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">{caseStudyData.theAsk.title}</h2>
          <p className="text-muted-foreground leading-relaxed text-pretty">{caseStudyData.theAsk.content}</p>
        </section>

        {/* Our Role */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">{caseStudyData.ourRole.title}</h2>
          <div className="flex flex-wrap gap-3">
            {caseStudyData.ourRole.services.map((service, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-card text-card-foreground border border-border rounded-full font-medium"
              >
                {service}
              </span>
            ))}
          </div>
        </section>

        {/* The Work */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">{caseStudyData.theWork.title}</h2>
          <p className="text-muted-foreground leading-relaxed text-pretty mb-8">{caseStudyData.theWork.content}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudyData.theWork.media.map((image, index) => (
              <div key={index} className="aspect-video rounded-lg overflow-hidden">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Work sample ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">{caseStudyData.results.title}</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {caseStudyData.results.metrics.map((metric, index) => (
              <Card key={index} className="bg-card border-border text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-black text-primary mb-2">{metric.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-muted-foreground leading-relaxed text-pretty">{caseStudyData.results.qualitative}</p>
        </section>

        {/* Behind the Scenes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Behind the Scenes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudyData.behindTheScenes.map((image, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Behind the scenes ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center pt-12 border-t border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to create your story?</h3>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" asChild>
            <Link href="https://calendly.com/hello-simoncreativehouse/30min" target="_blank" rel="noopener noreferrer">
              Book a Call
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
