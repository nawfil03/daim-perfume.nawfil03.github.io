import { motion } from "framer-motion";
import { Instagram, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border relative overflow-hidden">
      {/* Premium Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/3 rounded-full blur-3xl -translate-y-1/2" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
          {/* Brand */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <h3 className="font-display text-4xl tracking-[0.3em] text-foreground">
                DAIM
              </h3>
              <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mt-2">
                Wear Your Story
              </p>
            </div>
            <p className="text-muted-foreground font-light leading-relaxed max-w-md mb-10 text-base">
              Experience the art of luxury perfumery. Each DAIM fragrance is crafted
              to tell your unique story, leaving an unforgettable impression wherever
              you go.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "https://www.instagram.com/daim.intry?igsh=MWZxcTA0d3dkZzd5ZQ==" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-500 group"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <social.icon size={18} className="group-hover:scale-110 transition-transform duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="text-xs tracking-[0.4em] uppercase text-foreground mb-8">
              Explore
            </h4>
            <ul className="space-y-5">
              {[
                { name: "Collection", href: "#collection" },
                { name: "Our Story", href: "#story" },
                { name: "Craftsmanship", href: "#craft" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-500 font-light"
                  >
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-xs tracking-[0.4em] uppercase text-foreground mb-8">
              Contact
            </h4>
            <ul className="space-y-5 text-muted-foreground font-light">
              <li>
                <a
                  href="mailto:daimstory@gmail.com"
                  className="hover:text-primary transition-colors duration-500"
                >
                  daimstory@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+918825736693"
                  className="hover:text-primary transition-colors duration-500"
                >
                  +91 88257 36693
                </a>
              </li>
              <li>
                <a
                  href="tel:+971557947447"
                  className="hover:text-primary transition-colors duration-500"
                >
                  +971 55 794 7447
                </a>
              </li>
              <li className="pt-4">
                <span className="text-foreground text-xs tracking-[0.3em] uppercase block mb-4">
                  Newsletter
                </span>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                  />
                  <motion.button
                    className="px-5 bg-primary text-primary-foreground text-xs tracking-wider uppercase hover:bg-gold-light transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Join
                  </motion.button>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.p
              className="text-xs text-muted-foreground tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              © 2024 DAIM. All rights reserved.
            </motion.p>
            <motion.div
              className="flex gap-8 text-xs text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <a href="#" className="hover:text-primary transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors duration-300">Terms of Service</a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
