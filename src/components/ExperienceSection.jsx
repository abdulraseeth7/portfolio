import React from 'react';
import LilacStar from './LilacStar';
import { Briefcase, Calendar, MapPin, CheckCircle, Award } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      role: 'Full Stack Development Intern',
      organization: 'JAZ INFOTECH',
      period: 'Status: Completed',
      type: 'Internship',
      location: 'India',
      points: [
        'Completed hands-on Full Stack Development internship, working with React.js, Node.js, Express.js, MySQL, REST APIs, and Tailwind CSS to build responsive web applications and backend APIs.',
        'Engineered reusable React frontend components and structured RESTful server routing pipelines.',
        'Collaborated on database schema design, CRUD operations, and responsive web integration.'
      ],
      skills: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'REST APIs', 'Tailwind CSS']
    },
    {
      role: 'Basic Web Development Intern',
      organization: 'Smart Tech',
      period: 'Certification',
      type: 'Internship & Training',
      location: 'India',
      points: [
        'Completed Basic Web Development Internship certification with hands-on focus on web technologies.',
        'Mastered foundational web layout principles, semantic HTML5 structure, CSS3 styling, and JavaScript interactivity.'
      ],
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design']
    },
    {
      role: 'B.Sc. Computer Science',
      organization: 'Sadakathullah Appa College',
      period: 'Expected: 2026',
      type: 'Degree Education',
      location: 'Tirunelveli, Tamil Nadu',
      points: [
        'Strong academic foundation in Data Structures & Algorithms, Object-Oriented Programming (OOP), Relational Database Management Systems (DBMS), SDLC, and Agile Methodology.',
        'Built full-stack web projects and machine learning solutions including customer segmentation and predictive ML models.'
      ],
      skills: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'SDLC', 'Agile Methodology']
    }
  ];

  return (
    <section id="experience" className="relative bg-grid-paper pt-16 pb-24 overflow-hidden select-none">
      
      {/* Lilac Stars */}
      <div className="absolute top-12 left-12 z-10 animate-float-slow">
        <LilacStar className="w-12 h-12" rotation={-10} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Header */}
        <div className="mb-12 border-b-2 border-ink pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-lime text-ink text-xs font-archivo uppercase px-2.5 py-0.5 rounded shadow-sm border border-ink">
                Milestones
              </span>
              <span className="text-xs font-mono text-ink/60 uppercase tracking-wider">
                // CAREER &amp; DEVELOPMENT CHRONOLOGY
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-archivo text-ink tracking-tight uppercase">
              EXPERIENCE &amp; JOURNEY
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-ink/70 font-sans max-w-md">
            A solid progression of technical execution, real client delivery, and continuous full-stack craftsmanship.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-white/95 backdrop-blur-sm border-2 border-ink rounded-xl p-6 sm:p-8 shadow-paper relative hover:-translate-y-1 transition-all"
            >
              {/* Year Tag Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-ink/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-ink text-lime rounded-lg flex items-center justify-center font-archivo text-sm shadow-sm">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="font-archivo text-xl sm:text-2xl text-ink uppercase tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-ink/70">
                      {exp.organization}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-ink/70 shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-ink/60" />
                  <span className="bg-lime px-2.5 py-1 rounded font-bold text-ink border border-ink/20">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2 mt-4 text-xs sm:text-sm text-ink/80 font-sans">
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-lime-dark shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Footer */}
              <div className="mt-5 pt-3 border-t border-ink/10 flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono uppercase text-ink/50 tracking-wider">
                  Technologies:
                </span>
                {exp.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="bg-black/5 text-ink text-[11px] font-mono px-2.5 py-0.5 rounded border border-black/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
