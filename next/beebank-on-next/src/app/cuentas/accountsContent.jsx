import styleAccounts from './accounts.module.css';
export default function AccountsContent() {
  
  return (
    <div className={styleAccounts.allAccountsContainer}>

      <div className={styleAccounts.account}>
        <div className={styleAccounts.accountInfo}>
          <label className={styleAccounts.accountInfoType}>Caja de Ahorros (CA)</label>
          <label className={styleAccounts.accountInfoOwner}>Juan Manuel Perez</label>
          <label className={styleAccounts.accountInfoNumber}>40278912-5 485-8</label>
        </div>
        <div className={styleAccounts.accountTransferInfo}>
          <label className={`${styleAccounts.accountCbu} number_format`}><i className="bi bi-clipboard cbu-copy" />0070171230004123456789</label>
          <label className={`${styleAccounts.accountCbu} number_format`}><i className="bi bi-clipboard cbu-copy" />juan.manuel.perez<label className="beebank-tag">$bee</label></label>
        </div>
        <div className={styleAccounts.logOnContainer}>
          <i className="bi bi-arrow-bar-right log-on" />
        </div>
      </div>

    </div>

  )
}