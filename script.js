function checkPassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    
    if (password !== confirmPassword) {
      document.getElementById("password-error").innerHTML = "Password do not match";
      document.getElementById("password").style.border = "1px solid red";
      document.getElementById("confirm-password").style.border = "1px solid red";
      return false;
    } else {
      document.getElementById("password-error").innerHTML = "thankyou";
      document.getElementById("password").style.border = "";
      document.getElementById("confirm-password").style.border = "";
      return true;
    }
  }