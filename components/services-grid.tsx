import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, Camera, Edit, Megaphone, Users, Target } from "lucide-react"

const services = [
  {
    icon: Video,
    title: "Video Production",
    description:
      "Cinematic short-form, branded content, and commercials that captivate your audience and move product.",
    features: ["Cinematic Production", "Branded Content", "Commercial Videos", "Short-form Content"],
  },
  {
    icon: Camera,
    title: "Content Creation",
    description:
      "Platform-native content at scale—Reels/TikTok/Shorts, UGC-style assets, behind-the-scenes, and monthly content days engineered for consistency and growth.",
    features: ["Reels & TikTok", "UGC-style Assets", "Behind-the-scenes", "Monthly Content Days"],
  },
  {
    icon: Target,
    title: "Brand Strategy",
    description:
      "Positioning, messaging, visual identity, and storytelling frameworks that define your edge and your category.",
    features: ["Brand Positioning", "Visual Identity", "Messaging Strategy", "Storytelling Frameworks"],
  },
  {
    icon: Edit,
    title: "Creative Direction",
    description:
      "Campaign concepting, look & feel, and end-to-end brand oversight so every asset is cohesive, premium, and on-brand.",
    features: ["Campaign Concepting", "Look & Feel", "Brand Oversight", "Creative Consistency"],
  },
  {
    icon: Megaphone,
    title: "Creative Consulting",
    description:
      "Executive-level creative partnership: idea vetting, pitch development, go-to-market creative, and advisory to turn big vision into clear execution.",
    features: ["Idea Vetting", "Pitch Development", "Go-to-market Creative", "Strategic Advisory"],
  },
  {
    icon: Users,
    title: "Creator Management & Representation",
    description:
      "Talent scouting, brand-creator matchmaking, deal architecture, negotiation, usage and rights management, production oversight, and performance reporting.",
    features: ["Talent Scouting", "Brand Matchmaking", "Deal Negotiation", "Performance Reporting"],
  },
]

export function ServicesGrid() {
  return (
    <section className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">What We Do</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our services are designed to work together, creating a comprehensive approach to your brand's visual
            storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed text-pretty">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
