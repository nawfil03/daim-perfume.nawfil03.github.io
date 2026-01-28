import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  index: number;
}

const ProductCard = ({ id, image, name, description, price, originalPrice }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className="group block relative">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-card mb-6">
        <motion.img
          src={image}
          alt={`DAIM ${name}`}
          className="w-full h-full object-cover transition-transform duration-1000 ease-out will-change-transform"
          whileHover={{ scale: 1.05 }}
        />

        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
      </div>

      {/* Product Info - Minimalist */}
      <div className="flex flex-col items-center text-center space-y-2">
        <h3 className="font-display text-2xl text-foreground tracking-wide group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground font-light tracking-wide max-w-[200px] line-clamp-1">
          {description}
        </p>
        <div className="flex items-center gap-3 pt-1">
          {originalPrice && (
            <span className="text-xs text-muted-foreground/50 line-through">
              ₹{originalPrice.toLocaleString('en-IN')}
            </span>
          )}
          <span className="text-sm font-medium text-foreground tracking-wider">
            ₹{price.toLocaleString('en-IN')}
          </span>
        </div>

        {/* Discover Button - Appears on Hover */}
        <div className="h-8 overflow-hidden mt-2">
          <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]">
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary border-b border-primary pb-1">
              Discover
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
