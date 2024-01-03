import express from "express"
import controller from "./controller.js"

const router = express.Router()

router.post('/addGuest', controller.addGuest)

export default router