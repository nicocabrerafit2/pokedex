import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.render("home");
});
router.get("/detail", (req, res) => {
  const dataPokemon = req.data;
  res.render("pokemon", { dataPokemon });
});
router.get("/listPokemon", (req, res) => {
  res.render("listPokemon");
});
export default router;
