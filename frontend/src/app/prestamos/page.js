import PrivateNavBar from '../../../generalContent/private/privateNavBar';
import LoansContent from './loansContent';
import Logo from '../../../generalContent/private/logo'

export default function Home() {
  return (
    <div className='ReactContent'>
      <Logo mobile={true} darkLogo={false}/>
      <PrivateNavBar/>
      <Logo mobile={false} darkLogo={false}/>
      <LoansContent />
    </div>
  );
}
