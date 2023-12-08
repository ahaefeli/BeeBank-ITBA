'use client';

import PrivateNavBar from '../../../generalContent/private/privateNavBar';
import HomeContent from './homeContent';
import Logo from '../../../generalContent/private/logo'
import ReloadDataComp from './reloadDataComp/reloadDataComp'

import {AuthChecker} from '../authPage'

export default function Home() {

  return (
    <AuthChecker>
      <ReloadDataComp/>
      <div className='ReactContent'>
        <Logo mobile={true} darkLogo={false}/>
        <PrivateNavBar/>
        <Logo mobile={false} darkLogo={false}/>
        <HomeContent />
      </div>
    </AuthChecker>
  );
}
