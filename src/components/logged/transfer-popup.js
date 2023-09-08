export default function TransferPopUp(props) {
  return (
    <div className={props.show ? "popUp" : "popUp-hide"}>
      <section className="main_section-transfer">
        <h1>TRANSFERENCIAS</h1>
        <form className="transfer_form" action>
          <label htmlFor="inpt_cbu_search">CBU/ALIAS</label>
          <br />
          <input type="text" className="inpt_text" id="inpt_cbu_search" />
          <input type="button" className="button--general" id="inpt_cbu_search_button" defaultValue="Buscar" />
          <br />
          <label>Destinatario</label>
          <input className="inpt_text" id="inpt_destinatario" type="text" readOnly defaultValue="-" />
          <br />
          <label>Origen</label>
          <input className="inpt_text" id="inpt_origen" type="text" readOnly defaultValue="-" />
          <br />
          <label>CBU</label>
          <input className="inpt_text" id="inpt_cbu" type="text" readOnly defaultValue="-" />
          <br />
          <label>Alias</label>
          <input className="inpt_text" id="inpt_alias" type="text" readOnly defaultValue="-" />
          <br />
          <label>Banco</label>
          <input className="inpt_text" id="inpt_banco" type="text" readOnly defaultValue="-" />
          <br />
          <label>CUIT/CUIL</label>
          <input className="inpt_text" id="inpt_cuil" type="text" readOnly defaultValue="-" />
          <br />
          <label>Concepto</label>
          <select id="inpt_concepto">
            <option className="opt_text" value="Factura">Factura</option>
            <option className="opt_text" value="Comercio">Comercio</option>
            <option className="opt_text" value="Expensas">Expensas</option>
            <option className="opt_text" value="Cuota">Cuota</option>
            <option className="opt_text" value="Honorarios">Honorarios</option>
            <option className="opt_text" value="Varios" selected>Varios</option>
          </select>
          <br />
          <label>MONTO</label>
          <label>$</label><input className="inpt_text" id="inpt_monto" type="number" />
          <br />
          <br />
          <input type="button" defaultValue="Transferir" className="button--general" id="inpt_transferir" />
        </form>
      </section>

    </div>
  )
}