'use client';
import {useEffect, useState} from 'react';
import styleTransfers from './transfers.module.css';
import TransferContentLi from './TransferContentLi';

import Cookies from 'js-cookie'
import axios from 'axios'

export async function getData(cId){
	let LiItem = [];
	const responseTransactions = await axios.get(`http://127.0.0.1:8000/cuenta/transferencia/${cId}`,{
		auth:{
			username:'admin',
			password:'admin'
		}
	})
	let transacciones = responseTransactions.data
	if(transacciones.length>0){
		//datos del usuario logueado
		const responseUserData = await axios.get(`http://localhost:8000/cliente/api/users/${cId}`,{
			auth:{
				username:'admin',
				password:'admin'
			}
		})
		//datos de cuenta del usuario logueado
		const responseAccountUserData = await axios.get(`http://localhost:8000/cuenta/data/main/${cId}`,{
			auth:{
				username:'admin',
				password:'admin'
			}
		})
		//datos de cliente de usuario logueado
		const responseClientDataUser = await axios.get(`http://localhost:8000/cliente/api/cliente/${cId}`,{
				auth:{
					username:'admin',
					password:'admin'
				}
			})

		for(const transaccion of transacciones){
			let foreignId
			let IO

			if(transaccion.from_account_id!=cId){
				foreignId = transaccion.from_account_id
				IO="Entrada"
			}
			else{
				foreignId = transaccion.to_account_id
				IO="Salida"
			}
			//datos de usuario extranjero
			const responseDataForeign = await axios.get(`http://localhost:8000/cliente/api/users/${foreignId}`,{
				auth:{
					username:'admin',
					password:'admin'
				}
			})
			//datos de cuenta de usuario extranjero
			const responseAccountDataForeign = await axios.get(`http://localhost:8000/cuenta/data/main/${foreignId}`,{
				auth:{
					username:'admin',
					password:'admin'
				}
			})
			//datos de cliente de usuario extranjero
			const responseClientDataForeign = await axios.get(`http://localhost:8000/cliente/api/cliente/${foreignId}`,{
				auth:{
					username:'admin',
					password:'admin'
				}
			})

			//pasaje de datos a prop
			let LiItemArray = {
				TFstate:transaccion.state,
				TFdescription:transaccion.descripcion,
				TFfecha:transaccion.executed_at,
				TFmonto:transaccion.ammount,
				TFmotivo:transaccion.motivo,
				TFid:transaccion.transfer_id,
				TFio:IO,

				TFDnombre:responseDataForeign.data.first_name,
				TFDapellido:responseDataForeign.data.last_name,
				TFDcbu:responseAccountDataForeign.data.account_cbu,
				TFDalias:responseAccountDataForeign.data.account_alias,
				TFDdni:responseClientDataForeign.data.dni,
				TFDbank:"BeeBank",

				TFOnombre:responseUserData.data.first_name,
				TFOapellido:responseUserData.data.last_name,
				TFOcbu:responseAccountUserData.data.account_cbu,
				TFOalias:responseAccountUserData.data.account_alias,
				TFOdni:responseClientDataUser.data.dni,
				TFObank:"BeeBank"
			}
			LiItem.push(<TransferContentLi key={LiItemArray.TFid} {...LiItemArray}/>)
		}
		return LiItem
	}
}

export default function TransfersContent() {

	const cId = Cookies.get("cId")
	
	const accountDataUrl = `http://localhost:8000/cuenta/data/main/${cId}`;
	const userDataUrl = `http://localhost:8000/cliente/api/users/${cId}`;
	const transfersUrl = `http://localhost:8000/cuenta/transferencia/${cId}`
	
	const [accountType,setAccountType]=useState("")
	const [apiData, setApiData] = useState([]);
	const [accountData, setAccountData] = useState(
		{
		  "customer_id": cId,
		  "balance": "******",
		  "tipo_cuenta": "*****",
		  "account_alias": "****.****.****",
		  "account_cbu": "*********************",
		  "iban": "*******************"
		}
	);

	useEffect(()=>{
		axios.get(accountDataUrl,{
			auth:{
				username:'admin',
				password:'admin'
			}
		}).then((response)=>{
			setAccountData(response.data)
		})
	})

	const [LiItem, setLiItem] = useState([]); // Cambiado para usar useState

	// logica de datos
	useEffect(() => {
		const fetchData = async () => {
		try {
			const liItems = await getData(cId);
			if (liItems.length > 0) {
			liItems.reverse();
			}
			setLiItem(liItems); // Actualiza el estado con los datos obtenidos
		} catch (error) {
			;
		}
		};

		fetchData();
	}, []);

	return (
		<>
			<div className={styleTransfers.transferMainContainer}>
				<div className={styleTransfers.transfersContainer}>
					<section className={styleTransfers.contacts}>
						<div className={styleTransfers.contactos}>
							<div className={styleTransfers.balance}>
								<ul className={styleTransfers.balanceUl}>
									<li className={styleTransfers.balanceText}>Balance:</li>
									<li className={`${styleTransfers.balanceAmount} number_format`}>${accountData.balance}</li>
								</ul>
							</div>
							<ul className={styleTransfers.transferContactSearch}>
								<li><input type='search' name='Busqueda' id='Busqueda' className={styleTransfers.inputBarra} autoComplete='off' placeholder='Buscá el pago o transferencia:'/></li>
							</ul>
						</div>


						<div className={styleTransfers.transferSection}>
							<ul className={styleTransfers.transfersList}>
								{LiItem}
							</ul>
						</div>
					</section>
				</div>
			</div>
		</>
	)
}