
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <span className="mr-1 text-2xl">◆</span>
              <span className="text-xl font-bold">Arbus Studio</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm">
              Creando soluciones excepcionales de diseño y marketing para marcas que quieren destacar.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/arbusstudio" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com/arbusstudio" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://www.instagram.com/arbusstudio.agency/" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/arbusstudio/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider">Servicios</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Diseño 2D</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Modelado 3D</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Renders</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Marketing</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Motion Graphics</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider">Empresa</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">Sobre Nosotros</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors text-sm">Portfolio</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">Carreras</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contacto</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Política de Privacidad</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider">Suscríbete</h3>
            <p className="text-gray-400 mb-4 text-sm">Mantente actualizado con nuestros últimos proyectos y novedades.</p>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="rounded-l-md rounded-r-none bg-gray-800 border-gray-700 focus:ring-0 focus:border-blue-500 text-sm" 
              />
              <Button className="rounded-l-none" size="sm">
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400 text-xs">
          <p>&copy; {year} Arbus Studio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
