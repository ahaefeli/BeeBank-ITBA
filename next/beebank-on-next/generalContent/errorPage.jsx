import Link from 'next/link'
import style from //ruta



import '../css/dedicated/errorPage.css'
export default function ErrorPage() {
  return (
    <div className="errorMessage">
      <center>
        <h4>¡Lo sentimos! Ha habido un error.</h4>
        <h6>Puede continuar usando la página con normalidad</h6>
        <Link to='/'>Regresa al inicio</Link>
      </center>
    </div>
  )
}