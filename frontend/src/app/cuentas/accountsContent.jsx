'use client'
import Link from 'next/link';
import styleAccounts from './accounts.module.css';

import axios from 'axios'
import Cookies from 'js-cookie';

export async function getData(cId) {
  const response = await axios.get(`http://localhost:8000/cuenta/data/${cId}`,{
    auth:{
      username:'admin',
      password:'admin'
    }
  })

  return response.data
}

export default async function AccountsContent() {
  const cId = Cookies.get("cId")
  const data = await getData(cId)

  if(data.length>0){
    return (
      <div className={styleAccounts.allAccountsContainer}>
        {Object.keys(data).map((cuenta, index) => (
          <div className={styleAccounts.account} key={index}>
            <div className={styleAccounts.accountInfo}>
              <label className={styleAccounts.accountInfoType}>{cuenta.tipo_cuenta}</label>
              <label className={styleAccounts.accountInfoOwner}>Balance: ${cuenta.balance}</label>
              <label className={styleAccounts.accountInfoNumber}>{cuenta.account_cbu}</label>
            </div>
            <div className={styleAccounts.accountTransferInfo}>
              <label className={`${styleAccounts.accountCbu} number_format`}><i className='bi bi-clipboard cbu-copy' />{cuenta.account_cbu}</label>
              <label className={`${styleAccounts.accountCbu} number_format`}><i className='bi bi-clipboard cbu-copy' />{cuenta.account_alias}<label className={styleAccounts.beebankTag}>$bee</label></label>
            </div>
            <div className={styleAccounts.logOnContainer}>
              <Link href='/home'><i className={`bi bi-arrow-bar-right ${styleAccounts.logOn}`} /></Link>
            </div>
          </div>
        ))}
        <Link href='/cuentas' className={`${styleAccounts.createAccount} button--general`}>Crea una cuenta de empresa</Link>
      </div>
    )
  }
  else{
    return(
      <></>
    )
  }
}
