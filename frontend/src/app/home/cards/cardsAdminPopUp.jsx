import styleCards from './cardsAdmin.module.css'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Cookies from 'js-cookie'

export default function CardsPopUp(props) {
  let userData=props.userData
  let cardData=props.cardData
  let expDate=props.expDate
  let endedWith=props.endedWith

  const cId = Cookies.get("cId")

  const [visibleInfo, setVisibleInfo] = useState(false);

  const showInfo = () => {
    setVisibleInfo(!visibleInfo);
  }

  return (
    <div className={props.show ? "popUp" : "popUp-hide"}>
      <div className={styleCards.mainContainer}>
        <div className={styleCards.title}>Tus Tarjetas</div>
        <div className={styleCards.subTitle}>pulsa en una tarjeta para ver los datos</div>
        <div className={styleCards.card} onClick={showInfo}>
          <div className={styleCards.cardInner} style={visibleInfo ? { transform: 'rotateY(180deg)' } : null}>
            <div className={styleCards.beeCardBack}>
              <div className={`${styleCards.cardInfo} ${styleCards.cardNumber} number_format`}>{cardData.card_number}</div>
              <div className={`${styleCards.cardInfo} ${styleCards.cardName} number_format`}>{userData.first_name} {userData.last_name}<label className='number_format'>CVV: {cardData.card_cvv}</label></div>
              <div className={`${styleCards.cardInfo} ${styleCards.cardExpirationDate} number_format`}>Vencimiento:<label className='number_format'>{expDate}</label></div>
            </div>
            <div className={styleCards.beeCard}>
              <div className={styleCards.name}>{userData.first_name} {userData.last_name}</div>
              <div className={styleCards.lastNumber}>Terminada en <label className='number_format'>{endedWith}</label></div>
            </div>
          </div>
        </div>
        <Link href='/home' className={styleCards.addCard}>Agrega una tarjeta</Link>
      </div>
    </div>
  );
}