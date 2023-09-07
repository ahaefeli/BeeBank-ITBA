export default function LoggedTransfersContent() {
  return (
  <div className="transfersContainer">
    <section className="contacts">
      <div className="contactos">
        <div className="balance">
          <ul className="balance-ul">
            <li className="balance-text">Balance:</li>
            <li className="balance-amount number-format">450.200,<span className="sub-text">50</span></li>
          </ul>
        </div>
        <ul className="contact-search">
          <li className="contact-search-text"><a href="#">Tiene Beebank</a></li>
          <li className="contact-search-text"><a href="#">No tiene Beebank</a></li>
        </ul>
        <ul className="contact-search">
          <li><input type="search" name="Busqueda" id="Busqueda" className="input-barra" autoComplete="off" /></li>
          <label htmlFor="Busqueda" className="input-label">Buscá su nombre acá</label>
        </ul>
      </div>
      <div className="sector-transfer">
        <ul className="Transferencias">
          <li className="Transferencias-x">
            <abbr title="Transferencia rechazada por falta de pago">
              <i className="bi bi-card-list" />Beebank*Juz27 Rosario $4.200,00
              <hr />
            </abbr>
          </li>
          <li className="Transferencias-y">
            <abbr title="Transferencia debitada exitosamente">
              <i className="bi bi-card-list" />Uala*AgustinJ23 $450,23
            </abbr>
            <hr />
          </li>
          <li className="Transferencias-y">
            <abbr title="transferencia debitada exitosamente">
              <i className="bi bi-card-list" /> MerPago*Diana2003 $900,49
            </abbr>
            <hr />
          </li>
          <li className="Transferencias-x">
            <abbr title="Transferencia rechazada debido a que hubo un error al escribir el codigo de seguridad">
              <i className="bi bi-card-list" />Beebank*Pablo_M10 $5090,20
              <hr />
            </abbr></li>
          <li className="Transferencias-y">
            <abbr title="Transferencia debitada efectivamente">
              <i className="bi bi-card-list" /> FarmaCity Villa Leon $1024,99
              <hr />
            </abbr>
          </li>
          <li className="Transferencias-x">
            <abbr title="Transferencia rechazada. Cbu inexistente">
              <i className="bi bi-card-list" />Supermercado *TiaChona Belgrano Arg 39280,99
              <hr />
            </abbr>
          </li>
        </ul>
      </div>
    </section>
  </div>

  )
}