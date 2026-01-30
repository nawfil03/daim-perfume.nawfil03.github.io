import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";
import { MouseEvent, useEffect } from "react";
import AOS from "aos";

const Collection = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section id="collection" className="py-24 lg:py-32 bg-secondary/30 relative">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div
          className="text-center mb-16 lg:mb-24"
          data-aos="fade-up"
        >
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-4 block">
            The Collection
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-foreground">
            Scents of Significance
          </h2>
        </div>

        {/* Apple-style Grid Display - Denser Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product, index) => (
            <SpotlightCard key={product.id} index={index}>
              <ProductCard
                id={product.id}
                image={product.image}
                name={product.name}
                description={product.description}
                price={product.price}
                originalPrice={product.originalPrice}
                index={index}
              />
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
};

// Wrapper component for the "Apple" spotlight/hover effect
const SpotlightCard = ({ children, index }: { children: React.ReactNode; index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative border border-white/10 bg-background/50 overflow-hidden rounded-2xl"
      onMouseMove={handleMouseMove}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={index * 150}
    >
      {/* Spotlight Gradient */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              rgba(64, 191, 191, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Content */}
      <div className="relative h-full p-4 lg:p-6 flex flex-col items-center justify-between">
        {children}
      </div>
    </div>
  );
};

export default Collection;
