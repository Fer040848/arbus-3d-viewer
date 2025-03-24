
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Film, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const portfolioProjects = [
  {
    id: 'proyecto-1',
    title: 'Arbus Studio: Presentación',
    description: 'Video de presentación de nuestros servicios y filosofía.',
    videoThumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    videoUrl: 'https://youtube.com/embed/CX5UQrL7VW0',
    categories: ['Marketing', 'Branding'],
    client: 'Arbus Studio',
  },
  {
    id: 'proyecto-2',
    title: 'Campaña Publicitaria',
    description: 'Estrategia digital completa para lanzamiento de producto.',
    videoThumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    videoUrl: 'https://youtube.com/embed/CX5UQrL7VW0',
    categories: ['Publicidad', 'Redes Sociales'],
    client: 'Cliente Confidencial',
  },
  {
    id: 'proyecto-3',
    title: 'Diseño de Marca',
    description: 'Renovación de identidad visual para empresa establecida.',
    videoThumbnail: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    videoUrl: 'https://youtube.com/embed/CX5UQrL7VW0',
    categories: ['Branding', 'Diseño Gráfico'],
    client: 'MarcaPro',
  },
  {
    id: 'proyecto-4',
    title: 'Estrategia de Contenidos',
    description: 'Plan integral de contenidos para redes sociales y blog.',
    videoThumbnail: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    videoUrl: 'https://youtube.com/embed/CX5UQrL7VW0',
    categories: ['Contenido', 'Estrategia'],
    client: 'Empresa Digital',
  }
];

const Portfolio = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="portfolio" className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Nuestro Portafolio</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubre nuestros proyectos más recientes y cómo ayudamos a nuestros clientes a alcanzar sus objetivos de marketing y diseño.
          </p>
        </motion.div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {portfolioProjects.map((project, index) => (
              <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <Card className="glass-card overflow-hidden border-0">
                    <CardContent className="p-0">
                      <div className="relative group">
                        <img
                          src={project.videoThumbnail}
                          alt={project.title}
                          className="w-full aspect-video object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Play className="text-white w-16 h-16" />
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.categories.map((category) => (
                            <span key={category} className="text-xs px-2 py-1 bg-muted rounded-full">
                              {category}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <Link to={`/portfolio/${project.id}`} className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800">
                          Ver proyecto <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex justify-center mt-8 gap-4">
            <CarouselPrevious className="relative inset-0 translate-y-0" />
            <CarouselNext className="relative inset-0 translate-y-0" />
          </div>
        </Carousel>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button asChild className="rounded-full px-8">
            <Link to="/portfolio">Ver todos los proyectos</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
