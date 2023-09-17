import styleRegister from '../login/login.module.css'
import Link from 'next/link'

export default function RegisterContent() {
  return (
    <div className={styleRegister.login}>
      <form action>
        <h4 className={styleRegister.title}>Registrarse</h4>
        <label className={styleRegister.loginText}>Correo electrónico:</label>
        <input type="text" className={styleRegister.mail} id="mail" placeholder="correo electrónico" required />
        <label className={styleRegister.loginText}>Ingrese nuevamente el correo:</label>
        <input type="text" className={styleRegister.mail} id="mail-confirmation" placeholder="correo electrónico" required />
        <label className={styleRegister.loginText}>Contraseña:</label>
        <input type="password" className={styleRegister.password} id="password" placeholder="contraseña" required />
        <Link href="/home" className={`button--general ${styleRegister.login_btn}`}>Registrate</Link>
        <Link href="/login">Inicia sesión</Link>
      </form>
    </div>
  )
}