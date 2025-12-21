import ProductCard from "./ProductCard";
import goldenElysia from "@/assets/golden-elysia.jpeg";
import wildHorizon from "@/assets/wild-horizon.jpeg";
import rebelRose from "@/assets/rebel-rose.jpeg";
import aureliaLuxe from "@/assets/aurelia-luxe.jpeg";
import victoryNoir from "@/assets/victory-noir.jpeg";
import midnightEmber from "@/assets/midnight-ember.jpeg";
import oudEclipse from "@/assets/oud-eclipse.jpeg";
import duneImperial from "@/assets/dune-imperial.jpeg";

const products = [
  {
    image: goldenElysia,
    name: "Golden Elysia",
    description: "Radiant floral elegance",
  },
  {
    image: rebelRose,
    name: "Rebel Rose",
    description: "Bold and enchanting",
  },
  {
    image: victoryNoir,
    name: "Victory Noir",
    description: "Sophisticated darkness",
  },
  {
    image: oudEclipse,
    name: "Oud Eclipse",
    description: "Mysterious oriental",
  },
  {
    image: midnightEmber,
    name: "Midnight Ember",
    description: "Warm smoky allure",
  },
  {
    image: aureliaLuxe,
    name: "Aurelia Luxe",
    description: "Opulent golden warmth",
  },
  {
    image: wildHorizon,
    name: "Wild Horizon",
    description: "Adventurous spirit",
  },
  {
    image: duneImperial,
    name: "Dune Impérial",
    description: "Desert majesty",
  },
];

const Collection = () => {
  return (
    <section id="collection" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">
            The Collection
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide mb-6">
            Signature Fragrances
          </h2>
          <div className="w-20 h-px bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Each fragrance in our collection tells a unique story, crafted with the finest 
            ingredients from around the world to create unforgettable olfactory experiences.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {products.map((product, index) => (
            <ProductCard
              key={product.name}
              image={product.image}
              name={product.name}
              description={product.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
