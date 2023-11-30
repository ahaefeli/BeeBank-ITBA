'use client';

import axios from 'axios';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import CbuPopUp from './cbu/cbuPopUp';
import TransferPopUp from './transfers/transferPopUp';
import CurrencyConverter from './conversor/conversorPopUp';
import ContactsPopUp from './contacts/contactsPopUp';
import CardsPopUp from './cards/cardsAdminPopUp'
import AdminPopUp from './adminCards/adminPopUp'
import TransferAPI from "../TransferAPI.json";

import styleHome from './home.module.css';


import { BalanceEconomico } from "../BalanceCounter";



export default function HomeContent(props) {
  const [accountData, setAccountData] = useState(null);
  const [clientData, setClientData] = useState(null);
  const [transfersData, setTransfersData] = useState(null);
  const accountDataUrl = 'http://127.0.0.1:8000/cuenta/data/';
  const clientDataUrl = 'http://127.0.0.1:8000/cliente/data/';
  const transferDataUrl = 'http://127.0.0.1:8000/cuenta/transferencia/';


  useEffect(()=>{
    axios.get(accountDataUrl).then((response)=>{
      setAccountData(response.data)
    })
    axios.get(clientDataUrl).then((response)=>{
      setClientData(response.data)
    })
    axios.get(transferDataUrl).then((response)=>{
      setTransfersData(response.data)
    })
  },[])


  const [cbuPopUp, setcbuPopUp] = useState(false);
  const [transferPopUp, settransferPopUp] = useState(false);
  const [conversorPopUp, setconversorPopUp] = useState(false);
  const [contactsPopUp, setcontactsPopUp] = useState(false);
  const [cardsPopUp, setcardsPopUp] = useState(false);
  const [adminPopUp, setadminPopUp] = useState(false);
  const [isBalanceShowed, setIsBalanceShowed] = useState(true);

  function turnTransferPopUp() {
    settransferPopUp(!transferPopUp);
  }

  function turnAdminPopUp() {
    setadminPopUp(!adminPopUp);
  }

  function turnCardsPopUp() {
    setcardsPopUp(!cardsPopUp);
  }

  function turnCBUPopUp() {
    setcbuPopUp(!cbuPopUp);
  };

  function turnConversorPopUp(event) {
    event.preventDefault();
    setconversorPopUp(!conversorPopUp);
  };

  function turnContactsPopUp(event) {
    event.preventDefault();
    setcontactsPopUp(!contactsPopUp);
  };

  function turnEye() {
    setIsBalanceShowed(!isBalanceShowed);
  }

  return (
    <div className='mainContainer'>
      <CbuPopUp show={cbuPopUp} />
      <TransferPopUp show={transferPopUp} />
      <CardsPopUp show={cardsPopUp} />
      <CurrencyConverter show={conversorPopUp} />
      <ContactsPopUp show={contactsPopUp} />
      <AdminPopUp show={adminPopUp} />

      <div className={cardsPopUp ? 'overlay' : 'overlay-hide'} onClick={turnCardsPopUp} />
      <div className={cbuPopUp ? 'overlay' : 'overlay-hide'} onClick={turnCBUPopUp} />
      <div className={transferPopUp ? 'overlay' : 'overlay-hide'} onClick={turnTransferPopUp} />
      <div className={conversorPopUp ? 'overlay' : 'overlay-hide'} onClick={turnConversorPopUp} />
      <div className={contactsPopUp ? 'overlay' : 'overlay-hide'} onClick={turnContactsPopUp} />
      <div className={adminPopUp ? 'overlay' : 'overlay-hide'} onClick={turnAdminPopUp} />

      <div className={styleHome.firstContainer}>

        <div className={styleHome.upperContainer}>

          <div className={styleHome.interiorBox}>
            <div className={styleHome.title}>{clientData?`${clientData.first_name} ${clientData.last_name}`:"Bienvenido"}</div>
            <div className={styleHome.bankData__info__card}>
              <div className={styleHome.cardPreview} onClick={turnCardsPopUp}>Terminada en <label className='number_format'>2357</label></div>
            </div>
          </div>

          <div className={styleHome.interiorBox}>
            <div className={styleHome.title}>Balance:</div>
            <div className={styleHome.balanceBox}>
              <p className={`number_format ${styleHome.balance}`}>${isBalanceShowed ? (accountData?accountData[0].balance:'******') : '******'}</p>
              <i className={`bi ${isBalanceShowed ? 'bi-eye' : 'bi-eye-slash'} ${styleHome.eye}`} onClick={turnEye}></i>
            </div>
          </div>
        </div>
        <div className={styleHome.bankData__buttons}>
          <Link href='/home' className={styleHome.public_a_nav} onClick={turnCBUPopUp} draggable='false'>Ver CBU</Link>
          <Link href='/home' className={styleHome.public_a_nav} onClick={turnTransferPopUp} draggable='false'>Transferir</Link>
        </div>

      </div>

      <div className={styleHome.separatorContainer}>
        <section className={styleHome.utilities}>
          <Link className={styleHome.public_a_nav} href='/home' onClick={turnConversorPopUp} draggable='false'>Conversor de divisas</Link>
          <Link className={styleHome.public_a_nav} href='/home' onClick={turnContactsPopUp} draggable='false'>Agenda</Link>
          <Link className={styleHome.public_a_nav} href='/home' onClick={turnAdminPopUp} draggable='false'>Administrar tarjetas</Link>
        </section>
      </div>

      <div className={styleHome.separatorContainer}>
        <section className={styleHome.history}>

          <div className={styleHome.history__header}>
            <h2>Historial de transferencias</h2>
            <Link className='button--general' href='/transferencias' draggable='false'>Historial Completo</Link>
          </div>

          <table className={styleHome.history__table}>
            <tbody>
              <tr className={styleHome.history__table__row}>
                <th className={styleHome.history__table__head}>Fecha</th>
                <th className={styleHome.history__table__head}>Nombre</th>
                <th className={styleHome.history__table__head}>Alias</th>
                <th className={styleHome.history__table__head}>Monto</th>
                <th className={styleHome.history__table__head}>Motivo</th>
              </tr>
              <tr className={styleHome.history__table__row}>
                <td className={`${styleHome.history__table__data} number_format`}></td>
                <td className={`${styleHome.history__table__data} number_format`}></td>
                <td className={`${styleHome.history__table__data} number_format`}></td>
                <td className={`${styleHome.history__table__data} number_format`}></td>
                <td className={`${styleHome.history__table__data} number_format`}></td>
              </tr>
            
            </tbody>
          </table>
        </section>
      </div>

    </div>
  )
};