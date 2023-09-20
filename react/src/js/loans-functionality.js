export function confirm() {
  const acpbtn = document.querySelector(".acceptBtn")
  const cancel = document.querySelector(".cancelBtn")

  acpbtn.addEventListener("click", () => {
    confirm("Esta seguro que quiere confirmar este prestamo en BEEBANK")
  });

  cancel.addEventListener("click", () => {
    confirm("Esta seguro que quiere desechar este prestamo en BEEBANK")
  });
}

// CALCULADORA DE INTERES
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
}

