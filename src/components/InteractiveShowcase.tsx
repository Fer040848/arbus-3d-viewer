
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
            Interactive Experience
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our 3D Capabilities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interact with our 3D models to see the detail and quality we bring to every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <ModelViewer showInstructions={false} height="400px" />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Interactive 3D Visualization</h3>
            <p className="text-muted-foreground mb-6">
              At Arbus Studio, we specialize in creating interactive 3D models that allow your customers to engage with your products in a meaningful way. Our models are:
            </p>
            
            <div className="space-y-4">
              <div className="fade-in-section flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                  <MousePointer size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Fully Interactive</h4>
                  <p className="text-sm text-muted-foreground">Rotate, zoom, and examine every detail with intuitive controls.</p>
                </div>
              </div>
              
              <div className="fade-in-section flex items-start gap-4">
                <div className="p-3 bg-purple-50 rounded-xl text-purple-600">
                  <SearchIcon size={20} />
                </div>
                <div>
                  <h4 className="font-medium">High-Resolution</h4>
                  <p className="text-sm text-muted-foreground">Photorealistic textures and details that showcase your products accurately.</p>
                </div>
              </div>
              
              <div className="fade-in-section flex items-start gap-4">
                <div className="p-3 bg-pink-50 rounded-xl text-pink-600">
                  <Move size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Cross-Platform</h4>
                  <p className="text-sm text-muted-foreground">Works seamlessly across desktop, mobile, and tablet devices.</p>
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
