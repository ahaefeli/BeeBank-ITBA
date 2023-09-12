import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../css/dedicated/login-content.css';
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
        <Link onClick={updatePassword} className='button--general login-btn'>Ingresar</Link>
        <Link to="/registro">Crear una cuenta</Link>
      </form>
      <PasswordErrorPopUp show={showError} />
    </div>
  )
}