import fetch from "node-fetch";

const getOnePokemon = async (req, res) => {
  try {
    const search = req.query.name;
    const url = `https://pokeapi.co/api/v2/pokemon/${search}`;

    const result = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "6gRIA9kmx49wQievzg4sF5KmcyLT0LEF8E73N2cQ",
      },
    });

    const pokemon = await result.json();
    res.send(pokemon);
  } catch (error) {
    console.error("Se produjo el siguiente error:", error);
    res.send(error);
  }
};
const getAllPokemon = async (req, res) => {
  try {
    const limit = 9999;
    const offset = parseInt(req.query.offset) || 0;
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

    const result = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "6gRIA9kmx49wQievzg4sF5KmcyLT0LEF8E73N2cQ",
      },
    });

    const allPokemon = await result.json();
    res.send(allPokemon.results);
  } catch (error) {
    console.error("Se produjo el siguiente error:", error);
    res.status(500).send(error);
  }
};
const searchOnePokemon = async (req, res) => {
  try {
    const allPokemon = getAllPokemon();

    const searchTerm = req.query.searchTerm;

    let arrayResult;

    if (!searchTerm || searchTerm.trim() === "") {
      arrayResult = allPokemon;
    } else {
      const searchByPartialName = (allPokemon, searchTerm) => {
        return allPokemon.filter((pokemon) =>
          pokemon.name.toLowerCase().startsWith(searchTerm.toLowerCase())
        );
      };
      arrayResult = searchByPartialName(allPokemon, searchTerm);
    }
    res, send(arrayResult);
  } catch (error) {
    console.error("Se produjo el siguiente error:", error.message);
    return res.status(500).send("Se produjo un error interno del servidor.");
  }
};

export default {
  getOnePokemon,
  getAllPokemon,
  searchOnePokemon,
};
