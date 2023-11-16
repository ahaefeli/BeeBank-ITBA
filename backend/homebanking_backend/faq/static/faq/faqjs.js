document.addEventListener("DOMContentLoaded", function() {
  var returnButton = document.getElementById("returnButton");
  
  if (returnButton) {
      returnButton.addEventListener("click", function() {
          var url = document.querySelector('.response').getAttribute('data-url');
          
          window.location.href = url;
      });
  }
});