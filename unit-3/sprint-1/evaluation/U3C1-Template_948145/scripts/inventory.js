let arr=JSON.parse(localStorage.getItem("data"))||[];

arr.map(function(elem,index){
    let box=document.createElement("div");
    let p1=document.createElement("h2");
    p1.innerText=elem.Brand;
    p1.style.textAlign="center"
    let p2=document.createElement("p");
    p2.innerText=elem.Name;
    p2.style.textAlign="center"
    let p3=document.createElement("p");
    p3.innerText=elem.Price;
    p3.style.textAlign="center"
    let img=document.createElement("img");
    img.src=elem.Image;
    let btn=document.createElement("button");
    btn.innerText="Remove";
    btn.setAttribute="id","remove_product"
    btn.style.color="black"
    btn.style.marginLeft="41%"
    btn.style.textAlign="center"
    btn.style.cursor="pointer"
    btn.addEventListener("click",function(){
        remove_items(elem,index)
    })
    box.append(img,p1,p2,p3,btn)
    document.getElementById("products_data").append(box);
    
})
function remove_items(elem,index){
    arr.splice(index,1)
    localStorage.setItem("data",JSON.stringify(arr))
    window.location.reload()
}