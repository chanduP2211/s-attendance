let username = document.querySelector("#username")
let password = document.querySelector("#password")
let new_password = document.querySelector("#new_password")
let confirm_password = document.querySelector("#confirm_password")

 function login(){
    let check = false;
 let login = localStorage.getItem('login')?JSON.parse(localStorage.getItem('login')):[];
    login.forEach((element)=>{
     if(element.username === username.value && element.password === password.value)
        check = true;
    })
    if(check)
    signup(username.value)
    else
    alert("Incorrect Username or Password")
}

 function signup(username){
   
    if(validation()){
    if(new_password.value === confirm_password.value){
        let login = localStorage.getItem('login')?JSON.parse(localStorage.getItem('login')):[];
        login.forEach((element)=>{
                 if(element.username === username){
                    element.password = new_password.value
                 }
        })
        localStorage.setItem("login",JSON.stringify(login))
        alert('Sign Up Successfully')
      location.href = "../HTML/t.login page.html"
    }
    else
        alert("Password is not Match")
}
}
function validation(){
    if(new_password.value === "" || confirm_password.value === ""){
    alert("Please fill the all data");
    return false; 
  }
  return true;
}