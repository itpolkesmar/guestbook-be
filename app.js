// import user from "./routes/user/user.js";
// const express = require('express')
// const user = require('./routes/user/user')
import express from "express";
import pkg from "cors";
import morgan from "morgan";
import route from "./index.js";
const app = express();
const cors = pkg;

app.use(morgan("dev"));

var corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use("/", route);
app.get("/", async (req, res) => {
  res.send("ngapain kau hah?");
});

app.listen(5000, () =>
  console.log(`
🚀 Server ready at: http://localhost:5000
⭐️ See sample requests: http://pris.ly/e/js/rest-express#3-using-the-rest-api`)
);
