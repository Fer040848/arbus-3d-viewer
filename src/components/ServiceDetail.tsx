
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Layers, PenTool, Box, Camera, Globe, Film, Rocket, TrendingUp, Layout, Palette, Code, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ThreeJsCanvas from './ThreeJsCanvas';

const mainServices = [
  {
    icon: <PenTool size={24} />,
    title: "Diseño 2D",
    description: "Diseños funcionales y atractivos para todas las plataformas digitales, incluyendo sitios web, aplicaciones y materiales de marketing.",
    details: [
      "Diseño de interfaces de usuario (UI)",
      "Experiencia de usuario (UX)",
      "Identidad visual de marca",
      "Materiales impresos y digitales",
      "Ilustraciones personalizadas"
    ]
  },
  {
    icon: <Box size={24} />,
    title: "Modelado 3D",
    description: "Modelos y assets 3D de alta calidad para visualización de productos, animaciones y experiencias interactivas.",
    details: [
      "Modelado orgánico e inorgánico",
      "Texturizado y materiales PBR",
      "Optimización para web y realtime",
      "Esculturas digitales",
      "Assets para videojuegos y AR/VR"
    ]
  },
  {
    icon: <Camera size={24} />,
    title: "Renders",
    description: "Renders fotorrealistas que muestran tus productos y espacios con un detalle visual impresionante.",
    details: [
      "Renders arquitectónicos",
      "Visualización de productos",
      "Escenas de interiores y exteriores",
      "Iluminación y ambientación realista",
      "Post-producción profesional"
    ]
  }
];

const additionalServices = [
  {
    icon: <TrendingUp size={24} />,
    title: "Marketing",
    description: "Soluciones estratégicas de marketing para ayudar a tu marca a destacar y conectar con tu público objetivo."
  },
  {
    icon: <Film size={24} />,
    title: "Motion Graphics",
    description: "Animaciones y gráficos en movimiento atractivos que dan vida a la historia de tu marca."
  },
  {
    icon: <Globe size={24} />,
    title: "Desarrollo Web",
    description: "Sitios web y aplicaciones web personalizadas construidas con las últimas tecnologías para un rendimiento óptimo."
  },
  {
    icon: <Rocket size={24} />,
    title: "Branding",
    description: "Desarrollo de identidad de marca que comunica los valores y la personalidad de tu negocio."
  },
  {
    icon: <Layout size={24} />,
    title: "Diseño UI/UX",
    description: "Interfaces intuitivas y experiencias de usuario enfocadas en la usabilidad y la estética."
  },
  {
    icon: <Palette size={24} />,
    title: "Ilustración",
    description: "Ilustraciones personalizadas que añaden un toque único y distintivo a tu marca."
  }
];

export function ServiceDetail() {
  const [mainRef, mainInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [additionalRef, additionalInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [processRef, processInView] = useInView({
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

  const process = [
    {
      number: "01",
      title: "Consulta Inicial",
      description: "Entendemos tus necesidades y objetivos para crear una estrategia personalizada."
    },
    {
      number: "02",
      title: "Propuesta y Planificación",
      description: "Desarrollamos un plan detallado con alcance, tiempos y entregables."
    },
    {
      number: "03",
      title: "Creación y Desarrollo",
      description: "Nuestro equipo trabaja en la implementación con revisiones periódicas."
    },
    {
      number: "04",
      title: "Refinamiento",
      description: "Iteramos sobre el trabajo basándonos en tus comentarios para perfeccionarlo."
    },
    {
      number: "05",
      title: "Entrega Final",
      description: "Entregamos el proyecto finalizado con todos los archivos y recursos necesarios."
    }
  ];

  return (
    <div className="relative">
      {/* Main Services Section */}
      <section className="py-20 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <ThreeJsCanvas />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            ref={mainRef}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={mainInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-xs font-medium">
              Servicios Principales
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluciones Completas para tu Negocio</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos servicios integrales de diseño, modelado 3D y desarrollo para crear experiencias visuales impactantes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={mainInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="rounded-2xl overflow-hidden bg-gradient-to-br from-white to-gray-100 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="p-8">
                  <div className="mb-6 p-4 bg-blue-50 inline-block rounded-xl text-blue-600">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="space-y-3">
                    {service.details.map((detail, i) => (
                      <div key={i} className="flex items-start">
                        <div className="text-blue-500 mr-2">•</div>
                        <p className="text-sm text-gray-600">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mainInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className="text-center"
          >
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/contact">Solicitar Cotización</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gray-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            ref={processRef}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-xs font-medium">
              Nuestro Proceso
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cómo Trabajamos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un enfoque estructurado que garantiza resultados excepcionales para cada proyecto
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-8 relative">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold shadow-lg">
                    {step.number.split('').pop()}
                  </div>
                  
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            ref={additionalRef}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={additionalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-xs font-medium">
              Servicios Adicionales
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Más Soluciones para tu Proyecto</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complementa tu estrategia con estos servicios especializados
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={additionalInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-2xl glass-card hover:shadow-lg transition-all duration-300 group"
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

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para iniciar tu proyecto?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Contacta con nosotros hoy mismo y hagamos realidad tu visión
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact">Contáctanos</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default ServiceDetail;
