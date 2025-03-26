import pokemonService from "../../services/pokemonService.js";

const getOnePokemon = async (req, res) => {
  try {
    const search = req.query.name;
    const result = await pokemonService.getOnePokemon(search);
    res.red;
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

// Este archivo define tres controladores asíncronos para manejar rutas de la API relacionadas con Pokémon:
// 1. 'getOnePokemon':
//    a. Obtiene el nombre del Pokémon desde los parámetros de consulta (req.query.name).
//    b. Llama al servicio 'pokemonService.getOnePokemon' para obtener detalles del Pokémon solicitado.
//    c. Devuelve una respuesta JSON con estado 200 que incluye un objeto de éxito y los datos obtenidos (payload). 
//    * Nota: Parece haber un error en 'res.red;', probablemente destinado a otra función como 'res.redirect' o puede ser una línea innecesaria.
//    d. En caso de error, lo registra en la consola y responde con un estado HTTP 500 ("Internal Server Error").
// 2. 'getAllPokemon':
//    a. Llama a 'pokemonService.getAllPokemon' para recuperar una lista de todos los Pokémon disponibles.
//    b. Devuelve una respuesta JSON con estado 200 que incluye un objeto de éxito y los datos obtenidos.
//    c. En caso de error, registra el fallo y envía una respuesta con estado HTTP 500.
// 3. 'searchOnePokemon':
//    a. Toma el término de búsqueda desde los parámetros de consulta (req.query.searchTerm).
//    b. Llama a 'pokemonService.searchOnePokemon' para buscar Pokémon que coincidan con el término dado.
//    c. Devuelve una respuesta JSON con estado 200 que incluye el resultado filtrado.
//    d. Maneja errores de manera similar a los otros controladores.
// 4. Todos los controladores tienen manejo de errores robusto y devuelven respuestas claras, mejorando la experiencia del cliente.
// 5. Los controladores se exportan como un objeto, permitiendo que sean utilizados en el enrutador de la aplicación de forma organizada y modular.
