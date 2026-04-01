import React from 'react'
import Title from '../molecules/Title/Title'
import RiskTable from '../molecules/RiskTable/RiskTable'
import Risks from '../atoms/Risks/Risks'

function Home2() {
  return (
    <div>
        <div className=" text-white w-screen h-screen flex flex-row gap-4"
             style={{ background: "var(--Surface-Black, #121019);" }}>
            <div className="w-[479.33] p-4 flex flex-col">
          <Title
            number={4}
            h1="Risk Context"
            h2="Understand system-level risk posture with visibility across owners, data types, and regions."
          />
            <div className="h-100.5 flex flex-col relative items-center justify-start p-6" style={{
                  borderRadius: 'var(--Corner-radius-10px, 10px)',
                  border: '1px var(--Stroke-Gradient-2, #FFF)',
                  background: 'var(--Widget-Gradient, linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.01) 100%))'
                }}>
                <div className='w-full' style={{
                    borderRadius: "var(--Corner-radius-8px, 8px) var(--Corner-radius-8px, 8px) 0 0",
                    border: "1px solid var(--Stroke-Solid, #38363E)"
                }}>
                    <RiskTable/>
                </div>
                <div className='px-5 py-3.5 w-full' style={{
                    borderRight: "1px solid var(--Stroke-Solid, #38363E)",
                    borderLeft: "1px solid var(--Stroke-Solid, #38363E)"
                }}>
                    <Risks h1='High Risk' h2='3 systems' percent='16' dotColor='#E62102'/>
                </div>
                <div className='px-5 py-3.5 w-full' style={{
                    borderTop: "1px solid var(--Stroke-Solid, #38363E)",
                    borderRight: "1px solid var(--Stroke-Solid, #38363E)",
                    borderLeft: "1px solid var(--Stroke-Solid, #38363E)"
                }}>
                    <Risks h1='Medium Risk' h2='5 systems' percent='27' dotColor='#F99718'/>
                </div>
                <div className='px-5 py-3.5 w-full' style={{
                        borderRadius: "0 0 var(--Corner-radius-8px, 8px) var(--Corner-radius-8px, 8px)",
                        border: "1px solid var(--Stroke-Solid, #38363E)"
                }}>
                    <Risks h1='Low Risk' h2='21 systems' percent='58' dotColor='#3EBE00'/>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Home2