import React from 'react';
import { personalInfo } from '../constants';
import { Utensils, Palette, Scissors, Layout, Camera } from 'lucide-react';

type Category = 'Food' | 'Art' | 'Crafts' | 'Class';

interface GalleryItem {
  id: number;
  category: Category;
  rotation: string; // Tailwind rotation class or inline style value
}

const Hobbies: React.FC = () => {
  // Configuration based on user request
  // Food - 1, 4, 5, 8, 13
  // Art - 2, 3, 9, 12
  // Crafts 10, 11, 14
  // Class designs 6, 7
  
  const galleryItems: GalleryItem[] = [
    { id: 1, category: 'Food', rotation: 'rotate-2' },
    { id: 2, category: 'Art', rotation: '-rotate-1' },
    { id: 3, category: 'Art', rotation: 'rotate-3' },
    { id: 4, category: 'Food', rotation: '-rotate-2' },
    { id: 5, category: 'Food', rotation: 'rotate-1' },
    { id: 6, category: 'Class', rotation: '-rotate-3' },
    { id: 7, category: 'Class', rotation: 'rotate-2' },
    { id: 8, category: 'Food', rotation: '-rotate-1' },
    { id: 9, category: 'Art', rotation: 'rotate-3' },
    { id: 10, category: 'Crafts', rotation: '-rotate-2' },
    { id: 11, category: 'Crafts', rotation: 'rotate-1' },
    { id: 12, category: 'Art', rotation: '-rotate-3' },
    { id: 13, category: 'Food', rotation: 'rotate-2' },
    { id: 14, category: 'Crafts', rotation: '-rotate-1' },
  ];

  const getCategoryIcon = (cat: Category) => {
    switch (cat) {
      case 'Food': return <Utensils size={14} />;
      case 'Art': return <Palette size={14} />;
      case 'Crafts': return <Scissors size={14} />;
      case 'Class': return <Layout size={14} />;
      default: return <Camera size={14} />;
    }
  };

  const getCategoryColor = (cat: Category) => {
    switch (cat) {
      case 'Food': return 'bg-orange-500';
      case 'Art': return 'bg-purple-500';
      case 'Crafts': return 'bg-teacher-teal';
      case 'Class': return 'bg-teacher-blue';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-teacher-yellow via-orange-200 to-yellow-100 dark:from-yellow-900/40 dark:to-orange-900/40 py-20 px-4 rounded-[3rem] my-10 shadow-inner mx-auto max-w-7xl overflow-hidden relative">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#EF476F 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-white/40 backdrop-blur-md rounded-full text-teacher-dark dark:text-white font-bold text-sm tracking-wider uppercase mb-3 border border-white/20">
             My Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-teacher-dark dark:text-white mb-4">
            Creativity in Action
          </h2>
          <p className="max-w-2xl mx-auto text-lg font-medium text-teacher-dark/80 dark:text-white/90">
            A collection of my culinary creations, artistic projects, craft workshops, and classroom designs.
          </p>
        </div>

        {/* Masonry Layout */}
        <div className="columns-2 md:columns-3 lg:columns-5 gap-4 space-y-4 px-2 md:px-8">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              className={`break-inside-avoid relative group rounded-xl bg-white p-2 shadow-lg transition-all duration-300 transform ${item.rotation} hover:rotate-0 hover:scale-110 hover:z-20 hover:shadow-2xl cursor-pointer`}
            >
              {/* Image Container */}
              <div className="relative rounded-lg overflow-hidden bg-gray-100 aspect-auto">
                 {/* Fallback background in case image doesn't exist yet */}
                 <div className={`absolute inset-0 ${getCategoryColor(item.category)} opacity-20`}></div>
                 
                 <img 
                  src={`./images/grid${item.id}.webp`} 
                  alt={`${item.category} showcase ${item.id}`}
                  className="w-full h-auto object-cover relative z-10"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback if image fails to load (dev mode or missing file)
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.classList.add('h-48', 'flex', 'items-center', 'justify-center');
                  }}
                />
                {/* Fallback text if image is missing (visible because image is hidden on error) */}
                 <div className="absolute inset-0 flex items-center justify-center z-0">
                    <span className="text-xs text-gray-400 font-bold">Image {item.id}</span>
                 </div>
              </div>

              {/* Label Badge */}
              <div className={`absolute -top-2 -right-2 ${getCategoryColor(item.category)} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1 transform scale-0 group-hover:scale-100 transition-transform duration-200 delay-75`}>
                {getCategoryIcon(item.category)}
                {item.category}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <a 
             href={`mailto:${personalInfo.contact.email}?subject=Workshop Inquiry`}
             className="inline-block bg-teacher-dark text-white px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 hover:bg-gray-900 transition-all duration-300 border-4 border-white/20"
           >
             Book a Workshop!
           </a>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
