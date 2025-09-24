import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Eye, Zap, Users } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Authenticity",
    description:
      "We believe authentic stories create genuine connections. Every project starts with understanding what makes your brand unique.",
  },
  {
    icon: Eye,
    title: "Excellence",
    description:
      "We're obsessed with quality. From pre-production planning to final delivery, we maintain the highest standards in everything we do.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We stay ahead of industry trends and technology, constantly pushing creative boundaries to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Great work happens when great minds work together. We partner closely with our clients throughout the entire process.",
  },
]

export function AboutValues() {
  return (
    <section className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">Our Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            The principles that guide our work and define our relationships with clients and collaborators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="bg-card border-border text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-bold text-foreground">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-pretty text-sm">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
