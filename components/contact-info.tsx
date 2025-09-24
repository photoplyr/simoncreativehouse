import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactDetails = [
  {
    icon: MapPin,
    title: "Location",
    details: ["Phoenix, Arizona", "Serving clients globally"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (480) 555-0123"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@simoncreativehouse.com", "projects@simoncreativehouse.com"],
  },
  {
    icon: Clock,
    title: "Response Time",
    details: ["Within 24 hours", "Monday - Friday"],
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h2>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          We're here to answer your questions and discuss your project. Whether you have a detailed brief or just an
          idea, we'd love to explore how we can help bring your vision to life.
        </p>
      </div>

      <div className="space-y-6">
        {contactDetails.map((item, index) => (
          <Card key={index} className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  {item.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-6">
          <h3 className="font-bold text-foreground mb-2">Ready to Start?</h3>
          <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
            The best projects start with great conversations. We're excited to learn about your goals and explore how
            our expertise can help you achieve them.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
