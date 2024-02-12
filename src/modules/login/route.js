import express from "express";
import {} from "module";
import controller from "./controller.js";

const router = express.Router();

router.post("/", controller.login);
router.post('/addLogin', controller.addLogin)

export default router;
