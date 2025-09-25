import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Instagram, Linkedin, Youtube } from "lucide-react"

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/simoncreativehouse/?hl=en",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/simon-creative-house/",
    icon: Linkedin,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@simoncreativehouse",
    icon: Youtube,
  },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* CTA Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-balance mb-4">Have a launch or campaign coming up?</h2>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" asChild>
            <Link href="https://calendly.com/hello-simoncreativehouse/30min" target="_blank" rel="noopener noreferrer">
              Book a Call
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image src="/simon-logo.png" alt="Simon Creative House" width={180} height={36} className="h-7 w-auto" />
            </Link>
            <div className="text-xl font-black text-foreground mb-4">Simon Creative House</div>
            <p className="text-muted-foreground mb-4 text-pretty">
              We create cinematic stories people can feel, for brands people can trust.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>
                <a
                  href="mailto:hello@simoncreativehouse.com"
                  className="hover:text-primary transition-colors"
                >
                  hello@simoncreativehouse.com
                </a>
              </p>
              <p>Scottsdale, AZ</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/work" className="text-muted-foreground hover:text-accent transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <Link
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Simon Creative House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
