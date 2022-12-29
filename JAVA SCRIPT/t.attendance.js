let table = document.queryCommandValue("table");
let tbody = document.querySelector("tbody");
let thead = document.querySelector("thead");
let div = document.querySelector(".div1");
report();
function report() {
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
        if (class1.id === student.id) {
          let percentage = Math.round(
            (class1.present / (class1.present + class1.absent)) * 100
          );
          data += `<td>${class1.present}</td><td>${class1.absent}</td><td>${
            class1.absent + class1.present
          }</td><td>${percentage}%</td></tr>`;
        } 
      }
    } else data += `<td>0</td><td>0</td><td>0</td><td>0%</td></tr>`;
  }
  tbody.innerHTML = data;
}