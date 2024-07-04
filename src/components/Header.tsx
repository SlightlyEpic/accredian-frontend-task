import CoursesDropdown from './header/CoursesDropdown';

function Header() {
    return (
        <header className='z-10 sticky top-0 w-full h-max flex flex-col'>
            <div className='w-full h-16 bg-azure-100 flex items-center justify-center gap-4 px-4'>
                <div className='text-black/80 font-medium text-lg'>
                    Navigate your ideal career path with tailored expert advice
                </div>
                <div
                    className='text-azure-600 font-bold text-lg cursor-pointer'
                >
                    Contact Expert
                </div>
            </div>
            <div className='bg-white w-full h-20 flex items-center justify-center px-4 shadow-md'>
                <div className='h-10 w-full max-w-screen-xl flex items-center justify-between gap-8'>
                    {/* Left */}
                    <div className='h-full flex items-center gap-8'>
                        <img src='/images/brand/accredian-logo.png' className='h-full' />
                        <CoursesDropdown />
                    </div>

                    {/* Right */}
                    <div className='h-full flex items-center justify-end gap-4'>
                        <a href='/' className='h-full rounded-md p-2 px-4 text-black cursor-pointer'>
                            Refer & Earn
                        </a>
                        <div className='relative group h-full rounded-md p-2 px-4 text-black cursor-pointer'>
                            <div>Resources</div>

                            <div className='hidden w-max absolute bg-white shadow-md rounded-md group-hover:flex flex-col p-1'>
                                <div className='px-4 py-2 rounded-md hover:text-azure-600 hover:bg-azure-100'>Key Modules</div>
                                <div className='px-4 py-2 rounded-md hover:text-azure-600 hover:bg-azure-100'>Fact Sheet</div>
                                <div className='px-4 py-2 rounded-md hover:text-azure-600 hover:bg-azure-100'>E-Book</div>
                                <div className='px-4 py-2 rounded-md hover:text-azure-600 hover:bg-azure-100'>Blog</div>
                                <div className='px-4 py-2 rounded-md hover:text-azure-600 hover:bg-azure-100'>Success Stories</div>
                                <div className='px-4 py-2 rounded-md hover:text-azure-600 hover:bg-azure-100'>Glossary</div>
                                <div className='px-4 py-2 rounded-md hover:text-azure-600 hover:bg-azure-100'>Master FAQs</div>
                            </div>
                        </div>
                        <div className='relative group h-full rounded-md p-2 px-4 text-black cursor-pointer'>
                            <div>About Us</div>

                            <div className='hidden w-max absolute bg-white shadow-md rounded-md group-hover:flex flex-col p-1'>
                                <div className='px-4 py-2 rounded-md hover:text-azure-600 hover:bg-azure-100'>For Corporate</div>
                                <div className='px-4 py-2 rounded-md hover:text-azure-600 hover:bg-azure-100'>Why Accredian</div>
                                <div className='px-4 py-2 rounded-md hover:text-azure-600 hover:bg-azure-100'>Career</div>
                                <div className='px-4 py-2 rounded-md hover:text-azure-600 hover:bg-azure-100'>Vision & Mission</div>
                            </div>
                        </div>
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
