const { Router } = require('express');
const userController = require('../controllers/user_controller');
const router = Router();





router.get("/User", userController.getUserData);
router.post("/Signup", userController.registerUser);
router.post("/Login", userController.loginUser);
router.put("/Update", userController.updatepassword);
router.post("/verificationCode", userController.verificationCode);
router.post("/sendEmail", userController.sendEmail);





module.exports = router;