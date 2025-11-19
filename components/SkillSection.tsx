import React from 'react';
import { SkillCategory, Language, Education } from '../types';
import { BookOpen, HeartHandshake, Palette, Award, Star, ShieldCheck } from 'lucide-react';

interface SkillSectionProps {
  skills: SkillCategory[];
  languages: Language[];
  education: Education[];
}

const IconMap: Record<string, React.ElementType> = {
  BookOpen,
  HeartHandshake,
  Palette
};

const SkillSection: React.FC<SkillSectionProps> = ({ skills, languages, education }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
      
      {/* Left Column: Skills & Languages */}
      <div className="space-y-8">
        
        {/* Skills Cards */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border-2 border-teacher-yellow/30 transition-colors duration-300">
          <h3 className="font-display text-2xl font-bold text-teacher-dark dark:text-white mb-6 flex items-center gap-2">
            <Star className="text-teacher-yellow fill-teacher-yellow" />
            Skills & Expertise
          </h3>
          
          <div className="space-y-6">
            {skills.map((category) => {
              const Icon = IconMap[category.icon] || Star;
              return (
                <div key={category.category}>
                  <div className="flex items-center gap-2 mb-3 text-teacher-blue dark:text-teacher-teal font-bold">
                    <Icon size={18} />
                    <h4>{category.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-sm font-medium hover:bg-teacher-yellow/20 hover:text-teacher-dark dark:hover:text-teacher-yellow transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Languages - Changed Color to Blue/Teal Mix */}
        <div className="bg-teacher-blue dark:bg-sky-900 rounded-3xl p-8 shadow-xl text-white relative overflow-hidden transition-colors duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
            
            <h3 className="font-display text-2xl font-bold mb-6 relative z-10">Languages</h3>
            <div className="space-y-5 relative z-10">
              {languages.map((lang) => (
                <div key={lang.language}>
                  <div className="flex justify-between items-end mb-1">
                    <span className="font-bold text-lg">{lang.language}</span>
                    <span className="text-sm text-white/90">{lang.level}</span>
                  </div>
                  <div className="w-full bg-black/20 rounded-full h-3">
                    <div 
                      className="bg-teacher-yellow h-3 rounded-full transition-all duration-1000 shadow-sm" 
                      style={{ width: `${lang.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
        </div>

      </div>

      {/* Right Column: Education */}
      <div className="space-y-8">
        
        {/* Education Timeline style */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border-2 border-teacher-blue/20 h-full transition-colors duration-300">
           <h3 className="font-display text-2xl font-bold text-teacher-dark dark:text-white mb-6 flex items-center gap-2">
            <Award className="text-teacher-red" />
            Education & Certs
          </h3>
          
          <div className="space-y-6 relative">
             {/* Line */}
             <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-gray-100 dark:bg-gray-700"></div>

             {education.map((edu) => {
               const isHighlighted = edu.highlight;

               return (
                <div 
                  key={edu.id} 
                  className={`relative pl-8 transition-all duration-300 ${isHighlighted ? 'bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border-l-4 border-teacher-red -ml-4 shadow-sm scale-105 my-4' : ''}`}
                >
                   {/* Bullet Point / Icon */}
                   <div className={`absolute top-1.5 z-10 rounded-full flex items-center justify-center 
                     ${isHighlighted 
                        ? 'left-0 w-0' // Hide default dot if highlighted, styling handled by border
                        : 'left-0 w-5 h-5 bg-white dark:bg-slate-700 border-4 border-teacher-blue'
                     }`
                   }>
                      {isHighlighted && (
                         // Alternative icon for highlighted item positioned slightly differently
                         <div className="absolute -left-6 -top-1 bg-teacher-red text-white rounded-full p-1 shadow-md">
                            <ShieldCheck size={14} />
                         </div>
                      )}
                   </div>

                   <span className={`text-xs font-bold px-2 py-0.5 rounded mb-1 inline-block
                      ${isHighlighted 
                        ? 'bg-teacher-red text-white' 
                        : 'text-teacher-blue dark:text-teacher-teal bg-teacher-blue/10 dark:bg-teacher-blue/20'
                      }`}>
                     {edu.year}
                   </span>
                   
                   <h4 className={`font-bold leading-tight ${isHighlighted ? 'text-teacher-red dark:text-red-400 text-lg mt-1' : 'text-gray-800 dark:text-gray-100'}`}>
                     {edu.title}
                   </h4>
                   
                   <p className={`text-sm mt-1 ${isHighlighted ? 'text-gray-700 dark:text-gray-300 font-medium' : 'text-gray-500 dark:text-gray-400'}`}>
                     {edu.institution}
                   </p>
                </div>
               );
             })}
          </div>
        </div>

      </div>

    </div>
  );
};

export default SkillSection;