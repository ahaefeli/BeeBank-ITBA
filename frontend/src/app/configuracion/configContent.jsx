'use client'
import { useState } from 'react';
import styleConfig from './config.module.css';

export default function ConfigContent() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenAccordion(index === openAccordion ? null : index);
  };

  return (
    <main className={styleConfig.pageContent}>
      <div className={styleConfig.container}>
        <h3>Configuración</h3>
        {data.map((item, index) => (
          <div className={`${styleConfig.accordion} ${openAccordion === index ? styleConfig.showContent : ''}`} key={index}>
            <label
              className={styleConfig.accordionTitle}
              htmlFor={`accordion1-button-${item.id}`}
              onClick={() => handleAccordionClick(index)}
            >
              {item.title}
              <i className={`bi bi-chevron-${openAccordion === index ? 'up' : 'down'}`} draggable="false" />
            </label>
            <div className={`${styleConfig.accordionContent}`}>
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

const personalInfoData = <div><br></br>#Nombre <br></br>#Apellido <br></br>#DNI <br></br>#Direccion <br></br>#Mail</div>;
const accountData = <div><br></br>#Usuario <br></br>#Contraseña <br></br>#Alias <br></br>#Preferencias de notificaciones</div>;
const securityData = <div><br></br>#2FA <br></br>#Historial de inicio de sesion <br></br>#Limites de transaccion</div>;
const cardsData = <div><br></br>#Agregar o sacar tarjetas <br></br>#Bloqueo y desbloqueo de tarjetas <br></br>#Solicitar nueva tarjeta <br></br>#Asignas límite de uso</div>;

const data = [
  { id: 'personal-info', title: 'Información personal', content:personalInfoData },
  { id: 'account', title: 'Datos de tu cuenta', content: accountData },
  { id: 'security', title: 'Seguridad', content: securityData },
  { id: 'cards', title: 'Tarjetas', content: cardsData },
];
