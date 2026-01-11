import React, { useState, useMemo, useEffect } from 'react';
import { Search, Filter, BookOpen, Mic, Headphones, Gamepad2, BookText, GraduationCap, FolderOpen, X, ExternalLink, PenLine, MessageCircle } from 'lucide-react';

// Tipos para los recursos
export interface Resource {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  htmlFile: string; // Ruta al archivo HTML
  tags: string[];
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  dateAdded: string;
}

export type ResourceCategory = 
  | 'writing' 
  | 'reading' 
  | 'oral' 
  | 'listening' 
  | 'games' 
  | 'grammar' 
  | 'ib-book' 
  | 'other-ib';

interface CategoryConfig {
  label: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
}

const categoryConfig: Record<ResourceCategory, CategoryConfig> = {
  writing: {
    label: 'Writing',
    icon: <PenLine size={18} />,
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    borderColor: 'border-blue-300 dark:border-blue-700'
  },
  reading: {
    label: 'Reading',
    icon: <BookOpen size={18} />,
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
    borderColor: 'border-green-300 dark:border-green-700'
  },
  oral: {
    label: 'Oral',
    icon: <MessageCircle size={18} />,
    color: 'text-orange-600 dark:text-orange-400',
    bgColor: 'bg-orange-100 dark:bg-orange-900/30',
    borderColor: 'border-orange-300 dark:border-orange-700'
  },
  listening: {
    label: 'Listening',
    icon: <Headphones size={18} />,
    color: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    borderColor: 'border-purple-300 dark:border-purple-700'
  },
  games: {
    label: 'Games',
    icon: <Gamepad2 size={18} />,
    color: 'text-pink-600 dark:text-pink-400',
    bgColor: 'bg-pink-100 dark:bg-pink-900/30',
    borderColor: 'border-pink-300 dark:border-pink-700'
  },
  grammar: {
    label: 'Grammar',
    icon: <BookText size={18} />,
    color: 'text-teal-600 dark:text-teal-400',
    bgColor: 'bg-teal-100 dark:bg-teal-900/30',
    borderColor: 'border-teal-300 dark:border-teal-700'
  },
  'ib-book': {
    label: 'IB Book',
    icon: <GraduationCap size={18} />,
    color: 'text-red-600 dark:text-red-400',
    bgColor: 'bg-red-100 dark:bg-red-900/30',
    borderColor: 'border-red-300 dark:border-red-700'
  },
  'other-ib': {
    label: 'Other IB',
    icon: <FolderOpen size={18} />,
    color: 'text-amber-600 dark:text-amber-400',
    bgColor: 'bg-amber-100 dark:bg-amber-900/30',
    borderColor: 'border-amber-300 dark:border-amber-700'
  }
};

// Recursos de ejemplo - estos se irán añadiendo
const sampleResources: Resource[] = [
  // Aquí se irán añadiendo los recursos HTML
  // Por ahora está vacío, se llenará cuando se añadan los archivos
];

interface ResourcesProps {
  resources?: Resource[];
}

