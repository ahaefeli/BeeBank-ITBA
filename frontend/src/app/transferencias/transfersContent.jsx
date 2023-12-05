'use client';
import {useEffect, useState} from 'react';
import styleTransfers from './transfers.module.css';
import TransferContentLi from './TransferContentLi';
import { AuthChecker } from '../authPage';
import Cookies from 'js-cookie'
import axios from 'axios'
//import TransferAPI from '../TransferAPI.json';
export default function TransfersContent() {

	const cId = Cookies.get("cId")

	const accountDataUrl = `http://localhost:8000/cuenta/data/main/${cId}`;

	const [accountType,setAccountType]=useState("")

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



	const [apiData, setApiData] = useState([]);
	const LiItem = [];
	useEffect(()=>{
		//toma de datos de la cuenta
		axios.get(accountDataUrl,{
			auth:{
			  username:'admin',
			  password:'admin'
			}
		}).then((response)=>{
		if((response.data).tipo_cuenta=="ahorro" || (response.data).tipo_cuenta=="corriente"){
			if((response.data).tipo_cuenta=="ahorro"){
			setAccountType("Caja de Ahorros (CA)")
			}
			else{
			setAccountType("Cuenta Corriente (CC)")
			}
	
			setAccountData(response.data)
		}
		else{
			setAccountData(
			{
				"customer_id": cId,
				"balance": "******",
				"tipo_cuenta": "*****",
				"account_alias": "****.****.****",
				"account_cbu": "*********************",
				"iban": "*******************"
			}
			)
		}
		})
		//setApiData(TransferAPI);
	},[]);

	apiData.forEach((elemento)=>{
		const LiItemArray = {
			TFstate:elemento.Fstate,
			TFdescription:elemento.Fdescription,
			TFmonto:elemento.Fmonto,
			TFDbank:elemento.FDbank,
			TFDnombre:elemento.FDnombre,
			TFDapellido:elemento.FDapellido,
			TFid:elemento.Fid
		};
		LiItem.push(<TransferContentLi key={elemento.Fid} {...LiItemArray}/>);
	});
	LiItem.reverse();
	return (
		<AuthChecker>
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
		</AuthChecker>
	)
}