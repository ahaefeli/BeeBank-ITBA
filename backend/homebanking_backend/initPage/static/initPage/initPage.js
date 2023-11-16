const btnRight = document.querySelector(".btn-right"),
  slider = document.querySelector("#slider"),
  sliderSection = document.querySelectorAll(".slider-section");

btnRight.addEventListener("click", moveToRight);

setInterval(moveToRight, 10000);

let counter = 0,
  widthImg = 100 / sliderSection.length;

function moveToRight() {
  counter++;
  if (counter >= sliderSection.length) {
    counter = 0;
  }
  let operacion = widthImg * counter;
  slider.style.transform = `translate(-${operacion}%)`;
  slider.style.transition = "all ease 2s";
}