import { motion } from "framer-motion";
import daimHero from "@/assets/daim-hero-updated.png";

const Story = () => {
  return (
    <section id="story" className="py-28 lg:py-40 bg-card relative overflow-hidden">
      {/* Premium Decorative Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* Decorative Lines */}
      <div className="absolute top-1/4 right-0 w-32 h-px bg-gradient-to-l from-primary/20 to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-32 h-px bg-gradient-to-r from-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="aspect-[3/4] overflow-hidden relative">
              <motion.img
                src={daimHero}
                alt="DAIM Luxury Fragrance"
                className="w-full h-full object-cover object-top"
                style={{ objectPosition: "center 20%" }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.8 }}
              />
              {/* Overlay to hide potential watermarks at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-card to-transparent" />
            </div>
            {/* Premium Decorative Frame */}
            <motion.div
              className="absolute -top-6 -left-6 w-full h-full border border-primary/30"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 w-full h-full border border-primary/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            {/* Corner Accents */}
            <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-primary/50" />
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-primary/50" />
          </motion.div>

          {/* Content */}
          <motion.div
            className="lg:pl-8"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <motion.p
              className="text-xs tracking-[0.5em] uppercase text-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Story
            </motion.p>
            <motion.h2
              className="font-display text-5xl md:text-6xl text-foreground tracking-wide mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              The Art of
              <br />
              <span className="text-gradient-gold">Timeless Elegance</span>
            </motion.h2>

            <motion.div
              className="space-y-6 text-muted-foreground font-light leading-relaxed text-base lg:text-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
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
            </motion.div>

            <motion.div
              className="mt-12 flex items-center gap-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {[
                { value: "8", label: "Fragrances" },
                { value: "100%", label: "Premium Oils" },
                { value: "∞", label: "Stories" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <span className="font-display text-4xl lg:text-5xl text-primary">{stat.value}</span>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
