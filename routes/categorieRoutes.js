const { Router } = require('express');
const controller = require('../controller/categorieController');

const router = Router();

router.get("/", controller.getCat);
router.post("/", controller.addCat);
router.get("/:id_cat", controller.getCatById);
router.put("/:id_cat", controller.updateCat);
router.delete("/:id_cat", controller.removeCat);

module.exports = router;