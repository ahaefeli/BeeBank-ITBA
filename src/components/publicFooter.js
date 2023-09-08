import { Link } from 'react-router-dom';
import '../css/main/public-footer.css'
export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-links responsive-footer">
          <Link to="/preguntas-frecuentes" className="footer-link">Ayuda</Link>
          <Link to="/soporte" className="footer-link">Contáctanos</Link>
          <Link to="https://www.linkedin.com/company/itba-innovacion/?originalSubdomain=ar" target="_blank" className="footer-link">Trabaja con nosotros</Link>
          <Link to="#" className="footer-link">Términos y condiciones</Link>
          <Link to="#" className="footer-link">Defensa del Consumidor</Link>
        </div>
        <div className="footer-info responsive-footer">
          <p className="footer-text">BeeBank © 2023 <label>Todos los derechos reservados</label></p>
          <p className="footer-text">Av. Eduardo Madero 399, <label>Ciudad de Buenos Aires, Argentina</label></p>
        </div>
        <div className="footer-social responsive-footer">
          <Link to="https://www.instagram.com/itbauniversidad/" target="_blank" className="footer-link">Instagram<i className="bi bi-instagram" /></Link>
          <Link to="https://www.facebook.com/itbauniversidad/" className="footer-link" target="_blank">Facebook<i className="bi bi-facebook" /></Link>
          <Link to="https://www.linkedin.com/company/itba-innovacion/?originalSubdomain=ar" className="footer-link" target="_blank">LinkedIn<i className="bi bi-linkedin" /></Link>
        </div>
      </div>
    </footer>
      )
}