document.addEventListener("DOMContentLoaded", function () {
  const containerFlex = document.querySelector('.hidden-flex');
  if (containerFlex != null) {
      containerFlex.classList.add('visible-flex')
  } else {
      const containerBlock = document.querySelector('.hidden-block');
      containerBlock.classList.add('visible-block')
  }
});
