const express = require('express');
const router = express.Router();

const productController = require('../controllers/home_controller');







router.get('/hero', productController.hero);
router.get('/top', productController.top);
router.get('/get', productController.get);


module.exports = router;
