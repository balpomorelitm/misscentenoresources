import React from 'react';
import { personalInfo } from '../constants';

const Hero: React.FC = () => {
  // Colors for the dancing letters
  const letterColors = [
    'hover:text-teacher-red',
    'hover:text-teacher-blue',
    'hover:text-teacher-yellow',
    'hover:text-teacher-teal',
    'hover:text-orange-500',
    'hover:text-purple-500',
  ];

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-10 px-4 transition-colors duration-300">
      {/* Background decorations - Vivid and Soft */}
      <div className="absolute top-[-10%] left-[-5%] w-[20rem] md:w-[30rem] h-[20rem] md:h-[30rem] bg-teacher-yellow/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse dark:opacity-20"></div>
      <div className="absolute top-[20%] right-[-10%] w-[15rem] md:w-[25rem] h-[15rem] md:h-[25rem] bg-teacher-red/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse dark:opacity-20" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[25rem] md:w-[35rem] h-[25rem] md:h-[35rem] bg-teacher-teal/15 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse dark:opacity-20" style={{ animationDelay: '2s' }}></div>
      
      {/* Artistic squiggles using SVG */}
      <svg className="absolute top-20 left-5 md:left-10 w-16 h-16 md:w-24 md:h-24 text-teacher-blue/20 -rotate-12 dark:text-white/10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10,50 Q25,25 40,50 T70,50 T100,50" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
      </svg>
      <svg className="absolute bottom-20 right-5 md:right-10 w-20 h-20 md:w-32 md:h-32 text-teacher-yellow/30 rotate-45 dark:text-white/10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
         <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" strokeDasharray="10 10" />
      </svg>

      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Photo Container */}
        <div className="relative group flex-shrink-0 mt-4 md:mt-0">
           <div className="absolute inset-0 bg-teacher-yellow rounded-[2rem] rotate-6 transform transition-transform group-hover:rotate-3"></div>
           <div className="absolute inset-0 bg-teacher-blue rounded-[2rem] -rotate-3 transform transition-transform group-hover:-rotate-1"></div>
           <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-[2rem] overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl blob-shape bg-gray-200">
             <img 
               src="./images/profile.webp"
               alt={personalInfo.name} 
               className="w-full h-full object-cover"
             />
           </div>
           <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 md:right-auto md:left-auto bg-white dark:bg-slate-800 px-4 md:px-6 py-2 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md shadow-lg rotate-[-5deg]">
              <span className="font-handwriting font-bold text-teacher-red text-2xl md:text-3xl">¡Hola!</span>
           </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-4 md:space-y-6 w-full px-2 md:px-0">
          <div>
            <div className="inline-block px-3 py-1 bg-white/60 dark:bg-white/10 backdrop-blur-sm rounded-full border border-teacher-blue/20 dark:border-white/10 mb-2 md:mb-4">
               <h2 className="font-display text-xs md:text-sm tracking-widest text-teacher-blue dark:text-teacher-teal font-bold uppercase">Student Resources</h2>
            </div>
            
            {/* Interactive Animated Name */}
            <h1 className="font-handwriting font-bold text-4xl sm:text-5xl md:text-4xl lg:text-8xl text-teacher-dark dark:text-white leading-tight whitespace-nowrap py-2 cursor-default select-none">
              {personalInfo.name.split('').map((char, index) => {
                // Handle spaces
                if (char === ' ') return <span key={index} className="inline-block w-3 md:w-6"></span>;
                
                // Get random color from array based on index
                const colorClass = letterColors[index % letterColors.length];
                
                return (
                  <span 
                    key={index} 
                    className={`inline-block transition-all duration-200 hover:-translate-y-3 hover:scale-110 ${colorClass}`}
                  >
                    {char}
                  </span>
                );
              })}
            </h1>
          </div>
          
          <p className="font-sans text-base sm:text-base md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
            {personalInfo.summary}
          </p>

        </div>
      </div>
    </section>
  );
};

export default Hero;
