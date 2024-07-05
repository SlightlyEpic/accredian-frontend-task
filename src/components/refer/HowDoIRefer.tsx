import { ClipboardPen, UserPlus, Wallet } from 'lucide-react';

function HowDoIRefer() {
    return (
        <div className='w-full h-full bg-azure-100 p-4 flex flex-col items-center'>
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

                    <div className='absolute left-0 top-0 w-full h-full rounded-full'>
                        .
                    </div>
                </div>
                <div className='w-96 p-16 rounded-full'>
                    <div className='flex flex-col gap-6 items-center justify-center h-full aspect-square p-8 shadow-md text-azure-600 rounded-full'>
                        <ClipboardPen size={64} />
                        <span className='text-black text-wrap text-center font-semibold'>
                            Earn rewards once your referral joins an Accredian program.
                        </span>
                    </div>
                </div>
                <div className='w-96 p-16 rounded-full'>
                    <div className='flex flex-col gap-6 items-center justify-center h-full aspect-square p-8 shadow-md text-azure-600 rounded-full'>
                        <Wallet size={64} />
                        <span className='text-black text-wrap text-center font-semibold'>
                            Both parties receive a bonus 30 days after program enrollment.
                        </span>
                    </div>
                </div>
            </div>

            <button className='rounded-md p-4 px-12 bg-azure-600 hover:bg-azure-700 text-white font-semibold'>
                Refer Now
            </button>
        </div>
    );
}

export default HowDoIRefer;
