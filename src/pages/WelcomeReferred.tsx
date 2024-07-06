import { useEffect, useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

interface WelcomeReferredPageProps {
    id: number
} 

function WelcomeReferredPage({ id }: WelcomeReferredPageProps) {
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);
    const [referrerName, setReferrerName] = useState('');
    const [referredName, setReferredName] = useState('');

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_ORIGIN}/api/referral/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id
            })
        })
            .then(res => res.json())
            .then(res => {
                if(res.msg === 'Success') {
                    setReferrerName(res.referrerName);
                    setReferredName(res.referredName);
                    setSuccess(true);
                }
            })
            .catch(() => {})
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className='w-full min-h-[32rem] flex flex-col justify-center items-center'>
            {success && (
                <div className='relative text-2xl font-bold text-center'>
                    <ConfettiExplosion className='absolute left-1/2' />
                    Welcome <span className='text-azure-600'>{referredName}</span>! You've been invited by <span className='text-azure-600'>{referrerName}</span>.
                </div>
            )}
            {(!loading && !success) && (
                <div className='text-2xl'>
                    Sorry we couldn't find that page...
                </div>
            )}
        </div>
    );
}

export default WelcomeReferredPage;
