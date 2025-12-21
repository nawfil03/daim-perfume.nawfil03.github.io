import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  description: string;
  index: number;
}

const ProductCard = ({ id, image, name, description, index }: ProductCardProps) => {
  return (
    <Link 
      to={`/product/${id}`}
      className="group relative hover-lift block"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-card">
        <img
          src={image}
          alt={`DAIM ${name}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <span className="px-8 py-3 border border-primary text-primary text-xs tracking-[0.2em] uppercase font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            Discover
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-6 text-center">
        <h3 className="font-display text-xl lg:text-2xl text-foreground tracking-wide mb-2">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground font-light tracking-wide">
          {description}
        </p>
      </div>

      {/* Golden Line Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-primary group-hover:w-1/2 transition-all duration-500" />
    </Link>
  );
};

export default ProductCard;
