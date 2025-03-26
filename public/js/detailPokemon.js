document.addEventListener("DOMContentLoaded", async function () {
  console.log("Script cargado y DOMContentLoaded");

  const urlParams = new URLSearchParams(window.location.search);
  const pokemonName = urlParams.get("name");

  if (pokemonName) {
    try {
      const response = await fetch(`/api/getOnePokemon?name=${pokemonName}`);

      if (!response.ok) {
        throw new Error(`Error en la respuesta: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      const pokemonData = window.DataPokemonDTO.dataPokemon(data.payload);

      const pokemonNameElement = document.querySelector(".title .pokemon-name");
      const pokemonImageElement = document.querySelector("img");
      const pokemonWeightElement = document.querySelector(".pokemon-weight");
      const pokemonHeightElement = document.querySelector(".pokemon-height");
      const pokemonTypeElement = document.querySelector(".pokemon-type");

      pokemonNameElement.innerText = pokemonData.Pokemon;
      pokemonImageElement.src = pokemonData.Imagen;
      pokemonImageElement.alt = `Imagen de ${pokemonData.Pokemon}`;
      pokemonWeightElement.innerText = pokemonData.Peso.toFixed(2);
      pokemonHeightElement.innerText = pokemonData.Altura;
      pokemonTypeElement.innerText = pokemonData.Tipo;
    } catch (error) {
      console.error("Error al obtener los detalles del Pokémon:", error);

      const errorMessageElement = document.querySelector(".error-message");
      if (errorMessageElement) {
        errorMessageElement.style.display = "block";
        errorMessageElement.innerText = "Hubo un problema al cargar los detalles del Pokémon.";
      }
    }
  }
});

// Este script maneja la carga dinámica de detalles de un Pokémon utilizando JavaScript y un API personalizado:
// 1. Se utiliza 'DOMContentLoaded' para asegurarse de que el código se ejecute solo después de que el DOM esté completamente cargado, evitando problemas con elementos no disponibles.
// 2. 'URLSearchParams' analiza los parámetros de la URL actual y extrae el valor del parámetro 'name', que representa el nombre del Pokémon seleccionado.
// 3. Si 'pokemonName' está presente, se realiza una solicitud a la API en el endpoint '/api/getOnePokemon', incluyendo el nombre como parámetro de consulta. Esto permite recuperar los detalles específicos del Pokémon.
// 4. La respuesta de la API se valida para garantizar que fue exitosa. En caso contrario, se lanza un error con el estado y el mensaje correspondiente.
// 5. Los datos JSON obtenidos se transforman mediante 'window.DataPokemonDTO.dataPokemon(data.payload)', lo que probablemente estructura o adapta los datos para su uso dentro de la aplicación.
// 6. Los elementos del DOM relacionados con los detalles del Pokémon (nombre, imagen, peso, altura, tipo) se seleccionan y actualizan dinámicamente con la información obtenida.
// 7. Si ocurre un error durante la solicitud o el procesamiento de datos, se registra en la consola para facilitar la depuración. Además, se muestra un mensaje de error en la interfaz si el elemento '.error-message' está presente.
// 8. Este diseño asegura una experiencia dinámica y funcional, permitiendo que los usuarios interactúen con detalles de Pokémon de manera eficiente mientras maneja errores de forma robusta.
