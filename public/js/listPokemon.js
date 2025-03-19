document.addEventListener("DOMContentLoaded", async function () {
  console.log("Script cargado y DOMContentLoaded");

  // Optimización: Usar variables constantes solo cuando son necesarias
  const urlParams = new URLSearchParams(window.location.search);
  const searchTerm = urlParams.get("searchTerm");

  try {
    const response = await fetch(`/api/AllPokemon`);
    
    // Validar si la respuesta es correcta
    if (!response.ok) {
      throw new Error(`Error en la respuesta: ${response.status}`);
    }
    
    const data = await response.json();

    // Almacenar la referencia al contenedor solo una vez
    const pokemonListContainer = document.querySelector(".pokemon-list");
    const pokemonListHTML = data.payload;

    // Filtrar resultados con búsqueda, si aplica
    const resultFilter = searchTerm
      ? pokemonListHTML.filter(pokemon =>
          pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : pokemonListHTML;

    // Generar el contenido HTML optimizado
    const filteredHTML = resultFilter
      .map(
        (pokemon) =>
          `<form class="pokemon-form" data-name="${pokemon.name}">
             <button type="submit" class="btn btn-secondary">${pokemon.name}</button>
           </form>`
      )
      .join("");

    // Insertar el contenido al DOM una sola vez
    pokemonListContainer.innerHTML = filteredHTML;

  } catch (error) {
    console.error("Error al llamar a la API:", error);
  }

  // Escuchar eventos de envío solo en el contenedor principal
  document.querySelector(".pokemon-list").addEventListener("submit", function (event) {
    if (event.target.classList.contains("pokemon-form")) {
      event.preventDefault();

      // Obtener el nombre del Pokémon desde el atributo data
      const pokemonName = event.target.getAttribute("data-name");

      // Construir la URL dinámicamente
      const url = new URL("/detail", window.location.origin);
      url.searchParams.append("name", pokemonName);

      // Redireccionar a la nueva URL
      window.location.href = url;
    }
  });
});
