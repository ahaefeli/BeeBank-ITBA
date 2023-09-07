import { Link } from 'react-router-dom';

export default function RegisterContent() {
  return (
    <div className="login">
      <form action>
        <h4>Registrarse</h4>
        <label>Correo electrónico:</label>
        <input type="text" className="mail" id="mail" placeholder="correo electrónico" required />
        <label>Ingrese nuevamente el correo:</label>
        <input type="text" className="mail" id="mail-confirmation" placeholder="correo electrónico" required />
        <label>Contraseña:</label>
        <input type="password" className="password" id="password" placeholder="contraseña" required />
        <Link to="/home" className='button--general login-btn'>Registrate</Link>
        <Link to="/login">Inicia sesión</Link>
      </form>
    </div>
  )
}