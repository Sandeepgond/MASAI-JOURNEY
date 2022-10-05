let main=async()=>{
    let query=document.getElementById("query").value;
      let url=`https://masai-mock-api.herokuapp.com/hotels/search?city=${query}`;
      let res=await fetch(url);
      let data=await res.json()
      append(data.hotels)
      console.log(data.hotels)
    
  }
  function append(data){
    data.map(function(elem){
      var box=document.createElement("div");
      box.setAttribute("id" ,"hotels")
      var image=document.createElement("img");
      image.src=elem.Images.one
      var name=document.createElement("h3");
      name.innerText=elem.Title
      var price=document.createElement("p");
      price.innerText=`Price- ${elem.Price}`;
      var rating=document.createElement("p");
      rating.innerText=`Rating- ${elem.Rating} `;
      var ac_status=document.createElement("p");
      ac_status.innerText=`Ac- ${elem.Ac}`
      var btn=document.createElement("button");
      btn.setAttribute("class","book")
      btn.innerText="book now"
      btn.addEventListener("click",function(){
        additems(elem)
      })
      box.append(image,name,price,rating,ac_status,btn)
      document.getElementById("hotels_list").append(box)

    })
  }
  var arr=[]
  function additems(elem){
    arr.push(elem)
    localStorage.setItem("checkout",JSON.stringify(arr))
  }