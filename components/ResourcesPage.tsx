import React, { useState, useMemo, useEffect } from 'react';
import { Search, Filter, BookOpen, Headphones, Gamepad2, BookText, GraduationCap, FolderOpen, X, ExternalLink, PenLine, MessageCircle, Moon, Sun, Calendar, ArrowLeft, FileText } from 'lucide-react';
import { resourcesData } from '../resourcesData';

// Types for resources
export interface Resource {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  htmlFile: string;
  tags: string[];
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  dateAdded: string;
}

export type ResourceCategory = 
  | 'oral' 
  | 'grammar' 
  | 'games'
  | 'ib-exam'
  | 'planner'
  | 'book-summary'
  | 'listening'
  | 'reading'
  | 'grammar-guide'
  | 'text-types';

interface CategoryConfig {
  label: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  description: string;
}

const categoryConfig: Record<ResourceCategory, CategoryConfig> = {
  oral: {
    label: 'Oral Practice',
    icon: <MessageCircle size={20} />,
    color: 'text-orange-600 dark:text-orange-400',
    bgColor: 'bg-orange-100 dark:bg-orange-900/30',
    borderColor: 'border-orange-300 dark:border-orange-700',
    description: 'Interactive oral exam simulators and practice materials'
  },
  grammar: {
    label: 'Grammar',
    icon: <BookText size={20} />,
    color: 'text-teal-600 dark:text-teal-400',
    bgColor: 'bg-teal-100 dark:bg-teal-900/30',
    borderColor: 'border-teal-300 dark:border-teal-700',
    description: 'Interactive grammar workbooks and exercises'
  },
  games: {
    label: 'Games',
    icon: <Gamepad2 size={20} />,
    color: 'text-pink-600 dark:text-pink-400',
    bgColor: 'bg-pink-100 dark:bg-pink-900/30',
    borderColor: 'border-pink-300 dark:border-pink-700',
    description: 'Fun interactive games to practice Spanish'
  },
  'ib-exam': {
    label: 'IB Exam',
    icon: <GraduationCap size={20} />,
    color: 'text-red-600 dark:text-red-400',
    bgColor: 'bg-red-100 dark:bg-red-900/30',
    borderColor: 'border-red-300 dark:border-red-700',
    description: 'Full exam simulations and IB-aligned materials'
  },
  planner: {
    label: 'Planners',
    icon: <Calendar size={20} />,
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    borderColor: 'border-blue-300 dark:border-blue-700',
    description: 'Course planners and calendars'
  },
  'book-summary': {
    label: 'Book Summary',
    icon: <BookOpen size={20} />,
    color: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    borderColor: 'border-purple-300 dark:border-purple-700',
    description: 'Hodder Spanish Ab Initio textbook chapter summaries'
  },
  listening: {
    label: 'Listening',
    icon: <Headphones size={20} />,
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
    borderColor: 'border-green-300 dark:border-green-700',
    description: 'IB listening comprehension practice and exams'
  },
  reading: {
    label: 'Reading',
    icon: <BookText size={20} />,
    color: 'text-indigo-600 dark:text-indigo-400',
    bgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
    borderColor: 'border-indigo-300 dark:border-indigo-700',
    description: 'IB reading comprehension tests and practice'
  },
  'grammar-guide': {
    label: 'Grammar Guide',
    icon: <PenLine size={20} />,
    color: 'text-amber-600 dark:text-amber-400',
    bgColor: 'bg-amber-100 dark:bg-amber-900/30',
    borderColor: 'border-amber-300 dark:border-amber-700',
    description: 'Complete grammar manual summarized point by point'
  },
  'text-types': {
    label: 'Text Types',
    icon: <FileText size={20} />,
    color: 'text-rose-600 dark:text-rose-400',
    bgColor: 'bg-rose-100 dark:bg-rose-900/30',
    borderColor: 'border-rose-300 dark:border-rose-700',
    description: 'IB text typology: letters, emails, articles, and more'
  }
};

const ResourcesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Filter resources
  const filteredResources = useMemo(() => {
    return resourcesData.filter(resource => {
      const matchesSearch = searchQuery === '' || 
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = !selectedCategory || resource.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Group resources by category
  const groupedResources = useMemo(() => {
    const groups: Record<ResourceCategory, typeof resourcesData> = {
      oral: [],
      grammar: [],
      games: [],
      'ib-exam': [],
      planner: [],
      'book-summary': [],
      listening: [],
      reading: [],
      'grammar-guide': [],
      'text-types': []
    };
    
    filteredResources.forEach(resource => {
      if (groups[resource.category]) {
        groups[resource.category].push(resource);
      }
    });
    
    return groups;
  }, [filteredResources]);

  const categories = Object.keys(categoryConfig) as ResourceCategory[];

  const openResource = (htmlFile: string) => {
    window.location.href = htmlFile;
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm py-3 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a 
              href="/" 
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-teacher-blue dark:hover:text-teacher-teal transition-colors font-semibold"
            >
              <ArrowLeft size={20} />
              <span className="hidden sm:inline">Back to Portfolio</span>
            </a>
          </div>
          
          <a href="/" className="font-handwriting font-bold text-2xl md:text-3xl text-teacher-dark dark:text-white hover:text-teacher-red transition-colors">
            R. M. C.
          </a>

          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full bg-gray-100 dark:bg-slate-700 text-teacher-dark dark:text-teacher-yellow transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teacher-blue/10 via-teacher-teal/10 to-teacher-yellow/10 dark:from-teacher-blue/5 dark:via-teacher-teal/5 dark:to-teacher-yellow/5"></div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 bg-teacher-blue/10 dark:bg-teacher-blue/20 rounded-full text-teacher-blue dark:text-teacher-teal font-bold text-sm tracking-wider uppercase mb-4 border border-teacher-blue/20">
              IB Spanish Ab Initio
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-black text-teacher-dark dark:text-white mb-3">
              Resource Bank
            </h1>
            <p className="max-w-2xl mx-auto text-base text-gray-600 dark:text-gray-300 mb-8">
              Explore our collection of interactive exercises and materials for IB Spanish exam preparation.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <div className="relative flex items-center">
                <Search className="absolute left-4 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search by title, description or tag..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 text-gray-800 dark:text-white placeholder-gray-400 focus:border-teacher-blue dark:focus:border-teacher-teal focus:outline-none focus:ring-4 focus:ring-teacher-blue/10 dark:focus:ring-teacher-teal/10 transition-all shadow-lg"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                  >
                    <X size={18} className="text-gray-400" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        
        {/* Category Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {categories.map(category => {
            const config = categoryConfig[category];
            const count = groupedResources[category]?.length || 0;
            const isSelected = selectedCategory === category;
            
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(isSelected ? null : category)}
                className={`p-4 rounded-2xl border-2 transition-all duration-200 text-left ${
                  isSelected 
                    ? `${config.bgColor} ${config.borderColor} shadow-lg scale-[1.02]`
                    : 'bg-white dark:bg-slate-800 border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 hover:shadow-md'
                }`}
              >
                <div className={`mb-2 ${isSelected ? config.color : 'text-gray-500 dark:text-gray-400'}`}>
                  {config.icon}
                </div>
                <h3 className={`font-bold text-sm mb-1 ${isSelected ? config.color : 'text-gray-800 dark:text-white'}`}>
                  {config.label}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {count} resource{count !== 1 ? 's' : ''}
                </p>
              </button>
            );
          })}
        </div>

        {/* Clear filter */}
        {(selectedCategory || searchQuery) && (
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-500 dark:text-gray-400">
              {filteredResources.length} result{filteredResources.length !== 1 ? 's' : ''} found
            </p>
            <button
              onClick={() => { setSelectedCategory(null); setSearchQuery(''); }}
              className="text-sm text-gray-500 hover:text-teacher-red transition-colors flex items-center gap-1"
            >
              <X size={14} />
              Clear filters
            </button>
          </div>
        )}

        {/* Resources by Category */}
        {categories.map(category => {
          const resources = groupedResources[category];
          if (!resources || resources.length === 0) return null;
          if (selectedCategory && selectedCategory !== category) return null;
          
          const config = categoryConfig[category];
          
          return (
            <section key={category} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-xl ${config.bgColor} ${config.color}`}>
                  {config.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                    {config.label}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {config.description}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {resources.map(resource => (
                  <div
                    key={resource.id}
                    onClick={() => openResource(resource.htmlFile)}
                    className="group bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-teacher-blue dark:hover:border-teacher-teal shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer overflow-hidden"
                  >
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-teacher-blue dark:group-hover:text-teacher-teal transition-colors line-clamp-2">
                        {resource.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                        {resource.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {resource.tags.slice(0, 2).map(tag => (
                          <span 
                            key={tag}
                            className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                        {resource.tags.length > 2 && (
                          <span className="px-2 py-0.5 text-gray-400 text-xs">
                            +{resource.tags.length - 2}
                          </span>
                        )}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                        {resource.difficulty && (
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                            resource.difficulty === 'beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                            resource.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                            'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                          }`}>
                            {resource.difficulty === 'beginner' ? 'Beginner' : 
                             resource.difficulty === 'intermediate' ? 'Intermediate' : 'Advanced'}
                          </span>
                        )}
                        <span className="flex items-center gap-1 text-teacher-blue dark:text-teacher-teal text-xs font-semibold group-hover:gap-2 transition-all ml-auto">
                          Open
                          <ExternalLink size={12} />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {/* Empty State */}
        {filteredResources.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
              <FolderOpen size={36} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">
              No results found
            </h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
              Try adjusting your search or filters to find what you need.
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-teacher-dark text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Raquel M. Centeno. All resources designed for IB Spanish Ab Initio.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ResourcesPage;
