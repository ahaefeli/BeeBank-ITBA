'use client'

import axios from 'axios';
import styleRegister from '../login/login.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterContent() {
  const router = useRouter();

  const handleRegistro = async (event) => {
    event.preventDefault();
  
    let inpt_dni = parseInt(document.getElementById("inpt_dni").value)
    let inpt_mail = document.getElementById("inpt_mail").value
    let inpt_mail2 = document.getElementById("inpt_mail2").value
    let inpt_password = document.getElementById("inpt_password").value
    let inpt_password2 = document.getElementById("inpt_password2").value
    let inpt_first_name = document.getElementById("inpt_first_name").value
    let inpt_last_name = document.getElementById("inpt_last_name").value
    let inpt_username = document.getElementById("inpt_username").value

    if (inpt_dni.length<=0 || inpt_mail.length<=0 || inpt_mail2.length<=0 || inpt_password.length<=0 || inpt_password2.length<=0 || inpt_first_name.length<=0 || inpt_last_name.length<=0 || inpt_mail != inpt_mail2 || inpt_password != inpt_password2) {
      alert('Por favor, complete todos los campos correctamente.');
      return;
    }
  
    // API
    try {
      const response = await axios.post('http://localhost:8000/api/cliente/registro', {
        "username": inpt_username,
        "password": inpt_password,
        "email": inpt_mail,
        "first_name": inpt_first_name,
        "last_name": inpt_last_name,
        "dni": inpt_dni,
      }, {
        auth: {
          username: 'admin',
          password: 'admin',
        },
      });
  
    } catch (error) {
      console.error('Error al registrar:', error);
      alert('Error al registrar. Por favor, inténtelo de nuevo.');
    }
  }
  

  return (
    <div className={styleRegister.login}>
      <form onSubmit={handleRegistro}>
        <div className={styleRegister.title}>Registrarse</div>
        <label className={styleRegister.loginText}>Documento:</label>
        <input type="text" className={styleRegister.mail} placeholder="Documento" required id="inpt_dni"/>
        <label className={styleRegister.loginText}>Nombre de usuario:</label>
        <input type="text" className={styleRegister.mail} placeholder="Username" required id="inpt_username"/>
        <label className={styleRegister.loginText}>Correo electrónico:</label>
        <input type="text" className={styleRegister.mail} placeholder="Correo electrónico" required id="inpt_mail"/>
        <label className={styleRegister.loginText}>Confirmar correo electrónico:</label>
        <input type="text" className={styleRegister.mail} placeholder="Confirmar correo electrónico" required id="inpt_mail2"/>
        <label className={styleRegister.loginText}>Contraseña:</label>
        <input type="password" className={styleRegister.password} placeholder="Contraseña" required id="inpt_password"/>
        <label className={styleRegister.loginText}>Repita la contraseña:</label>
        <input type="password" className={styleRegister.password} placeholder="Contraseña" required id="inpt_password2"/>

        <label className={styleRegister.loginText}>Nombre:</label>
        <input type="text" className={styleRegister.mail} placeholder="Nombre" required id="inpt_first_name"/>

        <label className={styleRegister.loginText}>Apellido:</label>
        <input type="text" className={styleRegister.mail} placeholder="Apellido" required id="inpt_last_name"/>
      
        <button type="submit" className={`button--general ${styleRegister.login_btn}`}>Registrarse</button>
        <Link href="/login">Inicia sesión</Link>
      </form>
    </div>
  );
}
