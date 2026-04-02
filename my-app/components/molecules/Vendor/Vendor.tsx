 import Dot from '@/components/atoms/Dot/Dot'
import React from 'react'
 
 function Vendor() {
   return (
     <div className='flex flex-col justify-between w-full h-full'>
        <div className='w-full h-25 p-6 pb-4 flex ' style={{
            borderRadius: "var(--Corner-radius-8px, 8px)",
            border: "1px solid rgba(255, 255, 255, 0.16)"
        }}>
            <div className='flex flex-col gap-2'>
                <div className='w-31.5 h-6' style={{
                    borderRadius: "4px 0 0 4px",
                    background: "var(--Green, #3EBE00)"
                }}> </div>
                <div>17 vendors</div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='w-[144.3px] h-6' style={{
                    background: "var(--Orange-2, #F99718)"
                }}> </div>
                <div>8 vendors</div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='w-20.25 h-6' style={{
                    borderRadius: "0 4px 4px 0",
                    background: "var(--Red, #E62102)"
                }}> </div>
                <div>2 vendors</div>
            </div>
        </div>
        <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-1'>
                <div className='text-lg font-medium leading-6 tracking-[0.036px]'>Vendor Risk Overview</div>
                <div style={{color:"var(--transparent-surface-transparent-white-60, rgba(255, 255, 255, 0.60)"}}
                >Track and map assets and systems across various environments </div>
            </div>
            <div className='font-medium leading-6 tracking-[0.1px] flex flex-row justify-start items-center gap-2'>
                <div className='w-32.25 h-12 flex justify-center items-center gap-3' style={{
                    borderRadius: "var(--Corner-radius-Round, 999px)",
                    background: "var(--transparent-surface-transparent-white-6, rgba(255, 255, 255, 0.06))"
                }}>
                    <Dot color='green'/>
                    Low Risk
                </div>
                <div className='w-30.5 h-12 flex justify-center items-center gap-3' style={{
                    borderRadius: "var(--Corner-radius-Round, 999px)",
                    background: "var(--transparent-surface-transparent-white-6, rgba(255, 255, 255, 0.06))"
                }}>
                    <Dot color='orange'/>
                    Medium
                </div>
                <div className='w-24 h-12 flex justify-center items-center gap-3'style={{
                    borderRadius: "var(--Corner-radius-Round, 999px)",
                    background: "var(--transparent-surface-transparent-white-6, rgba(255, 255, 255, 0.06))"
                }}>
                    <Dot color='red'/>
                    High
                </div>
            </div>
        </div>
     </div>
   )
 }
 
 export default Vendor