const Resources: React.FC<ResourcesProps> = ({ resources = sampleResources }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<ResourceCategory[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  // Escuchar mensaje del iframe para cerrar el modal
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data === 'closeResource') {
        setSelectedResource(null);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Filtrar recursos
  const filteredResources = useMemo(() => {
    return resources.filter(resource => {
      // Filtro por búsqueda
      const matchesSearch = searchQuery === '' || 
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      // Filtro por categoría
      const matchesCategory = selectedCategories.length === 0 || 
        selectedCategories.includes(resource.category);

      return matchesSearch && matchesCategory;
    });
  }, [resources, searchQuery, selectedCategories]);

  const toggleCategory = (category: ResourceCategory) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSearchQuery('');
  };

  const categories = Object.keys(categoryConfig) as ResourceCategory[];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teacher-blue/20 via-teacher-teal/20 to-teacher-yellow/20 dark:from-teacher-blue/10 dark:via-teacher-teal/10 dark:to-teacher-yellow/10"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 bg-teacher-blue/10 dark:bg-teacher-blue/20 rounded-full text-teacher-blue dark:text-teacher-teal font-bold text-sm tracking-wider uppercase mb-4 border border-teacher-blue/20">
              IB Spanish Resources
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-teacher-dark dark:text-white mb-4">
              Banco de Recursos
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-8">
              Explora nuestra colección de ejercicios y materiales para preparar el examen IB de español. 
              Filtra por categoría o busca el tema que necesitas.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative flex items-center">
                <Search className="absolute left-4 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Buscar recursos por título, descripción o etiqueta..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 text-gray-800 dark:text-white placeholder-gray-400 focus:border-teacher-blue dark:focus:border-teacher-teal focus:outline-none focus:ring-4 focus:ring-teacher-blue/10 dark:focus:ring-teacher-teal/10 transition-all text-lg shadow-lg"
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
      <div className="max-w-6xl mx-auto px-4 pb-20">
        {/* Filter Section */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-teacher-blue dark:hover:border-teacher-teal transition-colors font-semibold text-gray-700 dark:text-gray-200 shadow-sm"
            >
              <Filter size={18} />
              Filtrar por categoría
              {selectedCategories.length > 0 && (
                <span className="bg-teacher-blue text-white text-xs px-2 py-0.5 rounded-full">
                  {selectedCategories.length}
                </span>
              )}
            </button>

            {(selectedCategories.length > 0 || searchQuery) && (
              <button
                onClick={clearFilters}
                className="text-sm text-gray-500 hover:text-teacher-red transition-colors flex items-center gap-1"
              >
                <X size={14} />
                Limpiar filtros
              </button>
            )}
          </div>

          {/* Category Pills */}
          <div className={`flex flex-wrap gap-2 transition-all duration-300 ${isFilterOpen ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'}`}>
            {categories.map(category => {
              const config = categoryConfig[category];
              const isSelected = selectedCategories.includes(category);
              return (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 border-2 ${
                    isSelected 
                      ? `${config.bgColor} ${config.color} ${config.borderColor} shadow-md scale-105`
                      : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  {config.icon}
                  {config.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-500 dark:text-gray-400">
            {filteredResources.length === 0 
              ? 'No se encontraron recursos' 
              : `${filteredResources.length} recurso${filteredResources.length !== 1 ? 's' : ''} encontrado${filteredResources.length !== 1 ? 's' : ''}`
            }
          </p>
        </div>

        {/* Resources Grid */}
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map(resource => {
              const config = categoryConfig[resource.category];
              return (
                <div
                  key={resource.id}
                  className="group bg-white dark:bg-slate-800 rounded-2xl border-2 border-gray-100 dark:border-gray-700 hover:border-teacher-blue dark:hover:border-teacher-teal shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedResource(resource)}
                >
                  {/* Category Header */}
                  <div className={`px-4 py-2 ${config.bgColor} flex items-center gap-2 ${config.color}`}>
                    {config.icon}
                    <span className="font-semibold text-sm">{config.label}</span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2 group-hover:text-teacher-blue dark:group-hover:text-teacher-teal transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {resource.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {resource.tags.slice(0, 3).map(tag => (
                        <span 
                          key={tag}
                          className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {resource.tags.length > 3 && (
                        <span className="px-2 py-0.5 text-gray-400 text-xs">
                          +{resource.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                      {resource.difficulty && (
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          resource.difficulty === 'beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                          resource.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                          'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                        }`}>
                          {resource.difficulty === 'beginner' ? 'Principiante' : 
                           resource.difficulty === 'intermediate' ? 'Intermedio' : 'Avanzado'}
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-teacher-blue dark:text-teacher-teal text-sm font-semibold group-hover:gap-2 transition-all">
                        Abrir
                        <ExternalLink size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
              <FolderOpen size={40} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">
              {resources.length === 0 ? '¡Próximamente!' : 'No hay resultados'}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
              {resources.length === 0 
                ? 'Estamos preparando una colección de recursos y ejercicios para ayudarte a preparar el examen IB de español. ¡Vuelve pronto!'
                : 'Intenta ajustar los filtros o modificar tu búsqueda para encontrar lo que necesitas.'
              }
            </p>
          </div>
        )}
      </div>

      {/* Resource Modal */}
      {selectedResource && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedResource(null)}
        >
          <div 
            className="bg-white dark:bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${categoryConfig[selectedResource.category].bgColor} ${categoryConfig[selectedResource.category].color}`}>
                  {categoryConfig[selectedResource.category].icon}
                </div>
                <div>
                  <h2 className="font-bold text-lg text-gray-800 dark:text-white">
                    {selectedResource.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {categoryConfig[selectedResource.category].label}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedResource(null)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-500" />
              </button>
            </div>

            {/* Modal Content - Iframe */}
            <div className="w-full h-[70vh] bg-white">
              <iframe
                src={selectedResource.htmlFile}
                className="w-full h-full border-0"
                title={selectedResource.title}
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <div className="flex flex-wrap gap-1">
                {selectedResource.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={selectedResource.htmlFile}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-teacher-blue text-white rounded-lg font-semibold hover:bg-teacher-dark transition-colors"
              >
                Abrir en nueva pestaña
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resources;
