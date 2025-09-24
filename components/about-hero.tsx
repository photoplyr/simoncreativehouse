export function AboutHero() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-6 text-balance">
            We Are Simon Creative House
          </h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
            A creative agency born from the belief that every brand has a story worth telling. We combine cinematic
            artistry with strategic thinking to create content that moves people and drives results.
          </p>
        </div>

        <div className="aspect-video rounded-lg overflow-hidden">
          <img
            src="/creative-agency-team-photo.jpg"
            alt="Simon Creative House team"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
