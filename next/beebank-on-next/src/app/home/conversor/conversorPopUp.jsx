'use client';

import styleConversor from './conversor.module.css';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function CurrencyConverter(props) {

  const rountOptions = {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
    locale: 'es-ES',
  };

  const [selectedCurrency, setSelectedCurrency] = useState('ARS');
  const [amount, setAmount] = useState('');
  const availableCurrencies = ['ARS','USD','EUR','UYU']
  const [convertedValues, setConvertedValues] = useState({
    ARS: 0,
    USD: 0,
    EUR: 0,
    UYU: 0,
  });

  useEffect(() => {
    // Realiza la solicitud a la API al cargar el componente y cuando cambia la moneda base o la cantidad
    const apiUrl = `https://api.exchangerate-api.com/v4/latest/${selectedCurrency}`;


    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Obtiene las tasas de cambio desde la respuesta JSON
        const rates = data.rates;

        // Calcula las tasas de cambio en función de la cantidad ingresada
/*      const convertedValues = {};
        Object.keys(rates).forEach((currency) => {
          convertedValues[currency] = (amount * rates[currency]).toFixed(2);
        });*/
        const convertedValues = {};
        Object.keys(rates).forEach((currency) => {
          (availableCurrencies.indexOf(currency)>-1)?
          (convertedValues[currency] = (amount * rates[currency]).toLocaleString(undefined, rountOptions)):null;
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
      <div className={styleConversor.formContainer}>
        <div className={styleConversor.title}>Conversor de Moneda</div>

        <div className={styleConversor.container}>
          <label className={styleConversor.subTitle}>Moneda Base:</label>
          <select value={selectedCurrency} onChange={handleCurrencyChange} className={styleConversor.inputCurrency}>
            <option value="ARS">ARS</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="UYU">UYU</option>
          </select>
        </div>

        <div className={styleConversor.container}>
          <label className={styleConversor.subTitle}>Cantidad:</label>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            className={styleConversor.inputCurrency}
          />
        </div>
        <div>
          <div className={styleConversor.listTitle}>Tasas de Cambio:</div>
          <ul className={styleConversor.currencyList}>
            {Object.keys(convertedValues).map((currency) => (
              <li className='number_format' key={currency}><Image className={styleConversor.flag} width={20} height={20} quality={100} alt='Bandera' src={`https://raw.githubusercontent.com/ahaefeli/beebank-resources/main/flags/${currency}.png`}></Image>
                {currency}: {convertedValues[currency]}
              </li>
            ))}

          </ul>
        </div>
      </div>
    </div>
  )
};
