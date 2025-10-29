import { Link } from '@inertiajs/react';
import AppearanceToggleDropdown from '@/components/appearance-dropdown';
import { useState } from 'react';
import {Menu, X} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

interface HeaderProps {
  brandName?: string;
  transparent?: boolean;
}

export default function Header({ brandName = "Agency Inc.", transparent = false }: HeaderProps) {

    const [isOpen,setIsOpen] = useState(false)

    const navigationLinks = [
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About Us" },
    { href: "/company", label: "Company" },
  ];

  const closeMobileMenu = () => setIsOpen(false);
  return (
    <header className={`border-b border-gray-200 dark:border-gray-800 ${transparent ? 'bg-transparent' : 'bg-white dark:bg-gray-900'} sticky top-0 z-50 backdrop-blur-sm`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-xl font-semibold text-gray-900 dark:text-gray-100"
              onClick={closeMobileMenu}
            >
              {brandName}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            <ul className="flex gap-6 text-md">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 transition-colors font-medium"
                  >
                    {link.label}
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
                  className="h-9 w-9"
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
                        className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-cyan-500 transition-colors py-3 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
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