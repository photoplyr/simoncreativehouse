"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-background via-card to-background">
          <div className="absolute inset-0 bg-black/50" />
          <img
            src="/hero-production-behind-scenes.jpeg"
            alt="Behind the scenes production at Simon Creative House"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 text-balance leading-tight">
            We create cinematic stories people can feel, for brands people can trust.
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            From creative strategy, direction, and production—we bridge brand vision with cinematic storytelling that
            connects culture and consumers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
              asChild
            >
              <Link
                href="https://calendly.com/hello-simoncreativehouse/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Call
              </Link>
            </Button>
            <Link href="/work">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black font-semibold px-8 bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                See Our Work
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/30 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
