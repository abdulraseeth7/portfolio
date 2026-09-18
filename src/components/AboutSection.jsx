import React, { useState, useRef, useEffect } from 'react';
import LilacStar from './LilacStar';

export default function AboutSection() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [hoverTilt, setHoverTilt] = useState({ x: 0, y: 0 });

  const dragStart = useRef({ x: 0, y: 0 });
  const lastPos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const animFrame = useRef(null);

  useEffect(() => {
    return () => {
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, []);

  const handlePointerDown = (e) => {
    if (animFrame.current) cancelAnimationFrame(animFrame.current);
    setIsDragging(true);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (_) {}
    dragStart.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
    lastPos.current = { x: pos.x, y: pos.y };
    velocity.current = { x: 0, y: 0 };
  };

  const handlePointerMove = (e) => {
    if (isDragging) {
      const rawX = e.clientX - dragStart.current.x;
      const rawY = e.clientY - dragStart.current.y;
      
      const elasticity = 0.75;
      const newX = rawX * elasticity;
      const newY = rawY * elasticity;

      velocity.current = {
        x: newX - lastPos.current.x,
        y: newY - lastPos.current.y,
      };
      lastPos.current = { x: newX, y: newY };
      setPos({ x: newX, y: newY });
    } else {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setHoverTilt({ x: x * 15, y: y * -15 });
    }
  };

  const handlePointerUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (_) {}

    let currentX = pos.x;
    let currentY = pos.y;
    let vx = velocity.current.x * 0.8;
    let vy = velocity.current.y * 0.8;

    const stiffness = 0.14;
    const damping = 0.80;

    const animateSpring = () => {
      const fx = -stiffness * currentX;
      const fy = -stiffness * currentY;

      vx = (vx + fx) * damping;
      vy = (vy + fy) * damping;

      currentX += vx;
      currentY += vy;

      setPos({ x: currentX, y: currentY });

      if (Math.hypot(currentX, currentY) > 0.2 || Math.hypot(vx, vy) > 0.2) {
        animFrame.current = requestAnimationFrame(animateSpring);
      } else {
        setPos({ x: 0, y: 0 });
        velocity.current = { x: 0, y: 0 };
      }
    };

    animFrame.current = requestAnimationFrame(animateSpring);
  };

  const handlePointerLeave = () => {
    if (!isDragging) {
      setHoverTilt({ x: 0, y: 0 });
    }
  };

  return (
    <section id="about" className="relative bg-lime-paper text-ink pt-12 pb-20 overflow-hidden select-none">
      
      {/* Decorative Floating Lilac Stars */}
      <div className="absolute top-10 right-6 sm:right-16 z-10 animate-float-slow">
        <LilacStar className="w-16 h-16 sm:w-20 sm:h-20" rotation={35} />
      </div>

      <div className="absolute bottom-10 left-6 sm:left-14 z-10 animate-float-reverse">
        <LilacStar className="w-14 h-14 sm:w-18 sm:h-18" rotation={-18} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Hanging ID Lanyard Badge Card */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            
            {/* Lanyard Cord, Metal Clip & ID Card Assembly Container (Draggable with Spring Physics) */}
            <div 
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onPointerLeave={handlePointerLeave}
              className="w-full flex flex-col items-center relative -mt-6 sm:-mt-10 select-none touch-none cursor-grab active:cursor-grabbing origin-top"
              style={{
                transform: `translate3d(${pos.x}px, ${pos.y}px, 0px) rotate(${pos.x * 0.08}deg) rotateY(${isDragging ? pos.x * 0.15 : hoverTilt.x}deg) rotateX(${isDragging ? -pos.y * 0.15 : hoverTilt.y}deg)`,
                transition: isDragging ? 'none' : 'transform 0.05s ease-out',
                willChange: 'transform',
              }}
            >
              
              {/* 1. Lanyard Ribbon Strap */}
              <div className="w-9 sm:w-11 h-20 sm:h-24 bg-gradient-to-b from-neutral-100 via-white to-neutral-200 shadow-md border-x border-black/25 relative overflow-hidden z-0">
                {/* Diagonal weave pattern overlay */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(0,0,0,0.08)_4px,rgba(0,0,0,0.08)_8px)]"></div>
                <div className="absolute bottom-1 inset-x-0 flex justify-center">
                  <span className="text-[8px] font-mono font-extrabold text-ink/60 uppercase tracking-tighter">SOFTWARE</span>
                </div>
              </div>

              {/* 2. Metal Swivel Clip (Joined to strap at top and card slot at bottom) */}
              <div className="flex flex-col items-center -mt-2.5 z-30 pointer-events-none">
                {/* Top Ring / Strap Loop (Clamps onto bottom of ribbon) */}
                <div className="w-7 h-2.5 bg-gradient-to-r from-neutral-400 via-neutral-100 to-neutral-500 rounded-t-sm border border-black/50 shadow-sm"></div>
                {/* Swivel Cylinder Joint */}
                <div className="w-3.5 h-2.5 bg-gradient-to-r from-neutral-500 via-neutral-200 to-neutral-600 border-x border-black/40"></div>
                {/* Metal Clasp / Hook (Extends down into the card slot) */}
                <div className="w-5 h-5 bg-gradient-to-b from-neutral-300 via-neutral-100 to-neutral-400 rounded-b-md border border-black/50 shadow-md flex items-center justify-center -mb-3 z-40">
                  {/* Hook cutout inner detail */}
                  <div className="w-2.5 h-2 bg-neutral-700/80 rounded-sm"></div>
                </div>
              </div>

              {/* 3. ID Badge Card */}
              <div 
                className="w-64 sm:w-72 bg-[#1E1E1E] p-3 rounded-2xl shadow-badge border-4 border-white/90 relative preserve-3d transition-shadow duration-150 ease-out z-20"
              >
                {/* Lanyard Slot Hole at top of card (Clip hook overlaps into this hole) */}
                <div className="w-10 h-3.5 bg-neutral-900 border-2 border-white/60 rounded-full mx-auto mt-1 mb-2.5 shadow-inner flex items-center justify-center">
                  <div className="w-6 h-1 bg-black/80 rounded-full"></div>
                </div>

                {/* Card Inner Screen */}
                <div className="bg-[#2A2A2A] rounded-xl p-2.5 border border-white/10 relative overflow-hidden">
                  
                  {/* Holographic light reflection sheen */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>

                  {/* Photo Container */}
                  <div className="w-full aspect-[4/5] rounded-lg overflow-hidden border-2 border-white/20 relative shadow-inner bg-neutral-900">
                    <img 
                      src="/assets/portrait-badge.jpg" 
                      alt="Abdul Raseeth ID Badge Portrait" 
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500 pointer-events-none"
                    />
                    
                    {/* Status Badge in Photo */}
                    <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-lime font-bold border border-white/20">
                      ACTIVE
                    </div>
                  </div>

                  {/* ID Details */}
                  <div className="mt-3 text-center">
                    <h3 className="font-archivo text-lg uppercase tracking-wide text-white">
                      ABDUL RASEETH
                    </h3>
                    <p className="text-[11px] font-mono text-lime uppercase tracking-wider font-semibold">
                      Full Stack &amp; ML Developer
                    </p>

                    {/* Barcode representation */}
                    <div className="mt-3 pt-2 border-t border-white/15 flex flex-col items-center gap-1">
                      <div className="h-6 w-full flex items-center justify-center gap-0.5">
                        {[4, 2, 6, 1, 3, 5, 2, 7, 2, 4, 1, 6, 3, 5, 2, 6, 3, 4, 1, 5, 2].map((w, i) => (
                          <span 
                            key={i} 
                            className="bg-white h-full inline-block"
                            style={{ width: `${w}px` }}
                          />
                        ))}
                      </div>
                      <span className="text-[9px] font-mono tracking-widest text-white/50">
                        DEV-ID // 2026-AR-88
                      </span>
                    </div>

                  </div>
                </div>

                {/* Card Corner Tag */}
                <div className="absolute -bottom-2 -right-2 bg-lime text-ink text-[10px] font-archivo font-bold px-2 py-0.5 rounded shadow-sm border border-black rotate-6">
                  VERIFIED
                </div>
              </div>
            </div>

            <p className="text-xs font-mono text-ink/60 mt-4 tracking-wider">
              ✦ Drag or pull the badge
            </p>
          </div>

          {/* RIGHT COLUMN: Editorial Content */}
          <div className="lg:col-span-8 flex flex-col justify-center h-full space-y-6">
            
            {/* Greeting Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ink/10 border border-ink/20 text-xs font-mono font-bold tracking-widest text-ink uppercase mb-3">
                <span>✦ About Me</span>
              </div>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-archivo tracking-tight font-extrabold leading-none">
                <span className="text-lilac-dark">Hello</span>
                <span className="text-ink">!</span>
              </h2>
            </div>

            {/* Main Bio Paragraph */}
            <p className="text-lg sm:text-xl md:text-2xl text-ink/90 font-sans leading-relaxed font-medium">
              Hi, my name is{' '}
              <span className="font-hand text-3xl sm:text-4xl font-bold text-ink underline decoration-ink/40 decoration-wavy">
                Abdul Raseeth
              </span>
              , an emerging software developer with hands-on experience in full-stack web application development and machine-learning solutions. Proficient in React.js, JavaScript, Node.js, Express.js, Python, Flask, MySQL, REST APIs, and Tailwind CSS.
            </p>

            {/* Core Focus Badges */}
            <div className="pt-6 border-t-2 border-ink/15 flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink/60 mr-1">
                Core Specializations:
              </span>
              <span className="bg-ink text-lime px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wide shadow-sm">
                Full Stack Web
              </span>
              <span className="bg-ink text-lime px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wide shadow-sm">
                Machine Learning
              </span>
              <span className="bg-ink text-lime px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wide shadow-sm">
                RESTful APIs
              </span>
              <span className="bg-ink text-lime px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wide shadow-sm">
                Database Engineering
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
