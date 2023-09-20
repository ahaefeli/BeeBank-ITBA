import { useEffect, useState } from 'react';
import { confirm, loanCalculator } from '../../js/loans-functionality';

export default function LoggedLoansContent() {
  const acpbtn = document.querySelector(".acceptBtn")
  const cancel = document.querySelector(".cancelBtn")

  export function loanCalculator() {
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
  
      console.log(monthlyinterest)
      console.log(anualinterest)
      console.log(totalpayment)
  
      // Mostrar en pantalla los resultados y redondearlos con toFixed
      document.getElementById("valuep").innerHTML = valuep.toFixed(2);
      document.getElementById("monthlypay").innerHTML = monthlypay.toFixed(2);
      document.getElementById("totalpayment").innerHTML = totalpayment.toFixed(2);
  
    }

  let [executeEffect, setExecutEffect] = useState(true);
  useEffect(() => {
    if (executeEffect) {
      confirm();
      loanCalculator();
      setExecutEffect = false;
    }
  }, [executeEffect]);


  return (
    <div>
      <ul className="top-btns">
        <li className="select">
          <select name="select">
            <option value={1}>PRESTAMO PERSONAL</option>
            <option value={2}>PRESTAMO SALUD</option>
            <option value={3}>PRESTAMO EDUCACIONAL</option>
            <option value={4}>PRESTAMO JUBILATORIO 50%</option>
            <option value={5} selected>Seleccione la linea de prestamo</option>
          </select>
        </li>
        <li className="select">
          <select name="select">
            <option value={1}>$10.000</option>
            <option value={2}>$50.000</option>
            <option value={3}>$100.000</option>
            <option value={4}>$500.000</option>
            <option value={5} selected>Seleccione entre los importes disponibles</option>
          </select>
        </li>
        <li className="select">
          <select name="select">
            <option value={1}>Pago de deudas</option>
            <option value={2}>Educacion</option>
            <option value={3}>Pago de alquiler</option>
            <option value={4}>Pago de servicios</option>
            <option value={5} selected>Seleccione Destino</option>
          </select>
        </li>
        <li className="select">
          <button className="accept-btn button--general"> Aceptar</button>
          <button className="cancel-btn button--general">Cancelar</button>
        </li>
      </ul>

      <section className="loans-calculator">
        <div className="calculator-c">
          <ul className="input-boxes">
            <label htmlFor="loan">Monto del prestamo</label>
            <li className="loanamount"><input type="number" id="loanamount" /></li>
            <label htmlFor="anual">Interes(%)</label>
            <li className="anualinterest"><input type="number" id="anualinterest" /></li>
            <label htmlFor="time">Meses de duracion</label>
            <li className="timeinmonths"><input type="number" id="timeinmonths" /></li>
            <button onClick={loanCalculator} className="accept-btn button--general"> Calcular </button>
            <li className="result">Valor del prestamo:</li><span className="resultText number-format" id="valuep" />
            <li className="result">Abono por mes:</li><span className="resultText number-format" id="monthlypay" />
            <li className="result">Total a pagar:</li><span className="resultText number-format" id="totalpayment" />
          </ul>
        </div>
      </section>
    </div>

  )

}