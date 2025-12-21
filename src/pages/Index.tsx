import { Helmet } from "react-helmet-async";
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

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Collection />
          <Story />
          <Craft />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
