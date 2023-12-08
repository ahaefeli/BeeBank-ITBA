'use client'
import Link from 'next/link';
import styleAccounts from './accounts.module.css';

import { useState , useEffect} from 'react';

import axios from 'axios'
import Cookies from 'js-cookie';

export default function AccountsContent() {
  const cId = Cookies.get("cId")
  const [LiItemsAccounts, setLiItemsAccounts] = useState()

  function getData() {
    let LiItems = []
    axios.get(`http://localhost:8000/cuenta/data/${cId}`,{
      auth:{
        username:'admin',
        password:'admin'
      }
    }).then((response)=>{
      (response.data).forEach((cuenta, index)=>{
        LiItems.push(
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
        )
      })
      setLiItemsAccounts(LiItems)
    }).catch((error)=>{
      LiItems.push(<div>No tienes ninguna cuenta asignada, solicita crear una con un asesor de tu sucursal asignada.</div>)
      setLiItemsAccounts(LiItems)
    })
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <div className={styleAccounts.allAccountsContainer}>
      {LiItemsAccounts}
      <Link href='/cuentas' className={`${styleAccounts.createAccount} button--general`}>Crea una cuenta de empresa</Link>
    </div>
  )
}
