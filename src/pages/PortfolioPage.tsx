
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PortfolioGallery from '@/components/PortfolioGallery';
import ThreeJsCanvas from '@/components/ThreeJsCanvas';

const PortfolioPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <ThreeJsCanvas />
      </div>
      
      <Navbar />
      
      <main className="relative z-10 pt-24">
        <PortfolioGallery />
      </main>
      
      <Footer />
    </div>
  );
};

export default PortfolioPage;
