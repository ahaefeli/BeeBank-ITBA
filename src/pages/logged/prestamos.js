import LoggedNavBar from '../../components/loggedNavBar';
import LoggedLoansContent from '../../components/logged/loans-content';
import Logo from '../../components/logged/logo'

import '../css/dedicated/loans-content.css';

export default function Loans() {
  return (
    <div className='ReactContent'>
      <Logo mobile={true} darkLogo={false}/>
      <LoggedNavBar />
      <div className='logged-content'>
      <Logo mobile={false} darkLogo={false}/>
      <LoggedLoansContent />
      </div>
    </div>
  );
}
