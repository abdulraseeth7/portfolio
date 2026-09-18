import React, { useState, useRef } from 'react';
import LilacStar from './LilacStar';

export default function Hero() {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => setMousePos({ x: 0, y: 0 });

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full bg-grid-paper paper-crumple-overlay overflow-hidden select-none"
      style={{ minHeight: 'max(72vh, 540px)', aspectRatio: '16/9' }}
    >
      {/* ============================================================
          LILAC FLOWER STICKERS — Positioned exact to Image 2 reference
          ============================================================ */}
      {/* Top-left lilac star */}
      <div className="absolute top-[10%] left-[4%] sm:left-[6%] z-40 animate-float-slow">
        <LilacStar className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" rotation={-15} />
      </div>

      {/* Top-right lilac star */}
      <div className="absolute top-[3%] right-[6%] sm:right-[10%] z-40 animate-float-reverse">
        <LilacStar className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16" rotation={25} />
      </div>

      {/* Bottom-left lilac star (Inside lime-green paper strip) */}
      <div className="absolute bottom-[4%] left-[3%] sm:left-[5%] z-50 animate-float-reverse">
        <LilacStar className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" rotation={10} />
      </div>

      {/* Bottom-right lilac star (Inside lime-green paper strip) */}
      <div className="absolute bottom-[4%] right-[3%] sm:right-[5%] z-50 animate-float-slow">
        <LilacStar className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" rotation={-20} />
      </div>

      {/* ============================================================
          PORTFOLIO '26 CUTOUT DISPLAY TITLE (Layered Behind Portrait z-10)
          ============================================================ */}
      <div 
        className="absolute top-[14%] sm:top-[12%] md:top-[10%] inset-x-0 mx-auto w-full max-w-5xl px-4 z-10"
        style={{
          transform: `translate(${mousePos.x * -8}px, ${mousePos.y * -5}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <svg 
          viewBox="0 0 1200 420" 
          className="w-full h-auto block select-none pointer-events-none filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]" 
          preserveAspectRatio="xMidYMid meet"
        >
          <g fill="#0A0A0A">
            {/* P */}
            <path d="M 45 110 C 45 70 80 55 135 55 C 185 55 215 82 215 135 C 215 182 185 208 135 208 L 115 208 L 115 330 C 115 348 98 358 75 358 C 55 358 45 348 45 330 Z M 115 110 L 115 152 L 135 152 C 154 152 160 144 160 132 C 160 120 152 110 135 110 Z" />
            
            {/* O */}
            <path d="M 270 85 C 328 85 365 132 365 210 C 365 288 328 335 270 335 C 212 335 175 288 175 210 C 175 132 212 85 270 85 Z M 270 140 C 246 140 232 168 232 210 C 232 252 246 280 270 280 C 294 280 308 252 308 210 C 308 168 294 140 270 140 Z" />
            
            {/* R */}
            <path d="M 375 88 C 375 88 468 76 468 142 C 468 184 440 205 410 212 L 478 325 C 488 340 465 345 440 345 C 424 345 408 338 398 320 L 345 225 L 345 330 C 345 348 328 348 310 330 L 310 110 C 310 88 332 88 375 88 Z M 375 122 L 375 178 L 402 178 C 420 178 425 166 425 150 C 425 134 414 122 396 122 Z" />
            
            {/* T — Oversized stem extending to top Y=10 */}
            <path d="M 505 10 L 568 10 L 568 90 L 610 90 C 624 90 626 112 610 122 C 598 126 578 126 568 126 L 568 330 C 568 348 545 348 505 348 C 505 348 505 126 505 126 L 468 126 C 452 126 452 90 468 90 L 505 90 Z" />
            
            {/* F */}
            <path d="M 630 88 L 725 88 C 740 88 740 118 725 118 L 678 118 L 678 180 L 718 180 C 732 180 732 210 718 210 L 678 210 L 678 330 C 678 348 645 348 630 330 Z" />
            
            {/* O */}
            <path d="M 800 85 C 858 85 895 132 895 210 C 895 288 858 335 800 335 C 742 335 705 288 705 210 C 705 132 742 85 800 85 Z M 800 140 C 776 140 762 168 762 210 C 762 252 776 280 800 280 C 824 280 838 252 838 210 C 838 168 824 140 800 140 Z" />
            
            {/* L */}
            <path d="M 905 88 C 905 72 935 72 935 88 L 935 285 L 1005 285 C 1020 285 1020 320 1005 320 L 905 320 Z" />
            
            {/* i — Lowercase cutout i */}
            <path d="M 1040 75 A 24 24 0 1 0 1040 123 A 24 24 0 1 0 1040 75 Z M 1020 152 C 1020 140 1060 140 1060 152 L 1060 320 C 1060 338 1020 338 1020 320 Z" />
            
            {/* O */}
            <path d="M 1125 152 C 1172 152 1198 188 1198 242 C 1198 296 1172 335 1125 335 C 1078 335 1052 296 1052 242 C 1052 188 1078 152 1125 152 Z M 1125 192 C 1106 192 1095 212 1095 242 C 1095 272 1106 292 1125 292 C 1144 292 1155 272 1155 242 C 1155 212 1144 192 1125 192 Z" />
          </g>

          {/* Lime Green Sticker Badge '26 */}
          <g transform="translate(935, 12) rotate(-6)">
            <rect x="0" y="0" width="125" height="65" rx="16" fill="#CEEC2E" stroke="#0A0A0A" strokeWidth="4" />
            <text x="62" y="48" textAnchor="middle" fill="#0A0A0A" fontFamily="Archivo, Impact, sans-serif" fontWeight="900" fontSize="46" letterSpacing="-1">'26</text>
          </g>
        </svg>
      </div>

      {/* ============================================================
          CENTRAL PORTRAIT — Anchored at absolute bottom (-10px) (z-20)
          Submerged below the torn paper edge so flat cut bottom is covered
          ============================================================ */}
      <div
        className="absolute z-20 flex justify-center pointer-events-none"
        style={{
          bottom: '-15px',
          left: '50%',
          transform: `translateX(-50%) translate(${mousePos.x * 6}px, ${mousePos.y * 4}px)`,
          transition: 'transform 0.2s ease-out',
          width: 'clamp(280px, 38vw, 520px)',
        }}
      >
        {/* Ambient ground shadow */}
        <div className="absolute bottom-4 inset-x-8 h-12 bg-black/30 filter blur-xl rounded-full pointer-events-none"></div>

        <img
          src="/assets/portrait-cutout.png"
          alt="Abdul Raseeth — Software Developer"
          className="w-full h-auto object-contain block drop-shadow-[0_12px_36px_rgba(0,0,0,0.45)] relative z-20"
          draggable={false}
        />
      </div>

      {/* ============================================================
          TORN LIME-GREEN PAPER EDGE — Anchored absolute bottom (z-40)
          Covers the flat bottom edge of the portrait image completely
          ============================================================ */}
      <div className="absolute bottom-0 left-0 right-0 z-40 pointer-events-none">
        <svg
          viewBox="0 0 1440 90"
          className="w-full h-16 sm:h-20 md:h-24 lg:h-28 block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,90 L0,40
               Q40,25 80,45 Q120,58 160,35 Q200,20 240,42
               Q280,54 320,30 Q360,18 400,38 Q440,52 480,32
               Q520,20 560,45 Q600,58 640,32 Q680,18 720,42
               Q760,54 800,28 Q840,16 880,40 Q920,54 960,30
               Q1000,18 1040,42 Q1080,58 1120,32 Q1160,20 1200,45
               Q1240,58 1280,30 Q1320,16 1360,40 Q1400,54 1440,32
               L1440,90 Z"
            fill="#CEEC2E"
          />
          {/* Paper fiber texture shadow line */}
          <path
            d="M0,40
               Q40,25 80,45 Q120,58 160,35 Q200,20 240,42
               Q280,54 320,30 Q360,18 400,38 Q440,52 480,32
               Q520,20 560,45 Q600,58 640,32 Q680,18 720,42
               Q760,54 800,28 Q840,16 880,40 Q920,54 960,30
               Q1000,18 1040,42 Q1080,58 1120,32 Q1160,20 1200,45
               Q1240,58 1280,30 Q1320,16 1360,40 Q1400,54 1440,32"
            fill="none"
            stroke="rgba(0,0,0,0.12)"
            strokeWidth="2"
          />
        </svg>
      </div>

    </section>
  );
}
