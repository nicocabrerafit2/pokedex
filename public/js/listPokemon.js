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

// Este script se ejecuta cuando el DOM ha sido completamente cargado y está diseñado para gestionar la interacción del usuario con una lista dinámica de Pokémon:
// 1. Se utiliza 'DOMContentLoaded' para asegurarse de que el script se ejecute solo después de que el DOM esté completamente cargado, evitando errores relacionados con elementos no existentes.
// 2. URLSearchParams se usa para analizar los parámetros de la URL actual, recuperando 'searchTerm', si está presente, para habilitar búsquedas específicas por el nombre de un Pokémon.
// 3. La función principal realiza una solicitud a la API en el endpoint '/api/AllPokemon', que devuelve datos de Pokémon. Se valida la respuesta antes de procesarla para manejar errores de red o API de manera adecuada.
// 4. El contenedor '.pokemon-list' se selecciona solo una vez para mejorar el rendimiento, y la lista de Pokémon se filtra según 'searchTerm' (si existe) o se muestra completa.
// 5. Se genera HTML dinámico para cada Pokémon usando un mapeo iterativo y se inserta directamente en el contenedor mediante 'innerHTML'. Esto permite crear formularios interactivos con botones para cada Pokémon.
// 6. En caso de error durante la llamada a la API, se captura y se muestra en la consola para facilitar la depuración.
// 7. Un evento 'submit' es delegado al contenedor principal '.pokemon-list' para escuchar interacciones en todos los formularios de Pokémon. Este enfoque minimiza la cantidad de listeners y mejora el rendimiento.
// 8. Al enviar un formulario, se previene el comportamiento predeterminado y se obtiene el nombre del Pokémon desde un atributo 'data-name'. Luego, se construye una URL dinámica que incluye el nombre del Pokémon como parámetro y se redirige al usuario a '/detail'.
// 9. El diseño general optimiza el rendimiento al reducir interacciones innecesarias con el DOM y usa código moderno, legible y eficiente para gestionar datos dinámicos.
