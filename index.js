// import express from "express"
// import guest from "./modules/guest/route.js"

const express = require("express");
const guest = require("./modules/guest/route.js");

const router = express.Router();

router.use("/guest", guest);

export default router;
