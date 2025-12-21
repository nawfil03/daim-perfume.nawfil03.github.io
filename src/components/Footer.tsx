import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="font-display text-3xl tracking-[0.3em] text-foreground">
                DAIM
              </h3>
              <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase mt-1">
                Wear Your Story
              </p>
            </div>
            <p className="text-muted-foreground font-light leading-relaxed max-w-md mb-8">
              Experience the art of luxury perfumery. Each DAIM fragrance is crafted 
              to tell your unique story, leaving an unforgettable impression wherever 
              you go.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-foreground mb-6">
              Explore
            </h4>
            <ul className="space-y-4">
              {["Collection", "Our Story", "Craftsmanship", "Stores"].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 font-light"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-foreground mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-muted-foreground font-light">
              <li>
                <a 
                  href="mailto:contact@daim.com" 
                  className="hover:text-primary transition-colors duration-300"
                >
                  contact@daim.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+1234567890" 
                  className="hover:text-primary transition-colors duration-300"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="pt-2">
                <span className="text-foreground text-xs tracking-[0.2em] uppercase block mb-2">
                  Newsletter
                </span>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email"
                    className="flex-1 bg-background border border-border px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                  <button className="px-4 bg-primary text-primary-foreground text-xs tracking-wider uppercase hover:bg-gold-light transition-colors">
                    Join
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground tracking-wider">
              © 2024 DAIM. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
