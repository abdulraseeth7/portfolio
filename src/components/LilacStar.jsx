import React from 'react';

/**
 * 8-petal rounded flower star sticker matching the reference image lilac accents
 */
export default function LilacStar({ 
  className = "w-10 h-10", 
  rotation = 0, 
  animate = false,
  color = "#9B7FE6" 
}) {
  return (
    <div 
      className={`inline-block select-none pointer-events-none ${animate ? 'animate-float-slow' : ''}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <svg 
        viewBox="0 0 100 100" 
        className={`${className} drop-shadow-[1px_2px_3px_rgba(0,0,0,0.15)]`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 8 rounded flower/star lobes like reference */}
        <g fill={color}>
          <rect x="42" y="5" width="16" height="90" rx="8" />
          <rect x="5" y="42" width="90" height="16" rx="8" />
          <rect x="42" y="5" width="16" height="90" rx="8" transform="rotate(45 50 50)" />
          <rect x="42" y="5" width="16" height="90" rx="8" transform="rotate(-45 50 50)" />
          {/* Subtle center circle to soften junction */}
          <circle cx="50" cy="50" r="16" fill={color} />
        </g>
      </svg>
    </div>
  );
}
