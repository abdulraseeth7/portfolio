import React, { useState } from 'react';
import LilacStar from './LilacStar';
import { 
  Code2, 
  Server, 
  Database, 
  GitBranch, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Cpu
} from 'lucide-react';

export default function SkillsSection() {
  const [filter, setFilter] = useState('all');

  // Exact skills from Abdul Raseeth's resume
  const skillsData = [
    { 
      name: 'Python', 
      category: 'languages', 
      level: 'Proficient', 
      exp: 'Core Language',
      code: '01',
      desc: 'Used for full-stack Flask applications, machine learning algorithms, data modeling & backend logic',
      color: '#3776AB',
      bgTag: 'bg-blue-50 text-blue-900 border-blue-300'
    },
    { 
      name: 'C & C++', 
      category: 'languages', 
      level: 'Proficient', 
      exp: 'Core Programming',
      code: '02',
      desc: 'Solid foundation in low-level concepts, memory management, pointers, and algorithm development',
      color: '#00599C',
      bgTag: 'bg-indigo-50 text-indigo-900 border-indigo-300'
    },
    { 
      name: 'JavaScript (ES6+)', 
      category: 'languages', 
      level: 'Advanced', 
      exp: 'Full Stack & Web',
      code: '03',
      desc: 'Async/Await, DOM manipulation, ES6 features, REST API integrations, and functional programming',
      color: '#D97706',
      bgTag: 'bg-amber-50 text-amber-900 border-amber-300'
    },
    { 
      name: 'React.js', 
      category: 'frontend', 
      level: 'Advanced', 
      exp: 'Frontend Library',
      code: '04',
      desc: 'Reusable components, state management, hooks, interactive UI design, and responsive web rendering',
      color: '#087EA4',
      bgTag: 'bg-cyan-50 text-cyan-900 border-cyan-300'
    },
    { 
      name: 'Tailwind CSS', 
      category: 'frontend', 
      level: 'Advanced', 
      exp: 'Utility Styling',
      code: '05',
      desc: 'Custom UI layouts, mobile-first responsive breakpoints, flexbox/grid systems, aesthetic components',
      color: '#0284C7',
      bgTag: 'bg-sky-50 text-sky-900 border-sky-300'
    },
    { 
      name: 'HTML5 & CSS3', 
      category: 'frontend', 
      level: 'Expert', 
      exp: 'Web Standards',
      code: '06',
      desc: 'Semantic page structure, modern flexbox/grid layouts, animations, accessibility (a11y), responsive design',
      color: '#DC2626',
      bgTag: 'bg-rose-50 text-rose-900 border-rose-300'
    },
    { 
      name: 'Node.js & Express.js', 
      category: 'backend', 
      level: 'Proficient', 
      exp: 'JS Runtime & API',
      code: '07',
      desc: 'Event-driven server architecture, RESTful API endpoints, middleware handling, request validation',
      color: '#16A34A',
      bgTag: 'bg-emerald-50 text-emerald-900 border-emerald-300'
    },
    { 
      name: 'Flask', 
      category: 'backend', 
      level: 'Proficient', 
      exp: 'Python Backend',
      code: '08',
      desc: 'Lightweight microservices, ML model API endpoint deployment, routing, and MySQL integration',
      color: '#1F2937',
      bgTag: 'bg-stone-100 text-stone-900 border-stone-300'
    },
    { 
      name: 'REST API', 
      category: 'backend', 
      level: 'Advanced', 
      exp: 'API Architecture',
      code: '09',
      desc: 'CRUD endpoints, JSON payload handling, HTTP status conventions, client-server integration',
      color: '#7C3AED',
      bgTag: 'bg-purple-50 text-purple-900 border-purple-300'
    },
    { 
      name: 'MySQL', 
      category: 'database', 
      level: 'Proficient', 
      exp: 'Relational DB',
      code: '10',
      desc: 'Relational database schemas, normalization, SQL queries, join operations, and data integrity',
      color: '#EA580C',
      bgTag: 'bg-orange-50 text-orange-900 border-orange-300'
    },
    { 
      name: 'LightGBM & GMM', 
      category: 'database', 
      level: 'Proficient', 
      exp: 'Machine Learning',
      code: '11',
      desc: 'Gaussian Mixture Models for customer RFM segmentation & LightGBM for customer churn prediction models',
      color: '#0F172A',
      bgTag: 'bg-slate-100 text-slate-900 border-slate-300'
    },
    { 
      name: 'DSA, OOP & DBMS', 
      category: 'core', 
      level: 'Advanced', 
      exp: 'Core Computer Science',
      code: '12',
      desc: 'Data Structures & Algorithms, Object-Oriented Programming, DBMS principles, SDLC, Agile Methodology',
      color: '#2563EB',
      bgTag: 'bg-blue-50 text-blue-900 border-blue-300'
    },
    { 
      name: 'Git, GitHub & Postman', 
      category: 'core', 
      level: 'Advanced', 
      exp: 'Developer Tools',
      code: '13',
      desc: 'VS Code, Git branching workflows, GitHub repositories, Postman API testing and collection building',
      color: '#181717',
      bgTag: 'bg-zinc-100 text-zinc-900 border-zinc-300'
    },
  ];

  const filteredSkills = filter === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === filter);

  return (
    <section id="skills" className="relative bg-grid-paper pt-16 pb-24 overflow-hidden select-none">
      
      {/* Decorative Lilac Stars */}
      <div className="absolute top-8 left-8 z-10 animate-float-slow">
        <LilacStar className="w-12 h-12" rotation={-12} />
      </div>
      <div className="absolute bottom-12 right-8 z-10 animate-float-reverse">
        <LilacStar className="w-14 h-14" rotation={22} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b-2 border-ink pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-lime text-ink text-xs font-archivo uppercase px-2.5 py-0.5 rounded shadow-sm border border-ink">
                Verified Arsenal
              </span>
              <span className="text-xs font-mono text-ink/60 uppercase tracking-wider">
                // TECHNICAL SKILLS &amp; COMPETENCIES
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-archivo text-ink tracking-tight uppercase">
              TECHNICAL SKILLS
            </h2>
            <p className="mt-2 text-sm sm:text-base text-ink/70 font-sans max-w-xl">
              Hands-on technical stack spanning full-stack web application development, databases, machine learning, and core computer science fundamentals.
            </p>
          </div>

          {/* Editorial Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Skills (13)' },
              { id: 'languages', label: 'Languages' },
              { id: 'frontend', label: 'Frontend' },
              { id: 'backend', label: 'Backend & APIs' },
              { id: 'database', label: 'Database & ML' },
              { id: 'core', label: 'Core & Tools' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`text-xs font-archivo uppercase px-3 py-1.5 rounded-md transition-all ${
                  filter === tab.id
                    ? 'bg-ink text-lime shadow-md -translate-y-0.5'
                    : 'bg-white/80 text-ink hover:bg-white border border-black/15'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tactile Stamp / Specimen Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="sticker-item bg-white/95 backdrop-blur-sm border-2 border-ink rounded-xl p-5 shadow-paper relative flex flex-col justify-between group overflow-hidden"
              style={{
                transform: `rotate(${((index % 5) - 2) * 0.8}deg)`
              }}
            >
              {/* Paper Stamp Notch in Corner */}
              <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                <div className="bg-lime border-b border-l border-ink w-12 h-12 transform rotate-45 translate-x-6 -translate-y-6"></div>
              </div>

              <div>
                {/* Header with Code Number and Category */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-ink/40">
                    #{skill.code}
                  </span>
                  <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${skill.bgTag}`}>
                    {skill.level}
                  </span>
                </div>

                {/* Skill Title */}
                <h3 className="font-archivo text-xl text-ink tracking-tight uppercase group-hover:text-lilac-dark transition-colors flex items-center justify-between">
                  <span>{skill.name}</span>
                </h3>

                <p className="text-[11px] font-mono text-ink/60 uppercase tracking-wider mt-0.5">
                  {skill.exp}
                </p>

                {/* Description */}
                <p className="mt-3 text-xs text-ink/80 leading-relaxed font-sans">
                  {skill.desc}
                </p>
              </div>

              {/* Bottom Stamp bar */}
              <div className="mt-4 pt-3 border-t border-ink/10 flex items-center justify-between text-[11px] font-mono text-ink/60">
                <span className="uppercase tracking-widest text-[9px]">READY FOR PROD</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-lime-dark" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Callout Tape */}
        <div className="mt-12 bg-white border-2 border-ink rounded-xl p-5 shadow-paper-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-lime rounded-lg flex items-center justify-center border border-ink shadow-sm">
              <Sparkles className="w-5 h-5 text-ink" />
            </div>
            <div>
              <h4 className="font-archivo text-sm uppercase text-ink">
                Full-Stack Integration Architecture
              </h4>
              <p className="text-xs text-ink/70">
                From responsive client interfaces down to relational schema indexing and deployment.
              </p>
            </div>
          </div>

          <a 
            href="#projects"
            className="shrink-0 bg-ink hover:bg-black text-lime font-archivo text-xs uppercase px-4 py-2.5 rounded-lg shadow-sm hover:translate-x-1 transition-all flex items-center gap-2"
          >
            <span>See Them In Real Projects</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
