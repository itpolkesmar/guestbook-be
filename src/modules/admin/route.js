import express from "express"
import controller from "./controller.js"

const router = express.Router()

router.post('/addUser', controller.addUser)
router.get('/getUser', controller.getUser)
router.get('/getUser/:id', controller.getUserById)
router.put('/updateUser/:id', controller.updateUser)
router.delete('/delUser/:id', controller.deleteUser)
router.get('/getGuest', controller.getGuest)    // getAdmin
router.get('/getGuest/:id', controller.getGuestById)  // getGuestById
router.delete('/delGuest/:id', controller.deleteGuestById) // deleteGuestById


export default router