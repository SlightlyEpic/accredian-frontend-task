import { ChevronDown, ChevronRight, Headset } from 'lucide-react';
import { useState } from 'react';
import { twMerge as tw } from 'tailwind-merge';

const faqCategories = [
    'Eligibility',
    'How To Use?',
    'Terms & Conditions',
];

function ReferFAQ() {
    const [catIdx, setCatIdx] = useState(0);

    return (
        <div className='relative w-full h-full max-w-screen-xl flex flex-col items-center gap-12 p-4 mb-16'>
            <div className='invisible absolute -top-48 h-px' id='faq' />

            <div className='font-bold text-xl'>
                <span className='text-black'>Frequently Asked </span>
                <span className='text-azure-600'>Questions</span>
            </div>

            <div className='w-full flex justify-center gap-16'>
                <div className='flex flex-col gap-4'>
                    {faqCategories.map((faq, i) => (
                        <button
                            key={i}
                            className={tw(
                                'rounded-md p-4 px-8 shadow-md text-gray-500 font-bold',
                                catIdx === i && 'text-azure-600'
                            )}
                            onClick={() => setCatIdx(i)}
                        >
                            {faq}
                        </button>
                    ))}
                </div>

                <div className='flex flex-col gap-8'>
                    <details className='group max-w-3xl open:shadow-md p-2 rounded-md'>
                        <summary className='text-black font-semibold group-open:text-azure-600 flex cursor-pointer'>
                            <div>Do I need to have prior Product Management and Project Management experience to enroll in the program?</div>
                            <ChevronDown size={24} className='ml-auto transition-transform duration-300 rotate-0 group-open:rotate-180' />
                        </summary>
                        <div className='mt-2'>
                            No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it
                            suitable for individuals from any field of work.
                        </div>
                    </details>

                    <details className='group max-w-3xl open:shadow-md p-2 rounded-md'>
                        <summary className='text-black font-semibold group-open:text-azure-600 flex cursor-pointer'>
                            <div>What is the minimum system configuration required?</div>
                            <ChevronDown size={24} className='ml-auto transition-transform duration-300 rotate-0 group-open:rotate-180' />
                        </summary>
                        <div className='mt-2'>
                            You need a computer that can run google meet.
                        </div>
                    </details>
                </div>
            </div>

            <div className='relative mt-12 w-full h-full max-w-scree-xl p-4 rounded-md bg-azure-600 flex items-center gap-4 py-12 px-8 overflow-clip'>
                <div className='invisible absolute -top-48 h-px' id='support' />

                <div className='rounded-md bg-azure-500 p-1 z-10'>
                    <div className='rounded-xl bg-white text-azure-600 p-2'>
                        <Headset size='4rem' />
                    </div>
                </div>
                <div className='flex flex-col z-10'>
                    <div className='text-2xl text-white font-bold'>
                        Want to delve deeper into the program?
                    </div>
                    <div className='text-white'>
                        Share your details to receive expert insights from our program team!
                    </div>
                </div>
                <button className='ml-auto flex items-center gap-2 rounded-md bg-white text-azure-600 p-2 px-4 font-semibold z-10'>
                    Get in touch
                    <ChevronRight size='1rem' />
                </button>

                {/* Background decoration */}
                <div className='absolute left-1/2 top-8 h-[36rem] aspect-square rounded-full step-radial-gradient' />
            </div>
        </div>
    );
}

export default ReferFAQ;
