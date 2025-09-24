import { Card, CardContent } from "@/components/ui/card"
import { Camera, Palette, Target } from "lucide-react"

const services = [
  {
    icon: Camera,
    title: "Cinematic Production",
    description: "Films, commercials, and social content that captivates audiences with cinema-level craft.",
  },
  {
    icon: Palette,
    title: "Creative Direction",
    description: "Campaigns, shoots, and art direction that brings your brand vision to life with precision.",
  },
  {
    icon: Target,
    title: "Strategy & Distribution",
    description: "Data-driven strategy and scalable systems that amplify your message across all platforms.",
  },
]

export function WhatWeDoSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 text-balance">What We Do</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We combine strategic thinking with cinematic execution to create content that moves people and drives
            results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-accent/50 transition-colors group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
