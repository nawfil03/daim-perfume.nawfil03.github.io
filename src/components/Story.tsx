import daimHero from "@/assets/daim-hero.png";

const Story = () => {
  return (
    <section id="story" className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={daimHero}
                alt="DAIM Luxury Fragrance"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-primary/30 -z-10" />
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/20 -z-10" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wide mb-8">
              The Art of
              <br />
              <span className="text-gradient-gold">Timeless Elegance</span>
            </h2>

            <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
              <p>
                DAIM was born from a passion for creating fragrances that transcend 
                the ordinary. Each bottle contains not just a scent, but a narrative—a 
                carefully curated journey that unfolds on your skin.
              </p>
              <p>
                We believe that fragrance is the most intimate form of self-expression. 
                It's invisible yet unforgettable, personal yet powerful. Our master 
                perfumers work with the rarest ingredients, sourcing precious oud from 
                ancient forests, roses from dawn-kissed gardens, and spices from 
                far-flung corners of the world.
              </p>
              <p>
                Every DAIM fragrance is a testament to meticulous craftsmanship and 
                uncompromising quality, designed for those who understand that true 
                luxury lies in the details.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-8">
              <div className="text-center">
                <span className="font-display text-4xl text-primary">8</span>
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">
                  Fragrances
                </p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <span className="font-display text-4xl text-primary">100%</span>
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">
                  Premium Oils
                </p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <span className="font-display text-4xl text-primary">∞</span>
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">
                  Stories
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
