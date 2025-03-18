document.addEventListener("DOMContentLoaded", async function () {
  console.log("Script cargado y DOMContentLoaded");

  const urlParams = new URLSearchParams(window.location.search);
  const pokemonName = urlParams.get("name");

  if (pokemonName) {
    try {
      const response = await fetch(`/api/getOnePokemon?name=${pokemonName}`);
      const data = await response.json();

 
      const pokemonData = window.DataPokemonDTO.dataPokemon(data.payload);

      document.querySelector(".title .pokemon-name").innerText =
        pokemonData.Pokemon;
      document.querySelector("img").src = pokemonData.Imagen;
      document.querySelector("img").alt = `Imagen de ${pokemonData.Pokemon}`;
      document.querySelector(".pokemon-weight").innerText =
        pokemonData.Peso.toFixed(2);
      document.querySelector(".pokemon-height").innerText = pokemonData.Altura;
      document.querySelector(".pokemon-type").innerText = pokemonData.Tipo;
      document.querySelector(".pokemon-name").innerText = pokemonData.Pokemon;
    } catch (error) {
      console.error("Error al obtener los detalles del Pokémon:", error);
    }
  }
});
