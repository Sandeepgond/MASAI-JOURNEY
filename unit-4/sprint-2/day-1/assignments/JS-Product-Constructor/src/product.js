function Product(name,brand,price,description,sold) {
  // Complete the constructor function
  this.name=name;
  this.brand=brand;
  this.price = price;
  this.description =description;
  this.sold=sold || false;
};

Product.prototype.changePrice=function(price){
 this.price=price;
}

Product.prototype.toggleStatus=function(sold){
if(this.sold)this.sold=false;
else this.sold=true;

}
const s1= new Product(true);
s1.toggleStatus=false;


export default Product;