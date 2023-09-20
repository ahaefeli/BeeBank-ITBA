'use client';

import Link from 'next/link';
import { useState } from 'react';
import CbuPopUp from './cbu/cbuPopUp';
import TransferPopUp from './transfers/transferPopUp';
import CurrencyConverter from './conversor/conversorPopUp';
import ContactsPopUp from './contacts/contactsPopUp';
import CardsPopUp from './cards/cardsAdminPopUp'
import TransferAPI from "../TransferAPI.json";

import styleHome from './home.module.css';

export default function HomeContent(props) {
    let fecha1, nombre1, alias1, cbu1, monto1, motivo1;
    let fecha2, nombre2, alias2, cbu2, monto2, motivo2;
    let fecha3, nombre3, alias3, cbu3, monto3, motivo3;
    let indexId = 0;
    TransferAPI.forEach((elemento)=>{
        if(indexId<=elemento.Fid && elemento.Fid==0){
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
        else if(indexId<=elemento.Fid && elemento.Fid==1){
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
        else if(indexId<=elemento.Fid && elemento.Fid>=2){
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

    function turnTransferPopUp() {
        settransferPopUp(!transferPopUp);
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


    return (<div className='mainContainer'>

        <CbuPopUp show={cbuPopUp} />
        <TransferPopUp show={transferPopUp} />
        <CardsPopUp show={cardsPopUp} />
        <CurrencyConverter show={conversorPopUp} />
        <ContactsPopUp show={contactsPopUp} />

        <div className={cardsPopUp ? 'overlay' : 'overlay-hide'} onClick={turnCardsPopUp} />
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
                <Link className={styleHome.public_a_nav} href='/home' onClick={turnCardsPopUp} draggable='false'>Administrar tarjetas</Link>
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
                            <th>Nombre</th>
                            <th>Alias</th>
                            <th>CBU</th>
                            <th>Monto</th>
                            <th>Motivo</th>
                        </tr>
                        <tr className={styleHome.history__table__content}>
                            <td>{fecha1}</td>
                            <td>{nombre1}</td>
                            <td>{alias1}</td>
                            <td>{cbu1}</td>
                            <td>${monto1}</td>
                            <td>{motivo1}</td>
                        </tr>
                        <tr className={styleHome.history__table__content}>
                            <td>{fecha2}</td>
                            <td>{nombre2}</td>
                            <td>{alias2}</td>
                            <td>{cbu2}</td>
                            <td>${monto2}</td>
                            <td>{motivo2}</td>
                        </tr>
                        <tr className={styleHome.history__table__content}>
                            <td>{fecha3}</td>
                            <td>{nombre3}</td>
                            <td>{alias3}</td>
                            <td>{cbu3}</td>
                            <td>${monto3}</td>
                            <td>{motivo3}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>

    </div>
    )
};