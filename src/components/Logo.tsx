import React from 'react';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, showTagline = false }) => {
  return (
    <div className={cn("flex flex-col items-start", className)}>
      <div className="relative flex items-end">
        {/* "The" text */}
        <span className="text-yellow-400/80 text-[12px] md:text-sm font-bold uppercase tracking-widest mb-2 mr-2">The</span>
        
        <div className="relative">
          {/* Main "Bambooz" text */}
          <span className="text-4xl md:text-6xl font-sans font-black tracking-tight text-yellow-400 leading-none">
            Bamb<span className="relative">oo</span>z
          </span>

          {/* Fork Icon above "oo" */}
          <div className="absolute -top-8 left-[80px] md:left-[120px] text-yellow-400 rotate-[160deg]">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2v20" />
              <path d="M18 20v2" />
              <path d="M14 2v10a4 4 0 0 0 8 0V2" />
              <path d="M18 12v8" />
            </svg>
          </div>

          {/* Cloche Icon above "z" */}
          <div className="absolute -top-7 -right-3 text-yellow-500">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4a1 1 0 0 1 1 1v1.07A10.001 10.001 0 0 1 22 16v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a10.001 10.001 0 0 1 9-9.93V5a1 1 0 0 1 1-1zM4.06 16h15.88a8.001 8.001 0 0 0-15.88 0z" />
              <path d="M11 2h2v2h-2z" />
              <path d="M19 14l1 1-1 1-1-1z" />
            </svg>
          </div>
        </div>
      </div>

      {showTagline && (
        <span className="text-[10px] md:text-xs font-serif italic text-yellow-200 mt-1 whitespace-nowrap">
          The Family Restaurant Made of Bamboos.....
        </span>
      )}
    </div>
  );
};

export default Logo;
