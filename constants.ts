import { Experience, Education, SkillCategory, Language, PersonalInfo } from './types';

export const personalInfo: PersonalInfo = {
  name: "Raquel M. Centeno",
  title: "Spanish & Art Teacher",
  summary: "Welcome students! Use the search bar or click a category to filter resources by skill (oral, grammar, games, listening, reading). Click any card to open the activity.",
  contact: {
    email: "rmartinezcenteno@hotmail.com",
    phone: "+852 9685 6173",
    location: "Hong Kong",
  },
  hobbies: [
    "Cooking Traditional Hispanic Dishes",
    "Zentangle Art",
    "Rock Climbing & Hiking",
    "Family Time"
  ]
};

export const experiences: Experience[] = [
  {
    id: "0",
    role: "Spanish Teacher & Class Teacher",
    company: "Dalton School",
    period: "2025",
    description: [
      "Spanish teacher for P1-P4.",
      "General Studies Teacher for P2 & P3."
    ],
    color: "teacher-yellow"
  },
  {
    id: "1",
    role: "Spanish Teacher",
    company: "Yu Chun Keung Memorial College N. 2",
    period: "2024 - 2025",
    description: ["Prepared students for the HKDSE, Category C – Spanish diploma DELE A2-B1."],
    color: "teacher-red"
  },
  {
    id: "2",
    role: "Head of Spanish Department & Teacher",
    company: "Rosaryhill Secondary School",
    period: "2021 - 2024",
    description: [
      "Taught F1-F5 Spanish, F4-F5 Aesthetic Teacher Development, arts.",
      "Coordinated the Spanish program, including creating schemes of work and exams.",
      "Prepared students for A Level Cambridge exams and DELE Escolar A2-B1.",
      "Organized activities and trained students for Spanish Open Day."
    ],
    color: "teacher-blue"
  },
  {
    id: "3",
    role: "Kindergarten Teacher",
    company: "Karamäen Päiväkoti, Finland",
    period: "2020 - 2021",
    description: [
      "Monitored and evaluated students' performance and progress.",
      "Provided appropriate feedback to parents regarding their child's development."
    ],
    color: "teacher-teal"
  },
  {
    id: "4",
    role: "Head of Spanish Department & Teacher",
    company: "Rosaryhill Primary and Kindergarten School",
    period: "2010 - 2020",
    description: [
      "Established the Spanish Programme, coordinating a team of six teachers.",
      "Guided curriculum implementation, materials development, and supported classroom management.",
      "Taught Spanish to students ranging from P1 to P3, KG, Nursery, and Upper.",
      "Conducted parent orientation sessions and maintained regular communication.",
      "Organized and supervised Spanish Study Trips to Spain and Spanish Open Day events."
    ],
    color: "teacher-yellow"
  },
  {
    id: "5",
    role: "Part Time Spanish Teacher",
    company: "University of Hong Kong (HKU) SPACE / School of Modern Languages",
    period: "2010 - 2012",
    description: ["Taught beginner levels F1-F3 at several Secondary schools in Hong Kong."],
    color: "teacher-red"
  },
  {
    id: "6",
    role: "Ongoing Part Time Teacher",
    company: "Several Vocational & Continuing Education Institutions",
    period: "2007 - Ongoing",
    description: [
      "The Chinese University of Hong Kong (CUHK), King's College.",
      "Previous: City University (SCOPE), HKU SPACE, HKBU, Hispanic Society."
    ],
    color: "teacher-blue"
  },
  {
    id: "7",
    role: "Teacher",
    company: "International Tutorial Center",
    period: "2006 - 2010",
    description: ["Prepared students for GCE, GCSE, IGCSE Exams."],
    color: "teacher-teal"
  }
];

export const education: Education[] = [
  {
    id: "7",
    year: "2025",
    title: "Technology and Living - Food Science and Technology",
    institution: "Education Bureau of Hong Kong"
  },
  {
    id: "6",
    year: "2024",
    title: "Basic Law and National Security Law Test",
    institution: "HK Qualifications",
    highlight: true
  },
  {
    id: "1",
    year: "2011",
    title: "DELE A1 Examiner",
    institution: "Instituto Cervantes, Hong Kong"
  },
  {
    id: "2",
    year: "2011",
    title: "IV Teacher Training Workshop",
    institution: "Instituto Cervantes of Beijing, Hong Kong"
  },
  {
    id: "3",
    year: "2011",
    title: "Teaching Spanish Workshop",
    institution: "Dept. of Education of Spain in China"
  },
  {
    id: "4",
    year: "2010",
    title: "Teacher Trainer Course",
    institution: "Dept. of Education of Spain in China"
  },
  {
    id: "5",
    year: "1999 - 2002",
    title: "Bachelor’s in early childhood of education",
    institution: "C.E.S. Don Bosco University School (Complutense University of Madrid)"
  }
];

export const skills: SkillCategory[] = [
  {
    category: "Teaching",
    skills: ["Curriculum Development", "DELE Prep", "Classroom Management", "Online Teaching"],
    icon: "BookOpen"
  },
  {
    category: "Soft Skills",
    skills: ["Team Leadership", "Cultural Awareness", "Flexibility", "Parent Communication"],
    icon: "HeartHandshake"
  },
  {
    category: "Arts & Creative",
    skills: ["Aesthetic Development", "Event Organization", "Materials Design"],
    icon: "Palette"
  }
];

export const languages: Language[] = [
  { language: "Spanish", level: "Native", percentage: 100 },
  { language: "English", level: "B2 - Upper Intermediate", percentage: 75 },
  { language: "Finnish", level: "B1 - Intermediate", percentage: 50 },
];
