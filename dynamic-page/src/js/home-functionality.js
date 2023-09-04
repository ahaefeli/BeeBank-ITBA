export default function execSlider() {
  const btnRight = document.querySelector(".carousel__rightBtn"),
    slider = document.querySelector("#slider"),
    sliderSection = document.querySelectorAll(".slider-section");

  if (btnRight) {
    btnRight.addEventListener("click", moveToRight);
  } else {
    console.log("The slider button isn't working")
  };

  setInterval(moveToRight, 10000);

  let counter = 0,
    widthImg = 100 / sliderSection.length;

  function moveToRight() {
    counter++;
    if (counter >= sliderSection.length) {
      counter = 0;
    }
    let operacion = widthImg * counter;
    if (slider) {
      slider.style.transform = `translate(-${operacion}%)`;
      slider.style.transition = "all ease 2s";
    } else {
      console.log("Slider variable on home-functionality.js doesn't exist")
    };
  };}