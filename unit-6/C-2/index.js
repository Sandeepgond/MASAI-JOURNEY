const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./models/User.model");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let blacklist = [];
const transportmail = nodemailer.createTransport({
  host: "smtp.ethereal.email", //giles.green81@ethereal.email
  port: 587, //N9eP1ndYXwMPUUY8Mp
  //   secure: true,
  auth:{
    user: "deondre.abernathy@ethereal.email",
    pass: "842Tff8MzGqSzV47E5",
  },
});

// signup route///
app.post("/signup", async (req, res) => {
  const {name, email, password, age } = req.body;
  //   console.log(email, password, age);
  const user = new UserModel({name, email, password, age, role: "Guests" });
  await user.save();
  return res.status(201).send("User created successfully")
});

//login route///
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email, password });
  if (!user) {
    return res.status(401).send("Invalid credential");
  }
  const primaryToken = jwt.sign(
    { id: user._id, email: user.email, age: user.age },
    "JWT1234",
    { expiresIn: "5 minutes"}
  );
  const refreshToken = jwt.sign(
    { id: user._id, email: user.email, age: user.age },
    "REFRESH1234"
  );
  if (user.role === "HR") {
    return res.send({ type: "You are HR", primaryToken, refreshToken });
  } else if (user.role === "Employee") {
    return res.send({ type: "you are employee", primaryToken, refreshToken });
  } else {
    return res.send({ type: "you are Guest", primaryToken, refreshToken });
  }
});

//reset password route//
app.post("/reset-password", async (req, res) => {
  const { email, newPassword, otp } = req.body;

  console.log(otp);
  if (otps[email] === otp) {
    const user = await UserModel.findOneAndUpdate(
      { email: email },
      { password: newPassword }
    );
    return res.send("new password updated successfully");
  }
  return res.send("invalid OTP");
});

//get data through id //
app.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const primaryToken = req.headers["authorization"];
  if (blacklist.includes(primaryToken)) {
    return res.status(401)
  }
  if (!primaryToken) {
    return res.status(401).send("Unauthorized");
  }
  try {
    const verification = jwt.verify(primaryToken, "JWT1234");
    console.log("verification", verification);
    const user = await UserModel.findById(id);
    console.log(user);
    return res.status(200).send(user);
  } 
  catch (e) {
    console.log(e.message);
    if (e.message === "jwt expired") {
      blacklist.push(primaryToken);
      console.log(blacklist);
    }
    return res.status(401).send("Token in invalid");
  }
});

//verify the primaryToken //
app.post("/verify", async (req, res) => {
  const refreshToken = req.headers.authorization;
  try {
    const data = jwt.verify(refreshToken, "REFRESH1234");
    const Token = getToken(data);
    return res.send({ primaryToken: Token });
  } catch (e) {
    console.log(e.message);
    return res.send("Refresh is primaryToken in invalid");
  }
});
const getToken = (data) => {
  return jwt.sign(data, "JWT1234", { expiresIn: "7 days" });
};

const otps = {};

app.post("/forget", async (req, res) => {
  const { email } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000);

  otps[email] = otp;

  transportmail
    .sendMail({
      to: email,
      from: "hello@gmail.com",
      subject: "OTP sent",
      text: `Hello ${email},your Otp is ${otp}`,
    })
    .then(() => {
      res.send("OTP sent Successfully");
    });
});

//loggging out that primaryToken and blacklist that //
app.post("/logout", (req, res) => {
  const primaryToken = req.headers.authorization;
  blacklist.push(primaryToken);
});

mongoose.connect("mongodb://localhost:27017/eval2").then(() =>
  app.listen(8080, ()=>{
    console.log("server started at port 8080");
  })
);
