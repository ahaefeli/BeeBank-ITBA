'use client';
import Cookies from 'js-cookie'
import axios from 'axios';
import Link from 'next/link';
import { useState, useEffect} from 'react';

import CbuPopUp from './cbu/cbuPopUp';
import TransferPopUp from './transfers/transferPopUp';
import CurrencyConverter from './conversor/conversorPopUp';
import ContactsPopUp from './contacts/contactsPopUp';
import CardsPopUp from './cards/cardsAdminPopUp'
import AdminPopUp from './adminCards/adminPopUp'

import styleHome from './home.module.css';

export default function HomeContent() {
  const cId = Cookies.get("cId")

  const [expDate, setExpDate] = useState("---")
  const [endedWith, setEndedWith] = useState("----")
  const [transfersData, setTransfersData] = useState(null);
  const [accountType, setAccountType] = useState("---")


  const accountDataUrl = `http://localhost:8000/cuenta/data/main/${cId}`;
  const transferDataUrl = 'http://localhost:8000/cuenta/transferencia/';
  const userDataUrl = `http://localhost:8000/cliente/api/users/${cId}`;
  const debitCardUrl = `http://localhost:8000/cuenta/tarjeta/debito/${cId}`
  const creditCardUrl = `http://localhost:8000/cuenta/tarjeta/credito/${cId}`
  
  const [accountData, setAccountData] = useState(
    {
      "customer_id": cId,
      "balance": "******",
      "tipo_cuenta": "*****",
      "account_alias": "****.****.****",
      "account_cbu": "*********************",
      "iban": "*******************"
    }
  );

  const [cardDebitData,setCardDebitData] = useState(
    {
      "card_id": "---",
      "customer_id": "---",
      "card_type": "---",
      "card_number": "-----------",
      "card_create_date": "---",
      "card_create_expdate": "---",
      "card_cvv": "---"
    }
  )

  const [cardCreditData,setCardCreditData] = useState(
    {
      "card_id": "---",
      "customer_id": "---",
      "card_type": "---",
      "card_number": "-----------",
      "card_create_date": "---",
      "card_create_expdate": "---",
      "card_cvv": "---"
    }
  )

  const [cardData,setCardData] = useState(
    {
      "card_id": "---",
      "customer_id": "---",
      "card_type": "---",
      "card_number": "-----------",
      "card_create_date": "---",
      "card_create_expdate": "---",
      "card_cvv": "---"
    }
  )

  const [userData,setUserData] = useState(
    {
      "id": "---",
      "password": "---",
      "last_login": "---",
      "username": "---",
      "last_name": "---",
      "email": "---",
      "first_name": "---"
    }
  )

  //toma de datos del cliente y sus trajetas
  useEffect(() => {

    //datos de las tarjetas de debito
    axios.get(debitCardUrl, {
      auth: {
        username: 'admin',
        password: 'admin'
      }
    }).then((response) => {
        setCardDebitData(response.data);
    });

    //datos de las tarjetas de credito
    axios.get(creditCardUrl, {
      auth: {
        username: 'admin',
        password: 'admin'
      }
    }).then((response) => {
      setCardCreditData(response.data);
    })
  
    //datos del usuario
    axios.get(userDataUrl, {
      auth: {
        username: 'admin',
        password: 'admin'
      }
    })
    .then((response) => {
      setUserData(response.data);
    });

    //datos de la cuenta
    axios.get(accountDataUrl,{
      auth:{
        username:'admin',
        password:'admin'
      }
    }).then((response)=>{
      if((response.data).tipo_cuenta=="ahorro" || (response.data).tipo_cuenta=="corriente"){
        if((response.data).tipo_cuenta=="ahorro"){
          setAccountType("Caja de Ahorros (CA)")
        }
        else{
          setAccountType("Cuenta Corriente (CC)")
        }

        setAccountData(response.data)
      }
      else{
        setAccountData(
          {
            "customer_id": cId,
            "balance": "******",
            "tipo_cuenta": "*****",
            "account_alias": "****.****.****",
            "account_cbu": "*********************",
            "iban": "*******************"
          }
        )
      }
    })

    //datos de transferencias
    axios.get(transferDataUrl,{
      auth:{
        username:'admin',
        password:'admin'
      }
    }).then((response)=>{
      setTransfersData(response.data)
    })
  }, []);
  
  //logica a implementar cuando los datos de la tarjeta son leidos
  useEffect(()=>{
    if(cardDebitData.customer_id>0){
      setCardData(cardDebitData)
    }
    else{
      setCardData(cardCreditData)
    }
  },[cardCreditData, cardDebitData])

  useEffect(()=>{
    if(cardData.cvv!="---"){
      //logica para fecha expiracion
      let expDateArray = cardData.card_create_expdate.split('')
      //0123-56
      setExpDate(expDateArray[5]+expDateArray[6]+"-"+expDateArray[2]+expDateArray[3])

      //logica para ultimos 4 numeros
      let lastFourArray = (String(cardData.card_number)).split('')
      let lastFourArrayLength = lastFourArray.length-1

      setEndedWith(lastFourArray[lastFourArrayLength-3]+lastFourArray[lastFourArrayLength-2]+lastFourArray[lastFourArrayLength-1]+lastFourArray[lastFourArrayLength])
    }
  },[cardData])

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
      <CbuPopUp userData={userData} accountData={accountData} accountType={accountType} show={cbuPopUp} />
      <TransferPopUp show={transferPopUp} />
      <CardsPopUp userData={userData} cardData={cardData} endedWith={endedWith} expDate={expDate} show={cardsPopUp} />
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
            <div className={styleHome.title}>{userData?`${userData.first_name} ${userData.last_name}`:"Bienvenido"}</div>
            <div className={styleHome.bankData__info__card}>
              <div className={styleHome.cardPreview} onClick={turnCardsPopUp}>Terminada en <label className='number_format'>{endedWith}</label></div>
            </div>
          </div>

          <div className={styleHome.interiorBox}>
            <div className={styleHome.title}>Balance:</div>
            <div className={styleHome.balanceBox}>
              <p className={`number_format ${styleHome.balance}`}>${isBalanceShowed ? (accountData?accountData.balance:'******') : '******'}</p>
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
              <tr className={styleHome.history__table__row}>
                <td className={`${styleHome.history__table__data} number_format`}></td>
                <td className={`${styleHome.history__table__data} number_format`}></td>
                <td className={`${styleHome.history__table__data} number_format`}></td>
                <td className={`${styleHome.history__table__data} number_format`}></td>
                <td className={`${styleHome.history__table__data} number_format`}></td>
              </tr>
              <tr className={styleHome.history__table__row}>
                <td className={`${styleHome.history__table__data} number_format`}></td>
                <td className={`${styleHome.history__table__data} number_format`}></td>
                <td className={`${styleHome.history__table__data} number_format`}></td>
                <td className={`${styleHome.history__table__data} number_format`}></td>
                <td className={`${styleHome.history__table__data} number_format`}></td>
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