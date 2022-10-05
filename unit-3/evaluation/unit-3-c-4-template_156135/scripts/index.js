function nav(){
    return `
    <h3>News App</h3>
    <h3>Sign-Up</h3>
    <h3>
      <a href="/worldNews.html">World News</a>
    </h3>
  </div>`
}
export default nav

document.getElementById("form").addEventListener("submit",myFunction)
var Arr = JSON.parse(localStorage.getItem("user")) || [];
function myFunction(){
  event.preventDefault(); 
  var userObj = {
   name: form.user_name.value,
   email: form.user_email.value,
   country: form.search_box.value,
   image: form.user_pic.value,
  };
  Arr.push(userObj);
  console.log(Arr);
  localStorage.setItem("user", JSON.stringify(Arr));
  // window.location.href = "purchase.html";
  window.location.reload();
    
}














/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/
