const express = require('express');
const router = express.Router();

const productController = require('../controllers/product_controller');
const multer = require("multer");
const path = require("path");



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,'imeges'); // Adjust the destination folder as needed
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });


router.post('/add', upload.fields([
    { name: 'image' },
    { name: 'image2'},
    { name: 'image3' },
    { name: 'image4' }
  ]), productController.add);
  
router.get('/getall', productController.getall);
router.post('/getid', productController.getid);
router.put('/update', productController.update);
router.get('/mobile', productController.mobile);
router.get('/laptop', productController.laptop);
router.get('/screen', productController.screen);
router.get('/search', productController.search);
router.get('/watch', productController.watch);


module.exports = router;
