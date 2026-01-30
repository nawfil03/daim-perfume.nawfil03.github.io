import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import realisticWhale from "@/assets/realistic_whale.png";
import luxuryLandingBg from "@/assets/luxury_landing_bg.png";
import { products } from "@/data/products";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scroll Transforms
  // Bottles & Landing BG fade out as Whale fades in (Crossfade)
  const bottlesOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const bottlesScale = useTransform(scrollY, [0, 300], [1, 1.1]);
  const bottlesY = useTransform(scrollY, [0, 300], [0, -50]);

  // Whale Layer
  // Starts slightly zoomed in and scaled up, settles into place
  const whaleOpacity = useTransform(scrollY, [100, 300], [0, 1]);
  const whaleScale = useTransform(scrollY, [100, 600], [1.1, 1]);

  // Parallax Text
  const textY = useTransform(scrollY, [0, 300], [0, -150]);
  const subTextOpacity = useTransform(scrollY, [200, 400], [0, 1]);
  const subTextScale = useTransform(scrollY, [200, 500], [0.9, 1]);

  return (
    <section
      ref={containerRef}
      className="relative h-[200vh] w-full bg-black"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

        {/* Brand Text - Centered Top */}
        <div className="absolute top-[12%] md:top-[15%] z-30 flex items-center justify-center pointer-events-none w-full px-4">
          <motion.div
            style={{ y: textY, opacity: bottlesOpacity }}
            className="text-center"
          >
            <h1 className="font-display text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[12rem] leading-[0.8] tracking-tight text-white/90 drop-shadow-2xl">
              DAIM
            </h1>
            <p className="text-sm sm:text-xl md:text-3xl text-[#D4AF37] tracking-[0.3em] md:tracking-[0.5em] uppercase font-light mt-4">
              Majestic Essence
            </p>
          </motion.div>
        </div>

        {/* Layer 0: Initial Luxury Background (Fades Out) */}
        <motion.div
          className="absolute inset-0 z-15 w-full h-full"
          style={{ opacity: bottlesOpacity }}
        >
          <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dimmer */}
          <img
            src={luxuryLandingBg}
            alt="Luxury Texture"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Layer 1: Product Collection (Initial View) */}
        <motion.div
          className="absolute inset-0 z-20 flex items-end justify-center pb-20 md:pb-32"
          style={{ opacity: bottlesOpacity, scale: bottlesScale, y: bottlesY }}
        >
          {/* Premium Linear Layout with Reflections - Mobile Responsive Grid */}
          <div className="relative flex flex-wrap md:flex-nowrap items-end justify-center gap-x-3 gap-y-8 md:gap-4 lg:gap-6 px-4 w-full max-w-7xl">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative w-[21%] sm:w-24 lg:w-32 flex-shrink-0 flex flex-col items-center"
              >
                {/* The Bottle */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto drop-shadow-2xl rounded-sm object-cover hover:-translate-y-4 transition-transform duration-500 ease-out z-20"
                />

                {/* The Reflection */}
                <div className="absolute top-full left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none transform origin-top scale-y-[-1] z-10">
                  <img
                    src={product.image}
                    alt=""
                    className="w-full h-auto blur-[0.5px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Layer 2: Realistic Whale Background (The Reveal) */}
        <motion.div
          className="absolute inset-0 z-10 w-full h-full"
          style={{ opacity: whaleOpacity, scale: whaleScale }}
        >
          {/* Subtle Overlay for Text Contrast */}
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={realisticWhale}
            alt="Majestic Whale Background"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Revealed Text on Scroll */}
        <div className="relative z-40 pointer-events-none w-full h-full flex flex-col items-center justify-center">
          <motion.div
            className="text-center mt-32"
            style={{ opacity: subTextOpacity, scale: subTextScale }}
          >
            <h2 className="font-display text-5xl md:text-7xl lg:text-9xl text-white leading-tight drop-shadow-2xl">
              Nature's <br />
              <span className="italic text-[#40bfbf]">Masterpiece</span>
            </h2>
          </motion.div>
        </div>

        {/* Scroll Prompt */}
        <motion.div
          className="absolute bottom-10 z-40 text-white/50 flex flex-col items-center gap-2 pointer-events-none mix-blend-overlay"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ opacity: bottlesOpacity }}
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll to Discover</span>
          <ArrowDown size={20} />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
