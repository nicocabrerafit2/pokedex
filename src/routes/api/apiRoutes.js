import { Router } from "express";
const router = Router();

import controller from "../../controller/api/apiController.js";

router.get("/", controller.home);
router.post("/", controller.getPokemon);

export default router;
