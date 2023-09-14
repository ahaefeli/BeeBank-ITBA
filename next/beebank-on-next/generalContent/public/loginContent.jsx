import  Link  from 'next/link'
import { useEffect, useState, useNavigate } from 'react';
import style from '' //RUTA
import PasswordErrorPopUp from './passwordErrorMessage';

export default function LoginContent() {

  const [newPassword, setNewPassword] = useState('')
  const [showError, setShowError] = useState(false);

  const passwordInput = document.querySelector('#password');
  const navigate = useNavigate();

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
    setNewPassword(passwordInput.value);
  };

  function verifyLogin(pass) {
    if (pass.length < 8) {
      clearErrorWithTimeout()
    } else if (!/[A-Z]/.test(pass) || !/[0-9]/.test(pass) || !/[!@#$%^&*]/.test(pass)) {
      clearErrorWithTimeout()

    } else {
      navigate("/home");
    }
  };


  return (
    <div className="login">
      <form>
        <h4>Ingresa a tu cuenta</h4>
        <label>Correo electrónico:</label>
        <input type="text" className="mail" id="correo" placeholder="correo electrónico" required />
        <label>Contraseña:</label>
        <input type="password" className="password" id="password" placeholder="contraseña" required />
        <Link onClick={updatePassword} className='button--general login-btn'>Ingresar</Link>  // CAMBIAR RUTA Y CSS
        <Link to="/registro">Crear una cuenta</Link>  // CAMBIAR RUTA Y CSS
      </form>
      <PasswordErrorPopUp show={showError} />
    </div>
  )
}