"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, ExternalLink, X } from "lucide-react"

const filters = ["All", "Commercial", "Social", "Brand Film", "Sports", "Documentary"]

const projects = [
  {
    id: 1,
    title: "VASCO Commercial",
    category: "Commercial",
    industry: "Technology",
    format: "Commercial",
    thumbnail: "/vasco-ai-commercial.jpeg",
    description: "Multi-sport commercial showcasing AI translation technology",
    client: "VASCO",
    year: "2024",
    services: ["Creative Direction", "Production", "Post-Production"],
    videoUrl: "https://www.youtube.com/watch?si=ga6Ha_YrJywxjAbE&v=IRxtWc7vbQg&feature=youtu.be",
    videoType: "youtube",
  },
  {
    id: 2,
    title: "Construction Drone Footage",
    category: "Commercial",
    industry: "Construction",
    format: "Drone Footage",
    thumbnail: "/construction-drone-aerial.png",
    description: "Cinematic aerial footage for construction project documentation",
    client: "Construction Client",
    year: "2024",
    services: ["Drone Cinematography", "Aerial Production"],
    videoUrl: "https://youtu.be/grdOhox-foY",
    videoType: "youtube",
  },
  {
    id: 3,
    title: "Women's Golf Campaign",
    category: "Brand Film",
    industry: "Fashion",
    format: "Brand Campaign",
    thumbnail: "/chamelo-golf-campaign.jpeg",
    description: "Cinematic brand campaign featuring women's golf lifestyle",
    client: "Chamelo",
    year: "2024",
    services: ["Creative Direction", "Production", "Social Strategy"],
    videoUrl: "https://www.youtube.com/watch?v=hCPA2NJKyyk",
    videoType: "youtube",
  },
  {
    id: 4,
    title: "Player Campaign",
    category: "Sports",
    industry: "Sports",
    format: "Player Campaign",
    thumbnail: "/diamondbacks-campaign.jpeg",
    description: "Stadium-worthy content for player campaign",
    client: "Arizona Diamondbacks",
    year: "2024",
    services: ["Sports Production", "Creative Direction"],
    videoUrl: "https://youtu.be/xm-eT1Pscc0",
    videoType: "youtube",
  },
  {
    id: 5,
    title: "Eyewear Brand Documentary",
    category: "Documentary",
    industry: "Fashion",
    format: "Behind the Scenes",
    thumbnail: "/chamelo-brand-documentary.png",
    description: "Behind-the-scenes documentary showcasing eyewear brand story",
    client: "Chamelo",
    year: "2024",
    services: ["Documentary Production", "Brand Storytelling"],
    videoUrl: "https://www.youtube.com/watch?v=qI8vkAn9JRQ",
    videoType: "youtube",
  },
  {
    id: 6,
    title: "Couple Goals Podcast",
    category: "Social",
    industry: "Fitness",
    format: "Podcast Production",
    thumbnail: "/podcast-episode.jpeg",
    description: "Full podcast production for fitness and lifestyle content creators",
    client: "ISSA",
    year: "2024",
    services: ["Podcast Production", "Audio Engineering", "Content Strategy"],
    videoUrl:
      "https://podcasts.apple.com/us/podcast/ep-16-couple-goals-building-a-fitness-and/id1577408673?i=1000538443236",
    videoType: "podcast",
  },
  {
    id: 7,
    title: "AWS Military Commercial",
    category: "Commercial",
    industry: "Technology",
    format: "Corporate Commercial",
    thumbnail: "/aws-military-commercial.png",
    description: "High-production military-themed commercial showcasing AWS cloud solutions for defense applications",
    client: "Amazon Web Services",
    year: "2024",
    services: ["Corporate Production", "Military Coordination", "Creative Direction"],
    videoUrl: "https://vimeo.com/722691606?share=copy",
    videoType: "vimeo",
  },
  {
    id: 8,
    title: "Acura TLX Commercial",
    category: "Commercial",
    industry: "Automotive",
    format: "Automotive Commercial",
    thumbnail: "/acura-tlx-commercial.png",
    description: "Dynamic automotive commercial showcasing the 2019 Acura TLX with bold visual storytelling",
    client: "Acura",
    year: "2019",
    services: ["Automotive Production", "Cinematic Direction", "Motion Graphics"],
    videoUrl: "https://vimeo.com/228445508?share=copy",
    videoType: "vimeo",
  },
  {
    id: 9,
    title: "Bella Twins Commercial",
    category: "Commercial",
    industry: "Entertainment",
    format: "Celebrity Commercial",
    thumbnail: "/bella-twins-commercial.png",
    description:
      "High-energy sports entertainment commercial featuring WWE superstars The Bella Twins with dynamic visual effects",
    client: "Bella Twins",
    year: "2024",
    services: ["Sports Entertainment Production", "Celebrity Direction", "Visual Effects"],
    videoUrl: "https://vimeo.com/357271813?share=copy",
    videoType: "vimeo",
  },
  {
    id: 10,
    title: "Mi Cafecito Club | Creating a Spanish Learning Show",
    category: "Documentary",
    industry: "Education",
    format: "Behind the Scenes",
    thumbnail: "/mi-cafecito-club-bts.png",
    description:
      "Behind-the-scenes documentary showcasing the creation of an engaging Spanish language learning show with educational entertainment production",
    client: "Mi Cafecito Club",
    year: "2024",
    services: ["Educational Production", "Documentary Direction", "Language Learning Content"],
    videoUrl: "https://www.youtube.com/watch?v=guaOi1InObM",
    videoType: "youtube",
  },
]

