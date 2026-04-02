"use client"

import { useState, useEffect } from "react";

// --- Configuration Constants ---
const ROWS = 4;
const COLS = 4;
const GAP = 4;
const CELL_W = 96.833;
const CELL_H = 85.5;

// Cursor Dimensions (based on your SVG scale)
const CURSOR_W = 20.308;
const CURSOR_H = 24;

// Animation Settings
const BEZIER = "cubic-bezier(0.42, 0, 0.58, 1)";
const DURATION = "200ms"; 
const DELAY_BETWEEN_MOVES = 1000; 

const PATH = [
  [1,1],[1,2],[2,2],[2,1],
];

// --- Icons ---
function EyeIconGray() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="22" viewBox="0 0 27 22" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.3438 6.70028e-05C10.8863 -0.000437809 11.3646 -0.000882854 11.8292 0.110656C12.2374 0.208643 12.6275 0.37026 12.9854 0.589575C13.3928 0.839216 13.7307 1.17776 14.114 1.56172L15.219 2.6668L21.1181 2.6668C21.8209 2.66678 22.4273 2.66676 22.9267 2.70756C23.4538 2.75063 23.9781 2.84572 24.4826 3.10278C25.2353 3.48627 25.8472 4.09819 26.2307 4.85084C26.4878 5.35535 26.5828 5.87964 26.6259 6.40676C26.6667 6.90619 26.6667 7.51253 26.6667 8.21538V15.7849C26.6667 16.4877 26.6667 17.0941 26.6259 17.5935C26.5828 18.1206 26.4878 18.6449 26.2307 19.1494C25.8472 19.9021 25.2353 20.514 24.4826 20.8975C23.9781 21.1546 23.4538 21.2496 22.9267 21.2927C22.4273 21.3335 21.8209 21.3335 21.1181 21.3335H5.54848C4.84568 21.3335 4.23936 21.3335 3.73997 21.2927C3.21284 21.2496 2.68855 21.1546 2.18404 20.8975C1.4314 20.514 0.819473 19.9021 0.43598 19.1494C0.178921 18.6449 0.0838327 18.1206 0.0407646 17.5935C-3.75261e-05 17.0941 -1.97173e-05 16.4877 9.24074e-07 15.7849V5.54864C-1.97173e-05 4.84584 -3.75236e-05 4.23949 0.0407646 3.7401C0.0838327 3.21297 0.178921 2.68868 0.435979 2.18417C0.819473 1.43153 1.4314 0.819603 2.18404 0.43611C2.68855 0.179051 3.21284 0.0839629 3.73997 0.0408949C4.2394 8.99856e-05 4.84575 0.000110554 5.54861 0.000134396L10.3438 6.70028e-05ZM18.4749 12.6194C17.7022 13.7425 15.8375 16.0001 13.3332 16.0001C10.829 16.0001 8.96422 13.7425 8.19154 12.6194C7.93268 12.2432 7.93268 11.7571 8.19154 11.3809C8.96422 10.2578 10.829 8.00014 13.3332 8.00014C15.8375 8.00014 17.7022 10.2578 18.4749 11.3809C18.7337 11.7571 18.7337 12.2432 18.4749 12.6194ZM14.6668 12.0001C14.6668 12.7365 14.0698 13.3335 13.3335 13.3335C12.5971 13.3335 12.0001 12.7365 12.0001 12.0001C12.0001 11.2638 12.5971 10.6668 13.3335 10.6668C14.0698 10.6668 14.6668 11.2638 14.6668 12.0001Z" fill="white" fillOpacity="0.2"/>
    </svg>
  );
}

