'use client';

import Link from 'next/link';
import { useState } from 'react';
import CbuPopUp from './cbu-popup';
import TransferPopUp from './transfer-popup';
import CurrencyConverter from './conversor-popup';
import ContactsPopUp from './contacts-popup';

import styleHome from './home.module.css';

export default function HomeContent(props) {

  const [cbuPopUp, setcbuPopUp] = useState(false);
  const [transferPopUp, settransferPopUp] = useState(false);
  const [conversorPopUp, setconversorPopUp] = useState(false);
  const [contactsPopUp, setcontactsPopUp] = useState(false);

  function turnTransferPopUp() {
    settransferPopUp(!transferPopUp);
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


  return (<div className='mainContainer'>

    <CbuPopUp show={cbuPopUp} />
    <TransferPopUp show={transferPopUp} />
    <CurrencyConverter show={conversorPopUp} />
    <ContactsPopUp show={contactsPopUp} />

      <div className={cbuPopUp ? 'overlay' : 'overlay-hide'} onClick={turnCBUPopUp} />
      <div className={transferPopUp ? 'overlay' : 'overlay-hide'} onClick={turnTransferPopUp} />
      <div className={conversorPopUp ? 'overlay' : 'overlay-hide'} onClick={turnConversorPopUp} />
      <div className={contactsPopUp ? 'overlay' : 'overlay-hide'} onClick={turnContactsPopUp} />

      <div className={styleHome.separatorContainer}>
        <div className={styleHome.username}>
          <h2 className={styleHome.username}>Juan Manuel Perez</h2>
        </div>

        <section className={styleHome.bankData}>

          <div className={styleHome.bankData__info}>
            <div className={styleHome.bankData__info__card}>
              <h3>Tarjeta debito:</h3>
              <p className='number_format'>XXXX XXXX XXXX 1234</p>
            </div>
            <div className={styleHome.bankData__info__balance}>
              <h3>BALANCE:</h3>
              <p className='number_format'>$xx.xxx,xx</p>
            </div>
          </div>
          <div className={styleHome.bankData__buttons}>
            <button className='button--general' onClick={turnCBUPopUp} draggable='false'>CBU</button>
            <button className='button--general' onClick={turnTransferPopUp} draggable='false'>Transferir</button>
          </div>

        </section>
      </div>

      <div className={styleHome.separatorContainer}>
        <section className={styleHome.utilities}>
          <Link className={styleHome.public_a_nav} href='/home' onClick={turnConversorPopUp} draggable='false'>Conversor de divisas</Link>
          <Link className={styleHome.public_a_nav} href='/home' onClick={turnContactsPopUp} draggable='false'>Agenda</Link>
          <Link className={styleHome.public_a_nav} href='/tarjetas' draggable='false'>Administrar tarjetas</Link>
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
              <tr className={styleHome.history__table__header}>
                <th>Fecha</th>
                <th>ID</th>
                <th>Cuenta origen</th>
                <th>Cuenta destino</th>
                <th>Monto</th>
                <th>Motivo</th>
              </tr>
              <tr className={styleHome.history__table__content}>
                <td>21/08/2023</td>
                <td>CH_Market</td>
                <td>----</td>
                <td>1234 1234 1234 1234</td>
                <td>13579</td>
                <td>Varios</td>
              </tr>
              <tr className={styleHome.history__table__content}>
                <td>01/09/2023</td>
                <td>LafeElectro</td>
                <td>----</td>
                <td>2222 3333 4444 5555</td>
                <td>5380</td>
                <td>Varios</td>
              </tr>
              <tr className={styleHome.history__table__content}>
                <td>10/09/2023</td>
                <td>Empleador S.A</td>
                <td>5555 3333 2222 1111</td>
                <td>----</td>
                <td>180324</td>
                <td>Remuneracion</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

  </div>
  )
};