import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Simon Creative House transformed our brand story in ways we never imagined. Their cinematic approach didn't just create beautiful content—it drove real business results. Our brand awareness increased by 340% and sales followed suit.",
    author: "Sarah Martinez",
    title: "CEO, Chamelo",
    image: "/testimonial-sarah-martinez.jpg",
  },
  {
    quote:
      "Working with Simon's team was like having a creative partner who truly understood our vision. They took our complex B2B software and made it accessible and compelling. The results speak for themselves—450% increase in qualified leads.",
    author: "Michael Chen",
    title: "CMO, TechFlow",
    image: "/testimonial-michael-chen.jpg",
  },
  {
    quote:
      "The level of professionalism and creative excellence is unmatched. Simon Creative House delivered a campaign that not only looked incredible but performed beyond our expectations. They're now our go-to creative partner.",
    author: "Jessica Rodriguez",
    title: "Brand Director, Apex Sports",
    image: "/testimonial-jessica-rodriguez.jpg",
  },
]

export function ClientTestimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don't just take our word for it. Here's what our client partners have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <blockquote className="text-muted-foreground leading-relaxed text-pretty mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image || "/placeholder.svg?height=48&width=48&query=professional headshot"}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
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
