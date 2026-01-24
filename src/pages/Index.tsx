import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collection from "@/components/Collection";
import Story from "@/components/Story";
import Craft from "@/components/Craft";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>DAIM | Wear Your Story - Luxury Perfumes</title>
        <meta 
          name="description" 
          content="Discover DAIM's exquisite collection of luxury fragrances. Each perfume tells a unique story, crafted with rare ingredients for those who dare to leave a lasting impression." 
        />
        <meta name="keywords" content="DAIM, luxury perfume, eau de parfum, fragrance, oud, rose, premium scent" />
      </Helmet>

      <motion.div 
        className="min-h-screen bg-background relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Global Noise Texture for Premium Feel */}
        <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.015]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
          }} 
        />
        
        <Navbar />
        <main>
          <Hero />
          <Collection />
          <Story />
          <Craft />
        </main>
        <Footer />
      </motion.div>
    </>
  );
};

export default Index;
