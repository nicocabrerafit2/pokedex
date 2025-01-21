import pokemonService from "../../services/pokemonService.js";

const home = async (req, res) => {
  try {
    await res.render("home");
  } catch (error) {
    console.error("Error rendering home:", error);
    res.status(500).send("Internal Server Error");
  }
};

const pokemonDetail = async (req, res) => {
  try {
    const result = await pokemonService.getOnePokemon();
    res.status(200).render("pokemonDetail", result);
  } catch (error) {
    console.error("Error fetching Pokémon details:", error);
    res.status(500).send("Internal Server Error");
  }
};

export default {
  home,
  pokemonDetail,
};
