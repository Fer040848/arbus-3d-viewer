
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6',
        isScrolled 
          ? 'glass-panel'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          onClick={closeMenu}
          className="text-xl font-bold tracking-tight flex items-center"
        >
          <span className="mr-1 text-2xl">◆</span>
          <span className={cn(
            'transition-opacity duration-300',
            isScrolled ? 'opacity-100' : 'opacity-90'
          )}>
            Arbus Studio
          </span>
        </Link>

        {!isMobile ? (
          <nav className="flex space-x-8">
            <NavLinks />
          </nav>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="relative z-50"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        )}
      </div>

      {/* Mobile menu overlay */}
      {isMobile && (
        <div
          className={cn(
            'fixed inset-0 glass-panel z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-300',
            isMenuOpen 
              ? 'opacity-100 pointer-events-auto' 
              : 'opacity-0 pointer-events-none'
          )}
        >
          <NavLinks isMobile onClick={closeMenu} />
        </div>
      )}
    </header>
  );
}

function NavLinks({ isMobile = false, onClick = () => {} }: { isMobile?: boolean; onClick?: () => void }) {
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.label}
          to={item.path}
          onClick={onClick}
          className={cn(
            'relative transition-all duration-300 hover:text-black',
            'after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300',
            'hover:after:w-full',
            isMobile ? 'text-2xl font-light py-2' : 'text-sm font-medium text-muted-foreground'
          )}
        >
          {item.label}
        </Link>
      ))}
      {!isMobile && (
        <Button className="ml-4 rounded-full px-6" size="sm">
          Get in Touch
        </Button>
      )}
    </>
  );
}

export default Navbar;
