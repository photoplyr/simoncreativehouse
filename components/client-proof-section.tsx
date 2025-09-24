import { Card, CardContent } from "@/components/ui/card"

const clients = [
  { name: "Stan", logo: "/stan-logo.webp" },
  { name: "YouTube", logo: "/youtube-logo.png" },
  { name: "Sports Illustrated", logo: "/sports-illustrated-logo.png" },
  { name: "TRX", logo: "/trx-logo.svg" },
  { name: "Entrepreneur", logo: "/entrepreneur-logo.webp" },
  { name: "Bumble", logo: "/bumble-logo.png" },
  { name: "Marriott", logo: "/marriott-logo.webp" },
  { name: "Men's Health", logo: "/mens-health-logo.png" },
  { name: "Forbes", logo: "/forbes-logo.png" },
  { name: "Chamelo", logo: "/chamelo-logo.webp" },
  { name: "Reign", logo: "/reign-logo.jpeg" },
  { name: "ISSA", logo: "/issa-logo.png" },
]

const stats = [
  { number: "500+", label: "Videos Produced" },
  { number: "50M+", label: "Cumulative Views" },
  { number: "2-4 weeks", label: "Average Timeline" },
]

export function ClientProofSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client Logos */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Trusted by Leading Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card border-border text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-black text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
