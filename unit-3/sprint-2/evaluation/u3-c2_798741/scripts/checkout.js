document.querySelector("#form").addEventListener("submit", myFunction);

function myFunction(){
  event.preventDefault();
 // console.log("inside")
  var name = document.querySelector("#user_name").value;   
  var number = document.querySelector("#user_number").value;
  var address = document.querySelector("#user_address").value;
  //console.log(name,number,address);
  setTimeout(function(){
   alert("Your order is confirmed")
  },0)
  setTimeout(function(){
   alert("Your order is being Packed")
  },3000)
  setTimeout(function(){
   alert("Your order is being transit")
  },8000)
  setTimeout(function(){
   alert("Your order is out for delivery")
  },10000)
  setTimeout(function(){
   alert("Order delivered")
  },12000)
}