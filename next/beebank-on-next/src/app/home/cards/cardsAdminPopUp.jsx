import styleCards from './cardsAdmin.module.css'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function CardsPopUp(props) {
  const [visibleInfo, setVisibleInfo] = useState(false);

  const showInfo = () => {
    setVisibleInfo(!visibleInfo);
  }

  const hideInfo = () => {
    setVisibleInfo(false);
  }

  return (
    <div className={props.show ? "popUp" : "popUp-hide"}>
      <div className={styleCards.mainContainer}>
        <div className={styleCards.title}>Tus Tarjetas</div>
        <div className={styleCards.subTitle}>pulsa en una tarjeta para ver los datos</div>
        <div className={styleCards.card} onClick={showInfo}>
          <div className={styleCards.cardInner} style={visibleInfo ? { transform: 'rotateY(180deg)' } : null}>
            <div className={styleCards.beeCardBack}>
            </div>
            <div className={styleCards.beeCard}>
              <div className={styleCards.name}>Juan Manuel Perez</div>
              <div className={styleCards.lastNumber}>Terminado en <label className='number_format'>235</label></div>
            </div>
          </div>
        </div>
      <Link href='/home' className={styleCards.addCard}>Agrega una tarjeta</Link>
      </div>
    </div>
  );
}
