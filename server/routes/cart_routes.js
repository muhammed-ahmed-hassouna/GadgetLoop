const { Router } = require('express');
const cartController = require('../controllers/cart_controller');
const router = Router();





router.post("/cart", cartController.getCartData);
router.put("/delete_product", cartController.deleteCartItem);
router.post("/addcart", cartController.addCartItem);

module.exports = router;