export function WorkPortfolio() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedVideo, setSelectedVideo] = useState<any>(null)

  const filteredProjects = projects.filter((project) => activeFilter === "All" || project.category === activeFilter)

  const getEmbedUrl = (project: any) => {
    if (project.videoType === "vimeo") {
      const vimeoId = project.videoUrl.split("/")[3].split("?")[0]
      return `https://player.vimeo.com/video/${vimeoId}`
    } else if (project.videoType === "drive") {
      const fileId = project.videoUrl.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1]
      return `https://drive.google.com/file/d/${fileId}/preview`
    } else if (project.videoType === "youtube") {
      let videoId = ""
      if (project.videoUrl.includes("youtu.be/")) {
        videoId = project.videoUrl.split("youtu.be/")[1].split("?")[0]
      } else if (project.videoUrl.includes("v=")) {
        videoId = project.videoUrl.split("v=")[1]?.split("&")[0]
      }
      return `https://www.youtube.com/embed/${videoId}`
    } else if (project.videoType === "instagram") {
      return project.videoUrl
    } else if (project.videoType === "podcast") {
      return project.videoUrl
    }
    return project.videoUrl
  }

  const handlePlayVideo = (project: any) => {
    if (project.videoType === "podcast") {
      window.open(project.videoUrl, "_blank", "width=800,height=600,scrollbars=yes,resizable=yes")
      return
    }
    setSelectedVideo(project)
  }

  const handleExternalLink = (project: any) => {
    window.open(project.videoUrl, "_blank")
  }

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-6 text-balance">Our Work</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Every project tells a story. From brand films to social campaigns, we create cinematic content that connects
            with audiences and drives meaningful results for our clients.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "border-border text-foreground hover:bg-accent hover:text-accent-foreground"
              }
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="bg-card border-border overflow-hidden group hover:border-accent/50 transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={project.thumbnail || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-3">
                    <button
                      onClick={() => handlePlayVideo(project)}
                      className="p-3 rounded-full bg-primary/90 hover:bg-primary transition-colors"
                    >
                      <Play className="h-5 w-5 text-primary-foreground" />
                    </button>
                    <button
                      onClick={() => handleExternalLink(project)}
                      className="p-3 rounded-full bg-accent/90 hover:bg-accent transition-colors"
                    >
                      <ExternalLink className="h-5 w-5 text-accent-foreground" />
                    </button>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-background/80 text-foreground text-sm font-medium rounded-full">
                    {project.year}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-accent font-semibold mb-2">{project.client}</div>
                <h3 className="text-xl font-bold text-foreground mb-2 text-balance">{project.title}</h3>
                <p className="text-muted-foreground text-pretty mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.services.slice(0, 2).map((service, index) => (
                    <span key={index} className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded">
                      {service}
                    </span>
                  ))}
                  {project.services.length > 2 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded">
                      +{project.services.length - 2} more
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-foreground text-foreground hover:bg-foreground hover:text-background font-semibold bg-transparent"
          >
            Load More Projects
          </Button>
        </div>
      </div>

      {selectedVideo && selectedVideo.videoType !== "podcast" && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
            >
              <X className="h-5 w-5 text-white" />
            </button>
            <iframe
              src={getEmbedUrl(selectedVideo)}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  )
}
