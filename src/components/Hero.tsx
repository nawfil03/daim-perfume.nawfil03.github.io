import daimHero from "@/assets/daim-hero.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={daimHero}
          alt="DAIM Luxury Fragrance"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-2xl">
          <div className="overflow-hidden mb-6">
            <p 
              className="text-xs lg:text-sm tracking-[0.4em] uppercase text-primary font-light animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Eau de Parfum
            </p>
          </div>

          <div className="overflow-hidden mb-4">
            <h1 
              className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.1em] text-foreground animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              DAIM
            </h1>
          </div>

          <div className="overflow-hidden mb-8">
            <p 
              className="font-display text-2xl md:text-3xl lg:text-4xl italic text-champagne/80 tracking-wide animate-fade-up"
              style={{ animationDelay: "0.6s" }}
            >
              Wear Your Story
            </p>
          </div>

          <div className="overflow-hidden mb-12">
            <p 
              className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-lg font-light animate-fade-up"
              style={{ animationDelay: "0.8s" }}
            >
              Discover an exquisite collection of fragrances that capture the essence 
              of luxury, crafted for those who dare to leave a lasting impression.
            </p>
          </div>

          <div 
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "1s" }}
          >
            <a
              href="#collection"
              className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-light transition-all duration-300"
            >
              Explore Collection
            </a>
            <a
              href="#story"
              className="inline-flex items-center justify-center px-10 py-4 border border-border text-foreground text-sm tracking-[0.2em] uppercase font-light hover:border-primary hover:text-primary transition-all duration-300"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in" style={{ animationDelay: "1.5s" }}>
        <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
