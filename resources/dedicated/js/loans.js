
const acpbtn = document.querySelector(".acept-btn")
const cancel = document.querySelector(".cancel-btn")

acpbtn.addEventListener("click", () => {
    confirm("Esta seguro que quiere confirmar este prestamo en BEEBANK")
});

cancel.addEventListener("click", () => {
    confirm("Esta seguro que quiere desechar este prestamo en BEEBANK")
});