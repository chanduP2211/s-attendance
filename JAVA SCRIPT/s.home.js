function home() {
  location.href = "../HTML/s.Home.html";
}
function attendance() {
  location.href = "../HTML/s.attend.html";
}
function profile() {
  location.href = "../HTML/s.profile.html";
}
function logout() {
  if (confirm("Are You LogOut")) {
    localStorage.removeItem("today");
    location.href = "../HTML/s.login.html";
  }
}
