export default function SupportContent() {
    return (
      <div>
        <center>
          <div className='support_faq_Welcome'>
            <h1>Soporte</h1>
            <p>¡Antes de contactarnos, te invitamos a explorar nuestras <a href="#">Preguntas Frecuentes</a>! Allí podrás encontrar respuestas inmediatas a las dudas más comunes. Ahorrarás tiempo y quizás encuentres justo lo que necesitas. ¡Estamos aquí para ayudarte en cada paso del camino!</p>
          </div>
        </center>
        
        <div className='support_faq'>
          <div className='support_faq_questionContainer'>
            <div className='support_faq_question'>¿Cómo me creo una cuenta de BeeBank?</div>
            <div className='support_faq_answer'>Registrarte en BeeBank es sencillo. Selecciona <a href="#">Únete a nosotros</a> en la barra de
              navegación y sigue las instrucciones para completar el proceso. Ten el documento a mano para verificar tu
              identidad.</div>
          </div>
          <div className='support_faq_questionContainer'>
            <div className='support_faq_question'>¿Cómo puedo recuperar mi contraseña si la olvidé?</div>
            <div className='support_faq_answer'>Si has olvidado tu contraseña, ve a la página de inicio de sesión y selecciona <a href="#">¿Olvidaste tu
              contraseña?</a> Ingresa tu número de cuenta o el mail y sigue las indicaciones para restablecer tu contraseña de
              forma segura.</div>
          </div>
          <div className='support_faq_questionContainer'>
            <div className='support_faq_question'>¿Cómo puedo pagar mis facturas con Beebank?</div>
            <div className='support_faq_answer'>Pagar tus facturas es simple con Beebank. Accede a tu cuenta, selecciona la opción <a href="#">Pagos</a>,
              ingresa los detalles del beneficiario y el monto a pagar, y luego confirma la transacción. También puedes
              programar pagos recurrentes para mayor comodidad.</div>
          </div>
          <div className='support_faq_questionContainer'>
            <div className='support_faq_question'>¿Qué hago si veo una transacción que no hice en mi historial?</div>
            <div className='support_faq_answer'>Si notas una transacción no autorizada, te recomendamos actuar de
              inmediato. Comunica el problema a nuestro equipo de atención al cliente al número <a className="number-format" href="tel:+541153687996">+54
                (11) 5368 7996</a> para que podamos investigar y tomar las medidas necesarias para resolver el problema.</div>
          </div>
        </div>
        <center>
          <div className='support_faq_Container'>
            <h4>¿Necesitas hablar con un asesor?</h4>
            <p>Puedes comunicarte con nosotros por cualquiera de los siguientes métodos:</p>
            <p>Llama al: <a className='number_format' href="tel:+541153687996">+54 (11) 5368 7996</a></p>
            <p>Envía un correo a: <a href="mailto:soporte@beebank.com.ar">soporte@beebank.com.ar</a></p>
            <p>o acercate a cualquiera de <a href="#">nuestras sucursales</a></p>
          </div>
        </center>
      </div>
  
    )
  }