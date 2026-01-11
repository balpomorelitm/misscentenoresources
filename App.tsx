import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import SkillSection from './components/SkillSection';
import Services from './components/Services';
import Hobbies from './components/Hobbies';
import { experiences, skills, languages, education, personalInfo } from './constants';
import { Mail, Phone, FileText, Menu, X, Moon, Sun } from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

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
            <a href="#experience" className="text-gray-600 dark:text-gray-300 font-bold hover:text-teacher-blue transition-colors">Experience</a>
            <a href="#skills" className="text-gray-600 dark:text-gray-300 font-bold hover:text-teacher-teal transition-colors">Skills & Ed</a>
            <a href="#tutoring" className="text-gray-600 dark:text-gray-300 font-bold hover:text-teacher-red transition-colors">Tutoring</a>
            <a href="#hobbies" className="text-gray-600 dark:text-gray-300 font-bold hover:text-orange-500 transition-colors">Creativity</a>
            <a href="/resources.html" className="text-gray-600 dark:text-gray-300 font-bold hover:text-purple-500 transition-colors">Resources</a>
            
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full bg-gray-100 dark:bg-slate-700 text-teacher-dark dark:text-teacher-yellow transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a 
              href={`mailto:${personalInfo.contact.email}`}
              className="bg-teacher-dark text-white px-6 py-2.5 rounded-full font-bold shadow-md hover:bg-teacher-blue hover:scale-105 transition-all duration-200 flex items-center gap-2"
            >
              Hire me!
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full bg-gray-100 dark:bg-slate-700 text-teacher-dark dark:text-teacher-yellow"
            >
               {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="text-teacher-dark dark:text-white p-2" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-lg py-4 px-6 flex flex-col gap-4 border-t border-gray-100 dark:border-gray-800">
            <a href="#experience" onClick={toggleMenu} className="text-lg font-bold text-gray-700 dark:text-gray-200">Experience</a>
            <a href="#skills" onClick={toggleMenu} className="text-lg font-bold text-gray-700 dark:text-gray-200">Skills & Education</a>
            <a href="#tutoring" onClick={toggleMenu} className="text-lg font-bold text-gray-700 dark:text-gray-200">Tutoring</a>
            <a href="#hobbies" onClick={toggleMenu} className="text-lg font-bold text-gray-700 dark:text-gray-200">Creativity</a>
            <a href="/resources.html" className="text-lg font-bold text-gray-700 dark:text-gray-200">Resources</a>
            <a href={`mailto:${personalInfo.contact.email}`} onClick={toggleMenu} className="bg-teacher-red text-white text-center py-3 rounded-xl font-bold mt-2">
              Hire me!
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div id="home">
        <Hero />
      </div>

      {/* Professional Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="text-center mb-16 px-4">
           <span className="text-teacher-blue dark:text-teacher-teal font-bold tracking-wider text-sm uppercase mb-2 block">My Journey</span>
           <h2 className="font-display text-4xl font-black text-teacher-dark dark:text-white">Professional Experience</h2>
           <div className="w-16 h-1.5 bg-teacher-red mx-auto mt-4 rounded-full"></div>
        </div>
        <Timeline experiences={experiences} />
      </section>

      {/* Skills & Education Section */}
      <section id="skills" className="py-20 bg-gradient-to-b from-transparent to-white/50 dark:to-slate-800/50">
        <div className="text-center mb-16 px-4">
           <span className="text-teacher-teal font-bold tracking-wider text-sm uppercase mb-2 block">What I Bring</span>
           <h2 className="font-display text-4xl font-black text-teacher-dark dark:text-white">Skills & Education</h2>
           <div className="w-16 h-1.5 bg-teacher-yellow mx-auto mt-4 rounded-full"></div>
        </div>
        <div id="education">
          <SkillSection skills={skills} languages={languages} education={education} />
        </div>
      </section>

      {/* Services / Tutoring Section */}
      <section id="tutoring" className="py-20 bg-white/30 dark:bg-slate-800/30">
        <Services />
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="px-4 pb-20">
        <Hobbies />
      </section>

      {/* Footer / Contact */}
      <footer className="bg-teacher-dark text-white pt-20 pb-10 px-4 mt-10 relative overflow-hidden">
         {/* Decorational circles */}
         <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-teacher-red via-teacher-yellow to-teacher-blue"></div>
         <div className="absolute -right-20 top-20 w-64 h-64 bg-teacher-teal opacity-10 rounded-full blur-3xl"></div>

         <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="font-handwriting text-5xl md:text-6xl font-bold mb-6 text-teacher-yellow">Let's Connect!</h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              I'm currently seeking opportunities to contribute to an institution that values linguistic and social diversity. 
              Reach out if you'd like to discuss how I can bring my experience to your school.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
              <a 
                href={`mailto:${personalInfo.contact.email}`}
                className="group flex items-center gap-3 bg-white text-teacher-dark px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-teacher-yellow transition-all transform hover:-translate-y-1"
              >
                <div className="bg-teacher-red text-white p-2 rounded-lg group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div className="text-left">
                   <span className="block text-xs text-gray-500 uppercase font-bold">Email Me</span>
                   <span className="text-sm md:text-base">{personalInfo.contact.email}</span>
                </div>
              </a>

               <div 
                className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-bold"
              >
                <div className="bg-teacher-blue text-white p-2 rounded-lg">
                  <FileText size={24} />
                </div>
                 <div className="text-left">
                   <span className="block text-xs text-gray-400 uppercase font-bold">HK Permanent I.C</span>
                   <span className="text-sm md:text-base"></span>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
              <p>© {new Date().getFullYear()} Raquel M. Centeno. All rights reserved.</p>
              <p className="flex items-center gap-1">
                Designed with <span className="text-teacher-red">♥</span> for Education
              </p>
            </div>
         </div>
      </footer>
    </main>
  );
};

export default App;
