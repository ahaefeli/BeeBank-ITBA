import Link from 'next/link';
import styles from '../main-css/globals.css';

export default function ErrorPage() {
  return (
    <div className={styles.errorMessage}>
      <center>
        <h4>¡Lo sentimos! Ha habido un error.</h4>
        <h6>Puede continuar usando la página con normalidad.</h6>
        <Link href='/'>Regresa al inicio</Link>
      </center>
    </div>
  );
}
