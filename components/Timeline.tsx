import React from 'react';
import { Experience } from '../types';
import { Calendar, Briefcase } from 'lucide-react';

interface TimelineProps {
  experiences: Experience[];
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  return (
    <div className="relative max-w-4xl mx-auto px-4">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform md:-translate-x-1/2 rounded-full"></div>

      <div className="space-y-12">
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;
          
          // Determine color classes dynamically or fallback
          const colorClasses: Record<string, string> = {
            'teacher-red': 'bg-teacher-red text-white',
            'teacher-blue': 'bg-teacher-blue text-white',
            'teacher-teal': 'bg-teacher-teal text-white',
            'teacher-yellow': 'bg-teacher-yellow text-teacher-dark',
          };
          
          const badgeColor = colorClasses[exp.color] || 'bg-gray-500 text-white';
          const borderColor = exp.color === 'teacher-yellow' ? 'border-teacher-yellow' : 
                              exp.color === 'teacher-red' ? 'border-teacher-red' :
                              exp.color === 'teacher-blue' ? 'border-teacher-blue' : 'border-teacher-teal';

          return (
            <div key={exp.id} className={`relative flex flex-col md:flex-row ${isLeft ? 'md:flex-row-reverse' : ''} items-start md:items-center w-full`}>
              
              {/* Spacer for desktop alignment */}
              <div className="hidden md:block md:w-1/2" />

              {/* Dot on timeline */}
              <div className={`absolute left-4 md:left-1/2 w-8 h-8 rounded-full border-4 border-white shadow-md transform -translate-x-1/2 z-10 flex items-center justify-center ${badgeColor}`}>
                <div className="w-2 h-2 bg-current rounded-full"></div>
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isLeft ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                <div className={`bg-white p-6 rounded-3xl shadow-lg border-b-4 ${borderColor} transition-transform hover:-translate-y-1 duration-300`}>
                  <div className={`flex flex-col gap-1 mb-3 ${isLeft ? 'md:items-end' : 'md:items-start'}`}>
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${badgeColor} w-fit`}>
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <h3 className="font-display text-xl font-bold text-teacher-dark">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-gray-500 font-medium text-sm">
                      <Briefcase size={14} />
                      {exp.company}
                    </div>
                  </div>
                  <ul className={`space-y-2 text-gray-600 text-sm ${isLeft ? 'md:text-right' : ''}`}>
                    {exp.description.map((desc, i) => (
                      <li key={i} className="leading-relaxed">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;