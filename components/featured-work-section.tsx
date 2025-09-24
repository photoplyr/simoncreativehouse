"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"
import Link from "next/link"

const featuredProjects = [
  {
    title: "VASCO Commercial",
    client: "VASCO",
    description: "Multi-sport commercial showcasing AI translation technology",
    thumbnail: "/vasco-ai-commercial.jpeg",
    category: "Commercial",
    videoUrl: "https://www.youtube.com/watch?si=ga6Ha_YrJywxjAbE&v=IRxtWc7vbQg&feature=youtu.be",
  },
  {
    title: "Women's Golf Campaign",
    client: "Chamelo",
    description: "Cinematic brand campaign featuring women's golf lifestyle",
    thumbnail: "/chamelo-golf-campaign.jpeg",
    category: "Brand Film",
    videoUrl: "https://www.instagram.com/reel/DFxyHYUOdE-/?igsh=ZXU0aXA4YWdkaDVk",
  },
  {
    title: "Player Campaign",
    client: "Arizona Diamondbacks",
    description: "Stadium-worthy content for player campaign",
    thumbnail: "/diamondbacks-campaign.jpeg",
    category: "Sports",
    videoUrl: "https://youtu.be/xm-eT1Pscc0",
  },
]

export function FeaturedWorkSection() {
  const handlePlayVideo = (videoUrl: string) => {
    window.open(videoUrl, "_blank")
  }

  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 text-balance">
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Stories that connect. Results that matter. See how we've helped brands create meaningful impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-background border-border overflow-hidden group hover:border-accent/50 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.thumbnail || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => handlePlayVideo(project.videoUrl)}
                    className="p-3 rounded-full bg-primary/90 group-hover:bg-primary transition-colors"
                  >
                    <Play className="h-6 w-6 text-primary-foreground" />
                  </button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-accent font-semibold mb-2">{project.client}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-pretty">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/work">
            <Button
              size="lg"
              variant="outline"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background font-semibold bg-transparent"
            >
              View All Work
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
