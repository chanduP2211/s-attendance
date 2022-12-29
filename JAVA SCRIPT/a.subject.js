let main1 = document.querySelector(".main1");
let main2 = document.querySelector(".main2");
let subject_name = document.querySelector("#id");
let teacher_name = document.querySelector("#name");
let tbody = document.querySelector(".tbody");
let update = document.querySelector(".up")
let submit = document.querySelector(".submit")


if (localStorage.getItem("subject")) {
  let subject = JSON.parse(localStorage.getItem("subject"));
  let data = "";
  let count = 0;
  for (let sub of subject) {
    data += `<tr><td>${++count}</td><td>${sub.subject}</td><td>${
      sub.teacher
    }</td><td class="td"><i class="fa-solid fa-user-pen update"></i><i class="fa-solid fa-trash delete"></i></td></tr>`;
  }
  tbody.innerHTML = data;
}

let subject = localStorage.getItem("subject")
  ? JSON.parse(localStorage.getItem("subject"))
  : [];
tbody.addEventListener("click", deleting);

function submiting() {
  if (validation(subject_name, teacher_name)) {
    subject.push({
      subject: subject_name.value,
      teacher: teacher_name.value,
    });
    localStorage.setItem("subject", JSON.stringify(subject));
   alert("Data Entered Successfully")
  }
  addingTable();
  resetting()
  closing()
}

function resetting() {
  subject_name.value = "";
  teacher_name.value = "";
}

function inserting() {
  update.style.display = "none";
  submit.style.display = "block";
  main1.style.display = "none";
  main2.style.display = "block";
}

function closing() {
  main1.style.display = "block";
  main2.style.display = "none";
}

function deleting(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you Sure"))
      localStorageDelete(e.target.parentElement.parentElement);
  }

  if (e.target.classList.contains("update")) {
    updating(e.target.parentElement.parentElement);
  }
}

function localStorageDelete(tr) {
  let sub_name = tr.children[1];
  subject.forEach((task, index) => {
    if (sub_name.textContent === task.subject) subject.splice(index, 1);
  });
  tr.remove();
  localStorage.setItem("subject", JSON.stringify(subject));
}


function changing(){
  let subject = JSON.parse(localStorage.getItem('subject'))
  subject.forEach((element)=>{

    if(element.subject ===  subject_name.value){
       element.teacher =  teacher_name.value ;
       } 
  })
  localStorage.setItem('subject',JSON.stringify(subject));
  alert("Updated Successfully")
  location.reload();
 
}


function updating(tr) {
  submit.style.display = "none";
  update.style.display = "block";
  main1.style.display = "none";
  main2.style.display = "block";
  subject_name.value = tr.cells[1].textContent;
  teacher_name.value = tr.cells[2].textContent;
}

function validation(subject_name, teacher_name) {
  if (subject_name.value === "" || teacher_name.value === "") {
    alert("Plz Fill All data");
    return false;
  }
  if (localStorage.getItem("subject")) {
    for (let check of subject) {
      if (subject_name.value === check.subject) {
        alert("already entered");
        return false;
      }
    }
  }
  return true;
}

function addingTable() {
  let data = "";
  let count = 0;
  for (let check of subject) {
    data += `<tr><td>${++count}</td><td>${check.subject}</td><td>${
      check.teacher
    }</td><td class="td"><i class="fa-solid fa-user-pen update"></i><i class="fa-solid fa-trash delete"></i></td></tr>`;
  }
  tbody.innerHTML = data;
}
