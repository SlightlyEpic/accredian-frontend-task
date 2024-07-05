import ReferFAQ from '@/components/refer/FAQ';
import HowDoIRefer from '@/components/refer/HowDoIRefer';
import ReferralBenefits from '@/components/refer/ReferralBenefits';

function ReferPage() {
    return (
        <div className='w-full flex flex-col items-center gap-8'>
            {/* Hero */}
            <div className='w-full flex justify-center px-4'>
                <div className='mt-8 w-full h-12 max-w-xl flex items-center justify-center gap-16 
                rounded-full bg-azure-100 text-gray-600 text-xl font-semibold'>
                    <a className='hover:text-azure-600' href='/'>Refer</a>
                    <a className='hover:text-azure-600' href='/#benefits'>Benefits</a>
                    <a className='hover:text-azure-600' href='/#faq'>FAQs</a>
                    <a className='hover:text-azure-600' href='/#support'>Support</a>
                </div>
            </div>
            <div className='w-full flex justify-center px-4'>
                <div className='relative w-full h-full max-w-screen-xl rounded-md bg-azure-100 flex items-center px-8 overflow-clip drop-shadow-lg'>
                    <img src='/images/cash.png' className='absolute h-1/5 -scale-y-100 -top-12' />
                    <div className='flex flex-col w-2/5 gap-8 py-4 z-10'>
                        <div className='font-bold text-6xl'>
                            Let's Learn & Earn
                        </div>
                        <div className='text-2xl'>
                            Get a chance to win up-to <span className='text-azure-600 text-4xl whitespace-nowrap font-bold'>Rs. 15,000</span>
                        </div>
                        <button className='w-max bg-azure-600 hover:bg-azure-700 rounded-md p-2 px-6 text-white font-semibold'>
                            Refer Now
                        </button>
                    </div>
                    <div className='relative w-full aspect-[4/3] overflow-clip'>
                        <img 
                            src='/images/accredian-refer.png' 
                            className='absolute left-1/2 -translate-x-1/2 top-0 h-full aspect-square scale-150 z-10'
                        />

                        <img src='/images/cash.png' className='absolute w-1/6 rotate-180 left-[25%] top-[7%]' />
                        <img src='/images/cash.png' className='absolute w-1/6 -scale-x-100 left-[7%] top-[75%] z-10' />
                        <img src='/images/cash.png' className='absolute w-1/6 -scale-y-100 left-[75%] top-[50%]' />
                        <img src='/images/cash.png' className='absolute w-1/6 rotate-180 left-[80%] top-[-10%]' />
                    </div>
                </div>
            </div>

            {/* How Do I Refer */}
            <HowDoIRefer />
            
            {/* What are the referral benefits */}
            <ReferralBenefits />

            {/* FAQs */}
            <ReferFAQ />
        </div>
    );
}

export default ReferPage;
