'use client'

import staffViewStyle from './staffView.module.css'
//componente para staffs
import Cookies from "js-cookie"

export default function StaffView(){
    const cIsStaff = Cookies.get("cIsStaff") == "true"? true: false

    if(cIsStaff){
        return(
            <div>
                STAFF MODE
                <div className={staffViewStyle.Menu}>
                    <button className='button--general'>PRESTAMOS DE SUCURSALES</button>
                    <button className='button--general'>TARJETAS ASOCIADAS</button>
                    <button className='button--general'>SOLICITUD PRESTAMO</button>
                    <button className='button--general'>MODIFICAR DIRECCION CLIENTE</button>
                    <button className='button--general'>LISTADO SUCURSALES</button>
                </div>
            </div>
        )
    }
    else{
        return(<></>)
    }

}