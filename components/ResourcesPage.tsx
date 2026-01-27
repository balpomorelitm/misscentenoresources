import React, { useState, useMemo, useEffect } from 'react';
import { Search, Filter, BookOpen, Headphones, Gamepad2, BookText, GraduationCap, FolderOpen, X, ExternalLink, PenLine, MessageCircle, Moon, Sun, Calendar, ArrowLeft, FileText, Check } from 'lucide-react';
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
  | 'exam'
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
  exam: {
    label: 'Exam Practice',
    icon: <GraduationCap size={20} />,
    color: 'text-red-600 dark:text-red-400',
    bgColor: 'bg-red-100 dark:bg-red-900/30',
    borderColor: 'border-red-300 dark:border-red-700',
    description: 'Exam-style simulations and practice materials'
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
    label: 'Class Grammar Topics',
    icon: <BookOpen size={20} />,
    color: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    borderColor: 'border-purple-300 dark:border-purple-700',
    description: 'Grammar topics and summaries used in class'
  },
  listening: {
    label: 'Listening',
    icon: <Headphones size={20} />,
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
    borderColor: 'border-green-300 dark:border-green-700',
    description: 'Listening comprehension practice and exams'
  },
  reading: {
    label: 'Reading',
    icon: <BookText size={20} />,
    color: 'text-indigo-600 dark:text-indigo-400',
    bgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
    borderColor: 'border-indigo-300 dark:border-indigo-700',
    description: 'Reading comprehension tests and practice'
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
    description: 'Spanish text types: letters, emails, articles, and more'
  }
};

interface ResourcesPageProps {
  showNav?: boolean;
  showFooter?: boolean;
}

const VISITED_STORAGE_KEY = 'resourcesVisited';
const COMPLETED_STORAGE_KEY = 'resourcesCompleted';
const TEACHER_UNLOCKED_STORAGE_KEY = 'resourcesTeacherUnlocked';
const TEACHER_PASSWORD = 'labestiadeokinawa';

const PUBLIC_CATEGORIES: ResourceCategory[] = ['book-summary', 'grammar-guide', 'text-types', 'games'];
const TEACHER_ONLY_CATEGORIES: ResourceCategory[] = ['oral', 'grammar', 'exam', 'planner', 'listening', 'reading'];

const loadStoredIds = (key: string) => {
  if (typeof window === 'undefined') {
    return new Set<string>();
  }
  try {
    const stored = window.localStorage.getItem(key);
    if (!stored) {
      return new Set<string>();
    }
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) {
      return new Set<string>();
    }
    return new Set(parsed.filter((value) => typeof value === 'string'));
  } catch {
    return new Set<string>();
  }
};

const persistIds = (key: string, ids: Set<string>) => {
  if (typeof window === 'undefined') {
    return;
  }
  window.localStorage.setItem(key, JSON.stringify(Array.from(ids)));
};

