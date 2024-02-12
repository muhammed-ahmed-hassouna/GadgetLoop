const { Router } = require('express');
const catalog_controller = require('../controllers/catalog_controller');
const router = Router();

router.get("/getAllCatalog", catalog_controller.getAllCatalog);
router.post("/addCatalog", catalog_controller.addCatalog);
router.delete("/deleteCatalog", catalog_controller.deleteCatalog);
router.put("/updateCatalog", catalog_controller.updateCatalog);

module.exports = router;