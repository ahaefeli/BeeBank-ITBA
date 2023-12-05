import styleCBU from './cbu.module.css'

export default function CbuPopUp(props) {

  let userData = props.userData
  let accountData = props.accountData
  let accountType = props.accountType
  
  return (
    <div className={props.show ? "popUp" : "popUp-hide"}>
      <section className={styleCBU.mainSection}>
        <div className={styleCBU.username}>{userData.first_name} {userData.last_name}</div>
        <table className={styleCBU.cbuTable}>
          <tbody>
            <tr>
              <td><p className={styleCBU.dataText}>IBAN</p></td>
              <td><p className={`${styleCBU.dataValue} number_format`}>{accountData.iban}</p></td>
            </tr>
            <tr>
              <td><p className={styleCBU.dataText}>Banco</p></td>
              <td><p className={styleCBU.dataValue}>BeeBank SA.</p></td>
            </tr>
            <tr>
              <td><p className={styleCBU.dataText}>Tipo de cuenta</p></td>
              <td><p className={styleCBU.dataValue}>{accountType}</p></td>
            </tr>
            <tr>
              <td><p className={styleCBU.dataText}>CBU</p></td>
              <td><p className={`${styleCBU.dataValue} number_format`}>{accountData.account_cbu}</p></td>
            </tr>
            <tr>
              <td><p className={styleCBU.dataText}>Alias</p></td>
              <td><p className={styleCBU.dataValue}>{accountData.account_alias}</p></td>
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