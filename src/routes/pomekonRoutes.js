const { Router } = require("express");
const router = Router();
const controller = require("../controller/pokemonController");
router.get("/:id", controller.pokemonsShow);

module.exports = router;
