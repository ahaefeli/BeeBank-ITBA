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
  const accountDataUrl = 'http://127.0.0.1:8000/cuenta/data/';
  const clientDataUrl = 'http://127.0.0.1:8000/cliente/data/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseAccount = await axios.get(accountDataUrl);
        setAccountData(responseAccount.data);
        const responseClient = await axios.get(clientDataUrl);
        setClientData(responseClient.data);
      } catch (error) {
        console.error('Error fetching account data:', error);
      }
    };

    fetchData();
  }, []);


  let fecha1, nombre1, alias1, cbu1, monto1, motivo1;
  let fecha2, nombre2, alias2, cbu2, monto2, motivo2;
  let fecha3, nombre3, alias3, cbu3, monto3, motivo3;
  let indexId = 0;
  TransferAPI.forEach((elemento) => {

    if (indexId <= elemento.Fid && elemento.Fid == 0) {
      fecha3 = "-----";
      nombre3 = "-----";
      alias3 = "-----";
      cbu3 = "-----";
      monto3 = "-----";
      motivo3 = "-----";
      fecha2 = "-----";
      nombre2 = "-----";
      alias2 = "-----";
      cbu2 = "-----";
      monto2 = "-----";
      motivo2 = "-----";
      fecha1 = elemento.Ffecha;
      nombre1 = elemento.FDnombre;
      alias1 = elemento.FDalias;
      cbu1 = elemento.FDcbu;
      monto1 = elemento.Fmonto;
      motivo1 = elemento.Fmotivo;
    }
    else if (indexId <= elemento.Fid && elemento.Fid == 1) {
      fecha3 = "-----";
      nombre3 = "-----";
      alias3 = "-----";
      cbu3 = "-----";
      monto3 = "-----";
      motivo3 = "-----";
      fecha2 = fecha1;
      nombre2 = nombre1;
      alias2 = alias1;
      cbu2 = cbu1;
      monto2 = monto1;
      motivo2 = motivo1;
      fecha1 = elemento.Ffecha;
      nombre1 = elemento.FDnombre;
      alias1 = elemento.FDalias;
      cbu1 = elemento.FDcbu;
      monto1 = elemento.Fmonto;
      motivo1 = elemento.Fmotivo;
    }
    else if (indexId <= elemento.Fid && elemento.Fid >= 2) {
      fecha3 = fecha2;
      nombre3 = nombre2;
      alias3 = alias2;
      cbu3 = cbu2;
      monto3 = monto2;
      motivo3 = motivo2;
      fecha2 = fecha1;
      nombre2 = nombre1;
      alias2 = alias1;
      cbu2 = cbu1;
      monto2 = monto1;
      motivo2 = motivo1;
      fecha1 = elemento.Ffecha;
      nombre1 = elemento.FDnombre;
      alias1 = elemento.FDalias;
      cbu1 = elemento.FDcbu;
      monto1 = elemento.Fmonto;
      motivo1 = elemento.Fmotivo;
    }
  });

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
                <td className={`${styleHome.history__table__data} number_format`}>{fecha1}</td>
                <td className={`${styleHome.history__table__data} number_format`}>{nombre1}</td>
                <td className={`${styleHome.history__table__data} number_format`}>{alias1}</td>
                <td className={`${styleHome.history__table__data} number_format`}>${monto1}</td>
                <td className={`${styleHome.history__table__data} number_format`}>{motivo1}</td>
              </tr>
              <tr className={styleHome.history__table__row}>
                <td className={`${styleHome.history__table__data} number_format`}>{fecha2}</td>
                <td className={`${styleHome.history__table__data} number_format`}>{nombre2}</td>
                <td className={`${styleHome.history__table__data} number_format`}>{alias2}</td>
                <td className={`${styleHome.history__table__data} number_format`}>${monto2}</td>
                <td className={`${styleHome.history__table__data} number_format`}>{motivo2}</td>
              </tr>
              <tr className={styleHome.history__table__row}>
                <td className={`${styleHome.history__table__data} number_format`}>{fecha3}</td>
                <td className={`${styleHome.history__table__data} number_format`}>{nombre3}</td>
                <td className={`${styleHome.history__table__data} number_format`}>{alias3}</td>
                <td className={`${styleHome.history__table__data} number_format`}>${monto3}</td>
                <td className={`${styleHome.history__table__data} number_format`}>{motivo3}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

    </div>
  )
};