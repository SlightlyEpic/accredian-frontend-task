import * as portals from 'react-reverse-portal';

import { modalPortalNode } from '@/lib/portals';
import ReferPage from '@/pages/Refer';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function App() {
    return (
        <>
            <portals.OutPortal node={modalPortalNode} />
            <Header />
            <ReferPage />
            <Footer />
        </>
    );
}

export default App;
