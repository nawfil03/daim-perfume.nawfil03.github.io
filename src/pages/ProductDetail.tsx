import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Droplets, Leaf, FlaskConical, ShoppingBag, Heart, Minus, Plus, Truck, Shield, RotateCcw } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { getProductById, products, getWhatsAppOrderUrl } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  const handleAddToCart = () => {
    const url = getWhatsAppOrderUrl(product.name, quantity, product.price);

    // Lovable preview runs inside an iframe; WhatsApp refuses to load there.
    // In preview we copy the link, on the published site we open a new tab.
    const inIframe = window.self !== window.top;
    if (inIframe) {
      navigator.clipboard?.writeText?.(url);
      toast.success("WhatsApp link copied", { description: "Open a new tab (or WhatsApp) and paste the link." });
      return;
    }

    const opened = window.open(url, "_blank", "noopener,noreferrer");
    if (!opened) {
      navigator.clipboard?.writeText?.(url);
      toast.error("Popup blocked", { description: "WhatsApp link copied. Please allow popups." });
    }
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast.success(isWishlisted ? "Removed from wishlist" : "Added to wishlist");
  };

  const topNotes = product.notes.find(n => n.category === "top")?.notes || [];
  const heartNotes = product.notes.find(n => n.category === "heart")?.notes || [];
  const baseNotes = product.notes.find(n => n.category === "base")?.notes || [];

  // Get related products (excluding current)
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <>
      <Helmet>
        <title>{product.name} | DAIM Perfumes</title>
        <meta name="description" content={`${product.name} - ${product.description}. ${product.story.slice(0, 120)}...`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between h-20 lg:h-24">
              <Link to="/#collection" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft size={20} />
                <span className="text-sm tracking-[0.15em] uppercase">Back to Collection</span>
              </Link>
              <Link to="/" className="flex flex-col items-center">
                <span className="font-display text-2xl tracking-[0.3em] text-foreground font-medium">DAIM</span>
                <span className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">Wear Your Story</span>
              </Link>
              <div className="w-32" />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-24 lg:pt-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-6rem)]">
              
              {/* Product Image */}
              <div className="relative animate-fade-in">
                <div className="aspect-square overflow-hidden bg-card">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative Frame */}
                <div className="absolute -inset-4 border border-primary/20 -z-10" />
                <div className="absolute -inset-8 border border-primary/10 -z-20" />
              </div>

              {/* Product Info */}
              <div className="py-8 lg:py-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">
                  {product.concentration}
                </p>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide mb-4">
                  {product.name}
                </h1>
                <p className="text-lg text-muted-foreground font-light mb-6">
                  {product.description}
                </p>
                <div className="w-16 h-px bg-primary mb-8" />
                
                <p className="text-muted-foreground font-light leading-relaxed mb-8">
                  {product.story}
                </p>

                <p className="text-xs tracking-[0.2em] uppercase text-primary/70 mb-6">
                  {product.inspiration}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-4 mb-8">
                  <span className="font-display text-4xl text-primary">₹{product.price.toLocaleString('en-IN')}</span>
                  <span className="text-muted-foreground text-sm">{product.size}</span>
                </div>

                {/* Quantity & Add to Cart */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-border">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-muted transition-colors">
                        <Minus size={16} />
                      </button>
                      <span className="w-12 text-center font-medium">{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-muted transition-colors">
                        <Plus size={16} />
                      </button>
                    </div>
                    <button onClick={handleWishlist} className={`p-3 border transition-colors ${isWishlisted ? 'border-primary bg-primary/10 text-primary' : 'border-border hover:border-primary'}`}>
                      <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
                    </button>
                  </div>
                  <button onClick={handleAddToCart} className="w-full bg-primary text-primary-foreground py-4 flex items-center justify-center gap-3 hover:bg-primary/90 transition-colors">
                    <ShoppingBag size={20} />
                    <span className="font-medium tracking-wider">ADD TO BAG - ₹{(product.price * quantity).toLocaleString('en-IN')}</span>
                  </button>
                </div>

                {/* Features */}
                <div className="grid grid-cols-3 gap-4 py-6 border-y border-border">
                  <div className="text-center space-y-2">
                    <Truck size={20} className="mx-auto text-primary" />
                    <p className="text-xs text-muted-foreground">Free Shipping</p>
                  </div>
                  <div className="text-center space-y-2">
                    <Shield size={20} className="mx-auto text-primary" />
                    <p className="text-xs text-muted-foreground">Authentic</p>
                  </div>
                  <div className="text-center space-y-2">
                    <RotateCcw size={20} className="mx-auto text-primary" />
                    <p className="text-xs text-muted-foreground">Easy Returns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fragrance Pyramid */}
        <section className="py-24 lg:py-32 bg-card/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Olfactive Journey</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-wide mb-6">
                Fragrance Notes
              </h2>
              <div className="w-20 h-px bg-primary mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {/* Top Notes */}
              <div className="text-center p-8 border border-border/30 hover:border-primary/30 transition-colors group">
                <div className="w-16 h-16 mx-auto mb-6 border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Droplets size={24} className="text-primary" />
                </div>
                <h3 className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Top Notes</h3>
                <p className="text-sm text-muted-foreground/60 mb-6">First Impression • 15-30 min</p>
                <div className="space-y-3">
                  {topNotes.map((note) => (
                    <p key={note} className="font-display text-lg text-foreground">{note}</p>
                  ))}
                </div>
              </div>

              {/* Heart Notes */}
              <div className="text-center p-8 border border-border/30 hover:border-primary/30 transition-colors group">
                <div className="w-16 h-16 mx-auto mb-6 border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Leaf size={24} className="text-primary" />
                </div>
                <h3 className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Heart Notes</h3>
                <p className="text-sm text-muted-foreground/60 mb-6">The Soul • 2-4 hours</p>
                <div className="space-y-3">
                  {heartNotes.map((note) => (
                    <p key={note} className="font-display text-lg text-foreground">{note}</p>
                  ))}
                </div>
              </div>

              {/* Base Notes */}
              <div className="text-center p-8 border border-border/30 hover:border-primary/30 transition-colors group">
                <div className="w-16 h-16 mx-auto mb-6 border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <FlaskConical size={24} className="text-primary" />
                </div>
                <h3 className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Base Notes</h3>
                <p className="text-sm text-muted-foreground/60 mb-6">The Foundation • 4+ hours</p>
                <div className="space-y-3">
                  {baseNotes.map((note) => (
                    <p key={note} className="font-display text-lg text-foreground">{note}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ingredients */}
        <section className="py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Composition</p>
              <h2 className="font-display text-2xl md:text-3xl text-foreground tracking-wide mb-6">
                Ingredients
              </h2>
              <div className="w-16 h-px bg-primary mx-auto" />
            </div>
            <p className="text-center text-muted-foreground font-light leading-relaxed">
              {product.ingredients.join(", ")}
            </p>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-24 lg:py-32 bg-card/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Explore More</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide mb-6">
                You May Also Love
              </h2>
              <div className="w-20 h-px bg-primary mx-auto" />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="relative aspect-square overflow-hidden bg-card mb-4">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="font-display text-lg text-foreground tracking-wide text-center group-hover:text-primary transition-colors">
                    {relatedProduct.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border/30 py-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
            <Link to="/" className="flex flex-col items-center md:items-start">
              <span className="font-display text-xl tracking-[0.3em] text-foreground font-medium">DAIM</span>
              <span className="text-[9px] tracking-[0.2em] text-muted-foreground uppercase">Wear Your Story</span>
            </Link>
            <p className="text-xs text-muted-foreground tracking-wider">
              © 2024 DAIM. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ProductDetail;
