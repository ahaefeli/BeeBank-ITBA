import PublicNavBar from '../components/publicNavBar';
import FaqContent from '../components/faq-content';
import Footer from '../components/publicFooter';

import '../css/dedicated/faq-content.css';

export default function Faq() {
  return (
    <div className='ReactContent'>
      <PublicNavBar />
      <FaqContent />
      <Footer />
    </div>
  );
}
