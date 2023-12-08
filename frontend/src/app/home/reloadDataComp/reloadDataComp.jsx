import Cookies from 'js-cookie'
import { useEffect , useState} from 'react'
import axios from 'axios'

export default function ReloadDataComp(){
    const cId = Cookies.get("cId")

    useEffect(()=>{
        async function chargeData(){
            const mainAccountData = (await axios.get(`http://localhost:8000/cuenta/data/main/${cId}`,{
                auth:{
                    username:'admin',
                    password:'admin'
                }
            })).data

            if(mainAccountData.customer_id==cId){
                let transfersData = (await axios.get(`http://localhost:8000/cuenta/transferencia/${cId}`,{
                    auth:{
                        username:'admin',
                        password:'admin'
                    }
                })).data

                let loanData = (await axios.get(`http://localhost:8000/prestamo/cliente/prestamos/${cId}`,{
                    auth:{
                        username:'admin',
                        password:'admin'
                    }
                })).data

                let AB = 0

                //calculo de el balance de la cuenta a partir de las transferencias
                transfersData.forEach((transfer)=>{
                    //si la transferencia fue aceptada
                    if(transfer.state=="aceptado"){
                        if(transfer.from_account_id==cId){
                            //si la transferencia es de salida
                            AB -= transfer.ammount
                        }
                        else{
                            //si la transferencia es de entrada
                            AB += transfer.ammount
                        }
                    }
                })

                loanData.forEach((loan)=>{
                    AB += loan.loan_total 
                })

                //actualizamos el balance de la cuenta
                let newUserData = {
                    "customer_id":parseInt(cId),
                    "balance": AB,
                    "tipo_cuenta": String(mainAccountData.tipo_cuenta),
                    "account_alias": String(mainAccountData.account_alias),
                    "account_cbu": String(mainAccountData.account_cbu),
                    "iban": String(mainAccountData.iban)
                }
                
                axios.put(`http://localhost:8000/cuenta/data/${cId}/${mainAccountData.account_id}`,newUserData,{
                    auth:{
                        username:'admin',
                        password:'admin'
                    }
                })
            }
        }
        chargeData()
    },[])

    return(<></>)
}