'use client';

import styleLoans from './loans.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Cookies from "js-cookie"

export default function LoansContent() {
  const cId = Cookies.get('cId')
  const acpbtn = document.querySelector(".acceptBtn")
  const cancel = document.querySelector(".cancelBtn")
  
  function loanCalculator() {
    // Gets the data from the input and converts it to float
    var valuep = Number(document.getElementById("loanamount").value);
    var interest = Number(document.getElementById("anualinterest").value);
    var timem = Number(document.getElementById("timeinmonths").value);

    // Validates that the values are not blank
    if (isNaN(valuep) || isNaN(interest) || isNaN(timem)) {
      alert("Por favor, ingrese valores numericos validos en todos los campos.");
    } else {
      const formatNumber = (amount) => (amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 8 });

      let anualinterest = (interest / 100) + 1

      // Interest divided by the 12 months of the year
      var monthlyinterest = anualinterest ** (1 / 12);
      var totalpayment = valuep * (monthlyinterest ** timem);
      var monthlypay = (totalpayment) / 12;

      // Mostrar en pantalla los resultados y redondearlos con toFixed
      document.getElementById("valuep").innerHTML = valuep.toFixed(2);
      document.getElementById("monthlypay").innerHTML = monthlypay.toFixed(2);
      document.getElementById("totalpayment").innerHTML = totalpayment.toFixed(2);

    }
  }

  let [executeEffect, setExecutEffect] = useState(true);
  useEffect(() => {
    if (executeEffect) {
      loanCalculator();
      setExecutEffect = false;
    }
  }, [executeEffect]);
  const urlPrestamoPermitido = `http://localhost:8000/prestamo/cliente/permitido/${cId}`
  const [LiPrestamosState, setLiPrestamosState] = useState([])
  let LiPrestamos = []
  axios.get(urlPrestamoPermitido, {
    auth: {
      username: 'admin',
      password: 'admin',
    }
  }).then((response) => {
        if (response.data) {
            for (i=0;i<response.data.lenght;i++){
            prestamo = response.data[i]
            LiPrestamos.push(
            <div key={response.data.loan_id}>
                <p>Tipo de préstamo: {response.data.loan_type}</p>
                <p>Total de préstamo: {response.data.loan_total}</p>
            </div>
            )
            setLiPrestamosState(LiPrestamos)
          }

        }
      }).catch((error)=>{
        LiPrestamos.push(
          <div key="not_found">
              <p>No hay préstamos disponibles, por favor comunícate con tu asesor si quieres solicitar uno</p>
          </div>
        )
        setLiPrestamosState(LiPrestamos)
      })

  return (
    <div className='InsideContent'>

      <div className={styleLoans.mainContainer}>
        <div className={styleLoans.firstContainer}>
          <ul className={styleLoans.topBtns}>
            {LiPrestamosState}
          </ul>
        </div>

        <div className={styleLoans.secondContainer}>
          <section className={styleLoans.loansCalculator}>
            <div className={styleLoans.calculatorContainer}>
              <ul className={styleLoans.inputBoxes}>
               <div className={styleLoans.title}>Calculá intereses</div>
                <label htmlFor={styleLoans.loan}>Monto del prestamo</label>
                <li ><input className={styleLoans.inputBox} type="number" id="loanamount" /></li>
                <label htmlFor={styleLoans.anual}>Interes(%)</label>
                <li ><input className={styleLoans.inputBox} type="number" id="anualinterest" /></li>
                <label htmlFor={styleLoans.time}>Meses de duracion</label>
                <li ><input className={styleLoans.inputBox} type="number" id="timeinmonths" /></li>
                <button onClick={loanCalculator} className={`${styleLoans.calculateBtn} button--general`}> Calcular </button>
                <li className={styleLoans.result}>Valor del prestamo:<span className={`${styleLoans.resultText} number_format`} id="valuep" /></li>
                <li className={styleLoans.result}>Abono por mes:<span className={`${styleLoans.resultText} number_format`} id="monthlypay" /></li>
                <li className={styleLoans.result}>Total a pagar:<span className={`${styleLoans.resultText} number_format`} id="totalpayment" /></li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}