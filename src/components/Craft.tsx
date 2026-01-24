import { motion } from "framer-motion";

const Craft = () => {
  const features = [
    {
      title: "Rare Ingredients",
      description: "Sourced from the world's most prestigious regions, each ingredient is handpicked for its exceptional quality and aromatic richness.",
      icon: "◇",
    },
    {
      title: "Master Perfumers",
      description: "Our fragrances are crafted by world-renowned noses, each with decades of experience in the art of perfumery.",
      icon: "◈",
    },
    {
      title: "Sustainable Luxury",
      description: "We believe in responsible luxury, partnering with ethical suppliers who share our commitment to environmental stewardship.",
      icon: "◆",
    },
  ];

  return (
    <section id="craft" className="py-28 lg:py-40 bg-background relative overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
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

      {/* Decorative Elements */}
      <div className="absolute top-20 left-1/4 w-40 h-40 border border-primary/10 rotate-45" />
      <div className="absolute bottom-20 right-1/4 w-40 h-40 border border-primary/10 rotate-45" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20 lg:mb-28"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <motion.p 
            className="text-xs tracking-[0.5em] uppercase text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Craftsmanship
          </motion.p>
          <motion.h2 
            className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground tracking-wide mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Perfection in Every Drop
          </motion.h2>
          <motion.div 
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary" />
            <div className="w-2 h-2 rotate-45 border border-primary" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary" />
          </motion.div>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-16 lg:gap-20">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="text-center group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.25, 0.4, 0.25, 1]
              }}
            >
              {/* Premium Number/Icon */}
              <motion.div 
                className="mb-8 relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="font-display text-7xl lg:text-8xl text-primary/15 group-hover:text-primary/30 transition-colors duration-700">
                  0{index + 1}
                </span>
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {feature.icon}
                </span>
              </motion.div>

              {/* Content */}
              <h3 className="font-display text-2xl lg:text-3xl text-foreground mb-5 tracking-wide group-hover:text-primary transition-colors duration-500">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed text-base lg:text-lg">
                {feature.description}
              </p>

              {/* Animated Decorative Line */}
              <motion.div 
                className="mt-10 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"
                initial={{ width: 48 }}
                whileHover={{ width: 80 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div 
          className="mt-28 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="text-5xl text-primary/30 mb-6 font-display">"</div>
          <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground italic leading-relaxed">
            A fragrance is not just a scent—it's a signature, a memory, a story 
            waiting to be told.
          </blockquote>
          <motion.div 
            className="flex items-center justify-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-8 h-px bg-primary" />
            <cite className="text-xs tracking-[0.4em] uppercase text-primary not-italic">
              The House of DAIM
            </cite>
            <div className="w-8 h-px bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Craft;
