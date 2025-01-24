import pokemonService from "../../services/pokemonService.js";

const getOnePokemon = async (req, res) => {
  try {
    const search = req.query.name;
    const result = await pokemonService.getOnePokemon(search);
    res.status(200).json({ status: "success", payload: result });
  } catch (error) {
    console.error("Error fetching Pokémon details:", error);
    res.status(500).send("Internal Server Error");
  }
};
const getAllPokemon = async (req, res) => {
  try {
    const result = await pokemonService.getAllPokemon();
    res.status(200).json({ status: "success", payload: result });
  } catch (error) {
    console.error("Error fetching getAllPokemon:", error);
    res.status(500).send("Internal Server Error");
  }
};
const searchOnePokemon = async (req, res) => {
  try {
    const searchTerm = req.query.searchTerm;
    const result = await pokemonService.searchOnePokemon(searchTerm);
    res.status(200).json({ status: "success", payload: result });
  } catch (error) {
    console.error("Error fetching searchOnePokemon:", error);
    res.status(500).send("Internal Server Error");
  }
};

export default {
  getOnePokemon,
  getAllPokemon,
  searchOnePokemon,
};
