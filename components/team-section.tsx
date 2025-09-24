import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  {
    name: "Ian Simon",
    role: "Founder & Creative Director",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ian%20Simon.png-JFhdmI2Tr485G3Fe1TrjPak85g2KGC.jpeg",
    bio: "Ian is a filmmaker and storyteller who lives to bring imagination into reality. As the founder of Simon Creative House, he blends film, culture, and creativity to help brands, athletes, and creators share stories that move people and spark conversation. His work is rooted in passion, purpose, and a belief that great stories can reshape culture.",
  },
  {
    name: "Brittany Simon",
    role: "Co-Founder & Director of Operations",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Brittany%20Simon.PNG-8njV80L4ypeh8kwqph10dOP2J7X77z.jpeg",
    bio: "Brittany is co-founder of Simon Creative House and runs operations from behind the scenes, ensuring every project is delivered smoothly. With experience as a production assistant, she bridges the creative and logistical sides to keep the vision and execution aligned.",
  },
  {
    name: "Albert Lee",
    role: "Cinematographer Emmy Award-Winning Producer",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Albert%20Lee.PNG-zo6f2Rqvt0udCOlvvYuWTCE7WLJFeN.jpeg",
    bio: "Albert is a senior video producer with 15+ years of experience creating award-winning content for brands like Google, Amazon, Red Bull, and the NBA. An Emmy winner and creative leader, he brings expertise in storytelling, production, and strategy to elevate every project at Simon Creative House.",
  },
  {
    name: "Colson O'Connor",
    role: "Videographer and Photographer",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Colson%20O%E2%80%99Connor.JPEG-KIC1XHQuBcj9Om3ETGOzomEpoeizkm.jpeg",
    bio: "Colson is a Scottsdale-based videographer and founder of Ripple Digital. With a background in sports and music visuals, he now brings his passion for short-form storytelling to Simon Creative House, helping brands and creators expand their reach with content that connects.",
  },
]

export function TeamSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">Meet the Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            The creative minds behind every project. Our diverse team brings together expertise in filmmaking, strategy,
            and brand storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="aspect-square rounded-lg overflow-hidden mb-4">
                  <img
                    src={member.image || "/placeholder.svg?height=300&width=300&query=professional headshot"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
