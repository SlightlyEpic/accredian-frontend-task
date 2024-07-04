import { ChevronDown } from 'lucide-react';

function Header() {
    return (
        <header className='w-full h-full flex flex-col'>
            <div className='w-full h-16 bg-azure-100 flex items-center justify-center gap-4'>
                <div className='text-black/80 font-medium text-lg'>
                    Navigate your ideal career path with tailored expert advice
                </div>
                <div
                    className='text-azure-600 font-bold text-lg'
                >
                    Contact Expert
                </div>
            </div>
            <div className='w-full h-20 flex items-center justify-center shadow-md'>
                <div className='h-10 w-full max-w-screen-xl flex items-center justify-between gap-8'>
                    {/* Left */}
                    <div className='h-full flex items-center gap-8'>
                        <img src='/images/brand/accredian-logo.png' className='h-full' />
                        <div 
                            className='group flex gap-2 h-full rounded-md p-2 bg-azure-600 hover:bg-azure-700 
                            px-4 text-white font-semibold cursor-pointer'
                        >
                            <div>Courses</div>
                            <ChevronDown className='transition-transform duration-300 rotate-0 group-hover:rotate-180' />
                        </div>
                    </div>

                    {/* Right */}
                    <div className='h-full flex items-center justify-end gap-4'>
                        <button className='h-full rounded-md p-2 px-4 text-black'>
                            Resources
                        </button>
                        <button className='h-full rounded-md p-2 px-4 text-black'>
                            About Us
                        </button>
                        <button className='h-full rounded-md p-2 bg-gray-200 px-4 text-black'>
                            Login
                        </button>
                        <button className='h-full rounded-md p-2 bg-azure-600 hover:bg-azure-700 px-4 text-white font-semibold'>
                            Try for free
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
