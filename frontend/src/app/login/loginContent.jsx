import { useMyContext } from "../AppContext";

import Link from "next/link"
import { useRouter } from 'next/navigation';
import { useState , useEffect} from "react";

import stylesLogin from './login.module.css';
import ErrorPopUp from './errorPopUp'
import axios from "axios";


export async function getData(usernameInput, passwordInput) {
  const PageLimit = 50
  let PageOffset = 0

  while (true){
    let dataUrl = `http://localhost:8000/cliente/api/users/?limit=${PageLimit}&offset=${PageOffset}`
    let response = await axios.get(dataUrl,{
      auth:{
        username:'admin',
        password:'admin'
      }
    })

    if((response.data).length<=0){
      return [false,-1]
    }

    for (const cliente of response.data) {
      if (cliente.username === usernameInput && cliente.password === passwordInput) {
        return [true, cliente.id];
      }
    }

    PageOffset += PageLimit
  }
}




async function verifyLogin() {

  const usernameInput = document.querySelector('#correo').value;
  const passwordInput = document.querySelector('#password').value;
  const data = await getData(usernameInput, passwordInput);

  return data
}



export default function LoginContent() {
  let {cId, setCId} = useMyContext()

  const submitButton = document.querySelector('#submit')
  const router = useRouter();
  const [accessDenied, setAccessDenied] = useState(false)

  async function handleButton(event) {

    event.preventDefault();
    const isUserValid = await verifyLogin();

    if (isUserValid[0]) {
      setCId(isUserValid[1])
      //router.push('/home');
    } 
    else {
      setCId(-1)
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