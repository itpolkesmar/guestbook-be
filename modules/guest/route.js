import express from "express"
import controller from "./controller.js"

// const express = require("express");
// const constroller = require("./controller");

const router = express.Router()

router.post('/addGuest', controller.addGuest)

export default router