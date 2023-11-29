'use client';

import styleLoans from './loans.module.css';
import { useState, useEffect } from 'react';

export default function LoansContent() {
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


  return (
    <div className='InsideContent'>
      <div className={styleLoans.mainContainer}>
        <div className={styleLoans.firstContainer}>
          <ul className={styleLoans.topBtns}>
           <div className={styleLoans.title}>Pedí tu préstamo</div>
            <li className={styleLoans.select}>
              <select name='select' className={styleLoans.menuSelect}>
                <option value={1}>PRESTAMO PERSONAL</option>
                <option value={2}>PRESTAMO SALUD</option>
                <option value={3}>PRESTAMO EDUCACIONAL</option>
                <option value={4}>PRESTAMO JUBILATORIO 50%</option>
                <option value={5} selected>Seleccione la linea de prestamo</option>
              </select>
            </li>
            <li className={styleLoans.select}>
              <select name='select' className={styleLoans.menuSelect}>
                <option value={1}>$10.000</option>
                <option value={2}>$50.000</option>
                <option value={3}>$100.000</option>
                <option value={4}>$500.000</option>
                <option value={5} selected>Seleccione entre los importes disponibles</option>
              </select>
            </li>
            <li className={styleLoans.select}>
              <select name='select' className={styleLoans.menuSelect}>
                <option value={1}>Pago de deudas</option>
                <option value={2}>Educacion</option>
                <option value={3}>Pago de alquiler</option>
                <option value={4}>Pago de servicios</option>
                <option value={5} selected>Seleccione Destino</option>
              </select>
            </li>
            <li className={styleLoans.select}>
              <button className={`${styleLoans.acceptBtn} button--general`}>Solicitar</button>
            </li>
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