import { Card, CardContent } from "@/components/ui/card"
import { LucideIcon, MapPin, Phone, Mail, Clock, Youtube, Linkedin, Instagram } from "lucide-react"

type ContactDetail = {
  icon: LucideIcon
  title: string
  details: Array<{ label: string; href?: string }>
}

type SocialLink = {
  name: string
  href: string
  icon: LucideIcon
}

const contactDetails: ContactDetail[] = [
  {
    icon: MapPin,
    title: "Location",
    details: [
      { label: "Phoenix, Arizona" },
      { label: "Serving clients globally" },
    ],
  },
  {
    icon: Phone,
    title: "Phone",
    details: [{ label: "+1 (480) 555-0123", href: "tel:+14805550123" }],
  },
  {
    icon: Mail,
    title: "Email",
    details: [{ label: "hello@simoncreativehouse.com", href: "mailto:hello@simoncreativehouse.com" }],
  },
  {
    icon: Clock,
    title: "Response Time",
    details: [
      { label: "Within 24 hours" },
      { label: "Monday - Friday" },
    ],
  },
]

const socialLinks: SocialLink[] = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@simoncreativehouse",
    icon: Youtube,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/simon-creative-house/",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/simoncreativehouse/?hl=en",
    icon: Instagram,
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
                  {item.details.map((detail, detailIndex) => {
                    if (!detail.href) {
                      return (
                        <p key={detailIndex} className="text-muted-foreground text-sm">
                          {detail.label}
                        </p>
                      )
                    }

                    const isExternal = detail.href.startsWith("http")

                    return (
                      <a
                        key={detailIndex}
                        href={detail.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                        className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        {detail.label}
                      </a>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-card/60 border-border">
        <CardContent className="p-6 space-y-3">
          <h3 className="font-semibold text-foreground">Connect with us</h3>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <link.icon className="h-4 w-4" />
                </span>
                {link.name}
              </a>
            ))}
          </div>
        </CardContent>
      </Card>

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
