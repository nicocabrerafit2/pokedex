document.addEventListener("DOMContentLoaded", async function () {
  console.log("Script cargado y DOMContentLoaded");

  // Manejo del botón "Volver"
  const volverButton = document.getElementById("volver");
  if (volverButton) {
    volverButton.addEventListener("click", () => {
      window.history.back(); // Regresa a la página anterior en el historial del navegador
    });
  } else {
    console.warn("El botón con id 'volver' no se encontró en el DOM.");
  }

  // Manejo de los parámetros de la URL
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

      // Actualiza los elementos del DOM con la información del Pokémon
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

      // Muestra el mensaje de error en el DOM
      const errorMessageElement = document.querySelector(".error-message");
      if (errorMessageElement) {
        errorMessageElement.style.display = "block";
        errorMessageElement.innerText = "Hubo un problema al cargar los detalles del Pokémon.";
      }
    }
  } else {
    console.warn("No se proporcionó un nombre de Pokémon en los parámetros de la URL.");
  }
});
