let data=JSON.parse(localStorage.getItem("cart_items"))
let Total=data.reduce(function(sum,elem){
    return sum+elem.price
},0)

let cartTotal=document.getElementById("cart_total")
cartTotal.append(Total)

data.map(function(elem,index){
    let container=document.getElementById("cart")
    let box=document.createElement("div")
    box.setAttribute("id","item")

    let image=document.createElement("img")
    image.src=elem.image
    let name=document.createElement("h2")
    name.innerText=elem.name
    let price=document.createElement("p")
    price.innerText=elem.price
    let btn=document.createElement("button")
    btn.innerText="Remove"
    btn.setAttribute("class","remove")
    btn.addEventListener("click", function(){
      remove(elem,index)
    })

    box.append(image,name,price,btn)
    container.append(box)
  })
  function remove(elem,index){
    data.splice(index,1)
    localStorage.setItem("cart_items",JSON.stringify(data))
    window.location.reload()
  }