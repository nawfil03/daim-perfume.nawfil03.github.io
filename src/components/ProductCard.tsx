import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, ArrowUpRight } from "lucide-react";
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
    <div className="group relative card-premium">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-card">
        <Link to={`/product/${id}`} className="block h-full">
          <motion.img
            src={image}
            alt={`DAIM ${name}`}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          />
        </Link>
        
        {/* Premium Overlay on Hover */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        />
        
        {/* CTA Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium w-full px-8 py-4 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase font-medium flex items-center justify-center gap-3 hover:bg-gold-light transition-all duration-300 mb-3"
          >
            <ShoppingBag size={16} />
            Add to Bag
          </a>
          <Link
            to={`/product/${id}`}
            className="w-full px-8 py-3 border border-border text-foreground text-xs tracking-[0.2em] uppercase font-light flex items-center justify-center gap-2 hover:border-primary hover:text-primary transition-all duration-300"
          >
            View Details
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Corner Accent */}
        <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-primary/0 group-hover:border-primary/50 transition-all duration-500" />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-primary/0 group-hover:border-primary/50 transition-all duration-500" />
      </div>

      {/* Product Info */}
      <Link to={`/product/${id}`} className="block mt-6 text-center">
        <h3 className="font-display text-xl lg:text-2xl text-foreground tracking-wide mb-2 group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground font-light tracking-wide mb-3">
          {description}
        </p>
        <p className="text-lg font-medium text-primary">₹{price.toLocaleString('en-IN')}</p>
      </Link>

      {/* Animated Bottom Line */}
      <motion.div 
        className="absolute -bottom-2 left-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        initial={{ width: 0, x: "-50%" }}
        whileHover={{ width: "80%" }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default ProductCard;
