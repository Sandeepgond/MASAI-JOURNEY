// Ude Import export (MANDATORY)
import navbar from "../components/navbar.js"

document.getElementById("navbar").innerHTML=navbar();


let getData = JSON.parse(localStorage.getItem("news"));

console.log(getData);
let append = (data) => {
  let app = document.getElementById("detailed_news");
  app.innerHTML = null;

  let div = document.createElement("div");

  let title = document.createElement("h2");
  title.innerText = data.title;
  title.addEventListener("click", () => {
    storeData(el);
  });
  let content = document.createElement("h4");
  content.innerText = data.content;
  let image = document.createElement("img");
  image.setAttribute("id","imagenews")
  image.src = data.urlToImage;
  let div2 = document.createElement("div");
  div2.classList = "text-deco";
  div2.append(title, content);
  div.append(image, div2);
  app.append(div);
};
append(getData);


let append2 = (data) => {
    let app = document.getElementById("detailed_news");
    app.innerHTML = null;
    data.forEach((el) => {
      let div = document.createElement("div");
      div.setAttribute("id","box")
      div.classList = "news";
      let title = document.createElement("h2");
      title.innerText = el.title;
      title.addEventListener("click", () => {
        storeData(el);
      });
      let description = document.createElement("p");
      description.innerText = el.description;
      let image = document.createElement("img");
      image.src = el.urlToImage;
      let div2 = document.createElement("div");
      div2.classList = "text-deco";
      div2.append(title, description);
      div.append(image, div2);
      app.append(div);
    });
  };


let searchFun = async (inp) => {
    let url = `https://masai-api.herokuapp.com/news?q=${inp}`;
    let res = await fetch(url);
    let data = await res.json();
    append2(data.articles);
    console.log(data.articles);
  };
  
  let inp = document.getElementById("search_input");
  inp.addEventListener("keydown", () => {
    searchFun(inp.value);
    console.log(inp.value)
  });