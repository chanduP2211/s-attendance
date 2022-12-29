let div = document.querySelector(".div2");
let table = document.querySelector(".table");
let classname = document.querySelector("#input");
let tbody = document.querySelector(".tbody");
let date1 = document.querySelector("#date");
let password = sessionStorage.getItem("password");
let username = sessionStorage.getItem("username");

document.getElementById("b").addEventListener("click", fetching);
function fetching() {
  let student = JSON.parse(localStorage.getItem("student"));
  let details = "";
  for (let data of student) {
    if (classname.value === data.class) {
      details += `<tr><td class='td1'>${data.id}</td><td class='td2'>${
        data.fname + " " + data.lname
      }</td><td>${data.class}</td><td><input type="radio" name=${
        data.id
      } class="present" value='true'>Present<input type="radio" name=${
        data.id
      } class="absent" value='false'>Absent</td></tr>`;
    }
    tbody.innerHTML = details;
  }
}

function submiting(e) {
  for (let tr of tbody.children) {

    let student_id = tr.cells[0].textContent;
    let student_name = tr.cells[1].textContent;
    let classs = tr.cells[2].textContent;

    let value = document.forms["form"][`${student_id}`].value;
 
    let present = 0,
      absent = 0;

    let attendance = localStorage.getItem(`${classs}`)
      ? JSON.parse(localStorage.getItem(`${classs}`))
      : [];
    if (!(attendance.length === 0)) {
      for (let attend of attendance) {
        if (attend.id === student_id) {
          present = parseInt(attend.present);
          absent = parseInt(attend.absent);
        }
      }
    }
    let attend = "";
    if (value === "true") {
      present++;
      attend += "present";
    } else {
      absent++;
      attend += "absent";
    }
    let count = 0;
    for (let person of attendance) {
      if (person.id === student_id) {
        person.present = present;
        person.absent = absent;
        count++;
      }
    }
    if (count === 0) {
      attendance.push({
        id: student_id,
        present: present,
        absent: absent,
      });
    }

    localStorage.setItem(`${classs}`, JSON.stringify(attendance));
    let teacher = JSON.parse(localStorage.getItem("teacher"));
    let subject = JSON.parse(localStorage.getItem("subject"));
    let user = ''
    for (let teach of teacher) {
      if (username === teach.id) {
        for(let sub of subject){
          if(sub.teacher === teach.name)
            user = sub.subject;
        }
      }
    }

    let total = localStorage.getItem("total")
      ? JSON.parse(localStorage.getItem("total"))
      : [];
    total.push({
      id: student_id,
      name: student_name,
      class: classs,
      date: date1.value,
      attendance: attend,
      subject: user
    });
  
    localStorage.setItem("total", JSON.stringify(total));
  }
  alert('Attendance taken successfully')
}
