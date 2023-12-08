import axios from 'axios';
import styleTransfer from './transfer.module.css';
import { useState, useEffect } from "react";

import Cookies from 'js-cookie'

export default function TransferPopUp(props) {
  const cId = Cookies.get("cId")

  const urlTransfer = `http://localhost:8000/cuenta/transferencia/${cId}`

  const [selectValue, setSelectValue] = useState("Factura")
  const [errorLabelText, setErrorLabelText] = useState("")
  const [searchType, setSearchType] = useState("CBU")
  const [checkState, setCheckState] = useState("on")
  const [stateTransferLabel, setStateTransferLabel] = useState("")

  function changeCheckState() {
    if (checkState === "on") {
        setCheckState("off");
        setSearchType("ALIAS");
    } else {
        setCheckState("on");
        setSearchType("CBU");
    }
  }


  function searchClient(){
    let inpt_cbu_search_object = document.getElementById("inpt_cbu_search")
    let inpt_cbu_search = inpt_cbu_search_object.value

    async function getTransfersData(userData){
      //logica para tomar datos de cliente encontrado
      let destinyAccountData
      let inpt_destinatario = document.getElementById("inpt_destinatario")
      let inpt_origen = document.getElementById("inpt_origen")
      let inpt_cbu = document.getElementById("inpt_cbu")
      let inpt_alias = document.getElementById("inpt_alias")
      let inpt_banco = document.getElementById("inpt_banco")
      let inpt_dni = document.getElementById("inpt_dni")

      if(searchType=="CBU"){
        destinyAccountData = (await axios.get(`http://localhost:8000/cuenta/cbu/${inpt_cbu_search}`,{
          auth:{
            username:'admin',
            password:'admin'
          }
        })).data
      }
      else{
        destinyAccountData = (await axios.get(`http://localhost:8000/cuenta/alias/${inpt_cbu_search}`,{
          auth:{
            username:'admin',
            password:'admin'
          }
        })).data
      }

      //si encuentra al usuario ejecuta esto
      if(destinyAccountData.customer_id>0){
        let destinyUserData = (await axios.get(`http://localhost:8000/cliente/api/users/${destinyAccountData.customer_id}`,{
        auth:{
          username:'admin',
          password:'admin'
        }
        })).data

        let destinyClientData = (await axios.get(`http://localhost:8000/cliente/api/cliente/${destinyAccountData.customer_id}`,{
          auth:{
            username:'admin',
            password:'admin'
          }
          })).data[0]

        let userData = (await axios.get(`http://localhost:8000/cliente/api/users/${cId}`,{
          auth:{
            username:'admin',
            password:'admin'
          }
          })).data

        inpt_destinatario.value = destinyUserData.first_name+" "+destinyUserData.last_name
        inpt_origen.value = userData.first_name+" "+userData.last_name
        inpt_cbu.value = destinyAccountData.account_cbu
        inpt_alias.value = destinyAccountData.account_alias
        inpt_banco.value = "BeeBank"
        inpt_dni.value = destinyClientData.dni
      }
      else{
        setErrorLabelText("Cliente no encontrado")
      }
    }

    if(inpt_cbu_search.length<=0){
      setErrorLabelText("Introduzca CBU/ALIAS válido")
    }
    else{
      setErrorLabelText("")
      getTransfersData()
    }
  }

  function makeTransfer(){
    

    if (!ammount || !motivo || !descripcion|| !executed_at|| !to_account_id) {
      alert('Por favor, complete todos los campos antes de transferir.');
      return;
    }

      const from_account_id = cId
      const to_account_id = document.getElementById("to_account_id")
      const ammount = Number(document.getElementById("ammount").value)
      const executed_at = document.getElementById("executed_at")
      const motivo = document.getElementById("motivo")
      const descripcion = document.getElementById("descripcion")
      const state = "aceptado"

      axios.post('http://127.0.0.1:8000/cuenta/transferencia/',
      {
        
        from_account_id,
        to_account_id,
        ammount,
        executed_at,
        motivo,
        descripcion,
        state
      },
      {
       auth:{
        username:'admin',
        password: 'admin'
       }
      }
      )

      .then(response => {
        console.log('Transferencia exitosa', response.data)
        setStateTransferLabel("Transferencia exitosa")
      })

      .catch(error => {
        console.error('error al realizar transferencia',error)
      })

  }

  return (
    <div className={`${props.show ? "popUp" : "popUp-hide"} downScale`}>
      <section className={styleTransfer.main_section_transfer}>
        <div className={styleTransfer.title}>Transferencias</div>
        <form className={styleTransfer.transfer_form}>

          <div className={styleTransfer.searchContent}>
            <label>Buscar usuario por: {searchType}</label>
            <input type="button" onClick={changeCheckState} className={`button--general ${styleTransfer.searchButton}`} value="Cambiar tipo de busqueda"></input>
            <input type="text" className={`${styleTransfer.inpt_text} number_format`} id="inpt_cbu_search" placeholder={searchType}/>
            <input type="button" value="Buscar" className={`button--general ${styleTransfer.searchButton}`} id="inpt_buscar" onClick={searchClient}/>
            <label className={styleTransfer.marginLabel}>Monto</label>
            <input className={`${styleTransfer.inpt_text} number_format`} id="inpt_monto" type="number" onChange=""/>
            <label className={styleTransfer.errorLabel} id="errorLabel">{errorLabelText}</label>
            <input type="button" value="Transferir" className={`button--general ${styleTransfer.transferButton}`} id="inpt_transferir" onClick={makeTransfer}/>
            <label>{stateTransferLabel}</label>
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


