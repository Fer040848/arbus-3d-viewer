
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, Github, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

// Portfolio project data
const projects = [
  {
    id: 'proyecto-1',
    title: 'Diseño 3D Interactivo',
    category: 'design',
    tags: ['3D', 'WebGL', 'Interactivo'],
    description: 'Creación de visualizaciones 3D interactivas para productos de alta gama.',
    image: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24',
    client: 'Luxury Brand Co.'
  },
  {
    id: 'proyecto-2',
    title: 'Campaña Digital 360°',
    category: 'marketing',
    tags: ['Estrategia', 'Social Media', 'Publicidad'],
    description: 'Estrategia de marketing digital completa con presencia en todas las plataformas.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    client: 'Retail Enterprise'
  },
  {
    id: 'proyecto-3',
    title: 'Animación de Producto',
    category: 'animation',
    tags: ['Motion Graphics', 'After Effects', 'Branding'],
    description: 'Creación de secuencias de animación para presentación de nuevo producto.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f',
    client: 'Tech Innovators Inc.'
  },
  {
    id: 'proyecto-4',
    title: 'Diseño Web E-commerce',
    category: 'web',
    tags: ['UI/UX', 'E-commerce', 'Responsive'],
    description: 'Diseño y desarrollo de plataforma e-commerce con enfoque en UX.',
    image: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58',
    client: 'Fashion Retailer'
  },
  {
    id: 'proyecto-5',
    title: 'Branding Corporativo',
    category: 'design',
    tags: ['Identidad', 'Logo', 'Guía de Estilo'],
    description: 'Desarrollo completo de identidad visual para empresa de tecnología.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
    client: 'SoftTech Solutions'
  },
  {
    id: 'proyecto-6',
    title: 'Video Corporativo',
    category: 'animation',
    tags: ['Video', 'Producción', 'Storytelling'],
    description: 'Producción audiovisual completa para presentación corporativa.',
    image: 'https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0',
    client: 'Corporate Services Ltd.'
  },
];

// Category definitions for tabs
const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'design', label: 'Diseño' },
  { id: 'web', label: 'Web' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'animation', label: 'Animación' }
];

const PortfolioGallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-16 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestro Portfolio</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Explorá nuestra selección de proyectos destacados, donde la creatividad y la estrategia se unen para crear experiencias excepcionales.
        </p>
      </motion.div>

      <Tabs defaultValue="all" className="mb-12">
        <TabsList className="flex justify-center flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <TabsTrigger 
              key={category.id}
              value={category.id}
              onClick={() => setActiveCategory(category.id)}
              className="px-4 py-2 rounded-full"
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
        
        <TabsContent value={activeCategory} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/portfolio/${project.id}`} className="block">
                  <div className="relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-6 text-white">
                          <div className="flex gap-2 mb-2">
                            {project.tags.map(tag => (
                              <span key={tag} className="text-xs px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Cliente: {project.client}</span>
                        <Button variant="ghost" size="sm" className="text-primary group-hover:translate-x-1 transition-transform">
                          Ver Proyecto <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="text-center mt-16 bg-muted/30 p-10 rounded-2xl shadow-sm"
      >
        <h2 className="text-2xl font-bold mb-4">¿Tienes un proyecto en mente?</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Estamos listos para ayudarte a dar vida a tus ideas con soluciones creativas y estratégicas.
        </p>
        <Button asChild size="lg" className="rounded-full px-8">
          <Link to="/contact">Contactanos</Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default PortfolioGallery;
