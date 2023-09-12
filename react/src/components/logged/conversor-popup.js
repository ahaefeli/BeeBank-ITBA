import React, { useState, useEffect } from 'react';
import '../../css/dedicated/conversor.css'

export default function CurrencyConverter(props) {

  const [selectedCurrency, setSelectedCurrency] = useState('ARS');
  const [amount, setAmount] = useState('');
  const [convertedValues, setConvertedValues] = useState({
    ARS: 0,
    USD: 0,
    EUR: 0,
    UYU: 0,
  });
  
  useEffect(() => {
    // Realiza la solicitud a la API al cargar el componente y cuando cambia la moneda base o la cantidad
    const apiUrl = `https://api.exchangerate-api.com/v4/latest/${selectedCurrency}`;
    const apiKey = '94a245608c19ff1677cd843a';
    

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Obtiene las tasas de cambio desde la respuesta JSON
        const rates = data.rates;

        // Calcula las tasas de cambio en función de la cantidad ingresada
        const convertedValues = {};
        Object.keys(rates).forEach((currency) => {
          convertedValues[currency] = (amount * rates[currency]).toFixed(2);
        });

        setConvertedValues(convertedValues);
      })
      .catch((error) => {
        console.error('Error al obtener tasas de cambio:', error);
      });
  }, [selectedCurrency, amount]);

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className={props.show ? "popUp" : "popUp-hide"}>
    <div className='form-container'>
    <h4>Conversor de Moneda</h4>
    <div>
      <label>Moneda Base:</label>
      <select value={selectedCurrency} onChange={handleCurrencyChange}>
        <option value="ARS">ARS</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="UYU">UYU</option>
      </select>
    </div>
    <div className='form-container'>
      <label>Cantidad:</label>
      <input
        type="number"
        value={amount}
        onChange={handleAmountChange}
      />
    </div>
    <div>
      <h5>Tasas de Cambio:</h5>
      <ul className='currencyList'>
        {Object.keys(convertedValues).map((currency) => (
            
          <li className='number-format' key={currency}>
            {currency}: {convertedValues[currency]}
          </li>
        ))}
      </ul>
    </div>
    </div>
    </div>
)};
