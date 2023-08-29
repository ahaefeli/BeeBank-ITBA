document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("convert").addEventListener("click", function() {

        const currencySelect = document.getElementById("currency");
        const selectedCurrency = currencySelect.value;

        const amountInput = document.getElementById("amount");
        const amount = parseFloat(amountInput.value);
      
        if (isNaN(amount) || amount < 0) {
            amount = 0;
            amountInput.value = "0";
        }
     
        const ARS = document.getElementById("ARS");
        const USD = document.getElementById("USD");
        const EUR = document.getElementById("EUR");
        const UYU = document.getElementById("UYU");
        
        if (selectedCurrency == "ARS") {
            ARS.textContent = "$"+(amount).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 8});
            USD.textContent = "$"+(amount*0.0029).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 8});
            EUR.textContent = "$"+(amount*0.0026).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 8});
            UYU.textContent = "$"+(amount*0.11).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 8});
        } else if (selectedCurrency == "USD"){
            ARS.textContent = "$"+(amount*350.58).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 8});
            USD.textContent = "$"+(amount).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 8});
            EUR.textContent = "$"+(amount*0.92).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 8});
            UYU.textContent = "$"+(amount*37.69).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 8});
        } else if (selectedCurrency == "EUR"){
            ARS.textContent = "$"+(amount*382.5).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 8});
            USD.textContent = "$"+(amount*1.08).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 8});
            EUR.textContent = "$"+(amount).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 8});
            UYU.textContent = "$"+(amount*40.83).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 8});
        } else if (selectedCurrency == "UYU"){
            ARS.textContent = "$"+(amount*9.28).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 8});
            USD.textContent = "$"+(amount*0.027).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 8});
            EUR.textContent = "$"+(amount*0.024).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 8});
            UYU.textContent = "$"+(amount).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 8});
        }
        });

    });