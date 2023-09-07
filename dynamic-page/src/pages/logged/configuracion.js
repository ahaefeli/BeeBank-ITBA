import LoggedNavBar from '../../components/loggedNavBar';
import LoggedConfigContent from '../../components/logged/config-content';
import Logo from '../../components/logged/logo'

import '../css/dedicated/config-content.css';

export default function Home() {
  return (
    <div className='ReactContent'>
      <Logo mobile={true} darkLogo={false}/>
      <LoggedNavBar />
      <div className='logged-content'>
      <Logo mobile={false} darkLogo={false}/>
      <LoggedConfigContent />
      </div>
    </div>
  );
}
