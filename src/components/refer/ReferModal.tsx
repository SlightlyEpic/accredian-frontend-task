import * as portals from 'react-reverse-portal';
import { modalPortalNode } from '@/lib/portals';
import { Loader, XIcon } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { twMerge as tw } from 'tailwind-merge';
import ConfettiExplosion from 'react-confetti-explosion';

interface ReferModalProps {
    show: boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

function ReferModal({ show, setShow }: ReferModalProps) {
    const [errors, setErrors] = useState({
        referrerName: null,
        referrerEmail: null,
        referredName: null,
        referredEmail: null
    });

    const referrerEmail = useRef('');
    const referrerName = useRef('');
    const referredEmail = useRef('');
    const referredName = useRef('');

    const [requestLoading, setRequestLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        let id: ReturnType<typeof setTimeout>;
        if(success) {
            setErrors({
                referrerName: null,
                referrerEmail: null,
                referredName: null,
                referredEmail: null
            });
            id = setTimeout(() => {
                setSuccess(false);
                setShow(false);
            }, 2000);
        }

        return () => {
            clearTimeout(id);
        };
    }, [success]);

    const submitReferral = useCallback<React.FormEventHandler<HTMLFormElement>>(async (formData) => {
        formData.preventDefault();

        setRequestLoading(true);
        fetch(`${import.meta.env.VITE_API_ORIGIN}/api/referral/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                referrerEmail: referrerEmail.current,
                referrerName: referrerName.current,
                referredEmail: referredEmail.current,
                referredName: referredName.current,
            })
        })
            .then(res => res.json())
            .then(res => {
                if(res.msg === 'Success') {
                    setSuccess(true);
                    return;
                }

                if(res.msg === 'Error') {
                    if('issues' in res.error) {
                        // zod error
                        for(const zodError of res.error.issues) {
                            setErrors((e) => {
                                const eCopy = { ...e };
                                // @ts-expect-error thing
                                eCopy[zodError.path[0]] = zodError.message;

                                return eCopy;
                            });
                        }
                    }
                }
            })
            .catch(() => {
                alert('Something went wrong. Please refresh and try again.');
            })
            .finally(() => {
                setRequestLoading(false);
            });
    }, []);

    return <>
        {show && <portals.InPortal node={modalPortalNode}>
            <div
                className='fixed z-[100] h-screen w-screen bg-black bg-opacity-40'
            >
                <div className='flex w-full h-full items-center justify-center' id='refer-modal'>
                    {!success && <div className='flex flex-col p-4 w-full max-w-2xl h-max shadow-md rounded-md bg-white gap-4'>
                        <div className='flex justify-between w-full'>
                            <div className='font-bold text-2xl'>Enter referral details</div>
                            <button
                                className='self-end text-black'
                                onClick={() => setShow(false)}
                            >
                                <XIcon />
                            </button>
                        </div>
                        <form action="submit" onSubmit={submitReferral} className='flex flex-col gap-2'>
                            <div>
                                <div className='flex justify-between'>
                                    <label className='font-semibold'>Email:</label>
                                    <div className='text-sm text-rose-500'>{errors.referrerEmail}</div>
                                </div>
                                <input
                                    name='referrerEmail'
                                    type='email'
                                    className='w-full h-8 rounded-sm border border-gray-300 px-2'
                                    onChange={(e) => referrerEmail.current = e.target.value}
                                />
                            </div>

                            <div>
                                <div className='flex justify-between'>
                                    <label className='font-semibold'>Name:</label>
                                    <div className='text-sm text-rose-500'>{errors.referrerName}</div>
                                </div>
                                <input
                                    name='referrerName'
                                    type='text'
                                    className='w-full h-8 rounded-sm border border-gray-300 px-2'
                                    onChange={(e) => referrerName.current = e.target.value}
                                />
                            </div>

                            <div>
                                <div className='flex justify-between'>
                                    <label className='font-semibold'>Referee Email:</label>
                                    <div className='text-sm text-rose-500'>{errors.referredEmail}</div>
                                </div>
                                <input
                                    name='referredEmail'
                                    type='email'
                                    className='w-full h-8 rounded-sm border border-gray-300 px-2'
                                    onChange={(e) => referredEmail.current = e.target.value}
                                />
                            </div>

                            <div>
                                <div className='flex justify-between'>
                                    <label className='font-semibold'>Referee Name:</label>
                                    <div className='text-sm text-rose-500'>{errors.referredName}</div>
                                </div>
                                <input
                                    name='referredName'
                                    type='text'
                                    className='w-full h-8 rounded-sm border border-gray-300 px-2'
                                    onChange={(e) => referredName.current = e.target.value}
                                />
                            </div>

                            <button 
                                type='submit' 
                                className={tw(
                                    'flex justify-center gap-4 mt-8 p-2 px-6 bg-azure-600 rounded-md text-white font-semibold',
                                    requestLoading ? 'bg-azure-900' : 'hover:bg-azure-700'
                                )}
                                disabled={requestLoading}
                            >
                                {requestLoading
                                    ? <Loader className='animate-spin' />
                                    : <div>Send referral!</div>
                                }
                            </button>
                        </form>
                    </div>}

                    {success && (
                        <div className='w-max h-max p-16 rounded-md bg-white shadow-md flex flex-col items-center justify-center'>
                            <ConfettiExplosion />
                            <div className='text-2xl'>Referral successfully sent!</div>
                        </div>
                    )}
                </div>
            </div>
        </portals.InPortal>}
    </>;
}

export default ReferModal;
