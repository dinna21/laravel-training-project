import { Link } from '@inertiajs/react';
import AppearanceToggleDropdown from '@/components/appearance-dropdown';

interface HeaderProps {
  brandName?: string;
  transparent?: boolean;
}

export default function Header({ brandName = "Agency Inc.", transparent = false }: HeaderProps) {
  return (
    <header className={`border-b border-gray-200 dark:border-gray-800 ${transparent ? 'bg-transparent' : 'bg-white dark:bg-gray-900'} sticky top-0 z-50 backdrop-blur-sm`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 ">
      <div className="flex-shrink-0">
        <Link href="/" className="text-xl font-semibold text-gray-900 dark:text-gray-100 ml-0">
          {brandName}
        </Link>
      </div>

          <nav className="flex items-center gap-12">
            <ul className="hidden md:flex gap-6 text-md">
              <li>
                <Link href="/services" className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/company" className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 transition-colors">
                  Company
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
            <AppearanceToggleDropdown />
          </nav>
        </div>
      </div>
    </header>
  );
}