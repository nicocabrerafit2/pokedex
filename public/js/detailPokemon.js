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
