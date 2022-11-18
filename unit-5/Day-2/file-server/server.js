const http = require("http");

const server = http.createServer((res, resp) => {
  if (res.url === "/") {
    resp.write("welcome Home page");
  } else if (res.url === "/public") {
    resp.write("<h1>Hello Public</h1>");
  } else if (res.url === "/public/other") {
    resp.write("<h1>Hello src</h1>");
  } else {
    resp.writeHead(404, {});
    resp.write(
      "Hmm...this page doesn’t exist. Try searching for something else."
    );
  }

  resp.end();
});

server.listen(8000, () => {
  console.log("starting server http://localhost:8000");
});