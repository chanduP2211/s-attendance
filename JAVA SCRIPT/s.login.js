let user_name = document.querySelector("#username");
let pass_word = document.querySelector("#password");

function submiting() {
  let login = JSON.parse(localStorage.getItem("login"));
  let condition = false;
  for (let person of login) {
    if (pass_word.value === person.password && user_name.value === person.username) {
      condition = true;
      break;
    }
  }
  if (condition) {
    sessionStorage.setItem("stu_username", user_name.value);
    sessionStorage.setItem("stu_password", pass_word.value);
    alert("you can log in");
    location.href = "../HTML/s.Home.html";
  } else alert("you need to sign up call to Teacher");
}
