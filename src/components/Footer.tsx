import { FacebookIcon, InstagramIcon, LinkedinIcon, PlusIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';

function Footer() {
    return (
        <div className='bg-gray-800 flex items-center justify-center'>
            <div className='w-full flex flex-col max-w-screen-xl p-4 py-8 gap-8 mb-12'>
                <div className='w-full flex justify-between'>
                    <img src='/images/brand/accredian-logo-white.png' className='h-12' />
                    <div className='flex flex-col items-center'>
                        <button className='rounded-md bg-azure-600 border px-8 py-2 text-white hover:bg-azure-700 font-semibold'>
                            Schedule 1-on-1 Call Now
                        </button>
                        <div className='text-white text-sm'>Speak with our Learning Advisor</div>
                    </div>
                </div>
                <div className='h-px bg-white w-full'></div>
                <div className='flex gap-8 px-4'>
                    <div className='flex flex-col gap-6 text-lg font-bold text-white'>
                        <div className='text-2xl'>Programs</div>
                        <div className='cursor-pointer flex justify-between'>
                            Data Science & AI
                            <PlusIcon className='w-32' />
                        </div>
                        <div className='cursor-pointer flex justify-between'>
                            Product Management
                            <PlusIcon className='w-32' />
                        </div>
                        <div className='cursor-pointer flex justify-between'>
                            Business Analytics
                            <PlusIcon className='w-32' />
                        </div>
                        <div className='cursor-pointer flex justify-between'>
                            Digital Transformation
                            <PlusIcon className='w-32' />
                        </div>
                        <div className='cursor-pointer flex justify-between'>
                            Business Management
                            <PlusIcon className='w-32' />
                        </div>
                        <div className='cursor-pointer flex justify-between'>
                            Project Management
                            <PlusIcon className='w-32' />
                        </div>
                        <div className='cursor-pointer flex justify-between'>
                            Strategy & Leadership
                            <PlusIcon className='w-32' />
                        </div>
                        <div className='cursor-pointer flex justify-between'>
                            Senior Management
                            <PlusIcon className='w-32' />
                        </div>
                        <div className='cursor-pointer flex justify-between'>
                            Fintech
                            <PlusIcon className='w-32' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 text-white font-semibold max-w-xl'>
                        <div className='text-xl'>Contact Us</div>
                        <div>Email us (For Data Science Queries): admissions@accredian.com</div>
                        <div>Email us (For Product Management Queries): pm@accredian.com</div>
                        <div>Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)</div>
                        <div>Product Management Admission Helpline: +91 9625811095</div>
                        <div>Enrolled Student Helpline: +91 7969322507</div>
                        <div>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</div>
                        <div className='text-xl cursor-pointer'>Why Accredian</div>
                        <div className='text-xl font-normal'>Follow Us</div>
                        <div className='flex gap-4'>
                            <FacebookIcon />
                            <LinkedinIcon />
                            <TwitterIcon />
                            <InstagramIcon />
                            <YoutubeIcon />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 text-white font-semibold'>
                        <div className='text-xl'>Accredian</div>
                        <div className='cursor-pointer'>About</div>
                        <div className='cursor-pointer'>Career</div>
                        <div className='cursor-pointer'>Blog</div>
                        <div className='cursor-pointer'>Admission Policy</div>
                        <div className='cursor-pointer'>Referral Policy</div>
                        <div className='cursor-pointer'>Privacy Policy</div>
                        <div className='cursor-pointer'>Terms Of Service</div>
                        <div className='cursor-pointer'>Master FAQs</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
