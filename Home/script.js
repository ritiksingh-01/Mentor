document.addEventListener("DOMContentLoaded", function() {
    var signupButton = document.querySelector(".signup-button");
    signupButton.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "../SignUp Page/signup.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var loginButton = document.querySelector(".login-button");
    loginButton.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "../Login Page/login.html";
    });
});