const loadTeacherUnlocked = () => {
  if (typeof window === 'undefined') {
    return false;
  }
  try {
    return window.localStorage.getItem(TEACHER_UNLOCKED_STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
};

const persistTeacherUnlocked = (unlocked: boolean) => {
  if (typeof window === 'undefined') {
    return;
  }
  window.localStorage.setItem(TEACHER_UNLOCKED_STORAGE_KEY, unlocked ? 'true' : 'false');
};

const ResourcesPage: React.FC<ResourcesPageProps> = ({ showNav = true, showFooter = true }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [visitedIds, setVisitedIds] = useState<Set<string>>(new Set());
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());
  const [teacherUnlocked, setTeacherUnlocked] = useState(false);
  const [teacherPassword, setTeacherPassword] = useState('');
  const [teacherError, setTeacherError] = useState('');

  useEffect(() => {
    if (!showNav) {
      return;
    }
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, [showNav]);

  useEffect(() => {
    setVisitedIds(loadStoredIds(VISITED_STORAGE_KEY));
    setCompletedIds(loadStoredIds(COMPLETED_STORAGE_KEY));
    setTeacherUnlocked(loadTeacherUnlocked());
  }, []);

  const toggleDarkMode = () => {
    if (!showNav) {
      return;
    }
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const matchesSearch = (resource: Resource) => {
    return searchQuery === '' || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
  };

  // Public resources are visible to students
  const generalFilteredResources = useMemo(() => {
    return resourcesData
      .filter(resource => PUBLIC_CATEGORIES.includes(resource.category))
      .filter(resource => {
        const matchesCategory = !selectedCategory || resource.category === selectedCategory;
        return matchesSearch(resource) && matchesCategory;
      });
  }, [searchQuery, selectedCategory]);

  // Teacher-only resources live behind the password gate
  const teacherFilteredResources = useMemo(() => {
    return resourcesData
      .filter(resource => TEACHER_ONLY_CATEGORIES.includes(resource.category))
      .filter(resource => matchesSearch(resource));
  }, [searchQuery]);

  // Group resources by category
  const groupedResources = useMemo(() => {
    const groups: Record<ResourceCategory, typeof resourcesData> = {
      oral: [],
      grammar: [],
      games: [],
      exam: [],
      planner: [],
      'book-summary': [],
      listening: [],
      reading: [],
      'grammar-guide': [],
      'text-types': []
    };
    
    generalFilteredResources.forEach(resource => {
      if (groups[resource.category]) {
        groups[resource.category].push(resource);
      }
    });
    
    return groups;
  }, [generalFilteredResources]);

  const teacherGroupedResources = useMemo(() => {
    const groups: Record<ResourceCategory, typeof resourcesData> = {
      oral: [],
      grammar: [],
      games: [],
      exam: [],
      planner: [],
      'book-summary': [],
      listening: [],
      reading: [],
      'grammar-guide': [],
      'text-types': []
    };

    teacherFilteredResources.forEach(resource => {
      if (groups[resource.category]) {
        groups[resource.category].push(resource);
      }
    });

    return groups;
  }, [teacherFilteredResources]);

  const categories = PUBLIC_CATEGORIES;

  const totalAccessibleResults = generalFilteredResources.length + (teacherUnlocked ? teacherFilteredResources.length : 0);

  const openResource = (resource: Resource) => {
    setVisitedIds((prev) => {
      const nextVisited = new Set(prev);
      nextVisited.add(resource.id);
      persistIds(VISITED_STORAGE_KEY, nextVisited);
      return nextVisited;
    });
    window.location.href = resource.htmlFile;
  };

  const toggleCompleted = (resourceId: string) => {
    setCompletedIds((prev) => {
      const nextCompleted = new Set(prev);
      if (nextCompleted.has(resourceId)) {
        nextCompleted.delete(resourceId);
      } else {
        nextCompleted.add(resourceId);
      }
      persistIds(COMPLETED_STORAGE_KEY, nextCompleted);
      return nextCompleted;
    });
  };

  const handleTeacherUnlock = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (teacherPassword.trim() === TEACHER_PASSWORD) {
      setTeacherUnlocked(true);
      persistTeacherUnlocked(true);
      setTeacherPassword('');
      setTeacherError('');
      return;
    }
    setTeacherError('Incorrect password.');
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      {/* Navbar */}
      {showNav && (
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
      )}

      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teacher-blue/10 via-teacher-teal/10 to-teacher-yellow/10 dark:from-teacher-blue/5 dark:via-teacher-teal/5 dark:to-teacher-yellow/5"></div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 bg-teacher-blue/10 dark:bg-teacher-blue/20 rounded-full text-teacher-blue dark:text-teacher-teal font-bold text-sm tracking-wider uppercase mb-4 border border-teacher-blue/20">
              Raquel MC Materials
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-black text-teacher-dark dark:text-white mb-3">
              Resource Bank
            </h1>
            <p className="max-w-2xl mx-auto text-base text-gray-600 dark:text-gray-300 mb-8">
              Explore Raquel MC's interactive Spanish practice materials.
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-12">
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
              {totalAccessibleResults} result{totalAccessibleResults !== 1 ? 's' : ''} found
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
                {resources.map(resource => {
                  const isVisited = visitedIds.has(resource.id);
                  const isCompleted = completedIds.has(resource.id);
                  return (
                  <div
                    key={resource.id}
                    onClick={() => openResource(resource)}
                    className={`group rounded-xl border shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer overflow-hidden ${
                      isVisited
                        ? 'bg-gray-50/80 dark:bg-slate-800/70 border-gray-200 dark:border-gray-600'
                        : 'bg-white dark:bg-slate-800 border-gray-100 dark:border-gray-700'
                    } hover:border-teacher-blue dark:hover:border-teacher-teal`}
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
                      <div className="flex items-center justify-between gap-2 pt-3 border-t border-gray-100 dark:border-gray-700">
                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation();
                            toggleCompleted(resource.id);
                          }}
                          className={`flex items-center gap-2 text-xs font-semibold transition-colors ${
                            isCompleted
                              ? 'text-emerald-600 dark:text-emerald-400'
                              : 'text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300'
                          }`}
                          aria-pressed={isCompleted}
                          aria-label={isCompleted ? 'Mark as not completed' : 'Mark as completed'}
                        >
                          <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full border ${
                            isCompleted
                              ? 'border-emerald-500 bg-emerald-500 text-white'
                              : 'border-gray-300 bg-white dark:bg-slate-700 dark:border-gray-600'
                          }`}>
                            {isCompleted && <Check size={12} />}
                          </span>
                          {isCompleted ? 'Completed' : 'Mark complete'}
                        </button>
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
                );
                })}
              </div>
            </section>
          );
        })}

        {/* Teacher Section */}
        <section className="mt-16 pt-10 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="flex items-start gap-3 mb-6">
                <div className="p-2 rounded-xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                    Teacher Section
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Private categories for teacher use only.
                  </p>
                </div>
              </div>

              {!teacherUnlocked && (
                <form onSubmit={handleTeacherUnlock} className="flex flex-col sm:flex-row gap-3 sm:items-center">
                  <div className="flex-1">
                    <label htmlFor="teacher-password" className="sr-only">
                      Teacher password
                    </label>
                    <input
                      id="teacher-password"
                      type="password"
                      value={teacherPassword}
                      onChange={(event) => {
                        setTeacherPassword(event.target.value);
                        if (teacherError) {
                          setTeacherError('');
                        }
                      }}
                      placeholder="Enter teacher password"
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 text-gray-800 dark:text-white placeholder-gray-400 focus:border-teacher-blue dark:focus:border-teacher-teal focus:outline-none focus:ring-4 focus:ring-teacher-blue/10 dark:focus:ring-teacher-teal/10 transition-all"
                    />
                    {teacherError && (
                      <p className="text-xs font-semibold text-rose-600 mt-2">{teacherError}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-slate-800 text-white font-semibold hover:bg-slate-700 transition-colors"
                  >
                    Unlock
                  </button>
                </form>
              )}

              {teacherUnlocked && (
                <div className="space-y-10">
                  {teacherFilteredResources.length === 0 && (
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      No teacher-only resources match your current search.
                    </p>
                  )}

                  {TEACHER_ONLY_CATEGORIES.map((category) => {
                    const resources = teacherGroupedResources[category];
                    if (!resources || resources.length === 0) return null;

                    const config = categoryConfig[category];

                    return (
                      <section key={category}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`p-2 rounded-xl ${config.bgColor} ${config.color}`}>
                            {config.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                              {config.label}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {config.description}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                          {resources.map(resource => {
                            const isVisited = visitedIds.has(resource.id);
                            const isCompleted = completedIds.has(resource.id);

                            return (
                              <div
                                key={resource.id}
                                onClick={() => openResource(resource)}
                                className={`group rounded-xl border shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer overflow-hidden ${
                                  isVisited
                                    ? 'bg-gray-50/80 dark:bg-slate-800/70 border-gray-200 dark:border-gray-600'
                                    : 'bg-white dark:bg-slate-800 border-gray-100 dark:border-gray-700'
                                } hover:border-teacher-blue dark:hover:border-teacher-teal`}
                              >
                                <div className="p-4">
                                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-teacher-blue dark:group-hover:text-teacher-teal transition-colors line-clamp-2">
                                    {resource.title}
                                  </h3>
                                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                                    {resource.description}
                                  </p>

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

                                  <div className="flex items-center justify-between gap-2 pt-3 border-t border-gray-100 dark:border-gray-700">
                                    <button
                                      type="button"
                                      onClick={(event) => {
                                        event.stopPropagation();
                                        toggleCompleted(resource.id);
                                      }}
                                      className={`flex items-center gap-2 text-xs font-semibold transition-colors ${
                                        isCompleted
                                          ? 'text-emerald-600 dark:text-emerald-400'
                                          : 'text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300'
                                      }`}
                                      aria-pressed={isCompleted}
                                      aria-label={isCompleted ? 'Mark as not completed' : 'Mark as completed'}
                                    >
                                      <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full border ${
                                        isCompleted
                                          ? 'border-emerald-500 bg-emerald-500 text-white'
                                          : 'border-gray-300 bg-white dark:bg-slate-700 dark:border-gray-600'
                                      }`}>
                                        {isCompleted && <Check size={12} />}
                                      </span>
                                      {isCompleted ? 'Completed' : 'Mark complete'}
                                    </button>
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
                            );
                          })}
                        </div>
                      </section>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Empty State */}
        {generalFilteredResources.length === 0 && (!teacherUnlocked || teacherFilteredResources.length === 0) && (
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
      {showFooter && (
        <footer className="bg-teacher-dark text-white py-6 px-4 mt-10">
          <div className="max-w-7xl mx-auto text-center text-sm text-gray-300">
            {'\u00A9'} 2026 Raquel M. Centeno. All rights reserved.
          </div>
        </footer>
      )}
    </div>
  );
};

export default ResourcesPage;

