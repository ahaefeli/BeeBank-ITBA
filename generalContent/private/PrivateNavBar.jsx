'use client';

import styleNav from '../../src/main-css/privateNav.module.css'//RUTA
import Link from 'next/link'
import { useState, useEffect } from 'react';

export default function LoggedNavBar () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        console.log(isMenuOpen)
    }, [isMenuOpen]);

    return (<>
            <span><i className={`bi bi-chevron-down ${isMenuOpen?styleNav.iconOpen:styleNav.iconClosed} ${styleNav.toggleMenu}`} onClick={toggleMenu}></i></span>

            <div className={`${styleNav.navBar_Container} ${isMenuOpen?styleNav.showMenu:styleNav.hideMenu}`}>
            <nav className={styleNav.logged_navbar}>
                <ul className={`${styleNav.logged_navbar__list} ${isMenuOpen?styleNav.showMenu:styleNav.hideMenu}`}>
                    <li className={styleNav.logged_navbar__list__li_nav}><Link href="/home" className={styleNav.li__a_nav} draggable="false"><i className="bi bi-house" />Inicio</Link></li>
                    <li className={styleNav.logged_navbar__list__li_nav}><Link href="/cuentas" className={styleNav.li__a_nav} draggable="false"><i className="bi bi-person" />Cuenta</Link></li>
                    <li className={styleNav.logged_navbar__list__li_nav}><Link href="/transferencias" className={styleNav.li__a_nav} draggable="false"><i className="bi bi-shuffle" />Transferencias</Link></li>
                    <li className={styleNav.logged_navbar__list__li_nav}><Link href="/prestamos" className={styleNav.li__a_nav} draggable="false"><i className="bi bi-bank" />Préstamos</Link></li>
                    <li className={styleNav.logged_navbar__list__li_nav}><Link href="/soporte" className={styleNav.li__a_nav} draggable="false"><i className="bi bi-shield-check" />Soporte</Link></li>
                    <li className={styleNav.logged_navbar__list__li_nav}><Link href="/configuracion" className={styleNav.li__a_nav} draggable="false"><i className="bi bi-gear" />Configuración</Link></li>
                    <li className={styleNav.logged_navbar__list__li_nav}><Link href="/" className={styleNav.li__a_nav} draggable="false"><i className="bi bi-box-arrow-left" />Cerrar Sesión</Link></li>
                </ul>
            </nav>
        </div>

        </>)
}