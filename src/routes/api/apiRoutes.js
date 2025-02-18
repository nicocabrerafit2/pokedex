import { Router } from "express";
const router = Router();

import apiController from "../../controller/api/apiController.js";

router.get("/getOnePokemon", apiController.getOnePokemon);
router.get("/AllPokemon", apiController.getAllPokemon);

export default router;
