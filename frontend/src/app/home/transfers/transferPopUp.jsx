import styleTransfer from './transfer.module.css';
import { useState, useEffect } from "react";
import { BalanceEconomico } from '../../BalanceCounter';
import UsersApi from "../../UsersAPI.json";

export default function TransferPopUp(props) {
  let MainIndex = 0;

  //manejo del json API
  const newObjectTransfer = {
    "FDnombre": "-",
    "FDapellido": "-",
    "FDdni": "-",
    "FDcbu": "-",
    "FDalias": "-",
    "FDbanco": "-",
    "FOnombre": "-",
    "FOapellido": "-",
    "FOdni": "-",
    "FOcbu": "-",
    "FOalias": "-",
    "FObanco": "-",
    "Fmonto": 0,
    "Fmotivo": "-",
    "Fdescripcion": "-",
    "Fttransferencia": "Inmediata",
    "Ffecha": "-",
    "Ftransfnum": "-",
    "Fstate": "Approved",
    "Fid": 0,
    "Fio":"out"
  };

  let foundState = false;
  let flag1 = false;
  let elementId = 0;

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

  //seteo de Datos
  //Destinatario
  const [newOriginText,setNewOriginText]=useState("-");
  const [newNameText,setNewNameText]=useState("-");
  const [newSurnameText,setNewSurnameText]=useState("-");
  const [newDniText,setNewDniText]=useState("-");
  const [newCbuText,setNewCbuText]=useState("-");
  const [newAliasText,setNewAliasText]=useState("-");
  const [newBancoText,setNewBancoText]=useState("-");
  //Origen
  const [newONameText,setNewONameText]=useState("-");
  const [newOSurnameText,setNewOSurnameText]=useState("-");
  const [newODniText,setNewODniText]=useState("-");
  const [newOCbuText,setNewOCbuText]=useState("-");
  const [newOAliasText,setNewOAliasText]=useState("-");
  const [newOBancoText,setNewOBancoText]=useState("-");
  //select-data
  const[svMotivoSearchText,setSvMotivoSearchText] = useState();

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
    setSvMotivoSearchText(selectValue);
    setConfirmTransfer(true);
  };
  
  const dataSearch=()=>{
    setSvCbuSearchText(cbuSearchText);
    setConfirmTransfer(false);
  };

  //useEffect select
  const handleSelection = (e) => {
    setSelectValue(e.target.value);
  };

  //useEffect cbu y monto
  useEffect(()=>{
    let MontoToNumber = parseInt(svMontoSearchText);
    MainIndex = UsersApi.length;
    UsersApi.forEach((elemento)=>{
      if(flag1==false){
        foundState=false;
        flag1=true;
      }
      if(elemento.Fid==0){
        setNewOriginText(elemento.FDnombre+" "+elemento.FDapellido+"\n"+elemento.FDalias);

        setNewONameText(elemento.FDnombre);
        setNewOSurnameText(elemento.FDapellido);
        setNewODniText(elemento.FDdni);
        setNewOCbuText(elemento.FDcbu);
        setNewOAliasText(elemento.FDalias);
        setNewOBancoText(elemento.FDbanco);
      }
      else if(svCbuSearchText==elemento.FDalias || svCbuSearchText==elemento.FDcbu){
        foundState=true;
        elementId=elemento.Fid;
      }
    });
    flag1=false;
    if(foundState==true){
      setNewNameText(UsersApi[elementId].FDnombre);
      setNewSurnameText(UsersApi[elementId].FDapellido);
      setNewDniText(UsersApi[elementId].FDdni);
      setNewCbuText(UsersApi[elementId].FDcbu);
      setNewAliasText(UsersApi[elementId].FDalias);
      setNewBancoText(UsersApi[elementId].FDbanco);

      setCbuState(true);
      setErrorText("iddle");
    }
    else if(foundState==false){
      setCbuState(false);
      setNewNameText("-");
      setNewSurnameText("-");
      setNewDniText("-");
      setNewCbuText("-");
      setNewAliasText("-");
      setNewBancoText("-");
      setErrorText("Err1");
    }

    if(svDescriptionSearchText==="" && cbuState==true){
      setDescriptionState(false);
      setErrorText("Err4");
    }
    else if(svDescriptionSearchText.length>28 && cbuState==true){
      setDescriptionState(false);
      setErrorText("Err5");
    }
    else{
      if(cbuState==true){
        setDescriptionState(true);
      }
    }

    if((svMontoSearchText==="" || MontoToNumber<=0 || MontoToNumber>15000000) && descriptionState==true){
      setMontoState(false);
      setErrorText("Err2");
    }
    else if(MontoToNumber>BalanceEconomico && descriptionState==true){
      setMontoState(false);
      setErrorText("Err3");
    }
    else{
      if(descriptionState==true){
        setMontoState(true);
      }
    }
    if(cbuState==true && montoState==true && descriptionState && confirmTransfer==true){
      setErrorText("Yes1");

      newObjectTransfer.FDnombre=newNameText;
      newObjectTransfer.FDapellido=newSurnameText;
      newObjectTransfer.FDdni=newDniText;
      newObjectTransfer.FDcbu=newCbuText;
      newObjectTransfer.FDalias=newAliasText;
      newObjectTransfer.FDbanco=newBancoText;
      newObjectTransfer.FOnombre=newONameText;
      newObjectTransfer.FOapellido=newOSurnameText;
      newObjectTransfer.FOdni=newODniText;
      newObjectTransfer.FOcbu=newOCbuText;
      newObjectTransfer.FOalias=newOAliasText;
      newObjectTransfer.FObanco=newOBancoText;
      newObjectTransfer.Fmonto=MontoToNumber;
      newObjectTransfer.Fmotivo=svMotivoSearchText;
      newObjectTransfer.Fdescripcion=svDescriptionSearchText;
      newObjectTransfer.Fid=MainIndex;

      console.log(newObjectTransfer);
    }
  },[svCbuSearchText,svMontoSearchText,svDescriptionSearchText,cbuState,montoState,descriptionState]);

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

  return (
    <div className={`${props.show ? "popUp" : "popUp-hide"} downScale`}>
      <section className={styleTransfer.main_section_transfer}>
        <div className={styleTransfer.title}>Transferencias</div>
        <form className={styleTransfer.transfer_form}>

          <div className={styleTransfer.searchContent}>
            <label htmlFor={`${styleTransfer.inpt_cbu_search} ${styleTransfer.marginLabel}`}>CBU/ALIAS</label>
            <input type="text" className={`${styleTransfer.inpt_text} number_format`} id="inpt_cbu_search" defaultValue={cbuSearchText} onChange={actCbuSearch}/>
            <input type="button" value="Buscar" className={`button--general ${styleTransfer.searchButton}`} id="inpt_buscar" onClick={dataSearch}/>
            <label className={styleTransfer.marginLabel}>Monto</label>
            <input className={`${styleTransfer.inpt_text} number_format`} id="inpt_monto" type="number" onChange={actMontoSearch}/>
            <label className={styleTransfer.errorLabel} id="errorLabel" style={{ color: errorColor }}>{errorMessage}</label>
            <input type="button" value="Transferir" className={`button--general ${styleTransfer.transferButton}`} id="inpt_transferir" onClick={transferSearch}/>
          </div>

          <div className={styleTransfer.insideContent}>
            <label>Destinatario</label>
            <input className={styleTransfer.dataText} id="inpt_destinatario" type="text" readOnly value={newNameText+" "+newSurnameText}/>
            <label>Origen</label>
            <input className={styleTransfer.dataText} id="inpt_origen" type="text" readOnly value={newOriginText}/>
            <label>CBU</label>
            <input className={styleTransfer.dataText} id="inpt_cbu" type="text" readOnly value={newCbuText}/>
            <label>Alias</label>
            <input className={styleTransfer.dataText} id="inpt_alias" type="text" readOnly value={newAliasText}/>
            <label>Banco</label>
            <input className={styleTransfer.dataText} id="inpt_banco" type="text" readOnly value={newBancoText}/>
            <label>DNI</label>
            <input className={styleTransfer.dataText} id="inpt_dni" type="text" readOnly value={newDniText}/>
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