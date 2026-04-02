"use client"
import React, { useState } from 'react';
import woman from '../../public/woman-laptop.svg';
import Image from 'next/image';

const faqData = [
  {
    id: 1,
    question: "How does the platform handle multi-entity governance across subsidiaries?",
    answer: "Audit trails are automatically recorded for every evidence action. Each entry logs who did what, when, and where, along with full version history. All changes are time-stamped, immutable, and traceable, giving auditors a complete, tamper-evident history of each artifact."
  },
  {
    id: 2,
    question: "How is sensitive compliance data secured within the platform?",
    answer: "Audit trails are automatically recorded for every evidence action. Each entry logs who did what, when, and where, along with full version history. All changes are time-stamped, immutable, and traceable, giving auditors a complete, tamper-evident history of each artifact."
  },
  {
    id: 3,
    question: "How are audit trails maintained for submitted evidence?",
    answer: "Audit trails are automatically recorded for every evidence action. Each entry logs who did what, when, and where, along with full version history. All changes are time-stamped, immutable, and traceable, giving auditors a complete, tamper-evident history of each artifact."
  },
  {
    id: 4,
    question: "How frequently are security controls and policies reviewed or updated?",
    answer: "Audit trails are automatically recorded for every evidence action. Each entry logs who did what, when, and where, along with full version history. All changes are time-stamped, immutable, and traceable, giving auditors a complete, tamper-evident history of each artifact."
  },
  {
    id: 5,
    question: "Is the platform itself compliant with standards like ISO 27001 or SOC 2?",
    answer: "Audit trails are automatically recorded for every evidence action. Each entry logs who did what, when, and where, along with full version history. All changes are time-stamped, immutable, and traceable, giving auditors a complete, tamper-evident history of each artifact."
  },
  {
    id: 6,
    question: "Are data residency and regional compliance requirements supported?",
    answer: "Audit trails are automatically recorded for every evidence action. Each entry logs who did what, when, and where, along with full version history. All changes are time-stamped, immutable, and traceable, giving auditors a complete, tamper-evident history of each artifact."
  }
];