function EyeIconWhite() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M3.03028 14.3185C4.18938 11.7155 7.85888 5.33203 16.0039 5.33203C24.1491 5.33203 27.8183 11.7158 28.9772 14.3188C29.4549 15.3918 29.4549 16.6056 28.9772 17.6786C27.8183 20.2816 24.1491 26.6654 16.0039 26.6654C7.85888 26.6654 4.18938 20.2819 3.03028 17.6789C2.55241 16.6057 2.55241 15.3917 3.03028 14.3185ZM16.0035 21.332C18.949 21.332 21.3368 18.9442 21.3368 15.9987C21.3368 13.0532 18.949 10.6654 16.0035 10.6654C13.058 10.6654 10.6702 13.0532 10.6702 15.9987C10.6702 18.9442 13.058 21.332 16.0035 21.332Z" fill="white"/>
      <path d="M14.0035 15.9987C15.1081 15.9987 16.0035 15.1033 16.0035 13.9987C16.0035 13.7658 15.9637 13.5422 15.8905 13.3344C15.928 13.3328 15.9657 13.332 16.0035 13.332C17.4763 13.332 18.6702 14.5259 18.6702 15.9987C18.6702 17.4715 17.4763 18.6654 16.0035 18.6654C14.5307 18.6654 13.3368 17.4715 13.3368 15.9987C13.3368 15.9609 13.3376 15.9232 13.3392 15.8857C13.547 15.9589 13.7706 15.9987 14.0035 15.9987Z" fill="white"/>
    </svg>
  );
}

function CursorIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="23" viewBox="0 0 21 23" fill="none">
      <path d="M1.05859 4.57617C0.570853 2.03849 3.3064 0.112127 5.53125 1.42676L17.9463 8.76367C20.2292 10.1127 19.7682 13.5435 17.21 14.2412L12.3955 15.5537C12.1467 15.6216 11.9334 15.7828 11.8008 16.0039L9.36719 20.0605C7.95075 22.4211 4.36852 21.7864 3.84863 19.083L1.05859 4.57617Z" fill="#FF4E02" stroke="white" strokeWidth="2" strokeLinecap="square"/>
    </svg>
  );
}

// --- Main Component ---
export default function MonitoringGrid() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % PATH.length);
    }, DELAY_BETWEEN_MOVES);
    return () => clearInterval(interval);
  }, []);

  const [activeRow, activeCol] = PATH[activeIdx];

  // 1. Grid base coordinates
  const gridBaseLeft = activeCol * (CELL_W + GAP);
  const gridBaseTop = activeRow * (CELL_H + GAP);

  // 2. Orange card offset (-20, -20)
  const orangeLeft = gridBaseLeft - 20;
  const orangeTop = gridBaseTop - 20;

  // 3. Cursor Locked Corner Position
  // Right side out by 5.81px, Bottom out by 8.5px
  const cursorLeft = gridBaseLeft + CELL_W - (CURSOR_W - 5.81);
  const cursorTop = gridBaseTop + CELL_H - (CURSOR_H - 8.5);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ position: "relative" }}>
        {/* Grid container */}
        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: `repeat(${COLS}, ${CELL_W}px)`,
            gridTemplateRows: `repeat(${ROWS}, ${CELL_H}px)`,
            gap: GAP,
          }}
        >
          {Array.from({ length: ROWS * COLS }, (_, i) => {
            const row = Math.floor(i / COLS);
            const col = i % COLS;
            const isActiveUnderneath = row === activeRow && col === activeCol;
            
            return (
              <div
                key={`${row}-${col}`}
                style={{
                  display: "flex",
                  height: CELL_H,
                  borderRadius: 6,
                  justifyContent: "center",
                  alignItems: "center",
                  background: isActiveUnderneath
                    ? "transparent"
                    : "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                  transition: `background ${DURATION} ${BEZIER}`,
                }}
              >
                {!isActiveUnderneath && <EyeIconGray />}
              </div>
            );
          })}

          {/* Orange active tile */}
          <div
            style={{
              position: "absolute",
              left: orangeLeft,
              top: orangeTop,
              display: "flex",
              width: CELL_W,
              height: CELL_H,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 8,
              background: "#FF4E02",
              boxShadow: "0 20px 50px -12px rgba(249, 67, 2, 0.6)",
              transition: `left ${DURATION} ${BEZIER}, top ${DURATION} ${BEZIER}`,
              zIndex: 10,
              // animation: "flicker 4s infinite step-end"
            }}
          >
            <EyeIconWhite />
          </div>

          {/* Cursor pinned to original bottom-right with specified overhang */}
          <div
            style={{
              position: "absolute",
              left: cursorLeft,
              top: cursorTop,
              width: CURSOR_W,
              height: CURSOR_H,
              transition: `left ${DURATION} ${BEZIER}, top ${DURATION} ${BEZIER}`,
              zIndex: 11,
              pointerEvents: "none",
            }}
          >
            <CursorIcon />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          38% { opacity: 0.95; }
          40% { opacity: 1; }
          42% { opacity: 0.88; }
          44% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}