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

// Este archivo define dos controladores asíncronos para manejar solicitudes HTTP relacionadas con la aplicación de Pokémon:
// 1. Se importa 'pokemonService' desde un módulo externo, que probablemente contiene la lógica para interactuar con los datos de Pokémon, como consumir una API externa.
// 2. El controlador 'home' realiza lo siguiente:
//    a. Intenta renderizar la vista "home" usando 'res.render("home")', probablemente para mostrar la página principal de la aplicación.
//    b. Si ocurre un error, registra el fallo en la consola y responde con un estado HTTP 500 ("Internal Server Error"), indicando que hubo un problema del lado del servidor.
// 3. El controlador 'pokemonDetail' maneja los detalles de un Pokémon seleccionado:
//    a. Llama a 'pokemonService.getOnePokemon()' para obtener los datos específicos del Pokémon.
//    b. Si la solicitud es exitosa, los datos se renderizan en la vista "pokemonDetail" con un estado HTTP 200.
//    c. Si ocurre un error en el proceso, este se registra en la consola, y el servidor responde con un estado HTTP 500 junto con un mensaje de error.
// 4. Ambos controladores están diseñados con manejo de errores para garantizar que cualquier problema sea registrado y que el cliente reciba una respuesta adecuada.
// 5. Al final, los controladores se exportan como un objeto para ser utilizados en otras partes de la aplicación, manteniendo la lógica modular y bien estructurada.
