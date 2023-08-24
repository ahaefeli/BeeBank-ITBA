document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector(".login-form form");
  
  form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    window.location.href = "l-home.html";

    });
});
