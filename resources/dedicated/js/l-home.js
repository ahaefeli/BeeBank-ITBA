const toggle = document.querySelector(".toggle")
const linksDiv = document.querySelector(".links")
const logocontainer = document.querySelector(".logo-container")

const inicioOpen = document.querySelector(".inicio")
const cuentasOpen = document.querySelector(".cuentas")
const transferenciasOpen = document.querySelector(".transferencias")
const prestamosOpen = document.querySelector(".prestamos")
const soporteOpen = document.querySelector(".soporte")
const configuracionOpen = document.querySelector(".configuracion")
const cerrarOpen = document.querySelector(".cerrar-sesion")

toggle.addEventListener("click", () => {
    logocontainer.classList.toggle("logo-containerOpen")
    toggle.classList.toggle("open-close-buttonOpen")
    linksDiv.classList.toggle("linksOpen")
    inicioOpen.classList.toggle("inicioOpen")
    cuentasOpen.classList.toggle("cuentasOpen")
    transferenciasOpen.classList.toggle("transferenciasOpen")
    prestamosOpen.classList.toggle("prestamosOpen")
    soporteOpen.classList.toggle("soporteOpen")
    configuracionOpen.classList.toggle("configuracionOpen")
    cerrarOpen.classList.toggle("cerrar-sesionOpen")
});