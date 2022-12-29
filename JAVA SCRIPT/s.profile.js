let username = sessionStorage.getItem("stu_username");
let password = sessionStorage.getItem("stu_password");
let student = JSON.parse(localStorage.getItem("student"));
let div = document.querySelector(".main2");
var condition = false;
let data = "";
for (let person of student) {
  if ( username === person.id) {
    data += ` <table>
        <tbody>
            <tr>
                <th>ID</th>
                <td>${person.id}</td>
            </tr>
            <tr>
                <th>Name</th>
                <td>${person.fname+" "+person.lname}</td>
            </tr>
            <tr>
                <th>Gender</th>
                <td>${person.gender}</td>
            </tr>
            <tr>
                <th>DOB</th>
                <td>${person.dob}</td>
            </tr>
            <tr>
                <th>Phone</th>
                <td>${person.phone}</td>
            </tr>
            <tr>
                <th>Class</th>
                <td>${person.class}</td>
            </tr>
            <tr>
                <th>Address</th>
                <td>${person.address}</td>
            </tr>
          </tbody>
       </table>`;
  }
}
div.innerHTML = data;
