import { Resource, ResourceCategory } from './components/ResourcesPage';

/**
 * Resource Bank for Raquel MC materials
 * 
 * Categories:
 * - 'oral': Oral practice and simulators
 * - 'grammar': Grammar workbooks and exercises
 * - 'games': Interactive games
 * - 'exam': Exam-style simulations
 * - 'planner': Course planners and calendars
 * - 'book-summary': Class topic summaries
 * - 'listening': Listening comprehension practice
 * - 'reading': Reading comprehension practice
 * - 'grammar-guide': Complete grammar guide
 * - 'text-types': Text type examples
 */

export const resourcesData: Resource[] = [
  // ==========================================
  // ORAL PRACTICE
  // ==========================================
  {
    id: 'oral-vocab-glossary',
    title: 'Master Bilingual Glossary Level 7',
    description: 'Complete vocabulary organized by core themes with translations and examples to reach the maximum level.',
    category: 'oral',
    htmlFile: './resources/oral-glosario-vocabulario-nivel7.html',
    tags: ['vocabulary', 'glossary', 'bilingual', 'level 7', 'core themes'],
    difficulty: 'advanced',
    dateAdded: '2026-01-11'
  },
  {
    id: 'oral-core-themes',
    title: 'Pro Simulator: Core Themes',
    description: 'Complete interactive guide with the 5 core themes: Identities, Experiences, Human Ingenuity, Social Organization and Planet.',
    category: 'oral',
    htmlFile: './resources/oral-temas-troncales-guia-completa.html',
    tags: ['core themes', 'identities', 'experiences', 'timer', 'simulator'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'oral-individual',
    title: 'Oral Practice: The Individual',
    description: 'Oral practice exercises focused on personal identity, characteristics and descriptions.',
    category: 'oral',
    htmlFile: './resources/practica-oral-individuo.html',
    tags: ['individual', 'identity', 'personal description', 'presentation'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },
  {
    id: 'oral-city',
    title: 'Oral Practice: City & Services',
    description: 'Simulator with questions about the city, public services, transport and locations. Includes notes and level 7 model answers.',
    category: 'oral',
    htmlFile: './resources/practica-oral-ciudad-servicios.html',
    tags: ['city', 'services', 'transport', 'directions', 'locations'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'oral-food',
    title: 'Oral Practice: Food & Daily Routine',
    description: 'Exercises about food, typical dishes, schedules and daily routines in the Spanish-speaking world.',
    category: 'oral',
    htmlFile: './resources/practica-oral-comida-rutina.html',
    tags: ['food', 'routine', 'schedules', 'diet', 'daily life'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },
  {
    id: 'oral-education',
    title: 'Oral Practice: Education & Work',
    description: 'Practice vocabulary and expressions related to the education system, professions and work.',
    category: 'oral',
    htmlFile: './resources/practica-oral-educacion-trabajo.html',
    tags: ['education', 'work', 'professions', 'school', 'university'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'oral-environment',
    title: 'Oral Practice: Environment',
    description: 'Exercises on ecology, environmental issues, recycling and sustainability for "Sharing the Planet".',
    category: 'oral',
    htmlFile: './resources/practica-oral-medio-ambiente.html',
    tags: ['environment', 'ecology', 'recycling', 'sustainability', 'planet'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'oral-leisure',
    title: 'Oral Practice: Leisure & Travel',
    description: 'Simulator with questions about free time, hobbies, holidays and travel experiences.',
    category: 'oral',
    htmlFile: './resources/practica-oral-ocio-viajes.html',
    tags: ['leisure', 'travel', 'holidays', 'free time', 'hobbies'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'oral-health',
    title: 'Oral Practice: Health & Emergencies',
    description: 'Vocabulary and situations related to health, the human body, medical visits and emergencies.',
    category: 'oral',
    htmlFile: './resources/practica-oral-salud-emergencias.html',
    tags: ['health', 'emergencies', 'doctor', 'body', 'hospital'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'oral-integrated',
    title: 'Oral Practice: Integrated Block',
    description: 'Full simulation combining three thematic blocks: Leisure, Technology and Travel. Includes 34 questions with recording.',
    category: 'oral',
    htmlFile: './resources/practica-oral-bloque-integrado.html',
    tags: ['integrated', 'leisure', 'technology', 'travel', 'recording'],
    difficulty: 'advanced',
    dateAdded: '2026-01-11'
  },
  {
    id: 'oral-simulator-v1',
    title: 'Oral Simulator v1: Basic Themes',
    description: 'First version of the simulator with 5 core themes navigation and timer.',
    category: 'oral',
    htmlFile: './resources/simulador-oral-v1-temas-basicos.html',
    tags: ['simulator', 'basic themes', '5 themes', 'navigation'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'oral-simulator-v2',
    title: 'Oral Simulator v2: Wellbeing',
    description: 'Second version focused on wellbeing, health and lifestyle themes.',
    category: 'oral',
    htmlFile: './resources/simulador-oral-v2-bienestar.html',
    tags: ['simulator', 'wellbeing', 'health', 'lifestyle'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'oral-simulator-v3',
    title: 'Oral Simulator v3: Advanced',
    description: 'Advanced version with more complex questions and higher level vocabulary.',
    category: 'oral',
    htmlFile: './resources/simulador-oral-v3-avanzado.html',
    tags: ['simulator', 'advanced', 'higher level', 'complex'],
    difficulty: 'advanced',
    dateAdded: '2026-01-11'
  },
  {
    id: 'oral-practice-basic',
    title: 'Simulation Practice #1: Basic',
    description: 'Basic simulation exercises for students starting oral exam preparation.',
    category: 'oral',
    htmlFile: './resources/simulacro-practica-1-basico.html',
    tags: ['practice', 'basic', 'beginner', 'introduction'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },
  {
    id: 'oral-practice-dialogues',
    title: 'Simulation Practice #2: Dialogues',
    description: 'Exercises focused on the dialogue and conversation part of the oral exam.',
    category: 'oral',
    htmlFile: './resources/simulacro-practica-2-dialogos.html',
    tags: ['practice', 'dialogues', 'conversation', 'interaction'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'oral-practice-traditions',
    title: 'Simulation Practice #3: Traditions',
    description: 'Simulation focused on culture and traditions of the Spanish-speaking world.',
    category: 'oral',
    htmlFile: './resources/simulacro-practica-3-tradiciones.html',
    tags: ['practice', 'traditions', 'culture', 'festivals', 'customs'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },

  // ==========================================
  // EXAM PRACTICE
  // ==========================================
  {
    id: 'exam-simulation-1',
    title: 'Full Exam Simulation #1',
    description: 'Complete preparation platform with multiple visual stimulus variants, time control and on-screen guide.',
    category: 'exam',
    htmlFile: './resources/simulacro-examen-1-completo.html',
    tags: ['simulation', 'exam', 'variants', 'timer', 'visual stimuli'],
    difficulty: 'advanced',
    dateAdded: '2026-01-11'
  },
  {
    id: 'exam-simulation-2',
    title: 'Full Exam Simulation #2: Timer',
    description: 'Version 3.0 with 3 exam variants, 15+ visual stimuli and an exam timer with exact times.',
    category: 'exam',
    htmlFile: './resources/simulacro-examen-2-cronometro.html',
    tags: ['simulation', 'exam', 'timer', 'variants', '15 minutes'],
    difficulty: 'advanced',
    dateAdded: '2026-01-11'
  },
  {
    id: 'exam-simulation-3',
    title: 'Full Exam Simulation #3: Variants',
    description: 'Third version with new images and questions for practice without repetition.',
    category: 'exam',
    htmlFile: './resources/simulacro-examen-3-variantes.html',
    tags: ['simulation', 'exam', 'variants', 'new images'],
    difficulty: 'advanced',
    dateAdded: '2026-01-11'
  },
  {
    id: 'exam-simulation-4',
    title: 'Full Exam Simulation #4: Extra',
    description: 'Extra simulation material with additional stimuli for intensive practice.',
    category: 'exam',
    htmlFile: './resources/simulacro-examen-4-extra.html',
    tags: ['simulation', 'exam', 'extra', 'intensive'],
    difficulty: 'advanced',
    dateAdded: '2026-01-11'
  },
  {
    id: 'exam-class-aligned',
    title: 'Class-Aligned Practice',
    description: 'Exercises aligned with class evaluation criteria.',
    category: 'exam',
    htmlFile: './resources/simulacro-practica-4-alineacion.html',
    tags: ['practice', 'class-aligned', 'criteria', 'evaluation'],
    difficulty: 'advanced',
    dateAdded: '2026-01-11'
  },

  // ==========================================
  // GRAMMAR
  // ==========================================
  {
    id: 'grammar-nouns',
    title: 'Grammar: Nouns (Sustantivos)',
    description: 'Interactive workbook on Spanish nouns - gender, number and articles.',
    category: 'grammar',
    htmlFile: './resources/grammar-nouns-basics.html',
    tags: ['nouns', 'gender', 'articles', 'singular', 'plural'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-nouns-practice',
    title: 'Grammar: Nouns Practice',
    description: 'Practice exercises for Spanish nouns and article agreement.',
    category: 'grammar',
    htmlFile: './resources/grammar-nouns-practice.html',
    tags: ['nouns', 'practice', 'exercises', 'articles'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-adjectives',
    title: 'Grammar: Adjectives Workbook',
    description: 'Complete workbook on Spanish adjectives - agreement, position and types.',
    category: 'grammar',
    htmlFile: './resources/grammar-adjectives-workbook.html',
    tags: ['adjectives', 'agreement', 'position', 'descriptive'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-demonstratives',
    title: 'Grammar: Demonstrative Adjectives',
    description: 'Interactive workbook on demonstrative adjectives (este, ese, aquel).',
    category: 'grammar',
    htmlFile: './resources/grammar-demonstrative-adjectives.html',
    tags: ['demonstratives', 'este', 'ese', 'aquel', 'adjectives'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-comparatives',
    title: 'Grammar: Comparatives Workbook',
    description: 'Interactive exercises on comparisons (más que, menos que, tan como).',
    category: 'grammar',
    htmlFile: './resources/grammar-comparatives-workbook.html',
    tags: ['comparatives', 'más que', 'menos que', 'comparisons'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-ser-tener',
    title: 'Grammar: Ser, Tener & Llamarse',
    description: 'Practice with essential verbs ser, tener and llamarse.',
    category: 'grammar',
    htmlFile: './resources/grammar-ser-tener-llamarse.html',
    tags: ['ser', 'tener', 'llamarse', 'verbs', 'present tense'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-ser-tener-v2',
    title: 'Grammar: Ser, Tener & Llamarse v2',
    description: 'Updated version with more practice on ser, tener and llamarse.',
    category: 'grammar',
    htmlFile: './resources/grammar-ser-tener-llamarse-v2.html',
    tags: ['ser', 'tener', 'llamarse', 'verbs', 'updated'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-ser-tener-def',
    title: 'Grammar: Ser, Tener & Llamarse (Definitive)',
    description: 'Definitive version with comprehensive practice on essential verbs.',
    category: 'grammar',
    htmlFile: './resources/grammar-ser-tener-llamarse-definitive.html',
    tags: ['ser', 'tener', 'llamarse', 'verbs', 'definitive'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-interrogatives',
    title: 'Grammar: Question Words',
    description: 'Practice with interrogative words (qué, quién, dónde, cuándo, etc.).',
    category: 'grammar',
    htmlFile: './resources/grammar-interrogatives.html',
    tags: ['interrogatives', 'question words', 'qué', 'quién', 'dónde'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-interrogatives-practice',
    title: 'Grammar: Question Words Practice',
    description: 'Extended practice exercises for question words.',
    category: 'grammar',
    htmlFile: './resources/grammar-interrogatives-practice.html',
    tags: ['interrogatives', 'practice', 'questions', 'exercises'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-complete',
    title: 'Grammar: Complete Workbook',
    description: 'Comprehensive grammar workbook covering all beginner grammar topics with tabs.',
    category: 'grammar',
    htmlFile: './resources/grammar-complete-workbook.html',
    tags: ['complete', 'workbook', 'all topics', 'comprehensive'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-unit1-extended',
    title: 'Grammar: Unit 1 Extended',
    description: 'Extended materials for grammar unit 1 with additional exercises.',
    category: 'grammar',
    htmlFile: './resources/grammar-unit1-extended.html',
    tags: ['unit 1', 'extended', 'additional', 'exercises'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },

  // ==========================================
  // GAMES
  // ==========================================
  {
    id: 'game-directions',
    title: 'Interactive Game: City Navigation Mission',
    description: 'Interactive city navigation game to practice giving and understanding directions in Spanish. Navigate through the city to complete missions.',
    category: 'games',
    htmlFile: './resources/game-directions-mission.html',
    tags: ['directions', 'city', 'navigation', 'interactive', 'map', 'game'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },
  {
    id: 'game-conjugator',
    title: 'External Game: The Conjugator',
    description: 'A fun interactive game to practice Spanish verb conjugations. Master your verb tenses and forms through engaging gameplay.',
    category: 'games',
    htmlFile: 'https://conjugator.pablotorrado.site/',
    tags: ['verbs', 'conjugation', 'grammar', 'interactive', 'external'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },

  // ==========================================
  // PLANNERS
  // ==========================================
  {
    id: 'planner-course',
    title: 'Course Planner',
    description: 'Comprehensive course planning tool with detailed scheduling.',
    category: 'planner',
    htmlFile: './resources/planner-course.html',
    tags: ['planner', 'course', 'scheduling', 'syllabus'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'planner-detailed',
    title: 'Detailed Calendar Planner',
    description: 'Detailed calendar with event planning capabilities.',
    category: 'planner',
    htmlFile: './resources/planner-detailed-calendar.html',
    tags: ['calendar', 'detailed', 'events', 'planning'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },
  {
    id: 'planner-audio',
    title: 'Audio Calendar Planner',
    description: 'Calendar planner with audio pronunciation features.',
    category: 'planner',
    htmlFile: './resources/planner-audio-calendar.html',
    tags: ['calendar', 'audio', 'pronunciation', 'planner'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },

  // ==========================================
  // BOOK SUMMARY (class materials Beginner Spanish)
  // ==========================================
  {
    id: 'book-unit01',
    title: 'Unit 1: My World',
    description: 'Summary of Unit 1 - Personal information, introductions, family and friends.',
    category: 'book-summary',
    htmlFile: './resources/book-summary-unit01.html',
    tags: ['unit 1', 'class materials', 'personal info', 'introductions', 'family'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },
  {
    id: 'book-unit02',
    title: 'Unit 2: Daily Life',
    description: 'Summary of Unit 2 - Daily routines, schedules and time expressions.',
    category: 'book-summary',
    htmlFile: './resources/book-summary-unit02.html',
    tags: ['unit 2', 'class materials', 'routines', 'daily life', 'time'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },
  {
    id: 'book-unit03',
    title: 'Unit 3: School Life',
    description: 'Summary of Unit 3 - School subjects, education system and classroom vocabulary.',
    category: 'book-summary',
    htmlFile: './resources/book-summary-unit03.html',
    tags: ['unit 3', 'class materials', 'school', 'education', 'subjects'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },
  {
    id: 'book-unit04',
    title: 'Unit 4: Home & Living',
    description: 'Summary of Unit 4 - House, rooms, furniture and describing where you live.',
    category: 'book-summary',
    htmlFile: './resources/book-summary-unit04.html',
    tags: ['unit 4', 'class materials', 'home', 'house', 'rooms'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },
  {
    id: 'book-unit05',
    title: 'Unit 5: Free Time',
    description: 'Summary of Unit 5 - Hobbies, leisure activities and entertainment.',
    category: 'book-summary',
    htmlFile: './resources/book-summary-unit05.html',
    tags: ['unit 5', 'class materials', 'free time', 'hobbies', 'leisure'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },
  {
    id: 'book-unit06',
    title: 'Unit 6: Food & Drink',
    description: 'Summary of Unit 6 - Food, meals, restaurants and eating habits.',
    category: 'book-summary',
    htmlFile: './resources/book-summary-unit06.html',
    tags: ['unit 6', 'class materials', 'food', 'meals', 'restaurant'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },
  {
    id: 'book-unit07',
    title: 'Unit 7: Health & Wellbeing',
    description: 'Summary of Unit 7 - Body parts, health, illness and medical vocabulary.',
    category: 'book-summary',
    htmlFile: './resources/book-summary-unit07.html',
    tags: ['unit 7', 'class materials', 'health', 'body', 'wellbeing'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'book-unit08',
    title: 'Unit 8: Shopping',
    description: 'Summary of Unit 8 - Shopping, clothes, prices and transactions.',
    category: 'book-summary',
    htmlFile: './resources/book-summary-unit08.html',
    tags: ['unit 8', 'class materials', 'shopping', 'clothes', 'money'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'book-unit09',
    title: 'Unit 9: Transport & Travel',
    description: 'Summary of Unit 9 - Transport, travel, directions and tourism.',
    category: 'book-summary',
    htmlFile: './resources/book-summary-unit09.html',
    tags: ['unit 9', 'class materials', 'transport', 'travel', 'directions'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'book-unit10',
    title: 'Unit 10: Holidays',
    description: 'Summary of Unit 10 - Holidays, accommodation and vacation vocabulary.',
    category: 'book-summary',
    htmlFile: './resources/book-summary-unit10.html',
    tags: ['unit 10', 'class materials', 'holidays', 'vacation', 'accommodation'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'book-unit11',
    title: 'Unit 11: Environment',
    description: 'Summary of Unit 11 - Environment, nature and ecological issues.',
    category: 'book-summary',
    htmlFile: './resources/book-summary-unit11.html',
    tags: ['unit 11', 'class materials', 'environment', 'nature', 'ecology'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'book-unit12',
    title: 'Unit 12: Work & Careers',
    description: 'Summary of Unit 12 - Jobs, professions and work vocabulary.',
    category: 'book-summary',
    htmlFile: './resources/book-summary-unit12.html',
    tags: ['unit 12', 'class materials', 'work', 'jobs', 'careers'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'book-unit13',
    title: 'Unit 13: Technology',
    description: 'Summary of Unit 13 - Technology, media and communication.',
    category: 'book-summary',
    htmlFile: './resources/book-summary-unit13.html',
    tags: ['unit 13', 'class materials', 'technology', 'media', 'communication'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'book-unit14',
    title: 'Unit 14: Culture & Traditions',
    description: 'Summary of Unit 14 - Hispanic culture, festivals and traditions.',
    category: 'book-summary',
    htmlFile: './resources/book-summary-unit14.html',
    tags: ['unit 14', 'class materials', 'culture', 'traditions', 'festivals'],
    difficulty: 'advanced',
    dateAdded: '2026-01-11'
  },
  {
    id: 'book-unit15',
    title: 'Unit 15: Global Issues',
    description: 'Summary of Unit 15 - Global issues, social topics and current affairs.',
    category: 'book-summary',
    htmlFile: './resources/book-summary-unit15.html',
    tags: ['unit 15', 'class materials', 'global issues', 'social', 'current affairs'],
    difficulty: 'advanced',
    dateAdded: '2026-01-11'
  },

  // ==========================================
  // LISTENING
  // ==========================================
  {
    id: 'listening-practice',
    title: 'Listening Comprehension: Interactive Practice',
    description: 'Listening comprehension practice with timer, canvas notes and audio controls. Includes interview and announcement sections.',
    category: 'listening',
    htmlFile: './resources/listening-practice.html',
    tags: ['listening', 'comprehension', 'practice', 'audio', 'timer', 'canvas'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },

  // ==========================================
  // READING
  // ==========================================
  {
    id: 'reading-test-1',
    title: 'Reading Test: 3 Texts (Diet, Social Media, Reforestation)',
    description: 'Reading comprehension practice with 3 texts covering core themes: Mediterranean diet, social networks, and Costa Rica reforestation project.',
    category: 'reading',
    htmlFile: './resources/reading-test-1.html',
    tags: ['reading', 'comprehension', 'test', 'practice', '3 texts', 'themes'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'reading-exam-december',
    title: 'December Integrated Reading Exam',
    description: 'Complete integrated reading exam from December 20th.',
    category: 'reading',
    htmlFile: './resources/reading-exam-december.html',
    tags: ['reading', 'exam', 'integrated', 'december', 'full test'],
    difficulty: 'advanced',
    dateAdded: '2026-01-11'
  },

  // ==========================================
  // GRAMMAR GUIDE (Point by Point)
  // ==========================================
  {
    id: 'grammar-guide-01',
    title: 'Grammar Guide #1: Nouns',
    description: 'Complete guide on Spanish nouns (el sustantivo) with rules and examples.',
    category: 'grammar-guide',
    htmlFile: './resources/grammar-guide-01-nouns.html',
    tags: ['nouns', 'sustantivo', 'guide', 'rules'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-guide-02',
    title: 'Grammar Guide #2: Possessive Adjectives',
    description: 'Complete guide on possessive adjectives (adjetivos posesivos).',
    category: 'grammar-guide',
    htmlFile: './resources/grammar-guide-02-possessive-adjectives.html',
    tags: ['possessive', 'adjectives', 'mi', 'tu', 'su'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-guide-03',
    title: 'Grammar Guide #3: Ser, Tener & Llamarse',
    description: 'Complete guide on essential verbs ser, tener and llamarse.',
    category: 'grammar-guide',
    htmlFile: './resources/grammar-guide-03-ser-tener-llamarse.html',
    tags: ['ser', 'tener', 'llamarse', 'essential verbs'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-guide-04',
    title: 'Grammar Guide #4: Capitalization & Accents',
    description: 'Complete guide on Spanish capitalization rules and accent marks.',
    category: 'grammar-guide',
    htmlFile: './resources/grammar-guide-04-capitalization-accents.html',
    tags: ['mayúsculas', 'acentos', 'accents', 'capitalization'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-guide-05',
    title: 'Grammar Guide #5: Interrogatives',
    description: 'Complete guide on question words and interrogative forms.',
    category: 'grammar-guide',
    htmlFile: './resources/grammar-guide-05-interrogatives.html',
    tags: ['interrogatives', 'questions', 'qué', 'quién', 'dónde'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-guide-06',
    title: 'Grammar Guide #6: Present Tense & Texts',
    description: 'Complete guide on present tense conjugation and text types.',
    category: 'grammar-guide',
    htmlFile: './resources/grammar-guide-06-present-tense.html',
    tags: ['present tense', 'conjugation', 'texts'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-guide-07',
    title: 'Grammar Guide #7: Present Continuous',
    description: 'Complete guide on present continuous tense (estar + gerundio).',
    category: 'grammar-guide',
    htmlFile: './resources/grammar-guide-07-present-continuous.html',
    tags: ['present continuous', 'gerundio', 'estar', 'progressive'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-guide-08',
    title: 'Grammar Guide #8: Present Perfect',
    description: 'Complete guide on present perfect tense (pretérito perfecto).',
    category: 'grammar-guide',
    htmlFile: './resources/grammar-guide-08-present-perfect.html',
    tags: ['present perfect', 'pretérito perfecto', 'haber', 'participio'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-guide-09',
    title: 'Grammar Guide #9: Preterite',
    description: 'Complete guide on preterite tense (pretérito indefinido).',
    category: 'grammar-guide',
    htmlFile: './resources/grammar-guide-09-preterite.html',
    tags: ['preterite', 'pretérito indefinido', 'past tense'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-guide-10',
    title: 'Grammar Guide #10: Exclamations',
    description: 'Complete guide on exclamatory sentences (oraciones exclamativas).',
    category: 'grammar-guide',
    htmlFile: './resources/grammar-guide-10-exclamations.html',
    tags: ['exclamations', 'qué', 'cuánto', 'exclamatory'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-guide-11',
    title: 'Grammar Guide #11: Past Tense Contrast',
    description: 'Complete guide on contrasting past tenses (preterite vs imperfect).',
    category: 'grammar-guide',
    htmlFile: './resources/grammar-guide-11-past-contrast.html',
    tags: ['past contrast', 'preterite', 'imperfect', 'contraste'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-guide-12',
    title: 'Grammar Guide #12: Imperfect Tense',
    description: 'Complete guide on imperfect tense (pretérito imperfecto).',
    category: 'grammar-guide',
    htmlFile: './resources/grammar-guide-12-imperfect.html',
    tags: ['imperfect', 'pretérito imperfecto', 'past'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-guide-13',
    title: 'Grammar Guide #13: Narrating in the Past',
    description: 'Complete guide on narrating past events and combining past tenses.',
    category: 'grammar-guide',
    htmlFile: './resources/grammar-guide-13.html',
    tags: ['narrating', 'past tenses', 'storytelling', 'unit 13'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-guide-14',
    title: 'Grammar Guide #14: Relative Clauses',
    description: 'Complete guide on relative clauses and pronouns (que, quien, donde, etc.).',
    category: 'grammar-guide',
    htmlFile: './resources/grammar-guide-14.html',
    tags: ['relative clauses', 'que', 'quien', 'donde', 'unit 14'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-guide-15',
    title: 'Grammar Guide #15: Indefinite Adjectives & Pronouns',
    description: 'Complete guide on indefinite adjectives and pronouns (alguno, ninguno, mucho, poco, etc.).',
    category: 'grammar-guide',
    htmlFile: './resources/grammar-guide-15.html',
    tags: ['indefinites', 'alguno', 'ninguno', 'quantifiers', 'unit 15'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-guide-16',
    title: 'Grammar Guide #16: Object Pronouns',
    description: 'Complete guide on direct and indirect object pronouns (lo, la, le, les, etc.).',
    category: 'grammar-guide',
    htmlFile: './resources/grammar-guide-16.html',
    tags: ['object pronouns', 'lo', 'la', 'le', 'direct', 'indirect', 'unit 16'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-guide-17',
    title: 'Grammar Guide #17: Pluperfect',
    description: 'Complete guide on pluperfect tense (pluscuamperfecto).',
    category: 'grammar-guide',
    htmlFile: './resources/grammar-guide-17-pluperfect.html',
    tags: ['pluperfect', 'pluscuamperfecto', 'past perfect'],
    difficulty: 'advanced',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-guide-18',
    title: 'Grammar Guide #18: Adverbs',
    description: 'Complete guide on Spanish adverbs (adverbios).',
    category: 'grammar-guide',
    htmlFile: './resources/grammar-guide-18-adverbs.html',
    tags: ['adverbs', 'adverbios', 'manner', 'time', 'place'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-guide-19',
    title: 'Grammar Guide #19: Text Types',
    description: 'Complete guide on different types of texts in Spanish.',
    category: 'grammar-guide',
    htmlFile: './resources/grammar-guide-19-text-types.html',
    tags: ['text types', 'tipos de texto', 'writing', 'formats'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-guide-20',
    title: 'Grammar Guide #20: Verbal Periphrasis',
    description: 'Complete guide on verbal periphrasis (perífrasis verbales).',
    category: 'grammar-guide',
    htmlFile: './resources/grammar-guide-20-verbal-periphrasis.html',
    tags: ['periphrasis', 'perífrasis', 'ir a', 'tener que', 'haber que'],
    difficulty: 'advanced',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-guide-21',
    title: 'Grammar Guide #21: Formal Imperative',
    description: 'Complete guide on formal commands (usted/ustedes imperative forms).',
    category: 'grammar-guide',
    htmlFile: './resources/grammar-guide-21.html',
    tags: ['imperative', 'formal commands', 'usted', 'ustedes', 'unit 21'],
    difficulty: 'advanced',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-guide-22',
    title: 'Grammar Guide #22: Comparing Text Types',
    description: 'Complete guide on different text types and their comparison.',
    category: 'grammar-guide',
    htmlFile: './resources/grammar-guide-22.html',
    tags: ['text types', 'comparison', 'writing formats', 'unit 22'],
    difficulty: 'advanced',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-guide-23',
    title: 'Grammar Guide #23: Conditional Tense',
    description: 'Complete guide on conditional tense (condicional simple).',
    category: 'grammar-guide',
    htmlFile: './resources/grammar-guide-23.html',
    tags: ['conditional', 'condicional', 'hypothetical', 'unit 23'],
    difficulty: 'advanced',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-guide-24',
    title: 'Grammar Guide #24: Present Subjunctive',
    description: 'Complete guide on present subjunctive mood (presente de subjuntivo).',
    category: 'grammar-guide',
    htmlFile: './resources/grammar-guide-24.html',
    tags: ['subjunctive', 'presente subjuntivo', 'mood', 'unit 24'],
    difficulty: 'advanced',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-guide-25',
    title: 'Grammar Guide #25: Prepositions & Connectors',
    description: 'Complete guide on Spanish prepositions and connectors.',
    category: 'grammar-guide',
    htmlFile: './resources/grammar-guide-25.html',
    tags: ['prepositions', 'connectors', 'linking words', 'unit 25'],
    difficulty: 'advanced',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-guide-26',
    title: 'Grammar Guide #26: Expressions & False Friends',
    description: 'Complete guide on Spanish expressions and false cognates (falsos amigos).',
    category: 'grammar-guide',
    htmlFile: './resources/grammar-guide-26.html',
    tags: ['expressions', 'false friends', 'cognates', 'idioms', 'unit 26'],
    difficulty: 'advanced',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-guide-27',
    title: 'Grammar Guide #27: Written Tasks',
    description: 'Complete guide on additional written tasks and practice (más tareas escritas).',
    category: 'grammar-guide',
    htmlFile: './resources/grammar-guide-27.html',
    tags: ['written tasks', 'writing practice', 'essays', 'unit 27'],
    difficulty: 'advanced',
    dateAdded: '2026-01-11'
  },
  {
    id: 'grammar-guide-28',
    title: 'Grammar Guide #28: General Review',
    description: 'Complete general review of all grammar topics (repaso general).',
    category: 'grammar-guide',
    htmlFile: './resources/grammar-guide-28.html',
    tags: ['review', 'repaso', 'comprehensive', 'all topics', 'unit 28'],
    difficulty: 'advanced',
    dateAdded: '2026-01-11'
  },

  // ==========================================
  // TEXT TYPES (Tipología textual)
  // ==========================================
  {
    id: 'text-type-informal-letter',
    title: 'Text Type: Informal Letter',
    description: 'Complete guide and examples for writing informal letters (la carta informal).',
    category: 'text-types',
    htmlFile: './resources/text-type-informal-letter.html',
    tags: ['informal letter', 'carta informal', 'writing', 'format'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },
  {
    id: 'text-type-informal-email',
    title: 'Text Type: Informal Email',
    description: 'Complete guide and examples for writing informal emails (correo informal).',
    category: 'text-types',
    htmlFile: './resources/text-type-informal-email.html',
    tags: ['informal email', 'correo', 'writing', 'communication'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },
  {
    id: 'text-type-blog',
    title: 'Text Type: Blog Post',
    description: 'Complete guide and examples for writing blog posts (el blog).',
    category: 'text-types',
    htmlFile: './resources/text-type-blog.html',
    tags: ['blog', 'blog post', 'writing', 'online'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'text-type-diary',
    title: 'Text Type: Diary Entry',
    description: 'Complete guide and examples for writing diary entries (el diario íntimo).',
    category: 'text-types',
    htmlFile: './resources/text-type-diary.html',
    tags: ['diary', 'diario', 'personal writing', 'journal'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },
  {
    id: 'text-type-forum',
    title: 'Text Type: Forum Post',
    description: 'Complete guide and examples for writing forum posts (el foro).',
    category: 'text-types',
    htmlFile: './resources/text-type-forum.html',
    tags: ['forum', 'foro', 'online discussion', 'writing'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'text-type-postcard',
    title: 'Text Type: Postcard',
    description: 'Complete guide and examples for writing postcards (la postal).',
    category: 'text-types',
    htmlFile: './resources/text-type-postcard.html',
    tags: ['postcard', 'postal', 'short message', 'travel'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },
  {
    id: 'text-type-newspaper-article',
    title: 'Text Type: Newspaper Article',
    description: 'Complete guide and examples for writing newspaper articles (el artículo del periódico).',
    category: 'text-types',
    htmlFile: './resources/text-type-newspaper-article.html',
    tags: ['newspaper', 'article', 'journalism', 'news', 'formal'],
    difficulty: 'advanced',
    dateAdded: '2026-01-11'
  },
  {
    id: 'text-type-brochure',
    title: 'Text Type: Brochure',
    description: 'Complete guide and examples for writing brochures (el folleto).',
    category: 'text-types',
    htmlFile: './resources/text-type-brochure.html',
    tags: ['brochure', 'folleto', 'informative', 'promotional'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'text-type-message-note',
    title: 'Text Type: Message / Note',
    description: 'Complete guide and examples for writing messages and notes (el mensaje o nota).',
    category: 'text-types',
    htmlFile: './resources/text-type-message-note.html',
    tags: ['message', 'note', 'mensaje', 'nota', 'brief'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },
  {
    id: 'text-type-poster',
    title: 'Text Type: Poster',
    description: 'Complete guide and examples for creating posters (el póster).',
    category: 'text-types',
    htmlFile: './resources/text-type-poster.html',
    tags: ['poster', 'póster', 'visual', 'promotional'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'text-type-formal-letter',
    title: 'Text Type: Formal Letter',
    description: 'Complete guide and examples for writing formal letters (la carta formal).',
    category: 'text-types',
    htmlFile: './resources/text-type-formal-letter.html',
    tags: ['formal letter', 'carta formal', 'formal writing', 'business'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'text-type-interview',
    title: 'Text Type: Interview',
    description: 'Complete guide and examples for writing interviews (la entrevista).',
    category: 'text-types',
    htmlFile: './resources/text-type-interview.html',
    tags: ['interview', 'entrevista', 'dialogue', 'questions'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  },
  {
    id: 'text-type-invitation',
    title: 'Text Type: Invitation',
    description: 'Complete guide and examples for writing invitations (la invitación).',
    category: 'text-types',
    htmlFile: './resources/text-type-invitation.html',
    tags: ['invitation', 'invitación', 'event', 'formal'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },
  {
    id: 'text-type-recipe',
    title: 'Text Type: Recipe',
    description: 'Complete guide and examples for writing recipes (la receta).',
    category: 'text-types',
    htmlFile: './resources/text-type-recipe.html',
    tags: ['recipe', 'receta', 'instructions', 'cooking'],
    difficulty: 'beginner',
    dateAdded: '2026-01-11'
  },
  {
    id: 'text-type-advertisement',
    title: 'Text Type: Advertisement',
    description: 'Complete guide and examples for writing advertisements (el anuncio).',
    category: 'text-types',
    htmlFile: './resources/text-type-advertisement.html',
    tags: ['advertisement', 'anuncio', 'promotional', 'persuasive'],
    difficulty: 'intermediate',
    dateAdded: '2026-01-11'
  }
];

/**
 * Helper function to filter resources by category
 */
export const getResourcesByCategory = (category: ResourceCategory): Resource[] => {
  return resourcesData.filter(r => r.category === category);
};

/**
 * Helper function to search resources by tag
 */
export const searchResourcesByTag = (tag: string): Resource[] => {
  return resourcesData.filter(r => 
    r.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
  );
};
