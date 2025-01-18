import { Router } from "express";
const router = Router();

import controller from "../../controller/api/apiController.js";

router.get("/", controller.home);
router.get("/getPokemon", controller.getPokemon);
router.get("/api", controller.searchOnePokemon);
router.get("/apiAllPokemon", controller.getAllPokemon);

export default router;
