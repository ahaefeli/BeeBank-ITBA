import styleCards from './cardsAdmin.module.css'
import Link from 'next/link';
import React, { useState } from 'react';

export default function CardsPopUp(props) {
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
              <div className={`${styleCards.cardInfo} ${styleCards.cardNumber} number_format`}>4521 7482 3058 2357</div>
              <div className={`${styleCards.cardInfo} ${styleCards.cardName} number_format`}>Juan Manuel Perez<label className='number_format'>CVV: 767</label></div>
              <div className={`${styleCards.cardInfo} ${styleCards.cardExpirationDate} number_format`}>Vencimiento:<label className='number_format'>08/27</label></div>
            </div>
            <div className={styleCards.beeCard}>
              <div className={styleCards.name}>Juan Manuel Perez</div>
              <div className={styleCards.lastNumber}>Terminada en <label className='number_format'>2357</label></div>
            </div>
          </div>
        </div>
        <Link href='/home' className={styleCards.addCard}>Agrega una tarjeta</Link>
      </div>
    </div>
  );
}