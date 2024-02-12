const { Router } = require('express');
const contactus_Controller = require('../controllers/contact_controller');
const router = Router();

router.post("/add_contact", contactus_Controller.add_contact_us);
router.get("/all_contact", contactus_Controller.all_contact_us);


module.exports = router;