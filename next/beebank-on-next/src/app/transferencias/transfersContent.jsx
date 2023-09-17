import styleTransfers from './transfers.module.css';
export default function TransfersContent() {
  return (
    <div className={styleTransfers.transfersContainer}>
      <section className={styleTransfers.contacts}>
        <div className={styleTransfers.contactos}>
          <div className={styleTransfers.balance}>
            <ul className={styleTransfers.balanceUl}>
              <li className={styleTransfers.balanceText}>Balance:</li>
              <li className={`${styleTransfers.balanceAmount} number-format`}>450.200,<span className="subText">50</span></li>
            </ul>
          </div>
          <ul className={styleTransfers.transferContactSearch}>
            <li className={styleTransfers.contactSearchText}><a href="#">Tiene Beebank</a></li>
            <li className={styleTransfers.contactSearchText}><a href="#">No tiene Beebank</a></li>
          </ul>
          <ul className={styleTransfers.transferContactSearch}>
            <li><input type="search" name="Busqueda" id="Busqueda" className={styleTransfers.inputBarra} autoComplete="off" /></li>
            <label htmlFor="Busqueda" className={styleTransfers.inputLabel}>Buscá el pago o transferencia</label>
          </ul>
        </div>

        <div className={styleTransfers.transferSection}>
          <ul className={styleTransfers.transfersList}>
            <li className={`${styleTransfers.transferDenied} number_format`}>
              <abbr title="transferencia rechazada por falta de pago">
                <i className="bi bi-card-list" />Beebank*Juz27 Rosario $4.200,00
                <hr />
              </abbr>
            </li>
            <li className={`${styleTransfers.transferApproved} number_format`}>
              <abbr title="transferencia debitada exitosamente">
                <i className="bi bi-card-list" />Uala*AgustinJ23 $450,23
              </abbr>
              <hr />
            </li>
          </ul>
        </div>
      </section>
    </div>

  )
}