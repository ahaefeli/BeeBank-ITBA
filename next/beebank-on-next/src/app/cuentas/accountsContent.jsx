import Link from 'next/link';
import styleAccounts from './accounts.module.css';

export async function getData() {
  const res = await fetch('https://drive.google.com/uc?id=1s5a_gao6nixyse6FxJbbnC7msqz8TR-_')
  console.log(res)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}


export default async function AccountsContent() {

  const data = await getData()

  return (
    <div className={styleAccounts.allAccountsContainer}>

      {Object.keys(data).map((user) => (
        <div className={styleAccounts.account}>
          <div className={styleAccounts.accountInfo}>
            <label className={styleAccounts.accountInfoType}>{user.accountType}</label>
            <label className={styleAccounts.accountInfoOwner}>{data[user]}</label>
            <label className={styleAccounts.accountInfoNumber}>{user.accountNumber}</label>
          </div>
          <div className={styleAccounts.accountTransferInfo}>
            <label className={`${styleAccounts.accountCbu} number_format`}><i className="bi bi-clipboard cbu-copy" />{user.cbu}</label>
            <label className={`${styleAccounts.accountCbu} number_format`}><i className="bi bi-clipboard cbu-copy" />{user.alias}<label className={styleAccounts.beebankTag}>{(user.bank=="Beebank")?'$bee':null}</label></label>
          </div>
          <div className={styleAccounts.logOnContainer}>
            <i className="bi bi-arrow-bar-right log-on" />
          </div>
        </div>
      ))}

      <Link href='/create-account' className={`${styleAccounts.createAccount} button--general`}>Crea una cuenta de empresa</Link>
    </div>

  )
}