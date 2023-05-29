const { Router } = require('express');
const controller = require('../controller/envieController');

const router = Router();

router.get("/", controller.getEnv);
router.post("/", controller.addEnv);
router.get("/:id_env", controller.getEnvById);
router.put("/:id_env", controller.updateEnv);
router.delete("/:id_env", controller.removeEnv);

module.exports = router;