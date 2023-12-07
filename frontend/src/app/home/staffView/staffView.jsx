'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'

import staffViewStyle from './staffView.module.css'
//componente para staffs
import Cookies from "js-cookie"

export default function StaffView(){

    const cId = Cookies.get("cId")
    const cIsStaff = Cookies.get("cIsStaff") == "true"? true: false
    const [view, setView] = useState("MainMenu")
    const [errorText, setErrorText] = useState("")

    const [LiItemsSucursales, setLiItemsSucursales] = useState()
    const [LiItemsPrestamosBranch, setLiItemsPrestamosBranch] = useState()
    const [isCredit, setIsCredit] = useState(false)
    const [LiItemsTarjetasBranch, setLiItemsTarjetasBranch] = useState([])
    const [loanIdInput, setLoanIdInput] = useState("")

    function handleSetIsCredit(){
        setIsCredit(!isCredit)
    }

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
                    if (response.data[0]){
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
                } else{
                    LiItemPrestamoBranch.push(
                        <div>
                            <p>El ID ingresado no está asociado a ninguna sucursal</p>
                        </div>
                    )
                }
                    setLiItemsPrestamosBranch(LiItemPrestamoBranch)
                })
            }
        }
    }

    function getTarjetas() {
        let tarjetaIdInput = document.getElementById("tarjetaIdInput").value;
        let LiItemTarjetaBranch = [];
      
        if (tarjetaIdInput === "") {
          setErrorText("*POR FAVOR RELLENE TODOS LOS CAMPOS");
        } else {
          setErrorText("");
          tarjetaIdInput = Number(tarjetaIdInput);
      
          if (tarjetaIdInput < 0 || isNaN(tarjetaIdInput)) {
            setErrorText("*INGRESE UNA ID VALIDA");
          } else {
            const urlTarjeta = isCredit
              ? `http://localhost:8000/cuenta/tarjeta/credito/${tarjetaIdInput}`
              : `http://localhost:8000/cuenta/tarjeta/debito/${tarjetaIdInput}`;
      
            axios.get(urlTarjeta, {
                auth: {
                  username: 'admin',
                  password: 'admin',
                }
              }).then((response) => {
                    if (response.data) {

                        LiItemTarjetaBranch.push(
                        <div key={response.data.card_id}>
                            <p>Tarjeta numero {response.data.card_id}</p>
                            <p>Tipo de tarjeta: {response.data.card_type}</p>
                            <p>Fecha de expiración: {response.data.card_create_expdate}</p>
                            <p>ID del cliente: {response.data.customer_id}</p>
                        </div>
                        )

                    }  
                    setLiItemsTarjetasBranch(LiItemTarjetaBranch)
                }).catch((error)=>{
                    LiItemTarjetaBranch.push(
                        <div>
                            <p>Tarjeta no encontrada</p>
                        </div>
                        )
                    setLiItemsTarjetasBranch(LiItemTarjetaBranch)
                })
            }
        }
    }


      function modifyDireccionCliente() {
        let clienteId = document.getElementById("clienteIdInput").value;
        let streetInput = document.getElementById("streetInput").value;
        let numberInput = document.getElementById("numberInput").value;
    
        const urlDireccion = `http://localhost:8000/cliente/direccion/${cIsStaff?clienteId:cId}`
        
        axios.put(urlDireccion, {
            street: streetInput,
            address_number: numberInput,
          }, {
            auth: {
              username: 'admin',
              password: 'admin'
            }
          })
          .then((response) => {
            const nombreCliente = response.data.nombre
            const nuevaDireccionCliente = response.data.nuevaDireccion
          })
          .catch((error) => {
            console.error("Error en la solicitud:", error)
            setErrorText("*Error al modificar la dirección del cliente")
          });
      }


    function ChangeView(window){
        setView(window)
    }


    function solicitarPrestamo() {
        let loanTypeInput = document.getElementById("loanTypeInput").value.toUpperCase()
        let loanAmmountInput = Number(document.getElementById("loanAmmountInput").value)
        let loanIdClient = Number(document.getElementById("loanIdClient").value)
        let loanBranchInput = Number(document.getElementById("loanBranchInput").value)

        if (loanTypeInput.length<=0 || loanAmmountInput.length<=0 || loanIdClient.length<=0 || loanBranchInput.length<=0) {
          setErrorText("*Por favor, complete todos los campos");
          return;
        }
        else if(isNaN(loanIdClient) || loanIdClient<=0){
            setErrorText("*Por favor, coloque un ID válido");
            return;
        }
        else if(loanTypeInput!="HIPOTECARIO" && loanTypeInput!="PERSONAL" && loanTypeInput!="PRENDARIO"){
            setErrorText("*Por favor, coloque un tipo de prestamo válido");
            return;
        }
        else if(isNaN(loanAmmountInput) || loanAmmountInput<=0){
            setErrorText("*Por favor, coloque un monto válido");
            return;
        }
        else if(isNaN(loanBranchInput) || loanBranchInput<=0){
            setErrorText("*Por favor, coloque una rama válida");
            return;
        }
        // Poner el customer_id al final de la url

        const fechaActual = new Date();

        //toma de fecha
        const year = fechaActual.getFullYear();
        const month = (fechaActual.getMonth() + 1).toString().padStart(2, '0');  // Se agrega 1 ya que los meses son indexados desde 0
        const day = fechaActual.getDate().toString().padStart(2, '0');

        const fechaFormateada = `${year}:${month}:${day}`;

        //put de los datos
        const urlPrestamo = `http://localhost:8000/prestamo/cliente/${loanIdClient}`
        axios.post(urlPrestamo,
          {
            loan_type: loanTypeInput,
            loan_date: fechaFormateada,
            loan_total: loanAmmountInput,
            customer_id: loanIdClient,
            branch_id: loanBranchInput
          },
          {
            auth: {
              username: "admin",
              password: "admin",
            },
          }
        )
        .then((response) => {
          console.log("Préstamo creado con éxito");
          setErrorText("Préstamo creado con éxito");
        })
        .catch((error) => {
          console.error("Error en la solicitud:", error);
          setErrorText("*Error al crear el préstamo");
        });
      }
    

      function anularPrestamo() {
        if (!loanIdInput) {
          setErrorText("*Por favor, complete todos los campos");
          return;
        }
        axios.delete(`http://localhost:8000/prestamo/anular/${loanIdInput}`, {
            auth: {
              username: "admin",
              password: "admin",
            },
          })
          .then((response) => {
            console.log("Préstamo anulado con éxito");
            setErrorText("Préstamo anulado con éxito");
          })
          .catch((error) => {
            console.error("Error en la solicitud:", error);
            setErrorText("*Error al anular el préstamo");
          });
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
    
    useEffect(() => {
        if (view === 'TarjetasAsociadas') {
          let LiItemTarjetasBranch = [];
          axios.get('http://localhost:8000/tarjeta/show/', {
            auth: {
              username: 'admin',
              password: 'admin',
            },
          })
          .then((response) => {
            response.data.forEach((tarjeta) => {
              LiItemTarjetasBranch.push(
                <div key={tarjeta.card_id}>
                  <p>Customer ID: {tarjeta.customer_id}</p>
                  <p>Tarjeta ID: {tarjeta.card_id}</p>
                  <p>Tipo de tarjeta: {tarjeta.card_type}</p>
                  <p>Fecha de expiración: {tarjeta.card_create_expdate}</p>
                  <p className={staffViewStyle.SeparationLines}>-------------------------------------------------------------------------------</p>
                </div>
              );
            });
            setLiItemsTarjetasBranch(LiItemTarjetasBranch);
          })
          .catch((error) => {
            setErrorText("*Error al obtener datos de tarjetas");
          });
        }
      }, [view]);


      
    if(cIsStaff){
        if(view=="MainMenu"){
            return(
                <div>
                    STAFF MODE
                    <div className={staffViewStyle.Menu}>
                        <button className='button--general' onClick={()=>ChangeView("PrestamosSucursales")}>PRESTAMOS DE SUCURSALES</button>
                        <button className='button--general' onClick={()=>ChangeView("TarjetasAsociadas")}>TARJETAS ASOCIADAS</button>
                        <button className='button--general' onClick={()=>ChangeView("SolicitudPrestamo")}>SOLICITUD PRESTAMO</button>
                        <button className='button--general' onClick={()=>ChangeView("AnulacionPrestamo")}>ANULACION PRESTAMO</button>
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
                    <button className={staffViewStyle.BackButton} onClick={()=>ChangeView("MainMenu")}>&lt; VOLVER</button>
                    <section>
                        <p>Tarjetas Asociadas</p>
                        <label><input type="checkbox" checked={isCredit} onChange={handleSetIsCredit}/>Es tarjeta de crédito</label>
                        <input type='text' className={staffViewStyle.FormInput} placeholder='Tarjeta ID' id='tarjetaIdInput'></input>
                        <br/>
                        <button className='button--general' onClick={getTarjetas}>BUSCAR</button>
                        <br/>
                        <p>{errorText}</p>
                        {LiItemsTarjetasBranch}
                    </section>
                </div>
            )
        }
        else if(view=="SolicitudPrestamo"){ //Un empleado autenticado puede solicitar un préstamo para un cliente, registrado
            //el mismo y acreditando el saldo en su cuenta.
            return(
                <div>
                <button className={staffViewStyle.BackButton} onClick={() => ChangeView("MainMenu")}>&lt; VOLVER</button>
                <section>
                    <p>SOLICITAR PRÉSTAMO</p>
                    <label>Id Cliente: </label>
                    <input type="text" className={staffViewStyle.FormInput} placeholder='ID cliente destino' id="loanIdClient"/>
                    <br />
                    <label>Tipo de préstamo: HIPOTECARIO/PERSONAL/PRENDARIO </label>
                    <input type="text" className={staffViewStyle.FormInput} placeholder='Tipo prestamo' id="loanTypeInput"/>
                    <br />
                    <label>Monto total: </label>
                    <input type="text" className={staffViewStyle.FormInput} placeholder='Monto prestamo' id="loanAmmountInput"/>
                    <br />
                    <label>ID BRANCH: </label>
                    <input type="text" className={staffViewStyle.FormInput} placeholder='ID de la rama' id="loanBranchInput"/>
                    <br />
                    <button className="button--general" onClick={solicitarPrestamo}>ENVIAR SOLICITUD</button>
                    <br />
                    <p>{errorText}</p>
                </section>
                </div>
                 );
            
        }
        //'loan_id', 'loan_type', 'loan_date', 'loan_total', 'customer_id', 'branch_id'
        else if(view=="AnulacionPrestamo"){ //Un empleado autenticado puede eliminar un préstamo para un cliente, registrado
            //el mismo y acreditando el saldo en su cuenta.
            return (
                <div>
                  <button className={staffViewStyle.BackButton} onClick={() => ChangeView("MainMenu")}>&lt; VOLVER</button>
                  <section>
                    <p>ANULAR PRÉSTAMO</p>
                    <label>ID del préstamo: </label>
                    <input
                      type="text"
                      className={staffViewStyle.FormInput}
                      value={loanIdInput}
                      onChange={(e) => setLoanIdInput(e.target.value)}
                    />
                    <br />
                    <button className="button--general" onClick={anularPrestamo}>ANULAR PRÉSTAMO</button>
                    <br />
                    <p>{errorText}</p>
                  </section>
                </div>
            );  
        }
        else if(view=="ModificarDireccion"){
            return(
                    <div>
                      <button className={staffViewStyle.BackButton} onClick={() => ChangeView("MainMenu")}>&lt; VOLVER</button>
                      <section>
                        <p>MODIFICAR DIRECCION DE UN CLIENTE</p>
                        <label>ID del Cliente: </label>
                        <input type='text' className={staffViewStyle.FormInput} placeholder='Cliente ID' id='clienteIdInput'></input>
                        <br />
                        <label>Nueva calle: </label>
                        <input type='text' className={staffViewStyle.FormInput} placeholder='Ej: Calle Falsa' id='streetInput'></input>
                        <br />
                        <label>Nueva altura: </label>
                        <input type='text' className={staffViewStyle.FormInput} placeholder='Ej: 123' id='numberInput'></input>
                        <br />
                        <button className='button--general' onClick={modifyDireccionCliente}>MODIFICAR DIRECCIÓN</button>
                        <br />
                        <p>{errorText}</p>
                      </section>
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