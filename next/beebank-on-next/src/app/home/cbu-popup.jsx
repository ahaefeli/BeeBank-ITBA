import styleCBU from './cbu.module.css'

export default function CbuPopUp(props) {
  
  return (
    <div className={props.show ? "popUp" : "popUp-hide"}>
      <section className={styleCBU.mainSection}>
        <div className={styleCBU.username}>Juan Manuel Perez</div>
        <table className={styleCBU.cbuTable}>
          <tbody>
            <tr>
              <td><p className={styleCBU.dataText}>CUIL/CUIT</p></td>
              <td><p className={`${styleCBU.dataValue} number_format`}>20-21354745-8</p></td>
            </tr>
            <tr>
              <td><p className={styleCBU.dataText}>Banco</p></td>
              <td><p className={styleCBU.dataValue}>BeeBank SA.</p></td>
            </tr>
            <tr>
              <td><p className={styleCBU.dataText}>Tipo de cuenta</p></td>
              <td><p className={styleCBU.dataValue}>Caja de Ahorros (CA)</p></td>
            </tr>
            <tr>
              <td><p className={styleCBU.dataText}>CBU</p></td>
              <td><p className={`${styleCBU.dataValue} number_format`}>0080821354215648423318</p></td>
            </tr>
            <tr>
              <td><p className={styleCBU.dataText}>Alias</p></td>
              <td><p className={styleCBU.dataValue}>pato.sapo.bee</p></td>
            </tr>
          </tbody>

        </table>
        <div className={styleCBU.buttonsContainer}>
          <button className={`button--general ${styleCBU.copyButtons}`}>Copiar Alias</button>
          <button className={`button--general ${styleCBU.copyButtons}`}>Copiar CBU</button>
        </div>
      </section>
    </div>

  )
}