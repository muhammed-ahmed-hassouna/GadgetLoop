const express = require('express');
const router = express.Router();

const homeRoutes = require('./home_route');
const protducRoutes = require('./product_route');

// router.use('/users', userRoutes);
router.use('/protduc',protducRoutes);
router.use('/home',homeRoutes);



module.exports = router;
