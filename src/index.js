import express from "express"
const router = express.Router();
import guest from "./modules/guest/route.js"
import login from "./modules/login/route.js"
import admin from "./modules/admin/route.js"
import passport from "passport";

// const express = require("express");
// const guest = require("./modules/guest/route.js");

router.use("/guest", guest);
router.use("/admin", passport.authenticate("jwt", { session: false }), admin);
router.use('/login', login)

export default router
