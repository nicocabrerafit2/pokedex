const { Router } = require("express");
const router = Router();
const controller = require("../../controller/api/apiController");

router.get("/", controller.get);

module.exports = router;
