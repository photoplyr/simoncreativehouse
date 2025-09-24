import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServicesCTA() {
  return (
    <section className="py-24 bg-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">Ready to Elevate Your Brand?</h2>
        <p className="text-lg text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
          Let's discuss how our services can help you achieve your goals. Every great story starts with a conversation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" asChild>
            <Link href="https://calendly.com/hello-simoncreativehouse/30min" target="_blank" rel="noopener noreferrer">
              Book a Call
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-border hover:bg-card bg-transparent" asChild>
            <Link href="/work">View Our Work</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
