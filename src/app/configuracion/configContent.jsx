import styleConfig from './config.module.css'

export default function ConfigContent() {
  return (
    <main>
      <div className={styleConfig.container}>
        <h3>Configuración</h3>
        <div className={styleConfig.accordion}>
          <label className={styleConfig.accordionTitle} htmlFor="accordion1-button-personal-info">Información personal<i className="bi bi-chevron-down" draggable="false" /></label>
          <div className={styleConfig.accordionContent}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aliquam dolorem ut assumenda cum
              adipisci veniam ratione fugit, aspernatur vero, illo labore voluptas similique ipsum suscipit quas
              laborum nobis officiis.</p>
          </div>
        </div>
        <div className={styleConfig.accordion}>
          <label className={styleConfig.accordionTitle} htmlFor="accordion1-button-account">Datos de tu cuenta<i className="bi bi-chevron-down" draggable="false" /></label>
          <div className={styleConfig.accordionContent}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aliquam dolorem ut assumenda
              cum adipisci veniam ratione fugit, aspernatur vero, illo labore voluptas similique ipsum suscipit
              quas laborum nobis officiis.</p>
          </div>
        </div>
        <div className={styleConfig.accordion}>
          <label className={styleConfig.accordionTitle} htmlFor="accordion1-button-security">Seguridad<i className="bi bi-chevron-down" draggable="false" /></label>
          <div className={styleConfig.accordionContent}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aliquam dolorem ut assumenda
              cum adipisci veniam ratione fugit, aspernatur vero, illo labore voluptas similique ipsum suscipit
              quas laborum nobis officiis.</p>
          </div>
        </div>
        <div className={styleConfig.accordion}>
          <label className={styleConfig.accordionTitle} htmlFor="accordion1-button-cards">Tarjetas<i className="bi bi-chevron-down" draggable="false" /></label>
          <div className={styleConfig.accordionContent}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aliquam dolorem ut
              assumenda cum adipisci veniam ratione fugit, aspernatur vero, illo labore voluptas similique
              ipsum suscipit quas laborum nobis officiis.</p>
          </div>
        </div>
      </div>
    </main>

  )
}