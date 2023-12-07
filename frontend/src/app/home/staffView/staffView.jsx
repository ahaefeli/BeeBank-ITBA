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
                <div className='Menu'>
                    <button>PRESTAMOS DE SUCURSALES</button>
                    <button>TARJETAS ASOCIADAS</button>
                    <button>SOLICITUD PRESTAMO</button>
                    <button>MODIFICAR DIRECCION CLIENTE</button>
                    <button>LISTADO SUCURSALES</button>
                </div>
            </div>
        )
    }
    else{
        return(<></>)
    }

}