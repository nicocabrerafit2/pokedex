import { Router } from "express";
const router = Router();

import apiController from "../../controller/api/apiController.js";
import viewsController from "../../controller/views/viewsController.js";

router.get("/", viewsController.home);
router.get("/pokemonDetail", viewsController.pokemonDetail);

router.get("/getOnePokemon", apiController.getOnePokemon);
router.get("/api", apiController.searchOnePokemon);
router.get("/apiAllPokemon", apiController.getAllPokemon);

export default router;
