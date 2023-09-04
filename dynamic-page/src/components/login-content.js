import { Link } from 'react-router-dom';
import '../css/dedicated/login-content.css';
import '../js/login-functionality.js'

export default function LoginContent() {
return (
    <div className="login">
      <form action>
        <h4>Ingresa a tu cuenta</h4>
        <label>Correo electrónico:</label>
        <input type="text" className="mail" id="nombre" placeholder="correo electrónico" required />
        <label>Contraseña:</label>
        <input type="password" className="password" id="password" placeholder="contraseña" required />
        <Link to="/home" className='button--general login-btn'>Ingresar</Link>
        <Link to="/registro">Crear una cuenta</Link>
      </form>
    </div>
  )
}