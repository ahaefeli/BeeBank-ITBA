import PrivateNavBar from '../../../generalContent/private/privateNavBar';
import ConfigContent from './configContent';
import Logo from '../../../generalContent/private/logo'

export default function Home() {
  return (
    <div className='ReactContent'>
      <Logo mobile={true} darkLogo={false}/>
      <PrivateNavBar/>
      <Logo mobile={false} darkLogo={false}/>
      <ConfigContent />
    </div>
  );
}
