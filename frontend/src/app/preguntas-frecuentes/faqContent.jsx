export async function getData() {
  const res = await fetch('https://drive.google.com/uc?id=1af0YMUeTs4-gG26FNLL1l_UWchGc426-')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function FaqContent() {

  const data = await getData()
  return (
    <div>

      <center>
          <div className='support_faq_Welcome'>
            <h1>Preguntas Frecuentes</h1>
            <p>Aquí encontrarás respuestas rápidas a las consultas más comunes sobre nuestro servicio de home banking. Antes
            de contactarnos, explora estas respuestas para una solución instantánea. Estamos aquí para hacer que tu
            experiencia bancaria sea más sencilla y satisfactoria.</p>
          </div>
        </center>

      {Object.keys(data).map((themeKey) => (
        <div key={themeKey}>
          <h4 className='support_faq_subtitle'>{themeKey}</h4>
          <div className='support_faq'>
            {data[themeKey].map((theme) => (
              <div className='support_faq_questionContainer' key={theme.question}>
                <div className='support_faq_question'>{theme.question}</div>
                <div className='support_faq_answer'>{theme.answer}</div>
              </div>
            ))}
          </div>
        </div>
      ))}



      <center>
        <div className='support_faq_Container'>
          <h4>¿Necesitas hablar con un asesor?</h4>
          <p>Puedes comunicarte con nosotros por cualquiera de los siguientes métodos:</p>
          <p>Llama al: <a className="number_format" href="tel:+541153687996">+54 (11) 5368 7996</a></p>
          <p>Envía un correo a: <a href="mailto:soporte@beebank.com.ar">soporte@beebank.com.ar</a></p>
          <p>o acércate a cualquiera de <a href="#">nuestras sucursales</a></p>
        </div>
      </center>
    </div>
  )
}