'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'

import staffViewStyle from './staffView.module.css'
//componente para staffs
import Cookies from "js-cookie"

export default function StaffView(){

    const cIsStaff = Cookies.get("cIsStaff") == "true"? true: false
    const [view, setView] = useState("MainMenu")
    const [errorText, setErrorText] = useState("")

    const [LiItemsSucursales, setLiItemsSucursales] = useState()
    const [LiItemsPrestamosBranch, setLiItemsPrestamosBranch] = useState()


    function GetPrestamos(){
        let PRInput = document.getElementById("PRInput").value
        let LiItemPrestamoBranch = []
        if(PRInput==""){
            setErrorText("*POR FAVOR RELLENE TODOS LOS CAMPOS")
        }
        else{
            setErrorText("")
            PRInput = Number(PRInput)
            if(PRInput<0 || isNaN(PRInput)){
                setErrorText("*INGRESE UNA ID VALIDA")
            }
            else{
                axios.get(`http://localhost:8000/prestamo/data/${PRInput}`,{
                    auth:{
                        username:'admin',
                        password:'admin'
                    }
                }).then((response)=>{

                    (response.data).forEach((prestamo)=>{
                        LiItemPrestamoBranch.push(
                            <div key={prestamo.loan_id}>
                                <p>Prestamo numero {prestamo.loan_id}</p>
                                <p>Tipo de prestamo: {prestamo.loan_type}</p>
                                <p>Fecha de realizacion: {prestamo.loan_date}</p>
                                <p>ID del cliente: {prestamo.customer_id}</p>
                                <p className={staffViewStyle.SeparationLines}>-------------------------------------------------------------------------------</p>
                            </div>
                        )
                    })
                    setLiItemsPrestamosBranch(LiItemPrestamoBranch)
                })
            }
        }
    }


    function ChangeView(window){
        setView(window)
    }

    useEffect(()=>{
        if(view=="ListadoSucursales"){
            let LiItemSucursales = []
            axios.get("http://localhost:8000/sucursal/show/",{
            auth:{
                username:'admin',
                password:'admin'
            }
            }).then((response)=>{
                response.data.forEach((sucursal)=>{
                    LiItemSucursales.push(
                        <div key={sucursal.branch_number}>
                            <p>Sucursal: {sucursal.branch_name}</p>
                            <p>Direccion: {sucursal.direccion.street} {sucursal.direccion.address_number}</p>
                            <p className={staffViewStyle.SeparationLines}>-------------------------------------------------------------------------------</p>
                        </div>
                    )
                })
            setLiItemsSucursales(LiItemSucursales)
        })
        }
        
        
    },[view])

    if(cIsStaff){
        if(view=="MainMenu"){
            return(
                <div>
                    STAFF MODE
                    <div className={staffViewStyle.Menu}>
                        <button className='button--general' onClick={()=>ChangeView("PrestamosSucursales")}>PRESTAMOS DE SUCURSALES</button>
                        <button className='button--general' onClick={()=>ChangeView("TarjetasAsociadas")}>TARJETAS ASOCIADAS</button>
                        <button className='button--general' onClick={()=>ChangeView("SolicitudPrestamo")}>SOLICITUD PRESTAMO</button>
                        <button className='button--general' onClick={()=>ChangeView("ModificarDireccion")}>MODIFICAR DIRECCION CLIENTE</button>
                        <button className='button--general' onClick={()=>ChangeView("ListadoSucursales")}>LISTADO SUCURSALES</button>
                    </div>
                </div>
            )
        }
        else if(view=="PrestamosSucursales"){
            return(
                <div>
                    <button className={staffViewStyle.BackButton} onClick={()=>ChangeView("MainMenu")}>&lt; VOLVER</button>
                    <section>
                        <p>BUSCAR PRESTAMOS POR ID DE SUCURSAL</p>
                        <input type='text' className={staffViewStyle.FormInput} placeholder='SUCURSAL ID' id='PRInput'></input>
                        <br/>
                        <button className='button--general' onClick={GetPrestamos}>BUSCAR</button>
                        <br/>
                        <p>{errorText}</p>
                        {LiItemsPrestamosBranch}
                    </section>
                </div>
            )
        }
        else if(view=="TarjetasAsociadas"){
            return(
                <div>
                    1
                </div>
            )
        }
        else if(view=="SolicitudPrestamo"){
            return(
                <div>
                    2
                </div>
            )
        }
        else if(view=="ModificarDireccion"){
            return(
                <div>
                    3
                </div>
            )
        }
        else if(view=="ListadoSucursales"){
            return(
                <div>
                    <button className={staffViewStyle.BackButton} onClick={()=>ChangeView("MainMenu")}>&lt; VOLVER</button>
                    {LiItemsSucursales}
                </div>
            )
        }

    }
    else{
        return(<></>)
    }

}