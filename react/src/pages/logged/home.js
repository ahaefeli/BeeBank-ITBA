import LoggedNavBar from '../../components/loggedNavBar';
import LoggedHomeContent from '../../components/logged/home-content';
import Logo from '../../components/logged/logo'

import '../css/dedicated/cbu-popup.css';
import '../css/dedicated/transfer-popup.css';
import '../css/dedicated/home-content.css';

export default function Home() {

  return (
    <div className='ReactContent'>
        <Logo mobile={true} darkLogo={false} />
        <LoggedNavBar />
        <div className='logged-content'>
          <Logo mobile={false} darkLogo={false} />
          <LoggedHomeContent />
        </div>
      </div>
  );
}
