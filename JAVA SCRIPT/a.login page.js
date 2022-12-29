let username = document.querySelector("#username");
let password = document.querySelector("#password");

function logIn() {
  let admin = localStorage.getItem("admin")
    ? JSON.parse(localStorage.getItem("admin"))
    : [];
  let condition = false;
  for (let check of admin) {
    if (username.value === check.username && password.value === check.password) {
      condition = true;
      break;
    }
  }
  if (condition) {
    alert("you can login");
    location.href = "../HTML/a.home.html";
  } else {
    alert("Not signed Yet..Please Sign up");
    username.value = "";
    password.value = "";
  }
}
