import { useCallback, useState } from 'react';

import ReferFAQ from '@/components/refer/FAQ';
import ReferHero from '@/components/refer/Hero';
import HowDoIRefer from '@/components/refer/HowDoIRefer';
import ReferralBenefits from '@/components/refer/ReferralBenefits';
import ReferModal from '@/components/refer/ReferModal';

function ReferPage() {
    const [showReferModal, setShowReferModal] = useState(false);

    const showModal = useCallback(() => setShowReferModal(true), []);

    return (
        <div className='w-full flex flex-col items-center gap-8'>
            {/* Hero */}
            <ReferHero showModal={showModal} />

            {/* How Do I Refer */}
            <HowDoIRefer showModal={showModal} />
            
            {/* What are the referral benefits */}
            <ReferralBenefits showModal={showModal} />

            {/* FAQs */}
            <ReferFAQ />

            {/* Refer modal */}
            <ReferModal show={showReferModal} setShow={setShowReferModal} />
        </div>
    );
}

export default ReferPage;
