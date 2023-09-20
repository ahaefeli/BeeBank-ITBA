import styleTransfer from './transfer.module.css';
import {useState} from "react";

export default function TransferPopUp(props) {
  const [selectValue, setSelectValue] = useState("Varios");

  const handleSelection = (e)=>{
    setSelectValue(e.target.value);
  };

  return (
    <div className={props.show ? "popUp" : "popUp-hide"}>
      <section className={styleTransfer.main_section_transfer}>
        <div className={styleTransfer.title}>Transferencias</div>
        <form className={styleTransfer.transfer_form}>
          
          <div className={styleTransfer.searchContent}>
            <label htmlFor={styleTransfer.inpt_cbu_search}>CBU/ALIAS</label>
            <input type="text" className={`${styleTransfer.inpt_text} number_format`} id="inpt_cbu_search" />
            <label>Monto</label>
            <input className={`${styleTransfer.inpt_text} number_format`} id="inpt_monto" type="number" />
            <input type="button" defaultValue="Transferir" className={`button--general ${styleTransfer.transferButton}`} id="inpt_transferir" />
          </div>

          <div className={styleTransfer.insideContent}>
            <label>Destinatario</label>
            <input className={styleTransfer.dataText} id="inpt_destinatario" type="text" readOnly defaultValue="-" />
            <label>Origen</label>
            <input className={styleTransfer.dataText} id="inpt_origen" type="text" readOnly defaultValue="-" />
            <label>CBU</label>
            <input className={styleTransfer.dataText} id="inpt_cbu" type="text" readOnly defaultValue="-" />
            <label>Alias</label>
            <input className={styleTransfer.dataText} id="inpt_alias" type="text" readOnly defaultValue="-" />
            <label>Banco</label>
            <input className={styleTransfer.dataText} id="inpt_banco" type="text" readOnly defaultValue="-" />
            <label>CUIT/CUIL</label>
            <input className={styleTransfer.dataText} id="inpt_cuil" type="text" readOnly defaultValue="-" />
            <label>Concepto</label>

            <select className={styleTransfer.inpt_concepto} value={selectValue} onChange={handleSelection}>
              <option className={styleTransfer.opt_text} value="Factura">Factura</option>
              <option className={styleTransfer.opt_text} value="Comercio">Comercio</option>
              <option className={styleTransfer.opt_text} value="Expensas">Expensas</option>
              <option className={styleTransfer.opt_text} value="Cuota">Cuota</option>
              <option className={styleTransfer.opt_text} value="Honorarios">Honorarios</option>
              <option className={styleTransfer.opt_text} value="Varios">Varios</option>
            </select>

          </div>
        </form>
      </section>

    </div>
  )
}