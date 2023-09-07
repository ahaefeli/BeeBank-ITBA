import { useEffect, useState } from 'react';
import configFuncionality from '../../js/config-functionality';

export default function LoggedConfigContent (){

  let [executeEffect, setExecutEffect] = useState(true);
    useEffect(() => {
        if (executeEffect) {
          configFuncionality();
        setExecutEffect = false;  }
    }, [executeEffect]);
    
    return(
        <main>
  <div className="container">
    <h3>Configuración</h3>
    <div className="accordion">
      <label className="accordion-title" htmlFor="accordion1-button-personal-info">Información personal<i className="bi bi-chevron-down" draggable="false" /></label>
      <div className="accordion-content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aliquam dolorem ut assumenda cum
          adipisci veniam ratione fugit, aspernatur vero, illo labore voluptas similique ipsum suscipit quas
          laborum nobis officiis.</p>
      </div>
    </div>
    <div className="accordion">
      <label className="accordion-title" htmlFor="accordion1-button-account">Datos de tu cuenta<i className="bi bi-chevron-down" draggable="false" /></label>
      <div className="accordion-content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aliquam dolorem ut assumenda
          cum adipisci veniam ratione fugit, aspernatur vero, illo labore voluptas similique ipsum suscipit
          quas laborum nobis officiis.</p>
      </div>
    </div>
    <div className="accordion">
      <label className="accordion-title" htmlFor="accordion1-button-security">Seguridad<i className="bi bi-chevron-down" draggable="false" /></label>
      <div className="accordion-content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aliquam dolorem ut assumenda
          cum adipisci veniam ratione fugit, aspernatur vero, illo labore voluptas similique ipsum suscipit
          quas laborum nobis officiis.</p>
      </div>
    </div>
    <div className="accordion">
      <label className="accordion-title" htmlFor="accordion1-button-cards">Tarjetas<i className="bi bi-chevron-down" draggable="false" /></label>
      <div className="accordion-content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aliquam dolorem ut
          assumenda cum adipisci veniam ratione fugit, aspernatur vero, illo labore voluptas similique
          ipsum suscipit quas laborum nobis officiis.</p>
      </div>
    </div>
  </div>
</main>

    )
}