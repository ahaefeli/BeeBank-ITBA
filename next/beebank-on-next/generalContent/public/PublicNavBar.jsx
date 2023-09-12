import style from //RUTA


export default function PublicNavBar(props) {
  return (
    <div className="public-nav-bar">
      <nav>
        <ul className="public-navigation">
          <li><Link to='/'><img className="public-logo" src={require('../resources/beebank-logo-claro.png')} alt="Logo" draggable="false" /></Link></li>
          <li><Link to="/" className="public-a-nav" draggable="false">Inicio</Link></li>
          <li><Link to="/soporte" className="public-a-nav" draggable="false">Soporte</Link></li>
          <li><Link to="/preguntas-frecuentes" className="public-a-nav" draggable="false">Preguntas Frecuentes</Link></li>
          {props.deactivateButton ? null : <Link to="/login" className="button--general public-register-btn navButton" draggable="false">Únete a nosotros</Link>}
        </ul>
      </nav>
    </div>
  );
};