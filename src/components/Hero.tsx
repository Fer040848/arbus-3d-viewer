
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-6 pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-50 via-gray-100 to-gray-200 z-[-2]" />
      
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-float" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-60 h-60 bg-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div 
          className="inline-block mb-4 px-4 py-1.5 rounded-full bg-gray-100 text-xs font-medium"
          variants={itemVariants}
        >
          Estudio de Diseño y Marketing
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          variants={itemVariants}
        >
          Transformamos tus <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">ideas</span> en realidad
        </motion.h1>
        
        <motion.p 
          className="text-md md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Especialistas en diseño 2D y 3D, motion graphics, renders fotorrealistas y estrategias de marketing. Creamos experiencias digitales memorables que elevan tu marca.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          variants={itemVariants}
        >
          <Button className="rounded-full px-8 py-6 text-sm" size="lg">
            Ver nuestro trabajo <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" className="rounded-full px-8 py-6 text-sm" size="lg">
            Cómo trabajamos
          </Button>
        </motion.div>
      </motion.div>

      <a 
        href="#interactive-model" 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-xs text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className="mb-2">Explora más</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}

export default Hero;
