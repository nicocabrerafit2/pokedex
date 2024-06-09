const { Router } = require("express");
const router = Router();
const controller = require("../controller/userController");

router.get("/register", controller.showFormRegister);
router.post("/register", controller.createUser);

router.get("/session", controller.showFormLogin);

router.post("/session", controller.loginUser);

module.exports = router;
