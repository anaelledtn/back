const { Router } = require('express');
const controller = require('../controller/favorisController');

const router = Router();

router.get("/", controller.getFav);
router.post("/", controller.addFav);
router.get("/:id_fav", controller.getFavById);
router.put("/:id_fav", controller.updateFav);
router.delete("/:id_fav", controller.removeFav);

module.exports = router;