
import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceDetail from '@/components/ServiceDetail';
import CursorEffect from '@/components/CursorEffect';
import { motion, useScroll, useSpring } from 'framer-motion';

const ServicesPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Set page title
    document.title = 'Servicios | Arbus Studio';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main className="relative z-10">
        {/* Hero Section for Services */}
        <div className="relative py-24 px-6 bg-gradient-to-b from-gray-900 to-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <CursorEffect />
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Nuestros Servicios</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
                Soluciones creativas y tecnológicas para impulsar tu marca al siguiente nivel
              </p>
            </motion.div>
          </div>
        </div>
        
        <ServiceDetail />
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
