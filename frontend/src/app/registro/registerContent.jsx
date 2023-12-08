'use client'

import axios from 'axios';
import styleRegister from '../login/login.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterContent() {
  const router = useRouter();

  const [documento, setDocumento] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [confirmarCorreo, setConfirmarCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [Nombre, setNombre] = useState('');
  const [Apellido, setApellido] = useState('');
  

  const handleRegistro = async (event) => {
    event.preventDefault();
  
    if (!documento || !correoElectronico || !confirmarCorreo || !contrasena || correoElectronico !== confirmarCorreo) {
      alert('Por favor, complete todos los campos correctamente.');
      return;
    }
  
    // API
    try {
      const response = await axios.post('http://localhost:8000/api/cliente/registro', {
        dni: documento,
        email: correoElectronico,
        password: contrasena,
        first_name: Nombre,
        last_name: Apellido,
      }, {
        auth: {
          username: 'admin',
          password: 'admin',
        },
      });
  
      router.push('/home');
    } catch (error) {
      console.error('Error al registrar:', error);
      alert('Error al registrar. Por favor, inténtelo de nuevo.');
    }
  };
  

  return (
    <div className={styleRegister.login}>
      <form onSubmit={handleRegistro}>
        <div className={styleRegister.title}>Registrarse</div>
        <label className={styleRegister.loginText}>Documento:</label>
        <input type="text" className={styleRegister.mail} value={documento} onChange={(e) => setDocumento(e.target.value)} placeholder="Documento" required />
        <label className={styleRegister.loginText}>Correo electrónico:</label>
        <input type="text" className={styleRegister.mail} value={correoElectronico} onChange={(e) => setCorreoElectronico(e.target.value)} placeholder="Correo electrónico" required />
        <label className={styleRegister.loginText}>Confirmar correo electrónico:</label>
        <input type="text" className={styleRegister.mail} value={confirmarCorreo} onChange={(e) => setConfirmarCorreo(e.target.value)} placeholder="Confirmar correo electrónico" required />
        <label className={styleRegister.loginText}>Contraseña:</label>
        <input type="password" className={styleRegister.password} value={contrasena} onChange={(e) => setContrasena(e.target.value)} placeholder="Contraseña" required />

        <label className={styleRegister.loginText}>Nombre:</label>
        <input type="text" className={styleRegister.mail} value={Nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" required />

        <label className={styleRegister.loginText}>Apellido:</label>
        <input type="text" className={styleRegister.mail} value={Apellido} onChange={(e) => setApellido(e.target.value)} placeholder="Apellido" required />
      
        <button type="submit" className={`button--general ${styleRegister.login_btn}`}>Registrarse</button>
        <Link href="/login">Inicia sesión</Link>
      </form>
    </div>
  );
}
