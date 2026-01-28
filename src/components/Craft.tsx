import { motion } from "framer-motion";

const Craft = () => {
  const features = [
    {
      title: "Rare Ingredients",
      description: "Sourced from the world's most prestigious regions, each ingredient is handpicked for its exceptional quality and aromatic richness.",
      id: "01",
    },
    {
      title: "Master Perfumers",
      description: "Our fragrances are crafted by world-renowned noses, each with decades of experience in the art of perfumery.",
      id: "02",
    },
    {
      title: "Sustainable Luxury",
      description: "We believe in responsible luxury, partnering with ethical suppliers who share our commitment to environmental stewardship.",
      id: "03",
    },
  ];

  return (
    <section id="craft" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="mb-24 lg:mb-32">
          <h2 className="font-display text-4xl md:text-6xl text-foreground leading-tight">
            Process of <br />
            <span className="italic text-muted-foreground">Perfection</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative pt-12 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Giant Background Number */}
              <span className="absolute -top-10 left-0 text-[8rem] font-display text-primary/5 select-none transition-colors duration-500 group-hover:text-primary/10">
                {feature.id}
              </span>

              <div className="relative pl-4 border-l border-primary/20 group-hover:border-primary transition-colors duration-500">
                <h3 className="font-display text-2xl text-foreground mb-4 group-hover:translate-x-2 transition-transform duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed max-w-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Thought */}
        <div className="mt-32 border-t border-border pt-12 text-center">
          <p className="font-display text-2xl lg:text-3xl text-foreground/80 italic">
            "True luxury is tailored, not manufactured."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Craft;
