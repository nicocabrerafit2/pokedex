import { Router } from "express";
const router = Router();

import controller from "../../controller/api/apiController.js";

router.get("/", controller.get);

export default router;
