const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const nodemailer=require("nodemailer")

const emailUser="giles.green81@ethereal.email"
const emailPass="N9eP1ndYXwMPUUY8Mp"
const app = express();
const memory = [];
const server = http.createServer(app);
const io = new Server(server);

const transport = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth:{
    user: emailUser,
    pass: emailPass,
  },
});

io.on("connection", (socket) => {
  socket.on("memory", (data) => {
    memory.push(data);
    data=Number(data)
    transport.sendMail({
      to:"user@gmail.com",
      from:"sandeepgond13@gmail.com",
      subject:"purchase successful",
      html:`Your purchase of amount:${data} is successful. total balance is:${Number(data + data)}`
      })
    console.log(memory);
  });
});

setInterval(() => {
  const AValue = Math.floor(Math.random() * 100);
  const BValue = Math.floor(Math.random() * 100);
  const Cvalue = Math.floor(Math.random() * 100);
  io.emit("currencyA", AValue);
  io.emit("currencyB", BValue);
  io.emit("currencyC", Cvalue);
},1000);

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

server.listen(8080, () => {
  console.log("server started on port 8080");
});
