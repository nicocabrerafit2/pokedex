import { Router } from "express";
const router = Router();

import controller from "../controller/mainController.js";

router.get("/", controller.home);

export default router;
