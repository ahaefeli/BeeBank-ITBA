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

  const [transferState, setTransferState] = useState(false)
  const [fromId, setFromId] = useState(cId)
  const [toId, setToId] = useState(-1)

  function changeCheckState() {
    if (checkState === "on") {
        setCheckState("off");
        setSearchType("ALIAS");
    } else {
        setCheckState("on");
        setSearchType("CBU");
    }
  }

  //realizar busqueda de clientes
  function searchClient(){
    setStateTransferLabel("")
    async function getTransfersData(inpt_cbu_search){
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
        setToId(destinyAccountData.customer_id)
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

        setTransferState(true)
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
      let inpt_cbu_search_object = document.getElementById("inpt_cbu_search")
      if (inpt_cbu_search_object) {
        let inpt_cbu_search = inpt_cbu_search_object.value;
        getTransfersData(inpt_cbu_search)
      }
      
    }
  }

  //funcion para realizar las transferencias
  function makeTransfer(){
    if(transferState==true){
      let ammount = Number(document.getElementById("inpt_monto").value)
      let descripcion = document.getElementById("inpt_description").value

      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Ajustar el mes a dos dígitos
      const day = String(currentDate.getDate()).padStart(2, '0'); // Ajustar el día a dos dígitos
      const hours = String(currentDate.getHours()).padStart(2, '0');
      const minutes = String(currentDate.getMinutes()).padStart(2, '0');
      const seconds = String(currentDate.getSeconds()).padStart(2, '0');

      let executed_at = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      let fromIdNumber = parseInt(fromId)
      let toIdNumber = parseInt(toId)

      let dataForTransfer = {
        from_account_id:fromIdNumber,
        to_account_id:toIdNumber,
        ammount:ammount,
        executed_at:executed_at,
        motivo:selectValue,
        descripcion:descripcion,
        state:"aceptado"
      }

      //console.log(dataForTransfer)
      axios.post('http://localhost:8000/cuenta/transferencia/',dataForTransfer,
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
        setTransferState(false)
      })

      .catch(error => {
        console.error('error al realizar transferencia',error)
        setStateTransferLabel("Error al realizar transferencia")
      })
    }

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
            <input className={`${styleTransfer.inpt_text} number_format`} id="inpt_monto" type="number"/>
            <label className={styleTransfer.errorLabel} id="errorLabel">{errorLabelText}</label>
            <input type="button" value="Transferir" className={`button--general ${styleTransfer.transferButton}`} id="inpt_transferir" onClick={makeTransfer}/>
            <label>{stateTransferLabel}</label>
          </div>

          <div className={styleTransfer.insideContent}>
            <label>Concepto</label>
            <select className={styleTransfer.inpt_concepto} id="inpt_motivo" onChange={(s)=>{const nValue = s.target.value;setSelectValue(s.target.value)}}>
              <option className={styleTransfer.opt_text} value="Factura">Factura</option>
              <option className={styleTransfer.opt_text} value="Comercio">Comercio</option>
              <option className={styleTransfer.opt_text} value="Expensas">Expensas</option>
              <option className={styleTransfer.opt_text} value="Cuota">Cuota</option>
              <option className={styleTransfer.opt_text} value="Honorarios">Honorarios</option>
              <option className={styleTransfer.opt_text} value="Varios">Varios</option>
            </select>
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
            <label>Descripcion</label>
            <input className={styleTransfer.dataText} id="inpt_description" type="text"/>

          </div>
        </form>
      </section>

    </div>
  )
}


