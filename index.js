import express from "express"
const router = express.Router();
import guest from "./modules/guest/route.js"

// const express = require("express");
// const guest = require("./modules/guest/route.js");



router.use("/guest", guest);

export default router
