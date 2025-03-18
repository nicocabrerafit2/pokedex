document.addEventListener("DOMContentLoaded", async function () {
  console.log("Script cargado y DOMContentLoaded");

  const urlParams = new URLSearchParams(window.location.search);
  const searchTerm = urlParams.get("searchTerm");
  try {
          const response = await fetch(`/api/AllPokemon`);
          const data = await response.json();

          const pokemonListContainer = document.querySelector(".pokemon-list");
        const pokemonListHTML = data.payload;
      
    
    
        const resultFilter = searchTerm
          ? pokemonListHTML.filter(pokemon =>
              pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
          : pokemonListHTML;
        
        const filteredHTML = resultFilter
          .map(
            (pokemon) =>
              `<form class="pokemon-form" data-name="${pokemon.name}">
                 <button type="submit" class="btn btn-secondary">${pokemon.name}</button>
              </form>`
          )
          .join(" ");
        
        pokemonListContainer.innerHTML = filteredHTML;
        
      }
      catch(error)  {
        console.error("Error al llamar a la API alternativa:", error);
      };
  
  document.addEventListener("submit", function (event) {
    if (event.target.classList.contains("pokemon-form")) {
      event.preventDefault(); 

      const pokemonName = event.target.getAttribute("data-name");

      
      const url = new URL(window.location.origin + "/detail");
      url.searchParams.append("name", pokemonName);
      window.location.href = url;
    }
  });
});
