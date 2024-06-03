const { Router } = require("express");
const router = Router();
const controller = require("../controller/pokemonController");
router.get("/:id", controller.pokemonGet);

module.exports = router;
