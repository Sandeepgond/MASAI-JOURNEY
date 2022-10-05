//store the product array in localstorage as "data"

document.querySelector("#product_form").addEventListener("submit", myfunction)
let arr=JSON.parse(localStorage.getItem("data"))||[];
function myfunction(){
    event.preventDefault();
    let obj={
        Brand:product_form.product_brand.value,
        Name:product_form.product_name.value,
        Price:product_form.product_price.value,
        Image:product_form.product_image.value,
        
    };

    arr.push(obj);
    console.log(arr)
    localStorage.setItem("data",JSON.stringify(arr))

}
