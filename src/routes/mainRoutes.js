const { Router } = require("express");
const router = Router();
const { controller } = require("../controller/mainController");

router.get("/", controller.home);

module.exports = router;
