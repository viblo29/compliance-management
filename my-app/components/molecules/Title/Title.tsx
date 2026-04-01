import React from "react";

interface TitleProps {
  number: number;
  h1: string;
  h2: string;
}

function Title({ number, h1, h2 }: TitleProps) {
  return (
    <>
    <div className="flex flex-col gap-6">
      <div
        className="w-16 h-16 flex justify-center items-center"
        style={{
          borderRadius: "var(--Corner-radius-Round, 999px)",
          background:
            "var(--Light-Gradient, linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.00) 100%))",
        }}
      >
        <div
          className="w-12 h-12 flex justify-center items-center"
          style={{
            borderRadius: "var(--Corner-radius-Round, 999px)",
            border: "1px solid var(--Stroke-Gradient-2, #FFF)",
            background:
              "var(--Widget-Gradient, linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.01) 100%))",
          }}
        >
          {number}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="text-xl font-semibold leading-7 ">{h1}</div>
        <div className="text-lg leading-6" style={{color: "var(--transparent-surface-transparent-white-60, rgba(255, 255, 255, 0.60))"}}>
          {h2}
        </div>
      </div>
    </div>
    <div className="flex flex-col mt-6">
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
    </div>
    </>
  );
}

export default Title;
