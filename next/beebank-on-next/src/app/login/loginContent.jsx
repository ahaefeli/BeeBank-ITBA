import Link from "next/link"
import styleLogin from './login.module.css'

export default function LoginContent() {

  return (
    <div className={styleLogin.login}>
      <form>
        <h4 className={styleLogin.title}>Ingresa a tu cuenta</h4>
        <label className={styleLogin.loginText}>Correo electrónico:</label>
        <input type="text" className={styleLogin.mail} id="correo" placeholder="correo electrónico" required />
        <label className={styleLogin.loginText}>Contraseña:</label>
        <input type="password" className={styleLogin.password} id="password" placeholder="contraseña" required />
        <Link href="/home" className={`button--general ${styleLogin.login_btn}`}>Ingresar</Link>
        <Link href="/registro">Crear una cuenta</Link>
      </form>
    </div>
  )
}