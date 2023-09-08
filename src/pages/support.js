import PublicNavBar from '../components/publicNavBar';
import SupportContent from '../components/support-content';
import Footer from '../components/publicFooter';

import '../css/dedicated/support-content.css';

export default function Support() {
  return (
    <div className='ReactContent'>
      <PublicNavBar />
      <SupportContent />
      <Footer />
    </div>
  );
}
