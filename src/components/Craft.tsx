const Craft = () => {
  const features = [
    {
      title: "Rare Ingredients",
      description: "Sourced from the world's most prestigious regions, each ingredient is handpicked for its exceptional quality and aromatic richness.",
    },
    {
      title: "Master Perfumers",
      description: "Our fragrances are crafted by world-renowned noses, each with decades of experience in the art of perfumery.",
    },
    {
      title: "Sustainable Luxury",
      description: "We believe in responsible luxury, partnering with ethical suppliers who share our commitment to environmental stewardship.",
    },
  ];

  return (
    <section id="craft" className="py-24 lg:py-32 bg-background relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 100px,
            hsl(var(--primary)) 100px,
            hsl(var(--primary)) 101px
          )`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Craftsmanship
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide mb-6">
            Perfection in Every Drop
          </h2>
          <div className="w-20 h-px bg-primary mx-auto" />
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center group"
            >
              {/* Number */}
              <div className="mb-6">
                <span className="font-display text-6xl lg:text-7xl text-primary/20 group-hover:text-primary/40 transition-colors duration-500">
                  0{index + 1}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl text-foreground mb-4 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative Line */}
              <div className="mt-8 w-12 h-px bg-border mx-auto group-hover:w-20 group-hover:bg-primary transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-24 text-center max-w-3xl mx-auto">
          <blockquote className="font-display text-2xl md:text-3xl text-foreground italic leading-relaxed">
            "A fragrance is not just a scent—it's a signature, a memory, a story 
            waiting to be told."
          </blockquote>
          <cite className="block mt-6 text-xs tracking-[0.3em] uppercase text-primary not-italic">
            — The House of DAIM
          </cite>
        </div>
      </div>
    </section>
  );
};

export default Craft;
