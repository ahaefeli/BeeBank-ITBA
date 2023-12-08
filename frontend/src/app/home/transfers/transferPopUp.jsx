import axios from 'axios';
import styleTransfer from './transfer.module.css';
import { useState, useEffect } from "react";

import Cookies from 'js-cookie'

export default function TransferPopUp(props) {
  const cId = Cookies.get("cId")
  const urlTransfer = `http://localhost:8000/cuenta/transferencia/${cId}`

  const [selectValue, setSelectValue] = useState("Factura")
  const [errorLabelText, setErrorLabelText] = useState("")
  function searchClient(){
    let inpt_cbu_search = document.getElementById("inpt_cbu_search").value

    if(inpt_cbu_search.length<=0){
      setErrorLabelText("Introduzca CBU/ALIAS válido")
    }
    else{
      setErrorLabelText("")
    }
  }

  function makeTransfer(){
    axios.post(urlTransfer,{
      from_account_id:cId
      //to_account_id:
      //ammount:
      //motivo:
      //descripcion:
      //state:"aceptado"
    },{
      auth:{
        username:'admin',
        password:'admin'
      },
    })
  }

  return (
    <div className={`${props.show ? "popUp" : "popUp-hide"} downScale`}>
      <section className={styleTransfer.main_section_transfer}>
        <div className={styleTransfer.title}>Transferencias</div>
        <form className={styleTransfer.transfer_form}>

          <div className={styleTransfer.searchContent}>
            <label htmlFor={`${styleTransfer.inpt_cbu_search} ${styleTransfer.marginLabel}`}>CBU/ALIAS</label>
            <input type="text" className={`${styleTransfer.inpt_text} number_format`} id="inpt_cbu_search" placeholder='CBU/ALIAS'/>
            <input type="button" value="Buscar" className={`button--general ${styleTransfer.searchButton}`} id="inpt_buscar" onClick={searchClient}/>
            <label className={styleTransfer.marginLabel}>Monto</label>
            <input className={`${styleTransfer.inpt_text} number_format`} id="inpt_monto" type="number" onChange=""/>
            <label className={styleTransfer.errorLabel} id="errorLabel">{errorLabelText}</label>
            <input type="button" value="Transferir" className={`button--general ${styleTransfer.transferButton}`} id="inpt_transferir" onClick={makeTransfer}/>
          </div>

          <div className={styleTransfer.insideContent}>
            <label>Destinatario</label>
            <input className={styleTransfer.dataText} id="inpt_destinatario" type="text" readOnly value=""/>
            <label>Origen</label>
            <input className={styleTransfer.dataText} id="inpt_origen" type="text" readOnly value=""/>
            <label>CBU</label>
            <input className={styleTransfer.dataText} id="inpt_cbu" type="text" readOnly value=""/>
            <label>Alias</label>
            <input className={styleTransfer.dataText} id="inpt_alias" type="text" readOnly value=""/>
            <label>Banco</label>
            <input className={styleTransfer.dataText} id="inpt_banco" type="text" readOnly value=""/>
            <label>DNI</label>
            <input className={styleTransfer.dataText} id="inpt_dni" type="text" readOnly value=""/>
            <label>Concepto</label>

            <select className={styleTransfer.inpt_concepto} id="inpt_motivo" onChange={(s)=>{const nValue = s.target.value;setSelectValue(s.target.value)}}>
              <option className={styleTransfer.opt_text} value="Factura">Factura</option>
              <option className={styleTransfer.opt_text} value="Comercio">Comercio</option>
              <option className={styleTransfer.opt_text} value="Expensas">Expensas</option>
              <option className={styleTransfer.opt_text} value="Cuota">Cuota</option>
              <option className={styleTransfer.opt_text} value="Honorarios">Honorarios</option>
              <option className={styleTransfer.opt_text} value="Varios">Varios</option>
            </select>

            <label>Descripcion</label>
            <input className={styleTransfer.dataText} id="inpt_description" type="text" onChange=""/>

          </div>
        </form>
      </section>

    </div>
  )
}