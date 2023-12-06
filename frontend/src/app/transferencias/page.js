'use client'
import PrivateNavBar from '../../../generalContent/private/privateNavBar'
import TransfersContent from './transfersContent'
import Logo from '../../../generalContent/private/logo'
import styleTransfers from './transfers.module.css'

import {AuthChecker} from '../authPage'

export default function Home() {

  return (
    <AuthChecker>
      <div className='ReactContent'>
        <Logo mobile={true} darkLogo={false}/>
        <PrivateNavBar/>
        <Logo mobile={false} darkLogo={false}/>
        <TransfersContent/>
      </div>
    </AuthChecker>
  )
}
