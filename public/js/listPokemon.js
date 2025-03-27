document.addEventListener("DOMContentLoaded", async function () {
  console.log("Script cargado y DOMContentLoaded");

  // Manejo del botón "Volver al inicio"
  const volverButton = document.getElementById("volver");
  if (volverButton) {
    volverButton.addEventListener("click", () => {
      window.location.href = "/"; // Redirige a la página principal
    });
  } else {
    console.warn("El botón con id 'volver' no se encontró en el DOM.");
  }

  // Manejo de los parámetros de búsqueda en la URL
  const urlParams = new URLSearchParams(window.location.search);
  const searchTerm = urlParams.get("searchTerm");

  try {
    const response = await fetch("/api/AllPokemon");
    console.log(`Respuesta de la API recibida: ${response.status}`);

    // Validar si la respuesta es correcta
    if (!response.ok) {
      throw new Error(`Error en la respuesta: ${response.status}`);
    }

    const data = await response.json();
    console.log("Datos obtenidos de la API:", data);

    if (!data.payload) {
      throw new Error("El objeto de respuesta no contiene la propiedad 'payload'.");
    }

    // Obtener la referencia al contenedor de la lista de Pokémon
    const pokemonListContainer = document.querySelector(".pokemon-list");
    const pokemonListHTML = data.payload;

    // Filtrar resultados con búsqueda, si aplica
    const resultFilter = searchTerm
      ? pokemonListHTML.filter(pokemon =>
          pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : pokemonListHTML;

    // Generar el contenido HTML dinámico
    const filteredHTML = resultFilter
      .map(
        (pokemon) =>
          `<form class="pokemon-form" data-name="${pokemon.name}">
             <button type="submit" class="btn btn-secondary">${pokemon.name}</button>
           </form>`
      )
      .join("");

    // Insertar el contenido en el contenedor del DOM
    pokemonListContainer.innerHTML = filteredHTML;

  } catch (error) {
    console.error("Error al llamar a la API:", error);

    // Mostrar mensaje de error si ocurre un problema
    const resultsContainer = document.getElementById("results");
    if (resultsContainer) {
      resultsContainer.style.color = "red";
      resultsContainer.innerText = "Hubo un problema al cargar la lista de Pokémon.";
    }
  }

  // Delegar eventos de envío en el contenedor principal
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
