import styleTransfer from './transfer.module.css';
import { useState, useEffect } from "react";
import { BalanceEconomico } from '../../BalanceCounter';
export default function TransferPopUp(props) {
  const [selectValue, setSelectValue] = useState("Varios");
  const [errorColor, setErrorColor] = useState("#222831");
  const [errorMessage, setErrorMessage] = useState("DefaultError");

  //const autoactualizable
  const [errorText, setErrorText] = useState("iddle");
  const [confirmTransfer,setConfirmTransfer] = useState(false);

  const [cbuSearchText,setCbuSearchText] = useState("");
  const [montoSearchText,setMontoSearchText] = useState("");
  const [descriptionSearchText,setDescriptionSearchText] = useState("");


  //const evento
  const [svCbuSearchText,setSvCbuSearchText] = useState("");
  const [svMontoSearchText,setSvMontoSearchText] = useState("");
  const [svDescriptionSearchText,setsvDescriptionSearchText] = useState("");
  const [cbuState, setCbuState] = useState(false);
  const [montoState,setMontoState] = useState(false);
  const [descriptionState,setDescriptionState] = useState(false);

  //actualizacion datos monto
  const actMontoSearch=(param)=>{
    setMontoSearchText(param.target.value);
  };
  //actualizacion datos cbu
  const actCbuSearch=(param)=>{
    setCbuSearchText(param.target.value);
  };
  //actualizacion datos descripcion
  const actDescriptionSearch=(param)=>{
    setDescriptionSearchText(param.target.value);
  };
  //eventos botones
  const transferSearch=()=>{
    setSvMontoSearchText(montoSearchText);
    setsvDescriptionSearchText(descriptionSearchText);
    setSvCbuSearchText(cbuSearchText);
    setConfirmTransfer(true);
  };
  
  const dataSearch=()=>{
    setSvCbuSearchText(cbuSearchText);
    setConfirmTransfer(false);
  };


  //useEffect cbu y monto
  useEffect(()=>{
    let MontoToNumber = parseInt(svMontoSearchText);
    if(svCbuSearchText===""){
      setCbuState(false);
      setMontoState(false);
      setDescriptionState(false);
      setErrorText("Err1");
    }
    else if(svDescriptionSearchText===""){
      setCbuState(true);
      setMontoState(false);
      setDescriptionState(false);
      setErrorText("Err4");
    }
    else if(svDescriptionSearchText.length >28){
      setCbuState(true);
      setMontoState(false);
      setDescriptionState(false);
      setErrorText("Err5");
    }
    else if(svMontoSearchText==="" || MontoToNumber<=0 || MontoToNumber>15000000){
      setCbuState(true);
      setMontoState(false);
      setDescriptionState(true);
      setErrorText("Err2");
    }
    else if(MontoToNumber>BalanceEconomico){
      setCbuState(true);
      setMontoState(false);
      setDescriptionState(true);
      setErrorText("Err3");
    }
    else{
      setCbuState(true);
      setMontoState(true);
      setDescriptionState(true);
      setErrorText("Yes1");
    }
  },[svCbuSearchText,svMontoSearchText,svDescriptionSearchText]);

  useEffect(() => {
    if (errorText === "Err1") {
      setErrorColor("red");
      setErrorMessage("*Introduzca CBU/Alias valido");
    }
    else if (errorText === "Err2") {
      setErrorColor("red");
      setErrorMessage("*Introduzca un monto valido");
    }
    else if (errorText === "Err3") {
      setErrorColor("red");
      setErrorMessage("*Fondos insuficientes");
    }
    else if (errorText === "Err4") {
      setErrorColor("red");
      setErrorMessage("*Ingrese una descripción válida");
    }
    else if (errorText === "Err5") {
      setErrorColor("red");
      setErrorMessage("*La descripcion debe tener menos de 28 letras");
    }
    else if (errorText === "Yes1") {
      setErrorColor("#dedede");
      setErrorMessage("TRANSFERENCIA EXITOSA");
    }
    else if(errorText==="iddle"){
      setErrorColor("#222831");
      setErrorMessage("*DefaultError");
    }
  });

  const handleSelection = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <div className={props.show ? "popUp" : "popUp-hide"}>
      <section className={styleTransfer.main_section_transfer}>
        <div className={styleTransfer.title}>Transferencias</div>
        <form className={styleTransfer.transfer_form}>

          <div className={styleTransfer.searchContent}>
            <label htmlFor={styleTransfer.inpt_cbu_search}>CBU/ALIAS</label>
            <input type="text" className={`${styleTransfer.inpt_text} number_format`} id="inpt_cbu_search" defaultValue={cbuSearchText} onChange={actCbuSearch}/>
            <input type="button" value="Buscar" className={`button--general ${styleTransfer.searchButton}`} id="inpt_buscar" onClick={dataSearch}/>
            <label>Monto</label>
            <input className={`${styleTransfer.inpt_text} number_format`} id="inpt_monto" type="number" onChange={actMontoSearch}/>
            <label className={styleTransfer.errorLabel} id="errorLabel" style={{ color: errorColor }}>{errorMessage}</label>
            <input type="button" value="Transferir" className={`button--general ${styleTransfer.transferButton}`} id="inpt_transferir" onClick={transferSearch}/>
          </div>

          <div className={styleTransfer.insideContent}>
            <label>Destinatario</label>
            <input className={styleTransfer.dataText} id="inpt_destinatario" type="text" readOnly/>
            <label>Origen</label>
            <input className={styleTransfer.dataText} id="inpt_origen" type="text" readOnly/>
            <label>CBU</label>
            <input className={styleTransfer.dataText} id="inpt_cbu" type="text" readOnly/>
            <label>Alias</label>
            <input className={styleTransfer.dataText} id="inpt_alias" type="text" readOnly/>
            <label>Banco</label>
            <input className={styleTransfer.dataText} id="inpt_banco" type="text" readOnly/>
            <label>DNI</label>
            <input className={styleTransfer.dataText} id="inpt_dni" type="text" readOnly/>
            <label>Concepto</label>

            <select className={styleTransfer.inpt_concepto} value={selectValue} id="inpt_motivo" onChange={handleSelection}>
              <option className={styleTransfer.opt_text} value="Factura">Factura</option>
              <option className={styleTransfer.opt_text} value="Comercio">Comercio</option>
              <option className={styleTransfer.opt_text} value="Expensas">Expensas</option>
              <option className={styleTransfer.opt_text} value="Cuota">Cuota</option>
              <option className={styleTransfer.opt_text} value="Honorarios">Honorarios</option>
              <option className={styleTransfer.opt_text} value="Varios">Varios</option>
            </select>

            <label>Descripcion</label>
            <input className={styleTransfer.dataText} id="inpt_description" type="text" onChange={actDescriptionSearch}/>

          </div>
        </form>
      </section>

    </div>
  )
}