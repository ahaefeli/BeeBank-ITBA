
import Link from "next/link"
import { useRouter } from 'next/navigation';
import { useState } from "react";

import stylesLogin from './login.module.css';
import ErrorPopUp from './errorPopUp'


export async function getData() {
  const res = await fetch('https://raw.githubusercontent.com/ahaefeli/beebank-resources/main/json/auth.json');

  if (!res.ok) {
    throw new Error('Failed to fetch data')

  }
  return res.json()
}




 async function verifyLogin() {

  const usernameInput = document.querySelector('#correo').value;
  const passwordInput = document.querySelector('#password').value;
  const data = await getData();

  const isUserValid = Object.keys(data).some((username) => {
    return username === usernameInput && data[username] === passwordInput;
  });
  return isUserValid
}



export default function LoginContent() {
  const submitButton = document.querySelector('#submit')
  const router = useRouter();
  const [accessDenied, setAccessDenied] = useState(false)


  async function handleButton(event) {
    event.preventDefault();
    const isUserValid = await verifyLogin();

    if (isUserValid) {
      console.log("Logged in");
      router.push('/home');
    } else {
      console.log("Invalid credentials");
      setAccessDenied(true)
      setTimeout(() => {
        setAccessDenied(false);
      }, 3000);
    }
  }
  return (<>
    <ErrorPopUp show={accessDenied}/>
    <div className={stylesLogin.login}>
      <form>
        <div className={stylesLogin.title}>Ingresa a tu cuenta</div>

        <label className={stylesLogin.loginText}>Usuario:</label>
        <input type="text" className={stylesLogin.mail} id="correo" placeholder="correo electrónico" required />

        <label className={stylesLogin.loginText}>Contraseña:</label>
        <input type="password" className={stylesLogin.password} id="password" placeholder="contraseña" required />
        <button onClick={handleButton} href='/home' className={`button--general ${stylesLogin.login_btn}`} id='submit'>Ingresar</button>

        <Link href="/registro">Crear una cuenta</Link>
      </form>

    </div>
    </>
  )
}