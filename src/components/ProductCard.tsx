import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/products";

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  index: number;
}

const ProductCard = ({ id, image, name, description, price, index }: ProductCardProps) => {
  const quantity = 1;
  const total = price * quantity;
  const message = encodeURIComponent(
    `Hi! I would like to order from DAIM Perfumes:\n\n` +
      `Product: ${name}\n` +
      `Quantity: ${quantity}\n` +
      `Total: ₹${total.toLocaleString("en-IN")}\n\n` +
      `Please confirm availability and share payment details.`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

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
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open(whatsappUrl, "_blank");
            }}
            className="px-8 py-3 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors"
          >
            <ShoppingBag size={16} />
            Add to Bag
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-6 text-center">
        <h3 className="font-display text-xl lg:text-2xl text-foreground tracking-wide mb-2">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground font-light tracking-wide mb-2">
          {description}
        </p>
        <p className="text-lg font-semibold text-primary">₹{price.toLocaleString('en-IN')}</p>
      </div>

      {/* Golden Line Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-primary group-hover:w-1/2 transition-all duration-500" />
    </Link>
  );
};

export default ProductCard;
