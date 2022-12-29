let username = document.querySelector("#username");
let password = document.querySelector("#password");
let retype = document.querySelector("#retype_password");
let admin = localStorage.getItem("admin")
  ? JSON.parse(localStorage.getItem("admin"))
  : [];
let checkun = /^[a-zA-Z][\w\.\_]+@[a-zA-Z]{2,5}\.[a-zA-Z]{2,5}/;
let checkpw = /^(([a-z]?[A-z])+[0-9]+)/;

function signUp() {
  if (signUpValidation()) {
    admin.push({
      username: username.value,
      password: password.value,
    });
    localStorage.setItem("admin", JSON.stringify(admin));
    alert("you successfully signup");
    location.href = "../HTML/a.login page.html";
  }
}

function signUpValidation() {
  if (!checkun.test(username.value)) {
    alert("Please enter valid username");
    return false;
  }
  if (!checkpw.test(password.value)) {
    alert("Please enter valid password");
    return false;
  }
  if (retype.value === password.value) {
    for (let data of admin) {
      if (username.value === data.username && password.value === data.password) {
        alert("you already sign up please login");
        location.href = "../HTML/a.login page.html";
        return false;
      }
    }
  } else {
    alert("Password is NOT MATCH");
    return false;
  }
  return true;
}
