const express = require('express');
const router = express.Router();

const homeRoutes = require('./home_route');
const protducRoutes = require('./product_route');
const contactRoutes = require('./contact_routes');
const paymentRoutes = require('./payment_route');
const catalogRoutes = require('./catalog_routes');


// router.use('/users', userRoutes);
router.use('/protduc',protducRoutes);
router.use('/home',homeRoutes);
router.use('/contact',contactRoutes);
router.use('/payment',paymentRoutes);
router.use('/catalog',catalogRoutes);





module.exports = router;
