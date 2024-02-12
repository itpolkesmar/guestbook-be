import express from "express"
const router = express.Router();
import guest from "./modules/guest/route.js"
import login from "./modules/login/route.js"
import admin from "./modules/admin/route.js"
import passport from "passport";
import cors from "cors";

// const express = require("express");
// const guest = require("./modules/guest/route.js");

var corsOptions = {
    origin: "https://guestbook-fe.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  };

router.use("/guest", cors(corsOptions), guest);
router.use("/admin", cors(corsOptions), passport.authenticate("jwt", { session: false }), admin);
router.use('/login', cors(corsOptions), login)

export default router
    