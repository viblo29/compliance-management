import React from 'react'
import Image from 'next/image'
import radarBG from '../../../public/radar-background.svg'
import radar from '../../../public/radar.svg'

const Radar: React.FC = () => {
  return (
    <div className="flex items-center justify-center border-[#121019] border-solid w-[284px] h-[284px] rounded-full">
      {/* 1. The Anchor (Relative) */}
      <div className="relative flex items-center justify-center w-fit h-fit">
        
        {/* Layer 1: The Static Background */}
        <Image 
          src={radarBG} 
          alt="Radar Background" 
          priority 
        />

        {/* Layer 2: The Animated Overlay (Absolute) */}
        <div className="absolute inset-0 flex items-center justify-center animate-[spin_7.2s_linear_infinite_reverse]">
        <Image 
            src={radar} 
            alt="Radar Spin" 
            priority 
        />
        </div>
        
        
      </div>
    </div>
  )
}

export default Radar