export default function FaqContent() {
  return (
    <div>
      <center>
        <div className="faqWelcome">
          <h1>Preguntas Frecuentes</h1>
          <p>Aquí encontrarás respuestas rápidas a las consultas más comunes sobre nuestro servicio de home banking. Antes
            de contactarnos, explora estas respuestas para una solución instantánea. Estamos aquí para hacer que tu
            experiencia bancaria sea más sencilla y satisfactoria.</p>
        </div>
      </center>
      <div className="faqContainer">
        {/* Seguridad  */}
        <h2 className="subtitle">Seguridad:</h2>
        <div className="question-container">
          <div className="question">¿Cómo puedo mantener segura mi contraseña de Beebank?</div>
          <div className="answer">Para proteger tu contraseña, elige una combinación única de letras, números y caracteres especiales. No la compartas y cámbiala regularmente.</div>
        </div>
        <div className="question-container">
          <div className="question">¿Qué medidas de seguridad tiene Beebank para proteger mis datos?</div>
          <div className="answer">Utilizamos cifrado SSL y autenticación de dos factores para asegurar tus datos. Además, monitoreamos activamente actividades sospechosas.</div>
        </div>
        <div className="question-container">
          <div className="question">¿Qué debo hacer si creo que mi cuenta ha sido comprometida?</div>
          <div className="answer">Si sospechas que tu cuenta está en riesgo, cambia tu contraseña inmediatamente y comunica el problema a nuestro equipo de soporte para tomar medidas adicionales.</div>
        </div>
        <div className="question-container">
          <div className="question">¿Cómo identifico correos electrónicos de phishing relacionados con Beebank?</div>
          <div className="answer">Verifica la dirección de correo del remitente, evita hacer clic en enlaces sospechosos y nunca compartas información confidencial por correo electrónico.</div>
        </div>
        {/* Transacciones  */}
        <h2 className="subtitle">Transacciones:</h2>
        <div className="question-container">
          <div className="question">¿Cuánto tiempo tarda en procesarse una transferencia entre cuentas de Beebank?</div>
          <div className="answer">Las transferencias entre cuentas Beebank son generalmente instantáneas, pero algunos factores pueden afectar el tiempo de procesamiento.</div>
        </div>
        <div className="question-container">
          <div className="question">¿Puedo cancelar una transferencia después de haberla iniciado?</div>
          <div className="answer"> Si la transferencia aún no ha sido procesada, es posible cancelarla a través de la sección de Historial de Transacciones en tu cuenta.</div>
        </div>
        <div className="question-container">
          <div className="question">¿Cómo puedo configurar una transferencia programada para una fecha futura?</div>
          <div className="answer">Durante la creación de una transferencia, selecciona la opción "Programar para más adelante" y elige la fecha deseada para que la transferencia se complete.</div>
        </div>
        <div className="question-container">
          <div className="question">¿Puedo recibir notificaciones por correo electrónico sobre mis transacciones?</div>
          <div className="answer">Sí, puedes habilitar notificaciones por correo electrónico en la sección de Configuración de Notificaciones para estar al tanto de tus transacciones.</div>
        </div>
        {/* Funcionalidades  */}
        <h2 className="subtitle">Funcionalidades:</h2>
        <div className="question-container">
          <div className="question">¿Puedo solicitar un préstamo a través de Beebank?</div>
          <div className="answer">Sí, puedes acceder a la opción de solicitud de préstamo en tu cuenta y seguir las indicaciones para enviar tu solicitud.</div>
        </div>
        <div className="question-container">
          <div className="question">¿Cómo puedo descargar mis estados de cuenta en formato PDF?</div>
          <div className="answer">Ve a la sección de Estados de Cuenta, selecciona el mes deseado y elige la opción "Descargar PDF" para guardar una copia local.</div>
        </div>
        <div className="question-container">
          <div className="question">¿Puedo programar pagos recurrentes de facturas con Beebank?</div>
          <div className="answer">Sí, puedes configurar pagos recurrentes para facturas regulares. Dirígete a la sección de Pagos y sigue las instrucciones para programar pagos automáticos.</div>
        </div>
        <div className="question-container">
          <div className="question">¿Qué debo hacer si tengo problemas técnicos al acceder a Beebank?</div>
          <div className="answer">Si experimentas problemas técnicos, intenta borrar caché y cookies del navegador. Si el problema persiste, comunica el problema a nuestro equipo de soporte para obtener ayuda.</div>
        </div>
        {/* Cuentas y Productos  */}
        <h2 className="subtitle">Cuentas y Productos:</h2>
        <div className="question-container">
          <div className="question">¿Cómo puedo abrir una nueva cuenta en Beebank?</div>
          <div className="answer">Abrir una cuenta es simple. Visita nuestra página de inicio, selecciona "Abrir Cuenta" y sigue las instrucciones para proporcionar los detalles necesarios y completar el proceso.</div>
        </div>
        <div className="question-container">
          <div className="question">¿Cuál es la diferencia entre una cuenta de ahorros y una cuenta corriente?</div>
          <div className="answer">Una cuenta de ahorros es ideal para ahorrar dinero y ganar intereses, mientras que una cuenta corriente es más adecuada para transacciones diarias y pagos. Ambas tienen ventajas únicas.</div>
        </div>
        <div className="question-container">
          <div className="question">¿Cómo puedo solicitar una tarjeta de crédito con Beebank?</div>
          <div className="answer">Puedes solicitar una tarjeta de crédito a través de tu cuenta Beebank. Dirígete a la sección de "Solicitar Tarjeta de Crédito", completa el formulario y espera la revisión de tu solicitud.</div>
        </div>
        <div className="question-container">
          <div className="question">¿Cómo puedo agregar un beneficiario a mi cuenta para realizar transferencias?</div>
          <div className="answer">Inicia sesión en tu cuenta, selecciona la opción "Gestionar Beneficiarios" y sigue las instrucciones para agregar los detalles del beneficiario. Luego, podrás hacer transferencias fácilmente.</div>
        </div>
      </div>
      <center>
        <div className="supportContainer">
          <h4>¿Necesitas hablar con un asesor?</h4>
          <p>Puedes comunicarte con nosotros por cualquiera de los siguientes métodos:</p>
          <p>Llama al: <a className="number-format" href="tel:+541153687996">+54 (11) 5368 7996</a></p>
          <p>Envía un correo a: <a href="mailto:soporte@beebank.com.ar">soporte@beebank.com.ar</a></p>
          <p>o acércate a cualquiera de <a href="#">nuestras sucursales</a></p>
        </div>
      </center>
    </div>

  )
}