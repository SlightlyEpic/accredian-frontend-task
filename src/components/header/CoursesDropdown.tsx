import { ChevronDown, ChevronRight } from 'lucide-react';
import { useCallback, useState } from 'react';
import * as portals from 'react-reverse-portal';
import { twMerge as tw } from 'tailwind-merge';
import { debounce } from 'lodash';

import { modalPortalNode } from '@/lib/portals';
import { headerCourses } from '@/data/Header';

function CoursesDropdown() {
    const [showCourses, setShowCourses] = useState(false);
    const [catIdx, setCatIdx] = useState(0);

    const hide = useCallback(() => setShowCourses(false), []);
    const hideDebounced = useCallback(debounce(hide, 500), []);

    const show = useCallback(() => {
        hideDebounced.cancel();
        setShowCourses(true);
    }, [hideDebounced]);

    return (
        <>
            <div
                className='relative group flex gap-2 h-full rounded-md p-2 bg-azure-600 hover:bg-azure-700 
                px-4 text-white font-semibold cursor-pointer'
                onMouseEnter={show}
                onMouseLeave={hideDebounced}
            >
                <div>Courses</div>
                <ChevronDown className={tw(
                    'transition-transform duration-300 rotate-0',
                    showCourses && 'rotate-180'
                )} />

                {showCourses && <portals.InPortal node={modalPortalNode}>
                    <div 
                        className='fixed z-[100] mt-36 h-[calc(100vh-9rem)] w-screen bg-black bg-opacity-40' 
                        onMouseEnter={hideDebounced}
                    >
                        <div
                            className='absolute left-[16%] flex gap-4 bg-white p-4 rounded-b-md shadow-md border-t border-gray-300'
                            onMouseEnter={show}
                            onMouseLeave={hideDebounced}
                        >
                            <div className='flex flex-col gap-2'>
                                {headerCourses.categories.map((cat, i) => (
                                    <div
                                        key={cat.name}
                                        className={tw(
                                            'flex gap-2 w-full rounded-md text-sm p-2 px-4 cursor-pointer shadow-md',
                                            i === catIdx && 'bg-azure-600 text-white'
                                        )}
                                        onClick={() => setCatIdx(i)}
                                    >
                                        {cat.name}
                                        <ChevronRight className='ml-auto' strokeWidth={1} size={20} />
                                    </div>
                                ))}
                            </div>
                            <div className='flex flex-col gap-4'>
                                <div className='text-2xl font-bold'>
                                    {headerCourses.categories[catIdx].name}
                                </div>
                                <div className='grid grid-cols-2 gap-4'>
                                    {headerCourses.categories[catIdx].programs.map(prog => (
                                        <div key={prog.title} className='relative w-64 p-4 rounded-md shadow-md flex flex-col gap-2 cursor-pointer'>
                                            <div className='flex gap-2'>
                                                <img src='/images/spidermna.png' className='w-12 h-12 rounded-md' />
                                                <div className='flex flex-col gap-1'>
                                                    <div className='text-xs text-gray-600'>{prog.organization}</div>
                                                    <div className='text-md'>{prog.title}</div>
                                                </div>
                                            </div>
                                            <div className='text-gray-600 text-sm mt-auto'>
                                                {prog.duration} - Online
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </portals.InPortal>}
            </div>
        </>
    );
}

export default CoursesDropdown;
