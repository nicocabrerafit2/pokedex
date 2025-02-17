document.addEventListener("DOMContentLoaded", function () {
  console.log("Script cargado y DOMContentLoaded");

  // Obtener el término de búsqueda de la URL
  const urlParams = new URLSearchParams(window.location.search);
  const searchTerm = urlParams.get("searchTerm");
  

  if (searchTerm) {
    // Si hay un término de búsqueda, haz una solicitud fetch a la API
   

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
              `<form class="pokemon-form" data-name="${pokemon.name}">
                 <button type="submit" class="btn btn-secondary">${pokemon.name}</button>
              </form>`
          )
          .join("");

        pokemonListContainer.innerHTML = pokemonListHTML;
      })
      .catch((error) => {
        console.error("Error al llamar a la API:", error);
      });
  } else {
   

    fetch(`/api/AllPokemon`)
      .then((response) => {
       
        return response.json();
      })
      .then((data) => {
       
        const pokemonListContainer = document.querySelector(".pokemon-list");
        pokemonListContainer.innerHTML = ""; // Limpiar la lista actual

        const pokemonListHTML = data.payload
          .map(
            (pokemon) =>
              `<form class="pokemon-form" data-name="${pokemon.name}">
                 <button type="submit" class="btn btn-secondary">${pokemon.name}</button>
              </form>`
          )
          .join("");

        pokemonListContainer.innerHTML = pokemonListHTML;
      })
      .catch((error) => {
        console.error("Error al llamar a la API alternativa:", error);
      });
  }
  document.addEventListener("submit", function (event) {
    if (event.target.classList.contains("pokemon-form")) {
      event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

      const pokemonName = event.target.getAttribute("data-name");

      // Redirigir a la nueva vista con el nombre del Pokémon en la URL
      const url = new URL(window.location.origin + "/detail");
      url.searchParams.append("name", pokemonName);
      window.location.href = url;
    }
  });
});
