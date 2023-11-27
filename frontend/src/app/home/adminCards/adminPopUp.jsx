import styleAdmin from './admin.module.css'

export default function AdminPopUp(props) {

  return (
    <div className={props.show ? "popUp" : "popUp-hide"}>
      
      <section className={styleAdmin.mainSection}>
      
         <label>
          <input type="checkbox" className={styleAdmin.checkbox} />
          <span className={styleAdmin.textUp}>Pausar tu tarjeta virtual</span>
        </label>

        <label>
          <input type="checkbox" className={styleAdmin.checkbox} />
          <span className={styleAdmin.textBottom}>Pausar tu tarjeta física</span>
        </label>

      </section>

    </div>

  )
}