"use client"

import { useState, useEffect } from "react";

const ROWS = 4;
const COLS = 4;

// Eye icon for gray tiles (smaller, 0.2 opacity)
function EyeIconGray() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="22" viewBox="0 0 27 22" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.3438 6.70028e-05C10.8863 -0.000437809 11.3646 -0.000882854 11.8292 0.110656C12.2374 0.208643 12.6275 0.37026 12.9854 0.589575C13.3928 0.839216 13.7307 1.17776 14.114 1.56172L15.219 2.6668L21.1181 2.6668C21.8209 2.66678 22.4273 2.66676 22.9267 2.70756C23.4538 2.75063 23.9781 2.84572 24.4826 3.10278C25.2353 3.48627 25.8472 4.09819 26.2307 4.85084C26.4878 5.35535 26.5828 5.87964 26.6259 6.40676C26.6667 6.90619 26.6667 7.51253 26.6667 8.21538V15.7849C26.6667 16.4877 26.6667 17.0941 26.6259 17.5935C26.5828 18.1206 26.4878 18.6449 26.2307 19.1494C25.8472 19.9021 25.2353 20.514 24.4826 20.8975C23.9781 21.1546 23.4538 21.2496 22.9267 21.2927C22.4273 21.3335 21.8209 21.3335 21.1181 21.3335H5.54848C4.84568 21.3335 4.23936 21.3335 3.73997 21.2927C3.21284 21.2496 2.68855 21.1546 2.18404 20.8975C1.4314 20.514 0.819473 19.9021 0.43598 19.1494C0.178921 18.6449 0.0838327 18.1206 0.0407646 17.5935C-3.75261e-05 17.0941 -1.97173e-05 16.4877 9.24074e-07 15.7849V5.54864C-1.97173e-05 4.84584 -3.75236e-05 4.23949 0.0407646 3.7401C0.0838327 3.21297 0.178921 2.68868 0.435979 2.18417C0.819473 1.43153 1.4314 0.819603 2.18404 0.43611C2.68855 0.179051 3.21284 0.0839629 3.73997 0.0408949C4.2394 8.99856e-05 4.84575 0.000110554 5.54861 0.000134396L10.3438 6.70028e-05ZM18.4749 12.6194C17.7022 13.7425 15.8375 16.0001 13.3332 16.0001C10.829 16.0001 8.96422 13.7425 8.19154 12.6194C7.93268 12.2432 7.93268 11.7571 8.19154 11.3809C8.96422 10.2578 10.829 8.00014 13.3332 8.00014C15.8375 8.00014 17.7022 10.2578 18.4749 11.3809C18.7337 11.7571 18.7337 12.2432 18.4749 12.6194ZM14.6668 12.0001C14.6668 12.7365 14.0698 13.3335 13.3335 13.3335C12.5971 13.3335 12.0001 12.7365 12.0001 12.0001C12.0001 11.2638 12.5971 10.6668 13.3335 10.6668C14.0698 10.6668 14.6668 11.2638 14.6668 12.0001Z" fill="white" fillOpacity="0.2"/>
    </svg>
  );
}

// Eye icon for orange tile (white, larger)
function EyeIconWhite() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ width: 32, height: 32, flexShrink: 0 }}>
      <path fillRule="evenodd" clipRule="evenodd" d="M3.03028 14.3185C4.18938 11.7155 7.85888 5.33203 16.0039 5.33203C24.1491 5.33203 27.8183 11.7158 28.9772 14.3188C29.4549 15.3918 29.4549 16.6056 28.9772 17.6786C27.8183 20.2816 24.1491 26.6654 16.0039 26.6654C7.85888 26.6654 4.18938 20.2819 3.03028 17.6789C2.55241 16.6057 2.55241 15.3917 3.03028 14.3185ZM16.0035 21.332C18.949 21.332 21.3368 18.9442 21.3368 15.9987C21.3368 13.0532 18.949 10.6654 16.0035 10.6654C13.058 10.6654 10.6702 13.0532 10.6702 15.9987C10.6702 18.9442 13.058 21.332 16.0035 21.332Z" fill="white"/>
      <path d="M14.0035 15.9987C15.1081 15.9987 16.0035 15.1033 16.0035 13.9987C16.0035 13.7658 15.9637 13.5422 15.8905 13.3344C15.928 13.3328 15.9657 13.332 16.0035 13.332C17.4763 13.332 18.6702 14.5259 18.6702 15.9987C18.6702 17.4715 17.4763 18.6654 16.0035 18.6654C14.5307 18.6654 13.3368 17.4715 13.3368 15.9987C13.3368 15.9609 13.3376 15.9232 13.3392 15.8857C13.547 15.9589 13.7706 15.9987 14.0035 15.9987Z" fill="white"/>
    </svg>
  );
}

