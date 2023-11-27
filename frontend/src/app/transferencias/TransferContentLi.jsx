'use client'
import styleTransfers from './transfers.module.css';
import { useEffect, useState } from 'react';
import TransferAPI from '../TransferAPI.json';
import CompFactura from './CompFactura';
export default function TransferContentLi(props) {

    const {TFstate,TFdescription,TFmonto,TFDbank,TFDnombre,TFDapellido,TFid} = props;
    const [tState,setTState] = useState(styleTransfers.transferDenied);
    const [sFactura, setSFactura] = useState(false);

    function FactVisibility(){
        setSFactura(!sFactura);
    }

    const [apiData, setApiData] = useState([]);
	useEffect(()=>{
		setApiData(TransferAPI);
	});
    let FacturaData ={};
	apiData.forEach((elemento)=>{
        if (elemento.Fid == TFid){
            FacturaData = {
                CFDnombre:elemento.FDnombre,
                CFDapellido:elemento.FDapellido,
                CFDdni:elemento.FDdni,
                CFDcbu:elemento.FDcbu,
                CFDalias:elemento.FDalias,
                CFDbank:elemento.FDbank,
                CFOnombre:elemento.FDbank,
                CFOapellido:elemento.FOapellido,
                CFOdni:elemento.FOdni,
                CFOcbu:elemento.FOcbu,
                CFOalias:elemento.FOalias,
                CFObank:elemento.FObank,
                CFmonto:elemento.Fmonto,
                CFmotivo:elemento.Fmotivo,
                CFdescription:elemento.Fdescription,
                CFttransferencia:elemento.Fttransferencia,
                CFfecha:elemento.Ffecha,
                CFtransfnum:elemento.Ftransfnum,
                CFstate:elemento.Fstate
            };
        }
	});

    useEffect(()=>{
        if (TFstate==='Approved'){
            setTState(styleTransfers.transferApproved);
        }
        else if (TFstate==='Rejected'){
            setTState(styleTransfers.transferDenied);
        }
    },[TFstate]);
    return (
        <>
            <li className={`${tState} number_format`} onClick={FactVisibility}>
                <abbr title={TFdescription}>
                    <i className='bi bi-card-list' />{TFDbank}: {TFDnombre} {TFDapellido} | ${TFmonto.toLocaleString()}
                    <hr />
                </abbr>
            </li>
            {sFactura && <CompFactura {...FacturaData} TgVisibility={FactVisibility}/>}
        </>
    );
}