import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Courses', href: '#courses' },
    { name: 'Features', href: '#features' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">N</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Nexard</h1>
              <p className="text-xs text-orange-500 font-semibold">DIGITAL SKILLS INSTITUTE</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:0726754566"
              className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">0726 754 566</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-4 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:0726754566"
              className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg mt-4 mx-4 transition-all duration-300 justify-center"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">0726 754 566</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
