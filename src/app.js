// import user from "./routes/user/user.js";
// const express = require('express')
// const user = require('./routes/user/user')
import express from "express";
import pkg from "cors";
import morgan from "morgan";
import route from "./index.js";
import passport from "passport";
import bodyParser from "body-parser";
import "dotenv/config";
import "./modules/auth/auth.js";

const port = process.env.PORT || 5000;
const app = express();
const cors = pkg;

app.use(morgan("dev"));

var corsOptions = {
  origin: "https://guestbook-fe.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use("/", route, cors(corsOptions));
// Handle errors.
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

app.get("/", async (req, res) => {
  res.send("ngapain kau hah?");
});

app.listen(port, () =>
  console.log(`
🚀 Server ready at: http://localhost:${port}
⭐️ See sample requests: http://pris.ly/e/js/rest-express#3-using-the-rest-api`)
);
