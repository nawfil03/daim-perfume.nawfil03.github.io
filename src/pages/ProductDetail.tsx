import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Droplets, Leaf, FlaskConical } from "lucide-react";
import { getProductById, products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return <Navigate to="/" replace />;
  }

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

                <p className="text-xs tracking-[0.2em] uppercase text-primary/70 mb-8">
                  {product.inspiration}
                </p>

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <FlaskConical size={16} className="text-primary" />
                    {product.size}
                  </span>
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
