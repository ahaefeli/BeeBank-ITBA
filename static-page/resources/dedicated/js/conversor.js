document.addEventListener("DOMContentLoaded", function () {

    const convertButton = document.getElementById("convert")

    convertButton.addEventListener("click", function () {

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

        // TODO: Connect with API
        const getValue = (amount, price) => (amount * price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 8 });


        if (selectedCurrency == "ARS") {
            ARS.textContent = "$" + getValue(amount, 1);
            USD.textContent = "$" + getValue(amount, 0.0029);
            EUR.textContent = "$" + getValue(amount, 0.0026);
            UYU.textContent = "$" + getValue(amount, 0.11);
        } else if (selectedCurrency == "USD") {
            ARS.textContent = "$" + getValue(amount, 350.58);
            USD.textContent = "$" + getValue(amount, 1);
            EUR.textContent = "$" + getValue(amount, 0.92);
            UYU.textContent = "$" + getValue(amount, 37.69);
        } else if (selectedCurrency == "EUR") {
            ARS.textContent = "$" + getValue(amount, 382.5);
            USD.textContent = "$" + getValue(amount, 1.08);
            EUR.textContent = "$" + getValue(amount, 1);
            UYU.textContent = "$" + getValue(amount, 40.83);
        } else if (selectedCurrency == "UYU") {
            ARS.textContent = "$" + getValue(amount, 9.28);
            USD.textContent = "$" + getValue(amount, 0.027);
            EUR.textContent = "$" + getValue(amount, 0.024);
            UYU.textContent = "$" + getValue(amount, 1);
        }
    });

    // Exec the conversion when Enter is pressed
    const currencySelect = document.getElementById("amount");
    currencySelect.addEventListener("keyup", function (event) {
            if (event.key == "Enter") {
            convertButton.click();
        };
        
    });

});