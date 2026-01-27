import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ResourcesPage from './components/ResourcesPage';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <main className="w-full min-h-screen relative overflow-x-hidden font-sans transition-colors duration-300">
      
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          
          {/* Brand */}
          <a href="#" className="font-handwriting font-bold text-3xl md:text-4xl text-teacher-dark dark:text-white hover:text-teacher-red transition-colors">
            R. M. C.
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#resources" className="text-gray-600 dark:text-gray-300 font-bold hover:text-purple-500 transition-colors">Resources</a>
            
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 md:hidden">
            <button className="text-teacher-dark dark:text-white p-2" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-lg py-4 px-6 flex flex-col gap-4 border-t border-gray-100 dark:border-gray-800">
            <a href="#resources" onClick={toggleMenu} className="text-lg font-bold text-gray-700 dark:text-gray-200">Resources</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div id="home">
        <Hero />
      </div>

      {/* Resources Section */}
      <section id="resources">
        <ResourcesPage showNav={false} showFooter={false} />
      </section>
      {/* Footer */}
      <footer className="bg-teacher-dark text-white py-6 px-4 mt-10">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-300">
          © 2026 Raquel M. Centeno. All rights reserved.
        </div>
      </footer>
    </main>
  );
};

export default App;

