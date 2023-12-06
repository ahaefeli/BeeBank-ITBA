'use client'
import styleTransfers from './transfers.module.css';
import { useEffect, useState } from 'react';

import CompFactura from './CompFactura';
export default function TransferContentLi(props) {

    const {TFstate,TFdescription,TFfecha,TFmonto,TFmotivo,TFid,TFio,TFDnombre,TFDapellido,TFDcbu,TFDalias,TFDdni,TFDbank,TFOnombre,TFOapellido,TFOcbu,TFOalias,TFOdni,TFObank} = props

    const [tState,setTState] = useState(styleTransfers.transferDenied);
    const [sFactura, setSFactura] = useState(false);

    function FactVisibility(){
        setSFactura(!sFactura);
    }

    useEffect(()=>{
        if(TFstate.length>0){
            if (TFstate=='aceptado'){
                setTState(styleTransfers.transferApproved);
            }
            else if (TFstate=='rechazado'){
                setTState(styleTransfers.transferDenied);
            }
        }
    },[TFstate]);

    return (
        <>
            <li className={`${tState}`} onClick={FactVisibility}>
                <abbr title={TFdescription}>
                    <i className='bi bi-card-list'>{TFDbank}: {TFDnombre} {TFDapellido} | ${TFmonto}</i>
                    <hr />
                </abbr>
            </li>
            {sFactura && <CompFactura {...props} TgVisibility={FactVisibility}/>}
        </>
    );
}