const url=`https://grocery-masai.herokuapp.com/items`
     async function getData(){
          let res=await fetch(url) 
          let data=await res.json()
          console.log(data.data)
          append(data.data)
     }
     getData()

     function append(data){
      data.map(function(elem){
        let container=document.getElementById("groceries")
        let box=document.createElement("div")
        box.setAttribute("id","item")

        let image=document.createElement("img")
        image.src=elem.image
        let name=document.createElement("h2")
        name.innerText=elem.name
        let price=document.createElement("p")
        price.innerText=elem.price
        let btn=document.createElement("button")
        btn.innerText="Add To Cart"
        btn.setAttribute("class","add_to_cart")
        btn.addEventListener("click", function(){
          addItems(elem)
        })

        box.append(image,name,price,btn)
        container.append(box)
      })
     }
     var arr=[]
     function addItems(elem){
      arr.push(elem)
      localStorage.setItem("cart_items",JSON.stringify(arr))
      console.log(arr)
     }
     var cartdata=JSON.parse(localStorage.getItem("cart_items"));
     var total=cartdata.reduce(function(sum,elem){
        return sum+elem.price
     },0)
     console.log(total)

     if(elem.price>=total){
         var wallet=document.getElementById("wallet")
         wallet.innerText=700-total
     }
     else{
        alert("Insufficient balance")
     }


