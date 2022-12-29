let id = document.getElementById("id");
let tname = document.getElementById("name");
let gender = document.getElementById("gender");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let degree = document.getElementById("degree");
let subject = document.getElementById("subject");
let address = document.getElementById("address");
let tbody = document.querySelector("#tbody");
let main1 = document.querySelector(".main1");
let main2 = document.querySelector(".main2");
let update = document.querySelector(".up")
let submit = document.querySelector(".submit")

let data = "";
let count = 0;
let teacher_data;

if (localStorage.getItem("teacher")) {
  teacher_data = JSON.parse(localStorage.getItem("teacher"));
  for (let teacher of teacher_data) {
    data += `<tr><td>${++count}</td><td>${teacher.id}</td><td>${
      teacher.name
    }</td><td>${teacher.gender}</td><td>${teacher.email}</td><td>${
      teacher.phone
    }</td><td>${teacher.degree}</td><td>${teacher.subject}</td><td>${
      teacher.address
    }</td><td class="td"><i class="fa-solid fa-user-pen update"></i><i class="fa-solid fa-trash delete"></i></td></tr>`;
  }
  tbody.innerHTML = data;
}

function submiting() {
  let teacher = localStorage.getItem("teacher")
    ? JSON.parse(localStorage.getItem("teacher"))
    : [];
   
  if (!validation()){
    console.log("hii")
   return false;
  }
  else {
    teacher.push({
      id: id.value,
      name: tname.value,
      gender: gender.value,
      email: email.value,
      phone: phone.value,
      degree: degree.value,
      subject: subject.value,
      address: address.value
    });
    localStorage.setItem("teacher", JSON.stringify(teacher));

    alert("Data entered successfully");
    return true;
  }

}

function resetting() {
  id.value = "";
  tname.value = "";
  gender.value = "";
  email.value = "";
  phone.value = "";
  degree.value = "";
  subject.value = "";
  address.value = "";
}
function inserting() {
  update.style.display = "none";
  main1.style.display = "none";
  main2.style.display = "block";
}
function cancelling() {
  main1.style.display = "block";
  main2.style.display = "none";
}

tbody.addEventListener("click", deleting);

function deleting(e) {
  console.log(e.target)
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you Sure"))
      localStorageDelete(e.target.parentElement.parentElement);
  }
  if (e.target.classList.contains("update")) {
    updating(e.target.parentElement.parentElement);
  }
}

function localStorageDelete(tr) {
  let teacher_id = tr.children[1];
  teacher_data.forEach((task, index) => {
    if (teacher_id.textContent === task.id) {
      teacher_data.splice(index, 1);
    }
  });
  tr.remove();
  localStorage.setItem("teacher", JSON.stringify(teacher_data));
}

function changing(){
  let teacher = JSON.parse(localStorage.getItem('teacher'))
  teacher.forEach((element)=>{

    if(element.id == id.value){
        element.name = tname.value,
        element.gender = gender.value,
        element.email = email.value,
        element.phone = phone.value,
        element.degree = degree.value,
        element.subject = subject.value,
        element.address = address.value
       } 
  })
  localStorage.setItem('teacher',JSON.stringify(teacher));

  updateLogin(id.value,tname.value)
  alert("Updated Successfully")
  location.reload();
 
}


function updating(tr) {
  submit.style.display = "none";
  main1.style.display = "none";
  main2.style.display = "block";
  id.value = tr.cells[1].textContent;
  tname.value = tr.cells[2].textContent;
  gender.value = tr.cells[3].textContent;
  email.value = tr.cells[4].textContent;
  phone.value = tr.cells[5].textContent;
  degree.value = tr.cells[6].textContent;
  subject.value = tr.cells[7].textContent;
  address.value = tr.cells[8].textContent;
}

function validation() {
  let check_phone = /[0-9]{10}/;
  let check_id = /[\d+]{4,8}/;
  let check_email = /^[a-zA-Z][\w\.\_]+@[a-zA-Z]{2,5}\.[a-zA-Z]{2,5}/;

  if (
    id.value === "" ||
    email.value === "" ||
    phone.value === "" ||
    degree.value === "" ||
    subject.value === "" ||
    address.value === "" ||
    tname.value === "" ||
    gender.value === ""
  ) {
    alert("plz fill the all data");
    return false;
  }
  if(!(check_id.test(id.value))){
    alert('plz enter valid id')
    return false}
    if(!(check_email.test(email.value))){
      alert('plz enter valid email')
      return false}
    if(!(check_phone.test(phone.value))){
          alert('plz enter valid phone number')
          return false}
          login()
  return true;
}
 
function login(){
  let login = localStorage.getItem("login")?JSON.parse(localStorage.getItem("login")):[];

login.push({
  "username" : id.value,
  "password" : tname.value
})
localStorage.setItem('login',JSON.stringify(login))

}
function updateLogin(id,name) {
  let login = JSON.parse(localStorage.getItem("login"))
  let data = login.map(element=>{
         if(element.username === id){
          element.username = id,
          element.password = name
         }
         return element;
  })
  localStorage.setItem('login',JSON.stringify(data))
}