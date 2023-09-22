'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PasswordErrorPopUp from './passwordErrorMessage';

import PublicNavBar from '../../../generalContent/public/publicNavBar';
import Footer from '../../../generalContent/public/footer';

import styles from '../css/dedicated/login-content.module.css';

export default function LoginPage() {
  const [newPassword, setNewPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    verifyLogin(newPassword);
  }, [newPassword]);

  function clearErrorWithTimeout() {
    setShowError(true);

    setTimeout(() => {
      setShowError(false);
    }, 2000);
  }

  function updatePassword() {
    const passwordInput = document.querySelector('#password');
    setNewPassword(passwordInput.value);
  }

  function verifyLogin(pass) {
    if (pass.length < 8) {
      clearErrorWithTimeout();
    } else if (!/[A-Z]/.test(pass) || !/[0-9]/.test(pass) || !/[!@#$%^&*]/.test(pass)) {
      clearErrorWithTimeout();
    } else {
      router.push('/home');
    }
  }

  return (
    <div>
      <PublicNavBar />
      <div className={styles.login}>
        <form>
          <h4>Ingresa a tu cuenta</h4>
          <label>Correo electrónico:</label>
          <input type="text" className={styles.mail} id="correo" placeholder="correo electrónico" required />
          <label>Contraseña:</label>
          <input type="password" className={styles.password} id="password" placeholder="contraseña" required />
          <button onClick={updatePassword} className={`${styles['button--general']} ${styles['login-btn']}`}>Ingresar</button>
          <Link href="/registro">Crear una cuenta</Link>
        </form>
        <PasswordErrorPopUp show={showError} />
      </div>
      <Footer />
    </div>
  );
}
