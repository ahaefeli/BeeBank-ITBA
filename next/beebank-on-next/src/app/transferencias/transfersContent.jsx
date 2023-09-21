"use client"
import {useEffect, useState} from "react";
import styleTransfers from './transfers.module.css';
import TransferContentLi from "./TransferContentLi";
import TransferAPI from "../TransferAPI.json";
import { BalanceEconomico } from "../BalanceCounter";
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
								<li className={`${styleTransfers.balanceAmount} number-format`}>{BalanceEconomico}</li>
							</ul>
						</div>
						<ul className={styleTransfers.transferContactSearch}>
							<li className={styleTransfers.contactSearchText}><a href="#">Tiene Beebank</a></li>
							<li className={styleTransfers.contactSearchText}><a href="#">No tiene Beebank</a></li>
						</ul>
						<ul className={styleTransfers.transferContactSearch}>
							<li><input type="search" name="Busqueda" id="Busqueda" className={styleTransfers.inputBarra} autoComplete="off" /></li>
							<label htmlFor="Busqueda" className={styleTransfers.inputLabel}>Buscá el pago o transferencia</label>
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