// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js"

document.getElementById("navbar").innerHTML=navbar();

let country = "in";

let fetchData = async (country) => {
  let url = `https://masai-api.herokuapp.com/news/top-headlines?country=${country}`;
  let res = await fetch(url);
  let data = await res.json();
  append(data.articles);
  console.log(data);
};
fetchData(country);
let ind = document.getElementById("in");
ind.addEventListener("click", () => {
  fetchData(ind.id);
});

let us = document.getElementById("us");
us.addEventListener("click", () => {
  fetchData(us.id);
});

let uk = document.getElementById("uk");
uk.addEventListener("click", () => {
  fetchData(uk.id);
});
let ch = document.getElementById("ch");
ch.addEventListener("click", () => {
  fetchData(ch.id);
});
let nz = document.getElementById("nz");
nz.addEventListener("click", () => {
  fetchData(nz.id);
});

let append = (data) => {
  let app = document.getElementById("results");
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
  append(data.articles);
  console.log(data.articles);
};

let inp = document.getElementById("search_input");
inp.addEventListener("keydown", () => {
  searchFun(inp.value);
});

function storeData(el) {
  let data = el;
  localStorage.setItem("news", JSON.stringify(data));
  location.replace("news.html");
}

// let searchFun2 = async () => {
//   let url = `https://masai-api.herokuapp.com/news?tesla`;
// let res = await fetch(url);
// let data = await res.json();
// append(data.articles);
// console.log(data.articles);
// };

// let input = document.getElementById("search_input");
// input.addEventListener("keydown", () => {
// searchFun2(input.value);
// });

// function storeData(el) {
// let data = el;
// localStorage.setItem("news", JSON.stringify(data));
// location.replace("search.html");
// }