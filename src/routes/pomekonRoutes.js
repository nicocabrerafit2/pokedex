import { Router } from "express";
const router = Router();

import controller from "../controller/pokemonController.js";
router.get("/:id", controller.pokemonsShow);

export default router;
