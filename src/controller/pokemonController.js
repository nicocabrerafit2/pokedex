const controller = {
  pokemonGet: (req, res) => {
    const pokemonesList = [
      { nombre: "picachu", id: 1 },
      { nombre: "alakazam", id: 2 },
    ];

    resultPokemon = pokemonesList.find((pokemon) => {
      return pokemon.id === Number(req.params.id);
    });

    if (resultPokemon !== undefined) {
      return res.render("pokemon", { resultPokemon });
    }
    return res.send("No se encontro ese pokemon");
  },
};

module.exports = controller;
