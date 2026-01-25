import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const Collection = () => {
  return (
    <section id="collection" className="py-28 lg:py-40 bg-background relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

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
            The Collection
          </motion.p>
          <motion.h2
            className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground tracking-wide mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Signature Fragrances
          </motion.h2>
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary" />
            <div className="w-2 h-2 rotate-45 border border-primary" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary" />
          </motion.div>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed text-base lg:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Each fragrance in our collection tells a unique story, crafted with the finest
            ingredients from around the world to create unforgettable olfactory experiences.
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.25, 0.4, 0.25, 1]
              }}
            >
              <ProductCard
                id={product.id}
                image={product.image}
                name={product.name}
                description={product.description}
                price={product.price}
                originalPrice={product.originalPrice}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
