const { Router } = require('express');
const userController = require('../controllers/user_controller');
const router = Router();


// const verifyJWT = require("./Midlleware/verifyJWT");



router.get("/User", userController.getUserData);
router.post("/Signup", userController.registerUser);
router.post("/Login", userController.loginUser);
router.put("/Update", userController.updatepassword);


module.exports = router;