import styleNav from '../../src/css/main/publicNav.module.css'//RUTA
import Link from 'next/link'

export default function PublicNavBar(props) {
  return (
    <div className="public-nav-bar">
      <nav>
        <ul className={styleNav.public_navigation}>
          <li><Link href='/'><img className={styleNav.public_logo} src={require('../resources/beebank-logo-claro.png')} alt="Logo" draggable="false" /></Link></li>
          <li><Link href="/" className={styleNav.public_a_nav} draggable="false">Inicio</Link></li>
          <li><Link href="/soporte" className={styleNav.public_a_nav} draggable="false">Soporte</Link></li>
          <li><Link href="/preguntas-frecuentes" className={styleNav.public_a_nav} draggable="false">Preguntas Frecuentes</Link></li>
          {props.deactivateButton ? null : <Link href="/login" className={"${styleNav.button__general} ${styleNav.public_register_btn} ${styleNav.navButton}"} draggable="false">Únete a nosotros</Link>}
        </ul>
      </nav>
    </div>
  );
};