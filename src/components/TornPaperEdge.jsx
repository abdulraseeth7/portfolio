import React from 'react';

/**
 * Organic torn paper edge divider.
 * Creates an authentic torn paper physical edge separating sections.
 */
export default function TornPaperEdge({ 
  position = 'bottom', // 'top' or 'bottom'
  paperColor = '#F6F5ED', // Color of the tearing paper
  bgColor = '#CEEC2E',    // Color of the section underneath
  flip = false,
  className = ''
}) {
  return (
    <div 
      className={`relative w-full overflow-hidden leading-none select-none pointer-events-none z-20 ${className}`}
      style={{
        transform: flip ? 'scaleX(-1)' : 'none',
        marginTop: position === 'bottom' ? '-2px' : '0',
        marginBottom: position === 'top' ? '-2px' : '0',
      }}
    >
      {/* SVG torn paper path */}
      <svg 
        viewBox="0 0 1440 70" 
        className="w-full h-10 sm:h-14 md:h-16 lg:h-20 block"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id={`paper-shadow-${position}-${flip ? 'f' : 'n'}`} x="-10%" y="-20%" width="120%" height="150%">
            <feDropShadow dx="0" dy={position === 'bottom' ? "4" : "-4"} stdDeviation="4" floodColor="#000000" floodOpacity="0.25" />
          </filter>
        </defs>

        {position === 'bottom' ? (
          <g filter={`url(#paper-shadow-${position}-${flip ? 'f' : 'n'})`}>
            {/* Rough torn white paper edge */}
            <path 
              d="M0,0 L1440,0 L1440,25 
                 Q1380,38 1320,24 Q1260,12 1200,34 Q1140,46 1080,28 
                 Q1020,18 960,38 Q900,48 840,25 Q780,15 720,35 
                 Q660,45 600,22 Q540,14 480,36 Q420,48 360,20 
                 Q300,10 240,32 Q180,44 120,20 Q60,12 0,35 Z" 
              fill={paperColor} 
            />
            {/* Fine ripped fibers accent line */}
            <path 
              d="M0,35 Q60,12 120,20 Q180,44 240,32 Q300,10 360,20 
                 Q420,48 480,36 Q540,14 600,22 Q660,45 720,35 
                 Q780,15 840,25 Q900,48 960,38 Q1020,18 1080,28 
                 Q1140,46 1200,34 Q1260,12 1320,24 Q1380,38 1440,25" 
              fill="none" 
              stroke="rgba(0,0,0,0.06)" 
              strokeWidth="2" 
            />
          </g>
        ) : (
          <g filter={`url(#paper-shadow-${position}-${flip ? 'f' : 'n'})`}>
            {/* Rough torn top edge */}
            <path 
              d="M0,70 L1440,70 L1440,42 
                 Q1380,26 1320,45 Q1260,56 1200,32 Q1140,22 1080,44 
                 Q1020,52 960,30 Q900,18 840,42 Q780,55 720,32 
                 Q660,20 600,46 Q540,54 480,30 Q420,20 360,48 
                 Q300,58 240,34 Q180,22 120,48 Q60,56 0,32 Z" 
              fill={paperColor} 
            />
            {/* Fine ripped fibers accent line */}
            <path 
              d="M0,32 Q60,56 120,48 Q180,22 240,34 Q300,58 360,48 
                 Q420,20 480,30 Q540,54 600,46 Q660,20 720,32 
                 Q780,55 840,42 Q900,18 960,30 Q1020,52 1080,44 
                 Q1140,22 1200,32 Q1260,56 1320,45 Q1380,26 1440,42" 
              fill="none" 
              stroke="rgba(0,0,0,0.06)" 
              strokeWidth="2" 
            />
          </g>
        )}
      </svg>
    </div>
  );
}
