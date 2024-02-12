const { Router } = require('express');
const cartController = require('../controllers/payment_controller');
const router = Router();

router.get("/pay", cartController.payment);


module.exports = router;