function FAQ() {
  // State, რომელიც ინახავს გახსნილი კითხვის ID-ს (მხოლოდ ერთი ერთდროულად)
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    // თუ უკვე ღიაა, დახურე. თუ არა, გახსენი ახალი და დახურე ძველი.
    setOpenId(openId === id ? null : id);
  };

  // Custom Bezier Curve ანიმაციებისთვის
  const customBezier = 'cubic-bezier(0.42, 0, 0.58, 1)';

  return (
    <div className='flex flex-col gap-16 w-screen min-h-screen justify-center items-center text-[#FFF] py-10' style={{
        background: "var(--Surface-Black, #121019)"
    }}>
        {/* სათაურის სექცია */}
        <div className='flex flex-col gap-6 text-center'>
            <div className='text-5xl font-medium text-[#FFF] capitalize leading-15'>Frequently Asked <span className='italic font-semibold' style={{
                color: "var(--transparent-surface-transparent-white-50, rgba(255, 255, 255, 0.50))"
            }}>Questions</span> </div>
            <div className='text-lg' style={{
                color: "var(--transparent-surface-transparent-white-80, rgba(255, 255, 255, 0.80))"
            }}>You're never alone. Our dedicated support team is available helping you solve issues </div>
        </div>

        {/* ტაბები */}
        <div className='flex items-center'>
            <div className='flex justify-center items-center px-5 py-3' style={{
                borderRadius: "var(--Corner-radius-Round, 999px)",
                background: "var(--transparent-surface-transparent-white-6, rgba(255, 255, 255, 0.06))"
            }}>Platform</div>
            <div className='px-5 py-3' style={{
                borderRadius: "var(--Corner-radius-Round, 999px)",
                background: "var(--Widget-Gradient, linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.01) 100%))"
            }}>Security</div>
            <div className='px-5 py-3' style={{
                borderRadius: "99px",
                border: "1px solid var(--Stroke-Gradient-2, #FFF)",
                background: "var(--Widget-Gradient, linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.01) 100%))"
            }}>Onboarding</div>
        </div>

        {/* მთავარი კონტენტი (items-start უზრუნველყოფს, რომ მარცხენა ბლოკი არ გაიწელოს სიმაღლეში ჩამოშლისას) */}
        <div className='flex gap-6 items-start'>
            {/* მარცხენა სვეტი: z-20 */}
            <div className='flex flex-col gap-4.75 z-20 sticky top-10'>
                <div className='w-89 h-102.75 relative' style={{
                        borderRadius: "var(--Corner-radius-10px, 10px)",
                        border: "1px solid var(--transparent-surface-transparent-white-16, rgba(255, 255, 255, 0.16))",
                        background: "var(--Widget-Gradient, linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.01) 100%))"
                    }}>
                        <div className='absolute z-30 w-115.5 h-119.75 bottom-0 -left-15.5'>
                            <Image src={woman} alt='Woman standing holding laptop' width={462} height={479} priority />
                        </div>
                </div>
                <div className='w-89 h-24.5 p-5 flex items-center justify-center' style={{
                    borderRadius: "24px",
                    border: "1px solid var(--transparent-surface-transparent-white-16, rgba(255, 255, 255, 0.16))",
                    background: "var(--Widget-Gradient, linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.01) 100%))"
                }}> 
                    <div className='flex gap-3 items-center w-full h-full justify-center cursor-pointer transition-colors duration-[90ms]' style={{
                        borderRadius: "var(--Corner-radius-10px, 10px)",
                        background: "var(--Blue, #2D45FD)",
                        transitionTimingFunction: customBezier
                    }}>
                        <div className='text-lg font-medium tracking-[0.036px]'>Request Agent</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 14C15.2181 14 15.2929 14.2769 15.1264 14.4177C13.8258 15.5183 13 17.1627 13 19V21.5C13 21.7761 12.7761 22 12.5 22H7C5.34315 22 4 20.6569 4 19C4 16.2386 6.23858 14 9 14H15Z" fill="white"/>
                            <path d="M12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2Z" fill="white"/>
                            <path d="M18.5374 15.308C18.7082 14.8973 19.29 14.8973 19.4608 15.308L20.2501 17.2059C20.3217 17.378 20.483 17.4959 20.6686 17.512L22.5431 17.6745C22.9724 17.7118 23.1567 18.2382 22.8444 18.5351L21.4204 19.8886C21.2912 20.0114 21.2372 20.1936 21.2785 20.367L21.759 22.3813C21.8622 22.8139 21.3916 23.1558 21.012 22.924L19.2597 21.8537C19.0997 21.756 18.8985 21.756 18.7385 21.8537L16.9862 22.924C16.6066 23.1558 16.136 22.8139 16.2392 22.3813L16.7198 20.3664C16.7611 20.1934 16.7073 20.0114 16.5786 19.8886L15.1594 18.5344C14.8481 18.2373 15.0326 17.7118 15.4613 17.6745L17.3297 17.5121C17.5152 17.496 17.6765 17.378 17.748 17.206L18.5374 15.308Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            </div>

            {/* მარჯვენა სვეტი: FAQ - z-10 */}
            <div className='w-217.5 flex flex-col relative z-10'>
                {faqData.map((faq, index) => {
                    const isOpen = openId === faq.id;
                    const isFirst = index === 0;
                    const isLast = index === faqData.length - 1;

                    // ვადგენთ border-radius-ს პირველი და ბოლო ელემენტებისთვის
                    let borderRadiusStyle = "0";
                    if (isFirst) borderRadiusStyle = "24px 24px 0 0";
                    else if (isLast) borderRadiusStyle = "0 0 24px 24px";

                    return (
                        <div key={faq.id} className='w-full px-5 py-4 flex flex-col justify-center' style={{
                            borderRadius: borderRadiusStyle,
                            borderTop: isFirst ? "1px solid var(--transparent-surface-transparent-white-16, rgba(255, 255, 255, 0.16))" : "none",
                            borderBottom: "1px solid var(--transparent-surface-transparent-white-16, rgba(255, 255, 255, 0.16))",
                            borderRight: "1px solid var(--transparent-surface-transparent-white-16, rgba(255, 255, 255, 0.16))",
                            borderLeft: "1px solid var(--transparent-surface-transparent-white-16, rgba(255, 255, 255, 0.16))",
                            backdropFilter: "blur(16px)",
                            minHeight: "88px" // ინარჩუნებს h-22 ზომას, როცა დახურულია
                        }}>
                            {/* კითხვა და ღილაკი */}
                            <div className='flex items-center justify-between'>
                                <div className='flex gap-4 items-center'>
                                    <div className='w-12 h-12 rounded-lg bg-[#2D45FD] font-semibold flex items-center justify-center shrink-0'>
                                        {faq.id}
                                    </div>
                                    <div className='text-lg font-medium tracking-[0.036px]'>{faq.question}</div>
                                </div>
                                
                                {/* Trigger Button */}
                                <button 
                                    onClick={() => toggleAccordion(faq.id)}
                                    className='w-12 h-12 flex justify-center items-center rounded-lg cursor-pointer shrink-0 transition-colors duration-90 bg-[#201E27] hover:bg-[#25232B]'
                                    style={{ transitionTimingFunction: customBezier }}
                                >
                                    <svg 
                                        className={`transition-transform duration-100 ${isOpen ? 'scale-y-[-1]' : 'scale-y-[1]'}`}
                                        style={{ transitionTimingFunction: customBezier }}
                                        xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none"
                                    >
                                        <path d="M6.50364 4.87083L11.0536 0.320833C11.2675 0.106944 11.5398 -6.41708e-08 11.8703 -4.97217e-08C12.2009 -3.52727e-08 12.4731 0.106944 12.687 0.320833C12.9009 0.534722 13.0078 0.806944 13.0078 1.1375C13.0078 1.46806 12.9009 1.74028 12.687 1.95417L7.32031 7.32083C7.20364 7.4375 7.07726 7.52014 6.94114 7.56875C6.80503 7.61736 6.6592 7.64167 6.50364 7.64167C6.34809 7.64167 6.20226 7.61736 6.06614 7.56875C5.93003 7.52014 5.80364 7.4375 5.68698 7.32083L0.320311 1.95417C0.106421 1.74028 -0.000522678 1.46806 -0.000522663 1.1375C-0.000522649 0.806944 0.106421 0.534722 0.320311 0.320833C0.5342 0.106944 0.806422 -5.3334e-07 1.13698 -5.18891e-07C1.46753 -5.04442e-07 1.73976 0.106944 1.95364 0.320833L6.50364 4.87083Z" fill="white"/>
                                    </svg>
                                </button>
                            </div>

                            {/* Smart Animate Container */}
                            <div 
                                className="grid transition-all duration-120" 
                                style={{ 
                                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                                    transitionTimingFunction: customBezier
                                }}
                            >
                                <div className="overflow-hidden">
                                    <div className="pt-4 text-lg leading-6 tracking-[0.036px] text-[rgba(255,255,255,0.7)] mx-16" style={{
                                        color: "var(--transparent-surface-transparent-white-80, rgba(255, 255, 255, 0.80))"
                                    }}>
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
  )
}

export default FAQ;