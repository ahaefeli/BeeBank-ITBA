import { useEffect, useState } from 'react';
import { confirm, loanCalculator } from '../../js/loans-functionality';

export default function LoggedLoansContent() {
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