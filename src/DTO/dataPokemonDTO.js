class DataPokemonDTO {
  static dataPokemon(pokemon) {
    return {
      Pokemon: pokemon.name,
      Peso: pokemon.weight / 10,
      Altura: pokemon.height * 10,
      Tipo: pokemon.types[0].type.name,
      Imagen: pokemon.sprites.front_default,
    };
  }
}

window.DataPokemonDTO = DataPokemonDTO;

// Este código define la clase 'DataPokemonDTO', que sirve como un adaptador para estructurar los datos de un Pokémon en un formato específico:
// 1. 'dataPokemon' es un método estático de la clase, lo que significa que puede ser llamado directamente desde la clase sin necesidad de instanciarla.
// 2. El método 'dataPokemon' toma como argumento un objeto 'pokemon' que contiene información del Pokémon obtenida de la API.
// 3. El método devuelve un nuevo objeto con las siguientes propiedades procesadas:
//    a. 'Pokemon': el nombre del Pokémon, tomado directamente de la propiedad 'name'.
//    b. 'Peso': el peso del Pokémon convertido a kilogramos (originalmente en hectogramos).
//    c. 'Altura': la altura del Pokémon convertida a centímetros (originalmente en decímetros).
//    d. 'Tipo': el nombre del primer tipo del Pokémon, obtenido desde 'types[0].type.name'.
//    e. 'Imagen': la URL de la imagen frontal del Pokémon, tomada de 'sprites.front_default'.
// 4. La clase está asignada a 'window.DataPokemonDTO', lo que la hace accesible globalmente en el navegador. Esto permite que otros scripts interactúen con este adaptador para procesar datos de Pokémon dinámicamente.
// 5. Este diseño encapsula la lógica de transformación de datos, haciendo que sea reutilizable, modular y fácil de mantener en aplicaciones relacionadas con Pokémon.
