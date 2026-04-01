"use client";
import React, { useEffect, useState } from "react";
import grid from "../../public/Grid.svg";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const boxWidth = 99;
const boxHeight = 89;

function GetFunding() {
  const [popupText, setPopupText] = useState("SO 27001");
  
  const controls = useAnimation();
  const popupOffsetControls = useAnimation(); // New controller for the pop-up's internal shift
  const lineControlsRight = useAnimation();
  const lineControlsLeft = useAnimation();
  const lineControlsTop = useAnimation();
  const lineControlsBottom = useAnimation();

  const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        // --- STAGE 1: MOVE LEFT ---
        await wait(800);
        setPopupText("GDPR");
        controls.start({
          x: -boxWidth,
          y: -boxHeight,
          transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
        });
        await Promise.all([
          // We shift the pop-up to the "left-side" offset (-67px) as the rectangle moves
          popupOffsetControls.start({ right: -57, transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] } }),
          lineControlsRight.start({ width: "290px", transition: { duration: 0.8, ease: "linear" } }),
          lineControlsLeft.start({ width: "89px", transition: { duration: 0.8, ease: "linear" } }),
          lineControlsTop.start({ height: "80px", transition: { duration: 0.8, ease: "linear" } }),
          lineControlsBottom.start({ height: "253px", transition: { duration: 0.8, ease: "linear" } }),
        ]);

        // --- STAGE 2: MOVE DOWN ---
        await wait(800);
        setPopupText("SOC 2");
        controls.start({
          x: -boxWidth,
          y: 0,
          transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
        });
        await Promise.all([
          // Keep it at the left offset or adjust if needed
          popupOffsetControls.start({ right: -57, transition: { duration: 0.8 } }),
          lineControlsTop.start({ height: "167px", transition: { duration: 0.8, ease: "linear" } }),
          lineControlsBottom.start({ height: "167px", transition: { duration: 0.8, ease: "linear" } }),
        ]);

        // --- STAGE 3: MOVE RIGHT ---
        await wait(800);
        setPopupText("PCI DDC");
        controls.start({
          x: boxWidth,
          y: 0,
          transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
        });
        await Promise.all([
          // Shift back to the "right-side" offset (-14px)
          popupOffsetControls.start({ right: -12.67, transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] } }),
          lineControlsRight.start({ width: "89px", transition: { duration: 0.8, ease: "linear" } }),
          lineControlsLeft.start({ width: "290px", transition: { duration: 0.8, ease: "linear" } }),
        ]);

        // --- STAGE 4: MOVE UP (Back to Start) ---
        await wait(800);
        setPopupText("SO 27001");
        controls.start({
          x: boxWidth,
          y: -boxHeight,
          transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
        });
        await Promise.all([
          popupOffsetControls.start({ right: -12.67, transition: { duration: 0.8 } }),
          lineControlsTop.start({ height: "80px", transition: { duration: 0.8, ease: "linear" } }),
          lineControlsBottom.start({ height: "253px", transition: { duration: 0.8, ease: "linear" } }),
        ]);
      }
    };

    sequence();
  }, [controls, popupOffsetControls, lineControlsRight, lineControlsLeft, lineControlsTop, lineControlsBottom]);

  const lineColor = "#F94302";

  return (
    <div className="w-screen h-screen flex justify-center items-center relative overflow-hidden">
      <Image src={grid} alt="grid" className="absolute" />

      <motion.div
        initial={{ x: boxWidth, y: -boxHeight }}
        animate={controls}
        className="absolute flex items-center justify-center"
      >
        {/* RECTANGLE */}
        <div className="w-5 h-5 bg-[#FF4E02] z-10 shadow-[0_0_100px_#F94302,0_0_50px_#F96D02,0_0_25px_rgba(249,150,2,0.5)]" />

        {/* DYNAMIC POPUP MESSAGE */}
        <motion.div
          animate={popupOffsetControls}
          initial={{ right: -12.67 }}
          className="absolute top-8 z-20 w-34.25 h-35 flex items-start justify-start p-4"
          style={{
            borderRadius: "10px",
            border: "1px solid linear-gradient(180deg, rgba(255, 255, 255, 0.20) -173.65%, rgba(255, 255, 255, 0.00) 87.22%)",
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        >
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <div className="font-medium leading-6 tracking-[0.1px]"> {popupText} </div> 
              <div className="font-medium leading-6 tracking-[0.1px]" style={{color: "var(--transparent-surface-transparent-white-60, rgba(255, 255, 255, 0.60))"}}>Framework</div>
            </div>
            <div className="flex flex-row items-center justify-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#3EBE00]"></div>
              <div style={{letterSpacing:"var(--ui-14-semi-medium-letter-spacing-0, 0)"}}>Compliant</div>
            </div>
          </div>
        </motion.div>

        {/* ... (Your existing Lines code stays exactly the same below) */}
        
        {/* RIGHT LINE */}
        <motion.div
          initial={{ width: "90px" }}
          animate={lineControlsRight}
          style={{
            originX: 0,
            backgroundColor: lineColor,
            WebkitMaskImage: "linear-gradient(to right, black 20%, transparent 100%)",
            maskImage: "linear-gradient(to right, black 20%, transparent 100%)",
          }}
          className="absolute left-1/2 ml-2.5 h-[1.5px]"
        />
        {/* LEFT LINE */}
        <motion.div
          initial={{ width: "290px" }}
          animate={lineControlsLeft}
          style={{
            originX: 1,
            backgroundColor: lineColor,
            WebkitMaskImage: "linear-gradient(to left, black 20%, transparent 100%)",
            maskImage: "linear-gradient(to left, black 20%, transparent 100%)",
          }}
          className="absolute right-1/2 mr-2.5 h-[1.5px]"
        />
        {/* TOP LINE */}
        <motion.div
          initial={{ height: "80px" }}
          animate={lineControlsTop}
          style={{
            originY: 1,
            backgroundColor: lineColor,
            WebkitMaskImage: "linear-gradient(to top, black 20%, transparent 100%)",
            maskImage: "linear-gradient(to top, black 20%, transparent 100%)",
          }}
          className="absolute bottom-1/2 mb-2.5 w-[1.5px]"
        />
        {/* BOTTOM LINE */}
        <motion.div
          initial={{ height: "253px" }}
          animate={lineControlsBottom}
          style={{
            originY: 0,
            backgroundColor: lineColor,
            WebkitMaskImage: "linear-gradient(to bottom, black 20%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, black 20%, transparent 100%)",
          }}
          className="absolute top-1/2 mt-2.5 w-[1.5px]"
        />
      </motion.div>
    </div>
  );
}

export default GetFunding;