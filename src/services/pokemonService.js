import fetch from "node-fetch";

const getOnePokemon = async (search) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${search}`;

    const result = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "6gRIA9kmx49wQievzg4sF5KmcyLT0LEF8E73N2cQ",
      },
    });

    const pokemon = await result.json();
    return pokemon;
  } catch (error) {
    console.error("Se produjo el siguiente error:", error);
    return new Error("Se produjo un error interno del servidor.");
  }
};
const getAllPokemon = async () => {
  try {
    const limit = 9999;
    const offset = 0;
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

    const result = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "6gRIA9kmx49wQievzg4sF5KmcyLT0LEF8E73N2cQ",
      },
    });

    const allPokemon = await result.json();

    return allPokemon.results;
  } catch (error) {
    console.error("Se produjo el siguiente error:", error);
    return new Error("Se produjo un error interno del servidor.");
  }
};
const searchOnePokemon = async (searchTerm) => {
  try {
    const allPokemon = await getAllPokemon();

    let arrayResult;
    const searchByPartialName = (allPokemon, searchTerm) => {
      return allPokemon.filter((pokemon) =>
        pokemon.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
    };
    arrayResult = searchByPartialName(allPokemon, searchTerm);

    return arrayResult;
  } catch (error) {
    console.error("Se produjo el siguiente error:", error);
    return new Error("Se produjo un error interno del servidor.");
  }
};

export default {
  getOnePokemon,
  getAllPokemon,
  searchOnePokemon,
};
