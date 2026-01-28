import { motion } from "framer-motion";
import { Instagram, ArrowUpRight, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-[#020202] text-white pt-24 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Giant Watermark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 select-none pointer-events-none opacity-[0.03]">
        <span className="font-display text-[20vw] leading-none text-white whitespace-nowrap">DAIM</span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">

          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-display text-5xl md:text-6xl text-white mb-6"
              >
                DAIM
              </motion.h2>
              <p className="font-body text-white/60 font-light text-lg max-w-sm leading-relaxed mb-10">
                Crafting olfactory masterpieces that transcend time. Luxury bottled for the modern connoisseur.
              </p>
            </div>

            <div className="flex gap-6">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-primary hover:border-primary hover:text-black transition-all duration-300 group"
                >
                  <Icon size={18} className="text-white/70 group-hover:text-black transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xl text-white mb-8">Navigation</h4>
            <ul className="space-y-4">
              {[
                { label: "The Collection", href: "/#collection" },
                { label: "Our Story", href: "/#story" },
                { label: "Craftsmanship", href: "/#craft" },
                { label: "Journal", href: "#" },
                { label: "Contact Us", href: "/contact" },
              ].map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="text-white/60 hover:text-primary transition-colors duration-300 flex items-center gap-2 group">
                    <span className="h-px w-0 bg-primary group-hover:w-4 transition-all duration-300" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="font-display text-xl text-white mb-8">Newsletter</h4>
            <p className="text-white/60 font-light mb-8">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>

            <div className="relative group">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors duration-300"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-white/50 hover:text-primary transition-colors">
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} DAIM Perfumes. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/40 text-xs tracking-widest uppercase hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 text-xs tracking-widest uppercase hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
