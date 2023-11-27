'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import CompFactura from './CompFactura.module.css';
export default function CFactura(props) {

  const { CFDnombre, CFDapellido, CFDdni, CFDcbu, CFDalias, CFDbank, CFOnombre, CFOapellido, CFOdni, CFOcbu, CFOalias, CFObank, CFmonto, CFmotivo, CFdescription, CFttransferencia, CFfecha, CFtransfnum, CFstate, TgVisibility } = props;
  const [contText, setContText] = useState('Undefined');
  const [colorTxt, setColorTxt] = useState('gray');
  const [stateImg, setStateImg] = useState('/UND.png');
  let StateImgAlt;

  if (CFstate === 'Approved') {
    StateImgAlt = 'Aprobado';
  }
  else if (CFstate === 'Rejected') {
    StateImgAlt = 'Rechazado';
  }
  else {
    StateImgAlt = 'Undefined';
  }

  const [hideElement, setHideElement] = useState(CompFactura.hide);
  const [showElement, setShowElement] = useState('');

  useEffect(() => {
    if (CFstate === 'Approved') {
      setContText('APROBADO');
      setColorTxt('#49e33b');
      setStateImg('https://raw.githubusercontent.com/ahaefeli/beebank-resources/main/prestamos%20img/YES.png');
    }
    else if (CFstate === 'Rejected') {
      setContText('RECHAZADO');
      setColorTxt('#ea4848');
      setStateImg('https://raw.githubusercontent.com/ahaefeli/beebank-resources/main/prestamos%20img/X.png');
    }
    else {
      setStateImg('https://raw.githubusercontent.com/ahaefeli/beebank-resources/main/prestamos%20img/UND.png');
    }

    const timeout = setTimeout(() => {
      setHideElement('');
      setShowElement(CompFactura.show);
    }, 1);
    return () => clearTimeout(timeout);
  },[]);

  return (
    <>
    <div className={CompFactura.shadow} onClick={TgVisibility}></div>
        <div className={`${CompFactura.ContFact} ${hideElement} ${showElement}`}>
          <div className={CompFactura.internalContent}>
            <p className={CompFactura.Title}>Banco Nacional Beebank</p>
            <section className={CompFactura.S1}>
              <p className={CompFactura.S1p}>Fecha: {CFfecha}</p>
              <Image src={stateImg} alt={StateImgAlt} height={50} width={50}></Image>
              <p className={CompFactura.S1p}>Trans. Nº: {CFtransfnum}</p>
            </section>
            <section className={CompFactura.S2}>
              <div>
                <p className={CompFactura.subTitle}>Destinatario:</p>
                <p className={CompFactura.Info}>Nombre: {CFDnombre}</p>
                <p className={CompFactura.Info}>Apellido: {CFDapellido}</p>
                <p className={CompFactura.Info}>DNI: {CFDdni.toLocaleString()}</p>
                <p className={CompFactura.Info}>CBU: {CFDcbu}</p>
                <p className={CompFactura.Info}>Alias: {CFDalias}</p>
                <p className={CompFactura.Info}>Banco: {CFDbank}</p>
              </div>
              <div>
                <p className={CompFactura.subTitle}>Origen:</p>
                <p className={CompFactura.Info}>Nombre: {CFOnombre}</p>
                <p className={CompFactura.Info}>Apellido: {CFOapellido}</p>
                <p className={CompFactura.Info}>DNI: {CFOdni.toLocaleString()}</p>
                <p className={CompFactura.Info}>CBU: {CFOcbu}</p>
                <p className={CompFactura.Info}>Alias: {CFOalias}</p>
                <p className={CompFactura.Info}>Banco: {CFObank}</p>
              </div>
            </section>
            <section className={CompFactura.S3}>
              <p className={CompFactura.subTitle}>Monto: ${CFmonto.toLocaleString()}</p>
              <p className={CompFactura.Info}>Motivo: {CFmotivo}</p>
              <p className={CompFactura.Info}>IVA: 0%</p>
              <p className={CompFactura.Info}>Referencia: {CFdescription}</p>
              <p className={CompFactura.Info}>Tipo: {CFttransferencia}</p>
              <p className={CompFactura.InfoState} style={{ color: colorTxt }}>{contText}</p>
            </section>
          </div>
        </div>
    </>
  );
}