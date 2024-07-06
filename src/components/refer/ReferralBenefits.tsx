import { ChevronRight, GraduationCap } from 'lucide-react';
import { Fragment, useState } from 'react';
import { twMerge as tw } from 'tailwind-merge';
import Toggle from '@/components/inputs/toggle';

const categories = [
    'All Programs',
    'Product Management',
    'Business Management',
    'Fintech',
    'Senior Management',
    'Data Science',
    'Digital Transformation',
    'Business Analytics',
];

interface ReferralBenefitsProps {
    showModal: () => unknown
}

function ReferralBenefits({ showModal }: ReferralBenefitsProps) {
    const [catIdx, setCatIdx] = useState(0);

    return (
        <div className='relative w-full h-full max-w-screen-xl p-4 py-8 flex flex-col items-center gap-8'>
            <div className='invisible absolute -top-48 h-px' id='benefits' />

            <div className='font-semibold text-xl'>
                <span className='text-black'>What Are The </span>
                <span className='text-azure-600'>Referral Benefits?</span>
            </div>

            <div className='flex flex-col w-max'>
                <div className='self-end p-2 text-sm flex gap-2 items-center'>
                    Enrolled <Toggle />
                </div>
                <div className='w-max flex justify-center gap-4'>

                    <div className='h-max flex flex-col rounded-md shadow-md text-sm font-semibold'>
                        {categories.map((cat, i) => (
                            <div
                                key={i}
                                className={tw(
                                    'w-full flex border-b border-b-gray-300 last:border-b-0 p-4 first:rounded-t-md last:rounded-b-md',
                                    'items-center justify-center cursor-pointer',
                                    catIdx === i && 'bg-azure-600 border-b-0 text-white'
                                )}
                                onClick={() => setCatIdx(i)}
                            >
                                <div className='uppercase'>{cat}</div>
                                <ChevronRight className='ml-auto' />
                            </div>
                        ))}
                    </div>

                    <div className='w-max rounded-md shadow-md overflow-clip h-[28.5rem] overflow-y-auto'>
                        <div className='grid grid-cols-[24rem_auto_auto]'>
                            <div className='h-full p-4 bg-azure-200 text-azure-800 font-bold'>
                                Programs
                            </div>
                            <div className='text-nowrap p-4 bg-azure-200 text-azure-800 font-bold'>
                                Referrer Bonus
                            </div>
                            <div className='text-nowrap p-4 bg-azure-200 text-azure-800 font-bold'>
                                Referee Bonus
                            </div>

                            
                            {new Array(7).fill(0).map((_, i) => (
                                <Fragment key={i}>
                                    <div className='flex gap-2 h-full p-4 border-r border-r-gray-300 text-sm font-semibold'>
                                        <GraduationCap /> Professional Certificate Program in Product Management Programs
                                    </div>
                                    <div className='w-full px-8 text-nowrap p-4 border-r border-r-gray-300 font-semibold justify-self-center text-center'>
                                        ₹ 10,000
                                    </div>
                                    <div className='w-full text-nowrap p-4 font-semibold justify-self-center text-center'>
                                        ₹ 10,000
                                    </div>
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <button 
                className='rounded-md p-4 px-12 bg-azure-600 hover:bg-azure-700 text-white font-semibold my-8'
                onClick={showModal}
            >
                Refer Now
            </button>
        </div>
    );
}

export default ReferralBenefits;
