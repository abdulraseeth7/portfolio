import React, { useState } from 'react';
import LilacStar from './LilacStar';
import { 
  ExternalLink, 
  Github, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Building2,
  CheckSquare,
  Globe2
} from 'lucide-react';

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 'ev-charging',
      title: 'EV Charging Website',
      category: 'Web Application',
      tagline: 'Modern responsive EV charging business platform.',
      description: 'Designed and developed a modern responsive EV charging business website. Built reusable React components, custom energy spec sections, and mobile-first layouts.',
      stack: ['React.js', 'Tailwind CSS', 'JavaScript', 'HTML5'],
      highlights: [
        'Designed and developed a modern responsive EV charging business website.',
        'Built reusable React components and responsive UI sections.',
        'Optimized performance and mobile accessibility across viewports.'
      ],
      metrics: {
        design: 'Responsive',
        components: 'Reusable',
        tech: 'React + Tailwind'
      },
      badge: 'WEB APP',
      icon: Zap,
      accent: '#CEEC2E',
      liveUrl: '#',
      githubUrl: 'https://github.com/raseeth'
    },
    {
      id: 'beauty-parlour',
      title: 'Beauty Parlour Website',
      category: 'Client Web Platform',
      tagline: 'Interactive web platform with appointment booking & service showcase.',
      description: 'Developed a responsive beauty parlour website with Home, Services, About, Gallery, Contact, and Appointment booking sections using modular React structure.',
      stack: ['React.js', 'Tailwind CSS', 'JavaScript'],
      highlights: [
        'Developed Home, Services, About, Gallery, Contact, and Appointment sections.',
        'Implemented reusable React components and responsive UI design.',
        'Crafted aesthetic service catalogs and customer inquiry forms.'
      ],
      metrics: {
        sections: '6 Core Pages',
        styling: 'Tailwind CSS',
        type: 'Interactive UI'
      },
      badge: 'CLIENT PLATFORM',
      icon: Layers,
      accent: '#9B7FE6',
      liveUrl: '#',
      githubUrl: 'https://github.com/raseeth'
    },
    {
      id: 'construction-company',
      title: 'Construction Company Website',
      category: 'Corporate Web Platform',
      tagline: 'Professional web showcase for multi-sector construction projects.',
      description: 'Created a professional construction company website covering residential, commercial, industrial, renovation, and interior project categories.',
      stack: ['React.js', 'Tailwind CSS', 'JavaScript'],
      highlights: [
        'Covered residential, commercial, industrial, renovation, and interior projects.',
        'Built responsive sections using reusable React components.',
        'Structured clear project request pipelines and portfolio galleries.'
      ],
      metrics: {
        sectors: '5 Categories',
        architecture: 'Modular React',
        ui: 'Corporate'
      },
      badge: 'BUSINESS SITE',
      icon: Building2,
      accent: '#CEEC2E',
      liveUrl: '#',
      githubUrl: 'https://github.com/raseeth'
    },
    {
      id: 'nile-tiles',
      title: 'Nile Tiles Website',
      category: 'Product Catalog Platform',
      tagline: 'Product-focused tiles store with modern category navigation.',
      description: 'Designed a modern tiles shop website featuring product-focused navigation, responsive catalog layouts, and sleek visual presentation for tile collections.',
      stack: ['React.js', 'Tailwind CSS', 'JavaScript'],
      highlights: [
        'Designed product-focused navigation and catalog display layouts.',
        'Implemented reusable React components and responsive styling.',
        'Optimized customer browsing experience across mobile and desktop.'
      ],
      metrics: {
        focus: 'Product Catalog',
        layout: 'Responsive',
        framework: 'React.js'
      },
      badge: 'PRODUCT CATALOG',
      icon: Globe2,
      accent: '#9B7FE6',
      liveUrl: '#',
      githubUrl: 'https://github.com/raseeth'
    },
    {
      id: 'cloud-crm-ml',
      title: 'All-in-One Cloud-Based CRM System',
      category: 'Full-Stack Machine Learning System',
      tagline: 'Cloud CRM with GMM customer segmentation & LightGBM churn prediction.',
      description: 'Developed a full-stack CRM system for customer segmentation, churn prediction, and relationship management. Integrated GMM clustering based on RFM metrics and LightGBM machine learning models with Flask and MySQL.',
      stack: ['Python', 'Flask', 'MySQL', 'LightGBM', 'GMM', 'RFM Metrics'],
      highlights: [
        'Implemented GMM (Gaussian Mixture Models) customer segmentation using RFM metrics.',
        'Built a LightGBM churn prediction model integrated with Flask backend API & MySQL.',
        'Engineered analytics dashboards, customer relationship tools, and ML modules.'
      ],
      metrics: {
        mlModels: 'LightGBM & GMM',
        backend: 'Flask + MySQL',
        domain: 'ML CRM'
      },
      badge: 'FULL STACK & ML',
      icon: ShieldCheck,
      accent: '#CEEC2E',
      liveUrl: '#',
      githubUrl: 'https://github.com/raseeth'
    }
  ];

  return (
    <section id="projects" className="relative bg-lime-paper text-ink pt-16 pb-24 overflow-hidden select-none">
      
      {/* Decorative Lilac Stars */}
      <div className="absolute top-10 right-10 z-10 animate-float-slow">
        <LilacStar className="w-14 h-14" rotation={15} />
      </div>
      <div className="absolute bottom-10 left-10 z-10 animate-float-reverse">
        <LilacStar className="w-12 h-12" rotation={-25} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b-2 border-ink/20 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-ink text-lime text-xs font-archivo uppercase px-2.5 py-0.5 rounded shadow-sm">
                Case Studies
              </span>
              <span className="text-xs font-mono text-ink/70 uppercase tracking-wider">
                // REAL-WORLD SOFTWARE &amp; CLIENT WORK
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-archivo text-ink tracking-tight uppercase">
              FEATURED PROJECTS
            </h2>
            <p className="mt-2 text-sm sm:text-base text-ink/80 font-sans max-w-xl">
              Real client deliverables and scalable software platforms engineered with clean code and robust architecture.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="hidden sm:flex items-center gap-3 bg-white/80 border border-black/20 p-2.5 rounded-xl shadow-sm">
            <div className="text-center px-3 border-r border-black/10">
              <span className="block font-archivo text-lg text-ink">5</span>
              <span className="text-[10px] font-mono text-ink/60 uppercase">Projects</span>
            </div>
            <div className="text-center px-3 border-r border-black/10">
              <span className="block font-archivo text-lg text-ink">100%</span>
              <span className="text-[10px] font-mono text-ink/60 uppercase">Full Stack</span>
            </div>
            <div className="text-center px-3">
              <span className="block font-archivo text-lg text-ink">Production</span>
              <span className="text-[10px] font-mono text-ink/60 uppercase">Ready</span>
            </div>
          </div>
        </div>

        {/* Featured Project Exhibition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((proj, idx) => {
            const IconComponent = proj.icon;
            return (
              <div 
                key={proj.id}
                className="bg-white/95 backdrop-blur-sm border-2 border-ink rounded-2xl p-6 sm:p-8 shadow-paper-lg flex flex-col justify-between relative group hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Paper Tape Corner */}
                <div className="absolute -top-3 left-8 bg-paper border border-ink px-3 py-0.5 rounded shadow-sm rotate-[-2deg] text-[10px] font-mono font-bold uppercase tracking-wider text-ink/70">
                  REF // PROJ-0{idx + 1}
                </div>

                <div>
                  {/* Category and Live Badge */}
                  <div className="flex items-center justify-between mt-1 mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-ink/60 flex items-center gap-1.5">
                      <IconComponent className="w-3.5 h-3.5 text-ink" />
                      {proj.category}
                    </span>
                    <span className="bg-ink text-lime text-[11px] font-archivo uppercase px-2.5 py-0.5 rounded">
                      {proj.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-archivo text-2xl sm:text-3xl text-ink tracking-tight uppercase group-hover:text-lilac-dark transition-colors">
                    {proj.title}
                  </h3>
                  <p className="font-sans text-sm font-semibold text-ink/80 mt-1">
                    {proj.tagline}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-ink/75 leading-relaxed font-sans">
                    {proj.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-5 pt-4 border-t border-ink/10">
                    <h4 className="text-xs font-archivo uppercase tracking-wider text-ink mb-2.5">
                      Key Engineering Milestones
                    </h4>
                    <ul className="space-y-1.5">
                      {proj.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs text-ink/85 font-sans">
                          <CheckCircle2 className="w-3.5 h-3.5 text-lime-dark shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics Bar */}
                  <div className="mt-5 grid grid-cols-3 gap-2 bg-paper/60 p-2.5 rounded-lg border border-black/10">
                    {Object.entries(proj.metrics).map(([key, val]) => (
                      <div key={key} className="text-center">
                        <span className="block font-archivo text-xs text-ink">{val}</span>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-ink/50">{key}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {proj.stack.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-black/5 border border-black/10 text-ink text-[11px] font-mono px-2.5 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-4 border-t border-ink/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {proj.liveUrl !== '#' ? (
                      <a 
                        href={proj.liveUrl}
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 bg-ink text-lime hover:bg-black font-archivo text-xs uppercase px-4 py-2 rounded-lg shadow-sm transition-all"
                      >
                        <span>Visit Site</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 bg-ink text-white font-archivo text-xs uppercase px-3 py-2 rounded-lg opacity-90 cursor-default">
                        <span>Production Build</span>
                      </span>
                    )}

                    <a 
                      href={proj.githubUrl}
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 bg-white hover:bg-paper border border-ink text-ink font-archivo text-xs uppercase px-3.5 py-2 rounded-lg shadow-sm transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code Repo</span>
                    </a>
                  </div>

                  <span className="text-xs font-hand text-ink/60 font-bold hidden sm:inline">
                    verified build
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
