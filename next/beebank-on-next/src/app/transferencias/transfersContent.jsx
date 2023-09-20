'use client'
import {useEffect, useState} from 'react';
import styleTransfers from './transfers.module.css';
import TransferContentLi from './TransferContentLi';
import TransferAPI from '../TransferAPI.json';
import Link from 'next/link';

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
	return (
		<div className={styleTransfers.transfersContainer}>
			<section className={styleTransfers.contacts}>
				<div className={styleTransfers.contactos}>
					<div className={styleTransfers.balance}>
						<ul className={styleTransfers.balanceUl}>
							<li className={styleTransfers.balanceText}>Balance:</li>
							<li className={`${styleTransfers.balanceAmount} number_format`}>450.200,<span className='number_format'>50</span></li>
						</ul>
					</div>
					<ul className={styleTransfers.transferContactSearch}>
						<li className={styleTransfers.contactSearchText}><Link href='/transferencias'>Tiene Beebank</Link></li>
						<li className={styleTransfers.contactSearchText}><Link href='/transferencias'>No tiene Beebank</Link></li>
					</ul>
					<ul className={styleTransfers.transferContactSearch}>
						<li><input type='search' name='Busqueda' id='Busqueda' className={styleTransfers.inputBarra} autoComplete='off' /></li>
						<label htmlFor='Busqueda' className={styleTransfers.inputLabel}>Buscá el pago o transferencia</label>
					</ul>
				</div>


				<div className={styleTransfers.transferSection}>
					<ul className={styleTransfers.transfersList}>
						{LiItem}
					</ul>
				</div>
			</section>
		</div>

	)
}