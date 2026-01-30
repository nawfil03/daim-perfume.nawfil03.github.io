import { motion } from "framer-motion";
import daimHero from "@/assets/daim-hero-updated.png";
import { Link } from "react-router-dom";

const Story = () => {
  return (
    <section id="story" className="py-24 lg:py-32 bg-background relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">

          {/* Visual Side */}

          <div
            data-aos="fade-right"
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden bg-card">
              <img
                src={daimHero}
                alt="DAIM Story"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            {/* Watermark/Texture */}
            <div className="absolute -bottom-12 -left-12 -z-10 text-[10rem] font-display text-foreground/5 pointer-events-none select-none hidden lg:block">
              STORY
            </div>
          </div>

          {/* Text Side */}
          <div className="flex flex-col justify-center">
            <div
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <h4 className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-8 flex items-center gap-4">
                <span className="w-8 h-px bg-primary" />
                The Origin
              </h4>

              <h2 className="font-display text-5xl lg:text-6xl text-foreground leading-[1.1] mb-10">
                Crafting the
                <span className="block italic text-muted-foreground/80">Invisible Art.</span>
              </h2>

              <div className="space-y-6 text-muted-foreground font-light text-lg leading-relaxed max-w-lg">
                <p>
                  DAIM isn't just a fragrance brand; it's a rebellion against the ordinary.
                  In a world of mass production, we act as curators of the rare and the exquisite.
                </p>
                <p>
                  Our journey began with a simple question: <span className="text-foreground italic">"What if a scent could hold a memory forever?"</span>
                  This pursuit led us to the farthest corners of the globe, seeking ingredients that carry the soul of their origin.
                </p>
              </div>

              <div className="mt-12 pt-12 border-t border-border/40">
                <Link to="/contact-us" className="group flex items-center gap-4 text-foreground uppercase tracking-[0.2em] text-xs font-bold">
                  <span className="group-hover:text-primary transition-colors">Start Your Journey</span>
                  <span className="w-12 h-px bg-foreground group-hover:w-20 group-hover:bg-primary transition-all duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
