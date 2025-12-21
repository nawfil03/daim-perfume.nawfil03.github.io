import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Collection", href: "#collection", isPage: false },
    { name: "Our Story", href: "#story", isPage: false },
    { name: "Craftsmanship", href: "#craft", isPage: false },
    { name: "Contact", href: "/contact", isPage: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start">
            <span className="font-display text-2xl lg:text-3xl tracking-[0.3em] text-foreground font-medium">
              DAIM
            </span>
            <span className="text-[10px] lg:text-xs tracking-[0.25em] text-muted-foreground uppercase">
              Wear Your Story
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) =>
              link.isPage ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300 font-light"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300 font-light"
                >
                  {link.name}
                </a>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border animate-fade-in">
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) =>
                link.isPage ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300 font-light"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300 font-light"
                  >
                    {link.name}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
