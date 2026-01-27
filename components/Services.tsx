import React from 'react';
import { personalInfo } from '../constants';
import { Video, GraduationCap, Quote, CheckCircle, Users, CalendarCheck } from 'lucide-react';

const Services: React.FC = () => {
  
  const testimonials = [
    {
      id: 1,
      name: "Tiffany Li",
      role: "Diploma Student",
      text: "I was really struggling with Beginner Spanish, but Raquel made everything click! Her patience and structured notes helped me achieve a Level 7 in my final exams. She knows exactly what the examiners are looking for.",
      color: "bg-blue-50 border-blue-100"
    },
    {
      id: 2,
      name: "Mrs. Chan",
      role: "Parent of Lucas (Age 7)",
      text: "My son usually gets bored easily, but he loves Ms. Centeno's online lessons! She uses drawing and games to teach grammar. He is always excited to show me what new Spanish words he learned after class.",
      color: "bg-yellow-50 border-yellow-100"
    },
    {
      id: 3,
      name: "Jason Wong",
      role: "University Student",
      text: "The DELE B1 exam seemed impossible until I started classes with Raquel. We practiced specifically for the oral and written sections, and I passed with high marks. Highly recommended for serious learners.",
      color: "bg-teal-50 border-teal-100"
    },
    {
      id: 4,
      name: "David Cheung",
      role: "Adult Learner",
      text: "I wanted to learn Spanish for my travels to South America. Raquel's lessons are fun, cultural, and very practical. I felt confident ordering food and talking to locals during my trip!",
      color: "bg-red-50 border-red-100"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      
      {/* Services Header */}
      <div className="text-center mb-12">
        <span className="text-teacher-teal font-bold tracking-wider text-sm uppercase mb-2 block">Private Tutoring</span>
        <h2 className="font-display text-4xl font-black text-teacher-dark dark:text-white">Learn With Me</h2>
        <div className="w-16 h-1.5 bg-teacher-teal mx-auto mt-4 rounded-full"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Whether you need serious exam preparation or fun conversational lessons, I tailor my teaching to your goals.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        
        {/* Exam Prep Card */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border-t-8 border-teacher-blue transition-transform hover:-translate-y-2">
          <div className="w-14 h-14 bg-teacher-blue/10 rounded-2xl flex items-center justify-center text-teacher-blue mb-6">
            <GraduationCap size={32} />
          </div>
          <h3 className="font-display text-2xl font-bold text-teacher-dark dark:text-white mb-4">Exam Preparation</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Focused, strategy-based coaching to help you maximize your score. I provide past papers, mock exams, and specific feedback on grading criteria.
          </p>
          <ul className="space-y-3">
            {['DELE (A1 - B2)', 'Beginner Spanish (A1-B1)', 'HKDSE Category C', 'IGCSE / GCSE / A-Level'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-gray-700 dark:text-gray-200 font-medium">
                <CheckCircle size={18} className="text-teacher-teal flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Private Lessons Card */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border-t-8 border-teacher-teal transition-transform hover:-translate-y-2">
          <div className="w-14 h-14 bg-teacher-teal/10 rounded-2xl flex items-center justify-center text-teacher-teal mb-6">
            <Video size={32} />
          </div>
          <h3 className="font-display text-2xl font-bold text-teacher-dark dark:text-white mb-4">Online Private Lessons</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Convenient and engaging Zoom/Google Meet sessions tailored to your age and proficiency level. Learn from the comfort of your home.
          </p>
          <ul className="space-y-3">
             <li className="flex items-center gap-3 text-gray-700 dark:text-gray-200 font-medium">
                <Users size={18} className="text-teacher-blue flex-shrink-0" />
                <span>For <strong>Kids, Teenagers & Adults</strong></span>
             </li>
             <li className="flex items-center gap-3 text-gray-700 dark:text-gray-200 font-medium">
                <CheckCircle size={18} className="text-teacher-blue flex-shrink-0" />
                <span>Conversational Spanish</span>
             </li>
             <li className="flex items-center gap-3 text-gray-700 dark:text-gray-200 font-medium">
                <CheckCircle size={18} className="text-teacher-blue flex-shrink-0" />
                <span>Grammar & Vocabulary Building</span>
             </li>
             <li className="flex items-center gap-3 text-gray-700 dark:text-gray-200 font-medium">
                <CalendarCheck size={18} className="text-teacher-blue flex-shrink-0" />
                <span>Flexible Scheduling</span>
             </li>
          </ul>
        </div>

      </div>

      {/* CTA Button */}
      <div className="text-center mb-24">
        <a 
          href={`mailto:${personalInfo.contact.email}?subject=Inquiry about Private Lessons`}
          className="inline-flex items-center gap-2 bg-teacher-red text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-rose-600 transition-all transform hover:scale-105"
        >
          <Video size={20} />
          Book a Trial Lesson
        </a>
      </div>

      {/* Testimonials Section */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-paper-cream dark:bg-slate-900 px-4 text-sm text-gray-500 uppercase tracking-wider font-bold">What my students say</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {testimonials.map((t) => (
          <div key={t.id} className={`rounded-2xl p-6 border-2 ${t.color} dark:border-gray-700 dark:bg-slate-800 shadow-sm relative`}>
            <Quote size={40} className="absolute top-4 right-4 text-gray-200 dark:text-gray-600" />
            <p className="text-gray-700 dark:text-gray-300 italic mb-4 relative z-10 leading-relaxed">
              "{t.text}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teacher-blue to-teacher-teal flex items-center justify-center text-white font-bold text-sm">
                {t.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-teacher-dark dark:text-white text-sm">{t.name}</h4>
                <span className="text-xs text-gray-500 dark:text-gray-400 uppercase">{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Services;
