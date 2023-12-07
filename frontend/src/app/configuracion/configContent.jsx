'use client'
import { useEffect, useState } from 'react';
import styleConfig from './config.module.css';
import Cookies from 'js-cookie'
import axios from 'axios'

export default function ConfigContent() {
  const cId = Cookies.get("cId")

  const [userData, setUserData] = useState(
    {
      "id": cId,
      "password": "----",
      "last_login": "----",
      "username": "----",
      "last_name": "----",
      "email": "----",
      "first_name": "----"
    }
  )

  const [userClientData, setUserClientData] = useState(
    {
      "customer_id": cId,
      "branch_id": "----",
      "address_id": "----",
      "dni": "----"
    }
  )

  const [userDirectionData,setUserDirectionData] = useState(
    {
      "street": "----",
      "address_number": "----"
    }
  )

  const [userAccountData,setUserAccountData] = useState(
    {
      "customer_id": cId,
      "balance": "----",
      "tipo_cuenta": "----",
      "account_alias": "----",
      "account_cbu": "----",
      "iban": "----"
    }
  )

  useEffect(()=>{
    //toma de datos del usuario
    axios.get(`http://localhost:8000/cliente/api/users/${cId}`,{
      auth:{
        username:'admin',
        password:'admin'
      }
    }).then((response)=>{
      setUserData(response.data)
    })

    //toma de datos de los datos del cliente
    axios.get(`http://localhost:8000/cliente/api/cliente/${cId}`,{
      auth:{
        username:'admin',
        password:'admin'
      }
    }).then((response)=>{
      setUserClientData((response.data)[0])
    })

    //toma de datos de la direccion del usuario
    axios.get(`http://localhost:8000/cliente/direccion/${cId}`,{
      auth:{
        username:'admin',
        password:'admin'
      }
    }).then((response)=>{
      setUserDirectionData(response.data)
    })

    //toma de datos de la cuenta
    axios.get(`http://localhost:8000/cuenta/data/main/${cId}`,{
      auth:{
        username:'admin',
        password:'admin'
      }
    }).then((response)=>{
      setUserAccountData(response.data)
    })

  },[])

  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenAccordion(index === openAccordion ? null : index);
  };

  const personalInfoData = <div><br></br>Nombre: {userData.first_name} <br></br>Apellido: {userData.last_name} <br></br>DNI: {userClientData.dni} <br></br>Direccion: {userDirectionData.street} {userDirectionData.address_number} <br></br>Mail: {userData.email}</div>;
  const accountData = <div><br></br>Usuario: {userData.username} <br></br>Contraseña: {userData.password} <br></br>Alias: {userAccountData.account_alias} <br></br>CBU: {userAccountData.account_cbu}</div>;
  const securityData = <div><br></br>#2FA <br></br>#Historial de inicio de sesion <br></br>#Limites de transaccion</div>;
  const cardsData = <div><br></br>#Agregar o sacar tarjetas <br></br>#Bloqueo y desbloqueo de tarjetas <br></br>#Solicitar nueva tarjeta <br></br>#Asignas límite de uso</div>;
  
  const data = [
    { id: 'personal-info', title: 'Información personal', content:personalInfoData },
    { id: 'account', title: 'Datos de tu cuenta', content: accountData },
    { id: 'security', title: 'Seguridad', content: securityData },
    { id: 'cards', title: 'Tarjetas', content: cardsData },
  ];


  return (
    <main className={styleConfig.pageContent}>
      <div className={styleConfig.container}>
        <h3>Configuración</h3>
        {data.map((item, index) => (
          <div className={`${styleConfig.accordion} ${openAccordion === index ? styleConfig.showContent : ''}`} key={index}>
            <label
              className={styleConfig.accordionTitle}
              htmlFor={`accordion1-button-${item.id}`}
              onClick={() => handleAccordionClick(index)}
            >
              {item.title}
              <i className={`bi bi-chevron-${openAccordion === index ? 'up' : 'down'}`} draggable="false" />
            </label>
            <div className={`${styleConfig.accordionContent}`}>
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
