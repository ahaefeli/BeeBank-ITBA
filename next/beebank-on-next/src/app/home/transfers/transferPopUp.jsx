import styleTransfer from './transfer.module.css';
import { useState, useEffect } from "react";
import UsersAPI from "../../UsersAPI.json";

export default function TransferPopUp(props) {
  const [selectValue, setSelectValue] = useState("Varios");
  const [errorColor, setErrorColor] = useState("#222831");
  const [errorMessage, setErrorMessage] = useState("DefaultError");
  const [transferState, setTransferState] = useState("iddle");

  //states
  const [showDestinatario, setShowDestinatario] = useState("-");
  const [showMAlias, setShowMAlias] = useState("-");
  const [showCBU, setShowCBU] = useState("-");
  const [showAlias, setShowAlias] = useState("-");
  const [showBanco, setShowBanco] = useState("-");
  const [showDNI, setShowDNI] = useState("-");

  const [searchText, setSearchText] = useState("");
  const [sSearchText, setSSearchText] = useState("");
  const saveSearchText = (param) => {
    setSearchText(param.target.value);
  };

  useEffect(() => {
    UsersAPI.forEach((elemento) => {
      if (elemento.Fid == 0) {
        setShowMAlias(elemento.FDalias);
      }
      else if (elemento.FDcbu == sSearchText || elemento.FDalias == sSearchText) {
        setShowDestinatario(elemento.FDnombre + " " + elemento.FDapellido);
        setShowCBU(elemento.FDcbu);
        setShowAlias(elemento.FDalias);
        setShowBanco(elemento.FDbanco);
        setShowDNI(elemento.FDdni);
      }
    });

  }, [sSearchText]);

  useEffect(() => {
    if (transferState === "Err1") {
      setErrorColor("red");
      setErrorMessage("*Introduzca CBU/Alias valido");
    }
    else {
      setErrorColor("#222831");
      setErrorMessage("*DefaultError");
    }
  });

  function dataSearch() {
    setSSearchText(searchText);
  }

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
            <input type="text" className={`${styleTransfer.inpt_text} number_format`} id="inpt_cbu_search" onChange={saveSearchText} />
            <input type="button" value="Buscar" className={`button--general ${styleTransfer.searchButton}`} id="inpt_buscar" onClick={dataSearch} />
            <label>Monto</label>
            <input className={`${styleTransfer.inpt_text} number_format`} id="inpt_monto" type="number" />
            <label className={styleTransfer.errorLabel} id="errorLabel" style={{ color: errorColor }}>{errorMessage}</label>
            <input type="button" value="Transferir" className={`button--general ${styleTransfer.transferButton}`} id="inpt_transferir" />
          </div>

          <div className={styleTransfer.insideContent}>
            <label>Destinatario</label>
            <input className={styleTransfer.dataText} id="inpt_destinatario" type="text" readOnly value={showDestinatario} />
            <label>Origen</label>
            <input className={styleTransfer.dataText} id="inpt_origen" type="text" readOnly value={showMAlias} />
            <label>CBU</label>
            <input className={styleTransfer.dataText} id="inpt_cbu" type="text" readOnly value={showCBU} />
            <label>Alias</label>
            <input className={styleTransfer.dataText} id="inpt_alias" type="text" readOnly value={showAlias} />
            <label>Banco</label>
            <input className={styleTransfer.dataText} id="inpt_banco" type="text" readOnly value={showBanco} />
            <label>DNI</label>
            <input className={styleTransfer.dataText} id="inpt_dni" type="text" readOnly value={showDNI} />
            <label>Concepto</label>

            <select className={styleTransfer.inpt_concepto} value={selectValue} onChange={handleSelection}>
              <option className={styleTransfer.opt_text} value="Factura">Factura</option>
              <option className={styleTransfer.opt_text} value="Comercio">Comercio</option>
              <option className={styleTransfer.opt_text} value="Expensas">Expensas</option>
              <option className={styleTransfer.opt_text} value="Cuota">Cuota</option>
              <option className={styleTransfer.opt_text} value="Honorarios">Honorarios</option>
              <option className={styleTransfer.opt_text} value="Varios">Varios</option>
            </select>

            <label>Descripcion</label>
            <input className={styleTransfer.dataText} id="inpt_description" type="text" />

          </div>
        </form>
      </section>

    </div>
  )
}