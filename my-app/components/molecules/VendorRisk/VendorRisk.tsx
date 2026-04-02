import React from "react";

function VendorRisk() {
  const columns = Array.from({ length: 19 }, (_, i) => {
    const colNumber = i + 1;

    // Opacity Logic
    let opacity = 0.9;
    if (colNumber <= 9) {
      opacity = colNumber * 0.1;
    } else if (colNumber >= 12) {
      opacity = 0.9 - (colNumber - 11) * 0.1;
    }

    // Color Logic
    const isRed = colNumber <= 9;
    const bgColor = isRed ? "#E62102" : "rgba(255, 255, 255, 0.12)";

    // Border Radius Logic
    let borderRadius = "0";
    if (colNumber === 1) borderRadius = "4px 0 0 4px";
    if (colNumber === 19) borderRadius = "0 4px 4px 0";

    return { opacity, bgColor, borderRadius, isTenth: colNumber === 10 };
  });

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <style>
        {`
            /* Total Cycle: 800ms
               Position A (0-400ms): Triangle @ 9th, Col 10 @ White
               Position B (400-800ms): Triangle @ 10th, Col 10 @ Red
            */

            @keyframes globalSyncFlicker {
                0%, 49.99% {
                    --tenth-color: rgba(255, 255, 255, 0.12);
                    --triangle-pos: 146.71px;
                }
                50%, 100% {
                    --tenth-color: #E62102;
                    --triangle-pos: 165.44px;
                }
            }

            /* We apply the animation to a container to keep the clock identical */
            .sync-container {
                position: relative;
                width: fit-content;
                animation: globalSyncFlicker 800ms steps(1, end) infinite;
            }

            .tenth-col-active {
                background-color: var(--tenth-color) !important;
            }

            .triangle-sync-slider {
                position: absolute;
                top: 71px; 
                left: 0;
                transform: translateX(var(--triangle-pos));
            }
            `}
      </style>

      <div
        className="w-full h-30.75 p-6 pb-8"
        style={{
          borderRadius: "var(--Corner-radius-8px, 8px)",
          border:
            "1px solid var(--transparent-surface-transparent-white-12, rgba(255, 255, 255, 0.12))",
        }}
      >
        {/* The Sync Container controls the 'clock' for everything inside it */}
        <div className="sync-container">
          <div style={{ display: "flex", gap: "4px" }}>
            {columns.map((col, index) => (
              <div
                key={index}
                className={col.isTenth ? "tenth-col-active" : ""}
                style={{
                  width: "14.73px",
                  height: "67px",
                  opacity: col.opacity,
                  backgroundColor: col.isTenth ? undefined : col.bgColor,
                  borderRadius: col.borderRadius,
                  transition: "none", // Disable any transitions that might cause lag
                }}
              />
            ))}
          </div>

          <div className="triangle-sync-slider">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="19"
              viewBox="0 0 21 19"
              fill="none"
            >
              <path
                d="M8.38457 1.13169C9.25532 -0.376494 11.4322 -0.376493 12.3029 1.13169L20.3846 15.1295C21.2553 16.6377 20.1669 18.5229 18.4254 18.5229H2.26212C0.52062 18.5229 -0.567814 16.6377 0.302934 15.1295L8.38457 1.13169Z"
                fill="#E62102"
              />
            </svg>
          </div>
        </div>
      </div>
            
        <div className="font-medium tracking-[0.1px] text-base flex flex-col gap-6">
            <div className=" text-lg tracking-[0.036px]">Remediation Progress</div>
            <div className="flex items-center gap-4">
                <div className="min-w-5 h-2 bg-[#E62102]" style={{borderRadius:"99px"}}></div>
                <div className="flex w-full items-center justify-between ">
                    <div>Overdue</div>
                    <div className="flex items-center">
                        <div className="w-19.5 h-3 bg-[#E62102] relative flex items-center" style={{
                            borderRadius: "99px"
                        }}>
                            <div className="w-4 h-4 absolute -right-2 -bottom-" style={{
                            borderRadius: "99px",
                            background: "var(--Surface-White, #FFF)",
                            boxShadow: "0 0 12px 0 rgba(255, 255, 255, 0.25)"
                        }}></div>
                        </div>
                        
                        <div className="w-[151.3] h-3" style={{
                            borderRadius: "99px",
                            background: "var(--transparent-surface-transparent-white-6, rgba(255, 255, 255, 0.06))"
                        }}></div>
                    </div>
                </div>
                <div>2</div>
            </div>
            <div className="flex items-center gap-4">
                <div className="min-w-5 h-2 bg-[#F99718]" style={{borderRadius:"99px"}}></div>
                <div className="flex w-full justify-between items-center">
                    <div>In Progress</div>
                    <div className="flex items-center">
                        <div className="w-38.5 h-3 bg-[#F99718] relative flex items-center" style={{
                            borderRadius: "99px"
                        }}>
                            <div className=" w-4 h-4 absolute -right-2 -bottom-" style={{
                            borderRadius: "99px",
                            background: "var(--Surface-White, #FFF)",
                            boxShadow: "0 0 12px 0 rgba(255, 255, 255, 0.25)"
                        }}></div>
                        </div>
                        
                        <div className="w-[77.3px] h-3" style={{
                            borderRadius: "99px",
                            background: "var(--transparent-surface-transparent-white-6, rgba(255, 255, 255, 0.06))"
                        }}></div>
                    </div>
                </div>
                <div>7</div>
            </div>
             <div className="flex items-center gap-4">
                <div className="min-w-5 h-2 bg-[#3EBE00]" style={{borderRadius:"99px"}}></div>
                <div className="flex items-center w-full justify-between">
                    <div>Completed</div>
                    <div className="flex items-center">
                        <div className="w-19.5 h-3 bg-[#3EBE00] relative flex items-center" style={{
                            borderRadius: "99px"
                        }}>
                            <div className="w-4 h-4 absolute -right-2 -bottom-" style={{
                            borderRadius: "99px",
                            background: "var(--Surface-White, #FFF)",
                            boxShadow: "0 0 12px 0 rgba(255, 255, 255, 0.25)"
                        }}></div>
                        </div>
                        
                        <div className="w-[151.3] h-3" style={{
                            borderRadius: "99px",
                            background: "var(--transparent-surface-transparent-white-6, rgba(255, 255, 255, 0.06))"
                        }}></div>
                    </div>
                </div>
                <div>3</div>
            </div>
        </div>
      <div />
    </div>
  );
}

export default VendorRisk;
