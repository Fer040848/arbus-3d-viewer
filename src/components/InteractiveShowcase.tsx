
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ModelViewer from './ModelViewer';
import { motion } from 'framer-motion';
import { MousePointer, Move, SearchIcon } from 'lucide-react';

export function InteractiveShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Create intersection observer to load content when in view
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="interactive-model" className="py-24 px-6 relative bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-gray-100 text-xs font-medium">
            Experiencia Interactiva
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explora Nuestras Capacidades 3D</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interactúa con nuestros modelos 3D para ver el detalle y la calidad que aportamos a cada proyecto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <ModelViewer showInstructions={false} height="400px" />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Visualización 3D Interactiva</h3>
            <p className="text-muted-foreground mb-6">
              En Arbus Studio, nos especializamos en crear modelos 3D interactivos que permiten a tus clientes interactuar con tus productos de manera significativa. Nuestros modelos son:
            </p>
            
            <div className="space-y-4">
              <div className="fade-in-section flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                  <MousePointer size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Totalmente Interactivos</h4>
                  <p className="text-sm text-muted-foreground">Rota, acerca y examina cada detalle con controles intuitivos.</p>
                </div>
              </div>
              
              <div className="fade-in-section flex items-start gap-4">
                <div className="p-3 bg-purple-50 rounded-xl text-purple-600">
                  <SearchIcon size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Alta Resolución</h4>
                  <p className="text-sm text-muted-foreground">Texturas y detalles fotorrealistas que muestran tus productos con precisión.</p>
                </div>
              </div>
              
              <div className="fade-in-section flex items-start gap-4">
                <div className="p-3 bg-pink-50 rounded-xl text-pink-600">
                  <Move size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Multiplataforma</h4>
                  <p className="text-sm text-muted-foreground">Funcionan perfectamente en dispositivos de escritorio, móviles y tablets.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InteractiveShowcase;
