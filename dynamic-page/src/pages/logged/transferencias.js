import LoggedNavBar from '../../components/loggedNavBar';
import LoggedTransfersContent from '../../components/logged/transfers-content';
import Logo from '../../components/logged/logo'

import '../css/dedicated/transfers-content.css';

export default function Transferencias() {
  return (
    <div className='ReactContent'>
      <Logo mobile={true}/>
      <LoggedNavBar />
      <div className='logged-content'>
      <Logo mobile={false}/>
      <LoggedTransfersContent />
      </div>
    </div>
  );
}
