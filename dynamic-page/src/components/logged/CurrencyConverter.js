import React, { useState } from 'react';
export default function CurrencyConverter() 
{

    
      const [selectedCurrency, setSelectedCurrency] = useState('ARS');
      const [amount, setAmount] = useState('');
      const [convertedValues, setConvertedValues] = useState({
        ARS: 0,
        USD: 0,
        EUR: 0,
        UYU: 0,
      });
    
      const handleCurrencyChange = (e) => {
        setSelectedCurrency(e.target.value);
        convertCurrency(amount, e.target.value);
      };
    
      const handleAmountChange = (e) => {
        setAmount(e.target.value);
      };
    
      const convertCurrency = (amount, currency) => {
        // Realizar la conversión en función del valor de la moneda seleccionada y el monto ingresado
        // TODO: Conectar con una API para obtener tasas de cambio actualizadas
        const conversionRates = {
          ARS: { ARS: 1, USD: 0.0029, EUR: 0.0026, UYU: 0.11 },
          USD: { ARS: 350.58, USD: 1, EUR: 0.92, UYU: 37.69 },
          EUR: { ARS: 382.5, USD: 1.08, EUR: 1, UYU: 40.83 },
          UYU: { ARS: 9.28, USD: 0.027, EUR: 0.024, UYU: 1 },
        };
    
        const convertedValues = {};
    
        for (const targetCurrency in conversionRates[currency]) {
          const rate = conversionRates[currency][targetCurrency];
          convertedValues[targetCurrency] = (amount * rate).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 8,
          });
        }
    
        setConvertedValues(convertedValues);
      };
    
      const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          convertCurrency(amount, selectedCurrency);
        }
      };
    


  return(
  <div className="page-content">
  <div className="form-container">
    <select id="currency">
      <option value="ARS">Peso Argentino</option>
      <option value="USD">Dólar Oficial</option>
      <option value="EUR">Euro Oficial</option>
      <option value="UYU">Peso Uruguayo</option>
    </select>
    <input type="number" id="amount" className="amount" placeholder="Monto" />
    <button id="convert" className="general-btn" draggable="false">Convertir</button>
  </div>
  <div id="result">
    <ul className="number-format">
      <div>
        <label><img src="resources/flags/ars.png" draggable="false" className="flag" />Pesos Argentinos:</label>
        <li id="ARS">$0.00</li>
      </div>
      <div>
        <label><img src="resources/flags/usd.png" draggable="false" className="flag" />Dólar Oficial:</label>
        <li id="USD">$0.00</li>
      </div>
      <div>
        <label><img src="resources/flags/eur.png" draggable="false" className="flag" />Euro Oficial:</label>
        <li id="EUR">$0.00</li>
      </div>
      <div>
        <label><img src="resources/flags/uyu.png" draggable="false" className="flag" />Pesos Uruguayos:</label>
        <li id="UYU">$0.00</li>
      </div>
    </ul>
  </div>
</div>
)};