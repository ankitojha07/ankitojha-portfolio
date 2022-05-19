function validation() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;
  var error_msg = document.getElementById("error_msg");
  var text;
  error_msg.style.padding = "10px";
  if (name.length < 3) {
    text = "Please enter valid name!";
    error_msg.innerHTML = text;
    return false;
  }
  if (isNaN(phone) || phone.length != 10) {
    text = "Please enter correct hone number!";
    error_msg.innerHTML = text;
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 13) {
    text = "Please enter valid email!";
    error_msg.innerHTML = text;
    return false;
  }
  if (message.length < 50) {
    text = "Please enter more than 50 characters!";
    error_msg.innerHTML = text;
    return false;
  }
  alert("Form submitted successfullt!");
  return true;
}
