import styleError from './error.module.css'

export default function ErrorPopUp(props) {
  return (<>

    <div className={`${styleError.errorPopUp} ${props.show?styleError.show:styleError.hide}`}>
      <label>Contraseña incorrecta</label>
    </div>

  </>)
}