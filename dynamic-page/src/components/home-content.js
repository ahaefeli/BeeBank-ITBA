import { useEffect } from 'react';
import execSlider from '../js/home-functionality';

export default function HomeContent(){
    useEffect(() => {
        execSlider()
      });
    return(
        <div>
        <div className="homeWelcome">
            <div className="carousel">
                <div className="carousel__presentation">
                    <h1>Bienvenido a BeeBank</h1>
                    <p>Maneja tus finanzas de manera más fácil y eficiente. Accede, gestiona y controla tus gastos con comodidad.
                        Estamos aquí para ti.</p>
                </div>
                <div className="carousel__carouseles" id="slider">
                    <section className="slider-section">
                        <img src={require('../resources/uc.png')} draggable="false" />
                    </section>
                    <section className="slider-section">
                        <img src={require('../resources/uc2.png')} draggable="false" />
                    </section>
                    <section className="slider-section">
                        <img src={require('../resources/uc3.png')} draggable="false" />
                    </section>
                    <div className="dark" />
                </div>
                <div className="carousel__rightBtn"><i className="bi bi-chevron-right" /></div>
            </div>
        </div>
        <div className="objectives">
            <div className="objectives__intro">
                <h4>Nuestros objetivos</h4>
                <p>Aquí compartimos nuestra pasión por brindarte servicios financieros que se alinean con tus metas y sueños,
                    respaldados por un compromiso inquebrantable con tu éxito.</p>
            </div>
            <div className="objectives__all">
                <div className="objectives__all__objective">
                    <h4>• Seguridad Financiera</h4>
                    <p>Nuestra prioridad es tu seguridad financiera. Trabajamos sin descanso para mantener tus activos
                        protegidos
                        y garantizar que tus transacciones sean seguras, ofreciéndote tranquilidad en cada paso del camino.</p>
                </div>
                <div className="objectives__all__objective">
                    <h4>• Facilitando Aspiraciones</h4>
                    <p>Facilitar tus aspiraciones es nuestro propósito. Nos esforzamos por ofrecerte soluciones bancarias
                        eficientes y amigables que simplifiquen la gestión de tu dinero, permitiéndote alcanzar tus metas con
                        confianza.</p>
                </div>
            </div>
        </div>
        <div className="products">
            <div className="products__title">
                <h2>Nuestros servicios</h2>
            </div>
            <div className="products__list">
                <div className="products__list_product">
                    <i className="bi bi-cash-coin" />
                    <h4>Transferencias Rápidas y Seguras</h4>
                    <p>Experimenta la libertad de movimiento con nuestras Transferencias Rápidas y Seguras. Ya sea que necesites
                        enviar dinero a un amigo o pagar facturas, puedes confiar en que tus transacciones serán ágiles y
                        protegidas
                        en cada paso del camino.</p>
                </div>
                <div className="products__list_product">
                    <i className="bi bi-piggy-bank-fill" />
                    <h4>Préstamos Personalizados</h4>
                    <p>Imagina el siguiente paso en tus proyectos con nuestros Préstamos Personalizados. Ofrecemos soluciones
                        adaptadas a tus necesidades financieras, brindándote acceso a recursos que te ayudarán a materializar tus
                        sueños con confianza.</p>
                </div>
                <div className="products__list_product">
                    <i className="bi bi-wallet2" />
                    <h4>Seguimiento de Gastos</h4>
                    <p>Mantén el control total de tus finanzas con nuestra Herramienta de Seguimiento de Gastos. Esta utilidad
                        te
                        permite categorizar y analizar tus gastos, dándote una perspectiva clara de tus hábitos y facilitando la
                        toma de decisiones financieras sólidas.</p>
                </div>
                <div className="products__list_product">
                    <i className="bi bi-person-fill" />
                    <h4>Soporte 24/7</h4>
                    <p>Nuestro Soporte 24/7 está siempre a tu disposición. No importa la hora o el día, estamos aquí para
                        responder tus consultas y ayudarte con cualquier problema que puedas tener. Tu tranquilidad es nuestra
                        prioridad.</p>
                </div>
            </div>
        </div>
    </div>    
    )
}