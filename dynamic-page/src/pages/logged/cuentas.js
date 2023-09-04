import LoggedNavBar from '../../components/loggedNavBar';
import LoggedAccountsContent from '../../components/logged/accounts-content';
import Logo from '../../components/logged/logo'

import '../css/dedicated/accounts-content.css';

export default function Cuentas() {
  return (
    <div className='ReactContent'>
      <Logo mobile={true}/>
      <LoggedNavBar />
      <div className='logged-content'>
      <Logo mobile={false}/>
      <LoggedAccountsContent />
      </div>
    </div>
  );
}
