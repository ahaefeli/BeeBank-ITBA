'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import CompFactura from './CompFactura.module.css';
export default function CFactura(props) {
  const {TFstate,TFdescription,TFfecha,TFmonto,TFmotivo,TFid,TFio,TFDnombre,TFDapellido,TFDcbu,TFDalias,TFDdni,TFDbank,TFOnombre,TFOapellido,TFOcbu,TFOalias,TFOdni,TFObank,TgVisibility} = props
  const [contText, setContText] = useState('Undefined');
  const [colorTxt, setColorTxt] = useState('gray');
  const [stateImg, setStateImg] = useState('/UND.png');
  let StateImgAlt;

  if (TFstate === 'aceptado') {
    StateImgAlt = 'Aprobado';
  }
  else if (TFstate === 'rechazado') {
    StateImgAlt = 'Rechazado';
  }
  else {
    StateImgAlt = 'Undefined';
  }

  const [hideElement, setHideElement] = useState(CompFactura.hide);
  const [showElement, setShowElement] = useState('');

  useEffect(() => {
    if (TFstate === 'aceptado') {
      setContText('APROBADO');
      setColorTxt('#49e33b');
      setStateImg('https://raw.githubusercontent.com/ahaefeli/beebank-resources/main/prestamos%20img/YES.png');
    }
    else if (TFstate === 'rechazado') {
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
              <p className={CompFactura.S1p}>Fecha: {TFfecha}</p>
              <Image src={stateImg} alt={StateImgAlt} height={50} width={50}></Image>
              <p className={CompFactura.S1p}>Trans. Nº: {TFid}</p>
            </section>
            <section className={CompFactura.S2}>
              <div>
                <p className={CompFactura.subTitle}>Destinatario:</p>
                <p className={CompFactura.Info}>Nombre: {TFDnombre}</p>
                <p className={CompFactura.Info}>Apellido: {TFDapellido}</p>
                <p className={CompFactura.Info}>DNI: {TFDdni}</p>
                <p className={CompFactura.Info}>CBU: {TFDcbu}</p>
                <p className={CompFactura.Info}>Alias: {TFDalias}</p>
                <p className={CompFactura.Info}>Banco: {TFDbank}</p>
              </div>
              <div>
                <p className={CompFactura.subTitle}>Origen:</p>
                <p className={CompFactura.Info}>Nombre: {TFOnombre}</p>
                <p className={CompFactura.Info}>Apellido: {TFOapellido}</p>
                <p className={CompFactura.Info}>DNI: {TFOdni}</p>
                <p className={CompFactura.Info}>CBU: {TFOcbu}</p>
                <p className={CompFactura.Info}>Alias: {TFOalias}</p>
                <p className={CompFactura.Info}>Banco: {TFObank}</p>
              </div>
            </section>
            <section className={CompFactura.S3}>
              <p className={CompFactura.subTitle}>Monto: ${TFmonto}</p>
              <p className={CompFactura.Info}>Motivo: {TFmotivo}</p>
              <p className={CompFactura.Info}>IVA: 0%</p>
              <p className={CompFactura.Info}>Referencia: {TFdescription}</p>
              <p className={CompFactura.Info}>Tipo: {TFio}</p>
              <p className={CompFactura.InfoState} style={{ color: colorTxt }}>{contText}</p>
            </section>
          </div>
        </div>
    </>
  )
}