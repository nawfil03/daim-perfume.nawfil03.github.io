import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <motion.div
      className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 text-center px-6">
        <h1 className="font-display text-[120px] leading-none text-primary/20 select-none">404</h1>
        <h2 className="font-display text-4xl mb-6">Page Not Found</h2>
        <p className="font-body text-muted-foreground font-light mb-10 max-w-md mx-auto">
          The scent you are looking for seems to have evaporated. Let us guide you back to our collection.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase border border-primary/30 px-8 py-4 hover:bg-primary hover:text-black transition-all duration-500"
        >
          <ArrowLeft size={16} />
          <span>Return Home</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;
