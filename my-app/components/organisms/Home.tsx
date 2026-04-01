import React from "react";
import GetFunding from "./GetFunding";
import Title from "../molecules/Title/Title";

function Home() {
  return (
    <div
      className=" text-white"
      style={{ background: "var(--Surface-Black, #121019);" }}
    >
      <div className="w-[479.33] p-4 flex flex-col gap-6">
        <Title
          number={1}
          h1="Evidence Management"
          h2="Collect and map compliance evidence across frameworks with AI validation."
        />
        <div className="flex flex-col">
          <div
            className="h-3 mx-6 bg-[#17151E]"
            style={{
              borderRadius:
                "var(--Corner-radius-10px, 10px) var(--Corner-radius-10px, 10px) 0 0",
            }}
          ></div>
          <div
            className="h-3 mx-3"
            style={{
              borderRadius:
                "var(--Corner-radius-10px, 10px) var(--Corner-radius-10px, 10px) 0 0",
              background:
                "var(--transparent-surface-transparent-white-10, rgba(255, 255, 255, 0.10))",
            }}
          ></div>
          <div className="h-100.5" style={{
                borderRadius: 'var(--Corner-radius-10px, 10px)',
                border: '1px var(--Stroke-Gradient-2, #FFF)',
                background: 'var(--Widget-Gradient, linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.01) 100%))'
              }}>

          </div>
        </div>
      </div>
      <GetFunding />
    </div>
  );
}

export default Home;
