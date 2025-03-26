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

// Este archivo implementa dos funciones para interactuar con la API de Pokémon (pokeapi.co):
// 1. Se importa 'node-fetch' para realizar solicitudes HTTP y 'dotenv' para cargar variables de entorno desde un archivo .env.
// 2. dotenv.config() asegura que las variables de entorno como API_KEY estén disponibles, proporcionando una forma segura y flexible de manejar configuraciones sensibles.
// 3. La función 'getOnePokemon' toma un parámetro 'search' (nombre o ID del Pokémon) y realiza una solicitud GET a la API para obtener detalles específicos del Pokémon. Se incluye un encabezado "x-api-key" con la clave de API, que puede ser requerida por el servicio.
// 4. Los datos JSON obtenidos de la API se procesan y devuelven. En caso de error, se captura el fallo y se registra en la consola, devolviendo un mensaje de error personalizado.
// 5. La función 'getAllPokemon' realiza una solicitud GET a la API para obtener una lista completa de Pokémon, con parámetros como 'limit' y 'offset' para controlar el alcance de los resultados.
// 6. Si se proporciona un término de búsqueda ('searchTerm'), filtra los resultados por nombre usando un filtro case-insensitive. Si no, devuelve todos los Pokémon encontrados.
// 7. Ambas funciones están diseñadas para ser asíncronas, utilizando 'await' para simplificar la gestión de promesas y asegurar un código más legible.
// 8. Finalmente, se exporta un objeto que contiene las dos funciones, permitiendo que otros módulos las usen para realizar operaciones relacionadas con Pokémon.
