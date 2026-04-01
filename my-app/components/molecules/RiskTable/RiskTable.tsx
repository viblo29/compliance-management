"use client";

import React, { useState, useEffect } from "react";

export default function RiskTable() {
  const [isFlickering, setIsFlickering] = useState(false);

  useEffect(() => {
    // Controls the intermittent "system activity" flicker
    // Delay of 800ms + Duration of 90ms = 890ms cycle
    const interval = setInterval(() => {
      setIsFlickering(true);

      const timeout = setTimeout(() => {
        setIsFlickering(false);
      }, 90); // Dissolve duration: 90ms

      return () => clearTimeout(timeout);
    }, 890); 

    return () => clearInterval(interval);
  }, []);

  // Define total column count
  const TOTAL_COLUMNS = 19;

  return (
    <div className="flex flex-row gap-1 p-4  rounded-md">
      {Array.from({ length: TOTAL_COLUMNS }).map((_, index) => {
        
        // 1. Determine Border Radius (First and Last columns)
        let borderRadiusClass = "";
        if (index === 0) {
          borderRadiusClass = "rounded-l-[4px]";
        } else if (index === TOTAL_COLUMNS - 1) {
          borderRadiusClass = "rounded-r-[4px]";
        }

        // 2. Determine Background Colors and Animation states
        let bgColorClass = "";
        let transitionClass = "";

        if (index >= 0 && index < 3) {
          // First 3 columns
          bgColorClass = "bg-[#E62102]";
        } else if (index >= 3 && index < 8) {
          // Next 5 columns
          bgColorClass = "bg-[#FFB145]";
        } else if (index >= 8 && index < 16) {
          // Next 8 columns
          bgColorClass = "bg-[#3EBE00]";
        } else {
          // Last 3 columns (Indices 16, 17, 18)
          if (index === 16) {
            // 1st column from the last group gets the animation
            bgColorClass = isFlickering 
              ? "bg-[#3EBE00]" 
              : "bg-[rgba(255,255,255,0.12)]";
            // Type: Dissolve (transition-colors), Easing: Linear, Duration: 90ms
            transitionClass = "transition-colors duration-[90ms] ease-linear";
          } else {
            bgColorClass = "bg-[rgba(255,255,255,0.12)]";
          }
        }

        return (
          <div
            key={index}
            className={`
              w-[14.4px] h-19.5 
              ${bgColorClass} 
              ${borderRadiusClass} 
              ${transitionClass}
            `}
          />
        );
      })}
    </div>
  );
}