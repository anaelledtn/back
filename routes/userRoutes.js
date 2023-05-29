const { Router } = require('express');
const controller = require('../controller/userController');

const router = Router();

router.get("/", controller.getUsers);
router.post("/", controller.addUser);
router.get("/:id_user", controller.getUserByEmail);
router.put("/", controller.connectUser);
router.delete("/:id_user", controller.removeUser);

module.exports = router;