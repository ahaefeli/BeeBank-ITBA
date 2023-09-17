import PrivateNavBar from '../../../generalContent/private/privateNavBar';
import TransfersContent from './transfersContent';
import Logo from '../../../generalContent/private/logo'
import styleTransfers from './transfers.module.css'

export default function Home() {
  return (
    <div className='ReactContent'>
      <Logo mobile={true} darkLogo={true}/>
      <PrivateNavBar/>
      <Logo mobile={false} darkLogo={true}/>
      <TransfersContent />
    </div>
  );
}
