import { Card, CardContent } from "@/components/ui/card"

const clients = [
  {
    name: "Stan",
    logo: "/stan-logo.webp",
    industry: "Financial Technology",
    description:
      "Fintech platform campaign that simplified complex financial tools and increased user engagement by 340%.",
  },
  {
    name: "YouTube",
    logo: "/youtube-logo.png",
    industry: "Media & Entertainment",
    description:
      "Creator-focused content strategy that amplified brand partnerships and drove significant audience growth.",
  },
  {
    name: "Sports Illustrated",
    logo: "/sports-illustrated-logo.png",
    industry: "Sports Media",
    description:
      "Iconic sports brand campaign featuring athlete storytelling that reached millions and boosted digital engagement.",
  },
  {
    name: "TRX",
    logo: "/trx-logo.svg",
    industry: "Fitness & Training",
    description:
      "Fitness equipment brand campaign that showcased innovative training methods and increased market penetration by 280%.",
  },
  {
    name: "Entrepreneur Magazine",
    logo: "/entrepreneur-logo.webp",
    industry: "Business Media",
    description:
      "Business publication campaign that elevated thought leadership content and increased subscription rates by 190%.",
  },
  {
    name: "Bumble",
    logo: "/bumble-logo.png",
    industry: "Social Technology",
    description: "Dating app campaign that promoted authentic connections and increased user acquisition by 220%.",
  },
  {
    name: "Marriott",
    logo: "/marriott-logo.webp",
    industry: "Hospitality",
    description: "Luxury hotel brand campaign that elevated guest experiences and increased bookings by 165%.",
  },
  {
    name: "Men's Health",
    logo: "/mens-health-logo.png",
    industry: "Health & Lifestyle",
    description: "Fitness magazine campaign that inspired healthier lifestyles and boosted readership by 210%.",
  },
  {
    name: "Forbes",
    logo: "/forbes-logo.png",
    industry: "Business Media",
    description:
      "Business publication strategy that amplified thought leadership and increased digital subscriptions by 180%.",
  },
  {
    name: "Chamelo",
    logo: "/chamelo-logo.webp",
    industry: "Technology",
    description: "Tech startup campaign that simplified complex solutions and accelerated user adoption by 320%.",
  },
  {
    name: "Reign Total Body Fuel",
    logo: "/reign-logo.jpeg",
    industry: "Sports Nutrition",
    description: "Energy drink brand campaign that targeted fitness enthusiasts and increased market share by 240%.",
  },
  {
    name: "ISSA",
    logo: "/issa-logo.png",
    industry: "Fitness Certification",
    description:
      "Fitness certification campaign that promoted professional development and increased enrollments by 195%.",
  },
]

export function ClientsGrid() {
  return (
    <section className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">Our Client Partners</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Every partnership is unique, but they all share one thing in common: measurable results that exceed
            expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src={client.logo || "/placeholder.svg?height=120&width=200&query=company logo"}
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-foreground mb-1">{client.name}</h3>
                  <p className="text-sm text-primary font-semibold mb-3">{client.industry}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{client.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
