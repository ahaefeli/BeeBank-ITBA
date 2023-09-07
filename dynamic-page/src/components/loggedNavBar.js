import { Link } from "react-router-dom"
import '../css/main/logged-nav.css'

export default function LoggedNavBar () {
    return (
        <div className="navBar-Container">
            <nav className="logged-navbar">
                <ul className="logged-navbar__list">
                    <li className="logged-navbar__list__li-nav"><Link to="/home" className="li__a-nav" draggable="false"><i className="bi bi-house" />Inicio</Link></li>
                    <li className="logged-navbar__list__li-nav"><Link to="/cuentas" className="li__a-nav" draggable="false"><i className="bi bi-person" />Cuenta</Link></li>
                    <li className="logged-navbar__list__li-nav"><Link to="/transferencias" className="li__a-nav" draggable="false"><i className="bi bi-shuffle" />Transferencias</Link></li>
                    <li className="logged-navbar__list__li-nav"><Link to="/prestamos" className="li__a-nav" draggable="false"><i className="bi bi-bank" />Préstamos</Link></li>
                    <li className="logged-navbar__list__li-nav"><Link to="/soporte" className="li__a-nav" draggable="false"><i className="bi bi-shield-check" />Soporte</Link></li>
                    <li className="logged-navbar__list__li-nav"><Link to="/configuracion" className="li__a-nav" draggable="false"><i className="bi bi-gear" />Configuración</Link></li>
                    <li className="logged-navbar__list__li-nav"><Link to="/" className="li__a-nav" draggable="false"><i className="bi bi-box-arrow-left" />Cerrar Sesión</Link></li>
                </ul>
            </nav>
        </div>

    )
}