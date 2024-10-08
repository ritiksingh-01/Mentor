document.querySelectorAll('.toggle-password').forEach(item => {
    item.addEventListener('click', function () {
      const input = this.previousElementSibling;
      if (input.type === 'password') {
        input.type = 'text';
        this.classList.remove('fa-eye-slash');
        this.classList.add('fa-eye');
      } else {
        input.type = 'password';
        this.classList.remove('fa-eye');
        this.classList.add('fa-eye-slash');
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    var loginButton = document.querySelector(".signin-link");
    loginButton.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "../Login Page/login.html";
    });
});