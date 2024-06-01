const express = require("express");
const router = express.Router();
const controller = require("../controller/pokemonController");
router.get("/:id", controller.pokemonGet);

module.exports = router;
