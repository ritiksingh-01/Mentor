function togglePassword() {
    var passwordField = document.getElementById("password");
    var passwordFieldType = passwordField.type === "password" ? "text" : "password";
    passwordField.type = passwordFieldType;
    var icon = document.querySelector('.toggle-password');
    icon.classList.toggle('fa-eye');
    icon.classList.toggle('fa-eye-slash');
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    var emailField = document.getElementById("email");
    var passwordField = document.getElementById("password");
    var rememberMeCheckbox = document.getElementById("rememberMe");
  
    if (localStorage.getItem("rememberMe") === "true") {
      emailField.value = localStorage.getItem("email");
      passwordField.value = localStorage.getItem("password");
      rememberMeCheckbox.checked = true;
    }
  
    document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault();
      if (rememberMeCheckbox.checked) {
        localStorage.setItem("email", emailField.value);
        localStorage.setItem("password", passwordField.value);
        localStorage.setItem("rememberMe", true);
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.setItem("rememberMe", false);
      }
      alert("Form submitted!");
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    var signupButton = document.querySelector(".account-text");
    signupButton.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "../SignUp Page/signup.html";
    });
});
