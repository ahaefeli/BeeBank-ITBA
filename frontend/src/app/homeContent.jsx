'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import stylesIndex from './index.module.css'


export default function HomeContent() {
  function getWindowDimensions() {
    if (typeof window !== 'undefined'){
      const width = window.innerWidth
      return {
        width,
      };
    }
  }

  const widthScreen = getWindowDimensions().width

  const [executeEffect, setExecuteEffect] = useState(true);
  const [counter, setCounter] = useState(0);
  const [sliderStyle, setSliderStyle] = useState({});

  useEffect(() => {
    const sliderInterval = setInterval(moveToRight, 10000);

    return () => {
      clearInterval(sliderInterval);
    };
  }, []);

  useEffect(() => {
    const widthImg = 100 / 3; // Adjust this value according to the number of slides.

    const newSliderStyle = {
      transform: `translate(-${widthImg * counter}%)`,
      transition: 'all ease 2s',
    };

    setSliderStyle(newSliderStyle);
  }, [counter]);

  function moveToRight() {
    setCounter((prevCounter) => (prevCounter + 1) % 3); // Adjust '3' for the number of slides
  }

  return (
    <div>
      <div className={stylesIndex.homeWelcome}>
        <div className={stylesIndex.carousel}>
          <div className={stylesIndex.carousel__presentation}>
            <h1>Bienvenido a BeeBank</h1>
            <p>Maneja tus finanzas de manera más fácil y eficiente. Accede, gestiona y controla tus gastos con comodidad.
              Estamos aquí para ti.</p>
          </div>
          <div className={stylesIndex.carousel__carouseles} id='slider' style={sliderStyle}>
            <section className={stylesIndex.slider_section} id='slider-section'>
              <Image alt='Beebank, banco nacional argentino' quality={100} width={widthScreen} height={750} src={'https://raw.githubusercontent.com/ahaefeli/beebank-resources/main/uc.png'} priority="true" draggable='false' />
            </section>
            <section className='slider-section'>
              <Image alt='Beebank, banco nacional argentino' quality={100} width={widthScreen} height={750} src={'https://raw.githubusercontent.com/ahaefeli/beebank-resources/main/uc2.png'} draggable='false' />
            </section>
            <section className={stylesIndex.slider_section}>
              <Image alt='Beebank, banco nacional argentino' quality={100} width={widthScreen} height={750} src={'https://raw.githubusercontent.com/ahaefeli/beebank-resources/main/uc3.png'} draggable='false' />
            </section>
            <div className={stylesIndex.dark} />
          </div>
          <div className={stylesIndex.carousel__rightBtn} id='carousel__rightBtn' onClick={() => moveToRight()}><i className='bi bi-chevron-right' /></div>
        </div>
      </div>

      <div className='objectives'>
        <div className='objectives__intro'>
          <h4>Nuestros objetivos</h4 >
          <p>Aquí compartimos nuestra pasión por brindarte servicios financieros que se alinean con tus metas y sueños,
            respaldados por un compromiso inquebrantable con tu éxito.</p>
        </div>
        <div className='support_faq'>
          <div className='support_faq_questionContainer'>
            <div className='support_faq_question'>• Seguridad Financiera</div>
            <div className='support_faq_answer'>Nuestra prioridad es tu seguridad financiera. Trabajamos sin descanso para mantener tus activos
              protegidos
              y garantizar que tus transacciones sean seguras, ofreciéndote tranquilidad en cada paso del camino.</div>
          </div>
          <div className='support_faq_questionContainer'>
            <div className='support_faq_question'>• Facilitando Aspiraciones</div>
            <div className='support_faq_answer'>Facilitar tus aspiraciones es nuestro propósito. Nos esforzamos por ofrecerte soluciones bancarias
              eficientes y amigables que simplifiquen la gestión de tu dinero, permitiéndote alcanzar tus metas con
              confianza.</div>
          </div>
        </div>
      </div>

      <div className='objectives'>
        <div className='objectives__intro'>
          <h4>Nuestros servicios</h4>
        </div>
        <div className='support_faq'>
          <div className='support_faq_questionContainer'>
            <div className='support_faq_question'>
              <i className='bi bi-cash-coin' />
              <h4>Transferencias Rápidas y Seguras</h4>
            </div>

            <div className='support_faq_answer'>Experimenta la libertad de movimiento con nuestras Transferencias Rápidas y Seguras. Ya sea que necesites
              enviar dinero a un amigo o pagar facturas, puedes confiar en que tus transacciones serán ágiles y
              protegidas
              en cada paso del camino.</div >
          </div>
          <div className='support_faq_questionContainer'>
            <div className='support_faq_question'>
              <i className='bi bi-piggy-bank-fill' />
              <h4>Préstamos Personalizados</h4>
            </div>
            <div className='support_faq_answer'>Imagina el siguiente paso en tus proyectos con nuestros Préstamos Personalizados. Ofrecemos soluciones
              adaptadas a tus necesidades financieras, brindándote acceso a recursos que te ayudarán a materializar tus
              sueños con confianza.</div>
          </div>
          <div className='support_faq_questionContainer'>
            <div className='support_faq_question'>
              <i className='bi bi-wallet2' />
              <h4>Seguimiento de Gastos</h4>
            </div>
            <div className='support_faq_answer'>Mantén el control total de tus finanzas con nuestra Herramienta de Seguimiento de Gastos. Esta utilidad
              te
              permite categorizar y analizar tus gastos, dándote una perspectiva clara de tus hábitos y facilitando la
              toma de decisiones financieras sólidas.</div>
          </div>
          <div className='support_faq_questionContainer'>
            <div className='support_faq_question'>
              <i className='bi bi-person-fill' />
              <h4>Soporte 24/7</h4>
            </div>
            <div className='support_faq_answer'>Nuestro Soporte 24/7 está siempre a tu disposición. No importa la hora o el día, estamos aquí para
              responder tus consultas y ayudarte con cualquier problema que puedas tener. Tu tranquilidad es nuestra
              prioridad.</div>
          </div>
        </div>
      </div>

    </div>
  )
}





