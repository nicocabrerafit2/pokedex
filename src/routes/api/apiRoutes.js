import { Router } from "express";
const router = Router();

import controller from "../../controller/api/apiController.js";

router.get("/", controller.home);
router.get("/api", controller.getPokemon);

export default router;
