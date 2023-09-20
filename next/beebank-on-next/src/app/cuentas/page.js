import PrivateNavBar from '../../../generalContent/private/privateNavBar';
import AccountsContent from './accountsContent';
import Logo from '../../../generalContent/private/logo'
import styleAccounts from './accounts.module.css'

export default function Home() {
  return (
    <div className='ReactContent'>
      <Logo mobile={true} darkLogo={false}/>
      <PrivateNavBar/>
      <Logo mobile={false} darkLogo={false}/>
      <AccountsContent />
    </div>
  );
}
