
const acpbtn = document.querySelector('[name="accept-btn"]')
const cancel = document.querySelector('[name="cancel-btn"]')

acpbtn.addEventListener("click", () => {
    confirm("¿Deseea confirmar el préstamo de BeeBank?")
});

cancel.addEventListener("click", () => {
    confirm("¿Está seguro que quiere descartar el prestamo?")
});