import { useState } from 'react';
import { twMerge as tw } from 'tailwind-merge';

function Toggle() {
    const [on, setOn] = useState(false);

    return (
        <div className='relative w-8 h-4 rounded-full overflow-clip border border-azure-600' onClick={() => setOn(!on)}>
            <div 
                className={tw(
                    'absolute h-4 w-8 bg-azure-300 transition-all duration-500 rounded-full',
                    on ? 'left-0' : '-left-full'
                )}
            />
            <div
                className={tw(
                    'absolute h-full aspect-square top-0 rounded-full z-10 bg-azure-600 transition-all duration-500',
                    on ? 'left-[52%]' : 'left-0'
                )}
            />
        </div>
    );
}

export default Toggle;
