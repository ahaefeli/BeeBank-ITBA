export default function LoggedAccountsContent (){
    return(
       <div className="allAccounts-Container">
  <div className="account">
    <div className="account__info">
      <label className="account__info__type">Caja de Ahorros (CA)</label>
      <label className="account__info__owner">Juan Manuel Perez</label>
      <label className="account__info__number">40278912-5 485-8</label>
    </div>
    <div className="account-transfer-info">
      <label className="account-cbu number-format"><i className="bi bi-clipboard cbu-copy" />0070171230004123456789</label>
      <label className="account-cbu number-format"><i className="bi bi-clipboard cbu-copy" />juan.manuel.perez<label className="beebank-tag">$bee</label></label>
    </div>
    <div className="log-on-container">
      <i className="bi bi-arrow-bar-right log-on" />
    </div>
  </div>
  <div className="account">
    <div className="account__info">
      <label className="account__info__type">Cuenta Corriente (CC)</label>
      <label className="account__info__owner">Distribuidora SRL</label>
      <label className="account__info__number">40245387-7 218-4</label>
    </div>
    <div className="account-transfer-info">
      <label className="account-cbu number-format"><i className="bi bi-clipboard cbu-copy" />0000080042189510548004</label>
      <label className="account-cbu number-format"><i className="bi bi-clipboard cbu-copy" />distribuidora<label className="beebank-tag">$bee</label></label>
    </div>
    <div className="log-on-container">
      <i className="bi bi-arrow-bar-right log-on" />
    </div>
  </div>
</div>

    )
}