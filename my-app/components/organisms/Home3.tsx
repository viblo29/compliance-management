import React from 'react'
import Title from '../molecules/Title/Title'
import Vendor from '../molecules/Vendor/Vendor'
import VendorRisk from '../molecules/VendorRisk/VendorRisk'

function Home3() {
  return (
    <div>
        <div
        className=" text-white w-screen h-screen flex flex-row gap-4"
        style={{ background: "var(--Surface-Black, #121019);" }}
      >
        <div className="w-[479.33] p-4 flex flex-col">
          <Title
            number={7}
            h1="Vendor Inventory"
            h2="Maintain a centralized record of all third-party vendors and their associated systems."
          />
            <div className="h-100.5 flex relative items-start justify-center p-6" style={{
                  borderRadius: 'var(--Corner-radius-10px, 10px)',
                  border: '1px var(--Stroke-Gradient-2, #FFF)',
                  background: 'var(--Widget-Gradient, linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.01) 100%))'
                }}>
                <Vendor/>
            </div>
        </div>

                        <div className="w-px h-164.5" style={{background: "var(--transparent-surface-transparent-white-15, rgba(255, 255, 255, 0.16))"}}></div>


        <div className="w-[479.33] p-4 flex flex-col">
          <Title
            number={8}
            h1="Vendor Assessments"
            h2="Evaluate vendor security posture through structured questionnaires and document reviews."
          />
            <div className="h-100.5 flex relative items-start justify-center p-10" style={{
                  borderRadius: 'var(--Corner-radius-10px, 10px)',
                  border: '1px var(--Stroke-Gradient-2, #FFF)',
                  background: 'var(--Widget-Gradient, linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.01) 100%))'
                }}>

            </div>
        </div>
                
                        <div className="w-px h-164.5" style={{background: "var(--transparent-surface-transparent-white-15, rgba(255, 255, 255, 0.16))"}}></div>

        <div className="w-[479.33] p-4 flex flex-col">
          <Title
            number={8}
            h1="Vendor Assessments"
            h2="Evaluate vendor security posture through structured questionnaires and document reviews."
          />
            <div className="h-100.5 flex relative items-start justify-center p-6" style={{
                  borderRadius: 'var(--Corner-radius-10px, 10px)',
                  border: '1px var(--Stroke-Gradient-2, #FFF)',
                  background: 'var(--Widget-Gradient, linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.01) 100%))'
                }}>
                <VendorRisk/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Home3