import { useLanguage } from '../context/LanguageContext';
import { Menu, SunMoon } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <span className="text-xl font-bold text-gray-900">TARGET GROUP</span>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className="text-gray-500 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link to="/the-group" className="text-gray-500 hover:text-gray-900 transition-colors">
              The Group
            </Link>
            <Link to="/our-businesses" className="text-gray-500 hover:text-gray-900 transition-colors">
              Our Businesses
            </Link>
            <Link to="/ecosystem" className="text-gray-500 hover:text-gray-900 transition-colors">
              Ecosystem
            </Link>
            <Link to="/global-presence" className="text-gray-500 hover:text-gray-900 transition-colors">
              Global Presence
            </Link>
            <Link to="/contact" className="text-gray-500 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded hover:bg-gray-100 transition-colors"
              aria-label="Toggle language"
            >
              {language === 'en' ? 'FR' : 'EN'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded hover:bg-gray-100 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
            Home
          </Link>
          <Link to="/the-group" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
            The Group
          </Link>
          <Link to="/our-businesses" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
            Our Businesses
          </Link>
          <Link to="/ecosystem" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
            Ecosystem
          </Link>
          <Link to="/global-presence" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
            Global Presence
          </Link>
          <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;