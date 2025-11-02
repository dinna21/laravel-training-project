import { Link } from '@inertiajs/react';
import AppearanceToggleDropdown from '@/components/appearance-dropdown';
import { useState, useEffect } from 'react';
import {Menu, X} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

interface HeaderProps {
  brandName?: string;
  transparent?: boolean;
}

export default function Header({ brandName = "Agency Inc.", transparent = false }: HeaderProps) {

    const [isOpen,setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
      // Fade in animation on mount
      setIsVisible(true)

      // Scroll detection for sticky header effect
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20)
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navigationLinks = [
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About Us" },
    { href: "/company", label: "Company" },
  ];

  const closeMobileMenu = () => setIsOpen(false);
  return (
    <header 
      className={`border-b border-gray-200 dark:border-gray-800 ${transparent && !isScrolled ? 'bg-transparent' : 'bg-white/95 dark:bg-gray-900/95'} sticky top-0 z-50 backdrop-blur-sm transition-all duration-300 ${isScrolled ? 'py-0 shadow-md' : ''} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
      style={{ 
        transition: 'all 0.3s ease-in-out, opacity 0.6s ease-out, transform 0.6s ease-out'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'}`}>
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-xl font-semibold text-gray-900 dark:text-gray-100 hover:text-cyan-500 transition-colors duration-300"
              onClick={closeMobileMenu}
            >
              {brandName}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            <ul className="flex gap-6 text-md">
              {navigationLinks.map((link, index) => (
                <li key={index} className="relative group">
                  <Link 
                    href={link.href} 
                    className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 transition-colors duration-300 font-medium relative inline-block"
                  >
                    {link.label}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
            <AppearanceToggleDropdown />
          </nav>

          {/* Mobile Menu & Theme Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <AppearanceToggleDropdown />
            
            {/* Mobile Menu using shadcn/ui Sheet */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-9 w-9 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                  aria-label="Toggle mobile menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    {brandName}
                  </SheetTitle>
                </SheetHeader>
                
                <div className="mt-8">
                  <nav className="flex flex-col space-y-4">
                    {navigationLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-cyan-500 transition-all duration-300 py-3 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transform hover:translate-x-1"
                        onClick={closeMobileMenu}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}