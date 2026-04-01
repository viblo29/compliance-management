import React from "react";

interface RisksProps {
  h1: string;
  h2: string;
  percent: string;
  dotColor: string;
}

function Risks({ h1, h2, percent, dotColor }: RisksProps) {
  return (
    <div>
      <div className="flex justify-between leading-6">
        <div className="font-semibold">{h1}</div>
        <div>{percent}%</div>
      </div>
      <div className="flex justify-between leading-6 items-center">
        <div className="text-sm leading-6 tracking-[0.1px]" style={{color:"var(--transparent-surface-transparent-white-60, rgba(255, 255, 255, 0.60))"}}>{h2}</div>
        <div className="w-5 h-2 rounded-[99px]" style={{backgroundColor: dotColor}}></div>
      </div>
    </div>
  );
}

export default Risks;
