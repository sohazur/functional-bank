document.getElementById("login-submit").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;
  // get user password
  const passField = document.getElementById("user-password");
  const userPass = passField.value;

  if (userEmail == "guti@gmail.com" && userPass == "12345") {
    window.location.href = "banking.html";
  }
});
