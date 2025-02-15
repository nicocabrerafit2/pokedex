document.addEventListener("DOMContentLoaded", async function () {
  console.log("Script cargado y DOMContentLoaded");

  // Obtener el término de búsqueda de la URL
  const urlParams = new URLSearchParams(window.location.search);
  const pokemonName = urlParams.get("name");
  console.log("Nombre del Pokémon:", pokemonName);

  if (pokemonName) {
    try {
      const response = await fetch(`/api/getOnePokemon?name=${pokemonName}`);
      const data = await response.json();

      // Usar el DTO para estructurar los datos del Pokémon
      console.log("aca voyyyyyy", data.payload);

      const pokemonData = window.DataPokemonDTO.dataPokemon(data.payload);
      console.log("que es esto", pokemonData);

      // Aquí puedes actualizar la vista con los datos del Pokémon
      document.querySelector(".title .answer").innerText = pokemonData.Pokemon;
      document.querySelector("img").src = pokemonData.Imagen;
      document.querySelector("img").alt = `Imagen de ${pokemonData.Pokemon}`;
      document.querySelector(".container h1:nth-of-type(2) .answer").innerText =
        pokemonData.Peso.toFixed(2);
      document.querySelector(".container h1:nth-of-type(3) .answer").innerText =
        pokemonData.Altura;
      document.querySelector(".container h1:nth-of-type(4) .answer").innerText =
        pokemonData.Tipo;
      document.querySelector(".container h1:nth-of-type(5) .answer").innerText =
        pokemonData.Pokemon;
    } catch (error) {
      console.error("Error al obtener los detalles del Pokémon:", error);
    }
  }
});
