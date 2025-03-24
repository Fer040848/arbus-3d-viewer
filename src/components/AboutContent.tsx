
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Clock, Heart, Lightbulb, Target, Users } from 'lucide-react';

// Team member data
const teamMembers = [
  {
    name: 'Maria Rodriguez',
    role: 'Directora Creativa',
    bio: 'Con más de 15 años de experiencia en diseño y dirección de arte, María lidera nuestro equipo creativo con visión y pasión.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
  },
  {
    name: 'Carlos Mendez',
    role: 'Director de Estrategia',
    bio: 'Especialista en marketing digital y estrategia de marca con un enfoque en resultados medibles y crecimiento sostenible.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
  },
  {
    name: 'Ana Vergara',
    role: 'Diseñadora 3D Senior',
    bio: 'Experta en modelado 3D y animación con un portafolio impresionante de proyectos para marcas internacionales.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956'
  },
  {
    name: 'Javier Torres',
    role: 'Director de Tecnología',
    bio: 'Desarrollador full-stack con pasión por las tecnologías emergentes y experiencia en implementaciones complejas.',
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79'
  }
];

// Core values
const coreValues = [
  {
    icon: <Heart className="h-6 w-6" />,
    title: 'Pasión',
    description: 'Amamos lo que hacemos y eso se refleja en cada proyecto que realizamos.'
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: 'Innovación',
    description: 'Buscamos constantemente nuevas formas de abordar los desafíos creativos.'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Colaboración',
    description: 'Trabajamos en estrecha colaboración con nuestros clientes para lograr resultados excepcionales.'
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: 'Excelencia',
    description: 'Nos esforzamos por la excelencia en cada detalle de nuestro trabajo.'
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Puntualidad',
    description: 'Respetamos los plazos y entregamos proyectos a tiempo, sin comprometer la calidad.'
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: 'Calidad',
    description: 'La calidad es nuestra prioridad en cada proyecto que emprendemos.'
  }
];

// Company milestones
const milestones = [
  {
    year: '2015',
    title: 'Fundación',
    description: 'Arbus Studio nace como un pequeño estudio de diseño con grandes aspiraciones.'
  },
  {
    year: '2017',
    title: 'Expansión',
    description: 'Incorporamos servicios de marketing digital y estrategia de contenidos.'
  },
  {
    year: '2019',
    title: 'Nuevas Tecnologías',
    description: 'Comenzamos a ofrecer modelado 3D y realidad aumentada en nuestros servicios.'
  },
  {
    year: '2021',
    title: 'Reconocimiento Internacional',
    description: 'Ganamos nuestro primer premio internacional por diseño innovador.'
  },
  {
    year: '2023',
    title: 'Actualidad',
    description: 'Consolidamos nuestra posición como líder en soluciones creativas integrales.'
  }
];

const AboutContent = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div ref={sectionRef} className="container mx-auto px-4 py-16 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nosotros</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Somos un equipo apasionado de creativos, estrategas y tecnólogos comprometidos con la excelencia y la innovación.
        </p>
      </motion.div>

      <Tabs defaultValue="historia" className="mb-16">
        <TabsList className="w-full flex justify-center mb-8">
          <TabsTrigger value="historia">Nuestra Historia</TabsTrigger>
          <TabsTrigger value="valores">Valores</TabsTrigger>
          <TabsTrigger value="equipo">Equipo</TabsTrigger>
        </TabsList>
        
        <TabsContent value="historia" className="px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nuestra Trayectoria</h2>
              <p className="text-muted-foreground mb-6">
                Desde nuestra fundación en 2015, Arbus Studio ha evolucionado de un pequeño estudio de diseño a una agencia creativa integral, manteniendo siempre nuestra pasión por la excelencia y la innovación.
              </p>
              <p className="text-muted-foreground mb-6">
                Hemos trabajado con clientes de diversos sectores, desde startups emergentes hasta corporaciones internacionales, ayudándoles a alcanzar sus objetivos a través de soluciones creativas efectivas.
              </p>
              <p className="text-muted-foreground">
                Hoy, nuestro equipo multidisciplinario combina experiencia en diseño, tecnología y estrategia para ofrecer resultados excepcionales en cada proyecto.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute left-20 bottom-8 w-24 h-24 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978" 
                alt="Equipo de Arbus Studio" 
                className="rounded-lg shadow-lg relative z-10 w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Nuestra Evolución</h3>
            <div className="relative border-l-2 border-gray-200 ml-4 md:ml-[50%] md:transform md:-translate-x-1">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={milestone.year}
                  className="mb-10 ml-6 md:ml-0 md:flex md:items-center"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="absolute -left-3 md:static">
                    <div className="flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full ring-8 ring-white md:w-8 md:h-8">
                      <span className="text-xs text-white md:text-sm">{milestone.year.slice(-2)}</span>
                    </div>
                  </div>
                  <div className={`p-4 bg-white rounded-lg shadow-md md:max-w-md ${index % 2 === 0 ? 'md:mr-auto md:-translate-x-[calc(100%+2rem)]' : 'md:ml-8'}`}>
                    <div className="flex items-center mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{milestone.year}</h4>
                      <span className="mx-2 text-gray-500">•</span>
                      <h4 className="text-lg font-medium text-blue-600">{milestone.title}</h4>
                    </div>
                    <p className="text-gray-700">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="valores">
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {coreValues.map((value, index) => (
              <motion.div 
                key={value.title}
                variants={item}
                className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600 mr-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                </div>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="bg-muted/30 p-8 rounded-2xl mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
                <p className="text-muted-foreground">
                  Crear soluciones creativas que conecten marcas con personas de manera auténtica y significativa, impulsando el crecimiento y la transformación a través de experiencias memorables.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
                <p className="text-muted-foreground">
                  Ser reconocidos globalmente como un referente en innovación creativa, estableciendo nuevos estándares de excelencia en diseño, marketing y tecnología aplicada.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="equipo">
          <h2 className="text-3xl font-bold mb-8 text-center">Nuestro Equipo</h2>
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.name}
                variants={item}
                className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center transform transition duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-4">Únete a Nuestro Equipo</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Siempre estamos en busca de talento creativo y apasionado para unirse a nuestro equipo. 
              Si te apasiona el diseño, la tecnología o el marketing, nos encantaría conocerte.
            </p>
            <motion.a 
              href="mailto:careers@arbusstudio.com"
              className="inline-block px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explora Nuestras Vacantes
            </motion.a>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AboutContent;
