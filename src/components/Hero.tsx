import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % products.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Dynamic Background Slideshow */}
      <div className="absolute inset-0 bg-black">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.3, filter: "brightness(2) blur(12px)" }}
            animate={{ opacity: 1, scale: 1, filter: "brightness(1) blur(0px)" }}
            exit={{ opacity: 0, scale: 1.1, filter: "brightness(0.5) blur(8px)" }}
            transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={products[currentImageIndex].image}
              alt="DAIM Luxury Fragrance"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Enlightening Golden Flash Effect */}
        <motion.div
          key={`flash-${currentImageIndex}`}
          className="absolute inset-0 bg-primary/20 z-10 mix-blend-screen pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />

        {/* Premium Gradient Overlays - Static on top */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full">
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
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
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
      <div className="absolute top-20 left-6 lg:left-12 w-20 h-px bg-gradient-to-r from-primary/40 to-transparent z-20" />
      <div className="absolute top-20 left-6 lg:left-12 w-px h-20 bg-gradient-to-b from-primary/40 to-transparent z-20" />
      <div className="absolute bottom-20 right-6 lg:right-12 w-20 h-px bg-gradient-to-l from-primary/40 to-transparent z-20" />
      <div className="absolute bottom-20 right-6 lg:right-12 w-px h-20 bg-gradient-to-t from-primary/40 to-transparent z-20" />
    </section>
  );
};

export default Hero;
