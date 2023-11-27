
import styleFooter from '../../src/main-css/footer.module.css'//RUTA
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className={styleFooter.footer}>
        <div className={'${styleFooter.footer_links} ${styleFooter.responsive_footer}'}>
          <Link href="/preguntas-frecuentes" className={styleFooter.footer_link}>Ayuda</Link>
          <Link href="/soporte" className={styleFooter.footer_link}>Contáctanos</Link>
          <Link href="https://www.linkedin.com/company/itba-innovacion/?originalSubdomain=ar" target="_blank" className={styleFooter.footer_link}>Trabaja con nosotros</Link>
          <Link href="#" className={styleFooter.footer_link}>Términos y condiciones</Link>
          <Link href="#" className={styleFooter.footer_link}>Defensa del Consumidor</Link>
        </div>
        <div className={`${styleFooter.footer_info} ${styleFooter.responsive_footer}`}>
          <p className={`number_format ${styleFooter.footer_text}`}>BeeBank © 2023 <label>Todos los derechos reservados</label></p>
          <p className={`number_format ${styleFooter.footer_text}`}>Av. Eduardo Madero 399, <label>Ciudad de Buenos Aires, Argentina</label></p>
        </div>
        <div className={`${styleFooter.footer_social} ${styleFooter.responsive_footer}`}>
          <Link href="https://www.instagram.com/itbauniversidad/" target="_blank" className={styleFooter.footer_link}>Instagram<i className="bi bi-instagram" /></Link>
          <Link href="https://www.facebook.com/itbauniversidad/" className={styleFooter.footer_link} target="_blank">Facebook<i className="bi bi-facebook" /></Link>
          <Link href="https://www.linkedin.com/company/itba-innovacion/?originalSubdomain=ar" className={styleFooter.footer_link} target="_blank">LinkedIn<i className="bi bi-linkedin" /></Link>
        </div>
      </div>
    </footer>
      )
}