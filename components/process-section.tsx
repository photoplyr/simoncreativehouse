import { Card, CardContent } from "@/components/ui/card"

const processSteps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We start by understanding your brand, goals, and audience. Through collaborative workshops and strategic planning, we develop a creative roadmap that aligns with your objectives.",
  },
  {
    number: "02",
    title: "Creative Development",
    description:
      "Our team crafts compelling concepts and visual narratives. We develop mood boards, storyboards, and creative treatments that bring your vision to life.",
  },
  {
    number: "03",
    title: "Production",
    description:
      "With meticulous planning and world-class equipment, we execute the production phase. Our experienced crew ensures every detail is captured with cinematic quality.",
  },
  {
    number: "04",
    title: "Post-Production",
    description:
      "In our state-of-the-art facilities, we edit, color grade, and finish your content. Every frame is crafted to perfection, ensuring maximum impact.",
  },
  {
    number: "05",
    title: "Delivery & Distribution",
    description:
      "We deliver your content in all required formats and provide strategic guidance on distribution. Our support continues beyond delivery to ensure optimal performance.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">Our Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A proven methodology that ensures exceptional results, on time and on budget.
          </p>
        </div>

        <div className="space-y-8">
          {processSteps.map((step, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-black text-primary">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-pretty">{step.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
