'use client'
import PrivateNavBar from '../../../generalContent/private/privateNavBar';
import TransfersContent from './transfersContent';
import Logo from '../../../generalContent/private/logo'
import styleTransfers from './transfers.module.css'
import BalanceCounter from '../BalanceCounter';

export default function Home() {

  return (
    <div className='ReactContent'>
      <BalanceCounter/>
      <Logo mobile={true} darkLogo={false}/>
      <PrivateNavBar/>
      <Logo mobile={false} darkLogo={false}/>
      <TransfersContent/>
    </div>
  );
}
