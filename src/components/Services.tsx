
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { Layers, PenTool, Box, Camera, Globe, Film } from 'lucide-react';

const services = [
  {
    icon: <PenTool size={24} />,
    title: "2D Design",
    description: "Beautiful, functional designs for all digital platforms including websites, apps, and marketing materials."
  },
  {
    icon: <Box size={24} />,
    title: "3D Modeling",
    description: "High-quality 3D assets and models for product visualization, animations, and interactive experiences."
  },
  {
    icon: <Camera size={24} />,
    title: "Rendering",
    description: "Photorealistic renders that showcase your products and spaces in stunning visual detail."
  },
  {
    icon: <Layers size={24} />,
    title: "Marketing",
    description: "Strategic marketing solutions to help your brand stand out and connect with your target audience."
  },
  {
    icon: <Film size={24} />,
    title: "Motion Design",
    description: "Eye-catching animations and motion graphics that bring your brand's story to life."
  },
  {
    icon: <Globe size={24} />,
    title: "Web Development",
    description: "Custom websites and web applications built with the latest technologies for optimal performance."
  }
];

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-gray-100 text-xs font-medium">
            What We Do
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive design and marketing solutions to help your brand thrive in the digital landscape.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl glass-card hover:shadow-lg transition-all duration-300 group"
              variants={itemVariants}
            >
              <div className="mb-4 p-3 bg-blue-50 inline-block rounded-xl text-blue-600 group-hover:bg-blue-100 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;

