let id = document.getElementById("id");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let gender = document.getElementById("gender");
let dob = document.getElementById("dob");
let phone = document.getElementById("phone");
let class1 = document.getElementById("class");
let address = document.getElementById("address");
let tbody = document.querySelector(".tbody");
let main1 = document.querySelector(".main1");
let main2 = document.querySelector(".main2");
let update = document.querySelector(".up")
let submit = document.querySelector(".submit")






update.addEventListener('click',changing);

let student = localStorage.getItem("student")
  ? JSON.parse(localStorage.getItem("student"))
  : [];
if (localStorage.getItem("student")) {
  let student_data = JSON.parse(localStorage.getItem("student"));
  let data = "";
  for (let person of student_data) {
    let count = tbody.children.length;
    data += `<tr><td>${count + 1}</td><td>${person.id}</td><td>${
      person.fname
    }</td><td>${person.lname}</td><td>${person.gender}</td><td>${
      person.dob
    }</td><td>${person.phone}</td><td>${person.class}</td><td>${
      person.address
    }</td><td class="td"><i class="fa-solid fa-user-pen update"></i><i class="fa-solid fa-trash delete"></i></td></tr>`;
    tbody.innerHTML = data;
  }
}

function inserting() {
  update.style.display = "none";
  main1.style.display = "none";
  main2.style.display = "block";
}
function adding() {
  main1.style.display = "block";
  main2.style.display = "none";
}

function submiting() {

  if (!validation()) return false;
  else {
    student.push({
      id: id.value,
      fname: fname.value,
      lname: lname.value,
      gender: gender.value,
      dob: dob.value,
      phone: phone.value,
      class: class1.value,
      address: address.value
    });

      alert("data entered successfully");
    localStorage.setItem("student", JSON.stringify(student));

  }
  addingTable(student);
  resetting();
  adding();
}

function resetting() {
  id.value = "";
  fname.value = "";
  lname.value = "";
  gender.value = "";
  dob.value = "";
  phone.value = "";
  class1.value = "";
  address.value = "";
}

tbody.addEventListener("click", deleting);

function deleting(e) {
  console.log(e.target.parentElement.parentElement)
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you Sure"))
      localStorageDelete(e.target.parentElement.parentElement);
  }
  if (e.target.classList.contains("update"))
    updating(e.target.parentElement.parentElement);
}

function localStorageDelete(tr) {
  let classs = tr.children[7];
  let student_id = tr.children[1];
  if (student_delete(student_id)) {
    class_delete(classs, student_id);
    tr.remove();
  }
}

function student_delete(id) {
  student.forEach((person, index) => {
    if (id.textContent === person.id) student.splice(index, 1);
  });
  localStorage.setItem("student", JSON.stringify(student));
  return true;
}

function class_delete(classs, student_id) {
  if (localStorage.getItem(`${classs.textContent}`)) {
    let clas = JSON.parse(localStorage.getItem(`${classs.textContent}`));
    if (clas.length === "") {
      localStorage.removeItem(`${classs.textContent}`);
    } else {
      clas.forEach((person, index) => {
        if (student_id.textContent === person.id) clas.splice(index, 1);
      });
      localStorage.setItem(`${classs.textContent}`, JSON.stringify(clas));
    }
  }
}

function changing(){
  let student = JSON.parse(localStorage.getItem('student'))
  student.forEach((element)=>{

    if(element.id === id.value){
        element.id = id.value,
        element.fname = fname.value,
        element.lname = lname.value,
        element.gender = gender.value,
        element.dob = dob.value,
        element.phone = phone.value,
        element.class = class1.value,
        element.address = address.value
       } 
  })
  localStorage.setItem('student',JSON.stringify(student));

  alert("Updated Successfully")
  updateLogin(id.value,fname.value)
  location.reload();
}


function updating(tr) {
  main1.style.display = "none";
  main2.style.display = "block";
  submit.style.display = "none";
  id.value = tr.cells[1].textContent;
  fname.value = tr.cells[2].textContent;
  lname.value = tr.cells[3].textContent;
  gender.value = tr.cells[4].textContent;
  dob.value = tr.cells[5].textContent;
  phone.value = tr.cells[6].textContent;
  class1.value = tr.cells[7].textContent;
  address.value = tr.cells[8].textContent;  
}

function addingTable(student_data) {
  let data = "";
  let count = 1;
  for (let person of student_data) {
    data += `<tr><td>${count++}</td><td>${person.id}</td><td>${
      person.fname
    }</td><td>${person.lname}</td><td>${person.gender}</td><td>${
      person.dob
    }</td><td>${person.phone}</td><td>${person.class}</td><td>${
      person.address
    }</td<td class="td"><i class="fa-solid fa-user-pen update"></i><i class="fa-solid fa-trash delete"></i></td></tr>`;
  }
  tbody.innerHTML = data;
}

function validation() {
  let cphone = /[0-9]{10}/;
  let cid = /[\d+]{4,8}/;
  if (
    id.value === "" ||
    phone.value === "" ||
    dob.value === "" ||
    class1.value === "" ||
    address.value === "" ||
    lname.value === "" ||
    fname.value === "" ||
    gender.value === ""
  ) {
    alert("Plz Fill all The data");
    return false;
  }
  if (!cphone.test(phone.value)) {
    alert("plz enter valid phone number");
    return false;
  }
  if (!cid.test(id.value)) {
    alert("plz enter valid id");
    return false;
  }
  if(!login()){
    alert("Id Aleady Exist")
  return false;
  }
  return true;
}

function login(){
  let login = localStorage.getItem("login")?JSON.parse(localStorage.getItem("login")):[];

login.push({
  "username" : id.value,
  "password" : fname.value
})
localStorage.setItem('login',JSON.stringify(login))
return true

}

function updateLogin(id,fname) {
  let login = JSON.parse(localStorage.getItem("login"))
  let data = login.map(element=>{
         if(element.username === id){
          element.username = id,
          element.password = fname
         }
         return element
  })
  localStorage.setItem('login',JSON.stringify(data))
}