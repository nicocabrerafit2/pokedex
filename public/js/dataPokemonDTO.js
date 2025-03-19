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
