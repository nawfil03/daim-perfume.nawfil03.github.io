import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import whaleJump from "@/assets/whale_jump.png";
import perfumeHero from "@/assets/perfume_hero_branded.png";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scroll Transforms
  // Bottle fades out as Whale fades in (Crossfade)
  const bottleOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const bottleScale = useTransform(scrollY, [0, 300], [1, 1.15]);
  const bottleY = useTransform(scrollY, [0, 300], [0, -20]);

  // Whale Layer
  // Starts slightly zoomed in and scaled up, settles into place
  const whaleOpacity = useTransform(scrollY, [100, 300], [0, 1]);
  const whaleScale = useTransform(scrollY, [100, 600], [1.1, 1]);

  // Parallax Text
  const textY = useTransform(scrollY, [0, 300], [0, -100]);
  const subTextOpacity = useTransform(scrollY, [200, 400], [0, 1]);
  const subTextScale = useTransform(scrollY, [200, 500], [0.9, 1]);

  return (
    <section
      ref={containerRef}
      className="relative h-[200vh] w-full bg-[#0a192f]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

        {/* Layer 1: Perfume Bottle (Initial View) */}
        {/* We keep this absolute and full size to ensure it aligns perfectly with the next layer */}
        <motion.div
          className="absolute inset-0 z-20 flex items-center justify-center"
          style={{ opacity: bottleOpacity, scale: bottleScale, y: bottleY }}
        >
          <img
            src={perfumeHero}
            alt="DAIM Luxury Bottle"
            className="w-full h-full object-cover object-center drop-shadow-2xl"
          />
        </motion.div>

        {/* Layer 2: Whale Jumping (The Reveal) */}
        {/* Positioned absolutely to cover the entire screen, preventing 'blue gaps' */}
        <motion.div
          className="absolute inset-0 z-10 w-full h-full"
          style={{ opacity: whaleOpacity, scale: whaleScale }}
        >
          {/* Dark Gradient Overlay to ensure text legibility */}
          <div className="absolute inset-0 bg-black/20 z-10 mix-blend-multiply" />
          <img
            src={whaleJump}
            alt="Whale Breach"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Brand Text - Visible Initially */}
        <div className="relative z-30 text-center mix-blend-screen pointer-events-none">
          <motion.div style={{ y: textY, opacity: bottleOpacity }}>
            <h1 className="font-display text-[6rem] md:text-[8rem] lg:text-[12rem] leading-[0.8] tracking-tight text-white/90 drop-shadow-xl">
              DAIM
            </h1>
            <p className="text-xl md:text-3xl text-blue-200 tracking-[0.5em] uppercase font-light mt-4">
              Oceanic Essence
            </p>
          </motion.div>

          {/* Revealed Text on Scroll - Visible with Whale */}
          <motion.div
            className="absolute top-0 left-0 right-0 flex items-center justify-center h-full"
            style={{ opacity: subTextOpacity, scale: subTextScale }}
          >
            <h2 className="font-display text-5xl md:text-7xl lg:text-9xl text-white leading-tight drop-shadow-2xl text-center">
              Unleash the <br />
              <span className="italic text-[#40bfbf]">Untamed Spirit</span>
            </h2>
          </motion.div>
        </div>

        {/* Scroll Prompt */}
        <motion.div
          className="absolute bottom-10 z-30 text-white/50 flex flex-col items-center gap-2 pointer-events-none mix-blend-overlay"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ opacity: bottleOpacity }}
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll to Dive</span>
          <ArrowDown size={20} />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
