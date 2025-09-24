export function AboutStory() {
  return (
    <section className="py-24 bg-card/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-pretty">
                Simon Creative House was born from one simple belief: imagination should never stay unseen.
              </p>
              <p className="text-pretty">
                Founded in Scottsdale, Arizona, we are a family-driven creative studio bridging cinematic storytelling
                and commerce. What began as a vision to create meaningful films and content has grown into a full
                creative house trusted by brands across wellness, fashion, sports, hospitality, and tech.
              </p>
              <p className="text-pretty">
                At our core, we're filmmakers, storytellers, and strategists. We take ideas—big or small—and bring them
                to life with cinematic precision, cultural credibility, and emotional resonance. From brand films and
                commercials to documentaries and original IP, we create work that people don't just watch—they feel.
              </p>
              <p className="text-pretty">
                Our team blends years of experience in film, media, and brand strategy with an obsession for innovation
                and cultural relevance. We've built campaigns with athletes, entrepreneurs, and global brands while also
                developing original series and stories that spark deeper conversations.
              </p>
              <p className="text-pretty">
                This isn't just a production company. It's a house—a place where imagination finds form, stories take
                shape, and ideas become reality.
              </p>
              <p className="text-pretty font-semibold text-foreground">Simon Creative House. Make it.</p>
            </div>
          </div>

          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src="/our-story-behind-scenes.jpeg"
              alt="Behind-the-scenes at Simon Creative House during video production"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
