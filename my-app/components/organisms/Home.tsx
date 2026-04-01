import React from "react";
import GetFunding from "../molecules/GetFunding/GetFunding";
import Title from "../molecules/Title/Title";
import Radar from "../molecules/Radar/Radar";
import GreenDot from "../atoms/GreenDot/GreenDot";

function Home() {
  return (
    <div
      className=" text-white w-screen h-screen flex flex-row gap-4"
      style={{ background: "var(--Surface-Black, #121019);" }}
    >
      <div className="w-[479.33] p-4 flex flex-col">
        <Title
          number={1}
          h1="Evidence Management"
          h2="Collect and map compliance evidence across frameworks with AI validation."
        />
          <div className="h-100.5 flex relative items-center justify-center" style={{
                borderRadius: 'var(--Corner-radius-10px, 10px)',
                border: '1px var(--Stroke-Gradient-2, #FFF)',
                background: 'var(--Widget-Gradient, linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.01) 100%))'
              }}>
          </div>
      </div>

      <div className="w-px h-164.5" style={{background: "var(--transparent-surface-transparent-white-15, rgba(255, 255, 255, 0.16))"}}></div>


      <div className="w-[479.33] p-4 flex flex-col">
        <Title
          number={2}
          h1="Framework Mapping"
          h2="Map controls and evidence once and automatically apply them across multiple frameworks."
        />
          <div className="h-100.5 flex relative items-center justify-center" style={{
                borderRadius: 'var(--Corner-radius-10px, 10px)',
                border: '1px var(--Stroke-Gradient-2, #FFF)',
                background: 'var(--Widget-Gradient, linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.01) 100%))'
              }}>
            <GetFunding />
          </div>
      </div>

      <div className="w-px h-164.5" style={{background: "var(--transparent-surface-transparent-white-15, rgba(255, 255, 255, 0.16))"}}></div>

      <div className="w-[479.33] p-4 flex flex-col">
        <Title
          number={3}
          h1="Gap Monitoring"
          h2="Continuously detect control gaps and track remediation before audits begin."
        />
          <div className="h-100.5 flex flex-col relative items-center justify-center p-6 gap-[18px]" style={{
                borderRadius: 'var(--Corner-radius-10px, 10px)',
                border: '1px var(--Stroke-Gradient-2, #FFF)',
                background: 'var(--Widget-Gradient, linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.01) 100%))'
              }}>
            <Radar/>
            <div className="flex flex-row gap-0.5 font-medium leading-6 tracking-[0.1px]">
              <div className='w-[198.6px] h-13 flex items-center justify-start gap-3 px-5' style={{
                borderRadius: "var(--Corner-radius-8px, 8px) 0 0 var(--Corner-radius-8px, 8px)",
                background: "var(--transparent-surface-transparent-white-6, rgba(255, 255, 255, 0.06))"
              }}>
                <GreenDot/>
                24 healthy
              </div>
              <div className='w-[198.6px] h-13 flex items-center justify-start gap-3 px-5' style={{
                borderRadius: "0 var(--Corner-radius-8px, 8px) var(--Corner-radius-8px, 8px) 0",
                background: "var(--transparent-surface-transparent-white-6, rgba(255, 255, 255, 0.06))"
              }}>
                <GreenDot/>
                8 in progress
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Home;
