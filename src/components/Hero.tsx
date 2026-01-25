import { motion } from "framer-motion";
import daimHero from "@/assets/landing-background.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Image with Overlay */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <img
          src={daimHero}
          alt="DAIM Luxury Fragrance"
          className="w-full h-full object-cover object-center"
        />
        {/* Premium Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-transparent" />

        {/* Subtle animated glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-2xl">
          <motion.div
            className="overflow-hidden mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <p className="text-xs lg:text-sm tracking-[0.5em] uppercase text-primary font-light">
              Eau de Parfum
            </p>
          </motion.div>

          <motion.div
            className="overflow-hidden mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-[0.15em] text-foreground">
              DAIM
            </h1>
          </motion.div>

          <motion.div
            className="overflow-hidden mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <p className="font-display text-xl sm:text-3xl md:text-3xl lg:text-4xl italic text-champagne tracking-wide">
              Wear Your Story
            </p>
          </motion.div>

          <motion.div
            className="overflow-hidden mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-lg font-light">
              Discover an exquisite collection of fragrances that capture the essence
              of luxury, crafted for those who dare to leave a lasting impression.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <a
              href="#collection"
              className="btn-premium inline-flex items-center justify-center px-12 py-4 bg-primary text-primary-foreground text-sm tracking-[0.25em] uppercase font-medium hover:bg-gold-light transition-all duration-500 hover:shadow-lg hover:shadow-primary/20"
            >
              Explore Collection
            </a>
            <a
              href="#story"
              className="group inline-flex items-center justify-center px-12 py-4 border border-border text-foreground text-sm tracking-[0.25em] uppercase font-light hover:border-primary hover:text-primary transition-all duration-500 relative overflow-hidden"
            >
              <span className="relative z-10">Our Story</span>
              <motion.div
                className="absolute inset-0 bg-primary/5"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-light">Scroll</span>
        <motion.div
          className="w-px h-16 bg-gradient-to-b from-primary via-primary/50 to-transparent"
          animate={{ scaleY: [1, 0.7, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-20 left-6 lg:left-12 w-20 h-px bg-gradient-to-r from-primary/40 to-transparent" />
      <div className="absolute top-20 left-6 lg:left-12 w-px h-20 bg-gradient-to-b from-primary/40 to-transparent" />
      <div className="absolute bottom-20 right-6 lg:right-12 w-20 h-px bg-gradient-to-l from-primary/40 to-transparent" />
      <div className="absolute bottom-20 right-6 lg:right-12 w-px h-20 bg-gradient-to-t from-primary/40 to-transparent" />
    </section>
  );
};

export default Hero;
