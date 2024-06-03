const { Router } = require("express");
const router = Router();
const controller = require("../controller/userController");

router.get("/register", controller.formRegisterGet);
router.post("/register", controller.formRegisterPost);

router.get("/session", controller.formSessionGet);

router.post("/session", controller.formSessionPost);

module.exports = router;
