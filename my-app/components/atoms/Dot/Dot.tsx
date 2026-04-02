import React from 'react'

interface DotProps {
  // Restricting the type to the three specific colors you mentioned
  color: 'green' | 'orange' | 'red';
}

function Dot({ color }: DotProps) {
  // Mapping the color names to their respective hex codes
  const colorMap = {
    green: '#3EBE00',
    orange: '#F99718',
    red: '#E62102',
  };

  return (
    <div>
      <div 
        className="w-2 h-2 rounded-full" 
        style={{ backgroundColor: colorMap[color] }}
      />
    </div>
  )
}

export default Dot