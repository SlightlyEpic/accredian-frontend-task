import ReferFAQ from '@/components/refer/FAQ';
import ReferHero from '@/components/refer/Hero';
import HowDoIRefer from '@/components/refer/HowDoIRefer';
import ReferralBenefits from '@/components/refer/ReferralBenefits';

function ReferPage() {
    return (
        <div className='w-full flex flex-col items-center gap-8'>
            {/* Hero */}
            <ReferHero />

            {/* How Do I Refer */}
            <HowDoIRefer />
            
            {/* What are the referral benefits */}
            <ReferralBenefits />

            {/* FAQs */}
            <ReferFAQ />
        </div>
    );
}

export default ReferPage;
