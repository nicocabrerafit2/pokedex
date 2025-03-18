import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const getOnePokemon = async (search) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${search}`;

    const result = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.API_KEY,
      },
    });

    const pokemon = await result.json();
    return pokemon;
  } catch (error) {
    console.error("Se produjo el siguiente error:", error);
    return new Error("Se produjo un error interno del servidor.");
  }
};
const getAllPokemon = async (searchTerm) => {
  try {
    const limit = 9999;
    const offset = 0;
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

    const result = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.API_KEY,
      },
    });

    const allPokemon = await result.json();
    if (searchTerm) {
      const result = allPokemon.results.filter((pokemon) =>
        pokemon.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
      return result;
    } else {
      return allPokemon.results;
    }
  } catch (error) {
    return new Error("Se produjo un error interno del servidor.");
  }
};

export default {
  getOnePokemon,
  getAllPokemon,
};
