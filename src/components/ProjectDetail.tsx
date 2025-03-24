
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, Film, Calendar, User, Tag, Play } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Esta información se podría obtener de una base de datos o API en una implementación real
const projectsData = {
  'proyecto-1': {
    title: 'Arbus Studio: Presentación',
    description: 'Video de presentación de nuestros servicios y filosofía. Mostramos nuestra visión creativa y cómo enfocamos cada proyecto para obtener resultados excepcionales.',
    longDescription: 'En este proyecto de presentación, queríamos mostrar la esencia de Arbus Studio y nuestra forma única de abordar los proyectos de marketing y diseño. Cada elemento visual fue cuidadosamente seleccionado para representar nuestra filosofía creativa y nuestra pasión por el trabajo bien hecho.\n\nEl video muestra nuestra metodología de trabajo, desde la conceptualización inicial hasta la entrega final, pasando por todas las etapas intermedias que hacen que nuestros proyectos sean únicos y efectivos.',
    videoUrl: 'https://youtube.com/embed/CX5UQrL7VW0',
    coverImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    date: 'Enero 2023',
    client: 'Arbus Studio',
    categories: ['Marketing', 'Branding', 'Video'],
    results: [
      'Incremento del 40% en consultas de potenciales clientes',
      'Mayor claridad en la comunicación de servicios',
      'Mejora en la percepción de marca'
    ]
  },
  'proyecto-2': {
    title: 'Campaña Publicitaria',
    description: 'Estrategia digital completa para lanzamiento de producto con alcance internacional y enfoque en conversión.',
    longDescription: 'Para este cliente desarrollamos una estrategia publicitaria integral que abarcó múltiples canales digitales. El objetivo principal era posicionar su nuevo producto en el mercado internacional, con un enfoque específico en la generación de conversiones.\n\nRealizamos un análisis exhaustivo del mercado y la competencia, lo que nos permitió identificar oportunidades clave y definir mensajes que resonarían con el público objetivo. La campaña incluyó publicidad en redes sociales, Google Ads, contenido para blog y email marketing.',
    videoUrl: 'https://youtube.com/embed/CX5UQrL7VW0',
    coverImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    date: 'Marzo 2023',
    client: 'Cliente Confidencial',
    categories: ['Publicidad', 'Redes Sociales', 'Estrategia Digital'],
    results: [
      'ROI de 320% en los primeros 3 meses',
      'Aumento del 65% en reconocimiento de marca',
      '12,000 nuevos leads cualificados'
    ]
  },
  'proyecto-3': {
    title: 'Diseño de Marca',
    description: 'Renovación de identidad visual para empresa establecida que buscaba modernizar su imagen sin perder reconocimiento.',
    longDescription: 'Nuestro cliente, una empresa con más de 15 años en el mercado, necesitaba una renovación de su identidad visual que reflejara su evolución y posicionamiento actual, sin perder el reconocimiento de marca que habían construido a lo largo de los años.\n\nDesarrollamos un proceso de rediseño colaborativo, involucrando a stakeholders clave en diferentes etapas. Comenzamos con una auditoría de marca exhaustiva, seguida de workshops creativos y múltiples iteraciones de diseño hasta llegar a una solución que satisfizo todos los objetivos.',
    videoUrl: 'https://youtube.com/embed/CX5UQrL7VW0',
    coverImage: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    date: 'Mayo 2023',
    client: 'MarcaPro',
    categories: ['Branding', 'Diseño Gráfico', 'Identidad Corporativa'],
    results: [
      'Retención del 95% de reconocimiento de marca',
      'Percepción de marca 40% más moderna',
      'Implementación exitosa en todos los touchpoints'
    ]
  },
  'proyecto-4': {
    title: 'Estrategia de Contenidos',
    description: 'Plan integral de contenidos para redes sociales y blog con enfoque en posicionamiento como líderes de industria.',
    longDescription: 'Desarrollamos una estrategia de contenidos integral para una empresa digital que buscaba posicionarse como líder de pensamiento en su industria. El plan abarcó múltiples plataformas, incluyendo blog corporativo, LinkedIn, Instagram y Twitter.\n\nRealizamos un análisis profundo de su audiencia y competencia, definimos pilares de contenido estratégicos y desarrollamos un calendario editorial para 6 meses, incluyendo temas, formatos y canales de distribución. Además, establecimos KPIs claros para medir el éxito de la estrategia.',
    videoUrl: 'https://youtube.com/embed/CX5UQrL7VW0',
    coverImage: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    date: 'Julio 2023',
    client: 'Empresa Digital',
    categories: ['Contenido', 'Estrategia', 'Redes Sociales'],
    results: [
      'Incremento del 85% en tráfico orgánico',
      '35% más de engagement en redes sociales',
      'Aumento del 25% en tiempo de permanencia en sitio web'
    ]
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const project = projectId && projectsData[projectId] 
    ? projectsData[projectId] 
    : {
        title: 'Proyecto no encontrado',
        description: 'Lo sentimos, el proyecto que buscas no está disponible.',
        longDescription: '',
        videoUrl: '',
        coverImage: '',
        date: '',
        client: '',
        categories: [],
        results: []
      };

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="min-h-screen pt-20 pb-24 px-6 md:px-12 lg:px-24" ref={sectionRef}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button variant="outline" asChild className="mb-8 inline-flex gap-2">
            <Link to="/#portfolio">
              <ArrowLeft size={16} />
              Volver al portafolio
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">{project.description}</p>

          <div className="mb-16 relative overflow-hidden rounded-xl glass-card">
            {!isVideoPlaying ? (
              <div className="relative group">
                <img 
                  src={project.coverImage} 
                  alt={project.title} 
                  className="w-full aspect-video object-cover"
                />
                <div 
                  className="absolute inset-0 bg-black/50 flex items-center justify-center cursor-pointer transition-opacity"
                  onClick={handlePlayVideo}
                >
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="aspect-video">
                <iframe 
                  src={`${project.videoUrl}?autoplay=1`}
                  title={project.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="col-span-2">
              <h2 className="text-2xl font-bold mb-4">Sobre el proyecto</h2>
              <div className="space-y-4 text-muted-foreground">
                {project.longDescription.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Detalles</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <span className="block text-sm text-muted-foreground">Fecha</span>
                    <span className="font-medium">{project.date}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <User className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <span className="block text-sm text-muted-foreground">Cliente</span>
                    <span className="font-medium">{project.client}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Tag className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <span className="block text-sm text-muted-foreground">Categorías</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.categories.map(category => (
                        <span key={category} className="text-xs px-2 py-1 bg-muted rounded-full">
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Film className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <span className="block text-sm text-muted-foreground">Tipo</span>
                    <span className="font-medium">Proyecto Audiovisual</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {project.results && project.results.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Resultados</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="glass-card p-6 rounded-xl"
                  >
                    <p className="font-medium">{result}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <Button asChild className="rounded-full px-8">
              <Link to="/#contact">Hablemos de tu proyecto</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
