let div1 = document.querySelector(".div1");
let div2 = document.querySelector(".div2");

function report() {
  div1.style.display = "block";
  div2.style.display = "none";
  let tbody = document.querySelector(".tbody");
  let thead = document.querySelector(".thead");
  let data = "";
  let th = `<tr><th>ID</th><th>NAME</th><th>CLASS</th><th>PRESENT CLASSES</th><th>ABSENT CLASSES</th><th>TOTAL CLASSES</th><th>PERCENTEGE</th></tr>`;
  thead.innerHTML = th;
  let details = JSON.parse(localStorage.getItem("student"));
  for (let student of details) {
    data += `<tr><td>${student.id}</td><td>${
      student.fname + " " + student.lname
    }</td><td>${student.class}</td>`;
    if (localStorage.getItem(`${student.class}`)) {
      let attendance = JSON.parse(localStorage.getItem(`${student.class}`));
      for (let class1 of attendance) {
        let count = 0;
        for (let check of attendance){
          if (check.id === student.id)
                 count++
        }
        if (class1.id === student.id) {
          let percentage = Math.round(
            (class1.present / (class1.present + class1.absent)) * 100
          );
          data += `<td>${class1.present}</td><td>${class1.absent}</td><td>${
            class1.absent + class1.present
          }</td><td>${percentage}%</td></tr>`;
        }
        if(count === 0)
          data += `<td>0</td><td>0</td><td>0</td><td>0%</td></tr>`
      }
    } else data += `<td>0</td><td>0</td><td>0</td><td>0%</td></tr>`;
  }
  tbody.innerHTML = data;
}

function bydate() {
  div2.style.display = "block";
  div1.style.display = "none";
  let tbody = document.querySelector(".tbody1");
  let thead = document.querySelector(".thead1");
  let date1 = document.querySelector("#date").value;
  let data = "";
  let th = `<tr><th>ID</th><th>NAME</th><th>CLASS</th><th>SUBJECT</th><th>ATTENDANCE</th><th>DATE</th></tr>`;
  thead.innerHTML = th;
  let details = JSON.parse(localStorage.getItem("total"));
  for (let date of details) {
    if (date.date === date1) {
      data += `<tr><td>${date.id}</td><td>${date.name}</td><td>${date.class}</td><td>${date.subject}</td><td>${date.attendance}</td><td>${date.date}</td></tr>`;
    }
  }
  tbody.innerHTML = data;
}