// Cursor icon
function CursorIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="23" viewBox="0 0 21 23" fill="none" style={{ width: 20.308, height: 24 }}>
      <path d="M1.05859 4.57617C0.570853 2.03849 3.3064 0.112127 5.53125 1.42676L17.9463 8.76367C20.2292 10.1127 19.7682 13.5435 17.21 14.2412L12.3955 15.5537C12.1467 15.6216 11.9334 15.7828 11.8008 16.0039L9.36719 20.0605C7.95075 22.4211 4.36852 21.7864 3.84863 19.083L1.05859 4.57617Z" fill="#FF4E02" stroke="white" strokeWidth="2" strokeLinecap="square"/>
    </svg>
  );
}

// Path the orange tile follows — only the 4 centre cells
const PATH = [
  [1,1],[1,2],[2,2],[2,1],
];

export default function MonitoringGrid() {
  const [activeIdx, setActiveIdx] = useState(0);
  const GAP = 8;
  const CELL_W = 96.833;
  const CELL_H = 85.5;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % PATH.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const [activeRow, activeCol] = PATH[activeIdx];

  // Calculate orange tile position
  const orangeLeft = activeCol * (CELL_W + GAP) - 20;
  const orangeTop = activeRow * (CELL_H + GAP) - 20;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div style={{ position: "relative" }}>
        {/* Stacked cards */}
        <div style={{ position: "absolute", top: -10, left: 6, right: -6, bottom: 10, background: "#16161A", borderRadius: 18, border: "1px solid rgba(255,255,255,0.03)" }} />
        <div style={{ position: "absolute", top: -5, left: 3, right: -3, bottom: 5, background: "#1A1A1E", borderRadius: 18, border: "1px solid rgba(255,255,255,0.04)" }} />

        {/* Main card */}
        <div
          style={{
            position: "relative",
            background: "#1E1E22",
            borderRadius: 16,
            padding: 20,
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
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
            {/* Gray tiles — hide the one under the orange tile */}
            {Array.from({ length: ROWS * COLS }, (_, i) => {
              const row = Math.floor(i / COLS);
              const col = i % COLS;
              const isActive = row === activeRow && col === activeCol;
              return (
                <div
                  key={`${row}-${col}`}
                  style={{
                    display: "flex",
                    height: CELL_H,
                    minWidth: 80,
                    padding: 4,
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 4,
                    alignSelf: "stretch",
                    borderRadius: 6,
                    background: isActive
                      ? "transparent"
                      : "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                    transition: "background 0.15s ease",
                  }}
                >
                  {!isActive && <EyeIconGray />}
                </div>
              );
            })}

            {/* Orange active tile — absolutely positioned */}
            <div
              style={{
                position: "absolute",
                left: orangeLeft,
                top: orangeTop,
                display: "flex",
                width: CELL_W,
                height: CELL_H,
                minWidth: 80,
                padding: 4,
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
                borderRadius: 8,
                background: "#FF4E02",
                boxShadow: "0 0 50px 0 rgba(249, 67, 2, 0.25)",
                transition: "left 0.45s cubic-bezier(0.4, 0, 0.2, 1), top 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                zIndex: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 32,
                  height: 32,
                  padding: 0,
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 13.333,
                  flexShrink: 0,
                }}
              >
                <EyeIconWhite />
              </div>
            </div>

            {/* Cursor — follows orange tile, offset to bottom-right */}
            <div
              style={{
                position: "absolute",
                left: orangeLeft + CELL_W + 6,
                top: orangeTop + CELL_H + 8,
                transition: "left 0.45s cubic-bezier(0.4, 0, 0.2, 1), top 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                zIndex: 11,
                pointerEvents: "none",
              }}
            >
              <CursorIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}