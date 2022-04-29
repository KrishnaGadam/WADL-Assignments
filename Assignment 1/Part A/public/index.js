//  const signIn=e=>{
//     let data={
//       email:document.getElementById("floatingInput").value,
//       password:document.getElementById("floatingPassword").value
//     }
//     localStorage.setItem("formData",JSON.stringify(data));
//     console.log(localStorage.getItem("formData"));
//     //e.preventDefault(); 
//     alert();   
// }



$(document).ready(function () {
  $("#Submit").click(function () {
     $.post("/request",
        {
          email:document.getElementById("floatingInput").value,
          password: document.getElementById("floatingPassword").value
        },
        function (data, status) {
           console.log(data);
           
        });
    //alert(document.getElementById("floatingInput").value);
   
    
  });
});