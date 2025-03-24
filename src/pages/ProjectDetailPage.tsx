
import React from 'react';
import Navbar from '@/components/Navbar';
import ProjectDetail from '@/components/ProjectDetail';
import Footer from '@/components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

const ProjectDetailPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <ProjectDetail />
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
