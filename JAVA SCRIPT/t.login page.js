var user_name = document.querySelector("#username");
var pass_word = document.querySelector("#password");

function submiting() {
  let condition = false;
  let login = JSON.parse(localStorage.getItem("login"));
  for (let data of login) {
    console.log(pass_word.value)
    if (pass_word.value  === data.password&& user_name.value === data.username) {
      sessionStorage.setItem("username", user_name.value);
      sessionStorage.setItem("password", pass_word.value);
      condition = true;
      break;
    }
  }
  if (condition) {
    alert("you can log in");
    location.href = "../HTML/t.home.html";
  } else {
    alert("you need to sign up call to admin");
  }
}
