const controller = {
  pokemonsShow: (req, res) => {
    const pokemons = [
      { name: "picachu", id: 1 },
      { name: "alakazam", id: 2 },
    ];

    searchPokemon = pokemons.find((pokemon) => {
      return pokemon.id === Number(req.params.id);
    });

    if (searchPokemon !== undefined) {
      return res.render("pokemon", { searchPokemon });
    }
    return res.send("No se encontro ese pokemon");
  },
};

export default controller;
