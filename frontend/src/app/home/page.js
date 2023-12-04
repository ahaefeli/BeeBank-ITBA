'use client';

import PrivateNavBar from '../../../generalContent/private/privateNavBar';
import HomeContent from './homeContent';
import Logo from '../../../generalContent/private/logo'

import {AuthChecker} from '../authPage'

export default function Home() {

  return (
    <AuthChecker>
        <div className='ReactContent'>
          <Logo mobile={true} darkLogo={false}/>
          <PrivateNavBar/>
          <Logo mobile={false} darkLogo={false}/>
          <HomeContent />
        </div>
    </AuthChecker>
  );
}
