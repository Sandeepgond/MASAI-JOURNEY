document.getElementById("form").addEventListener("submit",myfunction);
var arr=[]
  function myfunction(){
    event.preventDefault();
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;

    // console.log(name,email,password)

    var f1=new Sandeep(name,email,password)
    // console.log(f1)
    arr.push(f1)
    localStorage.setItem("users",JSON.stringify(arr))
  }

  function Sandeep(n,e,p){
    this.name=n;
    this.email=e;
    this.password=p;
  }