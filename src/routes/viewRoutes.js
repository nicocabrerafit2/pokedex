import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.render("home");
});
router.get("/detail", (req, res) => {
  res.render("pokemon");
});
router.get("/listPokemon", (req, res) => {
  res.render("listPokemon");
});
router.get("/searchOnePokemon", (req, res) => {
  const searchTerm = req.query.searchTerm;
  res.render("listPokemon", { searchTerm });
});
export default router;
