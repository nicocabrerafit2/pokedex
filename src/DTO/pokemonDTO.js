export default class dataPokemonDTO {
  static dataPokemon = (pokemon) => {
    return {
      Pokemon: pokemon.name,
      Peso: pokemon.weight / 10,
      Altura: pokemon.height * 10,
      Tipo: pokemon.types[0].type.name,
      Imagen: pokemon.sprites.front_default,
    };
  };
}
