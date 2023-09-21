import PrivateNavBar from '../../../generalContent/private/privateNavBar';
import HomeContent from './homeContent';
import Logo from '../../../generalContent/private/logo'
import BalanceCounter from '../BalanceCounter';
export default function Home() {
  return (
    <div className='ReactContent'>
      <BalanceCounter/>
      <Logo mobile={true} darkLogo={false}/>
      <PrivateNavBar/>
      <Logo mobile={false} darkLogo={false}/>
      <HomeContent />
    </div>
  );
}
