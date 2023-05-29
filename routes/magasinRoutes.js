const { Router } = require('express');
const controller = require('../controller/magasinController');

const router = Router();

router.get("/", controller.getMag);
router.post("/", controller.addMag);
router.get("/:id_mag", controller.getMagById);
router.put("/:id_mag", controller.updateMag);
router.delete("/:id_mag", controller.removeMag);

module.exports = router;