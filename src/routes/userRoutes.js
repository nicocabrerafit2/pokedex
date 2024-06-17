import { Router } from "express";
const router = Router();

import controller from "../controller/userController.js";

router.get("/register", controller.showFormRegister);
router.post("/register", controller.createUser);

router.get("/session", controller.showFormLogin);

router.post("/session", controller.loginUser);

export default router;
