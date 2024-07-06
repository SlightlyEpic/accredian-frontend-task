import { ClipboardPen, UserPlus, Wallet } from 'lucide-react';

interface HowDoIReferProps {
    showModal: () => unknown
}

function HowDoIRefer({ showModal }: HowDoIReferProps) {
    return (
        <div className='w-full h-full bg-azure-100 p-4 flex flex-col gap-8 items-center'>
            <div className='font-bold text-2xl mt-4'>
                <span className='text-black'>How Do I </span>
                <span className='text-azure-600'>Refer?</span>
            </div>
            <div className='w-full flex justify-center'>
                <div className='relative w-96 rounded-full'>
                    <div className='p-16'>
                        <div className='flex flex-col gap-6 items-center justify-center h-full aspect-square p-8 shadow-md text-azure-600 rounded-full'>
                            <UserPlus size={64} />
                            <span className='text-black text-wrap text-center font-semibold'>
                                Submit referral's easily via our website's referral section.
                            </span>
                        </div>
                    </div>

                    {/* The rings, this can be improved */}
                    <div className='absolute left-0 top-0 w-full h-full'>
                        <div className='relative w-full h-full flex'>
                            <div className='absolute top-0 left-1/2 w-8 h-8 rounded-full border-4 border-azure-600
                            -translate-x-1/2 -translate-y-1/2 bg-azure-100 z-10' />
                            <div className='relative w-1/2 h-full overflow-clip'>
                                <div className='w-[200%] h-full rounded-full border-4 border-dashed border-azure-600' />
                            </div>
                            <div className='relative w-1/2 h-1/2 overflow-clip self-end'>
                                <div className='w-[200%] h-[200%] rounded-full border-4 border-azure-600 -translate-x-1/2
                                absolute left-0 -top-full' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative w-96 rounded-full -ml-1'>
                    <div className='p-16'>
                        <div className='flex flex-col gap-6 items-center justify-center h-full aspect-square p-8 shadow-md text-azure-600 rounded-full'>
                            <ClipboardPen size={64} />
                            <span className='text-black text-wrap text-center font-semibold'>
                                Earn rewards once your referral joins an Accredian program.
                            </span>
                        </div>
                    </div>


                    {/* The rings */}
                    <div className='absolute left-0 top-0 w-full h-full'>
                        <div className='relative w-full h-full flex'>
                            <div
                                className='bg-azure-600 w-8 h-8 absolute left-1/2 -translate-x-1/2 -translate-y-1/2'
                                style={{
                                    clipPath: 'polygon(0 0, 0% 100%, 100% 50%)'
                                }}
                            />
                            <div className='relative w-1/2 h-full flex flex-col'>
                                <div className='w-full h-1/2 overflow-clip'>
                                    <div className='w-[200%] h-[200%] rounded-full border-4 border-azure-600' />
                                </div>
                                <div className='absolute top-1/2 w-full h-1/2 overflow-clip'>
                                    <div className='w-full h-full absolute top-1/2 overflow-clip'>
                                        <div className='w-[200%] h-[200%] rounded-full border-4 border-dashed border-azure-600
                                        absolute -top-[150%]' />
                                    </div>
                                </div>
                            </div>
                            <div className='absolute top-3/4 left-[8%] w-8 h-8 rounded-full border-4 border-azure-600
                            -translate-x-1/2 -translate-y-1/2 bg-azure-100 z-10' />
                            <div className='relative w-1/2 h-1/2 overflow-clip self-end'>
                                <div className='w-[200%] h-[200%] rounded-full border-4 border-azure-600 -translate-x-1/2
                                absolute left-0 -top-full' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative w-96 rounded-full'>
                    <div className='p-16'>
                        <div className='flex flex-col gap-6 items-center justify-center h-full aspect-square p-8 shadow-md text-azure-600 rounded-full'>
                            <Wallet size={64} />
                            <span className='text-black text-wrap text-center font-semibold'>
                                Both parties receive a bonus 30 days after program enrollment.
                            </span>
                        </div>
                    </div>

                    {/* The rings */}
                    <div className='absolute left-0 top-0 w-full h-full -ml-1'>
                        <div className='relative w-full h-full flex'>
                            <div
                                className='bg-azure-600 w-8 h-8 absolute left-1/2 -translate-x-1/2 -translate-y-1/2'
                                style={{
                                    clipPath: 'polygon(0 0, 0% 100%, 100% 50%)'
                                }}
                            />
                            <div className='relative w-1/2 h-1/2 overflow-clip'>
                                <div className='w-[200%] h-[200%] rounded-full border-4 border-azure-600' />
                            </div>
                            <div className='relative w-1/2 h-full overflow-clip rotate-180'>
                                <div className='w-[200%] h-full rounded-full border-4 border-dashed border-azure-600' />
                            </div>
                            <div className='absolute top-full left-1/2 w-8 h-8 rounded-full border-4 border-azure-600
                            -translate-x-1/2 -translate-y-1/2 bg-azure-100 z-10' />
                        </div>
                    </div>
                </div>
            </div>

            <button 
                className='rounded-md p-4 px-12 bg-azure-600 hover:bg-azure-700 text-white font-semibold'
                onClick={showModal}
            >
                Refer Now
            </button>
        </div>
    );
}

export default HowDoIRefer;
