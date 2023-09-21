"use client"
import Image from 'next/image'
import {useEffect, useState} from "react";
import CompFactura from "./CompFactura.module.css";
export default function CFactura(props){

    const {CFDnombre,CFDapellido,CFDdni,CFDcbu,CFDalias,CFDbank,CFOnombre,CFOapellido,CFOdni,CFOcbu,CFOalias,CFObank,CFmonto,CFmotivo,CFdescription,CFttransferencia,CFfecha,CFtransfnum,CFstate,TgVisibility} = props;
    const [contText, setContText] = useState("Undefined");
    const [colorTxt, setColorTxt] = useState("gray");
    const [stateImg, setStateImg] = useState("/UND.png");
    let StateImgAlt;

    if (CFstate==="Approved"){
        StateImgAlt = "Aprobado";
    }
    else if (CFstate==="Rejected"){
        StateImgAlt = "Rechazado";
    }
    else{
        StateImgAlt = "Undefined";
    }

    useEffect(()=>{
        if (CFstate==="Approved"){
            setContText("APROBADO");
            setColorTxt("#49e33b");
            setStateImg("/YES.png");
        }
        else if(CFstate==="Rejected"){
            setContText("RECHAZADO");
            setColorTxt("red");
            setStateImg("/X.png");
        }
        else{
            setStateImg("/UND.png");
        }
    });

    return(
        <>
            <div className={CompFactura.ContMain} onClick={TgVisibility}>
                <div className={CompFactura.ContFact}>
                    <p className={CompFactura.Title}>Banco Nacional Beebank</p>
                    <section className={CompFactura.S1}>
                        <p className={CompFactura.S1p}>Fecha: {CFfecha}</p>
                        <Image src={stateImg} alt={StateImgAlt} height={109} width={109}></Image>
                        <p className={CompFactura.S1p}>Trans. Nº: {CFtransfnum}</p>
                    </section>
                    <section className={CompFactura.S2}>
                        <div>
                            <p className={CompFactura.Info}>Destinatario:</p>
                            <p className={CompFactura.Info}>Nombre/s: {CFDnombre}</p>
                            <p className={CompFactura.Info}>Apellidos/s: {CFDapellido}</p>
                            <p className={CompFactura.Info}>DNI: {CFDdni}</p>
                            <p className={CompFactura.Info}>CBU: {CFDcbu}</p>
                            <p className={CompFactura.Info}>Alias: {CFDalias}</p>
                            <p className={CompFactura.Info}>Banco: {CFDbank}</p>
                        </div>
                        <div>
                            <p className={CompFactura.Info}>Origen:</p>
                            <p className={CompFactura.Info}>Nombre/s: {CFOnombre}</p>
                            <p className={CompFactura.Info}>Apellidos/s: {CFOapellido}</p>
                            <p className={CompFactura.Info}>DNI: {CFOdni}</p>
                            <p className={CompFactura.Info}>CBU: {CFOcbu}</p>
                            <p className={CompFactura.Info}>Alias: {CFOalias}</p>
                            <p className={CompFactura.Info}>Banco: {CFObank}</p>
                        </div>
                    </section>
                    <section className={CompFactura.S3}>
                        <p className={CompFactura.Info}>Monto: ${CFmonto}</p>
                        <p className={CompFactura.Info}>Motivo: {CFmotivo}</p>
                        <p className={CompFactura.Info}>IVA: 0%</p>
                        <p className={CompFactura.Info}>Decripción: {CFdescription}</p>
                        <p className={CompFactura.Info}>Tipo de Transferencia: {CFttransferencia}</p>
                        <p className={CompFactura.InfoState} style={{color: colorTxt}}>{contText}</p>
                    </section>
                </div>
            </div>
        </>
    );
}