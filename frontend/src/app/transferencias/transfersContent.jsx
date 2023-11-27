'use client';
import {useEffect, useState} from 'react';
import styleTransfers from './transfers.module.css';
import TransferContentLi from './TransferContentLi';
import TransferAPI from '../TransferAPI.json';
import { BalanceEconomico } from '../BalanceCounter';
export default function TransfersContent() {

	const [apiData, setApiData] = useState([]);
	const LiItem = [];
	useEffect(()=>{
		setApiData(TransferAPI);
	});

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
		<div className={styleTransfers.transferMainContainer}>
			<div className={styleTransfers.transfersContainer}>
				<section className={styleTransfers.contacts}>
					<div className={styleTransfers.contactos}>
						<div className={styleTransfers.balance}>
							<ul className={styleTransfers.balanceUl}>
								<li className={styleTransfers.balanceText}>Balance:</li>
								<li className={`${styleTransfers.balanceAmount} number_format`}>{BalanceEconomico.toLocaleString()}</li>
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

	)
}