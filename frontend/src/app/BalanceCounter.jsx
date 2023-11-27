'use client';
import TransferAPI from './TransferAPI.json';
export let BalanceEconomico = 0;
export default function BalanceCounter(){
    TransferAPI.forEach((elemento)=>{
        if(elemento.Fid==0){
            BalanceEconomico = 0;
        }
        if(elemento.Fstate==='Approved' && elemento.Fio==='in'){
            BalanceEconomico = BalanceEconomico + elemento.Fmonto;
        }
        else if(elemento.Fstate==='Approved' && elemento.Fio==='out'){
            BalanceEconomico = BalanceEconomico - elemento.Fmonto;
        }
    });

    return(
        <></>
    );
}