import * as portals from 'react-reverse-portal';

import { modalPortalNode } from '@/lib/portals';
import ReferPage from '@/pages/Refer';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WelcomeReferredPage from './pages/WelcomeReferred';

function App() {
    const path = location.pathname;
    const referId = path.includes('/referral') ? parseInt(path.split('/referral/')[1]) : null;

    return (
        <>
            <portals.OutPortal node={modalPortalNode} />
            <Header />
            {referId
                ? <WelcomeReferredPage id={referId} />
                : <ReferPage />
            }
            <Footer />
        </>
    );
}

export default App;
