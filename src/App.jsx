import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TornPaperEdge from './components/TornPaperEdge';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F6F5ED] text-[#111111] relative selection:bg-[#CEEC2E] selection:text-black">
      {/* Top Fixed Editorial Navbar */}
      <Navbar />

      <main>
        {/* 1. HERO SECTION — Collage layout with scattered PORTFOLIO letters around portrait + built-in torn lime edge */}
        <Hero />

        {/* 2. ABOUT SECTION (Vibrant Lime Green Paper + Hanging Lanyard ID Badge Card + Editorial Columns) */}
        <AboutSection />

        {/* Torn Paper Transition: Lime Green Paper -> White Grid Paper */}
        <TornPaperEdge 
          position="bottom" 
          paperColor="#CFEE2B" 
          bgColor="#F6F5ED" 
          flip={true}
          className="-mt-2 sm:-mt-4"
        />

        {/* 3. SKILLS SECTION (White Grid Paper + Tactile Specimen Stamps for 13 Skills) */}
        <SkillsSection />

        {/* Torn Paper Transition: White Paper -> Lime Green Paper */}
        <TornPaperEdge 
          position="bottom" 
          paperColor="#F6F5ED" 
          bgColor="#CFEE2B" 
          className="-mt-2 sm:-mt-4"
        />

        {/* 4. PROJECTS SECTION (Lime Green Paper + Tevolt.in, Property & Task Management Systems) */}
        <ProjectsSection />

        {/* Torn Paper Transition: Lime Green Paper -> White Grid Paper */}
        <TornPaperEdge 
          position="bottom" 
          paperColor="#CFEE2B" 
          bgColor="#F6F5ED" 
          flip={true}
          className="-mt-2 sm:-mt-4"
        />

        {/* 5. EXPERIENCE & TIMELINE SECTION (White Grid Paper + Chronology of Engineering & Client Milestones) */}
        <ExperienceSection />

        {/* Torn Paper Transition: White Paper -> Dark Ink Paper */}
        <TornPaperEdge 
          position="bottom" 
          paperColor="#F6F5ED" 
          bgColor="#141414" 
          className="-mt-2 sm:-mt-4"
        />

        {/* 6. CONTACT & FOOTER (Dark Ink Paper + Interactive Form, Quick Email Copy & WhatsApp) */}
        <ContactFooter />
      </main>
    </div>
  );
}
