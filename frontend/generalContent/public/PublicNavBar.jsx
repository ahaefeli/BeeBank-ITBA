import styleNav from '../../src/main-css/publicNav.module.css'//RUTA
import Link from 'next/link'
import Image from 'next/image';

export default function PublicNavBar(props) {
  return (
    <div className="public-nav-bar">
      <nav>
        <ul className={styleNav.public_navigation}>
          <li><Link href='/'><Image className={styleNav.public_logo} quality={90} sizes='720px' width={60} height={45} src={'https://raw.githubusercontent.com/ahaefeli/beebank-resources/main/beebank-logo-claro.png'} alt="Logo" draggable="false"/></Link></li>
          <li><Link href="/" className={styleNav.public_a_nav} draggable="false">Inicio</Link></li>
          <li><Link href="/soporte" className={styleNav.public_a_nav} draggable="false">Soporte</Link></li>
          <li><Link href="/preguntas-frecuentes" className={styleNav.public_a_nav} draggable="false">Preguntas Frecuentes</Link></li>
          {props.deactivateButton ? null : <Link href="/login" className={`button--general ${styleNav.public_register_btn} ${styleNav.navButton}`} draggable="false">Únete a nosotros</Link>}
        </ul>
      </nav>
    </div>
  );
};