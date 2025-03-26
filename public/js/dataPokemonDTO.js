window.DataPokemonDTO = {
  dataPokemon: function (pokemon) {
    const { name, weight, height, types, sprites } = pokemon;

    return {
      Pokemon: name,
      Peso: weight / 10, 
      Altura: height * 10, 
      Tipo: types[0]?.type.name || "Desconocido", 
      Imagen: sprites?.front_default || "", 
    };
  },
};

// Este código define un objeto llamado 'DataPokemonDTO', que actúa como un adaptador para transformar los datos de un Pokémon obtenidos de la API y organizarlos en un formato específico:
// 1. 'dataPokemon' es una función dentro de 'DataPokemonDTO' que toma como argumento un objeto 'pokemon' con datos provenientes de la API.
// 2. Se utiliza la desestructuración para extraer propiedades específicas del objeto 'pokemon', como 'name', 'weight', 'height', 'types' y 'sprites'.
// 3. La función retorna un nuevo objeto con las siguientes propiedades:
//    a. 'Pokemon': el nombre del Pokémon.
//    b. 'Peso': el peso del Pokémon convertido a kilogramos (originalmente en hectogramos).
//    c. 'Altura': la altura del Pokémon convertida a centímetros (originalmente en decímetros).
//    d. 'Tipo': el nombre del primer tipo del Pokémon. Si no hay tipos disponibles, retorna "Desconocido".
//    e. 'Imagen': la URL de la imagen frontal del Pokémon. Si no hay imagen disponible, retorna una cadena vacía.
// 4. Este diseño facilita la interacción con los datos del Pokémon en la aplicación, al transformar y simplificar la estructura para cumplir con los requisitos visuales o funcionales esperados.
