let username = sessionStorage.getItem("username");
let password = sessionStorage.getItem("password");
let teacher = JSON.parse(localStorage.getItem("teacher"));
let div = document.querySelector(".main2");
let data = "";
for (var details of teacher) {
  if (username === details.id) {
    data += ` <table>
              <tbody>
                 <tr>
                     <th>ID</th>
                     <td>${details.id}</td>
                 </tr>
                 <tr>
                     <th>Name</th>
                     <td>${details.name}</td>
                 </tr>
                 <tr>
                     <th>Gender</th>
                     <td>${details.gender}</td>
                 </tr>
                 <tr>
                     <th>Email</th>
                     <td>${details.email}</td>
               </tr>
                 <tr>
                     <th>Phone</th>
                     <td>${details.phone}</td>
                 </tr>
                 <tr>
                     <th>Degree</th>
                     <td>${details.degree}</td>
                 </tr>
                 <tr>
                     <th>Subject</th>
                     <td>${details.subject}</td>
                 </tr>
                 <tr>
                      <th>Address</th>
                     <td>${details.address}</td>
                 </tr>
             </tbody>
         </table>`;
  }
}
div.innerHTML = data;
