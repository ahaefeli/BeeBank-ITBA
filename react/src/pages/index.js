import PublicNavBar from '../components/publicNavBar';
import HomeContent from '../components/home-content';
import Footer from '../components/publicFooter';

import '../css/dedicated/home-content.css';

export default function Index() {
  return (
    <div className='ReactContent'>
      <PublicNavBar />
      <HomeContent />
      <Footer />
    </div>
  );
}
