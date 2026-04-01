"use client"
import { useState, useEffect } from "react";

// Monitor icon (laptop) - 20x20
function MonitorIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <mask id="mask0_mon" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
        <rect width="20" height="20" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_mon)">
        <path d="M1.66667 16.6667C1.20833 16.6667 0.816111 16.5036 0.49 16.1775C0.163333 15.8508 0 15.4583 0 15H3.33333C2.875 15 2.48278 14.8369 2.15667 14.5108C1.83 14.1842 1.66667 13.7917 1.66667 13.3333V4.16667C1.66667 3.70833 1.83 3.31583 2.15667 2.98917C2.48278 2.66306 2.875 2.5 3.33333 2.5H16.6667C17.125 2.5 17.5175 2.66306 17.8442 2.98917C18.1703 3.31583 18.3333 3.70833 18.3333 4.16667V13.3333C18.3333 13.7917 18.1703 14.1842 17.8442 14.5108C17.5175 14.8369 17.125 15 16.6667 15H20C20 15.4583 19.8369 15.8508 19.5108 16.1775C19.1842 16.5036 18.7917 16.6667 18.3333 16.6667H1.66667ZM10 15.8333C10.2361 15.8333 10.4342 15.7533 10.5942 15.5933C10.7536 15.4339 10.8333 15.2361 10.8333 15C10.8333 14.7639 10.7536 14.5661 10.5942 14.4067C10.4342 14.2467 10.2361 14.1667 10 14.1667C9.76389 14.1667 9.56611 14.2467 9.40667 14.4067C9.24667 14.5661 9.16667 14.7639 9.16667 15C9.16667 15.2361 9.24667 15.4339 9.40667 15.5933C9.56611 15.7533 9.76389 15.8333 10 15.8333ZM3.33333 13.3333H16.6667V4.16667H3.33333V13.3333Z" fill="white"/>
      </g>
    </svg>
  );
}

// Layers/database icon - 20x20
function LayersIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M2.58816 13.7929C2.79398 13.3812 3.29455 13.2144 3.70619 13.4202L10.0002 16.5672L16.2942 13.4202C16.7058 13.2144 17.2064 13.3812 17.4122 13.7929C17.618 14.2045 17.4512 14.7051 17.0395 14.9109L10.3729 18.2442C10.1383 18.3615 9.86211 18.3615 9.6275 18.2442L2.96084 14.9109C2.54919 14.7051 2.38234 14.2045 2.58816 13.7929Z" fill="white"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M2.58816 9.62881C2.79398 9.21716 3.29455 9.0503 3.70619 9.25613L10.0002 12.4031L16.2942 9.25613C16.7058 9.0503 17.2064 9.21716 17.4122 9.62881C17.618 10.0405 17.4512 10.541 17.0395 10.7468L10.3729 14.0802C10.1383 14.1975 9.86211 14.1975 9.6275 14.0802L2.96084 10.7468C2.54919 10.541 2.38234 10.0405 2.58816 9.62881Z" fill="white"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M9.62732 1.75595C9.86193 1.63864 10.1381 1.63864 10.3727 1.75595L17.0393 5.08928C17.3217 5.23044 17.5 5.51899 17.5 5.83464C17.5 6.15028 17.3217 6.43883 17.0393 6.57999L10.3727 9.91332C10.1381 10.0306 9.86193 10.0306 9.62732 9.91332L2.96066 6.57999C2.67834 6.43883 2.5 6.15028 2.5 5.83464C2.5 5.51899 2.67834 5.23044 2.96066 5.08928L9.62732 1.75595ZM5.19672 5.83464L10 8.23627L14.8033 5.83464L10 3.433L5.19672 5.83464Z" fill="white"/>
    </svg>
  );
}

const ITEMS = [
  { title: "AWS EC2 Instance", status: "Monitored", icon: "monitor", color: "#3EBE00" },
  { title: "Production Database", status: "Connected", icon: "layers", color: "#FF4E02" },
  { title: "Employee Laptop", status: "Monitored", icon: "laptop", color: "#3EBE00" },
];

export default function Inventory() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % ITEMS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

        @keyframes pillPulse {
          0%, 100% { transform: scaleX(1); opacity: 1; }
          50% { transform: scaleX(1.3); opacity: 0.7; }
        }
      `}</style>

      {/* 1. TOP SECTION: Bordered container for only the 3 items */}
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          borderRadius: 10,
          border: "1px solid rgba(255,255,255,0.10)",
          boxSizing: "border-box",
          overflow: "hidden"
        }}
      >
        {ITEMS.map((item, i) => {
          const isActive = i === activeIdx;
          return (
            <div
              key={i}
              style={{
                display: "flex",
                height: 74,
                padding: "0 12px",
                alignItems: "center",
                gap: 12,
                alignSelf: "stretch",
                borderBottom: i === ITEMS.length - 1 ? "none" : "1px solid #38363E",
                boxSizing: "border-box",
                background: isActive ? "rgba(255,255,255,0.03)" : "transparent",
                transition: "background 0.5s ease",
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  display: "flex",
                  width: 44,
                  height: 44,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 999,
                  background: isActive ? "#2D45FD" : "rgba(255,255,255,0.06)",
                  flexShrink: 0,
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: isActive ? "scale(1.08)" : "scale(1)",
                }}
              >
                {item.icon === "layers" ? <LayersIcon /> : <MonitorIcon />}
              </div>

              {/* Text */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: isActive ? "translateX(4px)" : "translateX(0)",
                }}
              >
                <span style={{ color: "#FFF", fontSize: 16, fontWeight: 500, opacity: isActive ? 1 : 0.8 }}>
                  {item.title}
                </span>
                <span style={{ color: "rgba(255,255,255,0.60)", fontSize: 14, fontWeight: 400 }}>
                  {item.status}
                </span>
              </div>

              {/* Status pill */}
              <div
                style={{
                  width: 20,
                  height: 8,
                  borderRadius: 99,
                  background: item.color,
                  flexShrink: 0,
                  animation: isActive ? "pillPulse 1.5s ease-in-out infinite" : "none",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* 2. MIDDLE SECTION: Exact 84px Gap (Outside border) */}
      <div style={{ height: 84 }} />

      {/* 3. BOTTOM SECTION: Buttons (Outside border) */}
      <div 
          style={{ 
              display: "flex", 
              gap: 8, 
              justifyContent: "flex-start",
              width: "100%"
          }}
      >
        <div
          style={{
            display: "flex",
            width: 146,
            height: 48,
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            borderRadius: 999,
            background: "rgba(255,255,255,0.06)",
            boxSizing: "border-box"
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#3EBE00" }} />
          <span style={{ color: "#FFF", fontSize: 14, fontWeight: 500 }}>Monitored</span>
        </div>

        <div
          style={{
            display: "flex",
            width: 146,
            height: 48,
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            borderRadius: 999,
            background: "rgba(255,255,255,0.06)",
            boxSizing: "border-box"
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF4E02" }} />
          <span style={{ color: "#FFF", fontSize: 14, fontWeight: 500 }}>Connected</span>
        </div>
      </div>
    </div>
  );
}