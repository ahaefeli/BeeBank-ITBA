import { useEffect, useState } from 'react';
import LoggedNavBar from '../../components/loggedNavBar';
import LoggedAccountsContent from '../../components/logged/accounts-content';
import Logo from '../../components/logged/logo'
import accountsFunctions from '../../js/accounts-functionality';

import '../css/dedicated/accounts-content.css'

export default function Cuentas() {
    let [executeEffect, setExecutEffect] = useState(true);
    useEffect(() => {
        if (executeEffect) {
          accountsFunctions();
        setExecutEffect = false;  }
    }, [executeEffect]);
    
  return (
    <div className='ReactContent'>
      <Logo mobile={true} darkLogo={false}/>
      <LoggedNavBar />
      <div className='logged-content'>
      <Logo mobile={false} darkLogo={false}/>
      <LoggedAccountsContent />
      </div>
    </div>
  );
}
