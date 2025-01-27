document.addEventListener("DOMContentLoaded", function () {
  console.log("Script cargado y DOMContentLoaded");

  // Obtener el término de búsqueda de la URL
  const urlParams = new URLSearchParams(window.location.search);
  const searchTerm = urlParams.get("searchTerm");
  console.log("Término de búsqueda en la URL:", searchTerm);

  if (searchTerm) {
    // Si hay un término de búsqueda, haz una solicitud fetch a la API
    console.log("Término de búsqueda recibido:", searchTerm);

    fetch(`/api/searchOnePokemon?searchTerm=${searchTerm}`)
      .then((response) => {
        console.log("Respuesta de la API de búsqueda recibida:", response);
        return response.json();
      })
      .then((data) => {
        // Maneja la respuesta aquí
        console.log("Datos recibidos de la API:", data);

        const pokemonListContainer = document.querySelector(".pokemon-list");
        pokemonListContainer.innerHTML = ""; // Limpiar la lista actual

        const pokemonListHTML = data.payload
          .map(
            (pokemon) =>
              `<a href="./api/getOnePokemon?name=${pokemon.name}">${pokemon.name}</a>`
          )
          .join("");

        pokemonListContainer.innerHTML = pokemonListHTML;
      })
      .catch((error) => {
        console.error("Error al llamar a la API:", error);
      });
  } else {
    // Si no hay término de búsqueda, haz una solicitud fetch a otra API
    console.log("No se recibió ningún término de búsqueda.");

    fetch(`/api/AllPokemon`)
      .then((response) => {
        console.log("Respuesta de la API alternativa recibida:", response);
        return response.json();
      })
      .then((data) => {
        // Maneja la respuesta aquí
        console.log("Datos recibidos de la API alternativa:", data);

        const pokemonListContainer = document.querySelector(".pokemon-list");
        pokemonListContainer.innerHTML = ""; // Limpiar la lista actual

        const pokemonListHTML = data.payload
          .map(
            (pokemon) =>
              `<a href="./api/getOnePokemon?name=${pokemon.name}">${pokemon.name}</a>`
          )
          .join("");

        pokemonListContainer.innerHTML = pokemonListHTML;
      })
      .catch((error) => {
        console.error("Error al llamar a la API alternativa:", error);
      });
  }
});
