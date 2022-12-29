let div2 = document.querySelector(".div2");
let tbody = document.querySelector("tbody");
let thead = document.querySelector("thead");
let username = sessionStorage.getItem("stu_username");
total();
function total() {
  div2.style.display = "block";
  let student = JSON.parse(localStorage.getItem("student"));
  let data1 = "";
  th = `<tr><th>ID</th><th>NAME</th><th>CLASS</th><th>PRESENT CLASSES</th><th>ABSENT CLASSES</th><th>TOTAL CLASSES</th><th>PERCENTEGE</th></tr>`;
  thead.innerHTML = th;
  for (let data of student) {
    if (data.id === username) {
      data1 += `<tr class='tr'><td>${data.id}</td><td>${data.fname+' '+data.lname}</td><td>${data.class}</td>`;
      if (localStorage.getItem(`${data.class}`)) {
        let attendance = JSON.parse(localStorage.getItem(`${data.class}`));
        for (let a of attendance) {
          if (a.id == data.id) {
            let percentage = Math.round(
              (a.present / (a.present + a.absent)) * 100
            );
            data1 += `<td>${a.present}</td><td>${a.absent}</td><td>${
              a.absent + a.present
            }</td><td class='p'>${percentage}%</td></tr>`;
          }
        }
      } else data += `<td>0</td><td>0</td><td>0</td><td class='p'>0</td></tr>`;
      break;
    }
  }
  tbody.innerHTML = data1;
  colors();
}
function colors() {
  for (let tr of tbody.children) {
    let str = tr.children[6].textContent;
    let str1 = str.substring(0, str.length - 1);
    if (parseInt(str1) < 50) {
      tr.setAttribute("style", "background-color:red;");
    } else if (parseInt(str1) < 75) {
      tr.setAttribute("style", "background-color:yellow;");
    } else tr.setAttribute("style", "background-color:green;");
  }
}
